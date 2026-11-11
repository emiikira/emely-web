// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  redirects: {
    // Old URL of the projects page
    '/portafolio': '/proyectos',
  },
  // Spanish keeps the unprefixed URLs; English lives under /en/. Strings and slugs are in src/i18n.
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: { prefixDefaultLocale: false },
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
      // Higher quality and full-resolution colour: the purple/fuchsia photos band and blur with 4:2:0 subsampling
      config: { webp: { quality: 90, smartSubsample: true, effort: 6 } },
    },
  },
  // Production URL, used for canonical links and the absolute URLs of the social-sharing tags.
  site: 'https://emelyaponte.com',
});
