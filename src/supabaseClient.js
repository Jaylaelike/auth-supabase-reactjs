import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zcrovytsopigxzsmhgsu.supabase.co";
const supabaseAnonkey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpjcm92eXRzb3BpZ3h6c21oZ3N1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTQ0ODMwNTUsImV4cCI6MTk3MDA1OTA1NX0._OLnD_JLMXjumCWsrd39nt01-02__xcvfQkpqFdQSao";

export const supabase = createClient(supabaseUrl, supabaseAnonkey);
