
import React from 'react';
import { Language } from '../types';

interface Props {
  lang: Language;
}

const B2B: React.FC<Props> = ({ lang }) => {
  return (
    <div className="min-h-screen bg-stone-100">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/2 p-12 md:p-20 flex flex-col justify-center">
            <span className="text-gold font-bold tracking-widest text-xs uppercase mb-6">Partnership Portal</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-8 italic leading-tight">Elevate Your Guest Experience</h1>
            <p className="text-stone-600 mb-10 text-lg leading-relaxed">
              We collaborate with luxury hotels, clinics, and spas in Canada and Colombia to provide custom wellness kits. 
              Our Luffa slippers can be embroidered with your brand, offering your clients a sustainable, handcrafted souvenir that respects their body.
            </p>
            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded bg-stone-800 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold">White Label & Co-Branding</h4>
                  <p className="text-sm text-stone-500">Elegant threads and seeds that tell a story of partnership.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded bg-stone-800 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold">Bulk Supply</h4>
                  <p className="text-sm text-stone-500">Scale your sustainability goals with chemical-free amenities.</p>
                </div>
              </div>
            </div>
            <button className="bg-stone-900 text-white px-10 py-4 rounded-full font-bold hover:bg-stone-800 transition-all self-start">
              Request a B2B Catalog
            </button>
          </div>
          <div className="md:w-1/2 relative min-h-[500px]">
            <img src="https://picsum.photos/seed/hotel/800/1000" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gold/10 mix-blend-multiply" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default B2B;
