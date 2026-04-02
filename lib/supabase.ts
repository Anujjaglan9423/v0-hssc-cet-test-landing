import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Create client if credentials are available, otherwise create a dummy client
// that will fail gracefully when used before configuration is complete
let supabase: any = null

if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey)
} else {
  // Create a minimal dummy client that throws a helpful error when used
  supabase = {
    from: () => {
      throw new Error("Supabase is not configured. Please go to /admin/config to set up your Supabase credentials.")
    },
    auth: {
      signUp: () => {
        throw new Error("Supabase is not configured. Please go to /admin/config to set up your Supabase credentials.")
      },
      signIn: () => {
        throw new Error("Supabase is not configured. Please go to /admin/config to set up your Supabase credentials.")
      },
    },
  }
}

export { supabase }
