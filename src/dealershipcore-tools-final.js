import site from './dealershipcore-tools-seo.js';

const RELEASE = 'dealershipcore-tools-final-2026-08-02-v2';

const POLISH = `<style id="dcx-tools-final-polish">
.dcx-final-skip{position:fixed;left:16px;top:-80px;z-index:1200;padding:12px 16px;border-radius:8px;background:#fff;color:#071426;box-shadow:0 10px 28px rgba(7,20,38,.18);font-weight:850;transition:top .2s}.dcx-final-skip:focus{top:16px}
html[data-dcx-tool-page] .footer{padding:64px 0 28px;background:#071426;color:#aebac8}
html[data-dcx-tool-page] .footer-grid{display:grid;grid-template-columns:1.6fr repeat(4,1fr);gap:40px}
html[data-dcx-tool-page] .footer p{max-width:330px;font-size:12px;line-height:1.65}
html[data-dcx-tool-page] .footer h4{margin:0 0 15px;color:#fff;font-size:12px}
html[data-dcx-tool-page] .footer a{display:block;margin:9px 0;font-size:12px}
html[data-dcx-tool-page] .footer .dcx-brand{display:flex;margin:0;color:#fff}
html[data-dcx-tool-page] .footer .dcx-brand-rule{background:#465365}
html[data-dcx-tool-page] .footer-bottom{display:flex;justify-content:space-between;gap:20px;margin-top:44px;padding-top:22px;border-top:1px solid #223246;font-size:11px}
@media(max-width:760px){html[data-dcx-tool-page] .footer-grid{grid-template-columns:1fr 1fr}html[data-dcx-tool-page] .footer-grid>div:first-child{grid-column:1/-1}html[data-dcx-tool-page] .footer-bottom{display:grid}}
</style>`;

function polish(html, path) {
  let output = html;
  if (path === '/free-dealership-audit') {
    const headers = [...output.matchAll(/<header class="header">[\s\S]*?<\/header>/gi)];
    if (headers.length) output = output.replace(/<header class="header">[\s\S]*?<\/header>/i, '');
  }
  if (path === '/tools' || path.startsWith('/tools/')) {
    output = output.replace(/<html lang="en-ZA">/i, '<html lang="en-ZA" data-dcx-tool-page>');
    output = output.replace(/<main class="dcx-tool-page">/i, '<main id="main" class="dcx-tool-page">');
  }
  if (!output.includes('class="skip-link"') && !output.includes('class="dcx-final-skip"')) {
    output = output.replace(/<body>/i, '<body><a class="dcx-final-skip" href="#main">Skip to content</a>');
  }
  if (!output.includes('id="dcx-tools-final-polish"')) output = output.replace(/<\/head>/i, `${POLISH}</head>`);
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
    headers.set('x-dealershipcore-final-polish', 'header-tools-pages-seo');
    return new Response(request.method === 'HEAD' ? null : polish(await response.text(), path), {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};
