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
      secretKey: "60de1ca132cd5237da1761cb3d10be94",
      name: "Sheldon",
      email: "niudai.geek@gmail.com"
    }),
  }).then((res) => res.json());

  return NextResponse.json({ url });
}