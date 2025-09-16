<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Trinity Awaken - Copilot Instructions

This is a Next.js 15 TypeScript project with integrated Trinity memory system and MCP (Model Context Protocol) Orchestra for advanced memory management and distributed processing.

## Project Purpose
Trinity Awaken is an intelligent web application that combines:
- **Memory Consciousness**: Advanced memory management with categorization and importance weighting
- **Distributed Processing**: MCP Orchestra for coordinated task execution
- **Real-time Communication**: WebSocket-based inter-service communication
- **Persistent Storage**: JSON-based memory with optional Git synchronization

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
- API routes in `src/app/api/` following Next.js App Router conventions
- Static assets in `public/` directory
- TypeScript configuration in `tsconfig.json`
- Tailwind configuration in `tailwind.config.ts`

## Environment Configuration
- Development uses Turbopack for fast builds
- MCP Orchestra runs on port 8080 (configurable via MCP_PORT)
- Memory files auto-generated in `memory/trinity-memory.json`
- Optional DecipherGit integration via DECIPHER_GIT_TOKEN
- ESLint configured with Next.js strict rules

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
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run ESLint with Next.js configuration
- `npm run mcp:start`: Start MCP Orchestra server
- `npm run mcp:dev`: Start MCP Orchestra in watch mode
- `npm run trinity:full`: Start both Next.js and MCP Orchestra concurrently
- `npm run trinity:build`: Build and run production with MCP Orchestra
- `npm run trinity:terminal`: Terminal-based chat interface
- `npm run trinity:web`: Web server for Trinity interface
- `npm run trinity:chat`: Combined web and MCP development
- `npm run setup:deciphergit`: Setup DecipherGit memory connection
- `npm run memory:sync`: Manually sync memory with DecipherGit

## Memory Integration Patterns
- Store user interactions in appropriate categories
- Use importance levels (1-10) for memory prioritization
- Connect related memories for context building
- Retrieve relevant memories for enhanced responses

## Testing Patterns
- No formal testing framework is currently configured
- Manual testing through development server and MCP Orchestra
- Test API endpoints via REST calls to `/api/mcp/`
- Validate WebSocket connections to MCP Orchestra on port 8080
- Test memory operations through Trinity Memory System
- ✅ **Build System**: TypeScript compilation and ESLint checks pass successfully

## Error Handling Guidelines
- Use try-catch blocks for async operations
- Implement proper error responses in API routes
- Log errors with context information
- Handle WebSocket connection failures gracefully
- Validate memory operations and provide fallbacks

## Security Considerations
- Sanitize user inputs before storing in memory
- Validate WebSocket message formats
- Use environment variables for sensitive configuration
- Implement proper CORS settings for API endpoints
- Secure memory file access and prevent unauthorized reads

## Performance Guidelines
- Use React.memo for expensive components
- Implement proper loading states for async operations
- Optimize memory operations with batching
- Use Next.js Image component for image optimization
- Minimize WebSocket message frequency

## Deployment Information
- Build production: `npm run build`
- Start production: `npm run start`
- Environment variables: Check for MCP_PORT configuration
- Static files served from `public/` directory
- Memory files persisted in `memory/` directory

## Code Review Guidelines
- Ensure TypeScript types are properly defined
- Validate memory category usage follows established patterns
- Check WebSocket message format compliance
- Verify proper error handling implementation
- Confirm responsive design implementation

## Tool Calling Patterns
- Use multiple tool calls simultaneously for efficiency
- Batch file operations when possible
- Use appropriate tools for repository exploration
- Leverage bash tool for development operations
- Integrate with MCP Orchestra for distributed processing

## Troubleshooting
- Check MCP Orchestra server status on port 8080
- Verify memory files exist and are readable
- Validate package.json scripts are working
- Ensure Next.js development server is accessible
- Check for TypeScript compilation errors

## Known Issues & Maintenance
- ✅ **Fixed**: ESLint warnings and errors resolved
- ✅ **Fixed**: TypeScript compilation issues addressed  
- ✅ **Fixed**: Next.js security vulnerability patched (updated to 15.5.3)
- Consider adding formal testing framework (Jest, Vitest, or similar)
- Build system properly excludes teams-bot, teams-integration, and trinity-independent directories

## Development Workflow
1. Start development: `npm run trinity:full` (Next.js + MCP Orchestra)
2. Make changes following coding standards above
3. Test manually through browser and API endpoints
4. Run `npm run lint` to check for issues
5. Address linting errors before committing
6. Use memory operations to persist important interactions
