
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://zwppndvgxfntbddpzmka.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3cHBuZHZneGZudGJkZHB6bWthIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgxNjI0MTMsImV4cCI6MjAzMzczODQxM30.w6NwlgbQ98g6NV5Q6kynTYk9Uhm-BEVfgroh1LNOHxg"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase