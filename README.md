# Trinity Awaken

A Next.js 15 TypeScript project integrated with Trinity Memory System and MCP (Model Context Protocol) Orchestra for advanced memory management and distributed processing.

## 🌟 Features

- **Next.js 15** with App Router and Turbopack
- **Trinity Memory System** - Distributed memory with persistent storage
- **DecipherGit Integration** - Sync memory with remote DecipherGit repository
- **MCP Orchestra** - WebSocket-based microservice coordination
- **TypeScript** throughout the stack
- **Tailwind CSS** for styling
- **Real-time Communication** via WebSockets
- **Automatic Memory Persistence** with JSON and Git storage
- **Cross-Instance Memory Sync** via DecipherGit

## 🏗️ Architecture

### Memory System
The Trinity Memory System provides distributed memory management with:

- **Memory Nodes**: Store content with categories, timestamps, and importance levels
- **Connections**: Link related memories for context building
- **Categories**: experiences, knowledge, relationships, patterns, intentions, reflections
- **Persistence**: Automatic saving to `memory/trinity-memory.json`

### MCP Orchestra
Three coordinated servers handling different aspects:

1. **Memory Core**: Storage, retrieval, and search operations
2. **Awakening Consciousness**: Pattern recognition and analysis
3. **Orchestra Coordinator**: Task coordination and resource management

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start development environment:

```bash
# Start both Next.js and MCP Orchestra
npm run trinity:full

# Or start individually
npm run dev          # Next.js only
npm run mcp:dev      # MCP Orchestra only
```

3. Access the application:

- Web interface: http://localhost:3000
- MCP Orchestra: ws://localhost:8080

## 📁 Project Structure

```
trinity-awaken/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/mcp/           # MCP REST API endpoints
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/            # React components
│   └── lib/
│       └── trinity-memory.ts  # Memory system implementation
├── mcp-orchestra/             # MCP servers
│   ├── orchestrator.ts        # Main orchestrator
│   └── server.ts              # Server entry point
├── memory/                    # Memory storage
│   ├── trinity-config.json    # System configuration
│   └── trinity-memory.json    # Persistent memory (auto-generated)
└── .github/
    └── copilot-instructions.md # AI coding instructions
```

## 🔧 Configuration

### Environment Variables

- `MCP_PORT`: WebSocket server port (default: 8080)

### Memory Configuration
Edit `memory/trinity-config.json` to customize:

- Memory retention periods
- Node capabilities
- Protocol endpoints
- Memory categories

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start Next.js development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run mcp:start` - Start MCP Orchestra
- `npm run mcp:dev` - Start MCP Orchestra in watch mode
- `npm run trinity:full` - Start complete development environment
- `npm run trinity:build` - Build and run with MCP Orchestra
- `npm run setup:deciphergit` - Setup DecipherGit memory connection
- `npm run memory:sync` - Manually sync memory with DecipherGit

### DecipherGit Integration

Trinity Awaken integrates with DecipherGit for persistent memory storage across instances:

#### Setup DecipherGit Connection
```bash
# Setup the DecipherGit memory connection
npm run setup:deciphergit

# Manual memory sync
npm run memory:sync
```

#### Environment Variables for DecipherGit

- `DECIPHER_GIT_TOKEN`: GitHub token for DecipherGit access (optional)

The system automatically syncs memory to the DecipherGit repository when:

- New memories are stored
- Memory connections are created
- Manual sync is triggered

### Memory Operations

#### Storing Memories
```typescript
import { TrinityMemorySystem } from '@/lib/trinity-memory';

const memory = new TrinityMemorySystem();
await memory.storeMemory('user_interaction_1', {
  message: 'Hello Trinity',
  timestamp: new Date()
}, 'experiences', 8);
```

#### Retrieving Memories
```typescript
const memoryNode = await memory.retrieveMemory('user_interaction_1');
const experienceMemories = await memory.findMemoriesByCategory('experiences');
```

#### Connecting Memories
```typescript
await memory.connectMemories('memory_id_1', 'memory_id_2');
```

### MCP Orchestra Communication

#### WebSocket Client Example
```javascript
const ws = new WebSocket('ws://localhost:8080');

// Store memory via MCP
ws.send(JSON.stringify({
  id: 'msg_1',
  type: 'request',
  method: 'memory.store',
  params: {
    id: 'example_memory',
    content: { data: 'example' },
    category: 'knowledge',
    importance: 5
  }
}));
```

#### REST API Example
```javascript
// Store memory via REST API
const response = await fetch('/api/mcp', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    action: 'store',
    id: 'example_memory',
    content: { data: 'example' },
    category: 'knowledge',
    importance: 5
  })
});
```

## 🔮 MCP Protocol Methods

### Memory Operations

- `memory.store` - Store a new memory
- `memory.retrieve` - Retrieve memory by ID
- `memory.search` - Search memories by category

### Orchestra Operations

- `orchestra.status` - Get system status
- `awakening.analyze` - Analyze data for patterns

### Analysis Operations

- Pattern extraction from input data
- Insight generation with context
- Recommendation generation
- Confidence scoring

## 🏛️ Memory Categories

- **experiences**: User interactions, events, conversations
- **knowledge**: Facts, information, learned content
- **relationships**: Connections between entities
- **patterns**: Recognized behavioral or data patterns
- **intentions**: Goals, objectives, planned actions
- **reflections**: Analysis, insights, conclusions

## 🔒 Security

- WebSocket connections are local by default
- No external API keys required for basic functionality
- Memory files stored locally in JSON format
- No sensitive data exposed in default configuration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Next.js team for the excellent framework
- Model Context Protocol for the communication standard
- Trinity Memory architecture inspiration
- VS Code and GitHub Copilot for development assistance

---

**Trinity Awaken** - Where memory meets consciousness in distributed harmony. 🧠✨
