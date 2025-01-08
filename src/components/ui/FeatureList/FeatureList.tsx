'use client';

import { motion } from 'framer-motion';

interface Feature {
  text: string;
}

interface FeatureListProps {
  title: string;
  features: Feature[];
}

export function FeatureList({ title, features }: FeatureListProps) {
  return (
    <div className="text-xl text-gray-300 max-w-2xl mb-8">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <motion.li
            key={index}
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <motion.svg
              className="w-6 h-6 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: index * 0.2 + 0.1
              }}
            >
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2 + 0.2
                }}
              />
            </motion.svg>
            <span>{feature.text}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
