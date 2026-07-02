import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from './lib/auth';

const publicRoutes = ['/', '/auth/sign-up', '/auth/sign-in', '/auth/forgot-password'];

export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth_token')?.value;
  const path = request.nextUrl.pathname;

  if (publicRoutes.includes(path)) {
    return NextResponse.next();
  }

  if (!token) {
    return NextResponse.redirect(new URL('/auth/sign-in', request.url));
  }

  const decoded = verifyToken(token);
  if (!decoded) {
    const response = NextResponse.redirect(new URL('/auth/sign-in', request.url));
    response.cookies.delete('auth_token');
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};