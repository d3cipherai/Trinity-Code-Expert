#!/usr/bin/env node

import { MCPOrchestrator } from './orchestrator';

async function main() {
  console.log('🎼 Starting Trinity Awaken MCP Orchestra...');
  
  const port = process.env.MCP_PORT ? parseInt(process.env.MCP_PORT) : 8080;
  const orchestrator = new MCPOrchestrator(port);
  
  console.log(`🎵 Trinity MCP Orchestra listening on port ${port}`);
  console.log('🧠 Memory system initialized');
  console.log('⚡ Awakening consciousness active');
  console.log('🌟 Trinity Awaken is ready!');

  // Handle graceful shutdown
  process.on('SIGINT', async () => {
    console.log('\n🛑 Shutting down Trinity MCP Orchestra...');
    await orchestrator.shutdown();
    process.exit(0);
  });

  process.on('SIGTERM', async () => {
    console.log('\n🛑 Shutting down Trinity MCP Orchestra...');
    await orchestrator.shutdown();
    process.exit(0);
  });
}

main().catch((error) => {
  console.error('❌ Failed to start Trinity MCP Orchestra:', error);
  process.exit(1);
});
