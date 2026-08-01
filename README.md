# DealershipCore.co.za

Production website and Cloudflare Worker for DealershipCore, the South African dealership growth operating system.

## Included

- 26 SEO-indexable pages generated from verified source
- Dealership owner-focused conversion journey
- Platform, feature, solution, ecosystem, comparison, pricing and authority-resource pages
- Responsive premium dark automotive UI
- Structured data, sitemap, robots.txt and llms.txt
- Cloudflare Worker static assets and `/api/health`
- Validated `/api/leads` endpoint
- Optional D1 or secure webhook lead persistence
- D1 migration for dealership audit and demo leads

## Build and local development

```bash
npm install
npm run build
npm run dev
```

`npm run build` reconstructs the validated page generator and stylesheet from checksummed source modules, then produces all public HTML and SEO files.

## Lead storage

Forms intentionally return an error until either a D1 `DB` binding or `LEAD_WEBHOOK_URL` is configured. This prevents silent lead loss.

Create D1 with `npm run d1:create`, add the returned database ID to `wrangler.jsonc`, then run `npm run d1:migrate:remote`.

## Cloudflare deployment

Use these Workers Builds settings:

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Root directory: `/`

Or deploy from an authenticated environment with `npm run deploy`.
