import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { verifyToken } from '@/lib/auth';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get('auth_token')?.value;
    if (!token) return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });

    const decoded = verifyToken(token);
    if (!decoded) return NextResponse.json({ message: 'Invalid token' }, { status: 401 });

    const items = await prisma.compliance.findMany({
      where: {
        organization: {
          users: { some: { userId: decoded.userId } },
        },
      },
    });

    return NextResponse.json(items);
  } catch (error) {
    console.error('Compliance fetch error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}