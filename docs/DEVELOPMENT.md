# 📖 Game Treasures - Development Guide

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-13.0-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC?style=flat-square&logo=tailwind-css)

</div>

## 🎨 Design-System

### Farbpalette

<details>
<summary><b>Primärfarben</b></summary>

| Klasse | Verwendung | Beispiel |
|--------|------------|----------|
| `primary-900` | Dunkelster Hintergrund | Haupthintergrund |
| `primary-800` | Standard-Hintergrund | Header |
| `primary-700` | Hellerer Hintergrund | Hover-States |
| `primary-600` | Hellster Hintergrund | Borders |

</details>

<details>
<summary><b>Akzentfarben</b></summary>

| Farbe | Standard | Hell | Verwendung |
|-------|----------|------|------------|
| Blau | `accent-blue-DEFAULT` | `accent-blue-light` | Primäre Aktionen |
| Grün | `accent-green-DEFAULT` | `accent-green-light` | Erfolg, Bestätigung |
| Lila | `accent-purple-DEFAULT` | `accent-purple-light` | Besondere Elemente |

</details>

<details>
<summary><b>Textfarben</b></summary>

| Klasse | Verwendung |
|--------|------------|
| `text-content-primary` | Haupttext |
| `text-content-secondary` | Sekundärtext |
| `text-content-muted` | Abgeschwächter Text |

</details>

## 🧩 Komponenten

### Header

<details>
<summary><b>Props Interface</b></summary>

```typescript
interface HeaderProps {
  backgroundColor?: string;      // z.B. 'bg-primary-800'
  textColor?: string;           // z.B. 'text-content-primary'
  hoverColor?: string;          // z.B. 'hover:text-accent-blue-light'
  logoPosition?: 'left' | 'center';
  navPosition?: 'left' | 'center' | 'right';
  padding?: string;             // z.B. 'py-4'
  logoText?: string;
  navigationItems?: Array<{ label: string; href: string; }>;
  cartItemCount?: number;
  badgeBackgroundColor?: string; // z.B. 'bg-accent-blue-light'
  badgeTextColor?: string;       // z.B. 'text-primary-900'
}
```

</details>

<details>
<summary><b>Beispielverwendung</b></summary>

```tsx
// Standard-Header mit zentrierter Navigation
<Header
  backgroundColor="bg-primary-800"
  textColor="text-content-primary"
  hoverColor="hover:text-accent-blue-light"
  logoPosition="left"
  navPosition="center"
  padding="py-4"
  cartItemCount={3}
  badgeBackgroundColor="bg-accent-blue-light"
  badgeTextColor="text-primary-900"
/>
```

</details>

## ✅ Best Practices

### Styling

<details>
<summary><b>Tailwind-Richtlinien</b></summary>

1. **Konsistente Farben**
   - Verwende die definierten Farbvariablen
   - Keine hartcodierten Farben

2. **Responsive Design**
   - Mobile First Ansatz
   - Verwende Tailwind Breakpoints

3. **Interaktive Elemente**
   - Hover-Effekte für alle klickbaren Elemente
   - Übergänge mit `transition-*` Klassen

</details>

### Komponenten-Entwicklung

<details>
<summary><b>Checkliste für neue Komponenten</b></summary>

1. **Struktur**
   ```
   components/
   └── ComponentName/
       ├── ComponentName.tsx
       ├── ComponentName.stories.tsx
       └── index.ts
   ```

2. **TypeScript**
   - Props Interface mit JSDoc
   - Strikte Typisierung
   - Exportierte Typen

3. **Stories**
   - Default Story
   - Varianten
   - Dokumentierte Props

</details>

## 📱 Responsive Design

<details>
<summary><b>Breakpoints</b></summary>

| Breakpoint | Größe | Verwendung |
|------------|-------|------------|
| `sm` | 640px | Smartphones |
| `md` | 768px | Tablets |
| `lg` | 1024px | Laptops |
| `xl` | 1280px | Desktop |
| `2xl` | 1536px | Große Displays |

</details>

## 🔄 State Management

<details>
<summary><b>Richtlinien</b></summary>

1. **Lokaler State**
   - React `useState` für Komponenten-State
   - Props für Konfiguration

2. **Globaler State**
   - Zentrale Konfiguration in `src/config/`
   - React Context für Theme/User
   - Zustand für komplexe State-Logik

</details>

## 📚 Weitere Ressourcen

- [Tailwind CSS Dokumentation](https://tailwindcss.com/docs)
- [Next.js Dokumentation](https://nextjs.org/docs)
- [Storybook Guides](https://storybook.js.org/docs/react/get-started/introduction)

## Animations and Interactions

### Homepage Animations

The homepage uses Framer Motion for smooth and professional animations:

```typescript
// Animation variants for staggered children
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

// Individual item animations
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};
```

#### Animation Components

1. **Welcome Section**
   - Fade-in animation with staggered children
   - Subtle title scaling animation
   - Floating checkmark icons

2. **Info Box**
   - Hover scale effect
   - Animated gradient blob background
   - Staggered list items

3. **Buttons**
   - Scale on hover
   - Scale down on click
   - Smooth color transitions

### Layout Guidelines

The homepage follows these layout principles:

1. **Vertical Centering**
   ```css
   .main {
     min-height: calc(100vh - 4rem);
     display: flex;
     align-items: center;
     justify-content: center;
   }
   ```

2. **Content Width**
   - Maximum width: 4xl (56rem)
   - Centered with auto margins
   - Responsive padding

3. **Spacing**
   - Consistent spacing using space-y-8
   - Larger padding for interactive elements
   - Generous whitespace around text

### Interactive Elements

1. **Buttons**
   - Primary: Blue accent with hover darkening
   - Secondary: Purple outline with fill on hover
   - Both with scale animations

2. **Info Box**
   - Subtle hover effect
   - Semi-transparent background
   - Animated decorative elements

### Best Practices

1. **Performance**
   - Use `layoutId` for shared element transitions
   - Optimize animations with `willChange`
   - Use `transition.duration` for consistent timing

2. **Accessibility**
   - Maintain readable text contrast
   - Ensure interactive elements are keyboard accessible
   - Provide proper ARIA labels

3. **Responsive Design**
   - Fluid typography
   - Flexible spacing
   - Mobile-first approach

---

<div align="center">

**Fragen?** Öffne ein [GitHub Issue](https://github.com/yourusername/gametreasures/issues)

</div>
