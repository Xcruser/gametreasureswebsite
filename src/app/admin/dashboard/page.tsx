'use client';

import { withAuth } from '@/lib/auth/withAuth';
import { useState } from 'react';
import { Button } from '@/components/ui/Button/Button';

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'stats' | 'items'>('stats');

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
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-content-primary">
                  Items
                </h2>
                <Button variant="primary" onClick={() => {}}>
                  Neues Item
                </Button>
              </div>
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
                    {/* TODO: Items aus der Datenbank laden */}
                    <tr className="border-b border-primary-700/50">
                      <td className="py-4 text-content-primary">Gold Pack 1000</td>
                      <td className="py-4 text-content-primary">9.99 €</td>
                      <td className="py-4 text-content-primary">∞</td>
                      <td className="py-4 text-content-primary">
                        <span className="px-2 py-1 rounded-full bg-green-500/20 text-green-500 text-sm">
                          Aktiv
                        </span>
                      </td>
                      <td className="py-4">
                        <Button variant="secondary" size="small">
                          Bearbeiten
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
