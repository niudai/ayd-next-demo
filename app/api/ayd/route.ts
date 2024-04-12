import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {

  const { url } = await fetch("https://www.askyourdatabase.com/api/chatbot/session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      secretKey: "449fadb927d17c795198602d08c75d55",
      name: "Sheldon",
      email: "niudai.geek@gmail.com"
    }),
  }).then((res) => res.json());

  return NextResponse.json({ url });
}