import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, LiveServerMessage, Modality } from "@google/genai";
import { Language } from '../types';
import { float32ArrayToBase64, base64ToFloat32Array } from '../utils/audioUtils';

interface Props {
  lang: Language;
}

export const Concierge: React.FC<Props> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [volume, setVolume] = useState(0);
  const [error, setError] = useState<string | null>(null);

  // Audio Context Refs
  const inputAudioContextRef = useRef<AudioContext | null>(null);
  const outputAudioContextRef = useRef<AudioContext | null>(null);
  const inputSourceRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const processorRef = useRef<ScriptProcessorNode | null>(null);
  const nextStartTimeRef = useRef<number>(0);
  
  // Session Refs
  const sessionRef = useRef<Promise<any> | null>(null);
  const aiRef = useRef<GoogleGenAI | null>(null);

  useEffect(() => {
    // Initialize AI instance
    aiRef.current = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    
    return () => {
      disconnect();
    };
  }, []);

  const connect = async () => {
    if (!aiRef.current) return;
    setError(null);
    setIsActive(true);

    try {
      // Pre-check for API Key
      if (!process.env.API_KEY) {
         throw new Error("API Key not found");
      }

      // 1. Request Mic Permission FIRST
      console.log("Requesting microphone access...");
      
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error("Browser API not supported");
      }

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      console.log("Microphone access granted.");
      
      // 2. Setup Audio Contexts
      inputAudioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
      outputAudioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      nextStartTimeRef.current = outputAudioContextRef.current.currentTime;

      // 3. Setup Processing for Mic
      inputSourceRef.current = inputAudioContextRef.current.createMediaStreamSource(stream);
      // Use ScriptProcessor for raw PCM access (bufferSize, inputChannels, outputChannels)
      processorRef.current = inputAudioContextRef.current.createScriptProcessor(4096, 1, 1);

      processorRef.current.onaudioprocess = (e) => {
        const inputData = e.inputBuffer.getChannelData(0);
        
        // Simple volume visualization calculation
        let sum = 0;
        for (let i = 0; i < inputData.length; i++) {
          sum += Math.abs(inputData[i]);
        }
        setVolume(Math.min(100, (sum / inputData.length) * 5000));

        // Convert to PCM and send
        const base64Data = float32ArrayToBase64(inputData);
        
        if (sessionRef.current) {
            sessionRef.current.then(session => {
                session.sendRealtimeInput({
                    media: {
                        mimeType: "audio/pcm;rate=16000",
                        data: base64Data
                    }
                });
            });
        }
      };

      inputSourceRef.current.connect(processorRef.current);
      processorRef.current.connect(inputAudioContextRef.current.destination);

      // 4. Setup Config with Persona
      const config = {
        model: 'gemini-2.5-flash-native-audio-preview-12-2025',
        callbacks: {
          onopen: () => {
            console.log("Session opened");
          },
          onmessage: async (message: LiveServerMessage) => {
            handleServerMessage(message);
          },
          onclose: () => {
            console.log("Session closed");
            setIsActive(false);
            setVolume(0);
          },
          onerror: (e: any) => {
            console.error("Session error", e);
            setError("Connection lost.");
            setIsActive(false);
          }
        },
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Kore' } } // Kore is often softer/female
          },
          systemInstruction: `
            Eres 'Camila', la anfitriona de lujo de @oro.a.oro.
            
            PERSONALIDAD:
            - Eres una mujer colombiana de Antioquia (Paisa): muy amable, cálida, respetuosa y servicial.
            - Tu tono de voz es suave, elegante y acogedor.
            - Usas modismos colombianos sutiles y elegantes como: "Con mucho gusto", "Es un placer", "Qué dicha saludarle", "A la orden", "Su merced" (si aplica contexto de mucho respeto).
            
            OBJETIVOS DE LA CONVERSACIÓN:
            1. SIEMPRE inicia saludando calurosamente y preguntando genuinamente por el bienestar del usuario o sus proyectos actuales. (Ej: "¡Hola! Qué alegría saludarle hoy. ¿Cómo marchan sus proyectos?").
            2. Desea bienestar y tranquilidad activamente.
            3. Ponte al servicio para asesorar sobre:
               - Pantuflas de Luffa (Ergonomía, lujo, hechas a mano por mujeres).
               - Infusiones de frutas (Deshidratación de alto estándar, sabores exóticos colombianos).
               - Regalos corporativos y experiencias para Hoteles.
            
            IDIOMA:
            - Hablas principalmente español con acento colombiano.
            - Si el usuario te habla en inglés o francés, respondes fluidamente en ese idioma pero manteniendo tu calidez latina.
            
            NOTA IMPORTANTE:
            - Mantén las respuestas concisas pero afectuosas. No des discursos largos a menos que te pidan detalles técnicos.
          `
        }
      };

      // 5. Connect via SDK
      sessionRef.current = aiRef.current.live.connect(config);

    } catch (err: any) {
      console.error("Connection Error:", err);
      let errorMessage = "Could not connect.";
      
      if (err.name === "NotAllowedError" || err.message?.includes("Permission denied")) {
        errorMessage = "Microphone access denied. Please allow permission in your browser.";
      } else if (err.message === "Browser API not supported") {
        errorMessage = "Your browser does not support audio features.";
      } else if (err.message === "API Key not found") {
        errorMessage = "API Configuration Error.";
      }

      setError(errorMessage);
      setIsActive(false);
    }
  };

  const handleServerMessage = async (message: LiveServerMessage) => {
    const audioData = message.serverContent?.modelTurn?.parts?.[0]?.inlineData?.data;
    
    if (audioData && outputAudioContextRef.current) {
        const ctx = outputAudioContextRef.current;
        const float32Array = base64ToFloat32Array(audioData);
        
        // Create audio buffer (1 channel, length, 24kHz sample rate)
        const audioBuffer = ctx.createBuffer(1, float32Array.length, 24000);
        audioBuffer.getChannelData(0).set(float32Array);

        const source = ctx.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(ctx.destination);

        // Ensure gapless playback
        const now = ctx.currentTime;
        // Schedule next chunk at the end of the previous one, or immediately if we fell behind
        const startTime = Math.max(now, nextStartTimeRef.current);
        source.start(startTime);
        nextStartTimeRef.current = startTime + audioBuffer.duration;
    }
  };

  const disconnect = () => {
    if (processorRef.current) {
        processorRef.current.disconnect();
        processorRef.current.onaudioprocess = null;
    }
    if (inputSourceRef.current) {
        inputSourceRef.current.disconnect();
    }
    if (inputAudioContextRef.current && inputAudioContextRef.current.state !== 'closed') {
        inputAudioContextRef.current.close();
    }
    if (outputAudioContextRef.current && outputAudioContextRef.current.state !== 'closed') {
        outputAudioContextRef.current.close();
    }
    
    // There isn't an explicit "disconnect" on the session promise wrapper in typical usage examples 
    // without storing the raw WS, but setting active false updates UI.
    // The session is usually closed by refreshing or component unmounting in this simple demo.
    setIsActive(false);
    setVolume(0);
  };

  const toggleSession = () => {
    if (isActive) {
        disconnect();
    } else {
        setIsOpen(true);
        connect();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-4">
      
      {/* Visualizer Card */}
      {isOpen && (
        <div className="bg-stone-900 text-white p-6 rounded-[2rem] shadow-2xl w-80 mb-2 animate-in slide-in-from-bottom duration-500 border border-gold/20">
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h3 className="text-xl font-bold italic text-gold">Camila</h3>
                    <p className="text-[10px] uppercase tracking-widest text-stone-400">@oro.a.oro Concierge</p>
                </div>
                <button onClick={() => { disconnect(); setIsOpen(false); }} className="text-stone-500 hover:text-white transition-colors">
                    ✕
                </button>
            </div>

            <div className="h-24 flex items-center justify-center gap-1">
                {error ? (
                    <div className="text-red-400 text-xs text-center px-4 leading-relaxed font-semibold">{error}</div>
                ) : isActive ? (
                   <>
                     {/* Voice Bars Animation */}
                     {[...Array(5)].map((_, i) => (
                        <div 
                            key={i} 
                            className="w-3 bg-gold rounded-full transition-all duration-75"
                            style={{ 
                                height: `${Math.max(10, Math.random() * (volume * 2) + 10)}%`,
                                opacity: 0.8 
                            }}
                        />
                     ))}
                   </>
                ) : (
                    <div className="text-stone-500 text-sm italic">Connecting to Colombia...</div>
                )}
            </div>

            <div className="text-center mt-4">
                <p className="text-stone-400 text-xs italic">
                    "Estoy aquí para desearle bienestar y apoyar sus proyectos."
                </p>
            </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button 
        onClick={toggleSession}
        className={`w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 ${
            isActive ? 'bg-red-500 animate-pulse' : 'bg-stone-900'
        }`}
      >
        {isActive ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
        ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gold" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
                <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
            </svg>
        )}
      </button>
    </div>
  );
};