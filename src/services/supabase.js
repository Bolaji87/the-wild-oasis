/* eslint-disable no-undef */
import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://dzmkpmpvifflpjawpjms.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR6bWtwbXB2aWZmbHBqYXdwam1zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU4Nzg5ODAsImV4cCI6MjA2MTQ1NDk4MH0.YrfK9oCoFENQ7_pnVqMB7jWwhBB_XEq4I98yRJId1gU";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
