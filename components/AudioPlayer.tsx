
import React, { useState, useRef } from 'react';

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.log("User interaction required for audio"));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-[100] flex items-center gap-3 glass-card px-4 py-2 rounded-full shadow-lg border border-gold/30">
      <audio 
        ref={audioRef} 
        loop 
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" // Placeholder for Colombian Orchestral Music
      />
      <button 
        onClick={togglePlay}
        className="w-10 h-10 bg-stone-900 text-gold rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-md"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
        )}
      </button>
      <div className="flex flex-col">
        <span className="text-[10px] font-bold uppercase tracking-widest text-stone-500">Music</span>
        <span className="text-xs font-semibold text-stone-800 italic">Colombia Orquestada</span>
      </div>
    </div>
  );
};
