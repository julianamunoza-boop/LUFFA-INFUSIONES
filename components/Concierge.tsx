
import React, { useState, useRef, useEffect } from 'react';
import { SalesAdvisorService } from '../services/geminiService';
import { Language } from '../types';

interface Props {
  lang: Language;
}

export const Concierge: React.FC<Props> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const service = new SalesAdvisorService();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userText = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setLoading(true);

    const response = await service.getAdvice(userText, lang);
    setMessages(prev => [...prev, { role: 'bot', text: response || '' }]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="w-80 md:w-96 h-[500px] glass-card shadow-2xl rounded-3xl overflow-hidden flex flex-col animate-in slide-in-from-bottom duration-300">
          <div className="bg-stone-900 p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center text-xs">✨</div>
              <div>
                <p className="text-sm font-bold">Luxury Concierge</p>
                <p className="text-[10px] text-stone-400">@oro.a.oro Advisor</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-stone-400 hover:text-white">&times;</button>
          </div>
          <div className="flex-grow p-4 overflow-y-auto space-y-4 text-sm" ref={scrollRef}>
            <div className="bg-stone-100 p-3 rounded-2xl rounded-tl-none text-stone-700 italic">
              {lang === 'EN' ? 'Welcome. How can I assist your wellness ritual today?' : 'Bienvenue. Comment puis-je vous aider aujourd’hui ?'}
            </div>
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl ${m.role === 'user' ? 'bg-gold text-white rounded-tr-none' : 'bg-stone-100 text-stone-800 rounded-tl-none'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && <div className="text-xs text-stone-400 italic">Advisor is typing...</div>}
          </div>
          <div className="p-4 border-t bg-stone-50 flex gap-2">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask me anything..." 
              className="flex-grow bg-white border border-stone-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gold"
            />
            <button onClick={handleSend} className="w-10 h-10 bg-stone-900 text-white rounded-full flex items-center justify-center hover:bg-stone-800">
              →
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-stone-900 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 group"
        >
          <span className="text-gold text-xl group-hover:rotate-12 transition-transform">✨</span>
        </button>
      )}
    </div>
  );
};
