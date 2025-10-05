# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is **Konseptu's website** (https://konseptu.com) - a software consultancy company website built with **Astro 5.0** and **Tailwind CSS**. The site features a custom integration based on AstroWind template architecture.

## Development Commands

### Core Commands

- `npm run dev` - Start dev server at localhost:4321
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

### Code Quality

- `npm run check` - Run all checks (Astro, ESLint, Prettier)
- `npm run check:astro` - Type-check Astro files
- `npm run check:eslint` - Check ESLint errors
- `npm run check:prettier` - Check formatting
- `npm run fix` - Auto-fix ESLint and Prettier issues
- `npm run fix:eslint` - Auto-fix ESLint only
- `npm run fix:prettier` - Auto-fix Prettier only

### Node Version

- Required: Node.js ^18.17.1 || ^20.3.0 || >= 21.0.0

## Architecture

### Configuration System

The site uses a YAML-based configuration system at `src/config.yaml` that controls:

- Site metadata (title, description, SEO)
- Blog functionality (enabled/disabled, permalinks, pagination)
- Analytics integration
- UI theme settings
- Navigation structure

The configuration is loaded through a custom Astro integration (`vendor/integration/`) that:

1. Reads `src/config.yaml` via `loadConfig` utility
2. Transforms it using `configBuilder`
3. Exposes config as virtual module `astrowind:config`
4. Updates robots.txt with sitemap during build

### Directory Structure

```
src/
├── assets/         # Images and static assets
├── components/     # Reusable UI components
│   ├── blog/      # Blog-specific components
│   ├── common/    # Shared components (Header, Footer, etc)
│   ├── ui/        # Base UI components (Button, Form, etc)
│   └── widgets/   # Page section widgets (Hero, Features, etc)
├── content/       # Astro content collections configuration
├── data/          # Content data
│   └── post/      # Blog posts (Markdown/MDX)
├── layouts/       # Page layout templates
│   ├── Layout.astro          # Base layout
│   ├── PageLayout.astro      # Standard page layout
│   ├── LandingLayout.astro   # Landing page layout
│   └── MarkdownLayout.astro  # MDX content layout
├── pages/         # File-based routing
├── utils/         # Utility functions
│   ├── blog.ts              # Blog utilities
│   ├── permalinks.ts        # URL generation
│   ├── images.ts            # Image helpers
│   ├── images-optimization.ts # Image optimization
│   └── frontmatter.ts       # Markdown plugins (reading time, responsive tables, lazy images)
├── config.yaml    # Site configuration
├── navigation.ts  # Header/footer navigation data
└── types.d.ts     # TypeScript definitions
```

### Content Collections

- **Posts** are stored in `src/data/post/` as Markdown/MDX files
- Collection schema defined in `src/content/config.ts` with metadata support
- Posts include: title, excerpt, image, category, tags, author, publishDate, updateDate, draft status
- Reading time is automatically calculated via remark plugin

### Navigation & Routing

- Navigation structure defined in `src/navigation.ts` with `headerData` and `footerData` exports
- Uses `getPermalink()` utility from `utils/permalinks.ts` for consistent URL generation
- Blog permalink pattern configured in `config.yaml` (supports variables: %slug%, %year%, %month%, %day%, etc.)

### Theming & Styling

- Tailwind CSS with custom configuration
- Theme mode: system/light/dark controlled via `config.yaml`
- Custom styles in `src/components/CustomStyles.astro`
- Logo variants for light/dark modes supported

### Integration & Plugins

- **Custom AstroWind integration** (`vendor/integration/`) - manages config loading and robots.txt generation
- **astro-icon** - Icon system using Tabler and Flat Color Icons
- **astro-compress** - Production asset compression
- **@astrojs/sitemap** - Auto-generates sitemap
- **@astrojs/partytown** - (conditionally loaded) Third-party script optimization
- **Markdown plugins**: reading-time, responsive-tables, lazy-images (in `utils/frontmatter.ts`)

### Path Aliases

- `~` → `./src` (configured in `astro.config.ts`)
- Use `~/components/...` instead of relative paths

## Key Patterns

### Adding New Pages

1. Create `.astro` or `.mdx` file in `src/pages/`
2. Use appropriate layout from `src/layouts/`
3. For MDX, frontmatter metadata will be applied automatically

### Modifying Navigation

Edit `src/navigation.ts` - update `headerData.links` or `footerData.links`

### Changing Site Config

Edit `src/config.yaml` - changes are hot-reloaded in dev mode via integration watch

### Working with Images

- Astro Assets for optimization (built-in)
- Unpic for external images
- Allowed external domains configured in `astro.config.ts` under `image.domains`

### Blog Configuration

All blog settings in `config.yaml` under `apps.blog`:

- Toggle blog features (list, post, category, tag pages)
- Set pagination (`postsPerPage`)
- Configure related posts
- Customize URL patterns

## Visual Checking and Debugging

### Playwright MCP

You have access to Playwright MCP's tools, and the app runs at localhost:4321.

You must use Playwright MCP if:

- Are in need of more context about how you will do stuff
- Double-checking if your fixes or implementation is correct
