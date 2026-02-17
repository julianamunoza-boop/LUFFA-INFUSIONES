
import React from 'react';
import { Language } from '../types';
import { PRODUCTS } from '../constants';

interface Props {
  lang: Language;
}

const Infusions: React.FC<Props> = ({ lang }) => {
  const infusions = PRODUCTS.filter(p => p.category === 'infusions');

  return (
    <div className="pb-32 bg-stone-50">
      <header className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=1920&auto=format&fit=crop" 
          className="absolute inset-0 w-full h-full object-cover brightness-[0.6] scale-110" 
        />
        <div className="absolute inset-0 bg-stone-900/20" />
        <div className="relative z-10 text-center px-6">
          <span className="text-gold text-xs font-bold uppercase tracking-[0.4em] mb-6 block">Dehydration Excellence</span>
          <h1 className="text-6xl md:text-9xl text-white font-bold mb-6 italic tracking-tighter leading-none">Magic Rituals</h1>
          <p className="text-stone-200 max-w-2xl mx-auto text-lg md:text-xl font-light italic">
            Preserving nature's physical and organoleptic secrets for the agile soul.
          </p>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center mb-40">
          <div className="space-y-10">
            <div className="inline-block border-b-2 border-gold pb-2">
              <h2 className="text-5xl font-bold italic text-stone-900">Magia Azul & Rosa</h2>
            </div>
            <p className="text-stone-600 text-lg leading-relaxed font-light">
              Our infusions are a mixologist's festival without the alcohol. Using Hibiscus and Butterfly Pea petals, 
              we've crafted beverages with their own vibrant colors. 
              <br/><br/>
              Each fruit and flower is dehydrated at precise temperatures based on its moisture content, 
              ensuring we never alter its nutritional contribution.
            </p>
            <div className="grid grid-cols-1 gap-8">
               <div className="flex gap-6 items-start">
                 <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg text-gold font-bold italic text-xl">240</div>
                 <div>
                   <h4 className="font-bold text-stone-900 uppercase tracking-widest text-xs mb-2">The Perfect Pour</h4>
                   <p className="text-sm text-stone-500 leading-relaxed italic">Add 240ml of hot water. In 3 minutes, witness the liquid transformation.</p>
                 </div>
               </div>
               <div className="flex gap-6 items-start">
                 <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg text-gold font-bold italic text-xl">✨</div>
                 <div>
                   <h4 className="font-bold text-stone-900 uppercase tracking-widest text-xs mb-2">Restorative Focus</h4>
                   <p className="text-sm text-stone-500 leading-relaxed italic">Restores the mood and concentration for your next great project.</p>
                 </div>
               </div>
            </div>
          </div>
          <div className="relative group">
             <div className="aspect-[4/5] bg-stone-200 rounded-[3rem] overflow-hidden shadow-2xl transition-transform duration-700 group-hover:-rotate-2">
               <img src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover" />
             </div>
             <div className="absolute -bottom-12 -right-12 bg-gold text-stone-900 p-12 rounded-[2.5rem] shadow-2xl max-w-sm border-4 border-white">
               <p className="text-lg font-bold italic leading-tight text-center">"Portable distinción in a sachet."</p>
             </div>
          </div>
        </div>

        {/* Ritual Contexts Grid */}
        <div className="text-center mb-20">
          <h3 className="text-4xl font-bold italic mb-4 text-stone-800 tracking-tight">Rituals of Choice</h3>
          <p className="text-stone-500 uppercase tracking-widest text-[10px] font-bold">Designed for your life's moments</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
           {[
             { title: 'The Traveler', mood: 'Agile & Distant', img: 'https://images.unsplash.com/photo-1524850011238-e3dff3565e43?q=80&w=400&fit=crop', text: 'In your bag, arriving at an airport or side-by-side with your PC.' },
             { title: 'The Reader', mood: 'Intimate & Calm', img: 'https://images.unsplash.com/photo-1491841573634-28140fc7ced7?q=80&w=400&fit=crop', text: 'Covered by a blanket, lost in a story of first kisses and love.' },
             { title: 'The Creator', mood: 'Sharp & Focused', img: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=400&fit=crop', text: 'The companion that restores focus for the mind that never stops.' },
             { title: 'The Shared', mood: 'Warm & Close', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&fit=crop', text: 'In the arms of a mother or sharing a snack orb with a partner.' },
           ].map((item, i) => (
             <div key={i} className="flex flex-col gap-6 group">
                <div className="aspect-square overflow-hidden rounded-[2.5rem] shadow-xl border border-stone-200">
                  <img src={item.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="px-4">
                  <span className="text-[10px] font-bold text-gold uppercase tracking-widest block mb-2">{item.mood}</span>
                  <h4 className="text-2xl font-bold italic mb-2">{item.title}</h4>
                  <p className="text-xs text-stone-500 leading-relaxed">{item.text}</p>
                </div>
             </div>
           ))}
        </div>
      </section>
    </div>
  );
};

export default Infusions;
