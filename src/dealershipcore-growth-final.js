import site from './dealershipcore-growth.js';
import { GROWTH_PAGES, GROWTH_PAGE_PATHS } from './dealershipcore-growth-content.js';

const RELEASE = 'dealershipcore-growth-final-2026-08-02-v1';

const HOME_STYLE = `<style id="dc-growth-home-style">
#dealership-guides.homeGuides{padding:82px 0;background:#f5f7fa;border-top:1px solid #e1e7ee;border-bottom:1px solid #e1e7ee}
#dealership-guides .wrap{width:min(1180px,calc(100% - 46px));margin:0 auto}
#dealership-guides .homeGrid{display:grid;grid-template-columns:.8fr 1.2fr;gap:55px;align-items:start}
#dealership-guides .kicker{display:inline-flex;align-items:center;color:#e9092d;font-size:11px;font-weight:950;letter-spacing:.14em;text-transform:uppercase}
#dealership-guides .kicker:before{content:"";width:8px;height:8px;margin-right:8px;border-radius:50%;background:#e9092d}
#dealership-guides h2{max-width:560px;margin:15px 0 0;color:#071427;font-size:clamp(38px,4.6vw,58px);line-height:1.03;letter-spacing:-2.8px}
#dealership-guides p{max-width:580px;color:#607188;font-size:16px;line-height:1.72}
#dealership-guides .btn{display:inline-flex;align-items:center;justify-content:center;min-height:48px;margin-top:16px;padding:0 20px;border-radius:11px;background:linear-gradient(135deg,#ff1737,#cf001f);color:#fff;font-weight:850;box-shadow:0 14px 34px rgba(233,9,45,.2)}
#dealership-guides .guideLinks{display:grid;grid-template-columns:1fr 1fr;gap:11px}
#dealership-guides .guideLinks a{padding:18px;border:1px solid #dbe3ec;border-radius:12px;background:#fff;color:#071427;font-weight:850;transition:transform .16s ease,box-shadow .16s ease}
#dealership-guides .guideLinks a:hover{transform:translateY(-2px);box-shadow:0 15px 36px rgba(7,20,39,.08)}
#dealership-guides .guideLinks small{display:block;margin-top:7px;color:#76869a;font-size:12px;font-weight:500;line-height:1.5}
@media(max-width:860px){#dealership-guides .homeGrid{grid-template-columns:1fr;gap:35px}}
@media(max-width:620px){#dealership-guides.homeGuides{padding:64px 0}#dealership-guides .wrap{width:min(100% - 30px,1180px)}#dealership-guides .guideLinks{grid-template-columns:1fr}#dealership-guides h2{font-size:39px;letter-spacing:-2px}}
@media(prefers-reduced-motion:reduce){#dealership-guides .guideLinks a{transition:none}}
</style>`;

const titleByPath = new Map(GROWTH_PAGES.map(page => [page.path, page.title]));
titleByPath.set('/create-dealership-account/', 'Create your DealershipCore dealership account');
titleByPath.set('/dealership-software-guides/', 'All DealershipCore dealership software guides');

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function isolateHomepageStyles(html) {
  let output = html.replace(
    /<style>\s*:root\{--ink:#071427;[\s\S]*?<\/style>(?=<section class="homeGuides")/i,
    '',
  );
  if (!output.includes('id="dc-growth-home-style"')) {
    output = output.replace('</head>', `${HOME_STYLE}</head>`);
  }
  return output;
}

function correctRelatedLabels(html) {
  let output = html;
  for (const [path, title] of titleByPath) {
    const pattern = new RegExp(
      `(<a href="${escapeRegExp(path)}">)[^<]*(<small>Continue with the related DealershipCore page →<\\/small>)`,
      'g',
    );
    output = output.replace(pattern, `$1${escapeHtml(title)}$2`);
  }
  return output;
}

export default {
  async fetch(request, env) {
    const response = await site.fetch(request, env);
    const type = (response.headers.get('content-type') || '').toLowerCase();
    if (!type.includes('text/html')) return response;

    const path = new URL(request.url).pathname.replace(/\/$/, '') || '/';
    let html = await response.text();
    if (path === '/') html = isolateHomepageStyles(html);
    if (GROWTH_PAGE_PATHS.includes(`${path}/`) || path === '/dealership-software-guides') {
      html = correctRelatedLabels(html);
    }

    const headers = new Headers(response.headers);
    for (const name of ['content-length', 'content-encoding', 'etag']) headers.delete(name);
    headers.set('x-site-version', RELEASE);
    headers.set('x-dealershipcore-growth-final', 'scoped-homepage-styles-and-correct-related-links');

    return new Response(request.method === 'HEAD' ? null : html, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};
