import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { connectDB } from './mongoose';
import { User } from '@/models/User';

export const { handlers, auth, signIn, signOut } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                username: { label: 'Username', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                await connectDB();
                const user = await User.findOne({ username: credentials?.username });
                if (!user) return null;
                const isValid = await bcrypt.compare(credentials?.password as string, user.password);
                if (!isValid) return null;
                return { id: user._id.toString(), name: user.username };
            },
        }),
    ],
    session: { strategy: 'jwt' },
});