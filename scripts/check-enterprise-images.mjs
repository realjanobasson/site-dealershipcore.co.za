import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../src/dealershipcore-enterprise-images.js', import.meta.url), 'utf8');

for (const required of [
  'images.pexels.com/photos/7144177',
  'images.pexels.com/photos/4173199',
  'images.pexels.com/photos/4173194',
  'images.pexels.com/photos/7144182',
  'dce-enterprise-scene',
  'replaceIrrelevantImages',
  'dealership-specific',
]) {
  if (!source.includes(required)) throw new Error(`Missing dealership imagery requirement: ${required}`);
}

console.log('Validated dealership-specific homepage photography and enterprise image treatment.');
