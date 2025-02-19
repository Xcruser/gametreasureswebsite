// Header Konfiguration
export const headerConfig = {
  logoText: 'Game Treasures',
  navigationItems: [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
    { label: 'Contact', href: '/contact' },
  ],
  backgroundColor: 'bg-primary-800',
  textColor: 'text-content-primary',
  hoverColor: 'hover:text-accent-blue-light',
  badgeBackgroundColor: 'bg-accent-blue-light',
  badgeTextColor: 'text-primary-900',
  cartItemCount: 0,
} as const;

// Button-Konfiguration
export const buttonConfig = {
  variant: 'primary' as const,
  size: 'md' as const,
  color: 'blue' as const,
  withAnimation: true,
  animationType: 'scale' as const,
} as const;

// FeatureList-Konfiguration
export const featureListConfig = {
  title: 'Einkaufen leicht gemacht',
  features: [
    'Keine Registrierung erforderlich',
    'Kein Account notwendig',
    'Keine Spieldaten benötigt',
    'Schneller und sicherer Einkauf',
  ] as string[],
  checkmarkColor: 'bg-accent-green-light',
  withAnimation: true,
  alignment: 'center' as const,
  icon: 'check' as const,
  iconSize: 14,
  iconPosition: 'start' as const,
} as const;

// Hier können weitere Komponenten-Konfigurationen hinzugefügt werden
// export const otherComponentConfig = { ... };
