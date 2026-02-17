
import React from 'react';
import { Language } from '../types';
import { ARTISANS } from '../constants';

interface Props {
  lang: Language;
}

const Impact: React.FC<Props> = ({ lang }) => {
  return (
    <div className="pb-24">
      <section className="bg-stone-900 text-white py-24 px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 italic">Social Soul</h1>
        <p className="max-w-2xl mx-auto text-stone-400 text-xl font-light">
          Every Oro a Oro product dignifies the work of Colombian women who are the pillars of their households.
        </p>
      </section>

      <div className="max-w-6xl mx-auto px-6 mt-[-60px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {ARTISANS.map(artisan => (
             <div key={artisan.id} className="bg-white rounded-3xl overflow-hidden shadow-xl flex flex-col md:flex-row">
                <div className="md:w-1/2 aspect-[4/5]">
                  <img src={artisan.image} className="w-full h-full object-cover" />
                </div>
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <span className="text-gold font-bold text-xs uppercase mb-2">{artisan.location}</span>
                  <h3 className="text-2xl font-bold mb-4 italic">{artisan.name}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed italic">
                    "{artisan.bio[lang]}"
                  </p>
                  <div className="mt-8 border-t pt-6 border-stone-100">
                    <p className="text-[10px] uppercase tracking-widest font-bold text-stone-400 mb-2">Impact Goal</p>
                    <p className="text-xs text-stone-500">Fair trade and education for the children of the mountains.</p>
                  </div>
                </div>
             </div>
           ))}
        </div>
      </div>

      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 italic">The Cycle of Life</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
           <div className="space-y-4">
              <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto text-2xl">🌱</div>
              <h4 className="font-bold">Cultivation</h4>
              <p className="text-xs text-stone-500">Sustainable planting in diverse climate zones.</p>
           </div>
           <div className="space-y-4">
              <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto text-2xl">🧶</div>
              <h4 className="font-bold">Embroidery</h4>
              <p className="text-xs text-stone-500">Ancestral techniques with a podiatric eye.</p>
           </div>
           <div className="space-y-4">
              <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto text-2xl">♻️</div>
              <h4 className="font-bold">Regeneration</h4>
              <p className="text-xs text-stone-500">Packaging that blooms into flowers after use.</p>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;
