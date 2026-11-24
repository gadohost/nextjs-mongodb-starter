import { NextResponse } from 'next/server';
import { getMongoClient } from '@/lib/mongodb';

export async function GET() {
  try {
    const client = await getMongoClient();
    await client.db().admin().ping();
    return NextResponse.json({
      status: 'ok',
      database: 'connected',
      platform: 'GadoHost Cloud',
      timestamp: new Date().toISOString(),
    });
  } catch (err: any) {
    return NextResponse.json(
      { status: 'error', message: err?.message || 'Database check failed' },
      { status: 500 }
    );
  }
}
