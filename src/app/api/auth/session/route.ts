import { NextResponse } from 'next/server';
import { verifyJWT } from '@/lib/jwt';

export async function GET(req: Request) {
    const cookieHeader = req.headers.get('cookie');
    const token = cookieHeader?.split('; ').find(row => row.startsWith('admin_token='))?.split('=')[1];

    if (!token) {
        return NextResponse.json({ authenticated: false }, { status: 401 });
    }

    const decoded = verifyJWT(token);
    if (!decoded) {
        return NextResponse.json({ authenticated: false }, { status: 401 });
    }

    return NextResponse.json({ authenticated: true, user: decoded });
}
