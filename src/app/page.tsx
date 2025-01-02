'use client';
import { motion } from 'framer-motion';

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

const float = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <motion.section 
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto text-center space-y-8 p-6"
      >
        <motion.div variants={item}>
          <motion.h1 
            className="text-5xl font-bold text-content-primary mb-2"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Willkommen bei <span className="text-accent-blue-light">Game Treasures</span>
          </motion.h1>
        </motion.div>
        
        <motion.p 
          variants={item}
          className="text-xl text-content-secondary"
        >
          Entdecken Sie unsere exklusiven Gaming-Items – einfach, sicher und diskret.
        </motion.p>

        <motion.div 
          variants={item}
          className="bg-primary-800/50 p-8 rounded-lg border border-primary-700 relative overflow-hidden"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="absolute -right-20 -top-20 w-40 h-40 bg-accent-blue-light/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.2, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <h2 className="text-2xl font-semibold text-accent-green-light mb-6">
            Einkaufen leicht gemacht
          </h2>
          <ul className="text-content-secondary space-y-4">
            <motion.li variants={item} className="flex items-center justify-center gap-2">
              <motion.span variants={float} animate="animate" className="text-accent-green-light">✓</motion.span>
              Keine Registrierung erforderlich
            </motion.li>
            <motion.li variants={item} className="flex items-center justify-center gap-2">
              <motion.span variants={float} animate="animate" className="text-accent-green-light">✓</motion.span>
              Kein Account notwendig
            </motion.li>
            <motion.li variants={item} className="flex items-center justify-center gap-2">
              <motion.span variants={float} animate="animate" className="text-accent-green-light">✓</motion.span>
              Keine Spieledaten benötigt
            </motion.li>
            <motion.li variants={item} className="flex items-center justify-center gap-2">
              <motion.span variants={float} animate="animate" className="text-accent-green-light">✓</motion.span>
              Schneller und sicherer Einkauf
            </motion.li>
          </ul>
        </motion.div>

        <motion.div 
          variants={item}
          className="flex justify-center gap-4 pt-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-accent-blue-DEFAULT hover:bg-accent-blue-dark text-content-primary rounded-lg transition-colors"
          >
            Zum Shop
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border border-accent-purple-DEFAULT text-accent-purple-DEFAULT hover:bg-accent-purple-DEFAULT hover:text-content-primary rounded-lg transition-all"
          >
            Mehr erfahren
          </motion.button>
        </motion.div>
      </motion.section>
    </main>
  )
}
