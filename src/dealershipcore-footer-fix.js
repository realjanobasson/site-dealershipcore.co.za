import site from './dealershipcore-hero-redesign-v2.js';

const RELEASE = 'dealershipcore-footer-fix-2026-08-05-v1';

const FOOTER_STYLE = `<style id="dc-footer-fix-v1">
.dc-footer-exact{background:#020304;color:#8f98a5;border-top:1px solid rgba(255,255,255,.08);font-family:var(--dc-font,'Manrope',Inter,system-ui,sans-serif)}
.dc-footer-exact *{box-sizing:border-box}.dc-footer-exact a{text-decoration:none}
.dc-footer-cta{position:relative;overflow:hidden;border-bottom:1px solid rgba(255,255,255,.09);background:#030405}
.dc-footer-cta:before{content:"";position:absolute;left:-38px;top:-74px;width:250px;height:230px;transform:skewX(-20deg);background:linear-gradient(135deg,rgba(241,18,52,.01),rgba(241,18,52,.34),rgba(241,18,52,.02));border-right:1px solid rgba(241,18,52,.5);box-shadow:28px 0 65px rgba(241,18,52,.14)}
.dc-footer-cta-inner{position:relative;display:grid;grid-template-columns:118px 1fr auto;gap:28px;align-items:center;min-height:112px}
.dc-footer-cta-mark{display:grid;place-items:center}.dc-footer-cta-mark svg{width:70px;height:56px;filter:drop-shadow(0 0 17px rgba(241,18,52,.35))}
.dc-footer-cta-copy h2{margin:0;color:#fff;font-size:clamp(25px,2.7vw,39px);line-height:1;letter-spacing:-1.9px}.dc-footer-cta-copy p{margin:8px 0 0;color:#8f98a5;font-size:11px;line-height:1.55}
.dc-footer-cta-actions{display:flex;gap:10px}.dc-footer-cta-btn{display:inline-flex;align-items:center;justify-content:center;min-width:150px;min-height:46px;padding:0 17px;border:1px solid rgba(255,255,255,.23);border-radius:5px;color:#fff;font-size:11px;font-weight:800;transition:transform .18s ease,border-color .18s ease,box-shadow .18s ease}.dc-footer-cta-btn:hover{transform:translateY(-2px);border-color:rgba(255,255,255,.55)}.dc-footer-cta-btn.is-red{border-color:#f11234;background:linear-gradient(135deg,#ff1737,#d00020);box-shadow:0 13px 34px rgba(241,18,52,.24)}
.dc-footer-body{padding:25px 0 14px}.dc-footer-columns{display:grid;grid-template-columns:1.45fr repeat(4,1fr);gap:38px}.dc-footer-brand{display:flex;align-items:center;gap:9px;color:#fff;font-size:16px;font-weight:800}.dc-footer-brand svg{width:33px;height:28px}.dc-footer-description{max-width:290px;margin:12px 0 0;color:#697381;font-size:10px;line-height:1.65}.dc-footer-socials{display:flex;gap:8px;margin-top:15px}.dc-footer-socials span{display:grid;place-items:center;width:28px;height:28px;border:1px solid #252b34;border-radius:50%;background:#080a0d;color:#c1c7cf;font-size:9px;font-weight:900}
.dc-footer-exact h3{margin:0 0 11px;color:#fff;font-size:11px}.dc-footer-exact nav a{display:block;margin-top:7px;color:#828b98;font-size:9px}.dc-footer-exact nav a:hover{color:#fff}
.dc-footer-bottom{display:flex;align-items:center;justify-content:space-between;gap:18px;margin-top:18px;padding-top:14px;border-top:1px solid rgba(255,255,255,.08);font-size:9px}.dc-footer-legal{display:flex;gap:20px}.dc-footer-legal a{color:#7d8794}
@media(max-width:980px){.dc-footer-cta-inner{grid-template-columns:86px 1fr}.dc-footer-cta-actions{grid-column:2}.dc-footer-columns{grid-template-columns:1.4fr repeat(2,1fr)}.dc-footer-columns>div:nth-child(4),.dc-footer-columns>div:nth-child(5){margin-top:5px}}
@media(max-width:680px){.dc-footer-cta-inner{grid-template-columns:1fr;gap:16px;padding:30px 0}.dc-footer-cta-mark{justify-content:start}.dc-footer-cta-actions{grid-column:auto;flex-direction:column}.dc-footer-cta-btn{width:100%}.dc-footer-columns{grid-template-columns:1fr 1fr;gap:28px 22px}.dc-footer-columns>div:first-child{grid-column:1/-1}.dc-footer-bottom{align-items:flex-start;flex-direction:column}.dc-footer-legal{flex-wrap:wrap}}
@media(prefers-reduced-motion:reduce){.dc-footer-cta-btn{transition:none}.dc-footer-cta-btn:hover{transform:none}}
</style>`;

const FOOTER = `<footer class="dc-footer-exact">
  <section class="dc-footer-cta"><div class="dc-wrap dc-footer-cta-inner">
    <div class="dc-footer-cta-mark" aria-hidden="true"><svg viewBox="0 0 100 80" fill="none"><path d="M24 7h26l37 33-37 33H24l37-33L24 7Z" fill="#f11234"/><path d="M5 21l25 19L5 59V21Z" fill="#ff1737"/></svg></div>
    <div class="dc-footer-cta-copy"><h2>Ready to accelerate your dealership?</h2><p>Book a personalised demo and discover how DealershipCore can drive results for your business.</p></div>
    <div class="dc-footer-cta-actions"><a class="dc-footer-cta-btn" href="/book-demo/">Book a demo</a><a class="dc-footer-cta-btn is-red" href="/free-dealership-audit/">Free dealership audit</a></div>
  </div></section>
  <div class="dc-footer-body"><div class="dc-wrap">
    <div class="dc-footer-columns">
      <div><a class="dc-footer-brand" href="/"><svg viewBox="0 0 58 46" aria-hidden="true"><path d="M19 3h15l21 20-21 20H19l21-20L19 3Z" fill="#f11234"/><path d="M3 12l14 11L3 34V12Z" fill="#ff1737"/></svg><span>DealershipCore</span></a><p class="dc-footer-description">The dealership operating system connecting leads, stock, customers, sales workflow, finance and reporting.</p><div class="dc-footer-socials" aria-label="Social links"><span>in</span><span>f</span><span>ig</span><span>▶</span></div></div>
      <div><h3>Platform</h3><nav><a href="/#platform">Overview</a><a href="/#features">Features</a><a href="/ecosystem/">Integrations</a><a href="/#packages">Pricing</a></nav></div>
      <div><h3>Solutions</h3><nav><a href="/solutions/new-car-dealers/">New Car Dealerships</a><a href="/solutions/used-car-dealers/">Used Car Dealerships</a><a href="/solutions/dealer-groups/">Multi-Location Groups</a><a href="/solutions/finance-managers/">Finance Teams</a></nav></div>
      <div><h3>Resources</h3><nav><a href="/resources/blog/">Blog</a><a href="/resources/case-studies/">Case Studies</a><a href="/resources/help-centre/">Help Centre</a><a href="/resources/webinars/">Webinars</a></nav></div>
      <div><h3>Company</h3><nav><a href="/about/">About Us</a><a href="/contact/">Contact Us</a><a href="/book-demo/">Book a Demo</a><a href="/free-dealership-audit/">Dealership Audit</a></nav></div>
    </div>
    <div class="dc-footer-bottom"><span>© 2026 DealershipCore. All rights reserved.</span><div class="dc-footer-legal"><a href="/privacy/">Privacy Policy</a><a href="/terms/">Terms of Service</a></div></div>
  </div></div>
</footer>`;

function fixFooter(html) {
  let output = html;
  if (!output.includes('id="dc-footer-fix-v1"')) output = output.replace('</head>', `${FOOTER_STYLE}</head>`);

  output = output.replace(
    /(<div class="dc-quote"><blockquote>[\s\S]*?<\/blockquote>)<footer class="dc-reference-footer">[\s\S]*?<\/footer>(<\/div><div class="dc-score">)/,
    '$1<footer>DealershipCore product principle</footer>$2',
  );

  output = output.replace(/<footer class="dc-footer">[\s\S]*?<\/footer>(?=<\/body>)/, FOOTER);
  return output;
}

export default {
  async fetch(request, env) {
    const response = await site.fetch(request, env);
    const type = (response.headers.get('content-type') || '').toLowerCase();
    if (!type.includes('text/html')) return response;

    const html = fixFooter(await response.text());
    const headers = new Headers(response.headers);
    for (const name of ['content-length', 'content-encoding', 'etag']) headers.delete(name);
    headers.set('x-site-version', RELEASE);
    headers.set('x-dealershipcore-footer-fix', 'true');

    return new Response(request.method === 'HEAD' ? null : html, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};
