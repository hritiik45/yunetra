# Yunetra — Precision Technology & Hardware Platform

A modern, production-grade web application architecture engineered for **Yunetra**, a premium product-led technology company specializing in high-integrity industrial platforms, optical grading hardware, and mission-critical enterprise systems.

---

## 1. Tech Stack

- **Core**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/) with semantic CSS variable tokens
- **Routing**: [React Router DOM v6](https://reactrouter.com/)
- **Animation Foundation**: [Framer Motion](https://www.framer.com/motion/), [GSAP](https://gsap.com/), and [Lenis](https://lenis.darkroom.engineering/) (with reduced-motion detection)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 2. Brand Identity & Design Tokens

Yunetra's visual direction is built upon an obsidian black and champagne metallic palette:

| Token Name | Hex Code | Semantic Role |
| :--- | :--- | :--- |
| **Obsidian Black** | `#080808` | Primary background / Deep dark surface |
| **Warm Champagne Ivory** | `#F5F1E8` | Primary foreground text / High-contrast highlights |
| **Champagne Gold** | `#C6A66B` | Primary interactive accents, badges, brand emblems |
| **Brushed Silver** | `#BFC4C8` | Secondary typography, metallic borders, icons |
| **Graphite** | `#252525` | Default structural borders, subtle surface panels |

### Semantic CSS Variables (`src/styles/tokens.css`)
- **Backgrounds**: `--bg-primary`, `--bg-secondary`
- **Surfaces**: `--surface-primary`, `--surface-secondary`, `--surface-tertiary`
- **Typography**: `--text-primary`, `--text-secondary`, `--text-muted`
- **Borders**: `--border-default`, `--border-strong`
- **Accents**: `--accent-primary`, `--accent-hover`, `--accent-pressed`
- **Focus Rings**: `--focus-ring`
- **Typography Fonts**: `--font-display` (Barlow Condensed / Anton) & `--font-sans` (Inter)

---

## 3. Project Structure

```
yunetra-website/
├── public/
│   ├── favicon.svg              # Precision metallic gold/silver emblem
│   ├── robots.txt               # Crawler directives
│   └── images/                  # Public static images
├── src/
│   ├── assets/
│   │   ├── logo/                # Brand mark and vectors
│   │   ├── images/              # Dynamic asset storage
│   │   └── icons/               # Specialized iconography
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx       # Responsive header with dropdown & mobile drawer
│   │   │   ├── Footer.jsx       # Semantic structured footer
│   │   │   └── MainLayout.jsx   # Layout wrapper with smooth scrolling lifecycle
│   │   ├── ui/
│   │   │   ├── Button.jsx       # Button & link with semantic variants
│   │   │   ├── Container.jsx    # Responsive constraint wrapper
│   │   │   ├── SectionHeading.jsx # Unified section title & eyebrow
│   │   │   └── Reveal.jsx       # Framer Motion scroll reveal component
│   │   └── common/              # Common utility widgets
│   ├── sections/
│   │   └── home/                # Independent homepage structural sections
│   │       ├── HeroSection.jsx
│   │       ├── ProductShowcase.jsx
│   │       ├── ServicesSection.jsx
│   │       ├── AboutSection.jsx
│   │       ├── PortfolioSection.jsx
│   │       ├── ProcessSection.jsx
│   │       ├── TestimonialsSection.jsx
│   │       ├── ContactCTA.jsx
│   │       └── index.js
│   ├── pages/
│   │   ├── Home.jsx             # Assembled homepage
│   │   ├── Products.jsx         # Product overview
│   │   ├── Ratnakhata.jsx       # Gemstone valuation platform
│   │   ├── BoundaryX.jsx        # Industrial edge sensor platform
│   │   ├── Services.jsx         # Engineering capabilities
│   │   ├── About.jsx            # Company narrative & principles
│   │   ├── Contact.jsx          # Secure inquiry form
│   │   ├── PrivacyPolicy.jsx    # Governance & data protection
│   │   └── TermsConditions.jsx  # Legal & terms of engagement
│   ├── layouts/                 # Page-specific layout wrappers
│   ├── routes/
│   │   └── AppRoutes.jsx        # Route definitions & scroll restoration
│   ├── data/
│   │   ├── navigation.js        # Header & footer link models
│   │   ├── products.js          # Product descriptions & routing
│   │   └── services.js          # Engineering capability data
│   ├── hooks/                   # Custom React hooks
│   ├── lib/
│   │   ├── animations.js        # Motion variants & Lenis singleton
│   │   └── utils.js             # cn classnames helper
│   ├── styles/
│   │   ├── tokens.css           # Semantic CSS variables
│   │   ├── globals.css          # Tailwind base & global resets
│   │   └── animations.css       # Keyframes & reduced-motion rules
│   ├── App.jsx                  # Root router provider
│   └── main.jsx                 # Application entrypoint
├── index.html                   # HTML template with preloaded fonts & SEO tags
├── package.json                 # Dependency manifest
├── vite.config.js               # Vite bundler configuration & path aliases
├── tailwind.config.js           # Semantic Tailwind token bindings
├── postcss.config.js            # PostCSS pipeline
├── .gitignore                   # Version control ignore rules
└── README.md                    # Project documentation
```

---

## 4. Getting Started

### Prerequisites
- Node.js `v18.0.0` or higher (tested on Node `v24.x`)
- npm `v9.0.0` or higher

### Installation
```bash
npm install
```

### Development Server
Starts the local development server on `http://localhost:5173`:
```bash
npm run dev
```

### Production Build
Compiles assets to `dist/` with zero warnings or errors:
```bash
npm run build
```

### Preview Production Build
Locally preview the generated production build:
```bash
npm run preview
```

---

## 5. Development Scope & Next Phase

- **Current State**: Phase 1 (Project Initialization) complete. All routes, components, styles, design tokens, and structural placeholder sections are fully operational.
- **Next Phase**: Replicating the **Hero Section** using the supplied visual reference image, followed by individual homepage sections in subsequent iterations.
