import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { connectDB } from '@/lib/mongoose';
import { Message } from '@/models/Message';

export async function GET() {
    const session = await auth();
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    await connectDB();
    const messages = await Message.find().sort({ createdAt: -1 });
    const total = await Message.countDocuments();
    const unread = await Message.countDocuments({ isRead: false });

    return NextResponse.json({ messages, stats: { total, unread } });
}