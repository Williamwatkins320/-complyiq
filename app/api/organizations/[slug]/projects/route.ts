import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const projects = await prisma.project.findMany({
      where: {
        organization: { slug: params.slug },
      },
    });

    return NextResponse.json(projects);
  } catch (error) {
    console.error('Projects fetch error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}