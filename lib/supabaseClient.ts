import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zhgoqmizxvktqgxmzfjv.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpoZ29xbWl6eHZrdHFneG16Zmp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY1NTUyMzAsImV4cCI6MjA3MjEzMTIzMH0.2D7sJU3bSItotTSS6pL2S1ldahidapXJKETrw1jfRHQ';

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Supabase URL and Anon Key must be provided.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
