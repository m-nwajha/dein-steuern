import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongoose';
import { Message } from '@/models/Message';

export async function POST(req: NextRequest) {
    try {
        await connectDB();
        const { name, email, phone, service, message, captcha } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Pflichtfelder fehlen' }, { status: 400 });
        }

        if (!captcha) {
            return NextResponse.json({ error: 'Bitte lösen Sie das ReCAPTCHA.' }, { status: 400 });
        }

        // Verify ReCAPTCHA
        const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captcha}`,
        });

        const verifyData = await verifyRes.json();

        if (!verifyData.success) {
            return NextResponse.json({ error: 'ReCAPTCHA-Verifizierung fehlgeschlagen' }, { status: 400 });
        }

        await Message.create({ name, email, phone, service, message });
        return NextResponse.json({ success: true });
    } catch {
        return NextResponse.json({ error: 'Serverfehler' }, { status: 500 });
    }
}