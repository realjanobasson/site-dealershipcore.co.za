import site from './dealershipcore-footer-fix.js';

const RELEASE = 'dealershipcore-perfect-2026-08-05-v1';

const PERFECT_STYLE = `<style id="dc-perfect-v1">
:root{--dc-perfect-red:#f11234;--dc-perfect-black:#05070a;--dc-perfect-line:#e2e6eb;--dc-perfect-muted:#657083;--dc-perfect-shadow:0 24px 70px rgba(8,12,18,.10)}
html{overflow-x:hidden;scroll-behavior:smooth;scroll-padding-top:92px}body{overflow-x:clip}img{max-width:100%;height:auto}button,a{touch-action:manipulation}::selection{background:rgba(241,18,52,.18)}
#dc-scroll-progress{position:fixed;z-index:9999;top:0;left:0;width:0;height:3px;background:linear-gradient(90deg,#ff1737,#f11234);box-shadow:0 0 18px rgba(241,18,52,.5);pointer-events:none}
.dc-header,.site-header,body>header{transition:background .2s ease,box-shadow .2s ease,border-color .2s ease}.dc-header.dc-is-scrolled,.site-header.dc-is-scrolled,body>header.dc-is-scrolled{background:rgba(4,5,7,.985)!important;box-shadow:0 12px 32px rgba(0,0,0,.18)!important}
.dc-nav a,.nav a,.main-nav a{position:relative}.dc-nav a:after,.nav a:after,.main-nav a:after{content:"";position:absolute;left:0;right:0;bottom:2px;height:2px;transform:scaleX(0);transform-origin:left;background:var(--dc-perfect-red);transition:transform .18s ease}.dc-nav a:hover:after,.nav a:hover:after,.main-nav a:hover:after,.dc-nav a[aria-current="page"]:after,.nav a[aria-current="page"]:after,.main-nav a[aria-current="page"]:after{transform:scaleX(1)}
.dc-btn,.btn,.dc-hero-v2-btn,.dc-footer-cta-btn{transition:transform .18s ease,box-shadow .18s ease,border-color .18s ease,background .18s ease}.dc-btn:active,.btn:active,.dc-hero-v2-btn:active,.dc-footer-cta-btn:active{transform:translateY(1px) scale(.99)!important}
.dc-hero-v2{padding-top:68px}.dc-hero-v2-grid{grid-template-columns:.9fr 1.1fr;gap:60px;min-height:620px}.dc-hero-v2-copy{padding-bottom:62px}.dc-hero-v2 h1{max-width:760px}.dc-hero-v2-lead{max-width:610px}.dc-hero-v2-product{border-color:rgba(255,255,255,.15);box-shadow:0 38px 110px rgba(0,0,0,.5)}.dc-hero-v2-screen{min-height:430px}.dc-hero-v2-human{margin-top:12px}.dc-hero-v2-rail{margin-top:28px}
.dc-trust-strip,.dc-operating-strip{position:relative;z-index:2}.dc-trust-grid,.dc-operating-grid{align-items:stretch}.dc-trust-item,.dc-operating-item{display:flex;align-items:center;justify-content:center;min-height:68px}.dc-operating-item{align-items:flex-start;justify-content:flex-start}
.dc-section,.dc-solutions,.dc-packages,.dc-support-proof,.dc-resource-section{scroll-margin-top:88px}.dc-head{max-width:850px}.dc-head h2,.dc-package-head h2,.dc-solutions-intro h2,.dc-people-copy h2{letter-spacing:-3px;text-wrap:balance}.dc-head p,.dc-package-head p,.dc-solutions-intro p,.dc-people-copy>p{max-width:720px}
.dc-feature-grid,.dc-package-grid,.dc-resource-grid{align-items:stretch}.dc-feature,.dc-package,.dc-resource-card,.dc-solution-card{height:100%;border-color:var(--dc-perfect-line);transition:transform .2s ease,border-color .2s ease,box-shadow .2s ease}.dc-feature:hover,.dc-package:hover,.dc-resource-card:hover,.dc-solution-card:hover{transform:translateY(-4px);border-color:#cfd5dc;box-shadow:var(--dc-perfect-shadow)}.dc-package{display:flex;flex-direction:column}.dc-package .dc-btn{margin-top:auto}.dc-resource-card{display:flex;flex-direction:column}.dc-resource-card a:last-child{margin-top:auto}
.dc-product-card,.dc-enterprise-dashboard,.dc-ed-card,.dc-ed-metric,.dc-ed-table,.dc-ed-stock-card,.dc-ed-stage,.dc-ed-task{box-shadow:none}.dc-enterprise-dashboard{box-shadow:0 34px 100px rgba(0,0,0,.34)}.dc-ed-tab:focus-visible{outline:2px solid rgba(241,18,52,.65);outline-offset:2px}
.dc-quote-grid{align-items:stretch}.dc-quote,.dc-score{height:100%}.dc-score .stars{letter-spacing:4px}.dc-faq details,.faq article{transition:background .18s ease}.dc-faq details:hover,.faq article:hover{background:rgba(241,18,52,.018)}.dc-faq summary:focus-visible,.faq button:focus-visible{outline:3px solid rgba(241,18,52,.2);outline-offset:-3px}
.formCard,.form-card,.dc-form-card{box-shadow:var(--dc-perfect-shadow)}input,select,textarea{transition:border-color .18s ease,box-shadow .18s ease}input:focus,select:focus,textarea:focus{border-color:rgba(241,18,52,.65)!important;box-shadow:0 0 0 4px rgba(241,18,52,.08)!important}
.dc-footer-exact{margin-top:0}.dc-footer-columns{align-items:start}.dc-footer-exact nav a{line-height:1.35}.dc-footer-cta-copy h2{text-wrap:balance}
.dc-reveal{opacity:0;transform:translateY(18px);transition:opacity .55s ease,transform .55s ease}.dc-reveal.dc-visible{opacity:1;transform:none}.dc-reveal[data-delay="1"]{transition-delay:.06s}.dc-reveal[data-delay="2"]{transition-delay:.12s}.dc-reveal[data-delay="3"]{transition-delay:.18s}
@media(max-width:1100px){.dc-hero-v2-grid{gap:36px}.dc-feature-grid{grid-template-columns:repeat(2,1fr)!important}.dc-package-grid{grid-template-columns:repeat(2,1fr)!important}.dc-solutions-grid{grid-template-columns:1fr 1fr!important}.dc-solutions-intro{grid-column:1/-1}.dc-resource-grid{grid-template-columns:repeat(2,1fr)!important}}
@media(max-width:760px){.dc-wrap,.wrap{width:min(100% - 30px,1320px)!important}.dc-hero-v2{padding-top:42px}.dc-hero-v2-grid{grid-template-columns:1fr}.dc-hero-v2-copy{padding:12px 0 18px}.dc-hero-v2 h1{font-size:clamp(46px,13vw,66px);letter-spacing:-3.6px}.dc-hero-v2-screen{min-height:300px}.dc-feature-grid,.dc-package-grid,.dc-solutions-grid,.dc-resource-grid{grid-template-columns:1fr!important}.dc-people-grid,.dc-flow,.dc-product,.dc-split,.heroGrid,.formLayout,.articleGrid{grid-template-columns:1fr!important}.dc-people-copy{padding:52px 0!important}.dc-people-photo{min-height:380px}.dc-package-head,.ctaGrid{grid-template-columns:1fr!important}.dc-footer-cta-actions{width:100%}.dc-footer-cta-btn{min-height:50px}.dc-section,.dc-solutions,.dc-packages,.dc-support-proof,.dc-resource-section,section.block{padding-top:72px!important;padding-bottom:72px!important}}
@media(max-width:520px){.dc-header-inner,.head{min-height:70px!important}.dc-hero-v2-proof{display:grid}.dc-hero-v2-rail{margin-left:-15px;margin-right:-15px}.dc-trust-grid{grid-template-columns:1fr!important}.dc-trust-item{border-left:0!important;border-top:1px solid var(--dc-perfect-line)}.dc-operating-grid{grid-template-columns:1fr!important}.dc-operating-item{border-left:0!important;border-top:1px solid var(--dc-perfect-line);padding:22px 0!important}.dc-feature,.dc-package,.dc-resource-card,.dc-solution-card{min-height:0}.dc-footer-columns{grid-template-columns:1fr!important}.dc-footer-columns>div:first-child{grid-column:auto!important}}
@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}.dc-reveal{opacity:1!important;transform:none!important;transition:none!important}.dc-btn,.btn,.dc-hero-v2-btn,.dc-footer-cta-btn,.dc-feature,.dc-package,.dc-resource-card,.dc-solution-card{transition:none!important}}
</style>`;

const PERFECT_SCRIPT = `<script id="dc-perfect-interactions">
(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const progress = document.createElement('div');
  progress.id = 'dc-scroll-progress';
  document.body.prepend(progress);

  const header = document.querySelector('.dc-header, .site-header, body > header');
  const updateScroll = () => {
    const max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
    progress.style.width = Math.min(100, Math.max(0, scrollY / max * 100)) + '%';
    if (header) header.classList.toggle('dc-is-scrolled', scrollY > 12);
  };
  updateScroll();
  addEventListener('scroll', updateScroll, { passive: true });

  const currentPath = location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('.dc-nav a, .nav a, .main-nav a').forEach(link => {
    try {
      const path = new URL(link.href, location.href).pathname.replace(/\/$/, '') || '/';
      if (path === currentPath) link.setAttribute('aria-current', 'page');
    } catch {}
  });

  document.querySelectorAll('img').forEach((img, index) => {
    if (!img.hasAttribute('decoding')) img.decoding = 'async';
    if (index > 1 && !img.hasAttribute('loading')) img.loading = 'lazy';
  });

  const revealTargets = document.querySelectorAll('.dc-section > .dc-wrap, .dc-solutions > .dc-wrap, .dc-packages > .dc-wrap, .dc-support-proof > .dc-wrap, .dc-resource-section > .dc-wrap, section.block > .wrap, .dc-footer-cta-inner, .dc-footer-columns');
  revealTargets.forEach((node, index) => {
    node.classList.add('dc-reveal');
    node.dataset.delay = String(index % 4);
  });
  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealTargets.forEach(node => node.classList.add('dc-visible'));
  } else {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('dc-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: .08, rootMargin: '0px 0px -40px' });
    revealTargets.forEach(node => observer.observe(node));
  }

  document.querySelectorAll('.dc-faq details').forEach(detail => {
    detail.addEventListener('toggle', () => {
      if (!detail.open) return;
      document.querySelectorAll('.dc-faq details[open]').forEach(other => {
        if (other !== detail) other.removeAttribute('open');
      });
    });
  });
})();
</script>`;

function perfectSite(html) {
  let output = html;
  if (!output.includes('id="dc-perfect-v1"')) output = output.replace('</head>', `${PERFECT_STYLE}</head>`);
  if (!output.includes('id="dc-perfect-interactions"')) output = output.replace('</body>', `${PERFECT_SCRIPT}</body>`);
  return output;
}

export default {
  async fetch(request, env) {
    const response = await site.fetch(request, env);
    const type = (response.headers.get('content-type') || '').toLowerCase();
    if (!type.includes('text/html')) return response;

    const html = perfectSite(await response.text());
    const headers = new Headers(response.headers);
    for (const name of ['content-length', 'content-encoding', 'etag']) headers.delete(name);
    headers.set('x-site-version', RELEASE);
    headers.set('x-dealershipcore-perfect', 'true');

    return new Response(request.method === 'HEAD' ? null : html, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};
