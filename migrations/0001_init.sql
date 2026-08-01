CREATE TABLE IF NOT EXISTS leads (
  id TEXT PRIMARY KEY,
  created_at TEXT NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  dealership TEXT NOT NULL,
  role TEXT,
  branches TEXT,
  stock_size TEXT,
  current_system TEXT,
  challenge TEXT,
  interest TEXT,
  source TEXT NOT NULL DEFAULT 'website',
  page TEXT,
  referrer TEXT,
  utm_source TEXT,
  utm_campaign TEXT,
  country TEXT,
  city TEXT,
  status TEXT NOT NULL DEFAULT 'new',
  assigned_to TEXT,
  notes TEXT,
  updated_at TEXT
);

CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
