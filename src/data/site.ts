import type { ImageMetadata } from 'astro';
import type { CaseSlug, Localized, RouteKey } from '../i18n';
import type { UiKey } from '../i18n/ui';

import homePinsxp from '../assets/projects/home/pinsxp.jpg';
import homeIn99 from '../assets/projects/in99/cover.jpg';
import homeMercantil from '../assets/projects/mercantil/cover.jpg';
import homeCrudebeauty from '../assets/projects/crudebeauty/cover.jpg';
import portfolioPinsxp from '../assets/projects/portfolio/pinsxp.jpg';
import portfolioIn99 from '../assets/projects/in99/portrait.jpg';
import portfolioMercantil from '../assets/projects/mercantil/portrait.jpg';
import portfolioCrudebeauty from '../assets/projects/crudebeauty/portrait.jpg';
import portfolioCentroMedico from '../assets/projects/portfolio/centro-medico-is.jpg';
import portfolioNuva from '../assets/projects/portfolio/nuva.jpg';
import homeKuara from '../assets/projects/kuara/cover.jpg';
import portfolioKuara from '../assets/projects/kuara/portrait.jpg';

// Language-independent facts. Titles, descriptions and labels live in src/i18n/ui.ts.
export const site = {
  name: 'Emely Aponte',
  // The Framer site links two CV files: one from the home page, one from "Acerca de mí".
  cvHome: 'https://drive.google.com/file/d/1UstvP3TviDANhi7TG-Btqu81VbkWWR1_/view?usp=sharing',
  cvAbout: 'https://drive.google.com/file/d/1mfQPhDmBcE3dlHyk5-rFMhvECJi-pxbM/view?usp=sharing',
  linkedin: 'https://www.linkedin.com/in/emiikira/',
  behance: 'https://www.behance.net/emiikira',
};

export const nav: { route: RouteKey; label: UiKey }[] = [
  { route: 'home', label: 'nav.home' },
  { route: 'about', label: 'nav.about' },
  { route: 'projects', label: 'nav.projects' },
  { route: 'contact', label: 'nav.contact' },
];

/** Labels live in src/i18n/ui.ts, so they switch with the language. */
export type ProjectStatus = 'project.status.launched' | 'project.status.ongoing' | 'project.status.building';

export interface Project {
  slug: CaseSlug;
  name: string;
  /** Short label shown as a tag on cards. */
  category: Localized;
  /** One sentence that tells what was designed and for whom. */
  summary: Localized;
  cover: ImageMetadata;
  /** Full-bleed photo for the vertical cards on /proyectos; `focus` is its object-position. */
  portrait: ImageMetadata;
  focus?: string;
  /** Optional delivery status shown on the cards next to "Caso de estudio". */
  status?: ProjectStatus;
  /** Shown in the featured grid of the home page (default true). */
  featured?: boolean;
}

export interface UpcomingProject {
  name: string;
  status: ProjectStatus;
  portrait: ImageMetadata;
  focus?: string;
}

export const projects: Project[] = [
  {
    slug: 'pinsxp',
    name: 'PinsXP',
    category: { es: 'Sistema de diseño', en: 'Design system' },
    summary: {
      es: 'Compass, un sistema de diseño escalable y asistido por IA para una app social de lugares y momentos.',
      en: 'Compass, a scalable, AI-assisted design system for a social app about places and moments.',
    },
    cover: homePinsxp,
    portrait: portfolioPinsxp,
    status: 'project.status.ongoing',
  },
  {
    slug: 'kuara',
    name: 'Kuara',
    category: { es: 'Fintech · Pagos P2P', en: 'Fintech · P2P payments' },
    summary: {
      es: 'Pagos P2P interbancarios con el número de celular: flujos, sistema de diseño y Storybook para cinco bancos de Panamá.',
      en: 'Interbank P2P payments with a mobile number: flows, design system and Storybook for five banks in Panama.',
    },
    cover: homeKuara,
    portrait: portfolioKuara,
    focus: 'center top',
  },
  {
    slug: 'mercantil',
    name: 'Mercantil Banco',
    category: { es: 'Banca móvil', en: 'Mobile banking' },
    summary: {
      es: 'Rediseño de la app de Mercantil Banco Panamá para sus clientes en Venezuela, centrado en las transferencias internacionales.',
      en: 'Redesign of the Mercantil Banco Panamá app for its customers in Venezuela, focused on international transfers.',
    },
    cover: homeMercantil,
    portrait: portfolioMercantil,
  },
  {
    slug: 'crudebeauty',
    name: 'CrudeBeauty',
    category: { es: 'E-commerce y branding', en: 'E-commerce & branding' },
    summary: {
      es: 'Identidad de marca y tienda online para una firma de aceites esenciales orgánicos.',
      en: 'Brand identity and online store for an organic essential oils company.',
    },
    cover: homeCrudebeauty,
    portrait: portfolioCrudebeauty,
  },
  {
    slug: 'in99',
    name: 'in99',
    category: { es: 'Fintech', en: 'Fintech' },
    summary: {
      es: 'App móvil de calculadora de ahorro para una startup de servicios profesionales online, de la investigación al prototipo.',
      en: 'Savings calculator mobile app for an online professional services startup, from research to prototype.',
    },
    cover: homeIn99,
    portrait: portfolioIn99,
  },
];

export const upcomingProjects: UpcomingProject[] = [
  { name: 'Centro Médico IS', status: 'project.status.building', portrait: portfolioCentroMedico, focus: '26% center' },
  { name: 'Nuva', status: 'project.status.building', portrait: portfolioNuva, focus: '40% center' },
];
