export interface Item {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number | '∞';
  status: 'active' | 'inactive';
  imageUrl?: string;
  category: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateItemInput {
  name: string;
  description: string;
  price: number;
  stock: number | '∞';
  status: 'active' | 'inactive';
  imageUrl?: string;
  category: string;
}

export interface UpdateItemInput extends Partial<CreateItemInput> {
  id: string;
}
