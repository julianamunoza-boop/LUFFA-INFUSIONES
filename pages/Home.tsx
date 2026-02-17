
import React from 'react';
import { Language } from '../types';
import { UI_STRINGS } from '../constants';
import { Link } from 'react-router-dom';

interface Props {
  lang: Language;
}

const Home: React.FC<Props> = ({ lang }) => {
  return (
    <div className="animate-in fade-in duration-700 bg-stone-50">
      {/* Hero Section */}
      <section className="relative h-[90vh] overflow-hidden flex items-center justify-center">
        <img 
          src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=1920&auto=format&fit=crop" 
          className="absolute inset-0 w-full h-full object-cover brightness-75 scale-105 animate-pulse-slow"
          alt="Artisanal Ritual"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 via-transparent to-stone-50" />
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <span className="text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">@oro.a.oro Inspiration</span>
          <h1 className="text-5xl md:text-8xl text-white font-bold mb-8 italic drop-shadow-2xl leading-[0.9]">
            {UI_STRINGS.hero_title[lang]}
          </h1>
          <p className="text-xl md:text-3xl text-stone-100 mb-12 font-light italic max-w-3xl mx-auto drop-shadow-md">
            "{UI_STRINGS.hero_subtitle[lang]}"
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/infusions" className="bg-gold text-stone-900 px-10 py-4 rounded-full hover:bg-white transition-all font-bold uppercase text-xs tracking-widest shadow-xl">
              {lang === 'EN' ? 'Tea Rituals' : 'Rituales de Té'}
            </Link>
            <Link to="/wellness" className="bg-stone-900 text-gold px-10 py-4 rounded-full hover:bg-stone-800 transition-all font-bold uppercase text-xs tracking-widest shadow-xl">
              {lang === 'EN' ? 'Luffa Luxury' : 'Lujo en Luffa'}
            </Link>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-bold italic mb-6">Our Golden Portfolio</h2>
          <div className="w-24 h-1 bg-gold mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Cube 1: Infusions */}
          <Link to="/infusions" className="group relative aspect-[3/4] overflow-hidden rounded-[2rem] shadow-2xl border border-stone-200">
            <img src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-transparent to-transparent p-10 flex flex-col justify-end">
              <h3 className="text-white text-3xl font-bold mb-3 italic">Magic Blue & Pink</h3>
              <p className="text-stone-300 text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 uppercase tracking-widest font-bold">
                Butterfly Pea & Hibiscus
              </p>
            </div>
          </Link>

          {/* Cube 2: Luffa Footwear */}
          <Link to="/wellness" className="group relative aspect-[3/4] overflow-hidden rounded-[2rem] shadow-2xl border border-stone-200 mt-12 md:mt-0">
            <img src="https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-gold/90 via-transparent to-transparent p-10 flex flex-col justify-end">
              <h3 className="text-white text-3xl font-bold mb-3 italic">Ergonomic Luxury</h3>
              <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 uppercase tracking-widest font-bold">
                Artisanal Luffa Slippers
              </p>
            </div>
          </Link>

          {/* Cube 3: Snacks */}
          <Link to="/snacks" className="group relative aspect-[3/4] overflow-hidden rounded-[2rem] shadow-2xl border border-stone-200">
             <img src="https://images.unsplash.com/photo-1548907040-4baa42d10919?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
             <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-transparent to-transparent p-10 flex flex-col justify-end">
              <h3 className="text-white text-3xl font-bold mb-3 italic">Bolas de Oro</h3>
              <p className="text-stone-300 text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 uppercase tracking-widest font-bold">
                Cacao & Fruit Energy
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* Social Impact / Poetic Statement */}
      <section className="bg-stone-900 text-white py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-7xl font-bold mb-12 italic leading-tight">
            "Hago lo mejor por ti para que te sientas lo mejor."
          </h2>
          <p className="text-lg md:text-2xl text-stone-400 font-light leading-relaxed mb-16 italic">
            Oro a Oro was born from the desire to transform tropical Colombian crops into high-vibration wellness products. 
            From the mountains of Antioquia, our artisans hand-embroidery hemp onto precision-cut Luffa, creating footwear 
            that dignifies labor and restores concentration.
          </p>
          <div className="flex justify-center gap-12 border-y border-stone-800 py-12">
            <div className="text-center">
              <span className="block text-3xl font-bold text-gold mb-1 italic">0%</span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-500">Chemicals</span>
            </div>
            <div className="text-center">
              <span className="block text-3xl font-bold text-gold mb-1 italic">100%</span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-500">Handmade</span>
            </div>
            <div className="text-center">
              <span className="block text-3xl font-bold text-gold mb-1 italic">Eco</span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-500">Seed Paper</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
