# Restaurang Nanking

Restaurant website for Restaurang Nanking, a family-owned Chinese restaurant in Gothenburg, Sweden (since 1987). The site is in Swedish.

## Tech Stack

- **Framework:** React Router v7 (with SSR enabled)
- **Language:** TypeScript (strict mode)
- **Build tool:** Vite 6
- **Styling:** Tailwind CSS v4 (via `@tailwindcss/vite` plugin) + custom CSS with CSS variables
- **Linter/Formatter:** Biome (spaces, 2-width indent, double quotes, trailing commas, 100 line width)
- **Runtime:** Node.js
- **Package manager:** npm

## Project Structure

```
app/
  root.tsx            # Root layout, meta tags, structured data (JSON-LD), Google Fonts
  routes.ts           # Route config (single index route)
  routes/
    _index.tsx        # Landing page — assembles all sections, loader fetches menu from Google Sheets
  components/
    Nav.tsx           # Fixed top nav with hamburger drawer (mobile) and desktop links
    Hero.tsx          # Full-viewport hero with Ken Burns bg, lantern SVGs, CTA buttons
    Carousel.tsx      # Auto-advancing image carousel for offers/news
    Menu.tsx          # Tabbed menu with category filtering, SSR fallback for SEO
    About.tsx         # About section with stats and image
    OpeningHours.tsx  # Opening hours table section (dark bg, gold text)
    Location.tsx      # Contact info + embedded Google Maps iframe
  data/
    menu.ts           # Fallback menu data: typed MenuItem/MenuCategory arrays
    sheets.server.ts  # Server-side Google Sheets fetcher with 1h cache, CSV parsing, fallback to menu.ts
  app.css             # All custom CSS: design tokens, component styles, responsive breakpoints
public/
  favicon.svg         # SVG favicon
  about-us.jpeg       # About section image
```

## Design Language

- **Palette:** Dark ink (`#1a1008`) on warm paper (`#f5efe4`), Chinese lacquer red (`#c0392b`), gold accents (`#c9933a`)
- **Typography:**
  - Headings/labels: Cormorant Garamond (serif, elegant)
  - Body text: Libre Baskerville (serif, readable)
  - Chinese characters: Noto Serif SC
- **Visual style:** Traditional Chinese restaurant aesthetic — ornamental gold lines, lantern SVGs, red stamp motif, sepia image filters, Ken Burns hero animation
- **Layout:** Single-page with anchor navigation (`#meny`, `#om-oss`, `#oppettider`, `#hitta-hit`). Responsive with breakpoints at 640px and 1024px.

## Key Commands

```bash
npm run dev         # Start dev server
npm run build       # Production build
npm run start       # Serve production build
npm run typecheck   # Run TypeScript type checking
npm run lint        # Run Biome linter
npm run format      # Auto-format with Biome
```

## Path Alias

`~/` maps to `./app/` (configured in both vite.config.ts and tsconfig.json).

## Notes

- SSR is enabled in `react-router.config.ts`
- Menu data is fetched from a public Google Sheets spreadsheet at runtime (server-side via `sheets.server.ts`), with 1-hour in-memory cache and fallback to static `menu.ts` data
- Interactive components (`Nav`, `Menu`, `Carousel`) use `"use client"` / client-side `useState`
- Structured data (JSON-LD schema.org Restaurant) is embedded in root.tsx
- Opening hours are displayed in a dedicated `OpeningHours` section (separate from About)
- External dependencies: Foodora for online ordering, Google Maps embed for location
