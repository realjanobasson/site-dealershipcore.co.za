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

// Tool routes and links are generated from the TOOLS array. Validate the six
// source-of-truth slugs and the shared generators rather than searching for six
// hard-coded URLs that are intentionally not duplicated in the source.
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

const sourceRouteRequirements = [
  "new Map(TOOLS.map(tool => [`/tools/${tool.slug}`",
  'href="/tools/${tool.slug}/"',
  "path === '/tools'",
  'toolByPath.get(path)',
];

for (const requirement of sourceRouteRequirements) {
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

for (const required of [
  'x-dealershipcore-final-polish',
  'data-dcx-tool-page',
  "path.startsWith('/tools/')",
]) {
  if (!finalSource.includes(required)) {
    throw new Error(`Missing final tool-page integration requirement: ${required}`);
  }
}

console.log(
  `Validated ${expectedSlugs.length} DealershipCore tool routes, dynamic links, SEO schemas, homepage sections and final integration.`,
);
