# Konseptu brand tokens

Design tokens extracted from the [konseptu.com](https://konseptu.com) website (Astro + Tailwind).
This is a **tokens-only** package — colors, fonts, and a few signature utility classes — so
designs match the Konseptu brand. There are no reusable components here; the source site is
built from Astro `.astro` components that don't compile to a component library.

## How to use

Designs receive `styles.css`. Everything is reachable from its `@import` closure:

- `fonts/fonts.css` — Inter Variable (sans/serif/heading) + Roboto Mono (mono)
- `tokens/colors.css` — color custom properties, light (`:root`) and dark (`.dark`)
- `tokens/typography.css` — font-family custom properties
- `tokens/utilities.css` — gradient-text, button, and surface classes
- `tokens/tokens.json` — machine-readable token reference

**Dark-mode-first.** The site ships `ui.theme = "dark:only"`. Add `class="dark"` on a wrapping
element (or `<html>`) to get the shipped brand palette; the bare `:root` palette is the light variant.

## Token vocabulary

Reference colors and fonts as CSS variables — these are the source of truth:

| Token | `var(--…)` | Dark (shipped) | Light |
|---|---|---|---|
| Primary | `--aw-color-primary` | `#481fff` | `#411ce6` |
| Primary light | `--aw-color-primary-light` | `#7152fd` | `#7152fd` |
| Secondary | `--aw-color-secondary` | `#00ff9f` | `#00bf77` |
| Secondary light | `--aw-color-secondary-light` | `#68fcc5` | `#68fcc5` |
| Accent | `--aw-color-accent` | `#ff4f00` | `#e66100` |
| Heading text | `--aw-color-text-heading` | `rgb(247 248 248)` | `rgb(0 0 0)` |
| Body text | `--aw-color-text-default` | `rgb(229 236 246)` | `rgb(16 16 16)` |
| Muted text | `--aw-color-text-muted` | 66% of body | 66% of body |
| Page bg | `--aw-color-bg-page` | `rgb(3 6 32)` | `rgb(255 255 255)` |

Fonts: `--aw-font-sans`, `--aw-font-serif`, `--aw-font-heading` → **Inter Variable**;
`--aw-font-mono` → **Roboto Mono**.

## Signature utility classes

Plain CSS classes (in `tokens/utilities.css`) you can apply directly — they read the tokens, so
they follow light/dark automatically:

- `.fire-gradient-text` — primary → accent gradient headline text
- `.ocean-gradient-text` — primary → secondary gradient headline text
- `.btn`, `.btn-primary` — pill-shaped buttons (fully rounded; primary fills with brand primary,
  hovers to secondary)
- `.bg-page`, `.bg-dark`, `.text-default`, `.text-muted`, `.text-heading` — surface/text helpers

### Example

```jsx
<div className="dark" style={{ background: 'var(--aw-color-bg-page)', padding: '4rem' }}>
  <h1 style={{ fontFamily: 'var(--aw-font-heading)', fontWeight: 800 }}>
    Build with <span className="fire-gradient-text">Konseptu</span>
  </h1>
  <p style={{ color: 'var(--aw-color-text-muted)', fontFamily: 'var(--aw-font-sans)' }}>
    Software consultancy, end to end.
  </p>
  <button className="btn-primary">Get in touch</button>
</div>
```
