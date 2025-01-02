import { useQuery } from '@tanstack/react-query';
import { type Item } from '@prisma/client';

interface ItemsResponse {
  items: Item[];
  total: number;
}

export function useShopItems() {
  return useQuery<ItemsResponse>({
    queryKey: ['items'],
    queryFn: async () => {
      const response = await fetch('/api/shop/items');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    }
  });
}
