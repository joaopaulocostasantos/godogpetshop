import { createClient } from "@supabase/supabase-js";

export function getSupabaseAdminClient() {
  const normalizeEnv = (value?: string) => value?.trim().replace(/^"(.*)"$/, "$1");

  const supabaseUrl = normalizeEnv(
    process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL,
  );
  const serviceRoleKey = normalizeEnv(process.env.SUPABASE_SERVICE_ROLE_KEY);

  if (!supabaseUrl || !serviceRoleKey) {
    const missing = [
      !supabaseUrl ? "SUPABASE_URL (or NEXT_PUBLIC_SUPABASE_URL)" : null,
      !serviceRoleKey ? "SUPABASE_SERVICE_ROLE_KEY" : null,
    ]
      .filter(Boolean)
      .join(", ");

    throw new Error(`Missing Supabase environment variables: ${missing}`);
  }

  return createClient(supabaseUrl, serviceRoleKey);
}
