# 🚀 Konseptu Website

Home website of [Konseptu](https://konseptu.com). Built with [Astro 5.0](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/).

## Tech Stack

- **Framework:** Astro 5.0
- **Styling:** Tailwind CSS
- **Content:** MDX support
- **Image Optimization:** Astro Assets & Unpic
- **Analytics:** Google Analytics integration
- **SEO:** Built-in sitemap generation & Open Graph tags

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or pnpm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev     # Start dev server at localhost:4321
npm run build   # Build for production
npm run preview # Preview production build
npm run check   # Check for errors
npm run fix     # Run ESLint & Prettier
```

### Project Structure

```
/
├── public/           # Static assets
├── src/
│   ├── assets/      # Images and styles
│   ├── components/  # UI components
│   ├── content/     # Blog posts and content
│   ├── layouts/     # Page layouts
│   ├── pages/       # Route components
│   └── config.yaml  # Site configuration
```

### Configuration

Basic configuration can be modified in `./src/config.yaml`:

```yaml
site:
  name: 'Your Site Name'
  site: 'https://yoursite.com'
  base: '/'
  trailingSlash: false

# Additional config options...
```

### Deployment

Build your site for production:

```bash
npm run build
```

Deploy the `dist` folder to your preferred hosting platform:

- [Deploy to Netlify](https://app.netlify.com/start)
- [Deploy to Vercel](https://vercel.com/new)

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE.md) file for details.
