'use client';

import { withAuth } from '@/lib/auth/withAuth';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button/Button';
import { ItemForm } from '@/components/admin/ItemForm';
import { Item, CreateItemInput, UpdateItemInput } from '@/types/item';

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'stats' | 'items'>('stats');
  const [items, setItems] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [showItemForm, setShowItemForm] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  // Lade Items beim ersten Render
  useEffect(() => {
    if (activeTab === 'items') {
      fetchItems();
    }
  }, [activeTab]);

  // Items von der API laden
  const fetchItems = async () => {
    try {
      const response = await fetch('/api/admin/items');
      if (!response.ok) throw new Error('Fehler beim Laden der Items');
      const data = await response.json();
      setItems(data);
    } catch (err) {
      setError('Fehler beim Laden der Items');
    } finally {
      setIsLoading(false);
    }
  };

  // Neues Item erstellen
  const handleCreateItem = async (data: CreateItemInput) => {
    try {
      const response = await fetch('/api/admin/items', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Fehler beim Erstellen des Items');
      
      await fetchItems();
      setShowItemForm(false);
    } catch (err) {
      setError('Fehler beim Erstellen des Items');
    }
  };

  // Item aktualisieren
  const handleUpdateItem = async (data: UpdateItemInput) => {
    try {
      const response = await fetch('/api/admin/items', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Fehler beim Aktualisieren des Items');
      
      await fetchItems();
      setSelectedItem(null);
      setShowItemForm(false);
    } catch (err) {
      setError('Fehler beim Aktualisieren des Items');
    }
  };

  // Item löschen
  const handleDeleteItem = async (id: string) => {
    if (!confirm('Möchtest du dieses Item wirklich löschen?')) return;

    try {
      const response = await fetch('/api/admin/items', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });

      if (!response.ok) throw new Error('Fehler beim Löschen des Items');
      
      await fetchItems();
    } catch (err) {
      setError('Fehler beim Löschen des Items');
    }
  };

  return (
    <div className="min-h-screen bg-primary-900">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-content-primary">
            Admin Dashboard
          </h1>
          <Button
            variant="secondary"
            onClick={() => {
              // TODO: Implement logout
            }}
          >
            Abmelden
          </Button>
        </div>

        {/* Tabs */}
        <div className="flex space-x-4 mb-8">
          <button
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'stats'
                ? 'bg-primary-600 text-white'
                : 'bg-primary-800/50 text-content-secondary hover:text-content-primary'
            }`}
            onClick={() => setActiveTab('stats')}
          >
            Statistiken
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'items'
                ? 'bg-primary-600 text-white'
                : 'bg-primary-800/50 text-content-secondary hover:text-content-primary'
            }`}
            onClick={() => setActiveTab('items')}
          >
            Items verwalten
          </button>
        </div>

        {/* Content */}
        <div className="bg-primary-800/50 rounded-xl border border-primary-700/50 p-6">
          {activeTab === 'stats' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard title="Besucher heute" value="234" />
              <StatCard title="Aktive Nutzer" value="45" />
              <StatCard title="Offene Bestellungen" value="12" />
              <StatCard title="Umsatz heute" value="1.234 €" />
            </div>
          ) : (
            <div className="space-y-6">
              {/* Item Form Modal */}
              {showItemForm && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
                  <div className="bg-primary-800 rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                    <h2 className="text-xl font-semibold text-content-primary mb-4">
                      {selectedItem ? 'Item bearbeiten' : 'Neues Item'}
                    </h2>
                    <ItemForm
                      item={selectedItem || undefined}
                      onSubmit={selectedItem ? handleUpdateItem : handleCreateItem}
                      onCancel={() => {
                        setShowItemForm(false);
                        setSelectedItem(null);
                      }}
                    />
                  </div>
                </div>
              )}

              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-content-primary">
                  Items
                </h2>
                <Button 
                  variant="primary" 
                  onClick={() => {
                    setSelectedItem(null);
                    setShowItemForm(true);
                  }}
                >
                  Neues Item
                </Button>
              </div>

              {error && (
                <div className="bg-red-500/10 text-red-500 p-4 rounded-lg">
                  {error}
                </div>
              )}

              {isLoading ? (
                <div className="text-center py-8">
                  <p className="text-content-secondary">Lädt...</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left border-b border-primary-700/50">
                        <th className="pb-3 text-content-secondary font-medium">Name</th>
                        <th className="pb-3 text-content-secondary font-medium">Preis</th>
                        <th className="pb-3 text-content-secondary font-medium">Lager</th>
                        <th className="pb-3 text-content-secondary font-medium">Status</th>
                        <th className="pb-3 text-content-secondary font-medium">Aktionen</th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map((item) => (
                        <tr key={item.id} className="border-b border-primary-700/50">
                          <td className="py-4 text-content-primary">{item.name}</td>
                          <td className="py-4 text-content-primary">{item.price} €</td>
                          <td className="py-4 text-content-primary">{item.stock}</td>
                          <td className="py-4 text-content-primary">
                            <span className={`px-2 py-1 rounded-full ${
                              item.status === 'active'
                                ? 'bg-green-500/20 text-green-500'
                                : 'bg-red-500/20 text-red-500'
                            } text-sm`}>
                              {item.status === 'active' ? 'Aktiv' : 'Inaktiv'}
                            </span>
                          </td>
                          <td className="py-4">
                            <div className="flex space-x-2">
                              <Button
                                variant="secondary"
                                size="small"
                                onClick={() => {
                                  setSelectedItem(item);
                                  setShowItemForm(true);
                                }}
                              >
                                Bearbeiten
                              </Button>
                              <Button
                                variant="danger"
                                size="small"
                                onClick={() => handleDeleteItem(item.id)}
                              >
                                Löschen
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-primary-900/50 rounded-lg border border-primary-700/50 p-4">
      <h3 className="text-content-secondary text-sm font-medium">{title}</h3>
      <p className="text-2xl font-bold text-content-primary mt-2">{value}</p>
    </div>
  );
}

export default withAuth(AdminDashboard);
