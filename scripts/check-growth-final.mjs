import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../src/dealershipcore-growth-final.js', import.meta.url), 'utf8');

for (const requirement of [
  "import site from './dealershipcore-growth.js'",
  'dc-growth-home-style',
  'isolateHomepageStyles',
  'correctRelatedLabels',
  'GROWTH_PAGE_PATHS',
  'scoped-homepage-styles-and-correct-related-links',
]) {
  if (!source.includes(requirement)) throw new Error(`Missing final growth integration requirement: ${requirement}`);
}

if (!source.includes(':root\\{--ink:#071427')) {
  throw new Error('The final wrapper must target and remove the unscoped growth style block from the existing homepage.');
}
if (!source.includes('#dealership-guides.homeGuides')) {
  throw new Error('The homepage guide styles must remain scoped to #dealership-guides.');
}

console.log('Validated scoped homepage growth styles and corrected related-page labels.');
