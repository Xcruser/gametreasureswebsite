# FeatureList Component

Die FeatureList-Komponente ist eine flexible und responsive Komponente zur Anzeige von Feature-Listen mit Icons.

## Features

- **Icon-Optionen**: Verschiedene Icons (check, star, heart, arrow)
- **Icon-Positionen**: 
  - `start`: Icon am Anfang der Zeile
  - `spaced`: Icon mit großem Abstand zum Text
  - `text`: Icon direkt am Text
- **Ausrichtungen**: Links, Zentriert, Rechts
- **Animationen**: Framer Motion Animationen
- **Responsive**: Optimiert für Mobile und Desktop

## Props

| Prop | Typ | Standard | Beschreibung |
|------|-----|----------|--------------|
| title | string | - | Titel der Feature-Liste |
| features | string[] | - | Array von Feature-Texten |
| alignment | 'left' \| 'center' \| 'right' | 'center' | Ausrichtung der Liste |
| icon | 'check' \| 'star' \| 'heart' \| 'arrow' | 'check' | Icon-Typ |
| iconPosition | 'start' \| 'spaced' \| 'text' | 'start' | Position des Icons |
| iconSize | number | 14 | Größe des Icons |
| withAnimation | boolean | true | Animationen aktivieren/deaktivieren |
| checkmarkColor | string | 'bg-accent-green-light' | Hintergrundfarbe des Icons |
| titleClassName | string | - | Custom CSS für den Titel |
| containerClassName | string | - | Custom CSS für den Container |

## Mobile-Optimierung

- Konsistente Icon-Abstände auf Mobile
- Linksbündige Ausrichtung auf Mobile für bessere Lesbarkeit
- Angepasste Schriftgrößen und Abstände
- Touch-optimierte Größen

## Beispiel

```tsx
import { FeatureList } from '@/components/FeatureList/FeatureList';

export default function Home() {
  return (
    <FeatureList
      title="Features"
      features={[
        'Feature 1',
        'Feature 2',
        'Feature 3',
      ]}
      icon="star"
      iconPosition="spaced"
      alignment="center"
    />
  );
}
```

## Storybook

Die Komponente enthält umfangreiche Storybook-Stories für alle Varianten:
- Verschiedene Icon-Typen
- Alle Icon-Positionen
- Ausrichtungsvarianten
- Style-Varianten
