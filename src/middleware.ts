import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    console.log('🛡️ Middleware checking path:', pathname);
    const token = request.cookies.get('admin_token')?.value;

    const isAdminPath = pathname.startsWith('/admin');
    const isLoginPath = pathname === '/admin/login';

    // Protect admin routes
    if (isAdminPath && !isLoginPath && !token) {
        return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    // Redirect logged-in users away from login page
    if (isLoginPath && token) {
        return NextResponse.redirect(new URL('/admin', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/admin', '/admin/:path*'],
};