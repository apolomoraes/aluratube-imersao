import { createClient } from '@supabase/supabase-js'

const PROJECT_URL = 'https://imatsqsnitbqidunjeda.supabase.co'
const PUBLIC_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImltYXRzcXNuaXRicWlkdW5qZWRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxOTU2ODMsImV4cCI6MTk4Mzc3MTY4M30.8x5Wr3kdIYdBM_i0yqHHCknNnVjELQlV61wxdkjLa44'
const supabase = createClient(PROJECT_URL, PUBLIC_KEY)

export function videoService() {
  return {
    getAllVideos() {
      return supabase.from('video').select('*')
    }
  }
}
