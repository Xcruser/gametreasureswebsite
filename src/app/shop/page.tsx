'use client';

import { motion } from 'framer-motion';

export default function ShopPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8 text-content-primary">
          Game Treasures Shop
        </h1>
        
        {/* Filter und Suche */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="w-full md:w-64">
            {/* Filter-Komponente wird hier eingefügt */}
          </div>
          
          <div className="flex-1">
            {/* Suchleiste wird hier eingefügt */}
          </div>
        </div>

        {/* Produktgrid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Produktkarten werden hier eingefügt */}
        </div>
      </motion.div>
    </main>
  );
}
