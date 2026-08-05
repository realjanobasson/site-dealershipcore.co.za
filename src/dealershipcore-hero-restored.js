import site from './dealershipcore-enterprise-refined.js';

const RELEASE = 'dealershipcore-hero-restored-2026-08-05-v1';

const RESTORE_STYLE = `<style id="dc-hero-restored-v1">
:root{--dcfr-red:#f11234;--dcfr-black:#030405;--dcfr-panel:#090b0f;--dcfr-line:rgba(255,255,255,.11)}

/* Keep the original polished enterprise hero exactly as supplied by dealershipcore-enterprise-refined.js. */

/* Apply the improved enterprise system to internal pages without changing homepage hero markup. */
body:not(.home) .hero,body:not(.home) .formHero{background:#07090d!important;color:#fff!important}
body:not(.home) .hero h1,body:not(.home) .formHero h1{color:#fff!important}
body:not(.home) .hero .lead,body:not(.home) .formHero .lead{color:#aeb8c6!important}
body:not(.home) .panel,body:not(.home) .card,body:not(.home) .hubCard,body:not(.home) .formCard,body:not(.home) .related a{border-radius:8px!important;box-shadow:none!important}
body:not(.home) .panel:hover,body:not(.home) .card:hover,body:not(.home) .hubCard:hover,body:not(.home) .related a:hover{box-shadow:0 22px 60px rgba(8,12,18,.08)!important}
body:not(.home) .faq{overflow:hidden;border-radius:8px!important}
body:not(.home) .articleImg,body:not(.home) .media{border-radius:10px!important}

.dc-reference-footer{position:relative;background:var(--dcfr-black);color:#9098a4;border-top:1px solid var(--dcfr-line)}
.dc-reference-footer *{box-sizing:border-box}
.dc-reference-cta{position:relative;overflow:hidden;border-bottom:1px solid var(--dcfr-line)}
.dc-reference-cta:before{content:"";position:absolute;left:-70px;top:-110px;width:370px;height:310px;transform:skewX(-20deg);background:linear-gradient(135deg,rgba(241,18,52,.02),rgba(241,18,52,.38),rgba(241,18,52,.03));border-right:1px solid rgba(241,18,52,.52);box-shadow:35px 0 80px rgba(241,18,52,.14)}
.dc-reference-cta-inner{position:relative;display:grid;grid-template-columns:130px 1fr auto;gap:34px;align-items:center;min-height:150px}
.dc-reference-mark{display:grid;place-items:center}.dc-reference-mark svg{width:74px;height:62px;filter:drop-shadow(0 0 18px rgba(241,18,52,.32))}
.dc-reference-copy h2{margin:0;color:#fff;font-size:clamp(27px,3vw,43px);line-height:1;letter-spacing:-2px}.dc-reference-copy p{margin:10px 0 0;color:#9da6b2;font-size:13px;line-height:1.6}
.dc-reference-actions{display:flex;gap:12px}.dc-reference-btn{display:inline-flex;align-items:center;justify-content:center;min-width:165px;min-height:52px;padding:0 20px;border:1px solid rgba(255,255,255,.24);border-radius:6px;color:#fff;font-size:12px;font-weight:800;transition:transform .18s ease,border-color .18s ease,box-shadow .18s ease}.dc-reference-btn:hover{transform:translateY(-2px);border-color:rgba(255,255,255,.55)}.dc-reference-btn.is-red{border-color:var(--dcfr-red);background:linear-gradient(135deg,#ff1737,#d00020);box-shadow:0 15px 38px rgba(241,18,52,.24)}
.dc-reference-main{padding:40px 0 24px}.dc-reference-grid{display:grid;grid-template-columns:1.45fr repeat(4,1fr);gap:42px}.dc-reference-brand{display:flex;align-items:center;gap:10px;color:#fff;font-size:18px;font-weight:800}.dc-reference-brand svg{width:36px;height:30px}.dc-reference-about{max-width:315px;margin:15px 0 0;color:#717b88;font-size:12px;line-height:1.7}.dc-reference-socials{display:flex;gap:9px;margin-top:18px}.dc-reference-socials span{display:grid;place-items:center;width:30px;height:30px;border:1px solid #252b34;border-radius:50%;background:#090b0f;color:#c2c8d0;font-size:9px;font-weight:900}
.dc-reference-footer h3{margin:0 0 15px;color:#fff;font-size:13px}.dc-reference-footer nav a{display:block;margin-top:9px;color:#858f9d;font-size:11px}.dc-reference-footer nav a:hover{color:#fff}
.dc-reference-bottom{display:flex;align-items:center;justify-content:space-between;gap:22px;margin-top:30px;padding-top:22px;border-top:1px solid var(--dcfr-line);font-size:10px}.dc-reference-legal{display:flex;gap:22px}.dc-reference-legal a{color:#838d9a}
@media(max-width:980px){.dc-reference-cta-inner{grid-template-columns:92px 1fr}.dc-reference-actions{grid-column:2}.dc-reference-grid{grid-template-columns:1.4fr repeat(2,1fr)}.dc-reference-grid>div:nth-child(4),.dc-reference-grid>div:nth-child(5){margin-top:8px}}
@media(max-width:680px){.dc-reference-cta-inner{grid-template-columns:1fr;gap:20px;padding:38px 0}.dc-reference-mark{justify-content:start}.dc-reference-actions{grid-column:auto;flex-direction:column}.dc-reference-btn{width:100%}.dc-reference-grid{grid-template-columns:1fr 1fr;gap:32px 24px}.dc-reference-grid>div:first-child{grid-column:1/-1}.dc-reference-bottom{align-items:flex-start;flex-direction:column}.dc-reference-legal{flex-wrap:wrap}}
@media(prefers-reduced-motion:reduce){.dc-reference-btn{transition:none}.dc-reference-btn:hover{transform:none}}
</style>`;

const FOOTER = `<footer class="dc-reference-footer">
  <section class="dc-reference-cta"><div class="dc-wrap dc-reference-cta-inner">
    <div class="dc-reference-mark" aria-hidden="true"><svg viewBox="0 0 100 80" fill="none"><path d="M24 7h26l37 33-37 33H24l37-33L24 7Z" fill="#f11234"/><path d="M5 21l25 19L5 59V21Z" fill="#ff1737"/></svg></div>
    <div class="dc-reference-copy"><h2>Ready to accelerate your dealership?</h2><p>Book a personalised demo and discover how DealershipCore can drive results for your business.</p></div>
    <div class="dc-reference-actions"><a class="dc-reference-btn" href="/book-demo/">Book a demo</a><a class="dc-reference-btn is-red" href="/free-dealership-audit/">Free dealership audit</a></div>
  </div></section>
  <div class="dc-reference-main"><div class="dc-wrap">
    <div class="dc-reference-grid">
      <div><a class="dc-reference-brand" href="/"><svg viewBox="0 0 58 46" aria-hidden="true"><path d="M19 3h15l21 20-21 20H19l21-20L19 3Z" fill="#f11234"/><path d="M3 12l14 11L3 34V12Z" fill="#ff1737"/></svg><span>DealershipCore</span></a><p class="dc-reference-about">The dealership operating system connecting leads, stock, customers, sales workflow, finance and reporting.</p><div class="dc-reference-socials" aria-label="Social links"><span>in</span><span>f</span><span>ig</span><span>▶</span></div></div>
      <div><h3>Platform</h3><nav><a href="/#platform">Overview</a><a href="/#features">Features</a><a href="/ecosystem/">Integrations</a><a href="/#packages">Pricing</a></nav></div>
      <div><h3>Solutions</h3><nav><a href="/solutions/new-car-dealers/">New Car Dealerships</a><a href="/solutions/used-car-dealers/">Used Car Dealerships</a><a href="/solutions/dealer-groups/">Multi-Location Groups</a><a href="/solutions/finance-managers/">Finance Teams</a></nav></div>
      <div><h3>Resources</h3><nav><a href="/resources/blog/">Blog</a><a href="/resources/case-studies/">Case Studies</a><a href="/resources/help-centre/">Help Centre</a><a href="/resources/webinars/">Webinars</a></nav></div>
      <div><h3>Company</h3><nav><a href="/about/">About Us</a><a href="/contact/">Contact Us</a><a href="/book-demo/">Book a Demo</a><a href="/free-dealership-audit/">Dealership Audit</a></nav></div>
    </div>
    <div class="dc-reference-bottom"><span>© 2026 DealershipCore. All rights reserved.</span><div class="dc-reference-legal"><a href="/privacy/">Privacy Policy</a><a href="/terms/">Terms of Service</a></div></div>
  </div></div>
</footer>`;

function restoreHeroAndFinishSite(html) {
  let output = html;
  if (!output.includes('id="dc-hero-restored-v1"')) output = output.replace('</head>', `${RESTORE_STYLE}</head>`);
  output = output.replace(/<footer[\s\S]*?<\/footer>/i, FOOTER);
  return output;
}

export default {
  async fetch(request, env) {
    const response = await site.fetch(request, env);
    const type = (response.headers.get('content-type') || '').toLowerCase();
    if (!type.includes('text/html')) return response;

    const html = restoreHeroAndFinishSite(await response.text());
    const headers = new Headers(response.headers);
    for (const name of ['content-length', 'content-encoding', 'etag']) headers.delete(name);
    headers.set('x-site-version', RELEASE);
    headers.set('x-dealershipcore-hero-restored', 'true');

    return new Response(request.method === 'HEAD' ? null : html, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};
