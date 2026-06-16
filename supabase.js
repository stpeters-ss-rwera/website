import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://xmwhenrhsfkzhtzugami.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhtd2hlbnJoc2Zremh0enVnYW1pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE2MzI2NzgsImV4cCI6MjA5NzIwODY3OH0.9GWqUkVkUIK4sPmdoBYRJdGzHm_rAfa1bHUIcCB0ExA'

const supabase = createClient(
    supabaseUrl,
    supabaseKey
)

export default supabase
