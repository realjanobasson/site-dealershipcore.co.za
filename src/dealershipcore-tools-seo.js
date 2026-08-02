import site from './dealershipcore-final.js';

const RELEASE = 'dealershipcore-tools-seo-2026-08-02-v1';
const BASE = 'https://dealershipcore.co.za';

const LOGO = `<svg viewBox="0 0 56 44" aria-hidden="true"><defs><linearGradient id="dcx-red" x1="4" y1="4" x2="50" y2="40"><stop stop-color="#ff1935"/><stop offset="1" stop-color="#c9001f"/></linearGradient><mask id="dcx-cut"><rect width="56" height="44" fill="#fff"/><path d="M18 11l11 11-11 11h-8l11-11-11-11h8Z" fill="#000"/></mask></defs><path d="M18 3h15l20 19-20 19H18l20-19L18 3Z" fill="url(#dcx-red)" mask="url(#dcx-cut)"/><path d="M3 11l14 11L3 33V11Z" fill="url(#dcx-red)"/></svg>`;

const TOOLS = [
  {
    slug: 'vehicle-valuation',
    name: 'VehicleValuation',
    navDescription: 'Public vehicle valuation and seller-intent journey.',
    label: 'Public valuation tool',
    title: 'Vehicle Valuation Tool for South Africa',
    meta: 'Give vehicle owners a clear South African valuation journey while capturing structured seller and trade-in intent for dealership follow-up.',
    headline: 'Turn vehicle-value questions into structured dealership opportunities.',
    intro: 'VehicleValuation guides consumers through vehicle identity, mileage, condition and ownership context, then creates a clear next step for the driver and the dealership.',
    domain: 'https://vehiclevaluation.co.za',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1800&q=86',
    bullets: ['Guided consumer valuation journey', 'Seller and trade-in intent capture', 'Structured vehicle details for follow-up', 'Connected routing into DealershipCore'],
    faq: [
      ['Is VehicleValuation a guaranteed purchase offer?', 'No. It provides an indicative valuation journey and a clear path to human review where required.'],
      ['Can dealerships use the valuation journey?', 'Yes. Dealerships can use a branded journey and route structured enquiries into DealershipCore.'],
      ['What vehicle details can be collected?', 'The journey can capture year, make, model, variant, mileage, condition, service history, ownership context and customer intent.'],
    ],
  },
  {
    slug: 'car-valuation',
    name: 'CarValuation',
    navDescription: 'Focused search entry for car valuation intent.',
    label: 'Search demand channel',
    title: 'Car Valuation Lead Funnel for South African Dealers',
    meta: 'Capture high-intent car valuation searches and move qualified consumers into a structured dealership valuation and follow-up journey.',
    headline: 'Meet car owners at the moment they begin researching value.',
    intro: 'CarValuation is designed around high-intent valuation search behaviour, helping dealerships turn organic discovery into structured vehicle and customer information.',
    domain: 'https://carvaluation.co.za',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1800&q=86',
    bullets: ['Search-focused valuation landing pages', 'Clear consumer education', 'Strong internal links to the valuation journey', 'Lead source recorded in DealershipCore'],
    faq: [
      ['How is CarValuation different from VehicleValuation?', 'CarValuation focuses on search intent and education, while VehicleValuation is the main guided public valuation journey.'],
      ['Does it create duplicate leads?', 'The intended workflow uses source-aware routing and duplicate controls inside DealershipCore.'],
      ['Can the content target local searches?', 'Yes. Pages can be structured around South African valuation questions, vehicle types and location-relevant search intent.'],
    ],
  },
  {
    slug: 'value-my-cars',
    name: 'ValueMyCars',
    navDescription: 'Consumer-focused valuation campaign.',
    label: 'Campaign valuation journey',
    title: 'Value My Car Campaign Tool for Dealerships',
    meta: 'Launch a clear consumer valuation campaign that captures vehicle details, seller intent and contact information for dealership acquisition teams.',
    headline: 'A simple campaign journey built around one customer action: value my car.',
    intro: 'ValueMyCars gives dealerships a focused campaign destination for paid media, social content, QR campaigns and direct seller-acquisition outreach.',
    domain: 'https://valuemycars.co.za',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1800&q=86',
    bullets: ['Campaign-specific landing experience', 'Mobile-first seller journey', 'Source and campaign attribution', 'Dealership follow-up through DealershipCore'],
    faq: [
      ['What campaigns can use ValueMyCars?', 'The journey can support paid search, social media, email, QR, outdoor and dealership website campaigns.'],
      ['Can each campaign be tracked separately?', 'Yes. Source and campaign values can be attached to the resulting DealershipCore lead.'],
      ['Can the journey be dealership branded?', 'A dealership-specific version can use the dealer brand, consent wording and routing rules.'],
    ],
  },
  {
    slug: 'vehicle-valuation-engine',
    name: 'VehicleValuationEngine',
    navDescription: 'South African valuation engine and integrations.',
    label: 'Valuation technology layer',
    title: 'Vehicle Valuation Engine and Integration Layer',
    meta: 'Power dealership valuation journeys with structured vehicle inputs, market context, review workflows and integration-ready outputs.',
    headline: 'The technology layer behind connected vehicle valuation journeys.',
    intro: 'VehicleValuationEngine is positioned for dealerships and automotive platforms that need a reusable valuation workflow, technical integration and consistent data structure.',
    domain: 'https://vehiclevaluationengine.co.za',
    image: 'https://images.unsplash.com/photo-1551830820-330a71b99659?auto=format&fit=crop&w=1800&q=86',
    bullets: ['Reusable valuation workflow', 'Structured inputs and outputs', 'Dealer review and exception handling', 'Integration with websites and DealershipCore'],
    faq: [
      ['Is the engine a public consumer website?', 'No. It is the technical and product layer that can support consumer-facing and dealership-branded valuation journeys.'],
      ['Can it connect to an existing dealership website?', 'Yes, subject to the website platform and integration method available.'],
      ['Does every estimate require human review?', 'The workflow can define when an indicative result is sufficient and when dealership review is required.'],
    ],
  },
  {
    slug: 'finance-your-cars',
    name: 'FinanceYourCars',
    navDescription: 'Finance journey after valuation or vehicle discovery.',
    label: 'Vehicle finance funnel',
    title: 'Vehicle Finance Lead Funnel for South African Dealerships',
    meta: 'Continue customer intent from vehicle discovery or valuation into a structured finance enquiry routed to the correct dealership team.',
    headline: 'Keep customer momentum moving from vehicle interest into finance action.',
    intro: 'FinanceYourCars creates a focused next step after valuation or stock discovery, collecting the context a finance team needs without forcing customers through an unclear generic form.',
    domain: 'https://financeyourcars.co.za',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=86',
    bullets: ['Finance-intent qualification', 'Vehicle and dealership context retained', 'Branch and finance-team routing', 'Follow-up and outcome tracking'],
    faq: [
      ['Does the tool approve vehicle finance?', 'No. It captures and structures an enquiry for the relevant dealership or finance process.'],
      ['Can it continue from a valuation result?', 'Yes. Vehicle and customer context can carry forward into the finance journey.'],
      ['Can finance managers see the source?', 'Yes. Source, campaign and originating journey can be attached to the DealershipCore opportunity.'],
    ],
  },
  {
    slug: 'dealership-software',
    name: 'DealershipSoftware',
    navDescription: 'SEO and education entry point for dealership software.',
    label: 'Dealer education channel',
    title: 'Dealership Software Guide and Buyer Education',
    meta: 'Help dealership owners compare software categories, understand modern workflows and discover the right DealershipCore implementation path.',
    headline: 'Help dealership owners understand the system they actually need.',
    intro: 'DealershipSoftware is the education and search channel for owners researching CRM, lead management, stock workflows, websites, reporting and dealership operating systems.',
    domain: 'https://dealershipsoftware.co.za',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1800&q=86',
    bullets: ['Dealership software education', 'Feature and workflow comparisons', 'Implementation guidance', 'Qualified demo demand for DealershipCore'],
    faq: [
      ['Is DealershipSoftware a separate operating platform?', 'No. It is an education and search channel that guides suitable dealership enquiries toward DealershipCore.'],
      ['What topics should it cover?', 'Lead management, stock, CRM, dealership websites, valuation tools, finance workflows, reporting, integrations and implementation.'],
      ['Will it compare different approaches?', 'Yes. Useful comparison content should explain trade-offs clearly without unsupported claims.'],
    ],
  },
];

const toolByPath = new Map(TOOLS.map(tool => [`/tools/${tool.slug}`, tool]));
const toolsMarkup = TOOLS.map((tool, index) => `<a class="dcx-tool-link" href="/tools/${tool.slug}/"><span class="dcx-tool-icon">${String(index + 1).padStart(2, '0')}</span><span><strong>${tool.name}</strong><small>${tool.navDescription}</small></span><b aria-hidden="true">→</b></a>`).join('');

const HEADER = `<header class="dcx-site-header"><div class="dcx-header-inner"><a class="dcx-brand" href="/" aria-label="DealershipCore home">${LOGO}<span class="dcx-brand-rule"></span><span class="dcx-brand-name">DealershipCore</span></a><nav class="dcx-desktop-nav" aria-label="Primary navigation"><a href="/product/">Platform</a><a href="/product/features/">Features</a><a href="/solutions/independent-dealers/">Dealer solutions</a><div class="dcx-tools-nav"><button class="dcx-tools-trigger" type="button" aria-expanded="false" aria-controls="dcx-tools-menu">Tools<span aria-hidden="true"></span></button><div class="dcx-tools-menu" id="dcx-tools-menu"><div class="dcx-tools-menu-head"><div><span>DealershipCore tools</span><strong>Focused journeys that feed one operating system.</strong></div><a href="/tools/">View all tools →</a></div><div class="dcx-tools-grid">${toolsMarkup}</div></div></div><a href="/resources/blog/">Resources</a></nav><div class="dcx-header-actions"><a class="dcx-demo-link" href="/book-demo/">Book a demo</a><a class="dcx-audit-button" href="/free-dealership-audit/">Free dealership audit</a><button class="dcx-menu-button" type="button" aria-label="Open navigation" aria-expanded="false"><span></span></button></div></div></header><nav class="dcx-mobile-nav" aria-label="Mobile navigation"><a href="/product/">Platform</a><a href="/product/features/">Features</a><a href="/solutions/independent-dealers/">Dealer solutions</a><button class="dcx-mobile-tools" type="button" aria-expanded="false">Tools<span>+</span></button><div class="dcx-mobile-tool-list">${TOOLS.map(tool => `<a href="/tools/${tool.slug}/"><strong>${tool.name}</strong><small>${tool.navDescription}</small></a>`).join('')}</div><a href="/resources/blog/">Resources</a><a href="/book-demo/">Book a demo</a><a class="dcx-mobile-audit" href="/free-dealership-audit/">Free dealership audit</a></nav>`;

const SHARED_STYLE = `<style id="dcx-tools-seo-style">
:root{--dcx-ink:#071426;--dcx-muted:#607188;--dcx-red:#ef1532;--dcx-red-dark:#c9001f;--dcx-red-soft:#fff0f2;--dcx-line:#dbe3ec;--dcx-soft:#f4f7fb;--dcx-navy:#06101e;--dcx-surface:#fff;--dcx-shadow:0 24px 70px rgba(7,20,38,.13)}
.dcx-site-header{position:sticky;top:0;z-index:300;border-top:4px solid var(--dcx-red);border-bottom:1px solid var(--dcx-line);background:rgba(255,255,255,.98);box-shadow:0 12px 38px rgba(7,20,38,.07);backdrop-filter:blur(18px)}
.dcx-header-inner{width:min(1320px,calc(100% - 48px));min-height:84px;margin:auto;display:flex;align-items:center;justify-content:space-between;gap:28px}
.dcx-brand{display:flex;align-items:center;gap:12px;min-width:max-content;color:var(--dcx-ink)}.dcx-brand svg{width:45px;height:36px;filter:drop-shadow(0 8px 14px rgba(239,21,50,.12))}.dcx-brand-rule{width:1px;height:34px;background:#ccd5df}.dcx-brand-name{font-size:22px;font-weight:720;letter-spacing:-.8px}
.dcx-desktop-nav{display:flex;align-items:center;gap:30px;color:#273950;font-size:14px;font-weight:720}.dcx-desktop-nav>a,.dcx-tools-trigger{position:relative;display:flex;align-items:center;min-height:48px;padding:0;border:0;background:transparent;color:inherit;font:inherit;cursor:pointer}.dcx-desktop-nav>a:after,.dcx-tools-trigger:after{content:"";position:absolute;left:0;right:100%;bottom:7px;height:2px;background:var(--dcx-red);transition:right .18s ease}.dcx-desktop-nav>a:hover:after,.dcx-desktop-nav>a:focus-visible:after,.dcx-tools-nav:hover .dcx-tools-trigger:after,.dcx-tools-nav:focus-within .dcx-tools-trigger:after{right:0}.dcx-tools-trigger>span{width:8px;height:8px;margin-left:8px;border-right:1.5px solid currentColor;border-bottom:1.5px solid currentColor;transform:rotate(45deg) translateY(-2px);transition:transform .18s}.dcx-tools-nav{position:relative}.dcx-tools-nav:hover .dcx-tools-trigger>span,.dcx-tools-nav:focus-within .dcx-tools-trigger>span,.dcx-tools-nav.is-open .dcx-tools-trigger>span{transform:rotate(225deg) translate(-2px,-1px)}
.dcx-tools-menu{visibility:hidden;opacity:0;pointer-events:none;position:absolute;top:60px;left:50%;width:min(820px,calc(100vw - 48px));transform:translate(-50%,10px);padding:22px;border:1px solid var(--dcx-line);border-radius:18px;background:#fff;box-shadow:0 30px 80px rgba(7,20,38,.18);transition:opacity .18s ease,transform .18s ease,visibility .18s;z-index:400}.dcx-tools-nav:hover .dcx-tools-menu,.dcx-tools-nav:focus-within .dcx-tools-menu,.dcx-tools-nav.is-open .dcx-tools-menu{visibility:visible;opacity:1;pointer-events:auto;transform:translate(-50%,0)}
.dcx-tools-menu-head{display:flex;align-items:end;justify-content:space-between;gap:24px;padding:0 4px 18px;border-bottom:1px solid #e8edf3}.dcx-tools-menu-head span{display:block;color:var(--dcx-red);font-size:10px;font-weight:950;letter-spacing:.14em;text-transform:uppercase}.dcx-tools-menu-head strong{display:block;margin-top:6px;color:var(--dcx-ink);font-size:18px}.dcx-tools-menu-head a{color:var(--dcx-red);font-size:12px;font-weight:850}.dcx-tools-grid{display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:12px}.dcx-tool-link{display:grid;grid-template-columns:38px 1fr auto;gap:12px;align-items:center;padding:13px;border-radius:12px;color:var(--dcx-ink);transition:background .16s ease,transform .16s ease}.dcx-tool-link:hover,.dcx-tool-link:focus-visible{background:#f7f9fc;transform:translateY(-1px)}.dcx-tool-icon{display:grid;place-items:center;width:38px;height:38px;border-radius:10px;background:var(--dcx-red-soft);color:var(--dcx-red);font-size:10px;font-weight:950}.dcx-tool-link strong{display:block;font-size:13px}.dcx-tool-link small{display:block;margin-top:3px;color:#6f7e91;font-size:10px;line-height:1.4}.dcx-tool-link b{color:var(--dcx-red)}
.dcx-header-actions{display:flex;align-items:center;gap:14px;min-width:max-content}.dcx-demo-link{color:var(--dcx-ink);font-size:14px;font-weight:820}.dcx-audit-button{display:inline-flex;align-items:center;justify-content:center;min-height:52px;padding:0 22px;border-radius:11px;background:linear-gradient(135deg,#ff1935,var(--dcx-red-dark));color:#fff;font-weight:880;box-shadow:0 14px 30px rgba(239,21,50,.23);transition:transform .15s ease,box-shadow .15s ease}.dcx-audit-button:hover{transform:translateY(-1px);box-shadow:0 18px 36px rgba(239,21,50,.28)}.dcx-menu-button{display:none;width:44px;height:44px;border:1px solid var(--dcx-line);border-radius:10px;background:#fff}.dcx-menu-button span,.dcx-menu-button:before,.dcx-menu-button:after{content:"";display:block;width:20px;height:2px;margin:4px auto;background:#111c2b}
.dcx-mobile-nav{display:none;padding:16px 24px 22px;border-bottom:1px solid var(--dcx-line);background:#fff}.dcx-mobile-nav.is-open{display:grid}.dcx-mobile-nav>a,.dcx-mobile-tools{padding:13px 0;border:0;border-bottom:1px solid #edf1f5;background:transparent;color:var(--dcx-ink);text-align:left;font-weight:760}.dcx-mobile-tools{display:flex;justify-content:space-between}.dcx-mobile-tool-list{display:none;padding:6px 0 10px 14px;border-left:2px solid var(--dcx-red-soft)}.dcx-mobile-tool-list.is-open{display:grid}.dcx-mobile-tool-list a{padding:10px}.dcx-mobile-tool-list strong{display:block;font-size:13px}.dcx-mobile-tool-list small{display:block;margin-top:4px;color:#718096;font-size:10px;line-height:1.4}.dcx-mobile-audit{margin-top:12px!important;border:0!important;border-radius:10px!important;background:var(--dcx-red)!important;color:#fff!important;text-align:center!important}
.dcx-home-trust{padding:96px 0;background:#fff}.dcx-wide{width:min(1240px,calc(100% - 48px));margin:auto}.dcx-editorial-grid{display:grid;grid-template-columns:.92fr 1.08fr;gap:64px;align-items:center}.dcx-kicker{display:block;color:var(--dcx-red);font-size:10px;font-weight:950;letter-spacing:.15em;text-transform:uppercase}.dcx-editorial-copy h2,.dcx-tools-section h2,.dcx-flow-copy h2{margin:15px 0 0;color:var(--dcx-ink);font-size:clamp(42px,5vw,66px);line-height:1.02;letter-spacing:-3.4px}.dcx-editorial-copy>p,.dcx-tools-intro,.dcx-flow-copy>p{margin:20px 0 0;color:var(--dcx-muted);font-size:17px;line-height:1.72}.dcx-photo-stack{position:relative;min-height:560px}.dcx-photo-main{position:absolute;inset:0 14% 0 0;overflow:hidden;border-radius:22px;box-shadow:var(--dcx-shadow)}.dcx-photo-main img,.dcx-photo-small img,.dcx-flow-image img,.dcx-tool-photo img{width:100%;height:100%;object-fit:cover}.dcx-photo-small{position:absolute;right:0;bottom:34px;width:44%;height:235px;overflow:hidden;border:8px solid #fff;border-radius:18px;box-shadow:0 22px 56px rgba(7,20,38,.18)}.dcx-photo-label{position:absolute;left:24px;bottom:24px;max-width:310px;padding:14px 16px;border-left:3px solid var(--dcx-red);background:rgba(6,16,30,.82);color:#fff;backdrop-filter:blur(10px)}.dcx-photo-label strong{display:block}.dcx-photo-label span{display:block;margin-top:5px;color:#c3ceda;font-size:11px;line-height:1.45}.dcx-editorial-points{display:grid;gap:1px;margin-top:28px;border:1px solid var(--dcx-line);background:var(--dcx-line)}.dcx-editorial-point{display:grid;grid-template-columns:42px 1fr;gap:14px;padding:18px;background:#fff}.dcx-editorial-point b{display:grid;place-items:center;width:40px;height:40px;border-radius:11px;background:var(--dcx-red-soft);color:var(--dcx-red)}.dcx-editorial-point strong{display:block}.dcx-editorial-point span{display:block;margin-top:4px;color:#6d7c90;font-size:12px;line-height:1.5}
.dcx-tools-section{padding:104px 0;background:linear-gradient(180deg,#f7f9fc,#eef3f8)}.dcx-tools-layout{display:grid;grid-template-columns:.72fr 1.28fr;gap:56px;align-items:start}.dcx-tools-copy{position:sticky;top:128px}.dcx-tools-intro{max-width:520px}.dcx-tools-cta{display:inline-flex;margin-top:25px;color:var(--dcx-red);font-weight:850}.dcx-home-tools-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px}.dcx-home-tool{position:relative;min-height:230px;padding:24px;border:1px solid #d7e0ea;border-radius:16px;background:#fff;overflow:hidden;transition:transform .18s ease,box-shadow .18s ease}.dcx-home-tool:before{content:"";position:absolute;inset:0 auto 0 0;width:4px;background:var(--dcx-red);transform:scaleY(0);transform-origin:bottom;transition:transform .18s}.dcx-home-tool:hover{transform:translateY(-3px);box-shadow:0 18px 44px rgba(7,20,38,.09)}.dcx-home-tool:hover:before{transform:scaleY(1)}.dcx-home-tool span{color:var(--dcx-red);font-size:9px;font-weight:950;letter-spacing:.13em;text-transform:uppercase}.dcx-home-tool h3{margin:18px 0 0;color:var(--dcx-ink);font-size:21px}.dcx-home-tool p{margin:10px 0 0;color:#69798d;font-size:13px;line-height:1.6}.dcx-home-tool b{position:absolute;right:22px;bottom:20px;color:var(--dcx-red)}
.dcx-flow{padding:104px 0;background:var(--dcx-navy);color:#fff}.dcx-flow-grid{display:grid;grid-template-columns:1fr 1fr;gap:62px;align-items:center}.dcx-flow-copy h2{color:#fff}.dcx-flow-copy>p{color:#afbdcd}.dcx-flow-image{position:relative;overflow:hidden;min-height:500px;border-radius:22px;box-shadow:0 30px 80px rgba(0,0,0,.28)}.dcx-flow-image:after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,transparent 35%,rgba(5,14,27,.76))}.dcx-flow-steps{display:grid;gap:14px;margin-top:28px}.dcx-flow-step{display:grid;grid-template-columns:48px 1fr;gap:14px;align-items:start;padding:16px;border:1px solid rgba(255,255,255,.12);border-radius:12px;background:rgba(255,255,255,.045)}.dcx-flow-step b{display:grid;place-items:center;width:46px;height:46px;border-radius:12px;background:rgba(239,21,50,.14);color:#ff8d9c}.dcx-flow-step strong{display:block}.dcx-flow-step span{display:block;margin-top:4px;color:#9fadc0;font-size:12px;line-height:1.5}
.dcx-tool-page{background:#fff;color:var(--dcx-ink)}.dcx-tool-hero{padding:82px 0 74px;background:linear-gradient(135deg,#f8fafc,#eef3f8);border-bottom:1px solid var(--dcx-line)}.dcx-tool-hero-grid{display:grid;grid-template-columns:.92fr 1.08fr;gap:58px;align-items:center}.dcx-breadcrumbs{display:flex;flex-wrap:wrap;gap:8px;color:#718096;font-size:11px}.dcx-breadcrumbs a{color:var(--dcx-red);font-weight:800}.dcx-tool-label{display:inline-flex;margin-top:25px;padding:8px 11px;border-radius:999px;background:var(--dcx-red-soft);color:var(--dcx-red);font-size:10px;font-weight:950;letter-spacing:.12em;text-transform:uppercase}.dcx-tool-hero h1{margin:17px 0 0;font-size:clamp(48px,5.6vw,76px);line-height:.98;letter-spacing:-4px}.dcx-tool-hero p{margin:21px 0 0;color:var(--dcx-muted);font-size:17px;line-height:1.72}.dcx-tool-actions{display:flex;flex-wrap:wrap;gap:12px;margin-top:28px}.dcx-tool-primary,.dcx-tool-secondary{display:inline-flex;align-items:center;justify-content:center;min-height:52px;padding:0 21px;border-radius:10px;font-weight:850}.dcx-tool-primary{background:var(--dcx-red);color:#fff;box-shadow:0 14px 30px rgba(239,21,50,.22)}.dcx-tool-secondary{border:1px solid #cbd6e1;background:#fff}.dcx-tool-photo{position:relative;overflow:hidden;min-height:510px;border-radius:22px;box-shadow:var(--dcx-shadow)}.dcx-tool-photo:after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,transparent 45%,rgba(5,14,27,.74))}.dcx-tool-photo-caption{position:absolute;z-index:2;left:24px;right:24px;bottom:23px;color:#fff}.dcx-tool-photo-caption strong{display:block;font-size:21px}.dcx-tool-photo-caption span{display:block;margin-top:6px;color:#d0dae5;font-size:12px}.dcx-tool-section{padding:96px 0}.dcx-tool-section.soft{background:var(--dcx-soft)}.dcx-tool-two{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:start}.dcx-tool-two h2,.dcx-tool-section-head h2{margin:14px 0 0;font-size:clamp(38px,4.7vw,60px);line-height:1.03;letter-spacing:-3px}.dcx-tool-two p,.dcx-tool-section-head p{color:var(--dcx-muted);line-height:1.72}.dcx-benefit-list{display:grid;gap:1px;border:1px solid var(--dcx-line);background:var(--dcx-line)}.dcx-benefit{display:grid;grid-template-columns:40px 1fr;gap:14px;padding:18px;background:#fff}.dcx-benefit b{display:grid;place-items:center;width:38px;height:38px;border-radius:10px;background:var(--dcx-red-soft);color:var(--dcx-red)}.dcx-benefit strong{display:block}.dcx-benefit span{display:block;margin-top:4px;color:#6e7e91;font-size:12px;line-height:1.5}.dcx-tool-section-head{max-width:780px;margin:0 auto 38px;text-align:center}.dcx-tool-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.dcx-tool-card{padding:24px;border:1px solid var(--dcx-line);border-radius:14px;background:#fff}.dcx-tool-card b{display:grid;place-items:center;width:42px;height:42px;border-radius:11px;background:var(--dcx-red-soft);color:var(--dcx-red)}.dcx-tool-card h3{margin:18px 0 0}.dcx-tool-card p{color:#68788d;font-size:13px;line-height:1.6}.dcx-faq{display:grid;gap:10px;max-width:900px;margin:auto}.dcx-faq details{padding:19px 21px;border:1px solid var(--dcx-line);border-radius:12px;background:#fff}.dcx-faq summary{cursor:pointer;font-weight:820}.dcx-faq p{color:#68788d;line-height:1.65}.dcx-tool-final{padding:74px 0;background:linear-gradient(120deg,#bd001c,var(--dcx-red) 58%,#ff4056);color:#fff}.dcx-tool-final-grid{display:grid;grid-template-columns:1fr auto;gap:36px;align-items:center}.dcx-tool-final h2{margin:0;font-size:clamp(38px,4.8vw,60px);letter-spacing:-3px}.dcx-tool-final p{margin:13px 0 0;color:#ffe3e7}.dcx-tool-final .dcx-tool-primary{background:#fff;color:#b9001b}
@media(max-width:1100px){.dcx-desktop-nav{display:none}.dcx-menu-button{display:block}.dcx-demo-link{display:none}.dcx-editorial-grid,.dcx-tools-layout,.dcx-flow-grid,.dcx-tool-hero-grid,.dcx-tool-two{grid-template-columns:1fr}.dcx-tools-copy{position:static}.dcx-photo-stack{min-height:520px}.dcx-tool-photo{min-height:460px}}
@media(max-width:760px){.dcx-header-inner,.dcx-wide{width:min(100% - 32px,1320px)}.dcx-header-inner{min-height:72px}.dcx-brand svg{width:39px}.dcx-brand-name{font-size:18px}.dcx-brand-rule{height:28px}.dcx-header-actions .dcx-audit-button{display:none}.dcx-home-trust,.dcx-tools-section,.dcx-flow,.dcx-tool-section{padding:72px 0}.dcx-editorial-copy h2,.dcx-tools-section h2,.dcx-flow-copy h2,.dcx-tool-two h2,.dcx-tool-section-head h2{font-size:39px;letter-spacing:-2px}.dcx-photo-stack{min-height:430px}.dcx-photo-main{right:0}.dcx-photo-small{width:48%;height:170px;border-width:5px}.dcx-home-tools-grid,.dcx-tool-cards{grid-template-columns:1fr}.dcx-flow-image,.dcx-tool-photo{min-height:360px}.dcx-tool-hero{padding:62px 0}.dcx-tool-hero h1{font-size:47px;letter-spacing:-2.7px}.dcx-tool-actions{display:grid}.dcx-tool-primary,.dcx-tool-secondary{width:100%}.dcx-tool-final-grid{grid-template-columns:1fr}.dcx-tool-final .dcx-tool-primary{width:100%}}
@media(max-width:440px){.dcx-brand-rule{display:none}.dcx-brand{gap:8px}.dcx-brand-name{font-size:16px}.dcx-photo-small{display:none}.dcx-photo-stack{min-height:360px}.dcx-photo-main{inset:0}.dcx-tool-hero h1{font-size:42px}}
@media(prefers-reduced-motion:reduce){.dcx-tool-link,.dcx-audit-button,.dcx-home-tool{transition:none}.dcx-reveal{opacity:1!important;transform:none!important}}
</style>`;

const CLIENT_SCRIPT = `<script id="dcx-tools-seo-script">(()=>{const menu=document.querySelector('.dcx-menu-button'),mobile=document.querySelector('.dcx-mobile-nav'),toolsNav=document.querySelector('.dcx-tools-nav'),toolsButton=document.querySelector('.dcx-tools-trigger'),mobileTools=document.querySelector('.dcx-mobile-tools'),mobileList=document.querySelector('.dcx-mobile-tool-list');menu?.addEventListener('click',()=>{const open=mobile?.classList.toggle('is-open');menu.setAttribute('aria-expanded',String(Boolean(open)))});toolsButton?.addEventListener('click',event=>{event.stopPropagation();const open=toolsNav?.classList.toggle('is-open');toolsButton.setAttribute('aria-expanded',String(Boolean(open)))});mobileTools?.addEventListener('click',()=>{const open=mobileList?.classList.toggle('is-open');mobileTools.setAttribute('aria-expanded',String(Boolean(open)));const mark=mobileTools.querySelector('span');if(mark)mark.textContent=open?'−':'+'});document.addEventListener('click',event=>{if(toolsNav&&!toolsNav.contains(event.target)){toolsNav.classList.remove('is-open');toolsButton?.setAttribute('aria-expanded','false')}});document.addEventListener('keydown',event=>{if(event.key==='Escape'){toolsNav?.classList.remove('is-open');toolsButton?.setAttribute('aria-expanded','false');mobile?.classList.remove('is-open');menu?.setAttribute('aria-expanded','false')}});})();</script>`;

const HOME_TRUST_SECTION = `<section class="dcx-home-trust"><div class="dcx-wide dcx-editorial-grid"><div class="dcx-photo-stack"><div class="dcx-photo-main"><img src="https://images.unsplash.com/photo-1560253414-f65d1f5a1a37?auto=format&fit=crop&w=1500&q=84" alt="Dealership professional inspecting a vehicle" width="920" height="690" loading="lazy" decoding="async"><div class="dcx-photo-label"><strong>Software should improve real dealership work.</strong><span>From the showroom and buying desk to management reporting.</span></div></div><div class="dcx-photo-small"><img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=82" alt="Dealership team reviewing business performance" width="520" height="390" loading="lazy" decoding="async"></div></div><div class="dcx-editorial-copy"><span class="dcx-kicker">Built around dealership reality</span><h2>One clear system for the people doing the work.</h2><p>DealershipCore is designed to connect the customer journey to the daily work of sales teams, buyers, finance managers and dealership owners.</p><div class="dcx-editorial-points"><div class="dcx-editorial-point"><b>01</b><div><strong>Sales teams see the next action</strong><span>Leads, vehicle context, notes and deadlines remain together.</span></div></div><div class="dcx-editorial-point"><b>02</b><div><strong>Managers see what needs attention</strong><span>Slow response, unassigned opportunities and stock blockers become visible.</span></div></div><div class="dcx-editorial-point"><b>03</b><div><strong>Owners see the operating picture</strong><span>Source, pipeline, stock and branch activity connect to one reporting view.</span></div></div></div></div></div></section>`;

const HOME_TOOLS_SECTION = `<section class="dcx-tools-section" id="tools"><div class="dcx-wide dcx-tools-layout"><div class="dcx-tools-copy"><span class="dcx-kicker">DealershipCore tools</span><h2>Focused customer journeys. One dealership workflow.</h2><p class="dcx-tools-intro">Each tool is built for a specific search, campaign or customer need. DealershipCore keeps the resulting opportunity, ownership and follow-up connected.</p><a class="dcx-tools-cta" href="/tools/">Explore every tool →</a></div><div class="dcx-home-tools-grid">${TOOLS.map(tool => `<a class="dcx-home-tool" href="/tools/${tool.slug}/"><span>${tool.label}</span><h3>${tool.name}</h3><p>${tool.navDescription}</p><b aria-hidden="true">→</b></a>`).join('')}</div></div></section>`;

const HOME_FLOW_SECTION = `<section class="dcx-flow"><div class="dcx-wide dcx-flow-grid"><div class="dcx-flow-copy"><span class="dcx-kicker">From demand to dealership action</span><h2>A website enquiry should never become a forgotten email.</h2><p>DealershipCore connects public tools, dealership websites and campaigns to a visible sales workflow with ownership, response tracking and a clear next action.</p><div class="dcx-flow-steps"><div class="dcx-flow-step"><b>1</b><div><strong>Capture the right context</strong><span>Vehicle, customer, campaign and intent information arrives together.</span></div></div><div class="dcx-flow-step"><b>2</b><div><strong>Route it to the right person</strong><span>Use branch, source, vehicle or workflow rules.</span></div></div><div class="dcx-flow-step"><b>3</b><div><strong>Keep the outcome visible</strong><span>Track response, next action, stage and result in DealershipCore.</span></div></div></div></div><div class="dcx-flow-image"><img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1500&q=85" alt="Premium vehicle in a modern dealership environment" width="920" height="690" loading="lazy" decoding="async"></div></div></section>`;

function replaceHeader(html) {
  const pattern = /<header class="site-header">[\s\S]*?<\/header>\s*<nav class="(?:mobile-nav|mobile-menu)"[\s\S]*?<\/nav>/i;
  if (pattern.test(html)) return html.replace(pattern, HEADER);
  return html.replace(/<body>/i, `<body>${HEADER}`);
}

function enhanceHome(html) {
  let output = html;
  output = output.replace(/(<section class="trust">[\s\S]*?<\/section>)/i, `$1${HOME_TRUST_SECTION}`);
  output = output.replace(/<section class="section soft"><div class="container"><div class="section-head reveal"><span class="kicker">The DealershipCore ecosystem<\/span>[\s\S]*?<\/section>/i, HOME_TOOLS_SECTION);
  output = output.replace(/<section class="section dark">/i, `${HOME_FLOW_SECTION}<section class="section dark">`);
  const itemList = JSON.stringify({'@context':'https://schema.org','@type':'ItemList','name':'DealershipCore tools','itemListElement':TOOLS.map((tool,index)=>({'@type':'ListItem','position':index+1,'name':tool.name,'url':`${BASE}/tools/${tool.slug}/`}))});
  output = output.replace(/<\/head>/i, `<script type="application/ld+json">${itemList}</script></head>`);
  return output;
}

function enhanceHtml(html, path) {
  let output = replaceHeader(html);
  if (!output.includes('id="dcx-tools-seo-style"')) output = output.replace(/<\/head>/i, `<link rel="preconnect" href="https://images.unsplash.com">${SHARED_STYLE}</head>`);
  if (path === '/') output = enhanceHome(output);
  if (!output.includes('id="dcx-tools-seo-script"')) output = output.replace(/<\/body>/i, `${CLIENT_SCRIPT}</body>`);
  return output;
}

function toolSchema(tool) {
  return JSON.stringify({'@context':'https://schema.org','@graph':[
    {'@type':'Organization','@id':`${BASE}/#organization`,'name':'DealershipCore','url':`${BASE}/`},
    {'@type':'SoftwareApplication','name':tool.name,'applicationCategory':'BusinessApplication','operatingSystem':'Web','url':`${BASE}/tools/${tool.slug}/`,'description':tool.meta,'publisher':{'@id':`${BASE}/#organization`}},
    {'@type':'BreadcrumbList','itemListElement':[{'@type':'ListItem','position':1,'name':'Home','item':`${BASE}/`},{'@type':'ListItem','position':2,'name':'Tools','item':`${BASE}/tools/`},{'@type':'ListItem','position':3,'name':tool.name,'item':`${BASE}/tools/${tool.slug}/`}]},
    {'@type':'FAQPage','mainEntity':tool.faq.map(([question,answer])=>({'@type':'Question','name':question,'acceptedAnswer':{'@type':'Answer','text':answer}}))},
  ]});
}

function toolFooter() {
  return `<footer class="footer"><div class="container"><div class="footer-grid"><div class="footer-brand"><a class="dcx-brand" href="/">${LOGO}<span class="dcx-brand-rule"></span><span class="dcx-brand-name" style="color:#fff">DealershipCore</span></a><p>The dealership operating system connecting public tools, leads, stock, CRM, sales workflow and reporting.</p></div><div><h4>Platform</h4><a href="/product/">Overview</a><a href="/product/features/">Features</a><a href="/product/integrations/">Integrations</a></div><div><h4>Tools</h4>${TOOLS.slice(0,3).map(tool=>`<a href="/tools/${tool.slug}/">${tool.name}</a>`).join('')}</div><div><h4>More tools</h4>${TOOLS.slice(3).map(tool=>`<a href="/tools/${tool.slug}/">${tool.name}</a>`).join('')}</div><div><h4>Company</h4><a href="/about/">About</a><a href="/contact/">Contact</a><a href="/privacy/">Privacy</a></div></div><div class="footer-bottom"><span>© 2026 DealershipCore.</span><span>South African dealership software and connected tools.</span></div></div></footer>`;
}

function toolPage(tool) {
  const canonical = `${BASE}/tools/${tool.slug}/`;
  return `<!doctype html><html lang="en-ZA"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${tool.title} | DealershipCore</title><meta name="description" content="${tool.meta}"><link rel="canonical" href="${canonical}"><meta name="robots" content="index,follow,max-image-preview:large"><meta property="og:type" content="website"><meta property="og:title" content="${tool.title} | DealershipCore"><meta property="og:description" content="${tool.meta}"><meta property="og:url" content="${canonical}"><meta property="og:site_name" content="DealershipCore"><meta property="og:image" content="${tool.image}"><meta name="twitter:card" content="summary_large_image"><meta name="theme-color" content="#071426"><link rel="icon" href="/favicon.svg?v=8" type="image/svg+xml"><link rel="stylesheet" href="/assets/dealershipcore-v4.css"><link rel="preconnect" href="https://images.unsplash.com">${SHARED_STYLE}<script type="application/ld+json">${toolSchema(tool)}</script></head><body>${HEADER}<main class="dcx-tool-page"><section class="dcx-tool-hero"><div class="dcx-wide dcx-tool-hero-grid"><div><nav class="dcx-breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/tools/">Tools</a><span>/</span><span>${tool.name}</span></nav><span class="dcx-tool-label">${tool.label}</span><h1>${tool.headline}</h1><p>${tool.intro}</p><div class="dcx-tool-actions"><a class="dcx-tool-primary" href="/book-demo/">Book a DealershipCore demo</a><a class="dcx-tool-secondary" href="${tool.domain}">Visit ${tool.name}</a></div></div><div class="dcx-tool-photo"><img src="${tool.image}" alt="${tool.name} dealership workflow" width="920" height="690" fetchpriority="high"><div class="dcx-tool-photo-caption"><strong>${tool.name}</strong><span>${tool.navDescription}</span></div></div></div></section><section class="dcx-tool-section"><div class="dcx-wide dcx-tool-two"><div><span class="dcx-kicker">Built for a clear customer journey</span><h2>A focused tool should still connect to the dealership operation.</h2><p>${tool.meta}</p><p>DealershipCore keeps the lead source, customer, vehicle, ownership, activity and commercial outcome connected after the public journey ends.</p></div><div class="dcx-benefit-list">${tool.bullets.map((bullet,index)=>`<div class="dcx-benefit"><b>${index+1}</b><div><strong>${bullet}</strong><span>Designed to create a clear, accountable next step for the dealership team.</span></div></div>`).join('')}</div></div></section><section class="dcx-tool-section soft"><div class="dcx-wide"><div class="dcx-tool-section-head"><span class="dcx-kicker">How it connects</span><h2>From public intent to visible dealership action.</h2><p>The tool handles the focused customer journey. DealershipCore manages what happens next.</p></div><div class="dcx-tool-cards"><article class="dcx-tool-card"><b>01</b><h3>Capture</h3><p>Collect the customer, vehicle, campaign and intent context needed for a useful follow-up.</p></article><article class="dcx-tool-card"><b>02</b><h3>Route</h3><p>Assign the opportunity to the correct branch, team or owner using clear workflow rules.</p></article><article class="dcx-tool-card"><b>03</b><h3>Track</h3><p>Keep response, next action, pipeline stage and outcome visible inside DealershipCore.</p></article></div></div></section><section class="dcx-tool-section"><div class="dcx-wide"><div class="dcx-tool-section-head"><span class="dcx-kicker">Frequently asked questions</span><h2>What dealerships should know.</h2></div><div class="dcx-faq">${tool.faq.map(([question,answer])=>`<details><summary>${question}</summary><p>${answer}</p></details>`).join('')}</div></div></section><section class="dcx-tool-final"><div class="dcx-wide dcx-tool-final-grid"><div><h2>Connect ${tool.name} to your dealership workflow.</h2><p>See how the tool and DealershipCore can work together around your current process.</p></div><a class="dcx-tool-primary" href="/book-demo/">Book a demo</a></div></section></main>${toolFooter()}${CLIENT_SCRIPT}</body></html>`;
}

function toolsIndexPage() {
  const schema = JSON.stringify({'@context':'https://schema.org','@type':'CollectionPage','name':'DealershipCore tools','url':`${BASE}/tools/`,'description':'Explore valuation, finance and dealership software tools connected to DealershipCore.','hasPart':TOOLS.map(tool=>({'@type':'WebPage','name':tool.name,'url':`${BASE}/tools/${tool.slug}/`}))});
  return `<!doctype html><html lang="en-ZA"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Dealership Tools for Valuation, Finance and Growth | DealershipCore</title><meta name="description" content="Explore DealershipCore tools for public vehicle valuation, car valuation search, seller campaigns, valuation technology, finance and dealership software education."><link rel="canonical" href="${BASE}/tools/"><meta name="robots" content="index,follow,max-image-preview:large"><meta property="og:title" content="DealershipCore Tools"><meta property="og:description" content="Focused valuation, finance and dealership software journeys connected to one operating system."><meta property="og:url" content="${BASE}/tools/"><meta name="theme-color" content="#071426"><link rel="icon" href="/favicon.svg?v=8" type="image/svg+xml"><link rel="stylesheet" href="/assets/dealershipcore-v4.css">${SHARED_STYLE}<script type="application/ld+json">${schema}</script></head><body>${HEADER}<main class="dcx-tool-page"><section class="dcx-tool-hero"><div class="dcx-wide"><nav class="dcx-breadcrumbs"><a href="/">Home</a><span>/</span><span>Tools</span></nav><span class="dcx-tool-label">DealershipCore tools</span><h1 style="max-width:900px">Focused journeys that feed one dealership operating system.</h1><p style="max-width:760px">Each tool serves a clear customer or search intent. DealershipCore keeps the resulting opportunity, ownership, follow-up and reporting connected.</p></div></section>${HOME_TOOLS_SECTION}<section class="dcx-flow"><div class="dcx-wide dcx-flow-grid"><div class="dcx-flow-copy"><span class="dcx-kicker">One connected workflow</span><h2>Use the right public tool without fragmenting dealership operations.</h2><p>Customers can enter through valuation, finance, campaigns or software research. Your dealership team should still manage the opportunity in one place.</p><div class="dcx-flow-steps"><div class="dcx-flow-step"><b>1</b><div><strong>Focused acquisition</strong><span>Give each audience a clear, relevant journey.</span></div></div><div class="dcx-flow-step"><b>2</b><div><strong>Structured lead routing</strong><span>Preserve source, vehicle and customer context.</span></div></div><div class="dcx-flow-step"><b>3</b><div><strong>Dealership accountability</strong><span>Track ownership, response and outcome in DealershipCore.</span></div></div></div></div><div class="dcx-flow-image"><img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1500&q=84" alt="Dealership management team reviewing connected business workflows" width="920" height="690"></div></div></section></main>${toolFooter()}${CLIENT_SCRIPT}</body></html>`;
}

function appendSitemap(xml) {
  const urls = [`${BASE}/tools/`, ...TOOLS.map(tool => `${BASE}/tools/${tool.slug}/`)];
  const entries = urls.filter(url => !xml.includes(`<loc>${url}</loc>`)).map(url => `<url><loc>${url}</loc><lastmod>2026-08-02</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>`).join('');
  return xml.replace('</urlset>', `${entries}</urlset>`);
}

function appendLlms(text) {
  if (text.includes('## DealershipCore tools')) return text;
  return `${text.trim()}\n\n## DealershipCore tools\n${TOOLS.map(tool => `- ${tool.name}: ${BASE}/tools/${tool.slug}/ — ${tool.navDescription}`).join('\n')}\n`;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname.replace(/\/$/, '') || '/';
    const tool = toolByPath.get(path);
    if (['GET', 'HEAD'].includes(request.method) && tool) return new Response(request.method === 'HEAD' ? null : toolPage(tool), {status: 200, headers: {'content-type':'text/html; charset=utf-8','cache-control':'no-store, max-age=0, must-revalidate','x-content-type-options':'nosniff','referrer-policy':'strict-origin-when-cross-origin','x-site-version':RELEASE}});
    if (['GET', 'HEAD'].includes(request.method) && path === '/tools') return new Response(request.method === 'HEAD' ? null : toolsIndexPage(), {status: 200, headers: {'content-type':'text/html; charset=utf-8','cache-control':'no-store, max-age=0, must-revalidate','x-content-type-options':'nosniff','referrer-policy':'strict-origin-when-cross-origin','x-site-version':RELEASE}});
    const response = await site.fetch(request, env);
    if (path === '/sitemap.xml' && response.ok) return new Response(request.method === 'HEAD' ? null : appendSitemap(await response.text()), {status: response.status, headers: {'content-type':'application/xml; charset=utf-8','cache-control':'no-store'}});
    if (path === '/llms.txt' && response.ok) return new Response(request.method === 'HEAD' ? null : appendLlms(await response.text()), {status: response.status, headers: {'content-type':'text/plain; charset=utf-8','cache-control':'no-store'}});
    const type = (response.headers.get('content-type') || '').toLowerCase();
    if (!type.includes('text/html')) return response;
    const html = enhanceHtml(await response.text(), path);
    const headers = new Headers(response.headers);
    for (const name of ['content-length', 'content-encoding', 'etag']) headers.delete(name);
    headers.set('cache-control', 'no-store, max-age=0, must-revalidate');
    headers.set('x-site-version', RELEASE);
    headers.set('x-dealershipcore-tools', 'mega-menu-and-seo-pages');
    return new Response(request.method === 'HEAD' ? null : html, {status: response.status, statusText: response.statusText, headers});
  },
};
