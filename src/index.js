const json = (data, status = 200, headers = {}) => new Response(JSON.stringify(data), {
  status,
  headers: {
    'content-type': 'application/json; charset=utf-8',
    'cache-control': 'no-store',
    ...headers,
  },
});

const clean = (value, max = 500) => String(value ?? '').trim().slice(0, max);
const validEmail = value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

async function saveLead(payload, request, env) {
  const id = crypto.randomUUID();
  const createdAt = new Date().toISOString();
  const cf = request.cf || {};
  const row = {
    id,
    created_at: createdAt,
    name: clean(payload.name, 120),
    email: clean(payload.email, 180).toLowerCase(),
    phone: clean(payload.phone, 60),
    dealership: clean(payload.dealership, 180),
    role: clean(payload.role, 100),
    branches: clean(payload.branches, 40),
    stock_size: clean(payload.stock_size, 60),
    current_system: clean(payload.current_system, 150),
    challenge: clean(payload.challenge, 1500),
    interest: clean(payload.interest, 300),
    source: clean(payload.source || 'website', 100),
    page: clean(payload.page, 300),
    referrer: clean(payload.referrer, 500),
    utm_source: clean(payload.utm_source, 120),
    utm_campaign: clean(payload.utm_campaign, 180),
    country: clean(cf.country, 10),
    city: clean(cf.city, 120),
    status: 'new',
  };

  let persisted = false;

  if (env.DB) {
    await env.DB.prepare(`
      INSERT INTO leads (
        id, created_at, name, email, phone, dealership, role, branches,
        stock_size, current_system, challenge, interest, source, page,
        referrer, utm_source, utm_campaign, country, city, status
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(
      row.id, row.created_at, row.name, row.email, row.phone, row.dealership,
      row.role, row.branches, row.stock_size, row.current_system, row.challenge,
      row.interest, row.source, row.page, row.referrer, row.utm_source,
      row.utm_campaign, row.country, row.city, row.status
    ).run();
    persisted = true;
  }

  if (env.LEAD_WEBHOOK_URL) {
    try {
      const webhookResponse = await fetch(env.LEAD_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          ...(env.LEAD_WEBHOOK_SECRET ? { 'x-dealershipcore-secret': env.LEAD_WEBHOOK_SECRET } : {}),
        },
        body: JSON.stringify(row),
      });
      if (!webhookResponse.ok) throw new Error(`Webhook returned ${webhookResponse.status}`);
      persisted = true;
    } catch (error) {
      if (!persisted) throw error;
      console.error('Lead webhook failed after D1 persistence', error);
    }
  }

  if (!persisted) throw new Error('Lead storage is not configured. Bind D1 or set LEAD_WEBHOOK_URL.');
  return row;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/api/health') {
      return json({ ok: true, service: 'dealershipcore', time: new Date().toISOString() });
    }

    if (url.pathname === '/api/leads' && request.method === 'POST') {
      const contentType = request.headers.get('content-type') || '';
      if (!contentType.includes('application/json')) return json({ error: 'Send JSON data.' }, 415);

      let payload;
      try { payload = await request.json(); }
      catch { return json({ error: 'The submitted form data is invalid.' }, 400); }

      if (clean(payload.website, 200)) return json({ ok: true, message: 'Thanks — your request has been received.' });
      if (!clean(payload.name, 120)) return json({ error: 'Please enter your name.' }, 422);
      if (!validEmail(clean(payload.email, 180))) return json({ error: 'Please enter a valid email address.' }, 422);
      if (!clean(payload.dealership, 180)) return json({ error: 'Please enter your dealership name.' }, 422);
      if (payload.consent !== 'on' && payload.consent !== true && payload.consent !== 'true') {
        return json({ error: 'Please confirm that we may contact you about this request.' }, 422);
      }

      try {
        const lead = await saveLead(payload, request, env);
        return json({ ok: true, id: lead.id, message: 'Thanks — your request has been received. We will contact you to arrange the next step.' }, 201);
      } catch (error) {
        console.error('Lead submission failed', error);
        return json({ error: 'We could not save your request. Please try again.' }, 500);
      }
    }

    if (url.pathname.startsWith('/api/')) return json({ error: 'Not found.' }, 404);
    return env.ASSETS.fetch(request);
  },
};
