export interface Article {
  id: number;
  author: string;
  title: string;
  category: 'Dogs' | 'Cats' | 'Birds' | 'Lizards' | 'Rodent';
  text: string;
  imageUrl?: string;
}
