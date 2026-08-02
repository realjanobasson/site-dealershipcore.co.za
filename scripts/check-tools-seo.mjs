import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../src/dealershipcore-tools-seo.js', import.meta.url), 'utf8');
const finalSource = readFileSync(new URL('../src/dealershipcore-tools-final.js', import.meta.url), 'utf8');

const expectedSlugs = [
  'vehicle-valuation',
  'car-valuation',
  'value-my-cars',
  'vehicle-valuation-engine',
  'finance-your-cars',
  'dealership-software',
];

// The tool links and routes are generated dynamically from TOOLS, so validate the
// source-of-truth slug definitions plus the route/link generators instead of
// looking for six hard-coded URL strings that do not exist in the source file.
const declaredSlugs = [...source.matchAll(/\bslug:\s*'([^']+)'/g)].map((match) => match[1]);
const uniqueDeclaredSlugs = [...new Set(declaredSlugs)];

for (const slug of expectedSlugs) {
  if (!uniqueDeclaredSlugs.includes(slug)) {
    throw new Error(`Missing tool route definition: ${slug}`);
  }
}

if (uniqueDeclaredSlugs.length !== expectedSlugs.length) {
  throw new Error(
    `Expected ${expectedSlugs.length} unique tool slugs, found ${uniqueDeclaredSlugs.length}: ${uniqueDeclaredSlugs.join(', ')}`,
  );
}

const routeAndLinkRequirements = [
  "new Map(TOOLS.map(tool => [`/tools/${tool.slug}`",
  'href="/tools/${tool.slug}/"',
  "path === '/tools'",
  "path.startsWith('/tools/')",
];

for (const requirement of routeAndLinkRequirements) {
  if (!source.includes(requirement)) {
    throw new Error(`Missing dynamic tool route/link generator: ${requirement}`);
  }
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
  if (!source.includes(required)) {
    throw new Error(`Missing DealershipCore tools requirement: ${required}`);
  }
}

if (!finalSource.includes('x-dealershipcore-final-polish')) {
  throw new Error('Missing final integration wrapper.');
}
if (!finalSource.includes('data-dcx-tool-page')) {
  throw new Error('Missing tool-page styling state.');
}

console.log(
  `Validated ${expectedSlugs.length} DealershipCore tool routes, dynamic links, SEO schemas, homepage sections and final integration.`,
);
