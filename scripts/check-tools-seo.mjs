import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../src/dealershipcore-tools-seo.js', import.meta.url), 'utf8');
const finalSource = readFileSync(new URL('../src/dealershipcore-tools-final.js', import.meta.url), 'utf8');

const slugs = [
  'vehicle-valuation',
  'car-valuation',
  'value-my-cars',
  'vehicle-valuation-engine',
  'finance-your-cars',
  'dealership-software',
];

for (const slug of slugs) {
  if (!source.includes(`slug: '${slug}'`)) throw new Error(`Missing tool route: ${slug}`);
  if (!source.includes(`/tools/${slug}/`)) throw new Error(`Missing internal link for: ${slug}`);
}

for (const required of [
  'dcx-tools-menu',
  'FAQPage',
  'BreadcrumbList',
  'SoftwareApplication',
  'appendSitemap',
  'appendLlms',
  'HOME_TRUST_SECTION',
  'HOME_TOOLS_SECTION',
  'HOME_FLOW_SECTION',
]) {
  if (!source.includes(required)) throw new Error(`Missing DealershipCore tools requirement: ${required}`);
}

if (!finalSource.includes('x-dealershipcore-final-polish')) throw new Error('Missing final integration wrapper.');
if (!finalSource.includes('data-dcx-tool-page')) throw new Error('Missing tool-page styling state.');

console.log(`Validated ${slugs.length} DealershipCore tool routes, SEO schemas, homepage sections and final integration.`);
