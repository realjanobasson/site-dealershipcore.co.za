import site from './dealershipcore-tools-final.js';

const RELEASE = 'dealershipcore-enterprise-home-2026-08-02-v1';

const TOOL_ICONS = [
  `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 15l2-6h12l2 6v4H4v-4Z"/><path d="M7 9l2-4h6l2 4M7 19v2M17 19v2"/><circle cx="8" cy="16" r="1"/><circle cx="16" cy="16" r="1"/></svg>`,
  `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10" cy="10" r="5"/><path d="m14 14 5 5M5 17h7"/></svg>`,
  `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h11l5 5-10 10-6-6V5Z"/><circle cx="9" cy="10" r="1.5"/><path d="M12 8h3M12 12h4"/></svg>`,
  `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9 7 7M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1"/><circle cx="12" cy="12" r="8"/></svg>`,
  `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h4"/></svg>`,
  `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M8 22h8M12 18v4M7 13l3-3 3 2 4-5"/></svg>`,
];

const ENTERPRISE_ICONS = {
  operating: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M3 9h18M9 9v12M13 13h4M13 17h3"/></svg>`,
  accountability: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="8" r="3"/><path d="M3 20c0-4 2.5-6 6-6 2 0 3.7.7 4.8 2"/><path d="m16 18 2 2 4-5"/></svg>`,
  connected: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 8 6 6a3 3 0 0 0-4 4l3 3a3 3 0 0 0 4 0l2-2"/><path d="m16 16 2 2a3 3 0 0 0 4-4l-3-3a3 3 0 0 0-4 0l-2 2"/><path d="m8 16 8-8"/></svg>`,
  visibility: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/><path d="m4 7 6-4 6 6 5-5"/></svg>`,
};

const ENTERPRISE_SECTION = `<section class="dce-enterprise" id="enterprise-trust"><div class="dcx-wide"><div class="dce-enterprise-head"><div class="dce-enterprise-copy"><span class="dcx-kicker">Enterprise dealership operations</span><h2>Built for control, accountability and confident growth.</h2><p>DealershipCore gives dealership teams one operating foundation for the work that affects customer experience, stock movement and commercial performance.</p></div><aside class="dce-rating-panel"><span class="dce-rating-label">Experience standard</span><div class="dce-stars" role="img" aria-label="Five-star experience standard"><span class="dce-star">★</span><span class="dce-star">★</span><span class="dce-star">★</span><span class="dce-star">★</span><span class="dce-star">★</span></div><strong>Designed around a five-star dealership experience.</strong><p>Clear setup, responsible product states, accountable workflows and a human support path.</p></aside></div><div class="dce-capability-grid"><article class="dce-capability"><span class="dce-capability-icon">${ENTERPRISE_ICONS.operating}</span><h3>One operating view</h3><p>Bring lead, customer, stock and activity context into one consistent dealership workspace.</p></article><article class="dce-capability"><span class="dce-capability-icon">${ENTERPRISE_ICONS.accountability}</span><h3>Accountable follow-up</h3><p>Make ownership, response time, next actions and overdue work visible to the right people.</p></article><article class="dce-capability"><span class="dce-capability-icon">${ENTERPRISE_ICONS.connected}</span><h3>Connected customer journeys</h3><p>Keep website, valuation, campaign and finance intent connected after the form is submitted.</p></article><article class="dce-capability"><span class="dce-capability-icon">${ENTERPRISE_ICONS.visibility}</span><h3>Management visibility</h3><p>Give managers and owners a clearer view of attention areas, workflow progress and outcomes.</p></article></div><div class="dce-trust-badges" aria-label="DealershipCore trust foundations"><span><b>✓</b> South African dealership focus</span><span><b>✓</b> Consent-aware lead capture</span><span><b>✓</b> Secure Cloudflare delivery</span><span><b>✓</b> Responsive mobile experience</span><span><b>✓</b> No invented product data</span></div></div></section>`;

const STYLE = `<style id="dce-enterprise-home-style">
.dcx-tool-icon svg{width:21px;height:21px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
.dce-enterprise{padding:104px 0;background:linear-gradient(180deg,#f7f9fc 0%,#eef3f8 100%);border-top:1px solid #e0e7ef;border-bottom:1px solid #dbe3ec}
.dce-enterprise-head{display:grid;grid-template-columns:1.15fr .85fr;gap:64px;align-items:center}
.dce-enterprise-copy h2{max-width:760px;margin:15px 0 0;color:#071426;font-size:clamp(44px,5vw,68px);line-height:1.01;letter-spacing:-3.7px;text-wrap:balance}
.dce-enterprise-copy p{max-width:720px;margin:20px 0 0;color:#607188;font-size:17px;line-height:1.72}
.dce-rating-panel{padding:30px;border:1px solid #d7e1ea;border-radius:20px;background:#fff;box-shadow:0 24px 64px rgba(7,20,38,.1)}
.dce-rating-label{display:block;color:#64758a;font-size:10px;font-weight:900;letter-spacing:.14em;text-transform:uppercase}
.dce-stars{display:flex;gap:5px;margin-top:15px}.dce-star{display:grid;place-items:center;width:38px;height:38px;background:#00b67a;color:#fff;font-size:24px;line-height:1}.dce-rating-panel strong{display:block;margin-top:20px;color:#071426;font-size:21px;line-height:1.35}.dce-rating-panel p{margin:9px 0 0;color:#6a7a8e;font-size:13px;line-height:1.6}
.dce-capability-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px;margin-top:48px}.dce-capability{min-height:260px;padding:26px;border:1px solid #d7e1ea;border-radius:16px;background:#fff;transition:transform .18s ease,box-shadow .18s ease}.dce-capability:hover{transform:translateY(-3px);box-shadow:0 18px 44px rgba(7,20,38,.09)}.dce-capability-icon{display:grid;place-items:center;width:50px;height:50px;border-radius:13px;background:#fff0f2;color:#ef1532}.dce-capability-icon svg{width:25px;height:25px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}.dce-capability h3{margin:22px 0 0;color:#071426;font-size:19px}.dce-capability p{margin:10px 0 0;color:#67788d;font-size:13px;line-height:1.62}
.dce-trust-badges{display:flex;flex-wrap:wrap;justify-content:center;gap:10px;margin-top:28px}.dce-trust-badges span{display:inline-flex;align-items:center;gap:8px;min-height:40px;padding:0 14px;border:1px solid #d5e0e9;border-radius:999px;background:#fff;color:#30435a;font-size:12px;font-weight:780}.dce-trust-badges b{display:grid;place-items:center;width:20px;height:20px;border-radius:50%;background:#e4f7ef;color:#008f61;font-size:11px}
@media(max-width:1040px){.dce-enterprise-head{grid-template-columns:1fr;gap:34px}.dce-capability-grid{grid-template-columns:1fr 1fr}}
@media(max-width:760px){.dce-enterprise{padding:74px 0}.dce-enterprise-copy h2{font-size:40px;letter-spacing:-2.2px}.dce-capability-grid{grid-template-columns:1fr}.dce-capability{min-height:auto}.dce-rating-panel{padding:23px}.dce-star{width:34px;height:34px;font-size:21px}.dce-trust-badges{justify-content:flex-start}.dce-trust-badges span{width:100%;justify-content:flex-start;border-radius:11px}}
@media(prefers-reduced-motion:reduce){.dce-capability{transition:none}}
</style>`;

function replaceToolIcons(html) {
  let output = html;
  TOOL_ICONS.forEach((icon, index) => {
    const number = String(index + 1).padStart(2, '0');
    output = output.replace(new RegExp(`<span class="dcx-tool-icon">${number}<\\/span>`, 'g'), `<span class="dcx-tool-icon">${icon}</span>`);
  });
  return output;
}

function enhanceHome(html) {
  return html.replace(/<section class="dcx-tools-section" id="tools">[\s\S]*?<\/section>/i, ENTERPRISE_SECTION);
}

function enhance(html, path) {
  let output = replaceToolIcons(html);
  if (path === '/') output = enhanceHome(output);
  if (!output.includes('id="dce-enterprise-home-style"')) output = output.replace(/<\/head>/i, `${STYLE}</head>`);
  return output;
}

export default {
  async fetch(request, env) {
    const response = await site.fetch(request, env);
    const type = (response.headers.get('content-type') || '').toLowerCase();
    if (!type.includes('text/html')) return response;
    const path = new URL(request.url).pathname.replace(/\/$/, '') || '/';
    const headers = new Headers(response.headers);
    for (const name of ['content-length', 'content-encoding', 'etag']) headers.delete(name);
    headers.set('cache-control', 'no-store, max-age=0, must-revalidate');
    headers.set('x-site-version', RELEASE);
    headers.set('x-dealershipcore-enterprise', 'trust-section-and-tool-icons');
    return new Response(request.method === 'HEAD' ? null : enhance(await response.text(), path), {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};
