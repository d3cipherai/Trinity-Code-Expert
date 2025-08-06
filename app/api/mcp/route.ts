import { NextRequest, NextResponse } from 'next/server';
import { TrinityMemorySystem } from '@/lib/trinity-memory';

const memory = new TrinityMemorySystem();

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const action = searchParams.get('action');
  const id = searchParams.get('id');
  const category = searchParams.get('category');

  try {
    switch (action) {
      case 'retrieve':
        if (!id) {
          return NextResponse.json({ error: 'ID required for retrieve action' }, { status: 400 });
        }
        const memoryNode = await memory.retrieveMemory(id);
        return NextResponse.json({ memory: memoryNode });

      case 'search':
        if (!category) {
          return NextResponse.json({ error: 'Category required for search action' }, { status: 400 });
        }
        const memories = await memory.findMemoriesByCategory(category);
        return NextResponse.json({ memories, count: memories.length });

      case 'status':
        return NextResponse.json({
          categories: Array.from(memory.categories),
          nodeCount: memory.nodeCount,
          timestamp: new Date().toISOString()
        });

      default:
        return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    }
  } catch (error) {
    console.error('MCP API Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { action, id, content, category, importance, connectionId } = body;

    switch (action) {
      case 'store':
        if (!id || !content) {
          return NextResponse.json({ error: 'ID and content required for store action' }, { status: 400 });
        }
        await memory.storeMemory(id, content, category || 'general', importance || 1);
        return NextResponse.json({ success: true, stored: id });

      case 'connect':
        if (!id || !connectionId) {
          return NextResponse.json({ error: 'ID and connectionId required for connect action' }, { status: 400 });
        }
        await memory.connectMemories(id, connectionId);
        return NextResponse.json({ success: true, connected: [id, connectionId] });

      default:
        return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    }
  } catch (error) {
    console.error('MCP API Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
