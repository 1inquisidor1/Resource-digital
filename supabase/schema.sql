
-- Table: profiles (S10)
CREATE TABLE profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE,
  peaq_did TEXT UNIQUE NOT NULL,
  wallet_address TEXT,
  node_level TEXT DEFAULT 'bronze',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  PRIMARY KEY (id)
);

-- Table: node_readings (S03 -> S04)
CREATE TABLE node_readings (
  id BIGINT GENERATED ALWAYS AS IDENTITY,
  node_id UUID REFERENCES profiles(id),
  sensor_type TEXT NOT NULL,
  value FLOAT NOT NULL,
  zone_hash TEXT,
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  PRIMARY KEY (id)
);

-- Table: earnings (S07 -> S11)
CREATE TABLE earnings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  node_id UUID REFERENCES profiles(id),
  amount_usdc DECIMAL NOT NULL,
  source TEXT NOT NULL, -- 'bandwidth', 'sensors', 'storage'
  status TEXT DEFAULT 'pending', -- 'pending', 'paid'
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS Policies
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own profile" ON profiles FOR SELECT USING (auth.uid() = id);
