import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Only create client if both URL and key are valid
let supabase = null

if (supabaseUrl && supabaseAnonKey && supabaseUrl.startsWith('https://') && supabaseAnonKey.length > 10) {
  supabase = createClient(supabaseUrl, supabaseAnonKey)
} else {
  // Create a mock client for development when Supabase isn't configured
  supabase = {
    auth: {
      getSession: () => Promise.resolve({ data: { session: null } }),
      onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
      signUp: () => Promise.resolve({ data: null, error: { message: 'Supabase not configured' } }),
      signInWithPassword: () => Promise.resolve({ data: null, error: { message: 'Supabase not configured' } }),
      signOut: () => Promise.resolve({ error: null })
    }
  }
}

export { supabase }
