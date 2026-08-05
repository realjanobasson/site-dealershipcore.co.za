import site from './dealershipcore-hero-restored.js';

const RELEASE = 'dealershipcore-hero-redesign-v2-2026-08-05';

const HERO_STYLE = `<style id="dc-hero-redesign-v2">
.dc-hero-v2{position:relative;overflow:hidden;background:#030405;color:#fff;padding:78px 0 0}
.dc-hero-v2:before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 78% 14%,rgba(241,18,52,.16),transparent 28%),linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px);background-size:auto,72px 72px,72px 72px;mask-image:linear-gradient(to bottom,#000 0,rgba(0,0,0,.8) 66%,transparent 100%);pointer-events:none}
.dc-hero-v2:after{content:"";position:absolute;right:-180px;top:80px;width:520px;height:520px;border-radius:50%;background:radial-gradient(circle,rgba(241,18,52,.15),transparent 68%);filter:blur(14px);pointer-events:none}
.dc-hero-v2-grid{position:relative;z-index:1;display:grid;grid-template-columns:.88fr 1.12fr;gap:68px;align-items:center;min-height:640px}
.dc-hero-v2-copy{padding:34px 0 70px}
.dc-hero-v2-kicker{display:inline-flex;align-items:center;gap:10px;color:#ff405a;font-size:11px;font-weight:800;letter-spacing:.14em;text-transform:uppercase}
.dc-hero-v2-kicker:before{content:"";width:8px;height:8px;border-radius:50%;background:#f11234;box-shadow:0 0 0 7px rgba(241,18,52,.1)}
.dc-hero-v2 h1{max-width:780px;margin:22px 0 0;font-size:clamp(58px,6.4vw,96px);line-height:.93;letter-spacing:-6.2px;text-wrap:balance}
.dc-hero-v2 h1 span{display:block;color:#f11234}
.dc-hero-v2-lead{max-width:650px;margin:28px 0 0;color:#b1bbc8;font-size:18px;line-height:1.72}
.dc-hero-v2-actions{display:flex;flex-wrap:wrap;gap:12px;margin-top:34px}
.dc-hero-v2-btn{display:inline-flex;align-items:center;justify-content:center;min-height:52px;padding:0 24px;border:1px solid transparent;border-radius:7px;font-size:14px;font-weight:800;transition:transform .18s ease,border-color .18s ease,background .18s ease,box-shadow .18s ease}
.dc-hero-v2-btn:hover{transform:translateY(-2px)}
.dc-hero-v2-btn.is-primary{background:linear-gradient(135deg,#ff1737,#d00020);color:#fff;box-shadow:0 16px 38px rgba(241,18,52,.28)}
.dc-hero-v2-btn.is-secondary{border-color:rgba(255,255,255,.28);background:rgba(255,255,255,.03);color:#fff}
.dc-hero-v2-proof{display:flex;flex-wrap:wrap;gap:12px 22px;margin-top:29px;color:#98a3b2;font-size:12px;font-weight:650}
.dc-hero-v2-proof span{display:flex;align-items:center;gap:8px}.dc-hero-v2-proof span:before{content:"✓";display:grid;place-items:center;width:21px;height:21px;border-radius:50%;background:rgba(241,18,52,.13);color:#ff405a;font-weight:900}

.dc-hero-v2-visual{position:relative;min-height:590px}
.dc-hero-v2-product{position:relative;z-index:2;overflow:hidden;border:1px solid rgba(255,255,255,.13);border-radius:12px;background:#080b10;box-shadow:0 42px 120px rgba(0,0,0,.52)}
.dc-hero-v2-product-top{display:flex;align-items:center;justify-content:space-between;gap:18px;min-height:58px;padding:0 18px;border-bottom:1px solid rgba(255,255,255,.1);background:#0c1016}
.dc-hero-v2-dots{display:flex;gap:6px}.dc-hero-v2-dots i{width:8px;height:8px;border-radius:50%;background:#303844}.dc-hero-v2-dots i:first-child{background:#f11234}
.dc-hero-v2-product-title{display:flex;align-items:center;gap:10px;color:#fff;font-size:12px;font-weight:800}.dc-hero-v2-product-mark{display:grid;place-items:center;width:28px;height:28px;border-radius:7px;background:#f11234;font-size:9px;font-weight:900}
.dc-hero-v2-live{display:flex;align-items:center;gap:8px;color:#8f9baa;font-size:10px}.dc-hero-v2-live:before{content:"";width:8px;height:8px;border-radius:50%;background:#39d58f;box-shadow:0 0 0 5px rgba(57,213,143,.1)}
.dc-hero-v2-product-body{display:grid;grid-template-columns:142px 1fr;min-height:455px}
.dc-hero-v2-side{padding:16px 10px;border-right:1px solid rgba(255,255,255,.09);background:#090c11}
.dc-hero-v2-side small{display:block;padding:6px 10px 12px;color:#626d7c;font-size:9px;font-weight:900;letter-spacing:.14em;text-transform:uppercase}
.dc-hero-v2-side span{display:flex;align-items:center;gap:9px;min-height:39px;padding:0 10px;border-radius:6px;color:#7f8a9a;font-size:10px;font-weight:750}.dc-hero-v2-side span:before{content:"";width:20px;height:20px;border:1px solid #29313d;border-radius:5px}.dc-hero-v2-side span.is-active{background:rgba(241,18,52,.13);color:#fff}.dc-hero-v2-side span.is-active:before{border-color:#f11234;background:#f11234;box-shadow:0 8px 22px rgba(241,18,52,.2)}
.dc-hero-v2-screen{position:relative;overflow:hidden;padding:18px;background:linear-gradient(145deg,#080b10,#0d1117)}
.dc-hero-v2-screen:before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 75% 12%,rgba(241,18,52,.1),transparent 28%);pointer-events:none}
.dc-hero-v2-screen img{position:relative;z-index:1;display:block;width:100%;height:100%;object-fit:contain;object-position:center;border-radius:8px}
.dc-hero-v2-human{display:grid;grid-template-columns:145px 1fr auto;gap:18px;align-items:center;margin-top:14px;padding:12px;border:1px solid rgba(255,255,255,.11);border-radius:9px;background:#090c11}
.dc-hero-v2-human-img{height:88px;overflow:hidden;border-radius:7px}.dc-hero-v2-human-img img{width:100%;height:100%;object-fit:cover;object-position:center;filter:saturate(.82)}
.dc-hero-v2-human-copy strong{display:block;font-size:13px}.dc-hero-v2-human-copy span{display:block;margin-top:5px;color:#7f8a99;font-size:10px;line-height:1.55}.dc-hero-v2-human-tag{padding:7px 10px;border:1px solid rgba(241,18,52,.35);border-radius:999px;color:#ff5269;font-size:9px;font-weight:900;letter-spacing:.08em;text-transform:uppercase;white-space:nowrap}
.dc-hero-v2-rail{position:relative;z-index:1;display:grid;grid-template-columns:repeat(4,1fr);margin-top:36px;border-top:1px solid rgba(255,255,255,.12);border-bottom:1px solid rgba(255,255,255,.12)}
.dc-hero-v2-rail article{padding:24px 25px;border-right:1px solid rgba(255,255,255,.12)}.dc-hero-v2-rail article:last-child{border-right:0}.dc-hero-v2-rail b{color:#ff405a;font-size:10px;letter-spacing:.12em;text-transform:uppercase}.dc-hero-v2-rail strong{display:block;margin-top:9px;font-size:14px}.dc-hero-v2-rail p{margin:6px 0 0;color:#7d8898;font-size:11px;line-height:1.5}
@media(max-width:1100px){.dc-hero-v2-grid{grid-template-columns:1fr;gap:34px}.dc-hero-v2-copy{padding-bottom:10px}.dc-hero-v2-visual{min-height:auto}.dc-hero-v2-product-body{min-height:410px}}
@media(max-width:760px){.dc-hero-v2{padding-top:46px}.dc-hero-v2 h1{font-size:clamp(48px,13vw,68px);letter-spacing:-4px}.dc-hero-v2-lead{font-size:16px}.dc-hero-v2-product-body{display:block;min-height:auto}.dc-hero-v2-side{display:flex;gap:5px;overflow-x:auto;border-right:0;border-bottom:1px solid rgba(255,255,255,.09)}.dc-hero-v2-side small{display:none}.dc-hero-v2-side span{flex:0 0 auto}.dc-hero-v2-screen{min-height:340px}.dc-hero-v2-human{grid-template-columns:90px 1fr}.dc-hero-v2-human-tag{display:none}.dc-hero-v2-rail{grid-template-columns:1fr 1fr}.dc-hero-v2-rail article:nth-child(2){border-right:0}.dc-hero-v2-rail article:nth-child(-n+2){border-bottom:1px solid rgba(255,255,255,.12)}}
@media(max-width:520px){.dc-hero-v2-actions{flex-direction:column}.dc-hero-v2-btn{width:100%}.dc-hero-v2-product-top{padding:0 12px}.dc-hero-v2-live{display:none}.dc-hero-v2-screen{min-height:280px;padding:12px}.dc-hero-v2-human{grid-template-columns:1fr}.dc-hero-v2-human-img{height:120px}.dc-hero-v2-rail{grid-template-columns:1fr}.dc-hero-v2-rail article{border-right:0!important;border-bottom:1px solid rgba(255,255,255,.12)}.dc-hero-v2-rail article:last-child{border-bottom:0}}
@media(prefers-reduced-motion:reduce){.dc-hero-v2-btn{transition:none}.dc-hero-v2-btn:hover{transform:none}}
</style>`;

const HERO = `<section class="dc-hero-v2" aria-labelledby="dc-hero-v2-title"><div class="dc-wrap">
  <div class="dc-hero-v2-grid">
    <div class="dc-hero-v2-copy"><span class="dc-hero-v2-kicker">Dealership operating system</span><h1 id="dc-hero-v2-title">Run your dealership.<span>See what needs action.</span></h1><p class="dc-hero-v2-lead">DealershipCore connects leads, stock, customers, sales workflow, finance and reporting in one clear operating system built for modern dealership teams.</p><div class="dc-hero-v2-actions"><a class="dc-hero-v2-btn is-primary" href="/book-demo/">Book a demo</a><a class="dc-hero-v2-btn is-secondary" href="#platform">Explore the platform</a></div><div class="dc-hero-v2-proof"><span>Built for South African dealerships</span><span>One connected operating view</span><span>Human onboarding and support</span></div></div>
    <div class="dc-hero-v2-visual">
      <div class="dc-hero-v2-product"><div class="dc-hero-v2-product-top"><div class="dc-hero-v2-dots"><i></i><i></i><i></i></div><div class="dc-hero-v2-product-title"><span class="dc-hero-v2-product-mark">DC</span><span>DealershipCore workspace</span></div><div class="dc-hero-v2-live">Product preview</div></div><div class="dc-hero-v2-product-body"><div class="dc-hero-v2-side"><small>Workspace</small><span class="is-active">Overview</span><span>Leads</span><span>Stock</span><span>Deals</span><span>Tasks</span></div><div class="dc-hero-v2-screen"><img src="/assets/dealershipcore-product-devices.webp" alt="DealershipCore product dashboard shown across desktop and mobile devices"></div></div></div>
      <div class="dc-hero-v2-human"><div class="dc-hero-v2-human-img"><img src="/assets/dealershipcore-dealer-shop.webp" alt="Modern dealership team and showroom environment"></div><div class="dc-hero-v2-human-copy"><strong>Built around the people doing the work.</strong><span>Salespeople, buyers, finance teams, managers and owners each see the information and next actions relevant to them.</span></div><span class="dc-hero-v2-human-tag">Human-first software</span></div>
    </div>
  </div>
  <div class="dc-hero-v2-rail"><article><b>01 · Leads</b><strong>Every enquiry visible</strong><p>Source, customer, vehicle, owner and next action remain connected.</p></article><article><b>02 · Stock</b><strong>Every vehicle understood</strong><p>Readiness, ageing, media and buyer interest in one vehicle record.</p></article><article><b>03 · Sales</b><strong>Every deal accountable</strong><p>Stages, tasks, finance progress and handover stay visible.</p></article><article><b>04 · Reporting</b><strong>Every priority clear</strong><p>Owners and managers see exceptions before opportunities are lost.</p></article></div>
</div></section>`;

function redesignHero(html) {
  if (html.includes('id="dc-hero-redesign-v2"')) return html;
  let output = html.replace('</head>', `${HERO_STYLE}</head>`);
  output = output.replace(/<section class="dc-hero-enterprise">[\s\S]*?<\/section>/, HERO);
  return output;
}

export default {
  async fetch(request, env) {
    const response = await site.fetch(request, env);
    const type = (response.headers.get('content-type') || '').toLowerCase();
    const url = new URL(request.url);
    if (!type.includes('text/html') || url.pathname !== '/') return response;

    const html = redesignHero(await response.text());
    const headers = new Headers(response.headers);
    for (const name of ['content-length', 'content-encoding', 'etag']) headers.delete(name);
    headers.set('x-site-version', RELEASE);
    headers.set('x-dealershipcore-hero-v2', 'true');

    return new Response(request.method === 'HEAD' ? null : html, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};
