export type Category =
  | 'Music'
  | 'Circus'
  | 'Dance'
  | 'Visual'
  | 'Digital';

export interface Artist {
  id: string;
  name: string;
  category: Category;
  description: string;
  pdf: string; // ruta en /public/pdfs
}
