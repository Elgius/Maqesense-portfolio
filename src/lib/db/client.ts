import { SupabaseClient, createClient } from "@supabase/supabase-js";

let supabaseClient: SupabaseClient | undefined;

if (
  typeof process.env.NEXT_PUBLIC_SUPABASE_URL != "undefined" &&
  typeof process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY != "undefined"
) {
  let url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  let key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  supabaseClient = createClient(url, key);
} else {
  console.log(".env file is missing!!!! red alert!!!");
}

export { supabaseClient };
