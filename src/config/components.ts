import { HeaderProps } from '@/components/Header/Header';

// Header Konfiguration
export const headerConfig: HeaderProps = {
  backgroundColor: 'bg-primary-800',
  textColor: 'text-content-primary',
  hoverColor: 'hover:text-accent-blue-light',
  logoPosition: 'left',
  navPosition: 'center',
  padding: 'py-4',
  logoText: 'Game Treasures',
  navigationItems: [
    { label: 'Home', href: '/' },
    { label: 'Games', href: '/games' },
    { label: 'About', href: '/about' },
  ],
  cartItemCount: 0,
  badgeBackgroundColor: 'bg-accent-blue-light',
  badgeTextColor: 'text-primary-900',
} as const;

// Hier können weitere Komponenten-Konfigurationen hinzugefügt werden
// export const otherComponentConfig = { ... };
