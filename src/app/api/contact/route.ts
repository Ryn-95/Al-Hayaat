import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, phone, email, requestType, message } = body;

    // Validation
    if (!firstName || !lastName || !phone || !email || !requestType || !message) {
      return NextResponse.json(
        { error: "Tous les champs sont requis." },
        { status: 400 }
      );
    }

    // In production, integrate with Resend, Nodemailer, or similar
    // For now, log the contact request
    console.log("New contact request:", {
      firstName,
      lastName,
      phone,
      email,
      requestType,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: "Message reçu. Nous vous recontactons rapidement." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Une erreur est survenue." },
      { status: 500 }
    );
  }
}
