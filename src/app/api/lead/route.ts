import { NextResponse } from "next/server";
import { getSupabaseAdminClient } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const supabase = getSupabaseAdminClient();
    const body = await req.json();

    const { fullname, email, phone, service } = body ?? {};

    if (!fullname || !email || !phone || !service) {
      return NextResponse.json(
        { error: "Preencha todos os campos obrigatorios." },
        { status: 400 },
      );
    }

    const { error } = await supabase
      .from("leads")
      .insert([{ fullname, email, phone, service }]);

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { error: error.message || "Falha ao salvar no banco de dados." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    const message =
      err instanceof Error
        ? err.message
        : "Erro interno ao processar a solicitacao.";

    console.error("POST /api/lead error:", err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
