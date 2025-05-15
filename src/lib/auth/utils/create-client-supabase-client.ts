import { createClient } from '@supabase/supabase-js'


export function createClientSupabaseClient(token: string) {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_KEY!,
    {
      async accessToken() {
          return token
      },
    }
  )
}
