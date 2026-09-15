-- Resource Digital — esquema Supabase (Fase 2)
-- Sistemas: S10 Auth & Registry, S03/S04 lecturas, S07/S11 ingresos y retiros.
-- Ver docs/05-esquema-base-datos.md para el diagrama y decisiones.

-- Table: profiles (S10)
CREATE TABLE IF NOT EXISTS profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE,
  peaq_did TEXT UNIQUE NOT NULL,
  wallet_address TEXT,
  node_level TEXT DEFAULT 'bronze' NOT NULL
    CONSTRAINT valid_node_level CHECK (node_level IN ('bronze', 'silver', 'gold')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  PRIMARY KEY (id)
);

-- Table: node_readings (S03 -> S04)
CREATE TABLE IF NOT EXISTS node_readings (
  id BIGINT GENERATED ALWAYS AS IDENTITY,
  node_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  sensor_type TEXT NOT NULL
    CONSTRAINT valid_sensor_type CHECK (sensor_type IN ('light', 'noise', 'motion')),
  value FLOAT NOT NULL,
  zone_hash TEXT,
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  PRIMARY KEY (id)
);

CREATE INDEX IF NOT EXISTS idx_readings_node_time
  ON node_readings (node_id, timestamp DESC);

-- Table: earnings (S07 -> S11)
CREATE TABLE IF NOT EXISTS earnings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  node_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  amount_usdc DECIMAL NOT NULL CONSTRAINT positive_amount CHECK (amount_usdc > 0),
  source TEXT NOT NULL
    CONSTRAINT valid_source CHECK (source IN ('bandwidth', 'sensors', 'storage', 'compute', 'affiliates')),
  status TEXT DEFAULT 'pending' NOT NULL
    CONSTRAINT valid_status CHECK (status IN ('pending', 'paid')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_earnings_node_status
  ON earnings (node_id, status);

-- Table: withdrawals (S11)
CREATE TABLE IF NOT EXISTS withdrawals (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  node_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  amount_usdc DECIMAL NOT NULL CONSTRAINT positive_withdrawal CHECK (amount_usdc > 0),
  method TEXT NOT NULL
    CONSTRAINT valid_method CHECK (method IN ('paypal', 'spei', 'pix', 'pse', 'peaq')),
  status TEXT DEFAULT 'requested' NOT NULL
    CONSTRAINT valid_withdrawal_status CHECK (status IN ('requested', 'processing', 'completed', 'rejected')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_withdrawals_node_status
  ON withdrawals (node_id, status);

-- RLS: cada nodo solo ve y escribe sus propias filas.
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE node_readings ENABLE ROW LEVEL SECURITY;
ALTER TABLE earnings ENABLE ROW LEVEL SECURITY;
ALTER TABLE withdrawals ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users manage own profile" ON profiles;
CREATE POLICY "Users manage own profile" ON profiles
  FOR ALL USING (auth.uid() = id) WITH CHECK (auth.uid() = id);

DROP POLICY IF EXISTS "Nodes manage own readings" ON node_readings;
CREATE POLICY "Nodes manage own readings" ON node_readings
  FOR ALL USING (auth.uid() = node_id) WITH CHECK (auth.uid() = node_id);

DROP POLICY IF EXISTS "Users view own earnings" ON earnings;
CREATE POLICY "Users view own earnings" ON earnings
  FOR SELECT USING (auth.uid() = node_id);

DROP POLICY IF EXISTS "Users manage own withdrawals" ON withdrawals;
CREATE POLICY "Users manage own withdrawals" ON withdrawals
  FOR ALL USING (auth.uid() = node_id) WITH CHECK (auth.uid() = node_id);
