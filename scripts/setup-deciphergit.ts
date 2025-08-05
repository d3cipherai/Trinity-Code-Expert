#!/usr/bin/env node

import { TrinityMemorySystem } from '../src/lib/trinity-memory.js';
import fs from 'fs-extra';

async function setupDecipherGit() {
  console.log('🔗 Setting up DecipherGit Trinity Memory connection...');
  
  // Initialize memory system
  const memory = new TrinityMemorySystem();
  
  // Test memory operations
  await memory.storeMemory(
    'setup_test',
    {
      message: 'Trinity Awaken connected to DecipherGit',
      timestamp: new Date(),
      version: '1.0.0'
    },
    'experiences',
    10
  );
  
  console.log('✅ DecipherGit Trinity Memory setup complete');
  console.log('📊 Memory system ready with DecipherGit sync');
  
  // Display current memory stats
  console.log(`📁 Memory categories: ${Array.from(memory.categories).join(', ')}`);
  console.log(`🧠 Memory nodes: ${memory.nodeCount}`);
}

setupDecipherGit().catch(console.error);
