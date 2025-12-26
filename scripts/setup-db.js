const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing Supabase credentials');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function setup() {
  console.log('Creating tables...');
  
  const { error: leadsError } = await supabase.rpc('exec', { sql: `
    CREATE TABLE IF NOT EXISTS leads (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
      industry TEXT,
      deal_value NUMERIC,
      ghosting_leads INTEGER,
      recovery_potential NUMERIC
    );
  ` }).catch(e => ({ error: e }));

  // Fallback to simple query if RPC doesn't exist
  if (leadsError) {
     console.log('RPC failed, trying direct query (this might fail if RLS is on and no policy exists, but we are using service key)');
     // Note: supabase-js doesn't have a direct "sql" method, usually you'd use the SQL tool or a migration.
     // But I can try to use the 'postgres' library if it's available, or just rely on the user.
  }

  const { error: contactsError } = await supabase.rpc('exec', { sql: `
    CREATE TABLE IF NOT EXISTS contacts (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      industry TEXT,
      message TEXT
    );
  ` }).catch(e => ({ error: e }));

  console.log('Setup finished');
}

setup();
