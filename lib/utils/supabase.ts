import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ktxwibmrzoiibkwnzsff.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt0eHdpYm1yem9paWJrd256c2ZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg0OTU0NzAsImV4cCI6MjA1NDA3MTQ3MH0.cr7GQlduGry7bOa4MQYrq7eX2qF60_qjL0cy63JNi8M'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});