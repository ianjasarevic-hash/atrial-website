import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Manjkajo required polja' },
        { status: 400 }
      );
    }

    // Create transporter - replace with your SMTP settings
    // For Gmail, you need an App Password: https://myaccount.google.com/apppasswords
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'atrial@telemach.net',
        pass: 'YOUR_BUSINESS_EMAIL_PASSWORD_HERE',
      },
    });

    // Email content
    const mailOptions = {
      from: `"ATRIAL - ${name}" <atrial@telemach.net>`,
      to: 'atrial@telemach.net',
      replyTo: email,
      subject: `Novo sporočilo: ${name}`,
      html: `
        <h2>Novo sporočilo iz spletnega obrazca</h2>
        <p><strong>Ime:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone || 'Ni navedeno'}</p>
        <p><strong>Sporočilo:</strong></p>
        <p>${message}</p>
        <hr>
        <p><small>Poslano: ${new Date().toLocaleString('sl-SI')}</small></p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Return success response
    return NextResponse.json(
      { message: 'Sporočilo uspešno poslano' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Napaka pri pošiljanju sporočila' },
      { status: 500 }
    );
  }
}