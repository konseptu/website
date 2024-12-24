import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';
import typographyPlugin from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        accent: 'var(--aw-color-accent)',
        default: 'var(--aw-color-text-default)',
        muted: 'var(--aw-color-text-muted)',
      },
      fontFamily: {
        sans: ['var(--aw-font-sans, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif, ui-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        mono: ['Roboto Mono', ...defaultTheme.fontFamily.mono],
      },

      animation: {
        fade: 'fadeInUp 1s both',
      },

      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(2rem)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    typographyPlugin,
    plugin(({ addVariant }) => {
      addVariant('intersect', '&:not([no-intersect])');
    }),
    function ({ addUtilities }) {
      addUtilities({
        '.fire-gradient-text': {
          'box-decoration-clone': 'clone',
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
          'color': 'transparent',
          'background-image': 'linear-gradient(to right, var(--aw-color-primary), var(--aw-color-accent))',
        },
        '.ocean-gradient-text': {
          'box-decoration-clone': 'clone',
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
          'color': 'transparent',
          'background-image': 'linear-gradient(to right, var(--aw-color-primary), var(--aw-color-secondary))',
        },
      })
    },
  ],
  darkMode: 'class',
};
