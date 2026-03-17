import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { connectDB } from '@/lib/mongoose';
import { User } from '@/models/User';
import { signJWT } from '@/lib/jwt';

export async function POST(req: Request) {
    try {
        const { username, password } = await req.json();

        await connectDB();
        const user = await User.findOne({ username });

        if (!user) {
            return NextResponse.json({ error: 'Ungültige Anmeldedaten' }, { status: 401 });
        }

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            return NextResponse.json({ error: 'Ungültige Anmeldedaten' }, { status: 401 });
        }

        const token = signJWT({ id: user._id, username: user.username });

        const response = NextResponse.json({ success: true });
        
        response.cookies.set('admin_token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 60 * 60 * 24, // 1 day
            path: '/',
        });

        return response;
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
