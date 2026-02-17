
import React from 'react';
import { LanguageSwitcher } from './LanguageSwitcher';
import { AudioPlayer } from './AudioPlayer';
import { Language } from '../types';
import { Link } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
  lang: Language;
  setLang: (lang: Language) => void;
}

export const Layout: React.FC<Props> = ({ children, lang, setLang }) => {
  const navItems = {
    EN: ['Infusions', 'Wellness', 'Impact', 'B2B'],
    FR: ['Infusions', 'Bien-être', 'Impact', 'B2B'],
    ES: ['Infusiones', 'Bienestar', 'Impacto', 'B2B']
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <nav className="sticky top-0 z-50 glass-card px-6 py-4 flex items-center justify-between shadow-sm">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center text-white font-bold group-hover:rotate-12 transition-transform italic">O</div>
          <span className="text-2xl font-bold tracking-tighter">
            oro<span className="text-gold">.a.</span>oro
          </span>
        </Link>
        <div className="hidden md:flex gap-8 items-center">
          {navItems[lang].map((item, idx) => (
            <Link 
              key={item} 
              to={`/${['infusions', 'wellness', 'impact', 'b2b'][idx]}`}
              className="text-xs font-bold uppercase tracking-widest hover:text-gold transition-colors"
            >
              {item}
            </Link>
          ))}
          <LanguageSwitcher current={lang} onSet={setLang} />
        </div>
      </nav>
      
      <main className="flex-grow">{children}</main>
      
      <AudioPlayer />
      
      <footer className="bg-stone-950 text-stone-400 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-bold mb-4 text-xl italic tracking-tighter">@oro.a.oro</h4>
            <p className="text-xs leading-relaxed max-w-xs">
              Transforming Colombian fruit into wellness cocktails and Luffa into luxury ergonomics.
            </p>
          </div>
          <div>
            <h5 className="text-white text-[10px] font-bold uppercase tracking-widest mb-6">Explore</h5>
            <div className="flex flex-col gap-3 text-sm">
              <Link to="/infusions" className="hover:text-gold transition-colors">Magic Infusions</Link>
              <Link to="/wellness" className="hover:text-gold transition-colors">Luffa Spa Line</Link>
              <Link to="/b2b" className="hover:text-gold transition-colors">B2B Opportunities</Link>
            </div>
          </div>
          <div>
            <h5 className="text-white text-[10px] font-bold uppercase tracking-widest mb-6">Contact</h5>
            <p className="text-sm">sales@oroaoro.com</p>
            <p className="text-xs mt-2 italic text-stone-500 underline decoration-gold">Available for Luxury Hotels in Canada</p>
          </div>
          <div className="flex flex-col items-center md:items-start">
             <h5 className="text-white text-[10px] font-bold uppercase tracking-widest mb-6">Social Rituals</h5>
             <div className="flex gap-6">
               <span className="hover:text-gold cursor-pointer transition-colors text-sm uppercase font-bold">IG</span>
               <span className="hover:text-gold cursor-pointer transition-colors text-sm uppercase font-bold">LI</span>
             </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-stone-800 text-center text-[10px] uppercase tracking-widest">
          © {new Date().getFullYear()} @oro.a.oro - Sostenibilidad, Lujo & Bienestar
        </div>
      </footer>
    </div>
  );
};
