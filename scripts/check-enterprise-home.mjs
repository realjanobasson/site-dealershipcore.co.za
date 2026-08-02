import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../src/dealershipcore-enterprise-home.js', import.meta.url), 'utf8');

for (const required of [
  'dce-enterprise',
  'dce-stars',
  'dce-capability-grid',
  'dce-trust-badges',
  'replaceToolIcons',
  'dcx-tools-section',
  'No invented product data',
]) {
  if (!source.includes(required)) throw new Error(`Missing enterprise homepage requirement: ${required}`);
}

if ((source.match(/class=\\"dce-star\\"/g) || []).length !== 5) {
  throw new Error('Enterprise trust strip must contain exactly five green star blocks.');
}

if ((source.match(/dcx-tool-icon/g) || []).length < 2) {
  throw new Error('Tool dropdown icon replacement is missing.');
}

console.log('Validated enterprise trust section, five green stars and category icons.');
