import site from './dealershipcore-full-home.js';

const RELEASE = 'dealershipcore-polished-home-2026-08-05-v1';

const DETAIL_STYLE = `<style id="dc-detail-polish">
:root{--dc-detail-shadow:0 20px 60px rgba(7,20,39,.09)}
body{background:#fff;-webkit-font-smoothing:antialiased}
.dc-wrap{width:min(1200px,calc(100% - 40px))}
.dc-header{border-top-width:3px;box-shadow:0 8px 30px rgba(7,20,39,.035)}
.dc-header-inner{height:80px}
.dc-brand{font-size:21px}.dc-brand svg{width:42px}.dc-nav{gap:27px;font-size:13px}
.dc-btn{min-height:50px;border-radius:11px}.dc-btn:focus-visible,.dc-nav a:focus-visible,.dc-brand:focus-visible,.dc-feature:focus-visible,.dc-faq summary:focus-visible{outline:3px solid rgba(241,18,52,.35);outline-offset:3px}
.dc-hero{padding:66px 0 38px}.dc-hero-grid{grid-template-columns:.9fr 1.1fr;gap:50px}
h1{font-size:clamp(54px,6vw,82px);line-height:.96;letter-spacing:-4.4px}.dc-lead{font-size:17px;line-height:1.68}
.dc-hero-visual{min-height:560px;border-radius:24px;box-shadow:0 34px 90px rgba(7,20,39,.2)}.dc-hero-visual img{min-height:560px}.dc-float{right:20px;bottom:20px;border-radius:16px}
.dc-stats{padding:22px 0}.dc-stat{padding:8px 26px}.dc-stat strong{font-size:26px}
.dc-section{padding:96px 0}.dc-head{margin-bottom:44px}.dc-head h2{font-size:clamp(40px,4.7vw,62px);letter-spacing:-3px}.dc-head p{font-size:16px}
.dc-feature-grid{gap:14px}.dc-feature{min-height:270px;padding:25px;border-radius:16px;box-shadow:0 10px 34px rgba(7,20,39,.035)}.dc-feature:hover{transform:translateY(-4px);box-shadow:var(--dc-detail-shadow)}
.dc-feature-icon{width:50px;height:50px;border-radius:14px}.dc-feature h3{margin-top:25px}.dc-link{margin-top:24px}
.dc-flow,.dc-product,.dc-split{gap:56px}.dc-step{padding:19px;border-radius:14px}.dc-product-card,.dc-dealer-image{border-radius:22px;box-shadow:var(--dc-detail-shadow)}
.dc-pill{border-radius:13px;background:#fff}.dc-outcomes{border-radius:18px}.dc-outcome{padding:25px}
.dc-quote,.dc-score{padding:34px;border-radius:18px}.dc-quote blockquote{font-size:26px}.dc-faq summary{font-size:17px}
.dc-cta{border-radius:24px;box-shadow:0 28px 80px rgba(7,20,39,.16)}
@media(max-width:1050px){.dc-nav{gap:18px}.dc-actions{gap:10px}.dc-feature-grid{grid-template-columns:repeat(2,1fr)}.dc-outcomes{grid-template-columns:repeat(2,1fr)}}
@media(max-width:820px){.dc-header-inner{height:74px}.dc-nav,.dc-actions .dc-btn-outline{display:none}.dc-menu{display:block}.dc-hero-grid,.dc-flow,.dc-product,.dc-split,.dc-quote-grid{grid-template-columns:1fr}.dc-hero{padding-top:52px}.dc-hero-visual{min-height:480px}.dc-hero-visual img{min-height:480px}.dc-stats-grid{grid-template-columns:repeat(2,1fr)}.dc-stat:nth-child(2){border-right:0}.dc-stat:nth-child(-n+2){border-bottom:1px solid var(--line)}}
@media(max-width:560px){.dc-wrap{width:min(100% - 28px,1200px)}h1{font-size:clamp(46px,14vw,60px);letter-spacing:-3px}.dc-lead{font-size:16px}.dc-hero-actions{flex-direction:column}.dc-hero-actions .dc-btn{width:100%}.dc-hero-visual,.dc-hero-visual img{min-height:400px}.dc-float{left:14px;right:14px;bottom:14px;width:auto;padding:17px}.dc-section{padding:76px 0}.dc-feature-grid,.dc-pill-grid,.dc-outcomes{grid-template-columns:1fr}.dc-feature{min-height:auto}.dc-stat{padding:12px 16px}.dc-head{text-align:left}.dc-head h2,.dc-flow-copy h2,.dc-split h2{letter-spacing:-2.2px}}
@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}.dc-btn,.dc-feature{transition:none}}
</style>`;

function injectDetailPolish(html) {
  if (html.includes('id="dc-detail-polish"')) return html;
  return html.replace('</head>', `${DETAIL_STYLE}</head>`);
}

export default {
  async fetch(request, env) {
    const response = await site.fetch(request, env);
    const type = (response.headers.get('content-type') || '').toLowerCase();
    if (!type.includes('text/html')) return response;

    const html = injectDetailPolish(await response.text());
    const headers = new Headers(response.headers);
    for (const name of ['content-length', 'content-encoding', 'etag']) headers.delete(name);
    headers.set('x-site-version', RELEASE);
    headers.set('x-dealershipcore-detail-polish', 'true');

    return new Response(request.method === 'HEAD' ? null : html, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};
