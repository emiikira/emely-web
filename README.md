# Emely Aponte · Portafolio

Sitio estático hecho con [Astro](https://astro.build). El diseño sale del archivo de Figma "Emely" (página *Emely web design*) y el contenido, de la web en Framer.

## Comandos

| Comando           | Qué hace                                 |
| ----------------- | ---------------------------------------- |
| `npm install`     | Instala las dependencias                 |
| `npm run dev`     | Servidor local con recarga en caliente   |
| `npm run build`   | Genera el sitio en `dist/`               |
| `npm run preview` | Sirve la versión de `dist/`              |
| `npm run check`   | Comprueba los tipos de los `.astro`      |

## Estructura

- `src/pages/`: Inicio, Sobre mí (`sobre-mi`), Proyectos (`proyectos/`, con los casos de PinsXP, Finaer & Fivy, Kuara, Mercantil, CrudeBeauty, in99 y Centro Médico) y Contacto (`contacto`, más `contacto/gracias`). `/portafolio` redirige a `/proyectos`.
- `src/layouts/CaseStudy.astro` y `src/components/CaseSection.astro`: plantilla común de los casos de estudio (índice lateral, secciones numeradas, tarjetas, cifras y siguiente proyecto).
- `src/data/site.ts`: enlaces (CV, LinkedIn, Behance) y datos de los proyectos.
- `src/styles/global.css`: tokens de diseño. Tipografía única **Poppins** (300/400/500/600/700) y paleta de dos colores: morado `#6600BF` y fucsia `#C9009D`, más neutros.
- `src/assets/`: imágenes que Astro optimiza (`figma/` viene de Figma y `projects/` del Framer).
- `public/icons/`: SVG exportados de Figma (logos y redes), ajustados a la paleta.

## Formulario de contacto

Usa [Netlify Forms](https://docs.netlify.com/forms/setup/): Netlify detecta el formulario `contacto` al desplegar. Para que funcione:

1. En Netlify, activa **Forms → Enable form detection** y vuelve a desplegar.
2. En **Forms → Form notifications**, añade el email donde Emely quiere recibir los mensajes.

En local (`npm run dev` o `npm run preview`) el envío falla a propósito y el formulario muestra un mensaje de error con el enlace a LinkedIn.

## Pendiente

- Si el sitio pasa a un dominio propio, actualiza `site` en `astro.config.mjs`.
