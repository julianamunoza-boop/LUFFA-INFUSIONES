
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
      {/* Hero Header */}
      <header className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1597481499750-3e6b22637e12?q=80&w=1920&auto=format&fit=crop" 
          className="absolute inset-0 w-full h-full object-cover brightness-[0.5] scale-105 animate-pulse-slow" 
          alt="Colombian Fruits"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-stone-50" />
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <span className="text-gold text-xs md:text-sm font-bold uppercase tracking-[0.4em] mb-8 block animate-in fade-in slide-in-from-bottom-4 duration-700">
            {lang === 'EN' ? 'Inspired by the Colombian Mountains' : 'Inspiradas en las Montañas de Colombia'}
          </span>
          <h1 className="text-5xl md:text-8xl text-white font-bold mb-10 italic tracking-tighter leading-none animate-in fade-in slide-in-from-bottom-6 duration-1000">
            {lang === 'EN' ? 'Warm Hands, Fresh Fruits' : 'Manos Cálidas, Frutos Frescos'}
          </h1>
          <p className="text-stone-200 max-w-3xl mx-auto text-lg md:text-2xl font-light italic leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000">
            {lang === 'EN' 
              ? 'Elaborated with high standards of dehydration to preserve the essence of the Andes.' 
              : 'Elaboradas con altos estándares de deshidratación para preservar la esencia de los Andes.'}
          </p>
        </div>
      </header>

      {/* Narrative Section */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center mb-40">
          <div className="space-y-12">
            <div className="inline-block border-b-2 border-gold pb-4">
              <h2 className="text-4xl md:text-5xl font-bold italic text-stone-900">
                {lang === 'EN' ? 'High-Standard Dehydration' : 'Altos Estándares de Deshidratación'}
              </h2>
            </div>
            <p className="text-stone-600 text-lg md:text-xl leading-relaxed font-light">
              {lang === 'EN'
                ? 'Our infusions are born in the mountains. We select fresh fruits at their peak ripeness. The warm hands of our artisans prepare each piece before it enters our specialized dehydration process. This high-standard technique preserves every nutrient, color, and aroma, delivering a cup full of life.'
                : 'Nuestras infusiones nacen en las montañas. Seleccionamos frutos frescos en su punto óptimo de maduración. Las manos cálidas de nuestras artesanas preparan cada pieza antes de entrar a nuestro proceso de deshidratación especializado. Esta técnica de alto estándar preserva cada nutriente, color y aroma, entregando una taza llena de vida.'}
            </p>
            
            <div className="grid grid-cols-1 gap-10">
               <div className="flex gap-6 items-start group">
                 <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl text-gold font-bold text-3xl group-hover:bg-gold group-hover:text-white transition-colors">🏔️</div>
                 <div>
                   <h4 className="font-bold text-stone-900 uppercase tracking-widest text-sm mb-2">
                     {lang === 'EN' ? 'Mountain Origin' : 'Origen de Montaña'}
                   </h4>
                   <p className="text-stone-500 leading-relaxed italic">
                     {lang === 'EN' ? 'Grown in the diverse thermal floors of Colombia.' : 'Cultivado en los diversos pisos térmicos de Colombia.'}
                   </p>
                 </div>
               </div>
               <div className="flex gap-6 items-start group">
                 <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl text-gold font-bold text-3xl group-hover:bg-gold group-hover:text-white transition-colors">🤲</div>
                 <div>
                   <h4 className="font-bold text-stone-900 uppercase tracking-widest text-sm mb-2">
                     {lang === 'EN' ? 'Warm Hands' : 'Manos Cálidas'}
                   </h4>
                   <p className="text-stone-500 leading-relaxed italic">
                     {lang === 'EN' ? 'Artisanal preparation with love and care.' : 'Preparación artesanal con amor y cuidado.'}
                   </p>
                 </div>
               </div>
            </div>
          </div>
          
          <div className="relative group">
             <div className="aspect-[4/5] bg-stone-200 rounded-[3rem] overflow-hidden shadow-2xl transition-transform duration-700 group-hover:rotate-2">
               {/* Updated image to juicy fruit slices as requested */}
               <img src="https://images.unsplash.com/photo-1589119908995-c6837fa14848?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover scale-110" alt="Fresh Juicy Fruit" />
             </div>
             <div className="absolute -bottom-12 -left-12 bg-gold text-stone-900 p-10 rounded-[2.5rem] shadow-2xl max-w-xs border-4 border-white">
               <p className="text-lg font-bold italic leading-tight text-center">
                 {lang === 'EN' ? '"Freshness captured in time."' : '"Frescura capturada en el tiempo."'}
               </p>
             </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="text-center mb-20">
          <h3 className="text-4xl font-bold italic mb-4 text-stone-800 tracking-tight">
            {lang === 'EN' ? 'The Collection' : 'La Colección'}
          </h3>
          <p className="text-stone-500 uppercase tracking-widest text-[10px] font-bold">
            {lang === 'EN' ? 'Pure Fruit & Flower Extracts' : 'Extractos Puros de Frutas y Flores'}
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-16">
           {infusions.map((product) => (
             <div 
               key={product.id} 
               className="group bg-white rounded-[3rem] overflow-hidden shadow-xl border border-stone-100 flex flex-col md:flex-row hover:shadow-2xl transition-all duration-500 cursor-pointer h-auto md:h-[600px]"
             >
                <div className="md:w-1/2 relative h-96 md:h-full overflow-hidden">
                  <img 
                    src={product.image} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                    alt={product.name[lang]} 
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                  
                  {/* ORO.A.ORO Brand Mark Overlay */}
                  <div className="absolute top-8 left-8 bg-black/40 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-lg">
                     <div className="text-center">
                       <span className="text-gold font-serif text-xl tracking-[0.2em] font-bold block leading-none drop-shadow-md">ORO</span>
                       <span className="text-white font-serif text-xs tracking-[0.4em] block leading-none mt-1 opacity-80">.A.</span>
                       <span className="text-gold font-serif text-xl tracking-[0.2em] font-bold block leading-none drop-shadow-md">ORO</span>
                     </div>
                  </div>
                </div>
                <div className="md:w-1/2 p-12 md:p-16 flex flex-col justify-center relative">
                  <span className="text-gold text-xs font-bold uppercase tracking-[0.3em] mb-6">Signature Infusion</span>
                  <h4 className="text-4xl md:text-5xl font-bold italic mb-8 text-stone-900 leading-tight group-hover:text-gold transition-colors duration-300">
                    {product.name[lang]}
                  </h4>
                  <p className="text-stone-600 text-lg leading-relaxed mb-10 font-light">
                    {product.description[lang]}
                  </p>
                  <div className="mt-auto flex items-center justify-between border-t border-stone-100 pt-8">
                    <p className="text-3xl font-bold text-stone-900">${product.price} CAD</p>
                    <span className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 group-hover:bg-gold group-hover:border-gold group-hover:text-white transition-all">
                      →
                    </span>
                  </div>
                </div>
             </div>
           ))}
        </div>
      </section>
    </div>
  );
};

export default Infusions;
