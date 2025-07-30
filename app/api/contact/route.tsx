import { NextResponse } from "next/server";
import { telegramNotify } from "../../components/forms/telegram";
import { validateCSRFToken } from "../../lib/csrf";

export async function POST(request: Request) {
  try {
    // Validate CSRF token
    const csrfToken = request.headers.get('X-CSRF-Token');
    if (!csrfToken) {
      return NextResponse.json({ result: false, error: 'CSRF token missing' }, { status: 403 });
    }

    const isValidToken = await validateCSRFToken(csrfToken);
    if (!isValidToken) {
      return NextResponse.json({ result: false, error: 'Invalid CSRF token' }, { status: 403 });
    }

    const json = await request.json();
    const name = json.name;
    const email = json.email;
    const phone = json.phone || "Not provided";
    const message = json.message;

    // Format message for Telegram with HTML formatting
    const telegramMessage = `<b>New Contact Form Submission</b>\n\n<b>Name:</b> ${name}\n<b>Email:</b> ${email}\n<b>Phone:</b> ${phone}\n<b>Message:</b>\n${message}`;

    await telegramNotify(telegramMessage);

    return NextResponse.json({ result: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ result: false, error: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
  }
}
