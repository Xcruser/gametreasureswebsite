# Changelog

## [0.2.0] - 2025-01-02

### Added
- Neue `FeatureList` Komponente mit folgenden Features:
  - Verschiedene Icon-Optionen (check, star, heart, arrow)
  - Anpassbare Icon-Positionen (start, spaced, text)
  - Responsive Design für Mobile und Desktop
  - Animationen mit Framer Motion
  - Konfigurierbare Ausrichtung (links, zentriert, rechts)

- Verbesserter Header mit:
  - Mobiles Hamburger-Menü
  - Animierte Navigation
  - Verbesserte Touch-Targets
  - Responsive Design

### Changed
- Mobile-optimiertes Layout für alle Komponenten
- Verbesserte Button-Komponente mit voller Breite auf Mobile
- Aktualisierte Startseiten-Text für Monopoly Go Focus
- Konsistente Abstände und Ausrichtungen auf allen Geräten

### Technical
- Neue TypeScript Types für Icon-Positionen und Ausrichtungen
- Verbesserte Komponenten-Konfiguration in `components.ts`
- Erweiterte Storybook Stories für alle Komponenten-Varianten
- Responsive Tailwind-Klassen für bessere Mobile-First Entwicklung

## [Unreleased]

### Added
- Neue ItemCard-Komponente für die Shop-Seite
  - Responsive Design mit 4 Größenvarianten
  - Moderne UI mit Glasmorphism-Effekten
  - Animierte Interaktionen und Icons
  - Skalierbare Texte und optimierte Bilddarstellung
  - Deutsches Preisformat
- Neue Utility-Funktionen:
  - `formatPrice`: Formatierung von Preisen im deutschen Format
  - `cn`: Utility für bedingte Klassen-Zusammenführung

### Changed
- Button-Komponente um neue Styling-Optionen erweitert
- Verbesserte Dokumentation mit detaillierten Komponenten-Beschreibungen

### Fixed
- Korrigierte Next.js Route Handler Typisierung in der Shop-API
- Aktualisierte Category-Enum-Werte gemäß Prisma-Schema (von UPPERCASE zu lowercase)
- Verbesserte Typisierung der Seed-Daten mit korrektem Category-Enum
- Aktualisierte Next.js Konfiguration für bessere Kompatibilität
- Behob Build-Fehler in ItemCard und Stories bezüglich Category-Typen

### Changed
- Änderte Navigation von "About" zu "Contact"
- Optimierte API-Route-Handler für bessere Typsicherheit
