import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://pifnzmhmxtgdtyiyvdfx.supabase.co"; // Din Supabase URL
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpZm56bWhteHRnZHR5aXl2ZGZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQwMzkxNDAsImV4cCI6MjA0OTYxNTE0MH0.b2cd0VNRmLsE_UBYpx61O1mHuFUmfB4kE_F3iEUkEc0"; // Din API key (fra Supabase settings)

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
