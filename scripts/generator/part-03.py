ership.',
        'description': 'How to turn consumer valuation demand into structured, dealership-ready acquisition opportunities.',
        'read': '8 min read',
        'sections': [
            ('A valuation tool is not valuable because it produces a number', '<p>The business value comes from creating a clear exchange: the consumer receives useful valuation guidance while the dealership receives enough structured information to decide how and when to act.</p>'),
            ('Capture the information needed for a real next step', '<ul><li>Vehicle identity and variant</li><li>Mileage and condition</li><li>Service and ownership context</li><li>Photos where useful</li><li>Location and timing</li><li>Whether the customer wants to sell, trade or finance</li><li>Consent and preferred contact method</li></ul>'),
            ('Connect the funnel to dealer workflow', '<p>The lead should not stop in an email inbox. It should arrive with source, campaign, vehicle data and a qualification status, then route to the correct buyer or sales team. Response speed matters because the same customer may be requesting valuations elsewhere.</p>'),
            ('Use multiple domains without creating duplicate websites', '<p>Different domains can serve different search and campaign intentions, but they should feed one central platform. VehicleValuation.co.za can operate as the main public authority, while campaign and SEO domains target narrower needs. Every journey should still create a consistent DealershipCore record.</p>'),
            ('Measure outcomes beyond form completions', '<p>Track qualified vehicles, contacted sellers, inspections booked, offers made, vehicles acquired, trade-ins influenced and finance journeys created. A high form count with weak qualification is not a strong acquisition channel.</p>'),
        ],
    },
}


def logo():
    return '<a class="brand" href="/" aria-label="DealershipCore home"><span class="brand-mark" aria-hidden="true"></span><span>Dealership<em>Core</em></span></a>'


def header(active=''):
    links = ''.join(f'<a class="nav-link {"active" if active and active in href else ""}" href="{href}">{label}</a>' for label, href in NAV)
    mobile = ''.join(f'<a href="{href}">{label}</a>' for label, href in NAV)
    return f'''
<a class="skip-link" href="#main">Skip to content</a>
<div class="progress-line" aria-hidden="true"></div>
<header class="site-header">
  <div class="container nav">
    {logo()}
    <nav class="nav-links" aria-label="Primary navigation">{links}</nav>
    <div class="nav-actions">
      <a class="btn btn-secondary btn-sm" href="/contact/">Talk to us</a>
      <a class="btn btn-primary btn-sm" href="/book-demo/">Request access <span class="arrow">→</span></a>
      <button class="menu-btn" type="button" aria-label="Open navigation" aria-expanded="false"><span></span></button>
    </div>
  </div>
</header>
<nav class="mobile-panel" aria-label="Mobile navigation">{mobile}<a class="btn btn-primary" href="/book-demo/">Request founding dealer access</a></nav>
'''


def footer():
    return f'''
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">{logo()}<p>The growth operating system for modern South African dealerships—connecting stock, websites, valuation journeys, leads, follow-up and owner visibility.</p></div>
      <div class="footer-col"><h4>Platform</h4><a href="/platform/">Platform overview</a><a href="/features/lead-management/">Lead management</a><a href="/features/stock-management/">Stock management</a><a href="/features/reporting/">Reporting</a></div>
      <div class="footer-col"><h4>Solutions</h4><a href="/solutions/independent-dealers/">Independent dealers</a><a href="/solutions/dealer-groups/">Dealer groups</a><a href="/solutions/used-car-dealerships/">Used car dealers</a><a href="/solutions/dealership-websites/">Dealer websites</a></div>
      <div class="footer-col"><h4>Company</h4><a href="/about/">About</a><a href="/compare/vmg-alternative/">Compare VMG</a><a href="/pricing/">Pricing</a><a href="/contact/">Contact</a></div>
      <div class="footer-col"><h4>Ecosystem</h4><a href="https://vehiclevaluation.co.za">VehicleValuation.co.za</a><a href="https://carvaluation.co.za">CarValuation.co.za</a><a href="https://valuemycars.co.za">ValueMyCars.co.za</a><a href="https://financeyourcars.co.za">FinanceYourCars.co.za</a></div>
    </div>
    <div class="footer-bottom"><span>© 2026 DealershipCore. Product visuals and example metrics are illustrative.</span><div class="footer-bottom-links"><a href="/privacy/">Privacy</a><a href="/terms/">Terms</a><a href="/llms.txt">llms.txt</a></div></div>
  </div>
</footer>
'''


def schema_json(title, desc, path, kind='WebPage', faq=None, article=False):
    graph = [
        {'@type': 'Organization', '@id': f'{BASE}/#organization', 'name': 'DealershipCore', 'url': f'{BASE}/', 'description': 'Dealership growth and management software for South African dealerships.'},
        {'@type': 'WebSite', '@id': f'{BASE}/#website', 'url': f'{BASE}/', 'name': 'DealershipCore', 'publisher': {'@id': f'{BASE}/#organization'}},
    ]
    page = {'@type': 'Article' if article else kind, '@id': f'{BASE}{path}#webpage', 'url': f'{BASE}{path}', 'name': title, 'description': desc, 'isPartOf': {'@id': f'{BASE}/#website'}, 'about': {'@id': f'{BASE}/#organization'}}
    if article:
        page.update({'headline': title, 'author': {'@id': f'{BASE}/#organization'}, 'publisher': {'@id': f'{BASE}/#organization'}, 'datePublished': '2026-08-01', 'dateModified': '2026-08-01'})
    graph.append(page)
    if faq:
        graph.append({'@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': q, 'acceptedAnswer': {'@type': 'Answer', 'text': a}} for q,a in faq]})
    return json.dumps({'@context': 'https://schema.org', '@graph': graph}, ensure_ascii=False)


def shell(title, desc, path, body, active='', faq=None, article=False, extra_schema=None):
    canonical = f'{BASE}{path}'
    schema = schema_json(title, desc, path, faq=faq, article=article)
    return f'''<!doctype html>
<html lang="en-ZA">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>{escape(title)} | DealershipCore</title>
  <meta name="description" content="{escape(desc)}">
  <link rel="canonical" href="{canonical}">
  <meta name="robots" content="index,follow,max-image-preview:large">
  <meta property="og:type" content="{'article' if article else 'website'}">
  <meta property="og:title" content="{escape(title)} | DealershipCore">
  <meta property="og:description" content="{escape(desc)}">
  <meta property="og:url" content="{canonical}">
  <meta property="og:site_name" content="DealershipCore">
  <meta property="og:image" content="https://dealershipcore.co.za/assets/og-dealershipcore.svg">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta name="twitter:card" c