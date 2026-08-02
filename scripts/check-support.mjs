import { existsSync, readFileSync } from 'node:fs';

const source = readFileSync(new URL('../src/dealershipcore-support.js', import.meta.url), 'utf8');
const requiredRoutes = [
  'dealershipcore-product-overview',
  'getting-started',
  'lead-management-overview',
  'stock-management-overview',
  'reports-and-insights-overview',
];

for (const slug of requiredRoutes) {
  if (!source.includes(`slug: '${slug}'`)) throw new Error(`Missing support article: ${slug}`);
}

for (const requirement of [
  "path === '/support'",
  'articleByPath.get(path)',
  'TechArticle',
  'BreadcrumbList',
  'CollectionPage',
  'dc-footer-showroom',
  'dc-home-product',
  'dealershipcore-dealer-shop.webp',
  'dealershipcore-product-devices.webp',
  'sitemap(await response.text())',
  'llms(await response.text())',
]) {
  if (!source.includes(requirement)) throw new Error(`Missing support requirement: ${requirement}`);
}

for (const asset of [
  '../public/assets/dealershipcore-dealer-shop.webp',
  '../public/assets/dealershipcore-product-devices.webp',
]) {
  if (!existsSync(new URL(asset, import.meta.url))) throw new Error(`Missing production website asset: ${asset}`);
}

console.log(`Validated ${requiredRoutes.length} support articles, knowledge-base layout, SEO schema, sitemap integration, footer dealership banner and uploaded DealershipCore assets.`);
