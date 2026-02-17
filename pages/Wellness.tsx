
import React from 'react';
import { Language } from '../types';
import { PRODUCTS } from '../constants';

interface Props {
  lang: Language;
}

const Wellness: React.FC<Props> = ({ lang }) => {
  const spaModel = PRODUCTS.find(p => p.id === 'chanclas-spa');
  const hotelModel = PRODUCTS.find(p => p.id === 'pantuflas-hotel');

  return (
    <div className="animate-in slide-in-from-bottom duration-500 pb-24 bg-stone-50">
      <header className="bg-stone-900 text-white py-24 px-6 text-center">
        <span className="text-gold text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">Handmade in Antioquia</span>
        <h1 className="text-5xl md:text-8xl font-bold mb-6 italic tracking-tighter">Wellness Footwear</h1>
        <p className="max-w-2xl mx-auto text-stone-400 text-xl font-light italic">
          {lang === 'EN' 
            ? 'Bridging ancestral embroidery techniques with international podiatry standards.'
            : 'Uniendo técnicas de bordado ancestral con estándares internacionales de podología.'}
        </p>
      </header>

      {/* Hero Showcase 1: SPA */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop" 
                className="absolute inset-0 w-full h-full object-cover brightness-75 transition-transform duration-1000 group-hover:scale-110" 
                alt="SPA Setting"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-10 left-10 text-white">
                <p className="text-[10px] uppercase tracking-widest font-bold text-gold mb-2">The Setting</p>
                <h3 className="text-4xl font-bold italic">Sanctuary SPA</h3>
              </div>
            </div>
            {/* Slipper cutout overlay or floating product image simulation */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white rounded-3xl shadow-2xl p-4 border border-stone-100 hidden md:block animate-float">
               <img src={spaModel?.image} className="w-full h-full object-cover rounded-2xl" alt="SPA Slipper Model" />
            </div>
          </div>
          
          <div className="space-y-8">
            <h2 className="text-5xl font-bold italic text-stone-900">{spaModel?.name[lang]}</h2>
            <p className="text-stone-600 text-lg leading-relaxed font-light">
              Cultivated in the mountains of Antioquia, the natural fiber of our Luffa slippers provides a delicate exfoliation that activates circulation during your relaxation journey. 
              <br/><br/>
              The open design is engineered for luxury SPAs, ensuring quick drying and ergonomic support on natural stone floors.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6">
              {spaModel?.features?.[lang].map((f, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gold" />
                  <span className="text-xs font-bold uppercase tracking-tight text-stone-500">{f}</span>
                </div>
              ))}
            </div>
            <div className="pt-8">
               <p className="text-4xl font-bold text-gold italic">${spaModel?.price} CAD</p>
               <button className="mt-6 bg-stone-900 text-white px-10 py-4 rounded-full uppercase text-xs font-bold tracking-widest hover:bg-gold hover:text-stone-900 transition-all shadow-lg">
                 Reserve Model
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Showcase 2: Luxury Room */}
      <section className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 space-y-8">
              <h2 className="text-5xl font-bold italic text-stone-900">{hotelModel?.name[lang]}</h2>
              <p className="text-stone-600 text-lg leading-relaxed font-light">
                For the Canadian winter mornings, our closed-toe mules offer warmth without sacrificing the breathability of natural Luffa. 
                <br/><br/>
                Every mold is hand-cut with precision to guarantee international sizing, featuring braided hemp straps and seed-based patterns that define the elegance of @oro.a.oro.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                {hotelModel?.features?.[lang].map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gold" />
                    <span className="text-xs font-bold uppercase tracking-tight text-stone-500">{f}</span>
                  </div>
                ))}
              </div>
              <div className="pt-8">
                <p className="text-4xl font-bold text-gold italic">${hotelModel?.price} CAD</p>
                <button className="mt-6 border-2 border-stone-900 text-stone-900 px-10 py-4 rounded-full uppercase text-xs font-bold tracking-widest hover:bg-stone-900 hover:text-white transition-all shadow-lg">
                  Request B2B Sample
                </button>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative group">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative">
                <img 
                  src="https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=1200&auto=format&fit=crop" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  alt="Luxury Bedroom"
                />
                <div className="absolute inset-0 bg-stone-900/10 mix-blend-multiply" />
                <div className="absolute top-10 right-10 text-right">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-gold mb-2">The Suite</p>
                  <h3 className="text-4xl font-bold text-white italic">Penthouse Suite</h3>
                </div>
              </div>
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-stone-50 rounded-3xl shadow-2xl p-4 border border-stone-200 hidden md:block">
                 <img src={hotelModel?.image} className="w-full h-full object-cover rounded-2xl" alt="Hotel Slipper Model" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Podiatry Specs */}
      <section className="py-24 max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold italic mb-8">Technical Distinción</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="p-8 glass-card rounded-3xl">
            <h4 className="font-bold mb-2">Podiatry Alturas</h4>
            <p className="text-xs text-stone-500 italic">Scientific sole heights ensuring correct spinal alignment during rest.</p>
          </div>
          <div className="p-8 glass-card rounded-3xl">
            <h4 className="font-bold mb-2">Ancestral Stitch</h4>
            <p className="text-xs text-stone-500 italic">Hand-interlaced hemp and natural threads for maximum durability.</p>
          </div>
          <div className="p-8 glass-card rounded-3xl">
            <h4 className="font-bold mb-2">Plantable Packaging</h4>
            <p className="text-xs text-stone-500 italic">Wrapped in seed-paper that blooms after your footwear arrives.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Wellness;
