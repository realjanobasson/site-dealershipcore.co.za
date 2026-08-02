import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../src/dealershipcore-hero-trust-fix.js', import.meta.url), 'utf8');

for (const required of [
  "import site from './dealershipcore-enterprise-images.js'",
  'photo-1680701572790-b7b46d35b1bd',
  'photo-1648737966968-5f50e6bf9e46',
  'hero-proof-cards',
  'hero-proof-stars',
  'Built for dealership teams',
  'One operating view',
  'dcx-photo-main',
  'dcx-photo-small',
]) {
  if (!source.includes(required)) throw new Error(`Missing homepage correction: ${required}`);
}

console.log('Validated dealership-specific images and green hero star boxes.');
