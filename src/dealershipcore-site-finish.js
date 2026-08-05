import site from './dealershipcore-enterprise-refined.js';

const RELEASE = 'dealershipcore-site-finish-2026-08-05-v1';
const TEAM_PHOTO = 'https://images.pexels.com/photos/7144226/pexels-photo-7144226.jpeg?auto=compress&cs=tinysrgb&w=1400&h=1100&fit=crop';

const FONT_LINKS = `<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">`;

const FINISH_STYLE = `<style id="dc-site-finish-v1">
:root{
  --finish-black:#040507;
  --finish-black-2:#090c11;
  --finish-panel:#10141b;
  --finish-line:#252b35;
  --finish-red:#f11234;
  --finish-red-dark:#bd001d;
  --finish-white:#fff;
  --finish-soft:#f4f6f8;
  --finish-ink:#10151d;
  --finish-muted:#657184;
  --finish-font:'Manrope',Inter,ui-sans-serif,-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;
}
html{scroll-behavior:smooth;scroll-padding-top:92px}
body{font-family:var(--finish-font)!important;color:var(--finish-ink);letter-spacing:-.01em;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}
body h1,body h2,body h3,body h4,body strong,body b,body button,body .btn,body .button{font-family:var(--finish-font)!important}
a,button{touch-action:manipulation}
a:focus-visible,button:focus-visible,input:focus-visible,select:focus-visible,textarea:focus-visible{outline:3px solid rgba(241,18,52,.35)!important;outline-offset:3px!important}

/* Consistent enterprise header on every route */
body>header,body>.site-header,.dc-header{background:rgba(4,5,7,.96)!important;border-top:0!important;border-bottom:1px solid rgba(255,255,255,.1)!important;box-shadow:none!important;backdrop-filter:blur(18px)}
body>header .head,body>.site-header .header-inner,.dc-header-inner{min-height:76px!important}
body>header .brand,body>header .brand b,body>header .nav a,body>header .actions>a,body>.site-header .brand,body>.site-header .main-nav a,body>.site-header .main-nav button,.dc-header .dc-brand,.dc-header .dc-nav a,.dc-header .dc-actions>a{color:#fff!important}
body>header .brand i,body>.site-header .brand i,.dc-header .dc-brand i{background:rgba(255,255,255,.22)!important}
body>header .menu,body>.site-header .menu-button{border-color:rgba(255,255,255,.18)!important;background:#0c1016!important;color:#fff!important}
body>header .menu:before,body>header .menu:after,body>header .menu span{background:#fff!important}
body>header .mobile,body>.site-header+.mobile-menu{background:#07090d!important;border-color:rgba(255,255,255,.1)!important}
body>header .mobile a,body>.site-header+.mobile-menu a{color:#fff!important;border-color:rgba(255,255,255,.08)!important}

/* New homepage hero */
.dc-hero-premium{position:relative;overflow:hidden;padding:78px 0 0;background:var(--finish-black);color:#fff}
.dc-hero-premium:before{content:"";position:absolute;inset:0;background:linear-gradient(rgba(255,255,255,.024) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.024) 1px,transparent 1px),radial-gradient(circle at 78% 22%,rgba(241,18,52,.19),transparent 30%);background-size:76px 76px,76px 76px,auto;mask-image:linear-gradient(to bottom,#000,transparent 78%);pointer-events:none}
.dc-hero-premium-grid{position:relative;display:grid;grid-template-columns:.86fr 1.14fr;gap:58px;align-items:center;min-height:640px}
.dc-hero-premium-copy{position:relative;z-index:3;padding:36px 0 64px}
.dc-hero-premium-kicker{display:inline-flex;align-items:center;gap:10px;color:#ff405a;font-size:11px;font-weight:800;letter-spacing:.14em;text-transform:uppercase}
.dc-hero-premium-kicker:before{content:"";width:8px;height:8px;border-radius:50%;background:var(--finish-red);box-shadow:0 0 0 7px rgba(241,18,52,.1)}
.dc-hero-premium h1{max-width:760px;margin:22px 0 0;font-size:clamp(58px,6.2vw,94px);line-height:.93;letter-spacing:-6px;text-wrap:balance}
.dc-hero-premium h1 span{display:block;color:var(--finish-red)}
.dc-hero-premium-lead{max-width:650px;margin:28px 0 0;color:#b2bcc9;font-size:18px;line-height:1.72}
.dc-hero-premium-actions{display:flex;flex-wrap:wrap;gap:12px;margin-top:34px}
.dc-premium-btn{display:inline-flex;align-items:center;justify-content:center;min-height:52px;padding:0 24px;border:1px solid transparent;border-radius:8px;font-size:14px;font-weight:800;transition:transform .18s ease,border-color .18s ease,background .18s ease,box-shadow .18s ease}
.dc-premium-btn:hover{transform:translateY(-2px)}
.dc-premium-btn-primary{background:linear-gradient(135deg,#ff1737,#d00020);color:#fff;box-shadow:0 16px 38px rgba(241,18,52,.28)}
.dc-premium-btn-secondary{border-color:rgba(255,255,255,.28);background:rgba(255,255,255,.03);color:#fff}
.dc-premium-btn-secondary:hover{border-color:rgba(255,255,255,.58);background:rgba(255,255,255,.07)}
.dc-hero-premium-proof{display:flex;flex-wrap:wrap;gap:11px 23px;margin-top:30px;color:#9ba6b5;font-size:12px;font-weight:600}
.dc-hero-premium-proof span{display:flex;align-items:center;gap:8px}.dc-hero-premium-proof span:before{content:"✓";display:grid;place-items:center;width:21px;height:21px;border-radius:50%;background:rgba(241,18,52,.13);color:#ff405a;font-weight:900}

.dc-hero-premium-visual{position:relative;min-height:590px}
.dc-hero-human{position:absolute;left:0;top:24px;width:67%;height:500px;overflow:hidden;border:1px solid rgba(255,255,255,.12);border-radius:12px;background:#151a22;box-shadow:0 42px 120px rgba(0,0,0,.42)}
.dc-hero-human img{width:100%;height:100%;object-fit:cover;object-position:center;filter:saturate(.8) contrast(1.04)}
.dc-hero-human:after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(4,5,7,.04),rgba(4,5,7,.25)),linear-gradient(0deg,rgba(4,5,7,.52),transparent 52%)}
.dc-hero-dashboard{position:absolute;z-index:3;right:0;top:92px;width:67%;padding:13px;border:1px solid rgba(255,255,255,.14);border-radius:12px;background:rgba(9,12,17,.96);box-shadow:0 38px 110px rgba(0,0,0,.57);backdrop-filter:blur(15px)}
.dc-hero-dashboard-bar{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:1px 2px 12px;color:#7e8999;font-size:10px}.dc-hero-dashboard-bar strong{color:#fff;font-size:11px}.dc-hero-dashboard-bar span:last-child{display:flex;align-items:center;gap:7px}.dc-hero-dashboard-bar span:last-child:before{content:"";width:7px;height:7px;border-radius:50%;background:#37d58c;box-shadow:0 0 0 4px rgba(55,213,140,.1)}
.dc-hero-dashboard img{display:block;width:100%;border-radius:7px;background:#111720}
.dc-hero-insight{position:absolute;z-index:4;right:7%;bottom:48px;width:min(370px,68%);padding:18px;border:1px solid rgba(255,255,255,.13);border-left:3px solid var(--finish-red);border-radius:8px;background:rgba(8,11,16,.92);box-shadow:0 22px 65px rgba(0,0,0,.42);backdrop-filter:blur(14px)}
.dc-hero-insight small{color:#ff5269;font-size:9px;font-weight:800;letter-spacing:.13em;text-transform:uppercase}.dc-hero-insight strong{display:block;margin-top:8px;font-size:16px;line-height:1.42}.dc-hero-insight p{margin:6px 0 0;color:#8995a5;font-size:11px;line-height:1.55}
.dc-hero-premium-rail{position:relative;display:grid;grid-template-columns:repeat(4,1fr);margin-top:30px;border-top:1px solid rgba(255,255,255,.12);border-bottom:1px solid rgba(255,255,255,.12)}
.dc-hero-premium-rail article{padding:24px 25px;border-right:1px solid rgba(255,255,255,.12)}.dc-hero-premium-rail article:last-child{border-right:0}
.dc-hero-premium-rail b{color:#ff405a;font-size:10px;letter-spacing:.12em;text-transform:uppercase}.dc-hero-premium-rail strong{display:block;margin-top:10px;font-size:14px}.dc-hero-premium-rail p{margin:6px 0 0;color:#7e8999;font-size:11px;line-height:1.5}

/* Secondary pages */
.hero,.formHero{position:relative;overflow:hidden;padding:82px 0!important;background:#07090d!important;color:#fff!important}
.hero:before,.formHero:before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 82% 18%,rgba(241,18,52,.16),transparent 28%),linear-gradient(135deg,rgba(255,255,255,.025),transparent 36%);pointer-events:none}
.hero>.wrap,.formHero>.wrap{position:relative}
.heroGrid{gap:72px!important}
.hero h1,.formHero h1{color:#fff!important;font-size:clamp(48px,5.6vw,78px)!important;line-height:.97!important;letter-spacing:-4.6px!important}
.hero .lead,.formHero .lead{color:#abb6c5!important}
.hero .crumbs,.formHero .crumbs{color:#7f8b9c!important}
.hero .proof{color:#aab5c4!important}
.hero .media{border:1px solid rgba(255,255,255,.12)!important;border-radius:12px!important;box-shadow:0 35px 100px rgba(0,0,0,.4)!important}
.hero .caption{border-left-color:var(--finish-red)!important;border-radius:0 7px 7px 0!important}
section.block{padding:96px 0!important}
.sectionHead{max-width:830px}.copy h2,.sectionHead h2{font-size:clamp(39px,4.7vw,62px)!important;line-height:1.02!important;letter-spacing:-3.3px!important}
.panel,.card,.hubCard,.formCard,.thanksCard,.related a{border-radius:8px!important;border-color:#dde2e8!important;box-shadow:none!important}
.panel:hover,.card:hover,.hubCard:hover,.related a:hover{border-color:#cbd2db!important;box-shadow:0 22px 60px rgba(8,12,18,.08)!important}
.cards,.hubGrid{gap:13px!important}.card,.hubCard{padding:26px!important}
.steps{overflow:hidden;border-radius:9px!important}.step{background:#0e141d!important}
.article{padding-top:76px!important}.articleGrid{gap:76px!important}.article h1{font-size:clamp(46px,5.2vw,70px)!important;line-height:1!important;letter-spacing:-4px!important}.articleImg{border-radius:10px!important}.body h2{font-size:32px!important;letter-spacing:-1.6px!important}.body p{color:#465469!important;line-height:1.82!important}.toc{border-left-color:#dfe4ea!important}
.faq{overflow:hidden;border-radius:8px!important}.faq button{min-height:62px!important}.faq article.open button{color:var(--finish-red)!important}
.cta{background:linear-gradient(120deg,#f11234,#b9001c)!important}.ctaGrid{min-height:130px}.cta h2{letter-spacing:-3.1px!important}
.formCard{padding:34px!important}.field input,.field select,.field textarea{border-radius:7px!important;min-height:50px!important}.aside{border-radius:9px!important;background:#090c11!important}
.homeGuides{padding:92px 0!important}.guideLinks a{border-radius:8px!important}

/* Footer based on the supplied reference */
.dc-final-footer{position:relative;background:#020304;color:#9ba4b0;border-top:1px solid rgba(255,255,255,.08)}
.dc-footer-accelerate{position:relative;overflow:hidden;border-bottom:1px solid rgba(255,255,255,.1);background:#040507}
.dc-footer-accelerate:before{content:"";position:absolute;left:-45px;top:-95px;width:330px;height:285px;transform:skewX(-18deg);background:linear-gradient(135deg,rgba(241,18,52,.03),rgba(241,18,52,.38),rgba(241,18,52,.04));border-right:1px solid rgba(241,18,52,.55);box-shadow:30px 0 70px rgba(241,18,52,.14)}
.dc-footer-accelerate-grid{position:relative;display:grid;grid-template-columns:140px 1fr auto;gap:34px;align-items:center;min-height:150px}
.dc-footer-accelerate-mark{display:flex;align-items:center;justify-content:center}.dc-footer-accelerate-mark svg{width:74px;height:62px;filter:drop-shadow(0 0 20px rgba(241,18,52,.34))}
.dc-footer-accelerate-copy h2{margin:0;color:#fff;font-size:clamp(28px,3.2vw,45px);line-height:1;letter-spacing:-2.1px}.dc-footer-accelerate-copy p{margin:10px 0 0;color:#a0a9b5;font-size:13px;line-height:1.6}
.dc-footer-accelerate-actions{display:flex;gap:12px}.dc-footer-btn{display:inline-flex;align-items:center;justify-content:center;min-width:165px;min-height:52px;padding:0 20px;border:1px solid rgba(255,255,255,.24);border-radius:6px;color:#fff;font-size:12px;font-weight:800;transition:transform .18s ease,border-color .18s ease,box-shadow .18s ease}.dc-footer-btn:hover{transform:translateY(-2px);border-color:rgba(255,255,255,.55)}.dc-footer-btn-red{border-color:var(--finish-red);background:linear-gradient(135deg,#ff1737,#d00020);box-shadow:0 15px 38px rgba(241,18,52,.25)}
.dc-footer-main{padding:42px 0 26px}.dc-final-footer-grid{display:grid;grid-template-columns:1.4fr repeat(4,1fr);gap:44px}.dc-final-footer-brand{display:flex;align-items:center;gap:10px;color:#fff;font-size:18px;font-weight:800}.dc-final-footer-brand svg{width:36px;height:30px}.dc-final-footer-copy{max-width:330px;margin:16px 0 0;color:#747f8d;font-size:12px;line-height:1.7}.dc-footer-socials{display:flex;gap:10px;margin-top:20px}.dc-footer-socials span{display:grid;place-items:center;width:31px;height:31px;border:1px solid #262d36;border-radius:50%;background:#090c11;color:#c3cad3;font-size:10px;font-weight:900}
.dc-final-footer h3{margin:0 0 16px;color:#fff;font-size:13px}.dc-final-footer nav{display:grid;align-content:start;gap:10px}.dc-final-footer nav a{color:#7e8997;font-size:11px;transition:color .16s ease}.dc-final-footer nav a:hover{color:#fff}
.dc-footer-bottom{display:flex;justify-content:space-between;gap:24px;margin-top:34px;padding-top:20px;border-top:1px solid rgba(255,255,255,.08);color:#59636f;font-size:10px}.dc-footer-legal{display:flex;gap:22px}.dc-footer-legal a:hover{color:#fff}

@media(max-width:1120px){.dc-hero-premium-grid{grid-template-columns:1fr;gap:12px}.dc-hero-premium-copy{padding-bottom:20px}.dc-hero-premium-visual{min-height:560px}.dc-footer-accelerate-grid{grid-template-columns:100px 1fr}.dc-footer-accelerate-actions{grid-column:2}.dc-final-footer-grid{grid-template-columns:1.4fr repeat(2,1fr)}}
@media(max-width:760px){.dc-hero-premium{padding-top:48px}.dc-hero-premium-grid{min-height:auto}.dc-hero-premium h1{font-size:clamp(48px,13vw,66px);letter-spacing:-3.9px}.dc-hero-premium-lead{font-size:16px}.dc-hero-premium-actions{flex-direction:column}.dc-premium-btn{width:100%}.dc-hero-premium-visual{min-height:500px}.dc-hero-human{width:84%;height:390px}.dc-hero-dashboard{top:110px;width:78%}.dc-hero-insight{left:8%;right:8%;bottom:24px;width:auto}.dc-hero-premium-rail{grid-template-columns:1fr 1fr}.dc-hero-premium-rail article:nth-child(2){border-right:0}.dc-hero-premium-rail article:nth-child(-n+2){border-bottom:1px solid rgba(255,255,255,.12)}.heroGrid{grid-template-columns:1fr!important;gap:38px!important}.hero h1,.formHero h1{font-size:clamp(43px,12vw,60px)!important;letter-spacing:-3px!important}.articleGrid{grid-template-columns:1fr!important;gap:35px!important}.toc{position:static!important}.dc-footer-accelerate-grid{grid-template-columns:64px 1fr;gap:18px;padding:30px 0}.dc-footer-accelerate-mark svg{width:48px}.dc-footer-accelerate-actions{grid-column:1/-1;flex-direction:column}.dc-footer-btn{width:100%}.dc-final-footer-grid{grid-template-columns:1fr 1fr;gap:34px}.dc-final-footer-grid>div:first-child{grid-column:1/-1}.dc-footer-bottom{flex-direction:column}.dc-footer-legal{flex-wrap:wrap}}
@media(max-width:480px){.dc-wrap,.wrap{width:min(100% - 28px,1320px)!important}.dc-hero-premium-visual{min-height:450px}.dc-hero-human{width:94%;height:340px}.dc-hero-dashboard{right:-6%;width:88%;top:105px}.dc-hero-premium-rail{grid-template-columns:1fr}.dc-hero-premium-rail article{border-right:0;border-bottom:1px solid rgba(255,255,255,.12)!important}.dc-hero-premium-rail article:last-child{border-bottom:0!important}.dc-final-footer-grid{grid-template-columns:1fr}.dc-final-footer-grid>div:first-child{grid-column:auto}}
@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}.dc-premium-btn,.dc-footer-btn,.panel,.card,.hubCard,.related a{transition:none!important}.dc-premium-btn:hover,.dc-footer-btn:hover{transform:none!important}}
</style>`;

const HERO = `<section class="dc-hero-premium" aria-labelledby="dc-hero-title"><div class="dc-wrap">
  <div class="dc-hero-premium-grid">
    <div class="dc-hero-premium-copy"><span class="dc-hero-premium-kicker">South African dealership operating system</span><h1 id="dc-hero-title">Run your dealership with complete clarity.<span>Grow without losing control.</span></h1><p class="dc-hero-premium-lead">DealershipCore connects leads, customers, stock, sales, finance workflows and management reporting in one accountable operating system built around how dealership teams actually work.</p><div class="dc-hero-premium-actions"><a class="dc-premium-btn dc-premium-btn-primary" href="/book-demo/">Book a personalised demo</a><a class="dc-premium-btn dc-premium-btn-secondary" href="#platform">Explore the platform</a></div><div class="dc-hero-premium-proof"><span>Built for South African dealerships</span><span>Mobile-ready workflows</span><span>Human implementation support</span></div></div>
    <div class="dc-hero-premium-visual" aria-label="DealershipCore product and dealership team preview"><div class="dc-hero-human"><img src="${TEAM_PHOTO}" alt="Dealership team helping a customer in a modern showroom" width="1400" height="1100" fetchpriority="high"></div><div class="dc-hero-dashboard"><div class="dc-hero-dashboard-bar"><strong>DealershipCore operating view</strong><span>Illustrative workspace</span></div><img src="/assets/dealershipcore-product-devices.webp" alt="DealershipCore dashboard shown across desktop and mobile" width="1200" height="760" fetchpriority="high"></div><div class="dc-hero-insight"><small>One connected operating view</small><strong>Every opportunity, next action and dealership priority stays visible.</strong><p>Give sales teams clarity while owners and managers retain control.</p></div></div>
  </div>
  <div class="dc-hero-premium-rail"><article><b>01 · Leads</b><strong>Every enquiry has an owner</strong><p>Source, vehicle, customer and next action stay connected.</p></article><article><b>02 · Stock</b><strong>Every vehicle has context</strong><p>Readiness, ageing, media and demand are visible together.</p></article><article><b>03 · Sales</b><strong>Every deal follows a process</strong><p>Stages, finance progress and deadlines remain accountable.</p></article><article><b>04 · Reporting</b><strong>Every manager sees priorities</strong><p>One operating picture across teams, branches and outcomes.</p></article></div>
</div></section>`;

const FOOTER_MARK = `<svg viewBox="0 0 100 70" aria-hidden="true"><path d="M10 11h28l30 24-30 24H10l30-24L10 11Z" fill="#ff1737"/><path d="M43 4h22l31 31-31 31H43l31-31L43 4Z" fill="#d60021"/></svg>`;

const FOOTER = `<footer class="dc-final-footer"><div class="dc-footer-accelerate"><div class="dc-wrap dc-footer-accelerate-grid"><div class="dc-footer-accelerate-mark">${FOOTER_MARK}</div><div class="dc-footer-accelerate-copy"><h2>Ready to accelerate your dealership?</h2><p>Book a personalised demo and discover how DealershipCore can drive results for your business.</p></div><div class="dc-footer-accelerate-actions"><a class="dc-footer-btn" href="/book-demo/">Book a demo</a><a class="dc-footer-btn dc-footer-btn-red" href="/free-dealership-audit/">Free dealership audit</a></div></div></div><div class="dc-footer-main"><div class="dc-wrap"><div class="dc-final-footer-grid"><div><a class="dc-final-footer-brand" href="/" aria-label="DealershipCore home">${FOOTER_MARK}<span>DealershipCore</span></a><p class="dc-final-footer-copy">The connected dealership operating system for leads, stock, customers, sales workflow, finance context and owner reporting.</p><div class="dc-footer-socials" aria-label="DealershipCore social channels"><span aria-hidden="true">in</span><span aria-hidden="true">f</span><span aria-hidden="true">◎</span><span aria-hidden="true">▶</span></div></div><nav aria-label="Footer platform links"><h3>Platform</h3><a href="/product/">Overview</a><a href="/product/features/">Features</a><a href="/product/integrations/">Integrations</a><a href="/pricing/">Pricing</a></nav><nav aria-label="Footer solution links"><h3>Solutions</h3><a href="/solutions/new-car-dealers/">New-car dealerships</a><a href="/solutions/used-car-dealers/">Used-car dealerships</a><a href="/solutions/dealer-groups/">Dealer groups</a><a href="/solutions/finance-managers/">Finance teams</a></nav><nav aria-label="Footer resource links"><h3>Resources</h3><a href="/resources/blog/">Blog</a><a href="/resources/case-studies/">Case studies</a><a href="/resources/help-centre/">Help centre</a><a href="/resources/guides/">Guides</a></nav><nav aria-label="Footer company links"><h3>Company</h3><a href="/about/">About us</a><a href="/contact/">Contact us</a><a href="/book-demo/">Book a demo</a><a href="/free-dealership-audit/">Dealership audit</a></nav></div><div class="dc-footer-bottom"><span>© 2026 DealershipCore. All rights reserved.</span><div class="dc-footer-legal"><a href="/privacy/">Privacy policy</a><a href="/terms/">Terms of service</a></div></div></div></div></footer>`;

function addSocialMeta(html) {
  if (!html.includes('name="twitter:card"')) html = html.replace('</head>', '<meta name="twitter:card" content="summary_large_image"><meta property="og:image" content="https://dealershipcore.co.za/assets/dealershipcore-product-devices.webp"><meta name="twitter:image" content="https://dealershipcore.co.za/assets/dealershipcore-product-devices.webp"></head>');
  return html;
}

function replaceFooter(html) {
  let output = html;
  output = output.replace(/<footer class="dc-footer">[\s\S]*?<\/footer>/, FOOTER);
  output = output.replace(/<footer class="site-footer">[\s\S]*?<\/footer>/, FOOTER);
  output = output.replace(/<footer><div class="shopFoot">[\s\S]*?<\/footer>/, FOOTER);
  return output;
}

function finishPage(html, pathname) {
  if (html.includes('id="dc-site-finish-v1"')) return html;
  let output = html;
  if (!output.includes('family=Manrope')) output = output.replace('</head>', `${FONT_LINKS}</head>`);
  output = output.replace('</head>', `${FINISH_STYLE}</head>`);
  output = addSocialMeta(output);
  if (pathname === '/') {
    output = output.replace(/<section class="dc-hero-enterprise">[\s\S]*?<\/section>/, HERO);
    output = output.replace(/<section class="dc-cta">[\s\S]*?<\/section>/, '');
  }
  output = replaceFooter(output);
  return output;
}

export default {
  async fetch(request, env) {
    const response = await site.fetch(request, env);
    const type = (response.headers.get('content-type') || '').toLowerCase();
    if (!type.includes('text/html')) return response;

    const url = new URL(request.url);
    const html = finishPage(await response.text(), url.pathname);
    const headers = new Headers(response.headers);
    for (const name of ['content-length', 'content-encoding', 'etag']) headers.delete(name);
    headers.set('x-site-version', RELEASE);
    headers.set('x-dealershipcore-site-finish', 'hero-footer-and-secondary-pages');

    return new Response(request.method === 'HEAD' ? null : html, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};
