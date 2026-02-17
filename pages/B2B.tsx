
import React, { useState } from 'react';
import { Language } from '../types';

interface Props {
  lang: Language;
}

const B2B: React.FC<Props> = ({ lang }) => {
  const [formState, setFormState] = useState({
    hotelName: '',
    contactName: '',
    email: '',
    phone: '',
    businessType: '',
    quantity: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(lang === 'ES' ? 'Gracias. Un asesor le contactará pronto.' : 'Thank you. An advisor will contact you shortly.');
  };

  const TEXT = {
    heroTitle: {
      EN: 'The Golden Alliance',
      FR: 'L\'Alliance Dorée',
      ES: 'La Alianza Dorada'
    },
    heroDesc: {
      EN: 'Customize every pair with your brand colors. The golden thread of ORO.A.ORO intertwines with your corporate identity to create an unforgettable guest experience.',
      FR: 'Personnalisez chaque paire aux couleurs de votre marque. Le fil d\'or d\'ORO.A.ORO s\'entrelace avec votre identité pour créer une expérience inoubliable.',
      ES: 'Personalice cada par con los colores de su marca. El hilo dorado de ORO.A.ORO se entrelaza con su identidad corporativa para crear una experiencia de huésped inolvidable.'
    },
    features: [
      {
        title: { EN: 'Total Customization', FR: 'Personnalisation Totale', ES: 'Personalización Total' },
        desc: { 
          EN: 'Choose the secondary thread color to match your hotel or spa identity.',
          FR: 'Choisissez la couleur du fil secondaire pour correspondre à l\'identité de votre hôtel.',
          ES: 'Elija el color del hilo secundario para que coincida con la identidad de su hotel o spa.'
        }
      },
      {
        title: { EN: 'Branded Packaging', FR: 'Emballage de Marque', ES: 'Empaque Branded' },
        desc: {
          EN: 'Jute bags with your logo engraved and plantable seed paper with local seeds.',
          FR: 'Sacs en jute avec votre logo gravé et papier ensemencé plantable.',
          ES: 'Bolsas de yute con su logo grabado y papel semilla plantable con semillas locales.'
        }
      },
      {
        title: { EN: 'Sustainable Story', FR: 'Histoire Durable', ES: 'Historia Sostenible' },
        desc: {
          EN: 'We provide information cards for your guests about the artisanal origin of the product.',
          FR: 'Nous fournissons des cartes d\'information sur l\'origine artisanale du produit.',
          ES: 'Entregamos tarjetas informativas para sus huéspedes sobre el origen artesanal del producto.'
        }
      },
      {
        title: { EN: 'Flexible Orders', FR: 'Commandes Flexibles', ES: 'Pedidos Flexibles' },
        desc: {
          EN: 'From 100 pairs. Scheduled deliveries according to your establishment\'s occupancy.',
          FR: 'À partir de 100 paires. Livraisons programmées selon l\'occupation.',
          ES: 'Desde 100 pares. Entregas programadas según la ocupación de su establecimiento.'
        }
      }
    ],
    zeroWaste: {
      title: { EN: 'Zero Waste Experience', FR: 'Expérience Zéro Déchet', ES: 'Experiencia Cero Residuos' },
      subtitle: { EN: 'Packaging that Blooms', FR: 'Un Emballage qui Fleurit', ES: 'Un Empaque que Florece' },
      desc: {
        EN: 'Every slipper comes wrapped in artisanal seed paper, embedded with native wildflowers. By planting it, your guest participates in ecological regeneration. The natural jute bag with pyrography logo becomes a reusable accessory—a tangible memory of your sustainable experience.',
        FR: 'Chaque pantoufle est enveloppée dans du papier artisanal incrusté de graines de fleurs sauvages. Le sac en jute naturel devient un accessoire réutilisable.',
        ES: 'Cada pantufla viene envuelta en papel semilla artesanal, incrustado con semillas de flores silvestres nativas de Colombia. Al plantarlo, su huésped participa en la regeneración ecológica. La bolsa de yute natural con logo pirograbado se convierte en un accesorio reutilizable—un recuerdo tangible de la experiencia sostenible de su establecimiento.'
      }
    },
    form: {
      title: { EN: 'Request B2B Information', FR: 'Demander des Infos B2B', ES: 'Solicite Información B2B' },
      subtitle: { EN: 'Fill the form and an advisor will contact you.', FR: 'Remplissez le formulaire et un conseiller vous contactera.', ES: 'Complete el formulario y un asesor se pondrá en contacto con usted.' },
      fields: {
        hotel: { EN: 'Hotel/Spa Name', FR: 'Nom de l\'Hôtel/Spa', ES: 'Nombre del Hotel/Spa' },
        contact: { EN: 'Contact Name', FR: 'Nom du Contact', ES: 'Nombre de Contacto' },
        email: { EN: 'Corporate Email', FR: 'Email Corporatif', ES: 'Email Corporativo' },
        phone: { EN: 'Phone', FR: 'Téléphone', ES: 'Teléfono' },
        type: { EN: 'Business Type', FR: 'Type d\'Entreprise', ES: 'Tipo de Negocio' },
        qty: { EN: 'Est. Monthly Quantity', FR: 'Quantité Mensuelle Est.', ES: 'Cantidad Estimada Mensual' },
        msg: { EN: 'Message / Special Requirements', FR: 'Message / Besoins Spéciaux', ES: 'Mensaje / Requerimientos Especiales' },
        placeholderMsg: { 
          EN: 'Tell us about your customization needs, corporate colors, expected volume, etc.',
          FR: 'Parlez-nous de vos besoins de personnalisation, couleurs, volume, etc.',
          ES: 'Cuéntenos sobre sus necesidades de personalización, colores corporativos, volumen esperado, etc.'
        }
      },
      submit: { EN: 'Request B2B Info', FR: 'Demander Info', ES: 'Solicitar Información B2B' },
      disclaimer: { EN: '* Required fields. Privacy policy applies.', FR: '* Champs requis. Politique de confidentialité.', ES: '* Campos obligatorios. Sus datos serán tratados de acuerdo a nuestra política de privacidad.' }
    }
  };

  return (
    <div className="bg-stone-50 min-h-screen">
      
      {/* SECTION 1: La Alianza Dorada */}
      <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
          <div className="space-y-8 animate-in slide-in-from-left duration-700">
            <span className="text-gold font-bold tracking-[0.3em] text-xs uppercase block">B2B Partnership</span>
            <h1 className="text-5xl md:text-7xl font-bold italic text-stone-900 leading-tight">
              {TEXT.heroTitle[lang]}
            </h1>
            <p className="text-xl text-stone-600 font-light leading-relaxed">
              {TEXT.heroDesc[lang]}
            </p>
            <div className="h-1 w-32 bg-gold mt-8" />
          </div>
          <div className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl animate-in slide-in-from-right duration-700 delay-200">
             <img 
               src="https://images.unsplash.com/photo-1628256226466-4171630c1110?q=80&w=800&auto=format&fit=crop" 
               className="absolute inset-0 w-full h-full object-cover" 
               alt="Gold Thread Detail" 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-10">
               <p className="text-white font-bold italic text-lg">
                 {lang === 'EN' ? 'Detail: Custom Gold Thread' : 'Detalle: Hilo Dorado y Color Corporativo'}
               </p>
             </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEXT.features.map((feature, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-lg border border-stone-100 hover:border-gold/50 transition-colors group">
              <div className="w-12 h-12 bg-stone-900 rounded-full flex items-center justify-center text-gold text-xl mb-6 group-hover:bg-gold group-hover:text-white transition-colors">
                {idx + 1}
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-4 italic">{feature.title[lang]}</h3>
              <p className="text-sm text-stone-500 leading-relaxed">
                {feature.desc[lang]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: Zero Waste Experience */}
      <section className="bg-stone-900 text-white py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
               <div className="grid grid-cols-2 gap-6">
                  {['🌱', '♻️', '🎋', '🌸'].map((icon, i) => {
                    const labels = {
                       EN: ['Plantable Paper', '100% Compostable', 'Reusable Jute', 'Native Seeds'],
                       ES: ['Papel Semilla Plantable', '100% Compostable', 'Bolsa de Yute Reusable', 'Semillas Nativas'],
                       FR: ['Papier Plantable', '100% Compostable', 'Sac en Jute', 'Graines Natives']
                    };
                    return (
                      <div key={i} className="bg-stone-800/50 p-6 rounded-2xl text-center backdrop-blur-sm border border-stone-700">
                        <div className="text-4xl mb-3">{icon}</div>
                        <p className="text-xs uppercase tracking-widest font-bold text-gold">
                           {labels[lang][i]}
                        </p>
                      </div>
                    );
                  })}
               </div>
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <span className="text-gold font-bold tracking-[0.3em] text-xs uppercase block">{TEXT.zeroWaste.title[lang]}</span>
              <h2 className="text-5xl md:text-6xl font-bold italic leading-tight">{TEXT.zeroWaste.subtitle[lang]}</h2>
              <p className="text-lg text-stone-400 font-light leading-relaxed">
                {TEXT.zeroWaste.desc[lang]}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Form */}
      <section className="max-w-4xl mx-auto px-6 py-32">
        <div className="bg-white rounded-[3rem] shadow-2xl p-8 md:p-16 border border-stone-100">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold italic text-stone-900 mb-4">{TEXT.form.title[lang]}</h2>
            <p className="text-stone-500">{TEXT.form.subtitle[lang]}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-stone-900">{TEXT.form.fields.hotel[lang]} *</label>
                <input 
                  required
                  placeholder="Grand Hotel & Spa"
                  className="w-full bg-stone-50 border-b-2 border-stone-200 p-4 focus:outline-none focus:border-gold transition-colors"
                  value={formState.hotelName}
                  onChange={e => setFormState({...formState, hotelName: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-stone-900">{TEXT.form.fields.contact[lang]} *</label>
                <input 
                  required
                  placeholder="Maria Garcia"
                  className="w-full bg-stone-50 border-b-2 border-stone-200 p-4 focus:outline-none focus:border-gold transition-colors"
                  value={formState.contactName}
                  onChange={e => setFormState({...formState, contactName: e.target.value})}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-stone-900">{TEXT.form.fields.email[lang]} *</label>
                <input 
                  required
                  type="email"
                  placeholder="contact@hotel.com"
                  className="w-full bg-stone-50 border-b-2 border-stone-200 p-4 focus:outline-none focus:border-gold transition-colors"
                  value={formState.email}
                  onChange={e => setFormState({...formState, email: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-stone-900">{TEXT.form.fields.phone[lang]} *</label>
                <input 
                  required
                  type="tel"
                  placeholder="+57 (4) 123 4567"
                  className="w-full bg-stone-50 border-b-2 border-stone-200 p-4 focus:outline-none focus:border-gold transition-colors"
                  value={formState.phone}
                  onChange={e => setFormState({...formState, phone: e.target.value})}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-stone-900">{TEXT.form.fields.type[lang]} *</label>
                <select 
                  className="w-full bg-stone-50 border-b-2 border-stone-200 p-4 focus:outline-none focus:border-gold transition-colors text-stone-600"
                  value={formState.businessType}
                  onChange={e => setFormState({...formState, businessType: e.target.value})}
                >
                  <option value="">Select...</option>
                  <option value="Hotel">Hotel</option>
                  <option value="Spa">Spa</option>
                  <option value="Resort">Resort</option>
                  <option value="Clinic">Clinic</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-stone-900">{TEXT.form.fields.qty[lang]} *</label>
                <select 
                  className="w-full bg-stone-50 border-b-2 border-stone-200 p-4 focus:outline-none focus:border-gold transition-colors text-stone-600"
                  value={formState.quantity}
                  onChange={e => setFormState({...formState, quantity: e.target.value})}
                >
                   <option value="">Select...</option>
                   <option value="100-500">100 - 500</option>
                   <option value="500-1000">500 - 1000</option>
                   <option value="1000+">1000+</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-stone-900">{TEXT.form.fields.msg[lang]} *</label>
              <textarea 
                required
                rows={4}
                placeholder={TEXT.form.fields.placeholderMsg[lang]}
                className="w-full bg-stone-50 border-b-2 border-stone-200 p-4 focus:outline-none focus:border-gold transition-colors resize-none"
                value={formState.message}
                onChange={e => setFormState({...formState, message: e.target.value})}
              />
            </div>

            <div className="pt-8 text-center">
              <button type="submit" className="bg-stone-900 text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-gold hover:text-stone-900 transition-all shadow-xl transform hover:-translate-y-1">
                {TEXT.form.submit[lang]}
              </button>
              <p className="text-[10px] text-stone-400 mt-4 italic">
                {TEXT.form.disclaimer[lang]}
              </p>
            </div>

          </form>
        </div>
      </section>

    </div>
  );
};

export default B2B;
