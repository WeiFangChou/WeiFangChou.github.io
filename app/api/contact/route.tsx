import { NextResponse } from "next/server";

import { lineNotify } from "../../components/forms/linenotify";

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const name = json.name;
    const email = json.email;
    const phone = json.phone;
    const message = json.message;

    await lineNotify(
      `\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    );

    return NextResponse.json({ result: true });
  } catch (error) {
    return NextResponse.json({ result: false, error: error });
  }
}
