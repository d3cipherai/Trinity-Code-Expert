import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'success',
    message: 'Trinity Test Endpoint is Working!',
    timestamp: new Date().toISOString(),
    system: {
      memory: 'Connected',
      mcp: 'Running',
      teams: 'Active'
    }
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    return NextResponse.json({
      status: 'success',
      message: 'Trinity Test POST received',
      received: body,
      timestamp: new Date().toISOString()
    });
  } catch {
    return NextResponse.json({
      status: 'error',
      message: 'Invalid JSON in request body'
    }, { status: 400 });
  }
}
