// utils/supabase.ts

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export async function insertEmail(email: string, pageName: string) {
  const { data, error } = await supabase
    .from('useremail')
    .insert([
      { email: email, page: pageName }
    ])

  if (error) {
    console.error('Error inserting email:', error)
    throw error
  }

  return data
}