import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { shopApi } from '@/lib/api/shop';
import type { CreateItem, UpdateItem, SearchItemsParams } from '@/lib/validations/shop';

// Query Keys
const ITEMS_KEY = 'shop-items';
const ITEM_KEY = 'shop-item';

export const useShop = () => {
  const queryClient = useQueryClient();

  // Suche Items mit Filtern
  const useSearchItems = (params: Partial<SearchItemsParams>) => {
    return useQuery({
      queryKey: [ITEMS_KEY, params],
      queryFn: () => shopApi.searchItems(params),
    });
  };

  // Hole ein einzelnes Item
  const useItem = (id: string) => {
    return useQuery({
      queryKey: [ITEM_KEY, id],
      queryFn: () => shopApi.getItem(id),
      enabled: !!id,
    });
  };

  // Erstelle ein neues Item
  const useCreateItem = () => {
    return useMutation({
      mutationFn: (data: CreateItem) => shopApi.createItem(data),
      onSuccess: () => {
        // Invalidiere die Items-Liste nach dem Erstellen
        queryClient.invalidateQueries({ queryKey: [ITEMS_KEY] });
      },
    });
  };

  // Aktualisiere ein Item
  const useUpdateItem = () => {
    return useMutation({
      mutationFn: ({ id, data }: { id: string; data: UpdateItem }) => 
        shopApi.updateItem(id, data),
      onSuccess: (_, { id }) => {
        // Invalidiere sowohl die Liste als auch das einzelne Item
        queryClient.invalidateQueries({ queryKey: [ITEMS_KEY] });
        queryClient.invalidateQueries({ queryKey: [ITEM_KEY, id] });
      },
    });
  };

  // Lösche ein Item
  const useDeleteItem = () => {
    return useMutation({
      mutationFn: (id: string) => shopApi.deleteItem(id),
      onSuccess: (_, id) => {
        // Invalidiere die Liste und entferne das Item aus dem Cache
        queryClient.invalidateQueries({ queryKey: [ITEMS_KEY] });
        queryClient.removeQueries({ queryKey: [ITEM_KEY, id] });
      },
    });
  };

  return {
    useSearchItems,
    useItem,
    useCreateItem,
    useUpdateItem,
    useDeleteItem,
  };
};
