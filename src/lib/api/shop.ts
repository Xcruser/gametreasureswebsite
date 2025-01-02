import { Item, CreateItem, UpdateItem, SearchItemsParams } from '../validations/shop';

const API_BASE = '/api/shop';

interface SearchItemsResponse {
  items: Item[];
  page: number;
  limit: number;
  total: number;
}

// API Client Funktionen
export const shopApi = {
  // Liste alle Items mit Suchparametern
  async searchItems(params: Partial<SearchItemsParams>): Promise<SearchItemsResponse> {
    const searchParams = new URLSearchParams();
    
    // Füge nur definierte Parameter hinzu
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) {
        searchParams.append(key, String(value));
      }
    });

    const response = await fetch(`${API_BASE}/items?${searchParams.toString()}`);
    if (!response.ok) {
      throw new Error('Failed to fetch items');
    }
    return response.json();
  },

  // Hole ein einzelnes Item
  async getItem(id: string): Promise<Item> {
    const response = await fetch(`${API_BASE}/items/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch item');
    }
    return response.json();
  },

  // Erstelle ein neues Item
  async createItem(data: CreateItem): Promise<Item> {
    const response = await fetch(`${API_BASE}/items`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error('Failed to create item');
    }
    return response.json();
  },

  // Aktualisiere ein Item
  async updateItem(id: string, data: UpdateItem): Promise<Item> {
    const response = await fetch(`${API_BASE}/items/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error('Failed to update item');
    }
    return response.json();
  },

  // Lösche ein Item
  async deleteItem(id: string): Promise<void> {
    const response = await fetch(`${API_BASE}/items/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete item');
    }
  },
};
