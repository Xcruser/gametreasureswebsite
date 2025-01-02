'use client';
import { motion } from 'framer-motion';
import { Button } from '@/components/Button/Button';
import { buttonConfig } from '@/config/components';
import { FeatureList } from '@/components/FeatureList/FeatureList';
import { featureListConfig } from '@/config/components';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-8 px-4">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full max-w-4xl mx-auto"
      >
        <motion.h1
          animate={{
            scale: [1, 1.02, 1],
            transition: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-accent-blue-light via-accent-green-light to-accent-purple-light text-transparent bg-clip-text text-center"
        >
          Willkommen bei Game Treasures
        </motion.h1>

        <motion.p variants={item} className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 text-content-secondary text-center max-w-2xl mx-auto">
          Hier finden Sie Ingame items für Monopoly Go.
        </motion.p>

        <div className="space-y-8">
          <FeatureList {...featureListConfig} />

          <motion.div variants={container} className="flex flex-col sm:flex-row justify-center items-center gap-3 md:gap-4">
            <Button {...buttonConfig}>
              Zum Shop
            </Button>
            <Button {...buttonConfig} variant="secondary">
              Mehr erfahren
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}
