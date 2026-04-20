import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://xioccqazpfcwdhbqrcml.supabase.co",  // from Supabase dashboard
  "sb_publishable_TZVtR6v_l5pzHjQBKQQG9g_jdrWNl-Z"                   // from Supabase dashboard
);