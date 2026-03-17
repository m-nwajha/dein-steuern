import type { NextAuthConfig } from 'next-auth';

export const authConfig: NextAuthConfig = {
    session: { strategy: 'jwt' },
    pages: {},
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isLoginPath = nextUrl.pathname === '/admin/login';
            const isAdminPath = nextUrl.pathname.startsWith('/admin');

            console.log('✅ Auth callback:', { path: nextUrl.pathname, isLoggedIn });

            if (isAdminPath && !isLoginPath && !isLoggedIn) {
                return Response.redirect(new URL('/admin/login', nextUrl));
            }

            if (isLoginPath && isLoggedIn) {
                return Response.redirect(new URL('/admin', nextUrl));
            }

            return true;
        },
    },
    providers: [],
};