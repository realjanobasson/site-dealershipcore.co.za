import { readFileSync, existsSync } from 'node:fs';
import { GROWTH_PAGES, GROWTH_PAGE_PATHS } from '../src/dealershipcore-growth-content.js';

const worker = readFileSync(new URL('../src/dealershipcore-growth.js', import.meta.url), 'utf8');
const api = readFileSync(new URL('../src/index.js', import.meta.url), 'utf8');

if (GROWTH_PAGES.length < 28) throw new Error(`Expected at least 28 substantial growth pages, found ${GROWTH_PAGES.length}.`);
if (new Set(GROWTH_PAGE_PATHS).size !== GROWTH_PAGE_PATHS.length) throw new Error('Duplicate growth-page paths detected.');

const requiredPaths = [
  '/dealership-management-software-south-africa/',
  '/dealership-lead-management-software-south-africa/',
  '/dealership-stock-management-software-south-africa/',
  '/dealership-crm-software-south-africa/',
  '/dealership-marketing-automation-software-south-africa/',
  '/dealership-sales-pipeline-software-south-africa/',
  '/dealership-reporting-analytics-software-south-africa/',
  '/dealership-finance-workflow-software-south-africa/',
  '/dealership-task-management-software-south-africa/',
  '/guides/best-stock-management-system-for-dealerships-south-africa/',
  '/guides/why-dealerships-need-stock-management-system/',
  '/guides/how-stock-management-could-protect-r2-5-million/',
  '/guides/why-dealershipcore-for-stock-management/',
  '/guides/how-to-reduce-aged-stock-in-a-dealership/',
  '/guides/how-to-improve-dealership-lead-response-time/',
  '/guides/how-to-stop-losing-dealership-leads/',
  '/guides/dealership-crm-vs-spreadsheets/',
  '/guides/how-to-manage-multiple-dealership-branches/',
  '/guides/how-to-connect-vehicle-valuation-leads-to-sales-team/',
];
for (const path of requiredPaths) if (!GROWTH_PAGE_PATHS.includes(path)) throw new Error(`Missing required traffic page: ${path}`);

for (const page of GROWTH_PAGES) {
  if (!page.path.startsWith('/') || !page.path.endsWith('/')) throw new Error(`Invalid canonical path: ${page.path}`);
  for (const field of ['title','meta','h1','intro','category']) if (!String(page[field] || '').trim()) throw new Error(`Missing ${field} on ${page.path}`);
  if (page.title.length < 25 || page.meta.length < 90 || page.intro.length < 80) throw new Error(`Thin title, metadata or introduction on ${page.path}`);
  if (!Array.isArray(page.faqs) || page.faqs.length < 4) throw new Error(`Every page needs at least four FAQs: ${page.path}`);
  if (page.type === 'feature' || page.type === 'howto') {
    if (page.benefits.length < 4 || page.steps.length < 5 || page.metrics.length < 4) throw new Error(`Incomplete feature/how-to page: ${page.path}`);
  } else if (!Array.isArray(page.sections) || page.sections.length < 4) throw new Error(`Guide needs four substantial sections: ${page.path}`);
}

const r25 = GROWTH_PAGES.find(page => page.path.includes('r2-5-million'));
if (!r25?.calculator || !r25.intro.toLowerCase().includes('not a promise')) throw new Error('R2.5 million page must remain an adjustable illustrative scenario, not a guarantee.');

for (const requirement of [
  "import site from './dealershipcore-support.js'",
  "path==='/dealership-software-guides'",
  "path==='/create-dealership-account'",
  "path==='/thank-you/dealership-account'",
  'SoftwareApplication',
  'BreadcrumbList',
  'FAQPage',
  'GROWTH_PAGE_PATHS',
  'data-form',
  'normal South African business hours',
  'noindex,nofollow',
  'Financial examples are illustrative',
]) if (!worker.includes(requirement)) throw new Error(`Missing growth-system requirement: ${requirement}`);

for (const field of [
  'first_name','last_name','job_title','dealership','dealership_type','province','city','branches','stock_size',
  'monthly_sales','team_size','current_system','accounting_system','website_provider','lead_sources','current_process',
  'modules','target_start','budget_stage','contact_method','contact_time','decision_makers','consent',
]) if (!worker.includes(`'${field}'`) && !worker.includes(`name="${field}"`)) throw new Error(`Missing account field: ${field}`);

for (const requirement of ['application_json','serialiseApplication','contentLength > 100_000',"thank_you_url: '/thank-you/dealership-account/'"]) {
  if (!api.includes(requirement)) throw new Error(`Missing lead API requirement: ${requirement}`);
}
for (const asset of ['dealershipcore-dealer-shop.webp','dealershipcore-product-devices.webp']) {
  if (!existsSync(new URL(`../brand-assets/${asset}`, import.meta.url))) throw new Error(`Missing permanent brand asset: ${asset}`);
}

console.log(`Validated ${GROWTH_PAGES.length} dealership traffic pages, SEO, account application, thank-you flow and lead capture.`);
