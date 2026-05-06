import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

interface ContactBody {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  message?: string;
  website?: string;
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  let body: ContactBody;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }

  // Honeypot check
  if (body.website && body.website.length > 0) {
    return NextResponse.json({ success: true });
  }

  // Validation
  const errors: Record<string, string> = {};

  if (!body.name || body.name.trim().length < 2) {
    errors.name = "Name is required and must be at least 2 characters.";
  }

  if (!body.email || !validateEmail(body.email.trim())) {
    errors.email = "A valid email address is required.";
  }

  if (!body.message || body.message.trim().length < 10) {
    errors.message = "Message is required and must be at least 10 characters.";
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 400 });
  }

  const name = body.name!.trim();
  const email = body.email!.trim();
  const phone = body.phone?.trim() || "Not provided";
  const company = body.company?.trim() || "Not provided";
  const message = body.message!.trim();

  // Send Resend email
  try {
    await getResend().emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: process.env.CONTACT_NOTIFICATION_EMAIL!,
      replyTo: email,
      subject: `New inquiry from ${name} — Prosperity website`,
      text: [
        `New contact form submission from prosperityta.com`,
        ``,
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Company: ${company}`,
        ``,
        `Message:`,
        message,
      ].join("\n"),
    });
  } catch (err) {
    console.error("Resend email failed:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again or call the office directly." },
      { status: 500 }
    );
  }

  // Fire GHL webhook (non-blocking, independent of Resend)
  const ghlUrl = process.env.GHL_WEBHOOK_URL;
  if (ghlUrl) {
    try {
      fetch(ghlUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone: body.phone?.trim() || "",
          company: body.company?.trim() || "",
          message,
          source: "prosperityta.com contact form",
          submittedAt: new Date().toISOString(),
        }),
      }).catch((err) => {
        console.error("GHL webhook failed:", err);
      });
    } catch (err) {
      console.error("GHL webhook failed:", err);
    }
  }

  return NextResponse.json({ success: true });
}
