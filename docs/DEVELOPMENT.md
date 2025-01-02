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

---

<div align="center">

**Fragen?** Öffne ein [GitHub Issue](https://github.com/yourusername/gametreasures/issues)

</div>
