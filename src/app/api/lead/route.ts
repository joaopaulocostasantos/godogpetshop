import { NextResponse } from "next/server";
import { getSupabaseAdminClient } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const supabase = getSupabaseAdminClient();
    const body = await req.json();

    const { fullname, email, phone, service } = body;

    // 1. Salvar no Supabase
    const { error } = await supabase
      .from("leads")
      .insert([{ fullname, email, phone, service }]);

    if (error) throw error;

    // 2. Integração Google removida — apenas confirmar sucesso após salvar no Supabase
    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: "Erro ao salvar lead" }, { status: 500 });
  }
}
