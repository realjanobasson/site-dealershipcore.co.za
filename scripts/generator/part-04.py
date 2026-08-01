ontent="summary_large_image">
  <meta name="twitter:image" content="https://dealershipcore.co.za/assets/og-dealershipcore.png">
  <meta name="theme-color" content="#05070b">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <script src="/assets/boot.js"></script>
  <link rel="stylesheet" href="/assets/styles.css">
  <script type="application/ld+json">{schema}</script>
  {extra_schema or ''}
</head>
<body>
{header(active)}
<main id="main">{body}</main>
{footer()}
<script src="/assets/app.js" defer></script>
</body>
</html>'''


def page_hero(eyebrow, headline, intro, path, proof_title=None, proof_text=None, ctas=True):
    crumbs = path.strip('/').split('/')
    crumb_html = '<a href="/">Home</a><span>/</span>' + '<span>'.join([])
    segments=[]
    acc=''
    for i,c in enumerate(crumbs):
        acc += '/' + c
        label=c.replace('-',' ').title()
        if i < len(crumbs)-1 and acc == '/resources': segments.append(f'<a href="{acc}/">{label}</a><span>/</span>')
        elif i < len(crumbs)-1: segments.append(f'<span>{label}</span><span>/</span>')
        else: segments.append(f'<span>{label}</span>')
    buttons = '<div class="button-row"><a class="btn btn-primary btn-lg" href="/book-demo/">Request founding dealer access <span class="arrow">→</span></a><a class="btn btn-secondary btn-lg" href="/contact/">Talk to DealershipCore</a></div>' if ctas else ''
    proof = f'<aside class="page-proof reveal"><b>{proof_title}</b><p>{proof_text}</p></aside>' if proof_title else ''
    return f'''<section class="page-hero"><div class="container"><div class="breadcrumbs"><a href="/">Home</a><span>/</span>{''.join(segments)}</div><div class="page-hero-grid"><div><div class="eyebrow">{eyebrow}</div><h1>{headline}</h1><p class="lead">{intro}</p>{buttons}</div>{proof}</div></div></section>'''


def dashboard_visual():
    return '''<div class="hero-stage reveal"><div class="dashboard-shell"><div class="dashboard-top"><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="browser-title">DealershipCore · Owner command centre · Illustrative product view</span></div><div class="dashboard-layout"><aside class="dashboard-sidebar"><div class="dash-brand"></div><div class="side-item active"></div><div class="side-item"></div><div class="side-item"></div><div class="side-item"></div><div class="side-item"></div><div class="side-item"></div></aside><div class="dashboard-main"><div class="dash-heading"><div class="skeleton-title"></div><div class="dash-action"></div></div><div class="metrics"><div class="metric"><div class="metric-label">New leads</div><div class="metric-value">38</div><div class="metric-trend">↑ example period</div></div><div class="metric"><div class="metric-label">Reply needed</div><div class="metric-value">7</div><div class="metric-trend">Action required</div></div><div class="metric"><div class="metric-label">Pipeline value</div><div class="metric-value">R1.84m</div><div class="metric-trend">Illustrative data</div></div><div class="metric"><div class="metric-label">Stock online</div><div class="metric-value">64</div><div class="metric-trend">3 need media</div></div></div><div class="dash-grid"><div class="chart-card"><div class="chart-head"><span>Lead flow and follow-up</span><span>Last 30 days</span></div><div class="chart"><svg viewBox="0 0 500 150" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="area" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2878ff" stop-opacity=".42"/><stop offset="1" stop-color="#2878ff" stop-opacity="0"/></linearGradient></defs><path d="M0,122 C45,115 50,87 95,94 S160,115 205,74 S275,95 320,52 S390,72 430,36 S475,43 500,20 L500,150 L0,150Z" fill="url(#area)"/><path d="M0,122 C45,115 50,87 95,94 S160,115 205,74 S275,95 320,52 S390,72 430,36 S475,43 500,20" fill="none" stroke="#64a3ff" stroke-width="3"/></svg></div></div><div class="activity-card"><div class="chart-head"><span>Needs attention</span><span>Today</span></div><div class="activity-row"><div class="activity-icon"></div><div class="activity-lines"><div></div><div></div></div></div><div class="activity-row"><div class="activity-icon"></div><div class="activity-lines"><div></div><div></div></div></div><div class="activity-row"><div class="activity-icon"></div><div class="activity-lines"><div></div><div></div></div></div><div class="activity-row"><div class="activity-icon"></div><div class="activity-lines"><div></div><div></div></div></div></div></div></div></div></div><div class="floating-chip chip-1"><b>42 sec</b>Example response-time view</div><div class="floating-chip chip-2"><b>5 sources</b>One lead workflow</div></div>'''


def visual(kind):
    if kind == 'pipeline':
        return '''<div class="story-visual"><div class="pipeline"><div class="pipeline-col"><div class="pipeline-title"><span>New</span><span>8</span></div><div class="lead-card"><b>Website stock enquiry</b><small>Rover · Cape Town</small><div class="lead-bar"></div></div><div class="lead-card"><b>Vehicle valuation</b><small>BMW 320i · Bellville</small><div class="lead-bar"></div></div></div><div class="pipeline-col"><div class="pipeline-title"><span>Contacted</span><span>5</span></div><div class="lead-card"><b>Finance enquiry</b><small>Next action · 14:00</small><div class="lead-bar"></div></div><div class="lead-card"><b>Trade-in enquiry</b><small>Assigned · Lerato</small><div class="lead-bar"></div></div></div><div class="pipeline-col"><div class="pipeline-title"><span>Appointment</span><span>3</span></div><div class="lead-card"><b>Test drive booked</b><small>Tomorrow · 09:30</small><div class="lead-bar"></div></div></div></div></div>'''
    if kind == 'feed':
        return '''<div class="story-visual"><div class="feed-list"><div class="feed-item"><div class="feed-icon">V</div><div class="feed-copy"><b>Vehicle valuation lead</b><span>Vehicle details, condition and source attached</span></div><span class="status">Routed</span></div><div class="feed-item"><div class="feed-icon">W</div><div class="feed-copy"><b>Website stock enquiry</b><span>Vehicle and page context attached</span></div><span class="status">Assigned</span></div><div class="feed-item"><div class="feed-icon">F</div><div class="feed-copy"><b>Finance enquiry</b><span>Branch and campaign rules applied</span></div><span class="status">New</span></div><div class="feed-item"><div class="feed-icon">S</div><div class="feed-copy"><b>Sell-my-car campaign</b><span>Photo and ownership workflow started</span></div><span class="status">Qualified</span></div></div></div>'''
    return '''<div class="story-visual"><div class="owner-view"><div class="owner-kpi"><span>Average first response</span><b>4m 18s</b><em>Illustrative product view</em></div><div class="owner-kpi"><span>Stock needing action</span><b>7</b><em>Media, recon or ageing</em></div><div class="owner-table"><div class="table-row"><b>Branch</b><b>Pipeline</b><b>Reply needed</b></div><div class="table-row"><span>Ca