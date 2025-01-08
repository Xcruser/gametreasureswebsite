# Komponenten-Struktur

## 1. Übersicht: Komponenten-Ordner

```
components/
├─ layout/       # Komponenten rund ums Seiten-Layout
├─ ui/          # Kleine, wiederverwendbare UI-Komponenten
├─ sections/    # Größere Bereiche/Sektionen
└─ forms/       # Spezifische Formulare
```

### layout/
- Enthält Komponenten rund ums Seiten-Layout
- z.B. Header, Footer, Sidebar, allgemeine Layout-Komponente

### ui/
- Kleine, wiederverwendbare "Atoms" oder "Molecules"
- z.B. Button, Card, Modal, Input, Badge

### sections/
- Größere Bereiche/Sektionen
- z.B. Hero, Features, Testimonials

### forms/
- Spezifische Formulare
- z.B. LoginForm, RegisterForm, NewsletterForm

## 2. Folder-basierte Struktur je Komponente

Beispiel für ui/:
```
ui/
├─ Button/
│  ├─ Button.tsx
│  ├─ Button.module.css    # CSS Module
│  ├─ index.ts            # Re-export
│  └─ Button.test.tsx     # Tests
├─ Card/
│  ├─ Card.tsx
│  ├─ Card.module.css
│  └─ index.ts
└─ Modal/
   ├─ Modal.tsx
   ├─ Modal.module.css
   ├─ ModalFooter.tsx     # Unterkomponente
   └─ index.ts
```

## Best Practices

### Namenskonventionen
- PascalCase für Komponentennamen: Button.tsx, HeroSection.tsx
- Hooks beginnen mit use..., z.B. useAuth.ts

### Styling
- CSS-Module: ComponentName.module.css
- Konsistente Benennung mit Komponenten

### Tests
- Neben der Komponente: ComponentName.test.tsx
- Jest + React Testing Library

### Re-Exports
- index.ts in jedem Komponenten-Ordner für einfachere Imports
- Beispiel: `export { default } from "./Button";`
