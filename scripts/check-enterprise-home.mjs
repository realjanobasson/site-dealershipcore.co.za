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
  'Five-star experience standard',
]) {
  if (!source.includes(required)) {
    throw new Error(`Missing enterprise homepage requirement: ${required}`);
  }
}

// The source template may contain either plain or escaped quote characters,
// depending on how GitHub serialises the JavaScript template literal. Count the
// semantic star elements without depending on one quote representation.
const enterpriseSection = source.match(/const ENTERPRISE_SECTION = `[\s\S]*?`;\n\nconst STYLE/)?.[0] || '';
const starBlocks = enterpriseSection.match(/class=\\?["']dce-star\\?["']/g) || [];

if (starBlocks.length !== 5) {
  throw new Error(
    `Enterprise five-star experience panel must contain exactly five star elements; found ${starBlocks.length}.`,
  );
}

if ((source.match(/dcx-tool-icon/g) || []).length < 2) {
  throw new Error('Tool dropdown icon replacement is missing.');
}

console.log('Validated enterprise trust section, five-star experience panel and category icons.');
