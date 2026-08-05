import site from './dealershipcore-polished-home.js';

const RELEASE = 'dealershipcore-interactive-dashboard-2026-08-05-v1';

const DASHBOARD_STYLE = `<style id="dc-interactive-dashboard-v1">
.dc-live-dashboard{overflow:hidden;border:1px solid #242b35;border-radius:12px;background:#07090d;color:#fff;box-shadow:0 30px 90px rgba(4,7,12,.28)}
.dc-live-dashboard *{box-sizing:border-box}
.dc-live-topbar{display:flex;align-items:center;justify-content:space-between;gap:18px;min-height:58px;padding:0 17px;border-bottom:1px solid #202631;background:#0b0f15}
.dc-live-brand{display:flex;align-items:center;gap:10px;font-size:12px;font-weight:900;letter-spacing:.02em}.dc-live-brand-mark{display:grid;place-items:center;width:28px;height:28px;border-radius:7px;background:#f11234;color:#fff;font-size:10px}.dc-live-status{display:flex;align-items:center;gap:8px;color:#8f9aaa;font-size:10px}.dc-live-status i{width:8px;height:8px;border-radius:50%;background:#37d48b;box-shadow:0 0 0 5px rgba(55,212,139,.11)}
.dc-live-body{display:grid;grid-template-columns:154px 1fr;min-height:495px}
.dc-live-tabs{padding:13px 10px;border-right:1px solid #202631;background:#0a0d12}.dc-live-tabs-label{display:block;padding:7px 10px 10px;color:#667181;font-size:9px;font-weight:900;letter-spacing:.14em;text-transform:uppercase}.dc-live-tab{display:flex;align-items:center;gap:9px;width:100%;min-height:39px;margin:2px 0;padding:0 11px;border:0;border-radius:7px;background:transparent;color:#8e99a8;text-align:left;font:800 11px/1 Inter,ui-sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif;cursor:pointer;transition:.18s ease}.dc-live-tab span:first-child{display:grid;place-items:center;width:20px;height:20px;border:1px solid #29313d;border-radius:6px;font-size:9px}.dc-live-tab:hover{background:#11161e;color:#fff}.dc-live-tab[aria-selected="true"]{background:linear-gradient(135deg,#f11234,#c90020);color:#fff;box-shadow:0 10px 28px rgba(241,18,52,.22)}.dc-live-tab[aria-selected="true"] span:first-child{border-color:rgba(255,255,255,.35)}
.dc-live-main{min-width:0;padding:18px;background:linear-gradient(145deg,#080b10,#0b0f15)}.dc-live-head{display:flex;align-items:flex-start;justify-content:space-between;gap:16px;margin-bottom:16px}.dc-live-head h3{margin:0;color:#fff;font-size:17px;letter-spacing:-.35px}.dc-live-head p{margin:5px 0 0;color:#778294;font-size:10px}.dc-demo-pill{display:inline-flex;align-items:center;min-height:27px;padding:0 10px;border:1px solid #2c3440;border-radius:6px;background:#10151c;color:#a9b2bf;font-size:9px;font-weight:900;letter-spacing:.08em;text-transform:uppercase}
.dc-live-panel{display:none}.dc-live-panel.is-active{display:block;animation:dcDashboardIn .22s ease both}@keyframes dcDashboardIn{from{opacity:0;transform:translateY(5px)}to{opacity:1;transform:none}}
.dc-metric-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:9px}.dc-metric-card{min-width:0;padding:13px;border:1px solid #202732;border-radius:8px;background:#10151c}.dc-metric-card small{display:block;color:#788395;font-size:9px;font-weight:800}.dc-metric-card strong{display:block;margin-top:8px;color:#fff;font-size:20px;letter-spacing:-.8px}.dc-metric-card em{display:block;margin-top:4px;color:#42d492;font-size:8px;font-style:normal}.dc-metric-card.is-alert em{color:#ff5068}
.dc-overview-grid{display:grid;grid-template-columns:1.45fr 1fr;gap:9px;margin-top:9px}.dc-dash-box{min-width:0;padding:14px;border:1px solid #202732;border-radius:8px;background:#10151c}.dc-dash-box-head{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:12px}.dc-dash-box-head strong{font-size:11px}.dc-dash-box-head span{color:#707b8c;font-size:8px}.dc-line-chart{height:156px;padding:8px 3px 0;background:repeating-linear-gradient(to bottom,transparent 0,transparent 37px,rgba(255,255,255,.045) 38px)}.dc-line-chart svg{width:100%;height:100%}.dc-line-chart path.main{filter:drop-shadow(0 5px 8px rgba(241,18,52,.25))}.dc-attention-list{display:grid;gap:7px}.dc-attention-row{display:grid;grid-template-columns:25px 1fr auto;gap:9px;align-items:center;padding:9px;border:1px solid #222a35;border-radius:7px;background:#0b0f15}.dc-attention-row b{display:grid;place-items:center;width:24px;height:24px;border-radius:6px;background:#191f28;color:#ff405a;font-size:9px}.dc-attention-row strong{display:block;font-size:9px}.dc-attention-row span{display:block;margin-top:3px;color:#697587;font-size:8px}.dc-attention-row i{color:#f11234;font-style:normal;font-size:12px}
.dc-table{overflow:hidden;border:1px solid #202732;border-radius:8px}.dc-table-head,.dc-table-row{display:grid;grid-template-columns:1.15fr 1.3fr .8fr .8fr .4fr;gap:10px;align-items:center;padding:11px 13px}.dc-table-head{background:#121821;color:#707b8b;font-size:8px;font-weight:900;letter-spacing:.08em;text-transform:uppercase}.dc-table-row{border-top:1px solid #202732;background:#0d1218;color:#dce1e8;font-size:9px}.dc-table-row:hover{background:#121820}.dc-source-cell{display:flex;align-items:center;gap:9px}.dc-source-icon{display:grid;place-items:center;width:27px;height:27px;border-radius:7px;background:#181f29;color:#ff405a;font-size:9px;font-weight:900}.dc-table-row small{display:block;margin-top:3px;color:#697587}.dc-status-chip{display:inline-flex;justify-content:center;padding:5px 7px;border-radius:5px;background:rgba(241,18,52,.12);color:#ff5269;font-size:8px;font-weight:900}.dc-status-chip.is-green{background:rgba(55,212,139,.1);color:#46d797}.dc-status-chip.is-amber{background:rgba(245,174,49,.11);color:#efb54c}
.dc-stock-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:9px}.dc-stock-card{padding:13px;border:1px solid #202732;border-radius:8px;background:#10151c}.dc-stock-visual{position:relative;height:84px;overflow:hidden;border-radius:6px;background:linear-gradient(145deg,#202630,#0d1117)}.dc-stock-visual:before{content:"";position:absolute;left:18%;right:18%;bottom:22px;height:22px;border-radius:16px 23px 7px 7px;background:linear-gradient(135deg,#4a5565,#151b24);box-shadow:0 12px 18px rgba(0,0,0,.35)}.dc-stock-visual:after{content:"";position:absolute;left:27%;right:27%;bottom:40px;height:13px;border-radius:14px 17px 3px 3px;background:#2c3542;transform:skewX(-13deg)}.dc-stock-card h4{margin:11px 0 0;font-size:10px}.dc-stock-card p{margin:4px 0 0;color:#778294;font-size:8px}.dc-stock-meta{display:flex;justify-content:space-between;gap:8px;margin-top:11px}.dc-stock-meta span{padding:5px 7px;border-radius:5px;background:#171d26;color:#9da7b5;font-size:7px;font-weight:800}.dc-stock-meta span:first-child{color:#46d797}
.dc-pipeline{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}.dc-stage{min-width:0;padding:10px;border:1px solid #202732;border-radius:8px;background:#0d1218}.dc-stage-head{display:flex;justify-content:space-between;gap:8px;margin-bottom:9px;color:#dce1e7;font-size:9px;font-weight:900}.dc-stage-head span{color:#697587}.dc-deal-card{margin-top:7px;padding:10px;border:1px solid #252d38;border-radius:7px;background:#141a22}.dc-deal-card strong{display:block;font-size:9px}.dc-deal-card span{display:block;margin-top:4px;color:#778294;font-size:8px}.dc-deal-card b{display:block;margin-top:9px;color:#ff405a;font-size:10px}
.dc-task-list{display:grid;gap:8px}.dc-task-item{display:grid;grid-template-columns:30px 1fr auto;gap:11px;align-items:center;padding:12px;border:1px solid #202732;border-radius:8px;background:#10151c}.dc-task-check{display:grid;place-items:center;width:29px;height:29px;border:1px solid #333c49;border-radius:7px;color:#687486;font-size:11px}.dc-task-item:hover .dc-task-check{border-color:#f11234;color:#f11234}.dc-task-item strong{display:block;font-size:10px}.dc-task-item span{display:block;margin-top:4px;color:#717d8e;font-size:8px}.dc-task-time{padding:5px 7px;border-radius:5px;background:#181f28;color:#a8b2c0;font-size:8px;font-weight:900}
.dc-report-grid{display:grid;grid-template-columns:1.2fr .8fr;gap:9px}.dc-bar-list{display:grid;gap:11px}.dc-bar-row{display:grid;grid-template-columns:82px 1fr 26px;gap:9px;align-items:center;font-size:8px}.dc-bar-row span:first-child{color:#a8b2bf}.dc-bar-track{height:7px;overflow:hidden;border-radius:99px;background:#202732}.dc-bar-fill{height:100%;border-radius:inherit;background:linear-gradient(90deg,#f11234,#ff4c65)}.dc-report-score{display:grid;place-items:center;min-height:185px;text-align:center}.dc-score-ring{display:grid;place-items:center;width:106px;height:106px;border-radius:50%;background:conic-gradient(#f11234 0 76%,#202732 76% 100%)}.dc-score-ring:before{content:"";width:76px;height:76px;border-radius:50%;background:#10151c}.dc-score-number{position:absolute;font-size:23px;font-weight:900}.dc-score-label{margin-top:12px;color:#8995a5;font-size:9px;line-height:1.5}
@media(max-width:1050px){.dc-live-body{grid-template-columns:132px 1fr}.dc-metric-grid{grid-template-columns:repeat(2,1fr)}.dc-overview-grid,.dc-report-grid{grid-template-columns:1fr}.dc-stock-grid{grid-template-columns:1fr 1fr}.dc-pipeline{grid-template-columns:1fr 1fr}}
@media(max-width:680px){.dc-live-dashboard{border-radius:9px}.dc-live-topbar{padding:0 13px}.dc-live-status span{display:none}.dc-live-body{display:block;min-height:auto}.dc-live-tabs{display:flex;gap:5px;padding:9px;border-right:0;border-bottom:1px solid #202631;overflow-x:auto;scrollbar-width:none}.dc-live-tabs::-webkit-scrollbar{display:none}.dc-live-tabs-label{display:none}.dc-live-tab{flex:0 0 auto;width:auto;min-height:35px;padding:0 10px}.dc-live-main{padding:13px}.dc-live-head{align-items:center}.dc-live-head p{display:none}.dc-metric-grid{grid-template-columns:1fr 1fr}.dc-overview-grid{grid-template-columns:1fr}.dc-table{overflow-x:auto}.dc-table-head,.dc-table-row{min-width:620px}.dc-stock-grid,.dc-pipeline{grid-template-columns:1fr}.dc-report-grid{grid-template-columns:1fr}.dc-line-chart{height:135px}}
@media(prefers-reduced-motion:reduce){.dc-live-panel.is-active{animation:none}.dc-live-tab{transition:none}}
</style>`;

const DASHBOARD_HTML = `<div class="dc-live-dashboard" data-dc-dashboard>
  <div class="dc-live-topbar"><div class="dc-live-brand"><span class="dc-live-brand-mark">DC</span><span>DealershipCore workspace</span></div><div class="dc-live-status"><i></i><span>Illustrative demo data</span></div></div>
  <div class="dc-live-body">
    <div class="dc-live-tabs" role="tablist" aria-label="DealershipCore dashboard views"><span class="dc-live-tabs-label">Workspace</span>
      <button class="dc-live-tab" type="button" role="tab" id="dc-tab-overview" aria-controls="dc-panel-overview" aria-selected="true" data-dashboard-tab="overview"><span>O</span><span>Overview</span></button>
      <button class="dc-live-tab" type="button" role="tab" id="dc-tab-leads" aria-controls="dc-panel-leads" aria-selected="false" data-dashboard-tab="leads"><span>L</span><span>Leads</span></button>
      <button class="dc-live-tab" type="button" role="tab" id="dc-tab-stock" aria-controls="dc-panel-stock" aria-selected="false" data-dashboard-tab="stock"><span>S</span><span>Stock</span></button>
      <button class="dc-live-tab" type="button" role="tab" id="dc-tab-deals" aria-controls="dc-panel-deals" aria-selected="false" data-dashboard-tab="deals"><span>D</span><span>Deals</span></button>
      <button class="dc-live-tab" type="button" role="tab" id="dc-tab-tasks" aria-controls="dc-panel-tasks" aria-selected="false" data-dashboard-tab="tasks"><span>T</span><span>Tasks</span></button>
      <button class="dc-live-tab" type="button" role="tab" id="dc-tab-reports" aria-controls="dc-panel-reports" aria-selected="false" data-dashboard-tab="reports"><span>R</span><span>Reports</span></button>
    </div>
    <div class="dc-live-main">
      <div class="dc-live-head"><div><h3 data-dashboard-title>Dealership overview</h3><p data-dashboard-description>Everything requiring attention in one operating view.</p></div><span class="dc-demo-pill">Demo workspace</span></div>
      <section class="dc-live-panel is-active" role="tabpanel" id="dc-panel-overview" aria-labelledby="dc-tab-overview" data-dashboard-panel="overview">
        <div class="dc-metric-grid"><div class="dc-metric-card"><small>New leads</small><strong>42</strong><em>Demo value</em></div><div class="dc-metric-card"><small>Pipeline value</small><strong>R8.4M</strong><em>Demo value</em></div><div class="dc-metric-card"><small>Stock online</small><strong>118</strong><em>Demo value</em></div><div class="dc-metric-card is-alert"><small>Reply needed</small><strong>7</strong><em>3 overdue</em></div></div>
        <div class="dc-overview-grid"><div class="dc-dash-box"><div class="dc-dash-box-head"><strong>Lead activity</strong><span>Last 7 days</span></div><div class="dc-line-chart"><svg viewBox="0 0 500 150" preserveAspectRatio="none" aria-hidden="true"><path d="M0 126 C48 116 64 87 108 101 S174 120 220 76 S302 91 345 57 S418 71 500 22 L500 150 L0 150Z" fill="rgba(241,18,52,.08)"/><path class="main" d="M0 126 C48 116 64 87 108 101 S174 120 220 76 S302 91 345 57 S418 71 500 22" fill="none" stroke="#f11234" stroke-width="3"/></svg></div></div><div class="dc-dash-box"><div class="dc-dash-box-head"><strong>Needs attention</strong><span>Today</span></div><div class="dc-attention-list"><div class="dc-attention-row"><b>1</b><div><strong>Assign new leads</strong><span>3 demo items</span></div><i>→</i></div><div class="dc-attention-row"><b>2</b><div><strong>Complete stock media</strong><span>7 demo items</span></div><i>→</i></div><div class="dc-attention-row"><b>3</b><div><strong>Finance follow-up</strong><span>2 demo items</span></div><i>→</i></div><div class="dc-attention-row"><b>4</b><div><strong>Review ageing stock</strong><span>5 demo items</span></div><i>→</i></div></div></div></div>
      </section>
      <section class="dc-live-panel" role="tabpanel" id="dc-panel-leads" aria-labelledby="dc-tab-leads" data-dashboard-panel="leads" hidden><div class="dc-table"><div class="dc-table-head"><span>Opportunity</span><span>Context</span><span>Owner</span><span>Status</span><span></span></div><div class="dc-table-row"><div class="dc-source-cell"><span class="dc-source-icon">W</span><div><strong>Website enquiry</strong><small>2 minutes ago</small></div></div><div>2022 double-cab enquiry<small>Website source</small></div><div>Sales team</div><div><span class="dc-status-chip">New</span></div><div>→</div></div><div class="dc-table-row"><div class="dc-source-cell"><span class="dc-source-icon">V</span><div><strong>Valuation lead</strong><small>18 minutes ago</small></div></div><div>Trade-in valuation<small>Valuation tool</small></div><div>Buying desk</div><div><span class="dc-status-chip is-amber">Contacted</span></div><div>→</div></div><div class="dc-table-row"><div class="dc-source-cell"><span class="dc-source-icon">F</span><div><strong>Finance enquiry</strong><small>1 hour ago</small></div></div><div>Vehicle finance request<small>Finance campaign</small></div><div>F&amp;I team</div><div><span class="dc-status-chip is-green">Qualified</span></div><div>→</div></div><div class="dc-table-row"><div class="dc-source-cell"><span class="dc-source-icon">C</span><div><strong>Campaign lead</strong><small>Today</small></div></div><div>Used vehicle campaign<small>Paid social</small></div><div>Unassigned</div><div><span class="dc-status-chip">Action needed</span></div><div>→</div></div></div></section>
      <section class="dc-live-panel" role="tabpanel" id="dc-panel-stock" aria-labelledby="dc-tab-stock" data-dashboard-panel="stock" hidden><div class="dc-stock-grid"><article class="dc-stock-card"><div class="dc-stock-visual"></div><h4>Retail-ready vehicle</h4><p>Media complete · Pricing reviewed</p><div class="dc-stock-meta"><span>Ready</span><span>12 days</span></div></article><article class="dc-stock-card"><div class="dc-stock-visual"></div><h4>Vehicle in recon</h4><p>Workshop action still required</p><div class="dc-stock-meta"><span style="color:#efb54c">In recon</span><span>4 days</span></div></article><article class="dc-stock-card"><div class="dc-stock-visual"></div><h4>Ageing stock item</h4><p>Customer interest and pricing review</p><div class="dc-stock-meta"><span style="color:#ff5269">Review</span><span>62 days</span></div></article></div></section>
      <section class="dc-live-panel" role="tabpanel" id="dc-panel-deals" aria-labelledby="dc-tab-deals" data-dashboard-panel="deals" hidden><div class="dc-pipeline"><div class="dc-stage"><div class="dc-stage-head"><strong>Qualified</strong><span>3</span></div><div class="dc-deal-card"><strong>Vehicle enquiry</strong><span>Test drive booked</span><b>R420k</b></div><div class="dc-deal-card"><strong>Trade-in opportunity</strong><span>Valuation complete</span><b>R310k</b></div></div><div class="dc-stage"><div class="dc-stage-head"><strong>Proposal</strong><span>2</span></div><div class="dc-deal-card"><strong>Retail deal</strong><span>Quote sent</span><b>R685k</b></div></div><div class="dc-stage"><div class="dc-stage-head"><strong>Finance</strong><span>2</span></div><div class="dc-deal-card"><strong>Finance review</strong><span>Documents received</span><b>R520k</b></div></div><div class="dc-stage"><div class="dc-stage-head"><strong>Delivery</strong><span>1</span></div><div class="dc-deal-card"><strong>Approved deal</strong><span>Handover scheduled</span><b>R745k</b></div></div></div></section>
      <section class="dc-live-panel" role="tabpanel" id="dc-panel-tasks" aria-labelledby="dc-tab-tasks" data-dashboard-panel="tasks" hidden><div class="dc-task-list"><div class="dc-task-item"><span class="dc-task-check">✓</span><div><strong>Call back new web enquiry</strong><span>Linked to vehicle and customer context</span></div><span class="dc-task-time">Today 10:30</span></div><div class="dc-task-item"><span class="dc-task-check">✓</span><div><strong>Approve recon estimate</strong><span>Linked to stock item and branch</span></div><span class="dc-task-time">Today 12:00</span></div><div class="dc-task-item"><span class="dc-task-check">✓</span><div><strong>Follow up finance documents</strong><span>Linked to active deal and F&amp;I owner</span></div><span class="dc-task-time">Today 14:00</span></div><div class="dc-task-item"><span class="dc-task-check">✓</span><div><strong>Review vehicles over 60 days</strong><span>Linked to ageing stock report</span></div><span class="dc-task-time">Tomorrow</span></div></div></section>
      <section class="dc-live-panel" role="tabpanel" id="dc-panel-reports" aria-labelledby="dc-tab-reports" data-dashboard-panel="reports" hidden><div class="dc-report-grid"><div class="dc-dash-box"><div class="dc-dash-box-head"><strong>Opportunity sources</strong><span>Demo distribution</span></div><div class="dc-bar-list"><div class="dc-bar-row"><span>Website</span><div class="dc-bar-track"><div class="dc-bar-fill" style="width:82%"></div></div><b>34%</b></div><div class="dc-bar-row"><span>Valuation tools</span><div class="dc-bar-track"><div class="dc-bar-fill" style="width:68%"></div></div><b>28%</b></div><div class="dc-bar-row"><span>Campaigns</span><div class="dc-bar-track"><div class="dc-bar-fill" style="width:49%"></div></div><b>21%</b></div><div class="dc-bar-row"><span>Referrals</span><div class="dc-bar-track"><div class="dc-bar-fill" style="width:36%"></div></div><b>17%</b></div></div></div><div class="dc-dash-box dc-report-score"><div style="position:relative"><div class="dc-score-ring"></div><div class="dc-score-number">76%</div></div><div class="dc-score-label">Demo follow-up completion<br>across assigned opportunities</div></div></div></section>
    </div>
  </div>
</div>`;

const DASHBOARD_SCRIPT = `<script id="dc-interactive-dashboard-script">
(() => {
  const dashboard = document.querySelector('[data-dc-dashboard]');
  if (!dashboard) return;
  const tabs = Array.from(dashboard.querySelectorAll('[data-dashboard-tab]'));
  const panels = Array.from(dashboard.querySelectorAll('[data-dashboard-panel]'));
  const title = dashboard.querySelector('[data-dashboard-title]');
  const description = dashboard.querySelector('[data-dashboard-description]');
  const copy = {
    overview: ['Dealership overview', 'Everything requiring attention in one operating view.'],
    leads: ['Lead management', 'See source, context, owner, status and next action together.'],
    stock: ['Stock visibility', 'Review readiness, recon, ageing and attention areas.'],
    deals: ['Sales pipeline', 'Follow opportunities from qualification through delivery.'],
    tasks: ['Team accountability', 'Keep follow-up and operational work visible and owned.'],
    reports: ['Reports and insights', 'Connect dealership activity to practical management signals.']
  };
  const activate = (name, focus = false) => {
    tabs.forEach(tab => {
      const active = tab.dataset.dashboardTab === name;
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
      if (active && focus) tab.focus();
    });
    panels.forEach(panel => {
      const active = panel.dataset.dashboardPanel === name;
      panel.classList.toggle('is-active', active);
      panel.hidden = !active;
    });
    const text = copy[name] || copy.overview;
    if (title) title.textContent = text[0];
    if (description) description.textContent = text[1];
  };
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activate(tab.dataset.dashboardTab));
    tab.addEventListener('keydown', event => {
      if (!['ArrowRight','ArrowDown','ArrowLeft','ArrowUp','Home','End'].includes(event.key)) return;
      event.preventDefault();
      let next = index;
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index - 1 + tabs.length) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      activate(tabs[next].dataset.dashboardTab, true);
    });
  });
  activate('overview');
})();
</script>`;

function addInteractiveDashboard(html) {
  if (html.includes('id="dc-interactive-dashboard-v1"')) return html;
  let output = html.replace('</head>', `${DASHBOARD_STYLE}</head>`);
  output = output.replace(
    '<div class="dc-product-card"><img src="/assets/dealershipcore-product-devices.webp" alt="DealershipCore dashboard on laptop and mobile"></div>',
    `<div class="dc-product-card">${DASHBOARD_HTML}</div>`
  );
  output = output.replace('</body>', `${DASHBOARD_SCRIPT}</body>`);
  return output;
}

export default {
  async fetch(request, env) {
    const response = await site.fetch(request, env);
    const type = (response.headers.get('content-type') || '').toLowerCase();
    const url = new URL(request.url);
    if (!type.includes('text/html') || url.pathname !== '/') return response;

    const html = addInteractiveDashboard(await response.text());
    const headers = new Headers(response.headers);
    for (const name of ['content-length', 'content-encoding', 'etag']) headers.delete(name);
    headers.set('x-site-version', RELEASE);
    headers.set('x-dealershipcore-interactive-dashboard', 'true');

    return new Response(request.method === 'HEAD' ? null : html, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};
