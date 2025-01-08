'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button/Button';

export default function AdminLoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Login fehlgeschlagen');
      }

      router.push('/admin/dashboard');
    } catch (err) {
      setError('Ungültige Anmeldedaten');
    }
  };

  return (
    <div className="min-h-screen bg-primary-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8 bg-primary-800/50 p-8 rounded-xl border border-primary-700/50">
        <div>
          <h2 className="text-center text-3xl font-bold text-content-primary">
            Admin Login
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="username" className="sr-only">
                Benutzername
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border 
                         border-primary-700/50 bg-primary-900/50 placeholder-content-secondary/50
                         text-content-primary focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Benutzername"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Passwort
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border 
                         border-primary-700/50 bg-primary-900/50 placeholder-content-secondary/50
                         text-content-primary focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Passwort"
              />
            </div>
          </div>

          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}

          <Button
            type="submit"
            variant="primary"
            className="w-full py-3"
          >
            Anmelden
          </Button>
        </form>
      </div>
    </div>
  );
}
