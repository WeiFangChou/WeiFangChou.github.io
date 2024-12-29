import { NextResponse } from "next/server";

export async function lineNotify(message: string) {
  const response = await fetch("https://notify-api.line.me/api/notify", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${process.env.LINE_TKN}`,
    },
    body: `message=${message}`,
  });

  return NextResponse.json({ result: response.status === 200 });
}