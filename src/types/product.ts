export interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  category: 'special' | 'dice';
  gameType: 'Monopoly GO';
  link?: string;
}
