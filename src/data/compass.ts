// Compass, the PinsXP design system: variables exported from Figma (Variables → Export, W3C design tokens).
// To update the PinsXP case study, export the collections again and replace the files in ./compass/:
//   primitives.tokens.json         ← collection "primitives" (mode Default)
//   semantics.light.tokens.json    ← collection "semantics" (mode Light mode)
//   semantics.dark.tokens.json     ← collection "semantics" (mode Dark mode)

import primitivesFile from './compass/primitives.tokens.json';
import lightFile from './compass/semantics.light.tokens.json';
import darkFile from './compass/semantics.dark.tokens.json';

type TokenNode = { [key: string]: unknown };
type Token = {
  $type: string;
  $value: unknown;
  $extensions?: { 'com.figma.aliasData'?: { targetVariableName?: string } };
};
type ColorValue = { hex: string; alpha: number };

export type Swatch = {
  /** Name of the primitive it points to, without the "primary colors/" group (e.g. "gray blue/950") */
  alias?: string;
  hex: string;
  /** 0–100 */
  opacity: number;
  /** Ready to use as a CSS colour */
  css: string;
};

const isToken = (node: unknown): node is Token => typeof node === 'object' && node !== null && '$value' in node;

function find(file: unknown, path: string): Token {
  let node: unknown = file;
  for (const key of path.split('/')) {
    node = (node as TokenNode | undefined)?.[key];
  }
  if (!isToken(node)) throw new Error(`Compass: token "${path}" not found`);
  return node;
}

function count(node: unknown): number {
  if (isToken(node)) return 1;
  if (typeof node !== 'object' || node === null) return 0;
  return Object.entries(node).reduce((total, [key, child]) => (key.startsWith('$') ? total : total + count(child)), 0);
}

function swatch(token: Token): Swatch {
  const { hex, alpha } = token.$value as ColorValue;
  const opacity = Math.round(alpha * 100);
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
  const alias = token.$extensions?.['com.figma.aliasData']?.targetVariableName?.replace(/^primary colors\//, '');
  return {
    alias,
    hex: hex.replace('#', '').toUpperCase(),
    opacity,
    css: opacity === 100 ? hex : `rgb(${r} ${g} ${b} / ${alpha.toFixed(2)})`,
  };
}

/** A primitive colour, by its path inside "primary colors" (e.g. "base/white", "gray blue/50"). */
export const primitive = (path: string): Swatch => swatch(find(primitivesFile, `primary colors/${path}`));

/** Every step of a primitive ramp, in the order of the file (50 → 950). */
export function ramp(group: string): { step: string; swatch: Swatch }[] {
  const node = (primitivesFile as TokenNode)['primary colors'] as TokenNode;
  const steps = node[group] as TokenNode;
  return Object.keys(steps).map((step) => ({ step, swatch: primitive(`${group}/${step}`) }));
}

/** A semantic colour in both modes, by its full path (e.g. "colors/text/primary"). */
export const semantic = (path: string): { light: Swatch; dark: Swatch } => ({
  light: swatch(find(lightFile, path)),
  dark: swatch(find(darkFile, path)),
});

/** Number of variables in a top-level primitive group (spacing, radius…). */
export const primitiveGroupSize = (group: string): number => count((primitivesFile as TokenNode)[group]);

export const counts = {
  primitives: count(primitivesFile),
  semantics: count(lightFile),
};
