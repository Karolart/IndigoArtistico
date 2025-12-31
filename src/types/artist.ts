export type Category =
  | 'Music'
  | 'Circus'
  | 'Dance'
  | 'Visual Arts'
  | 'Digital';

export interface Artist {
  id: string;
  name: string;
  category: Category;

  pdf: string;        // /public/pdfs/...
  cover: string;      // /public/artists/...

  description?: string;

  whatsapp?: string;
  instagram?: string;
  facebook?: string;
}