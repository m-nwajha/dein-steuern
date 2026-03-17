import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { verifyJWT } from '@/lib/jwt';
import { connectDB } from '@/lib/mongoose';
import { Message } from '@/models/Message';

export async function DELETE(
    _: NextRequest,
    { params }: { params: Promise<{ id: string; }>; }
) {
    const cookieStore = await cookies();
    const token = cookieStore.get('admin_token')?.value;

    if (!token || !verifyJWT(token)) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    await connectDB();
    await Message.findByIdAndDelete(id);
    return NextResponse.json({ success: true });
}

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string; }>; }) {
    const cookieStore = await cookies();
    const token = cookieStore.get('admin_token')?.value;

    if (!token || !verifyJWT(token)) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();
    const { isRead } = await req.json();
    const { id } = await params;

    const updated = await Message.findByIdAndUpdate(
        id,
        { isRead },
        { new: true }
    );

    if (!updated) return NextResponse.json({ error: 'Not found' }, { status: 404 });

    return NextResponse.json({ success: true });
}