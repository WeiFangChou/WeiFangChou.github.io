import { NextResponse } from "next/server";
import { telegramNotify } from "../../components/forms/telegram";
import { verifyTurnstileToken } from "../../lib/turnstile";

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const name = json.name;
    const email = json.email;
    const phone = json.phone || "Not provided";
    const message = json.message;
    const turnstileToken = json.turnstileToken;

    if (!turnstileToken) {
      return NextResponse.json({ result: false, error: 'Turnstile token missing' }, { status: 400 });
    }

    const ipAddress =
      request.headers.get('CF-Connecting-IP') ||
      request.headers.get('X-Real-IP') ||
      request.headers.get('X-Forwarded-For')?.split(',')[0].trim();

    const isHuman = await verifyTurnstileToken(turnstileToken, ipAddress ?? undefined);
    if (!isHuman) {
      return NextResponse.json({ result: false, error: 'Failed Cloudflare Turnstile verification' }, { status: 403 });
    }

    // Format message for Telegram with HTML formatting
    const telegramMessage = `<b>New Contact Form Submission</b>\n\n<b>Name:</b> ${name}\n<b>Email:</b> ${email}\n<b>Phone:</b> ${phone}\n<b>Message:</b>\n${message}`;

    await telegramNotify(telegramMessage);

    return NextResponse.json({ result: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ result: false, error: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
  }
}
