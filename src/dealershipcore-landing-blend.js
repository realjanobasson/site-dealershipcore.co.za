import site from './dealershipcore-polished-home.js';

const RELEASE = 'dealershipcore-landing-blend-2026-08-05-v1';

const LANDING_BLEND_STYLE = `<style id="dc-landing-blend-v1">
.dc-dashboard-tabs{display:flex;gap:7px;margin:0 0 12px;padding:3px;border:1px solid #252d38;border-radius:8px;background:#080b10;overflow-x:auto;scrollbar-width:none}.dc-dashboard-tabs::-webkit-scrollbar{display:none}.dc-dashboard-tab{flex:0 0 auto;min-height:34px;padding:0 13px;border:0;border-radius:6px;background:transparent;color:#8e9aab;font:800 11px/1 Inter,ui-sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif;cursor:pointer}.dc-dashboard-tab[aria-selected="true"]{background:#f11234;color:#fff;box-shadow:0 8px 24px rgba(241,18,52,.24)}.dc-dashboard-caption{display:flex;align-items:center;justify-content:space-between;gap:18px;padding:13px 3px 2px;color:#a3adba;font-size:11px;line-height:1.55}.dc-dashboard-caption strong{color:#fff;font-size:12px}.dc-dashboard-caption span:last-child{color:#ff405c;font-weight:900;white-space:nowrap}

.dc-operating-model-v3{position:relative;overflow:hidden;padding:94px 0;background:#080b10;color:#fff}.dc-operating-model-v3:before{content:"";position:absolute;inset:auto -180px -250px auto;width:620px;height:620px;border-radius:50%;background:radial-gradient(circle,rgba(241,18,52,.26),transparent 66%);pointer-events:none}.dc-model-head{max-width:780px;margin:0 auto 48px;text-align:center}.dc-model-head h2{margin:13px 0 0;font-size:clamp(40px,4.8vw,64px);line-height:1;letter-spacing:-3px}.dc-model-head p{margin:17px auto 0;color:#9ca8b8;font-size:16px;line-height:1.7}.dc-model-track{position:relative;display:grid;grid-template-columns:repeat(5,1fr);gap:12px}.dc-model-track:before{content:"";position:absolute;left:7%;right:7%;top:35px;height:1px;background:linear-gradient(90deg,transparent,rgba(255,255,255,.18) 10%,rgba(241,18,52,.75) 50%,rgba(255,255,255,.18) 90%,transparent)}.dc-model-card{position:relative;z-index:1;min-height:260px;padding:25px 23px;border:1px solid #242d39;border-radius:9px;background:#10151d;transition:transform .2s ease,border-color .2s ease,background .2s ease}.dc-model-card:hover{transform:translateY(-5px);border-color:rgba(241,18,52,.6);background:#121922}.dc-model-card.is-active{border-color:var(--dc-red);box-shadow:0 20px 60px rgba(241,18,52,.14)}.dc-model-number{display:grid;place-items:center;width:40px;height:40px;border:1px solid #3a4554;border-radius:50%;background:#0a0d12;color:#aeb8c6;font-size:12px;font-weight:900}.dc-model-card.is-active .dc-model-number{border-color:var(--dc-red);background:var(--dc-red);color:#fff;box-shadow:0 0 0 7px rgba(241,18,52,.1)}.dc-model-card h3{margin:28px 0 0;font-size:21px}.dc-model-card p{margin:11px 0 0;color:#8e9aab;font-size:12px;line-height:1.65}.dc-model-card a{display:inline-flex;margin-top:23px;color:#ff405c;font-size:11px;font-weight:900}

.dc-mobile-experience{position:relative;overflow:hidden;padding:96px 0;background:#05070a;color:#fff}.dc-mobile-experience:before{content:"";position:absolute;z-index:0;top:0;right:-8%;width:61%;height:100%;background:linear-gradient(135deg,#ff1737,#bd001d);clip-path:polygon(18% 0,100% 0,100% 100%,0 100%)}.dc-mobile-experience:after{content:"";position:absolute;z-index:0;right:9%;top:12%;width:360px;height:360px;border:1px solid rgba(255,255,255,.12);border-radius:50%;box-shadow:0 0 0 58px rgba(255,255,255,.025),0 0 0 116px rgba(255,255,255,.018)}.dc-mobile-grid{position:relative;z-index:1;display:grid;grid-template-columns:1fr .88fr;gap:72px;align-items:center}.dc-mobile-copy h2{margin:15px 0 0;font-size:clamp(43px,5vw,70px);line-height:.98;letter-spacing:-3.5px}.dc-mobile-copy h2 span{color:#ff2948}.dc-mobile-copy>p{max-width:620px;margin:22px 0 0;color:#aeb8c6;font-size:17px;line-height:1.72}.dc-mobile-list{display:grid;gap:16px;margin-top:30px}.dc-mobile-list-item{display:grid;grid-template-columns:38px 1fr;gap:14px;align-items:start}.dc-mobile-list-item b{display:grid;place-items:center;width:34px;height:34px;border:1px solid rgba(241,18,52,.65);border-radius:50%;color:#ff2948;font-size:11px}.dc-mobile-list-item strong{display:block;font-size:14px}.dc-mobile-list-item span{display:block;margin-top:5px;color:#8995a5;font-size:12px;line-height:1.5}.dc-action-card-wrap{position:relative;display:grid;place-items:center;min-height:520px}.dc-action-card-wrap:before{content:"";position:absolute;width:78%;height:84%;border-radius:26px;background:rgba(0,0,0,.28);filter:blur(28px);transform:translate(22px,26px)}.dc-action-card{position:relative;width:min(420px,92%);padding:34px;border-radius:24px;background:#fff;color:#11151b;box-shadow:0 32px 90px rgba(0,0,0,.34)}.dc-action-card:before{content:"";position:absolute;left:0;right:0;top:0;height:7px;border-radius:24px 24px 0 0;background:#f11234}.dc-action-brand{display:flex;align-items:center;gap:11px;font-size:17px;font-weight:900}.dc-action-mark{display:grid;place-items:center;width:34px;height:34px;border-radius:8px;background:#0b0f14;color:#fff;font-size:13px}.dc-action-card h3{margin:34px 0 0;font-size:38px;letter-spacing:-1.7px}.dc-action-card>p{margin:10px 0 0;color:#697487;font-size:16px;line-height:1.55}.dc-action-options{display:grid;gap:11px;margin-top:28px}.dc-action-option{display:grid;grid-template-columns:32px 1fr auto;gap:12px;align-items:center;width:100%;padding:15px 16px;border:1px solid #e4e7eb;border-radius:12px;background:#fff;color:#1a1f28;text-align:left;font:800 13px/1.35 Inter,ui-sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif;cursor:pointer;transition:border-color .2s ease,transform .2s ease,box-shadow .2s ease}.dc-action-option:hover,.dc-action-option.is-selected{transform:translateY(-2px);border-color:#f11234;box-shadow:0 14px 34px rgba(8,12,18,.09)}.dc-action-option b{color:#f11234;font-size:18px}.dc-action-option i{color:#f11234;font-style:normal}.dc-action-response{min-height:54px;margin-top:15px;padding:13px 15px;border-radius:10px;background:#f5f6f8;color:#535e6d;font-size:12px;line-height:1.55}.dc-action-response strong{color:#11151b}

.dc-cta-box{background:#e60022!important}.dc-cta-box:after{background:radial-gradient(circle,rgba(0,0,0,.28),transparent 68%)!important}.dc-cta-box .dc-btn-red{background:#05070a!important;box-shadow:0 15px 40px rgba(0,0,0,.25)!important}.dc-cta-box p{color:rgba(255,255,255,.86)!important}

@media(max-width:1050px){.dc-model-track{grid-template-columns:repeat(2,1fr)}.dc-model-track:before{display:none}.dc-model-card:last-child{grid-column:1/-1}.dc-mobile-grid{grid-template-columns:1fr;gap:44px}.dc-mobile-experience:before{right:-25%;width:78%;opacity:.9}.dc-action-card-wrap{min-height:460px}}
@media(max-width:680px){.dc-dashboard-caption{align-items:flex-start;flex-direction:column;gap:4px}.dc-operating-model-v3,.dc-mobile-experience{padding:74px 0}.dc-model-head{text-align:left}.dc-model-head h2,.dc-mobile-copy h2{font-size:42px;letter-spacing:-2.1px}.dc-model-track{grid-template-columns:1fr}.dc-model-card:last-child{grid-column:auto}.dc-mobile-experience:before{top:auto;bottom:0;right:0;width:100%;height:58%;clip-path:polygon(0 12%,100% 0,100% 100%,0 100%)}.dc-mobile-experience:after{display:none}.dc-mobile-grid{gap:36px}.dc-action-card-wrap{min-height:auto}.dc-action-card{width:100%;padding:28px 22px}.dc-action-card h3{font-size:33px}.dc-action-option{grid-template-columns:28px 1fr auto;padding:14px 13px}}
@media(prefers-reduced-motion:reduce){.dc-model-card,.dc-action-option{transition:none!important}.dc-model-card:hover,.dc-action-option:hover{transform:none}}
</style>`;

const OPERATING_MODEL_SECTION = `<section class="dc-operating-model-v3" aria-labelledby="dc-operating-model-title"><div class="dc-wrap">
  <div class="dc-model-head"><span class="dc-kicker">The dealership operating model</span><h2 id="dc-operating-model-title">Attract. Engage. Sell. Serve. Grow.</h2><p>One connected system linking customer demand to dealership action, customer experience and owner visibility.</p></div>
  <div class="dc-model-track">
    <article class="dc-model-card"><span class="dc-model-number">01</span><h3>Attract</h3><p>Generate qualified demand through valuation journeys, dealership websites, campaigns and search.</p><a href="/ecosystem/">Explore demand tools →</a></article>
    <article class="dc-model-card is-active"><span class="dc-model-number">02</span><h3>Engage</h3><p>Capture every lead with customer, vehicle, source and intent context attached.</p><a href="/features/lead-management/">See lead management →</a></article>
    <article class="dc-model-card"><span class="dc-model-number">03</span><h3>Sell</h3><p>Move opportunities through stock, deal, finance and handover workflows with clear ownership.</p><a href="/features/sales-deals/">See sales workflow →</a></article>
    <article class="dc-model-card"><span class="dc-model-number">04</span><h3>Serve</h3><p>Keep customer history, follow-up, reminders and support activity connected after the sale.</p><a href="/features/crm-customers/">See customer CRM →</a></article>
    <article class="dc-model-card"><span class="dc-model-number">05</span><h3>Grow</h3><p>Connect source, pipeline, stock and branch performance to one owner reporting view.</p><a href="/features/reports-insights/">See reports →</a></article>
  </div>
</div></section>`;

const MOBILE_EXPERIENCE_SECTION = `<section class="dc-mobile-experience" aria-labelledby="dc-mobile-experience-title"><div class="dc-wrap dc-mobile-grid">
  <div class="dc-mobile-copy"><span class="dc-kicker">Built around dealership reality</span><h2 id="dc-mobile-experience-title">The right next action, <span>wherever the team is.</span></h2><p>DealershipCore should feel useful to the salesperson on the floor, the buyer at the desk and the manager reviewing the day—not only to the person who configured the software.</p><div class="dc-mobile-list">
    <div class="dc-mobile-list-item"><b>01</b><div><strong>Simple entry points</strong><span>Book a demo, open the platform or ask for help without hunting through menus.</span></div></div>
    <div class="dc-mobile-list-item"><b>02</b><div><strong>Mobile-ready actions</strong><span>See leads, tasks, vehicles and next steps on the device the team already uses.</span></div></div>
    <div class="dc-mobile-list-item"><b>03</b><div><strong>A visible human support path</strong><span>Make it obvious where dealership teams can ask questions and get practical help.</span></div></div>
  </div>
  <div class="dc-action-card-wrap"><div class="dc-action-card"><div class="dc-action-brand"><span class="dc-action-mark">DC</span><span>DealershipCore</span></div><h3>Hello 👋</h3><p>How can we help your dealership today?</p><div class="dc-action-options">
    <button class="dc-action-option is-selected" type="button" data-response="We will open a focused demo request based on your dealership, team and current workflow."><b>↗</b><span>Book a DealershipCore demo</span><i>→</i></button>
    <button class="dc-action-option" type="button" data-response="We will show how lead ownership, stock context and follow-up stay connected in one operating view."><b>↗</b><span>Help me manage leads and stock</span><i>→</i></button>
    <button class="dc-action-option" type="button" data-response="Explore the platform areas for leads, customers, vehicles, deals, finance, tasks and reporting."><b>↗</b><span>Show me the platform</span><i>→</i></button>
  </div><div class="dc-action-response" aria-live="polite"><strong>Selected:</strong> We will open a focused demo request based on your dealership, team and current workflow.</div></div></div>
</div></section>`;

const LANDING_BLEND_SCRIPT = `<script id="dc-landing-blend-interactions">
(() => {
  const tabCopy = {
    Overview: ['Operating overview', 'See lead, stock, deal and task priorities together.'],
    Leads: ['Lead management', 'Review new enquiries, ownership, source and response status.'],
    Stock: ['Stock visibility', 'See readiness, media, ageing and customer interest in context.'],
    Deals: ['Sales pipeline', 'Track stage, value, finance progress and the next action.'],
    Tasks: ['Team accountability', 'Keep follow-up, deadlines and operational work visible.']
  };
  const tabs = Array.from(document.querySelectorAll('.dc-dashboard-tab'));
  const caption = document.querySelector('.dc-dashboard-caption');
  tabs.forEach(tab => tab.addEventListener('click', () => {
    tabs.forEach(item => item.setAttribute('aria-selected', String(item === tab)));
    const copy = tabCopy[tab.dataset.tab] || tabCopy.Overview;
    if (caption) caption.innerHTML = '<span><strong>' + copy[0] + '</strong><br>' + copy[1] + '</span><span>Live workspace view</span>';
  }));

  const options = Array.from(document.querySelectorAll('.dc-action-option'));
  const response = document.querySelector('.dc-action-response');
  options.forEach(option => option.addEventListener('click', () => {
    options.forEach(item => item.classList.toggle('is-selected', item === option));
    if (response) response.innerHTML = '<strong>Selected:</strong> ' + option.dataset.response;
  }));
})();
</script>`;

function blendLandingPage(html) {
  if (html.includes('id="dc-landing-blend-v1"')) return html;

  let output = html.replace('</head>', `${LANDING_BLEND_STYLE}</head>`);
  output = output.replace(
    '<div class="dc-product-card"><img src="/assets/dealershipcore-product-devices.webp" alt="DealershipCore dashboard on laptop and mobile"></div>',
    '<div class="dc-product-card"><div class="dc-dashboard-tabs" role="tablist" aria-label="DealershipCore workspace views"><button class="dc-dashboard-tab" type="button" data-tab="Overview" aria-selected="true">Overview</button><button class="dc-dashboard-tab" type="button" data-tab="Leads" aria-selected="false">Leads</button><button class="dc-dashboard-tab" type="button" data-tab="Stock" aria-selected="false">Stock</button><button class="dc-dashboard-tab" type="button" data-tab="Deals" aria-selected="false">Deals</button><button class="dc-dashboard-tab" type="button" data-tab="Tasks" aria-selected="false">Tasks</button></div><img src="/assets/dealershipcore-product-devices.webp" alt="DealershipCore dashboard on laptop and mobile"><div class="dc-dashboard-caption"><span><strong>Operating overview</strong><br>See lead, stock, deal and task priorities together.</span><span>Live workspace view</span></div></div>'
  );
  output = output.replace(
    /<section class="dc-section dc-section-dark"><div class="dc-wrap"><div class="dc-head"><span class="dc-kicker">Built for results<\/span>[\s\S]*?<\/section>/,
    OPERATING_MODEL_SECTION
  );
  output = output.replace('<section class="dc-packages" id="packages">', `${MOBILE_EXPERIENCE_SECTION}<section class="dc-packages" id="packages">`);
  output = output.replace('</body>', `${LANDING_BLEND_SCRIPT}</body>`);
  return output;
}

export default {
  async fetch(request, env) {
    const response = await site.fetch(request, env);
    const type = (response.headers.get('content-type') || '').toLowerCase();
    const url = new URL(request.url);
    if (!type.includes('text/html') || url.pathname !== '/') return response;

    const html = blendLandingPage(await response.text());
    const headers = new Headers(response.headers);
    for (const name of ['content-length', 'content-encoding', 'etag']) headers.delete(name);
    headers.set('x-site-version', RELEASE);
    headers.set('x-dealershipcore-landing-blend', 'true');

    return new Response(request.method === 'HEAD' ? null : html, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};
