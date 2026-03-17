import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { verifyJWT } from '@/lib/jwt';
import { connectDB } from '@/lib/mongoose';
import { Message } from '@/models/Message';

export async function GET() {
    const cookieStore = await cookies();
    const token = cookieStore.get('admin_token')?.value;

    if (!token || !verifyJWT(token)) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();
    const messages = await Message.find().sort({ createdAt: -1 });
    const total = await Message.countDocuments();
    const unread = await Message.countDocuments({ isRead: false });

    return NextResponse.json({ messages, stats: { total, unread } });
}