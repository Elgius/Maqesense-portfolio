import { unstable_noStore as noStore } from "next/cache";
import { supabaseClient } from "@/lib/db/client";
import { NextResponse } from "next/server";

export async function GET() {
  console.log("Api calls are being logged");
  noStore();
  if (typeof supabaseClient !== "undefined") {
    console.log("client clearance given");
    const { data: Tasks, error } = await supabaseClient
      .from("maqesense")
      .select("");

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return new Response(JSON.stringify({ Tasks }), { status: 200 });
  } else {
    console.error(
      "Client initialization error, API routes shutting down, call tech support"
    );
    return NextResponse.json(
      { error: "Error deteceted, call support" },
      { status: 500 }
    );
  }
}
