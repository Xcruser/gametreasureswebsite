# 🎮 Game Treasures

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-13.0-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Storybook](https://img.shields.io/badge/Storybook-7.0-FF4785?style=for-the-badge&logo=storybook)

Eine moderne Web-Anwendung zur Verwaltung und Entdeckung von Spielen, gebaut mit Next.js und Tailwind CSS.

[Erste Schritte](#erste-schritte) • [Features](#features) • [Dokumentation](./docs/DEVELOPMENT.md) • [Mitwirken](#mitwirken)

</div>

---

## ✨ Features

<div align="center">
<table>
<tr>
<td align="center">🎮<br><b>Spieleverwaltung</b></td>
<td align="center">🌙<br><b>Dark Mode</b></td>
<td align="center">🎨<br><b>Anpassbares UI</b></td>
<td align="center">🛒<br><b>Warenkorb</b></td>
</tr>
<tr>
<td align="center">👤<br><b>Authentifizierung</b></td>
<td align="center">📱<br><b>Responsive</b></td>
<td align="center">🚀<br><b>Performance</b></td>
<td align="center">🔍<br><b>Suche</b></td>
</tr>
</table>
</div>

## 🛠️ Technologie-Stack

<div align="center">

### Core

![Next.js](https://img.shields.io/badge/Next.js-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-38B2AC?style=flat-square&logo=tailwind-css)

### Testing & Development

![Storybook](https://img.shields.io/badge/Storybook-FF4785?style=flat-square&logo=storybook)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=flat-square&logo=prettier)

</div>

## 🚀 Erste Schritte

<details>
<summary>📋 Voraussetzungen</summary>

- Node.js 16.x oder höher
- npm 7.x oder höher
- Git

</details>

1. **Repository klonen**
   ```bash
   git clone [repository-url]
   cd gametreasures
   ```

2. **Abhängigkeiten installieren**
   ```bash
   npm install
   ```

3. **Entwicklungsserver starten**
   ```bash
   npm run dev
   ```
   🌐 Öffne [http://localhost:3000](http://localhost:3000)

4. **Storybook starten**
   ```bash
   npm run storybook
   ```
   📚 Öffne [http://localhost:6006](http://localhost:6006)

## 📖 Entwicklung

Unsere [Development Guide](./docs/DEVELOPMENT.md) enthält:

- 🎨 Farbschema und Design-System
- 🧩 Komponenten-Dokumentation
- ✅ Best Practices
- 📱 Responsive Design-Richtlinien

## 📁 Projekt-Struktur

```
src/
├── 📱 app/              # Next.js App Router
├── 🧩 components/       # React Komponenten
│   ├── Header/         # Header Komponente
│   └── ...            # Weitere Komponenten
├── ⚙️ config/          # Zentrale Konfiguration
├── 🎨 styles/          # Globale Styles
└── 📖 docs/            # Entwicklungsdokumentation
```

## 🧩 Komponenten

### Header

<details>
<summary>Features & Anpassungen</summary>

- ✨ Vollständig anpassbar
  - Position (Logo & Navigation)
  - Farbschema
  - Navigation Items
- 🛒 Integrierter Warenkorb
  - Badge für Artikelanzahl
  - Anpassbare Farben
- 👤 Login-Funktionalität
- 📱 Responsive Design

</details>

<details>
<summary>Verwendung</summary>

```tsx
<Header
  backgroundColor="bg-primary-800"
  textColor="text-content-primary"
  hoverColor="hover:text-accent-blue-light"
  logoPosition="left"
  navPosition="center"
/>
```

</details>

## 🤝 Mitwirken

Wir freuen uns über Beiträge! Hier ist wie du helfen kannst:

1. 🔱 Fork erstellen
2. 📝 Feature Branch erstellen (`git checkout -b feature/AmazingFeature`)
3. ✅ Änderungen committen (`git commit -m 'Add: Amazing Feature'`)
4. 📤 Push zum Branch (`git push origin feature/AmazingFeature`)
5. 🔄 Pull Request öffnen

## 📄 Lizenz

Dieses Projekt ist unter der MIT-Lizenz lizenziert - siehe [LICENSE](LICENSE) für Details.

---

<div align="center">

Entwickelt mit ❤️ für die Gaming-Community

</div>
