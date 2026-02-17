
import { Product, ArtisanStory } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'chanclas-spa',
    category: 'footwear',
    name: {
      EN: 'Luxury SPA Luffa Slippers',
      FR: 'Chanclas de Spa en Luffa de Luxe',
      ES: 'Chanclas de Lujo para SPA'
    },
    description: {
      EN: 'Open-toe design for maximum breathability. Ideal for humid environments like high-end SPAs. Hand-embroidered floral details.',
      FR: 'Design ouvert pour une respirabilité maximale. Idéal pour les spas. Détails floraux brodés à la main.',
      ES: 'Diseño abierto para máxima transpirabilidad. Ideales para ambientes húmedos en SPAs de alto nivel. Bordado floral artesanal.'
    },
    price: 85,
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=800&auto=format&fit=crop', // Elegant slippers on stone/spa setting
    features: {
      EN: ['Quick-dry Luffa', 'Non-slip hemp sole', 'Anatomic support', 'Biodegradable'],
      FR: ['Luffa à séchage rapide', 'Semelle en chanvre antidérapante', 'Support anatomique', 'Biodégradable'],
      ES: ['Luffa de secado rápido', 'Suela de cáñamo antideslizante', 'Soporte anatómico', 'Biodegradable']
    }
  },
  {
    id: 'pantuflas-hotel',
    category: 'footwear',
    name: {
      EN: 'Luxury Suite Room Mules',
      FR: 'Mules de Chambre de Luxe',
      ES: 'Pantuflas de Habitación Luxury'
    },
    description: {
      EN: 'Closed-toe warmth with ergonomic podiatry standards. Designed for cold Canadian mornings in a luxury suite.',
      FR: 'Chaleur et confort selon les normes podologiques. Conçu pour les suites de luxe.',
      ES: 'Calidez y confort con estándares ergonómicos de podología. Diseñadas para mañanas canadienses en una suite de lujo.'
    },
    price: 95,
    image: 'https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?q=80&w=800&auto=format&fit=crop', // Luxurious bedroom slipper vibe
    features: {
      EN: ['Ergonomic height', 'Hand-woven braided straps', 'Seed-paper box', 'Podiatry approved'],
      FR: ['Hauteur ergonomique', 'Tissage artisanal', 'Boîte papier graine', 'Approuvé podologie'],
      ES: ['Altura ergonómica', 'Tejido trenzado a mano', 'Caja de papel semilla', 'Aval podológico']
    }
  },
  {
    id: 'infusion-magia-azul',
    category: 'infusions',
    name: {
      EN: 'Blue Magic: Butterfly Pea Ritual',
      FR: 'Magie Bleue : Rituel de Clitoria',
      ES: 'Infusión Magia Azul: Pétalos de Mariposa'
    },
    description: {
      EN: 'Witness a brilliant festival of colors. High-standard dehydration preserves every nutritional value.',
      FR: 'Vivez un festival de couleurs brillantes. Une déshydratation de haut niveau préserve les valeurs nutritionnelles.',
      ES: 'Un festival de colores brillantes. Deshidratación de alta calidad que mantiene las características nutricionales y organolépticas.'
    },
    price: 35,
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'infusion-magia-roja',
    category: 'infusions',
    name: {
      EN: 'Red Magic: Hibiscus & Fruit',
      FR: 'Magie Rouge : Hibiscus et Fruits',
      ES: 'Infusión Magia Roja: Hibiscus y Frutas'
    },
    description: {
      EN: 'A vibrant blend of hibiscus flowers and real fruit chunks. Add hot water to release the red magic.',
      FR: 'Un mélange vibrant de fleurs d\'hibiscus et de morceaux de vrais fruits.',
      ES: 'Una vibrante mezcla de flor de hibiscus y trozos de fruta real. Agrega agua caliente para liberar la magia roja.'
    },
    price: 35,
    image: 'https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'bolas-de-oro',
    category: 'snacks',
    name: {
      EN: 'Golden Orbs: Tropical Cacao Snacks',
      FR: 'Orbes Dorées : Cacao Tropical',
      ES: 'Snack Bolas de Oro: Cacao y Frutos'
    },
    description: {
      EN: 'A bite of pure tropical fruit and cacao. No preservatives. The perfect ritual for yoga or ballet.',
      FR: 'Une bouchée de pur fruit tropical et cacao. Sans conservateurs.',
      ES: 'Un mordisco de pura fruta tropical y cacao. Sin preservativos.'
    },
    price: 28,
    image: 'https://images.unsplash.com/photo-1548907040-4baa42d10919?q=80&w=800&auto=format&fit=crop'
  }
];

export const ARTISANS: ArtisanStory[] = [
  {
    id: 'artisan-1',
    name: 'Maria Elena',
    location: 'Antioquia Mountains',
    bio: {
      EN: 'Dignifying the artisanal labor of Colombian women, from the cultivation of Luffa to the precise hand-embroidery of every slipper.',
      FR: 'Dignifier le travail artisanal des femmes colombiennes, de la culture du Luffa à la broderie main précise.',
      ES: 'Dignificando la labor artesanal de la mujer colombiana, desde el cultivo de la Luffa hasta el bordado preciso de cada plantilla.'
    },
    image: 'https://images.unsplash.com/photo-1489426411174-7dfdcd2573d2?q=80&w=800&auto=format&fit=crop'
  }
];

export const UI_STRINGS = {
  hero_title: {
    EN: 'Handcrafted Wellness: Colombian Soul, Canadian Style',
    FR: 'Bien-être Artisanal : Âme Colombienne, Style Canadien',
    ES: 'Bienestar Artesanal: Alma de Colombia, Estilo de Canadá'
  },
  hero_subtitle: {
    EN: 'Low calories, high distinction. Transform your moments into rituals of gold.',
    FR: 'Peu de calories, haute distinction. Transformez vos moments en rituels d\'or.',
    ES: 'Calorías vacías eliminadas. Transforma tus momentos en rituels de oro.'
  },
  b2b_title: {
    EN: 'Exclusive Partners for Luxury Hotels & Spas',
    FR: 'Partenaires Exclusifs pour Hôtels de Luxe et Spas',
    ES: 'Aliados Exclusivos para Hoteles de Lujo y Spas'
  }
};
