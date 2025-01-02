import Image from "next/image";
import { Header } from '@/components/Header';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <h1 className="text-4xl font-bold text-content-primary">
        Welcome to <span className="text-accent-blue-DEFAULT">Game Treasures</span>
      </h1>
      <p className="text-content-secondary text-center max-w-2xl">
        Discover and manage your game collection in one place. Keep track of your favorite games,
        create wishlists, and never miss a new release.
      </p>
      <div className="flex gap-4">
        <button className="px-6 py-3 bg-accent-blue-DEFAULT hover:bg-accent-blue-dark text-content-primary rounded-lg transition-colors">
          Browse Games
        </button>
        <button className="px-6 py-3 border border-accent-purple-DEFAULT text-accent-purple-DEFAULT hover:bg-accent-purple-DEFAULT hover:text-content-primary rounded-lg transition-all">
          Start Collection
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <div className="bg-primary-800 p-6 rounded-lg border border-primary-600">
          <h3 className="text-xl font-semibold text-accent-blue-light mb-2">Track Games</h3>
          <p className="text-content-secondary">Keep track of your game collection and wishlist</p>
        </div>
        <div className="bg-primary-800 p-6 rounded-lg border border-primary-600">
          <h3 className="text-xl font-semibold text-accent-green-light mb-2">Stay Updated</h3>
          <p className="text-content-secondary">Get notifications about new releases and updates</p>
        </div>
        <div className="bg-primary-800 p-6 rounded-lg border border-primary-600">
          <h3 className="text-xl font-semibold text-accent-purple-light mb-2">Connect</h3>
          <p className="text-content-secondary">Share your collection with other gamers</p>
        </div>
      </div>
    </div>
  );
}
