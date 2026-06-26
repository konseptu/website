# design-sync notes

- **Repo shape:** This is the Konseptu **Astro website**, not a component library. 60 `.astro`
  components + 1 React component (`RotatingWords.tsx`); no package exports, no Storybook, no
  compiled component `dist/` (its `dist/` is a static HTML site). So a standard component sync
  isn't possible — synced **tokens only** at the user's direction (2026-06-17).
- **What's synced:** `ds-bundle/` → colors, fonts, signature utility classes. Built by hand from:
  - `src/components/CustomStyles.astro` — `--aw-color-*` and `--aw-font-*` CSS variables (`:root` + `.dark`)
  - `tailwind.config.js` — gradient-text + button utilities, font-family mapping
  - `src/assets/styles/tailwind.css` — `.btn*` component classes, Roboto Mono `@font-face`
  - `@fontsource-variable/inter` — Inter Variable woff2 (latin wght axis)
  - `src/assets/fonts/RobotoMono/` — Roboto Mono ttf (regular/medium/bold)
- **Dark-mode-first:** site config `ui.theme = "dark:only"`. `.dark` palette is the shipped one.
- **To re-sync:** re-derive `ds-bundle/` from the sources above if those files change, then re-upload.
