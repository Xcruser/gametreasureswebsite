# ItemCard Component

Die ItemCard-Komponente ist eine flexible und moderne Karte zur Anzeige von Shop-Artikeln.

## Features

- Responsive Design mit 4 Größenvarianten
- Moderne UI mit Glasmorphism-Effekten
- Animierte Interaktionen
- Skalierbare Texte und Icons
- Optimierte Bilddarstellung
- Preisanzeige im deutschen Format

## Props

| Prop | Typ | Standard | Beschreibung |
|------|-----|----------|--------------|
| id | string | - | Eindeutige ID des Items |
| title | string | - | Titel des Items |
| description | string | - | Beschreibung des Items |
| price | number | - | Preis in Euro |
| imageUrl | string | - | URL zum Produktbild |
| width | 'sm' \| 'md' \| 'lg' \| 'full' | 'md' | Breite der Karte |
| className | string | - | Zusätzliche CSS-Klassen |
| onAddToCart | () => void | - | Callback für "In den Warenkorb" |
| onBuyNow | () => void | - | Callback für "Sofort Kaufen" |

## Größenvarianten

- **Small (sm)**: 256px - Kompakte Darstellung
- **Medium (md)**: 320px - Standard-Darstellung
- **Large (lg)**: 384px - Erweiterte Darstellung
- **Full**: 100% - Volle Container-Breite

## Responsive Verhalten

Die Komponente passt sich automatisch an verschiedene Bildschirmgrößen an:

### Text-Skalierung
- Titel: lg → 3xl
- Beschreibung: xs → lg
- Preis: base → 2xl
- Buttons: sm → xl

### Padding-Anpassung
- Small: p-4
- Medium: p-4
- Large: p-5
- Full: p-6 (Desktop: p-8)

## Beispiel

```tsx
<ItemCard
  id="1"
  title="Monopoly Go! - 1000 Würfel"
  description="Premium Würfel-Paket für Monopoly Go!"
  price={9.99}
  imageUrl="/images/dice-pack.jpg"
  width="md"
  onAddToCart={() => console.log('Added to cart')}
  onBuyNow={() => console.log('Buy now clicked')}
/>
```

## Animationen

- Hover-Animation: Karte hebt sich leicht an
- Bild-Zoom bei Hover
- Preis-Badge: Scale-Animation beim Erscheinen
- Warenkorb-Icon: Rotation beim Hinzufügen
- Button-Hover: Scale-Animation

## Styling

- Glasmorphism-Effekt mit Backdrop-Blur
- Gradient-Hintergrund
- Schatten-Effekte
- Abgerundete Ecken
- Responsive Bilddarstellung mit Aspect Ratio
- Gradient-Overlay für bessere Lesbarkeit

## Best Practices

1. **Bilder**:
   - Optimierte Bildgrößen verwenden
   - Aspect Ratio 4:3 einhalten
   - Alt-Text für Barrierefreiheit

2. **Text**:
   - Titel: Max. 2 Zeilen
   - Beschreibung: Max. 2 Zeilen
   - Preisformat: Deutsches Format (z.B. "9,99 €")

3. **Performance**:
   - Lazy Loading für Bilder
   - Optimierte Icon-Größen
   - Transition-Effekte für smooth Animationen
