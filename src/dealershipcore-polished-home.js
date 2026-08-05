import site from './dealershipcore-full-home.js';

const RELEASE = 'dealershipcore-enterprise-home-2026-08-05-v2';

const HERO_PHOTO = 'https://images.pexels.com/photos/4895421/pexels-photo-4895421.jpeg?auto=compress&cs=tinysrgb&w=1800&h=1200&fit=crop';
const TEAM_PHOTO = 'https://images.pexels.com/photos/7144226/pexels-photo-7144226.jpeg?auto=compress&cs=tinysrgb&w=1400&h=1000&fit=crop';

const ENTERPRISE_STYLE = `<style id="dc-enterprise-home-v2">
:root{
  --dc-black:#05070a;
  --dc-panel:#0b0f14;
  --dc-panel-2:#111720;
  --dc-white:#ffffff;
  --dc-off:#f5f6f8;
  --dc-line:#e2e5ea;
  --dc-red:#f11234;
  --dc-red-dark:#c80020;
  --dc-copy:#151922;
  --dc-muted:#657083;
  --dc-shadow:0 28px 80px rgba(8,12,18,.14);
}
*{box-sizing:border-box}
body{background:#fff;color:var(--dc-copy);-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}
.dc-wrap{width:min(1320px,calc(100% - 48px))}
.dc-header{top:0;background:rgba(5,7,10,.96);border-top:0;border-bottom:1px solid rgba(255,255,255,.1);backdrop-filter:blur(18px);box-shadow:none}
.dc-header-inner{height:76px}
.dc-brand{color:#fff;font-size:21px;letter-spacing:-.7px}.dc-brand svg{width:42px}.dc-brand i{background:rgba(255,255,255,.22)}
.dc-nav{gap:24px;color:#fff;font-size:13px}.dc-nav a{color:#dbe0e7}.dc-nav a:hover{color:#fff}
.dc-actions>a:first-child{color:#fff;font-size:13px;font-weight:800}
.dc-btn{min-height:48px;border-radius:7px;padding:0 21px}.dc-btn-red{background:linear-gradient(135deg,#ff1737,#d90022);box-shadow:0 14px 34px rgba(241,18,52,.25)}.dc-btn-outline{border:1px solid #cfd4dc;background:#fff;color:#11151b}.dc-btn-dark{background:#0a0d12;color:#fff}
.dc-menu{color:#fff}
.dc-mobile-panel{display:none;position:fixed;z-index:38;left:0;right:0;top:76px;padding:18px 24px 26px;background:#080b10;border-bottom:1px solid rgba(255,255,255,.1);box-shadow:0 20px 40px rgba(0,0,0,.35)}
.dc-mobile-panel a{display:flex;align-items:center;justify-content:space-between;padding:15px 2px;border-bottom:1px solid rgba(255,255,255,.09);color:#fff;font-weight:800}.dc-mobile-panel a:last-child{margin-top:16px;justify-content:center;border:0;background:var(--dc-red);border-radius:7px}.dc-mobile-panel.is-open{display:block}

.dc-hero-enterprise{position:relative;overflow:hidden;padding:66px 0 0;background:#05070a;color:#fff}
.dc-hero-enterprise:before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 78% 22%,rgba(241,18,52,.16),transparent 32%),linear-gradient(135deg,rgba(255,255,255,.025),transparent 36%);pointer-events:none}
.dc-hero-enterprise-grid{position:relative;display:grid;grid-template-columns:.82fr 1.18fr;gap:44px;align-items:center;min-height:600px}
.dc-hero-enterprise .dc-kicker{color:#ff4761}.dc-hero-enterprise .dc-kicker:before{background:#ff1737}
.dc-hero-enterprise h1{max-width:650px;margin:18px 0 0;color:#fff;font-size:clamp(58px,6vw,88px);line-height:.94;letter-spacing:-4.8px}.dc-hero-enterprise h1 span{color:#ff1737}
.dc-hero-enterprise .dc-lead{max-width:620px;margin-top:24px;color:#b6c0ce;font-size:17px;line-height:1.72}
.dc-hero-enterprise .dc-btn-outline{border-color:rgba(255,255,255,.42);background:transparent;color:#fff}
.dc-hero-human-proof{display:flex;align-items:center;gap:14px;margin-top:28px;color:#c5ccd6;font-size:12px;line-height:1.45}.dc-hero-human-proof strong{display:block;color:#fff;font-size:13px}.dc-proof-faces{display:flex}.dc-proof-face{display:grid;place-items:center;width:36px;height:36px;margin-left:-7px;border:2px solid #05070a;border-radius:50%;background:linear-gradient(145deg,#f11234,#831024);font-size:11px;font-weight:900;color:#fff}.dc-proof-face:first-child{margin-left:0}.dc-proof-face:nth-child(2){background:linear-gradient(145deg,#303945,#111720)}.dc-proof-face:nth-child(3){background:linear-gradient(145deg,#a9b3c0,#424b57)}
.dc-enterprise-visual{position:relative;min-height:540px}
.dc-enterprise-photo{position:absolute;inset:0 19% 0 0;overflow:hidden;border-radius:14px;background:#151a21;box-shadow:0 34px 100px rgba(0,0,0,.46)}.dc-enterprise-photo img{width:100%;height:100%;object-fit:cover;object-position:center;filter:saturate(.82) contrast(1.05)}.dc-enterprise-photo:after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(5,7,10,.52),rgba(5,7,10,.04) 58%,rgba(5,7,10,.3)),linear-gradient(0deg,rgba(5,7,10,.45),transparent 50%)}
.dc-dashboard-frame{position:absolute;z-index:3;right:0;top:50%;width:64%;transform:translateY(-50%);padding:12px;border:1px solid rgba(255,255,255,.14);border-radius:13px;background:rgba(8,11,16,.94);box-shadow:0 35px 100px rgba(0,0,0,.55);backdrop-filter:blur(16px)}.dc-dashboard-frame img{display:block;width:100%;border-radius:8px}
.dc-live-chip{position:absolute;z-index:4;right:4%;bottom:28px;display:flex;align-items:center;gap:11px;padding:13px 15px;border:1px solid rgba(255,255,255,.15);border-radius:8px;background:rgba(9,12,18,.92);box-shadow:0 18px 50px rgba(0,0,0,.4)}.dc-live-chip i{width:10px;height:10px;border-radius:50%;background:#2fd58b;box-shadow:0 0 0 5px rgba(47,213,139,.12)}.dc-live-chip strong{display:block;font-size:12px}.dc-live-chip span{display:block;margin-top:3px;color:#8e9aac;font-size:10px}
.dc-hero-values{position:relative;display:grid;grid-template-columns:repeat(4,1fr);margin-top:44px;border-top:1px solid rgba(255,255,255,.12);border-bottom:1px solid rgba(255,255,255,.12)}.dc-hero-value{display:grid;grid-template-columns:42px 1fr;gap:12px;padding:24px;border-right:1px solid rgba(255,255,255,.12)}.dc-hero-value:last-child{border:0}.dc-value-icon{display:grid;place-items:center;width:38px;height:38px;border:1px solid rgba(241,18,52,.55);border-radius:50%;color:#ff2948;font-size:16px}.dc-hero-value strong{display:block;font-size:13px}.dc-hero-value span{display:block;margin-top:5px;color:#8995a7;font-size:11px;line-height:1.45}

.dc-trust-strip{padding:18px 0;background:#fff;border-bottom:1px solid var(--dc-line)}.dc-trust-grid{display:grid;grid-template-columns:1.2fr repeat(5,1fr);align-items:center}.dc-trust-title{font-size:12px;font-weight:850;line-height:1.4}.dc-trust-item{padding:8px 22px;border-left:1px solid var(--dc-line);color:#323844;font-size:12px;font-weight:850;text-align:center}
.dc-operating-strip{padding:56px 0;background:#fff;border-bottom:1px solid var(--dc-line)}.dc-operating-grid{display:grid;grid-template-columns:1.35fr repeat(4,1fr);gap:0}.dc-operating-lead{padding-right:44px}.dc-operating-lead h2{margin:10px 0 0;font-size:clamp(32px,3.5vw,48px);line-height:1.05;letter-spacing:-2.2px}.dc-operating-item{padding:0 28px;border-left:1px solid var(--dc-line)}.dc-operating-item b{color:var(--dc-red);font-size:11px}.dc-operating-item strong{display:block;margin-top:24px;font-size:15px}.dc-operating-item p{margin:8px 0 0;color:var(--dc-muted);font-size:12px;line-height:1.55}

.dc-section{padding:92px 0}.dc-section-soft{background:#f5f6f8}.dc-section-dark{background:#07090d}.dc-head{margin-bottom:40px}.dc-head h2{font-size:clamp(38px,4.3vw,58px);letter-spacing:-2.8px}.dc-head p{font-size:16px}.dc-feature-grid{gap:12px}.dc-feature{min-height:250px;border-radius:8px;padding:24px;box-shadow:none}.dc-feature:hover{transform:translateY(-3px);box-shadow:0 24px 60px rgba(8,12,18,.09)}.dc-feature-icon{border-radius:9px}.dc-feature h3{font-size:19px}.dc-link{margin-top:21px}
.dc-flow,.dc-product,.dc-split{gap:50px}.dc-step{border-radius:9px;background:#10151d}.dc-product-card{border-radius:12px;padding:14px;background:#111720;box-shadow:0 24px 80px rgba(8,12,18,.18)}.dc-product-card img{border-radius:8px}.dc-pill{border-radius:7px}.dc-outcomes{border-radius:10px}.dc-outcome{background:#0d121a}

.dc-solutions{padding:86px 0;background:#fff}.dc-solutions-grid{display:grid;grid-template-columns:1.05fr repeat(3,1fr);gap:12px}.dc-solutions-intro{padding:30px 32px 30px 0}.dc-solutions-intro h2{margin:14px 0 0;font-size:clamp(38px,4vw,56px);line-height:1;letter-spacing:-2.8px}.dc-solutions-intro p{color:var(--dc-muted);line-height:1.7}.dc-solution-card{position:relative;overflow:hidden;min-height:330px;padding:28px;border:1px solid var(--dc-line);border-radius:9px;background:#fff}.dc-solution-card:before{content:"";position:absolute;left:0;right:0;top:0;height:4px;background:#0b0f14}.dc-solution-card.is-red:before{background:var(--dc-red)}.dc-solution-card b{font-size:11px;color:var(--dc-red);letter-spacing:.13em;text-transform:uppercase}.dc-solution-card h3{margin:22px 0 0;font-size:25px;letter-spacing:-.9px}.dc-solution-card p{color:var(--dc-muted);font-size:13px;line-height:1.65}.dc-solution-card ul{display:grid;gap:10px;margin:22px 0 0;padding:0;list-style:none}.dc-solution-card li{display:flex;gap:9px;font-size:12px}.dc-solution-card li:before{content:"✓";color:var(--dc-red);font-weight:950}.dc-solution-card a{display:inline-flex;margin-top:24px;color:var(--dc-red);font-size:12px;font-weight:900}

.dc-people-section{padding:0;background:#080b10;color:#fff}.dc-people-grid{display:grid;grid-template-columns:1fr 1fr;min-height:590px}.dc-people-photo{position:relative;overflow:hidden;min-height:590px}.dc-people-photo img{width:100%;height:100%;object-fit:cover;object-position:center}.dc-people-photo:after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,transparent 55%,#080b10)}.dc-people-copy{align-self:center;padding:70px 0 70px 70px}.dc-people-copy h2{margin:14px 0 0;font-size:clamp(42px,4.8vw,66px);line-height:.98;letter-spacing:-3.1px}.dc-people-copy>p{max-width:600px;color:#aeb8c6;line-height:1.72}.dc-people-points{display:grid;gap:15px;margin-top:28px}.dc-people-point{display:grid;grid-template-columns:32px 1fr;gap:12px}.dc-people-point b{display:grid;place-items:center;width:28px;height:28px;border-radius:50%;background:var(--dc-red);font-size:11px}.dc-people-point strong{display:block;font-size:14px}.dc-people-point span{display:block;margin-top:4px;color:#8f9cad;font-size:12px;line-height:1.5}

.dc-packages{padding:96px 0;background:linear-gradient(180deg,#f4f6f9,#fff)}.dc-package-head{display:grid;grid-template-columns:1fr auto;gap:30px;align-items:end;margin-bottom:34px}.dc-package-head h2{margin:12px 0 0;font-size:clamp(40px,4.7vw,62px);line-height:1;letter-spacing:-3px}.dc-package-head p{max-width:700px;color:var(--dc-muted);line-height:1.7}.dc-package-note{max-width:310px;padding:16px 18px;border:1px solid #dce1e8;border-radius:8px;background:#fff;color:#4f5968;font-size:12px;line-height:1.55}.dc-package-note strong{display:block;color:#11151b;margin-bottom:4px}
.dc-package-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}.dc-package{position:relative;display:flex;flex-direction:column;min-height:520px;padding:28px;border:1px solid #dce1e8;border-radius:9px;background:#fff}.dc-package.is-featured{border-color:var(--dc-red);box-shadow:0 24px 70px rgba(241,18,52,.13)}.dc-package.is-dark{background:#0a0d12;color:#fff;border-color:#0a0d12}.dc-package-badge{position:absolute;top:-12px;left:50%;transform:translateX(-50%);padding:6px 12px;border-radius:20px;background:var(--dc-red);color:#fff;font-size:10px;font-weight:900;white-space:nowrap}.dc-package small{color:var(--dc-red);font-size:10px;font-weight:950;letter-spacing:.14em;text-transform:uppercase}.dc-package h3{margin:14px 0 0;font-size:27px;letter-spacing:-1px}.dc-package-sub{min-height:42px;margin:7px 0 0;color:#697487;font-size:12px;line-height:1.5}.dc-package.is-dark .dc-package-sub{color:#9ba6b5}.dc-package-price{margin-top:24px;padding:18px 0;border-top:1px solid #e2e5ea;border-bottom:1px solid #e2e5ea}.dc-package.is-dark .dc-package-price{border-color:#28313d}.dc-package-price strong{display:block;font-size:22px}.dc-package-price span{display:block;margin-top:5px;color:#707b8c;font-size:11px}.dc-package.is-dark .dc-package-price span{color:#8f9bab}.dc-package ul{display:grid;gap:12px;margin:24px 0 28px;padding:0;list-style:none}.dc-package li{display:flex;gap:10px;font-size:12px;line-height:1.45}.dc-package li:before{content:"✓";color:var(--dc-red);font-weight:950}.dc-package .dc-btn{width:100%;margin-top:auto}
.dc-included-row{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-top:18px}.dc-included{display:flex;gap:10px;align-items:center;padding:15px 17px;border:1px solid #e1e5ea;border-radius:8px;background:#fff;font-size:11px;font-weight:850}.dc-included b{display:grid;place-items:center;width:25px;height:25px;border-radius:50%;background:#fff0f2;color:var(--dc-red)}

.dc-support-proof{padding:78px 0;background:#fff}.dc-support-grid{display:grid;grid-template-columns:.82fr 1.18fr;gap:58px;align-items:center}.dc-support-image{position:relative;overflow:hidden;min-height:480px;border-radius:10px;background:#111720;box-shadow:var(--dc-shadow)}.dc-support-image img{width:100%;height:100%;min-height:480px;object-fit:cover}.dc-support-image:after{content:"";position:absolute;inset:0;background:linear-gradient(0deg,rgba(8,11,16,.35),transparent 55%)}.dc-support-copy h2{margin:14px 0 0;font-size:clamp(42px,4.8vw,64px);line-height:1;letter-spacing:-3px}.dc-support-copy>p{color:var(--dc-muted);line-height:1.75}.dc-support-grid-list{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:28px}.dc-support-card{padding:19px;border:1px solid var(--dc-line);border-radius:8px}.dc-support-card strong{display:block;font-size:14px}.dc-support-card span{display:block;margin-top:6px;color:var(--dc-muted);font-size:12px;line-height:1.5}

.dc-resource-section{padding:82px 0;background:#f5f6f8}.dc-resource-head{display:flex;justify-content:space-between;gap:28px;align-items:end;margin-bottom:28px}.dc-resource-head h2{margin:12px 0 0;font-size:clamp(38px,4vw,54px);line-height:1;letter-spacing:-2.5px}.dc-resource-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}.dc-resource-card{display:flex;flex-direction:column;min-height:260px;padding:24px;border:1px solid #dce1e8;border-radius:8px;background:#fff}.dc-resource-card span{color:var(--dc-red);font-size:10px;font-weight:950;letter-spacing:.14em;text-transform:uppercase}.dc-resource-card h3{margin:18px 0 0;font-size:20px;line-height:1.2}.dc-resource-card p{color:var(--dc-muted);font-size:12px;line-height:1.6}.dc-resource-card a{margin-top:auto;color:var(--dc-red);font-size:12px;font-weight:900}

.dc-quote-grid{grid-template-columns:1.1fr .9fr}.dc-quote,.dc-score{border-radius:9px}.dc-cta{padding:0;background:#fff}.dc-cta-box{border-radius:0;padding:56px 64px;background:linear-gradient(130deg,#06080c,#111722)}.dc-footer{padding-top:62px;background:#05070a}.dc-footer-grid{gap:36px}.dc-footer-bottom{margin-top:45px}

@media(max-width:1160px){
  .dc-enterprise-visual{min-height:500px}.dc-dashboard-frame{width:68%}
  .dc-hero-values{grid-template-columns:repeat(2,1fr)}.dc-hero-value:nth-child(2){border-right:0}.dc-hero-value:nth-child(-n+2){border-bottom:1px solid rgba(255,255,255,.12)}
  .dc-operating-grid{grid-template-columns:1fr 1fr 1fr}.dc-operating-lead{grid-column:1/-1;padding:0 0 34px}.dc-operating-item:nth-child(5){display:none}
  .dc-solutions-grid{grid-template-columns:1fr 1fr}.dc-solutions-intro{grid-column:1/-1;padding-right:0}
  .dc-package-grid{grid-template-columns:1fr 1fr}.dc-resource-grid{grid-template-columns:1fr 1fr}
}
@media(max-width:900px){
  .dc-header-inner{height:72px}.dc-nav{display:none}.dc-menu{display:block}.dc-mobile-panel{top:72px}
  .dc-hero-enterprise{padding-top:48px}.dc-hero-enterprise-grid{grid-template-columns:1fr;min-height:auto}.dc-enterprise-visual{min-height:520px;margin-top:12px}.dc-enterprise-photo{inset:0 15% 0 0}.dc-dashboard-frame{width:65%}
  .dc-trust-grid{grid-template-columns:1fr 1fr 1fr}.dc-trust-title{grid-column:1/-1;padding-bottom:13px}.dc-trust-item{padding:12px;border-left:0;border-top:1px solid var(--dc-line)}
  .dc-people-grid,.dc-support-grid{grid-template-columns:1fr}.dc-people-photo{min-height:440px}.dc-people-photo:after{background:linear-gradient(0deg,#080b10,transparent 45%)}.dc-people-copy{padding:52px 0 70px}.dc-support-image{order:2}
  .dc-package-head{grid-template-columns:1fr}.dc-package-note{max-width:none}.dc-included-row{grid-template-columns:1fr 1fr}
}
@media(max-width:680px){
  .dc-wrap{width:min(100% - 28px,1320px)}.dc-brand i{display:none}.dc-brand span{font-size:18px}.dc-actions>a:first-child{display:none}.dc-btn{min-height:46px;padding:0 16px}
  .dc-hero-enterprise h1{font-size:clamp(48px,14vw,62px);letter-spacing:-3px}.dc-hero-enterprise .dc-lead{font-size:15px}.dc-hero-actions{flex-direction:column}.dc-hero-actions .dc-btn{width:100%}.dc-hero-human-proof{align-items:flex-start}
  .dc-enterprise-visual{min-height:470px}.dc-enterprise-photo{inset:0 5% 90px 0}.dc-dashboard-frame{top:auto;bottom:0;width:88%;transform:none}.dc-live-chip{display:none}
  .dc-hero-values{grid-template-columns:1fr}.dc-hero-value{border-right:0;border-bottom:1px solid rgba(255,255,255,.12)!important}.dc-hero-value:last-child{border-bottom:0!important}
  .dc-trust-grid{grid-template-columns:1fr 1fr}.dc-operating-grid{grid-template-columns:1fr}.dc-operating-item{padding:24px 0;border-left:0;border-top:1px solid var(--dc-line)}.dc-operating-item:nth-child(5){display:block}
  .dc-section,.dc-solutions,.dc-packages,.dc-support-proof,.dc-resource-section{padding:72px 0}.dc-feature-grid,.dc-solutions-grid,.dc-package-grid,.dc-resource-grid,.dc-support-grid-list,.dc-included-row{grid-template-columns:1fr}.dc-solutions-intro{grid-column:auto}.dc-solution-card{min-height:auto}.dc-package{min-height:auto}.dc-package .dc-btn{margin-top:12px}
  .dc-people-photo{min-height:360px}.dc-people-copy h2,.dc-support-copy h2,.dc-package-head h2{letter-spacing:-2.2px}.dc-people-copy{padding-top:40px}
  .dc-resource-head{align-items:flex-start;flex-direction:column}.dc-cta-box{grid-template-columns:1fr;padding:38px 24px}.dc-footer-grid{grid-template-columns:1fr 1fr}.dc-footer-grid>div:first-child{grid-column:1/-1}
}
@media(prefers-reduced-motion:reduce){*{scroll-behavior:auto!important;transition:none!important}}
</style>`;

const HERO_BLOCK = `<section class="dc-hero-enterprise">
  <div class="dc-wrap dc-hero-enterprise-grid">
    <div class="dc-hero-enterprise-copy">
      <span class="dc-kicker">Dealership operating system</span>
      <h1>Run your dealership.<br><span>Grow your business.</span></h1>
      <p class="dc-lead">DealershipCore connects leads, stock, customers, sales, finance, tasks and reporting in one secure operating system built around the real work of South African dealership teams.</p>
      <div class="dc-hero-actions">
        <a class="dc-btn dc-btn-red" href="/book-demo/">Book a demo</a>
        <a class="dc-btn dc-btn-outline" href="#platform">Explore the platform</a>
      </div>
      <div class="dc-hero-human-proof">
        <div class="dc-proof-faces"><span class="dc-proof-face">SA</span><span class="dc-proof-face">CRM</span><span class="dc-proof-face">DMS</span></div>
        <div><strong>Built for dealership people, not generic software users.</strong> Sales, buying, finance, marketing and management stay connected.</div>
      </div>
    </div>
    <div class="dc-enterprise-visual" aria-label="Dealership team using DealershipCore">
      <div class="dc-enterprise-photo"><img src="${HERO_PHOTO}" alt="Dealership consultant helping a customer in a modern vehicle showroom" loading="eager" fetchpriority="high"></div>
      <div class="dc-dashboard-frame"><img src="/assets/dealershipcore-product-devices.webp" alt="DealershipCore dashboard displayed on desktop and mobile"></div>
      <div class="dc-live-chip"><i></i><div><strong>One connected operating view</strong><span>Leads, stock, CRM, deals, finance and reporting</span></div></div>
    </div>
  </div>
  <div class="dc-wrap dc-hero-values">
    <div class="dc-hero-value"><span class="dc-value-icon">◎</span><div><strong>Built for dealership teams</strong><span>Workflows shaped around the motor trade.</span></div></div>
    <div class="dc-hero-value"><span class="dc-value-icon">◫</span><div><strong>One operating view</strong><span>Sales, stock, finance and reporting remain visible.</span></div></div>
    <div class="dc-hero-value"><span class="dc-value-icon">✓</span><div><strong>Clear accountability</strong><span>Every opportunity has an owner and next action.</span></div></div>
    <div class="dc-hero-value"><span class="dc-value-icon">ZA</span><div><strong>South African focus</strong><span>Local dealership journeys and human support.</span></div></div>
  </div>
</section>
<section class="dc-trust-strip"><div class="dc-wrap dc-trust-grid"><div class="dc-trust-title">Designed for modern dealership operations across South Africa</div><div class="dc-trust-item">Independent dealers</div><div class="dc-trust-item">Dealer groups</div><div class="dc-trust-item">Used-car teams</div><div class="dc-trust-item">F&amp;I teams</div><div class="dc-trust-item">Management teams</div></div></section>
<section class="dc-operating-strip"><div class="dc-wrap dc-operating-grid"><div class="dc-operating-lead"><span class="dc-kicker">One connected operating view</span><h2>See every opportunity, every next action and every dealership priority.</h2></div><div class="dc-operating-item"><b>01</b><strong>One platform</strong><p>Replace disconnected tools, inboxes and spreadsheets.</p></div><div class="dc-operating-item"><b>02</b><strong>Built for dealers</strong><p>Daily workflows designed around dealership reality.</p></div><div class="dc-operating-item"><b>03</b><strong>Clear accountability</strong><p>Every lead, task and deal has a responsible owner.</p></div><div class="dc-operating-item"><b>04</b><strong>Local focus</strong><p>South African dealership journeys and support.</p></div></div></section>`;

const SOLUTIONS_SECTION = `<section class="dc-solutions" id="solutions"><div class="dc-wrap dc-solutions-grid">
  <div class="dc-solutions-intro"><span class="dc-kicker">Dealer solutions</span><h2>Built for the way your dealership operates.</h2><p>Choose the operating model that fits your team today. DealershipCore can grow from a focused single-branch setup into a connected dealer-group platform.</p><a class="dc-btn dc-btn-dark" href="/book-demo/">Discuss your dealership</a></div>
  <article class="dc-solution-card is-red"><b>Independent dealers</b><h3>Control without unnecessary complexity.</h3><p>Bring enquiries, stock, customer records, tasks and sales activity into one practical workspace.</p><ul><li>Single operating view</li><li>Fast setup and adoption</li><li>Clear owner visibility</li></ul><a href="/solutions/independent-dealers/">Explore solution →</a></article>
  <article class="dc-solution-card"><b>Growing dealerships</b><h3>Build repeatable process as the team grows.</h3><p>Standardise lead response, stock attention, finance follow-up and management reporting.</p><ul><li>Team roles and ownership</li><li>Marketing and finance workflows</li><li>Performance reporting</li></ul><a href="/solutions/used-car-dealers/">Explore solution →</a></article>
  <article class="dc-solution-card"><b>Dealer groups</b><h3>Branch-level action with group-level visibility.</h3><p>Connect multiple locations while keeping each team responsible for its own work and outcomes.</p><ul><li>Multi-branch structure</li><li>Roles and permissions</li><li>Group reporting</li></ul><a href="/solutions/dealer-groups/">Explore solution →</a></article>
</div></section>`;

const PEOPLE_SECTION = `<section class="dc-people-section" id="dealers"><div class="dc-wrap dc-people-grid">
  <div class="dc-people-photo"><img src="${TEAM_PHOTO}" alt="Dealership sales professional speaking with a customer in a showroom" loading="lazy"></div>
  <div class="dc-people-copy"><span class="dc-kicker">Software should improve real dealership work</span><h2>From the showroom and buying desk to management reporting.</h2><p>DealershipCore is designed around the people responsible for customer experience, stock movement and commercial performance—not around generic CRM terminology.</p><div class="dc-people-points">
    <div class="dc-people-point"><b>01</b><div><strong>Sales teams see the next action</strong><span>Leads, vehicle context, conversations, notes and deadlines stay together.</span></div></div>
    <div class="dc-people-point"><b>02</b><div><strong>Managers see what needs attention</strong><span>Slow response, unassigned opportunities and stock blockers become visible.</span></div></div>
    <div class="dc-people-point"><b>03</b><div><strong>Owners see the operating picture</strong><span>Source, pipeline, stock and branch activity connect to one reporting view.</span></div></div>
  </div><div class="dc-hero-actions"><a class="dc-btn dc-btn-red" href="/book-demo/">See it with your workflow</a></div></div>
</div></section>`;

const PACKAGES_SECTION = `<section class="dc-packages" id="packages"><div class="dc-wrap">
  <div class="dc-package-head"><div><span class="dc-kicker">Packages</span><h2>Choose the DealershipCore package that fits your operation.</h2><p>Start with the workflows your dealership needs now. Add users, branches, integrations and advanced operating controls as the business grows.</p></div><div class="dc-package-note"><strong>Pricing is tailored to your dealership.</strong> Final pricing depends on users, branches, integrations, data migration and implementation scope.</div></div>
  <div class="dc-package-grid">
    <article class="dc-package"><small>Single-branch foundation</small><h3>Core</h3><p class="dc-package-sub">For independent dealerships that need one clear system for daily sales operations.</p><div class="dc-package-price"><strong>Request pricing</strong><span>Configured around your team and workflow.</span></div><ul><li>Lead management and assignment</li><li>Customer CRM</li><li>Basic stock management</li><li>Tasks and follow-up</li><li>Standard reporting</li><li>Onboarding support</li></ul><a class="dc-btn dc-btn-outline" href="/book-demo/">Discuss Core</a></article>
    <article class="dc-package is-featured"><span class="dc-package-badge">Most popular</span><small>Growth operating system</small><h3>Professional</h3><p class="dc-package-sub">For growing dealerships that need stronger process, visibility and accountability.</p><div class="dc-package-price"><strong>Request pricing</strong><span>Built around users, stock volume and workflow needs.</span></div><ul><li>Everything in Core</li><li>Sales and deal pipeline</li><li>Marketing workflow</li><li>Finance enquiry workflow</li><li>Advanced reports and insights</li><li>Priority implementation support</li></ul><a class="dc-btn dc-btn-red" href="/book-demo/">Discuss Professional</a></article>
    <article class="dc-package"><small>Multi-branch control</small><h3>Dealer Group</h3><p class="dc-package-sub">For dealer groups that need branch accountability and a connected management view.</p><div class="dc-package-price"><strong>Request pricing</strong><span>Structured by branches, users and reporting scope.</span></div><ul><li>Everything in Professional</li><li>Multi-branch management</li><li>Group and branch reporting</li><li>User roles and permissions</li><li>Integration access</li><li>Implementation success plan</li></ul><a class="dc-btn dc-btn-outline" href="/book-demo/">Discuss Dealer Group</a></article>
    <article class="dc-package is-dark"><small>Tailored operating platform</small><h3>Enterprise</h3><p class="dc-package-sub">For larger dealer networks requiring custom architecture and implementation.</p><div class="dc-package-price"><strong>Custom scope</strong><span>Designed around your operating model.</span></div><ul><li>Everything in Dealer Group</li><li>Custom integrations</li><li>Advanced permissions</li><li>Data migration planning</li><li>Tailored onboarding</li><li>Dedicated implementation contact</li></ul><a class="dc-btn dc-btn-red" href="/contact/">Contact sales</a></article>
  </div>
  <div class="dc-included-row"><div class="dc-included"><b>✓</b>Responsive desktop and mobile access</div><div class="dc-included"><b>✓</b>Secure cloud delivery</div><div class="dc-included"><b>✓</b>South African onboarding support</div><div class="dc-included"><b>✓</b>Clear implementation scope</div></div>
</div></section>`;

const SUPPORT_SECTION = `<section class="dc-support-proof"><div class="dc-wrap dc-support-grid">
  <div class="dc-support-copy"><span class="dc-kicker">Human implementation</span><h2>Technology your dealership team can actually adopt.</h2><p>A strong platform is only useful when the people doing the work understand it. DealershipCore combines a clear product structure with practical onboarding, responsible data states and a visible support path.</p><div class="dc-support-grid-list"><div class="dc-support-card"><strong>Workflow discovery</strong><span>Map your current lead, stock, sales and reporting process before setup.</span></div><div class="dc-support-card"><strong>Role-based onboarding</strong><span>Show each team what matters to their daily responsibilities.</span></div><div class="dc-support-card"><strong>Responsible migration</strong><span>Plan data and integrations without pretending disconnected systems are already live.</span></div><div class="dc-support-card"><strong>Clear support path</strong><span>Give the dealership a human route for questions, changes and growth.</span></div></div></div>
  <div class="dc-support-image"><img src="${HERO_PHOTO}" alt="Dealership customer and staff working together in a modern showroom" loading="lazy"></div>
</div></section>`;

const RESOURCE_SECTION = `<section class="dc-resource-section"><div class="dc-wrap"><div class="dc-resource-head"><div><span class="dc-kicker">Dealership management knowledge centre</span><h2>Practical guides for the systems behind dealership growth.</h2></div><a class="dc-btn dc-btn-outline" href="/resources/guides/">Explore all guides</a></div><div class="dc-resource-grid">
  <article class="dc-resource-card"><span>Stock operations</span><h3>Choosing a better stock management system</h3><p>What to evaluate before moving dealership stock into a connected operating workflow.</p><a href="/resources/guides/">Read guide →</a></article>
  <article class="dc-resource-card"><span>Lead management</span><h3>How to improve dealership lead response</h3><p>Use routing, ownership, deadlines and review to stop enquiries disappearing.</p><a href="/resources/guides/">Read guide →</a></article>
  <article class="dc-resource-card"><span>Management</span><h3>Dealership software for South African teams</h3><p>Understand how CRM, stock, sales, finance and reporting should fit together.</p><a href="/resources/guides/">Read guide →</a></article>
  <article class="dc-resource-card"><span>Dealer groups</span><h3>Creating one operating view across branches</h3><p>Balance branch-level accountability with clear group-level management visibility.</p><a href="/resources/guides/">Read guide →</a></article>
</div></div></section>`;

const MOBILE_PANEL = `<nav class="dc-mobile-panel" id="dc-mobile-panel" aria-label="Mobile navigation"><a href="#platform">Platform <span>→</span></a><a href="#features">Features <span>→</span></a><a href="#solutions">Dealer solutions <span>→</span></a><a href="/ecosystem/">Tools <span>→</span></a><a href="#packages">Packages <span>→</span></a><a href="/resources/">Resources <span>→</span></a><a href="/book-demo/">Book a demo</a></nav>`;

const INTERACTION_SCRIPT = `<script id="dc-enterprise-interactions">
(() => {
  const button = document.querySelector('.dc-menu');
  const panel = document.getElementById('dc-mobile-panel');
  if (button && panel) {
    const close = () => { panel.classList.remove('is-open'); button.setAttribute('aria-expanded', 'false'); };
    button.setAttribute('aria-controls', 'dc-mobile-panel');
    button.setAttribute('aria-expanded', 'false');
    button.addEventListener('click', () => {
      const open = !panel.classList.contains('is-open');
      panel.classList.toggle('is-open', open);
      button.setAttribute('aria-expanded', String(open));
    });
    panel.querySelectorAll('a').forEach(link => link.addEventListener('click', close));
    document.addEventListener('keydown', event => { if (event.key === 'Escape') close(); });
  }
})();
</script>`;

function upgradeHome(html) {
  if (html.includes('id="dc-enterprise-home-v2"')) return html;

  let output = html.replace('</head>', `${ENTERPRISE_STYLE}</head>`);
  output = output.replace('</header>', `</header>${MOBILE_PANEL}`);
  output = output.replace('<a href="/ecosystem/">Tools</a><a href="/resources/">Resources</a>', '<a href="/ecosystem/">Tools</a><a href="#packages">Packages</a><a href="/resources/">Resources</a>');
  output = output.replace(/<section class="dc-hero">[\s\S]*?<\/section>\s*<section class="dc-stats">[\s\S]*?<\/section>/, HERO_BLOCK);
  output = output.replace('<section class="dc-section dc-section-dark"><div class="dc-wrap dc-flow">', `${SOLUTIONS_SECTION}<section class="dc-section dc-section-dark"><div class="dc-wrap dc-flow">`);
  output = output.replace(/<section id="dealers" class="dc-section">[\s\S]*?<\/section>\s*<section class="dc-section dc-section-soft">/, `${PEOPLE_SECTION}<section class="dc-section dc-section-soft">`);
  output = output.replace('<section class="dc-section"><div class="dc-wrap"><div class="dc-head"><span class="dc-kicker">Frequently asked questions</span>', `${PACKAGES_SECTION}${SUPPORT_SECTION}${RESOURCE_SECTION}<section class="dc-section"><div class="dc-wrap"><div class="dc-head"><span class="dc-kicker">Frequently asked questions</span>`);
  output = output.replace('</body>', `${INTERACTION_SCRIPT}</body>`);
  return output;
}

export default {
  async fetch(request, env) {
    const response = await site.fetch(request, env);
    const type = (response.headers.get('content-type') || '').toLowerCase();
    const url = new URL(request.url);
    if (!type.includes('text/html') || url.pathname !== '/') return response;

    const html = upgradeHome(await response.text());
    const headers = new Headers(response.headers);
    for (const name of ['content-length', 'content-encoding', 'etag']) headers.delete(name);
    headers.set('x-site-version', RELEASE);
    headers.set('x-dealershipcore-enterprise-home', 'true');

    return new Response(request.method === 'HEAD' ? null : html, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};
