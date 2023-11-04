import { createClient } from '@supabase/supabase-js'


const supabaseUrl = 'https://nwhszeatovzrkxzaadlw.supabase.co'
const supabaseKey="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im53aHN6ZWF0b3Z6cmt4emFhZGx3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgyMzk3NzIsImV4cCI6MjAxMzgxNTc3Mn0.ve4zxQpyoCq_Y8uO-YvgO-ppKZVK9pIaUU0BKVV_Cvk"

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase