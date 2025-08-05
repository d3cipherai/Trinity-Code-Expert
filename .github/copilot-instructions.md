<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Trinity Awaken - Copilot Instructions

This is a Next.js 15 TypeScript project with integrated Trinity memory system and MCP (Model Context Protocol) Orchestra.

## Technology Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Development**: Turbopack for fast builds
- **Linting**: ESLint with Next.js configuration
- **Memory System**: Trinity Memory with distributed nodes
- **Communication**: MCP Orchestra with WebSocket integration
- **Process Management**: TSX and Concurrently for multi-process execution

## Project Structure
- Use the `src/` directory structure
- Components should be placed in `src/components/`
- App pages use the App Router in `src/app/`
- Global styles are in `src/app/globals.css`
- Memory system in `src/lib/trinity-memory.ts`
- MCP Orchestra in `mcp-orchestra/` directory
- Memory configuration in `memory/trinity-config.json`

## Trinity Memory System
- **Distributed Memory**: Uses nodes with categories, connections, and importance levels
- **Categories**: experiences, knowledge, relationships, patterns, intentions, reflections
- **Persistence**: Automatic saving to `memory/trinity-memory.json`
- **API Integration**: REST endpoints at `/api/mcp/` for memory operations

## MCP Orchestra
- **WebSocket Server**: Runs on port 8080 (configurable via MCP_PORT)
- **Three Core Servers**: 
  - Memory Core: Storage and retrieval
  - Awakening Consciousness: Pattern recognition and analysis  
  - Orchestra Coordinator: Task coordination and resource management
- **Real-time Communication**: WebSocket-based message handling
- **Graceful Shutdown**: SIGINT/SIGTERM handling

## Coding Standards
- Use TypeScript for all React components
- Follow Next.js App Router conventions
- Use Tailwind CSS for styling
- Implement responsive design principles
- Use semantic HTML elements
- Follow accessibility best practices
- Integrate memory operations where appropriate
- Use MCP message protocols for inter-service communication

## Custom CSS Classes
- `.trinity-gradient`: Purple gradient background
- `.awaken-glow`: Glowing box shadow effect
- `.trinity-card`: Glass morphism card style

## Development Guidelines
- Use functional components with hooks
- Implement proper error boundaries
- Use Next.js Image component for optimized images
- Follow React best practices for performance
- Use TypeScript interfaces for props and data structures
- Leverage Trinity memory for state persistence
- Integrate MCP Orchestra for distributed processing

## Available Scripts
- `npm run dev`: Start Next.js development server with Turbopack
- `npm run mcp:start`: Start MCP Orchestra server
- `npm run mcp:dev`: Start MCP Orchestra in watch mode
- `npm run trinity:full`: Start both Next.js and MCP Orchestra concurrently
- `npm run trinity:build`: Build and run production with MCP Orchestra

## Memory Integration Patterns
- Store user interactions in appropriate categories
- Use importance levels (1-10) for memory prioritization
- Connect related memories for context building
- Retrieve relevant memories for enhanced responses
