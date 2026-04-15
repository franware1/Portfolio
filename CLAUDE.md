# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Vite dev server
npm run build     # TypeScript compile + Vite production build
npm run preview   # Preview production build locally
```

## Architecture

React 19 SPA with client-side routing via React Router v7. Vite handles bundling with the `@vitejs/plugin-react` and `@tailwindcss/vite` plugins.

**Routing** (`src/App.tsx`): Four routes — `/`, `/about`, `/projects`, `/blog` — each mapped to a page component in `src/pages/`.

**Styling**: Tailwind CSS v4 (imported via `@import "tailwindcss"` in `src/styles/styles.css`) combined with Bootstrap 5. CSS custom properties for the design system are defined in `:root` in `styles.css`:
- `--color-bg: #fcd62c` (yellow)
- `--color-accent: #ff4d00` (orange-red)
- `--color-text: #000000`

**Fonts**: Two custom fonts are available in `public/assets/fonts/` — `RRRClimax-100.woff2` and `PlayfairDisplay-Medium.woff2`. They are not yet wired up with `@font-face` rules.

**Bootstrap duplication**: Bootstrap CSS is loaded both via CDN in `index.html` and via npm import in `src/main.tsx`. One should be removed when cleaning this up.
