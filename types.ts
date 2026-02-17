
export type Language = 'EN' | 'FR' | 'ES';

export interface Product {
  id: string;
  category: 'infusions' | 'footwear' | 'snacks' | 'spa';
  name: Record<Language, string>;
  description: Record<Language, string>;
  price: number;
  image: string;
  features?: Record<Language, string[]>;
}

export interface ArtisanStory {
  id: string;
  name: string;
  location: string;
  bio: Record<Language, string>;
  image: string;
}
