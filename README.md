# Clinique AlShifa — Landing Page

> Landing page professionnelle et moderne pour la **Clinique AlShifa**, clinique médicale privée à **Sfax, Tunisie**.

---

## 🚀 Installation & Lancement

### Prérequis

Aucune installation npm nécessaire. Le projet utilise uniquement des CDN.

### Méthodes pour lancer le projet

#### Avec WAMP / XAMPP _(recommandé)_

1. Placer le dossier dans `C:\wamp\www\cliniquealshifa\`
2. Démarrer WAMP
3. Ouvrir dans le navigateur : `http://localhost/cliniquealshifa/`

#### Avec VS Code Live Server

1. Ouvrir `index.html` dans VS Code
2. Clic droit → **"Open with Live Server"**

#### Avec Python

```bash
cd C:\wamp\www\cliniquealshifa
python -m http.server 8080
# Ouvrir : http://localhost:8080
```

---

## 📁 Structure du projet

```
cliniquealshifa/
├── index.html              ← Structure HTML sémantique (8 sections)
├── style.css               ← Animations, variables CSS, composants custom
├── main.js                 ← Navbar sticky, scroll, hamburger, form
├── README.md               ← Ce fichier
└── prompt-landing-page.md  ← Prompt de génération du projet
```

---

## ✨ Sections de la page

| # | Section | Description |
|---|---------|-------------|
| 1 | **Header/Navbar** | Logo, liens, CTA "Prendre RDV", sticky au scroll |
| 2 | **Hero** | Titre, sous-titre, CTA, image Unsplash, stats |
| 3 | **Services** | 6 cartes (Cardiologie, Pédiatrie, Radiologie, Chirurgie, Urgences, Labo) |
| 4 | **Pourquoi nous** | 3 arguments sur fond bleu médical |
| 5 | **Médecins** | 3 cartes avec photos Unsplash et overlay |
| 6 | **Témoignages** | 3 avis patients avec étoiles |
| 7 | **Contact** | Formulaire validé + coordonnées + Google Maps Sfax |
| 8 | **Footer** | Logo, nav, réseaux sociaux, copyright |

---

## 🛠 Technologies

| Outil | Version | Usage |
|-------|---------|-------|
| HTML5 | — | Structure sémantique |
| Tailwind CSS | ^3 (CDN) | Classes utilitaires |
| CSS3 | — | Animations, variables, composants |
| JavaScript | ES2020 | Logique et interactions |
| Google Fonts | Inter | Typographie |
| Unsplash | — | Photos libres de droits |

---

## 🎨 Design System

| Élément | Valeur |
|---------|--------|
| Couleur primaire | `#1E40AF` (bleu médical) |
| Fond | `#FFFFFF` / `#F8FAFC` |
| Texte | `#1E293B` |
| Police | **Inter** (Google Fonts) |
| Border radius | `1rem` |

---

## ⚡ Fonctionnalités JavaScript

- ✅ **Navbar sticky** — Glassmorphism au scroll via `IntersectionObserver`
- ✅ **Animations au scroll** — Fade-in-up des éléments à l'entrée dans le viewport
- ✅ **Menu hamburger** — Animé, fermeture automatique au clic d'un lien
- ✅ **Smooth scroll** — Navigation fluide entre les sections
- ✅ **Validation formulaire** — Validation en temps réel + message de succès simulé

---

## 📱 Responsive Breakpoints

| Breakpoint | Taille |
|------------|--------|
| Mobile | < 640px |
| Tablette | 640px – 1023px |
| Desktop | ≥ 1024px |

---

## 📞 Informations de la clinique

- **Adresse** : Avenue Habib Bourguiba, Sfax 3000, Tunisie
- **Téléphone** : +216 74 000 000
- **Urgences** : +216 74 000 001
- **Email** : contact@clinique-alshifa.tn

---

© 2025 Clinique AlShifa. Tous droits réservés.
