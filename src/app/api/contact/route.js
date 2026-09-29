import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, company, message, phone, _honeypot } = body;

    // 1. Honeypot Check (Bot Prevention)
    // Bots scan forms and fill all fields. If this hidden field is filled, silently reject it.
    if (_honeypot) {
      return NextResponse.json({ success: true }, { status: 200 }); 
    }

    // 2. Strict Input Validation & Length Limits (Buffer Overflow / Payload Protection)
    if (!name || typeof name !== 'string' || name.length > 100) {
      return NextResponse.json({ error: 'Invalid name' }, { status: 400 });
    }
    if (!email || typeof email !== 'string' || email.length > 150 || !EMAIL_REGEX.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }
    if (!phone || typeof phone !== 'string' || phone.length > 50) {
      return NextResponse.json({ error: 'Contact number is required' }, { status: 400 });
    }
    if (!message || typeof message !== 'string' || message.length > 5000) {
      return NextResponse.json({ error: 'Message too long or invalid' }, { status: 400 });
    }

    // 3. Input Sanitization (XSS Protection)
    const sanitizeHTML = (str) => {
      if (!str) return '';
      return str.toString().replace(/</g, "&lt;").replace(/>/g, "&gt;").substring(0, 5000);
    };

    const safeName = sanitizeHTML(name);
    const safeEmail = sanitizeHTML(email);
    const safeCompany = company ? sanitizeHTML(company).substring(0, 150) : 'Not provided';
    const safePhone = sanitizeHTML(phone).substring(0, 50);
    const safeMessage = sanitizeHTML(message);

    const { data, error } = await resend.emails.send({
      from: 'ApexTech+ Website <hello@apextechplus.com>',
      to: ['apextechplus@gmail.com'], 
      subject: `New Enterprise Inquiry: ${safeCompany !== 'Not provided' ? safeCompany : safeName}`,
      reply_to: safeEmail,
      html: `
        <h2>New Inquiry from ApexTech+ Contact Form</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Company:</strong> ${safeCompany}</p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        <br />
        <p><strong>Project Details:</strong></p>
        <p>${safeMessage.replace(/\n/g, '<br />')}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Secure server error processing request' }, { status: 500 });
  }
}
