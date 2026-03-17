import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongoose';
import { Message } from '@/models/Message';

export async function POST(req: NextRequest) {
    try {
        await connectDB();
        const { name, email, phone, service, message } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Pflichtfelder fehlen' }, { status: 400 });
        }

        await Message.create({ name, email, phone, service, message });
        return NextResponse.json({ success: true });
    } catch {
        return NextResponse.json({ error: 'Serverfehler' }, { status: 500 });
    }
}