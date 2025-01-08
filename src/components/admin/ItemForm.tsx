'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button/Button';
import { CreateItemInput, Item } from '@/types/item';

interface ItemFormProps {
  item?: Item;
  onSubmit: (data: CreateItemInput) => Promise<void>;
  onCancel: () => void;
}

export function ItemForm({ item, onSubmit, onCancel }: ItemFormProps) {
  const [formData, setFormData] = useState<CreateItemInput>({
    name: item?.name || '',
    description: item?.description || '',
    price: item?.price || 0,
    stock: item?.stock || '∞',
    status: item?.status || 'active',
    category: item?.category || '',
    imageUrl: item?.imageUrl || '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await onSubmit(formData);
    } catch (err) {
      setError('Fehler beim Speichern des Items');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-content-secondary">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="mt-1 block w-full rounded-md border border-primary-700/50 
                     bg-primary-900/50 text-content-primary shadow-sm 
                     focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-content-secondary">
            Beschreibung
          </label>
          <textarea
            id="description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            rows={3}
            className="mt-1 block w-full rounded-md border border-primary-700/50 
                     bg-primary-900/50 text-content-primary shadow-sm 
                     focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
            required
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-content-secondary">
              Preis (€)
            </label>
            <input
              type="number"
              id="price"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
              step="0.01"
              min="0"
              className="mt-1 block w-full rounded-md border border-primary-700/50 
                       bg-primary-900/50 text-content-primary shadow-sm 
                       focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
              required
            />
          </div>

          <div>
            <label htmlFor="stock" className="block text-sm font-medium text-content-secondary">
              Lagerbestand
            </label>
            <input
              type="text"
              id="stock"
              value={formData.stock}
              onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
              className="mt-1 block w-full rounded-md border border-primary-700/50 
                       bg-primary-900/50 text-content-primary shadow-sm 
                       focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-content-secondary">
              Kategorie
            </label>
            <select
              id="category"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="mt-1 block w-full rounded-md border border-primary-700/50 
                       bg-primary-900/50 text-content-primary shadow-sm 
                       focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
              required
            >
              <option value="">Wähle eine Kategorie</option>
              <option value="currency">Währung</option>
              <option value="booster">Booster</option>
            </select>
          </div>

          <div>
            <label htmlFor="status" className="block text-sm font-medium text-content-secondary">
              Status
            </label>
            <select
              id="status"
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value as 'active' | 'inactive' })}
              className="mt-1 block w-full rounded-md border border-primary-700/50 
                       bg-primary-900/50 text-content-primary shadow-sm 
                       focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
              required
            >
              <option value="active">Aktiv</option>
              <option value="inactive">Inaktiv</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="imageUrl" className="block text-sm font-medium text-content-secondary">
            Bild-URL
          </label>
          <input
            type="url"
            id="imageUrl"
            value={formData.imageUrl}
            onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
            className="mt-1 block w-full rounded-md border border-primary-700/50 
                     bg-primary-900/50 text-content-primary shadow-sm 
                     focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
          />
        </div>
      </div>

      {error && (
        <div className="text-red-500 text-sm">{error}</div>
      )}

      <div className="flex justify-end space-x-4">
        <Button
          type="button"
          variant="secondary"
          onClick={onCancel}
          disabled={isLoading}
        >
          Abbrechen
        </Button>
        <Button
          type="submit"
          variant="primary"
          disabled={isLoading}
        >
          {isLoading ? 'Wird gespeichert...' : item ? 'Aktualisieren' : 'Erstellen'}
        </Button>
      </div>
    </form>
  );
}
