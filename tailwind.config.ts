import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Hauptfarben
        primary: {
          900: '#0A0F1C', // Sehr dunkles Blau (fast schwarz) - Haupthintergrund
          800: '#141B2E', // Dunkles Blau - Sekundärer Hintergrund
          700: '#1E2A45', // Dunkelblau - Hover-Zustände
          600: '#2B3A5C', // Mittleres Blau
        },
        // Blaue Akzente
        accent: {
          blue: {
            DEFAULT: '#3B82F6', // Hauptblau
            light: '#60A5FA', // Helles Blau
            dark: '#2563EB', // Dunkles Blau
            hover: '#1D4ED8', // Hover-Zustand
          },
          // Grüne Akzente
          green: {
            DEFAULT: '#10B981', // Hauptgrün
            light: '#34D399', // Helles Grün
            dark: '#059669', // Dunkles Grün
            hover: '#047857', // Hover-Zustand
          },
          // Violette Akzente
          purple: {
            DEFAULT: '#8B5CF6', // Hauptviolett
            light: '#A78BFA', // Helles Violett
            dark: '#7C3AED', // Dunkles Violett
            hover: '#6D28D9', // Hover-Zustand
          }
        },
        // Text und UI-Elemente
        content: {
          primary: '#F3F4F6', // Haupttext - sehr hell
          secondary: '#D1D5DB', // Sekundärtext
          muted: '#9CA3AF', // Gedämpfter Text
        },
        // Statusfarben
        status: {
          success: '#059669', // Erfolg (Grün)
          error: '#DC2626', // Fehler (Rot)
          warning: '#D97706', // Warnung (Orange)
          info: '#2563EB', // Information (Blau)
        }
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(-50%, -50%) translateY(0)' },
          '50%': { transform: 'translate(-50%, -50%) translateY(-20px)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
