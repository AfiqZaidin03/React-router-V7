import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://xrzopygjedvrzuzmdfte.supabase.co";
// const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhyem9weWdqZWR2cnp1em1kZnRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkzOTE4NjMsImV4cCI6MjA2NDk2Nzg2M30.S2TYgTiDbSUPzt5K8qBnCB0bEVhCKK-iemJc56R75Lk";
// const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error("Missing Supabase environment variables");
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
