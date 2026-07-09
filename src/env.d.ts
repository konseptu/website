// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="vite/client" />
/// <reference types="../vendor/integration/types.d.ts" />

// Tawk.to live chat widget, injected at runtime via its embed script.
interface Window {
  Tawk_API?: {
    toggle: () => void;
    [key: string]: unknown;
  };
  Tawk_LoadStart?: Date;
}
