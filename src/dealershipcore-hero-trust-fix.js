import site from './dealershipcore-enterprise-images.js';

const RELEASE = 'dealershipcore-hero-trust-fix-2026-08-02-v2';

const MAIN_DEALERSHIP_IMAGE = 'https://images.unsplash.com/photo-1680701572790-b7b46d35b1bd?auto=format&fit=crop&w=1500&q=86';
const PRODUCT_WORKFLOW_IMAGE = 'https://images.unsplash.com/photo-1648737966968-5f50e6bf9e46?auto=format&fit=crop&w=900&q=84';

const HERO_TRUST_STYLE = `<style id="dc-hero-trust-fix-style">
.hero-proof-cards{
  display:flex;
  flex-wrap:wrap;
  gap:12px;
  margin-top:28px;
}
.hero-proof-card{
  display:grid;
  grid-template-columns:auto 1fr;
  gap:2px 12px;
  align-items:center;
  min-width:245px;
  padding:14px 16px;
  border:1px solid rgba(83,214,143,.42);
  border-radius:13px;
  background:linear-gradient(135deg,rgba(20,105,68,.94),rgba(13,70,49,.88));
  box-shadow:0 15px 36px rgba(0,0,0,.22);
  backdrop-filter:blur(12px);
}
.hero-proof-stars{
  grid-row:1 / span 2;
  color:#9af3bd;
  font-size:12px;
  font-weight:950;
  letter-spacing:1.5px;
  white-space:nowrap;
}
.hero-proof-card strong{
  display:block;
  color:#fff;
  font-size:12px;
  line-height:1.3;
}
.hero-proof-card small{
  display:block;
  margin-top:2px;
  color:#d2f0df;
  font-size:10px;
  line-height:1.4;
}
.dcx-photo-main img{
  object-position:center 48%!important;
}
.dcx-photo-small img{
  object-position:center center!important;
}
@media(max-width:720px){
  .hero-proof-cards{display:grid;grid-template-columns:1fr;gap:9px}
  .hero-proof-card{min-width:0;width:100%}
}
</style>`;

const HERO_TRUST_MARKUP = `<div class="hero-proof-cards" aria-label="DealershipCore platform strengths"><div class="hero-proof-card"><span class="hero-proof-stars" aria-hidden="true">★★★★★</span><strong>Built for dealership teams</strong><small>Leads, stock, CRM and follow-up stay connected.</small></div><div class="hero-proof-card"><span class="hero-proof-stars" aria-hidden="true">★★★★★</span><strong>One operating view</strong><small>Sales, finance and reporting remain visible.</small></div></div>`;

function fixHomepage(html) {
  let output = html;

  output = output.replace(
    /(<div class="dcx-photo-main"><img src=")[^"]+("[^>]*>)/i,
    `$1${MAIN_DEALERSHIP_IMAGE}$2`,
  );
  output = output.replace(
    /(<div class="dcx-photo-small"><img src=")[^"]+("[^>]*>)/i,
    `$1${PRODUCT_WORKFLOW_IMAGE}$2`,
  );
  output = output.replace(
    /alt="[^"]*"(?=[^>]*width="920" height="690" loading="lazy" decoding="async"><div class="dcx-photo-label">)/i,
    'alt="Customers and dealership staff viewing vehicles in a modern showroom"',
  );
  output = output.replace(
    /alt="[^"]*"(?=[^>]*width="520" height="390" loading="lazy" decoding="async"><\/div><\/div><div class="dcx-editorial-copy">)/i,
    'alt="Automotive professional using a connected product interface inside a vehicle"',
  );
  output = output.replace(
    /<div class="hero-proof">[\s\S]*?<\/div>/i,
    HERO_TRUST_MARKUP,
  );

  if (!output.includes('id="dc-hero-trust-fix-style"')) {
    output = output.replace(/<\/head>/i, `${HERO_TRUST_STYLE}</head>`);
  }
  return output;
}

export default {
  async fetch(request, env) {
    const response = await site.fetch(request, env);
    const type = (response.headers.get('content-type') || '').toLowerCase();
    if (!type.includes('text/html')) return response;

    const path = new URL(request.url).pathname.replace(/\/$/, '') || '/';
    if (path !== '/') return response;

    const headers = new Headers(response.headers);
    for (const name of ['content-length', 'content-encoding', 'etag']) headers.delete(name);
    headers.set('cache-control', 'no-store, max-age=0, must-revalidate');
    headers.set('x-site-version', RELEASE);
    headers.set('x-dealershipcore-home-fix', 'correct-dealership-images-and-green-star-boxes');

    return new Response(request.method === 'HEAD' ? null : fixHomepage(await response.text()), {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};
