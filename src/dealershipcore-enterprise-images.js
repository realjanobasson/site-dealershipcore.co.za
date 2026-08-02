import site from './dealershipcore-enterprise-home.js';

const RELEASE = 'dealershipcore-enterprise-images-2026-08-02-v1';

const PEXELS = {
  showroomConsultation: 'https://images.pexels.com/photos/7144177/pexels-photo-7144177.jpeg?auto=compress&cs=tinysrgb&w=1600',
  contractReview: 'https://images.pexels.com/photos/4173199/pexels-photo-4173199.jpeg?auto=compress&cs=tinysrgb&w=1400',
  customerHandover: 'https://images.pexels.com/photos/4173194/pexels-photo-4173194.jpeg?auto=compress&cs=tinysrgb&w=1400',
  salesDiscussion: 'https://images.pexels.com/photos/7144182/pexels-photo-7144182.jpeg?auto=compress&cs=tinysrgb&w=1800',
};

const ENTERPRISE_IMAGE = `<div class="dce-enterprise-scene"><img src="${PEXELS.salesDiscussion}" alt="Dealership sales professionals discussing a vehicle inside a modern showroom" width="1500" height="720" loading="lazy" decoding="async"><div class="dce-enterprise-scene-copy"><span>Real dealership context</span><strong>Built around the showroom, buying desk and management office.</strong><p>The product story now uses automotive retail imagery that directly reflects the people and environments DealershipCore is designed to support.</p></div></div>`;

const STYLE = `<style id="dce-enterprise-images-style">
.dce-enterprise-scene{position:relative;overflow:hidden;min-height:390px;margin-top:44px;border:1px solid #d7e1ea;border-radius:20px;background:#071426;box-shadow:0 24px 64px rgba(7,20,38,.12)}
.dce-enterprise-scene img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center 46%}
.dce-enterprise-scene:after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(5,14,27,.9) 0%,rgba(5,14,27,.66) 42%,rgba(5,14,27,.12) 78%)}
.dce-enterprise-scene-copy{position:relative;z-index:2;display:flex;flex-direction:column;justify-content:center;min-height:390px;width:min(560px,62%);padding:48px;color:#fff}
.dce-enterprise-scene-copy span{color:#ff9ead;font-size:10px;font-weight:950;letter-spacing:.14em;text-transform:uppercase}
.dce-enterprise-scene-copy strong{display:block;margin-top:14px;font-size:clamp(28px,3vw,42px);line-height:1.08;letter-spacing:-1.8px}
.dce-enterprise-scene-copy p{margin:15px 0 0;color:#cad5e1;font-size:14px;line-height:1.65}
@media(max-width:760px){.dce-enterprise-scene{min-height:500px}.dce-enterprise-scene img{object-position:62% center}.dce-enterprise-scene:after{background:linear-gradient(180deg,rgba(5,14,27,.18) 0%,rgba(5,14,27,.9) 68%)}.dce-enterprise-scene-copy{justify-content:flex-end;width:100%;min-height:500px;padding:28px}.dce-enterprise-scene-copy strong{font-size:31px}}
</style>`;

function replaceIrrelevantImages(html) {
  return html
    .replace('https://images.unsplash.com/photo-1560253414-f65d1f5a1a37?auto=format&fit=crop&w=1500&q=84', PEXELS.showroomConsultation)
    .replace('alt="Dealership professional inspecting a vehicle"', 'alt="Dealership salesperson helping customers compare a vehicle in a modern showroom"')
    .replace('https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=82', PEXELS.customerHandover)
    .replace('alt="Dealership team reviewing business performance"', 'alt="Dealership professional reviewing a vehicle purchase agreement with a customer"')
    .replace('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1500&q=85', PEXELS.contractReview)
    .replace('alt="Premium vehicle in a modern dealership environment"', 'alt="Dealership consultant and customer reviewing vehicle documents in a showroom"');
}

function enhanceHome(html) {
  let output = replaceIrrelevantImages(html);
  if (!output.includes('class="dce-enterprise-scene"')) {
    output = output.replace('<div class="dce-capability-grid">', `${ENTERPRISE_IMAGE}<div class="dce-capability-grid">`);
  }
  if (!output.includes('https://images.pexels.com')) {
    output = output.replace('</head>', '<link rel="preconnect" href="https://images.pexels.com"></head>');
  }
  return output;
}

export default {
  async fetch(request, env) {
    const response = await site.fetch(request, env);
    const type = (response.headers.get('content-type') || '').toLowerCase();
    if (!type.includes('text/html')) return response;
    const path = new URL(request.url).pathname.replace(/\/$/, '') || '/';
    let html = await response.text();
    if (path === '/') html = enhanceHome(html);
    if (!html.includes('id="dce-enterprise-images-style"')) html = html.replace('</head>', `${STYLE}</head>`);
    const headers = new Headers(response.headers);
    for (const name of ['content-length', 'content-encoding', 'etag']) headers.delete(name);
    headers.set('cache-control', 'no-store, max-age=0, must-revalidate');
    headers.set('x-site-version', RELEASE);
    headers.set('x-dealershipcore-imagery', 'dealership-specific');
    return new Response(request.method === 'HEAD' ? null : html, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};
