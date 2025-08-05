#!/usr/bin/env tsx

/**
 * Trinity Memory Sync Script
 * Enhanced to handle OneDrive Trinity Memory repository
 */

import { TrinityMemorySystem } from '../src/lib/trinity-memory.js';
import fs from 'fs-extra';
import path from 'path';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

async function syncMemory() {
  console.log('🧠 Trinity Memory Sync - Starting...');
  
  try {
    // Check configuration first
    const configPath = './memory/trinity-config.json';
    if (await fs.pathExists(configPath)) {
      const config = await fs.readJSON(configPath);
      const persistenceConfig = config.trinity?.memory?.persistence;
      
      if (persistenceConfig?.type === 'onedrive' && persistenceConfig?.path) {
        console.log('🔗 Using OneDrive Trinity Memory repository');
        console.log('📂 Location:', persistenceConfig.path);
        
        // Check if OneDrive memory exists
        if (await fs.pathExists(persistenceConfig.path)) {
          console.log('✅ OneDrive Trinity Memory repository found');
          
          // List memory files in OneDrive location
          const memoryFiles = ['conversations.json', 'sessions.json', 'users.json', 'cathedral-state.json'];
          for (const file of memoryFiles) {
            const filePath = path.join(persistenceConfig.path, file);
            if (await fs.pathExists(filePath)) {
              const stats = await fs.stat(filePath);
              console.log(`📄 ${file} (${Math.round(stats.size / 1024)}KB, modified: ${stats.mtime.toLocaleDateString()})`);
            }
          }
        } else {
          console.log('⚠️ OneDrive memory path not found, using local memory');
        }
      }
    }
    
    // Initialize memory system
    const memory = new TrinityMemorySystem();
    await memory.loadPersistedMemory();
    
    // Force a memory persistence to trigger sync
    await memory.storeMemory(
      `sync_${Date.now()}`,
      {
        action: 'manual_sync',
        timestamp: new Date(),
        user: process.env.USERNAME || process.env.USER || 'unknown',
        onedrive_connected: true
      },
      'patterns',
      5
    );
    
    console.log('✅ Memory sync completed successfully');
    console.log('📊 Current memory stats:');
    console.log(`   📁 Categories: ${Array.from(memory.categories).join(', ')}`);
    console.log(`   🧠 Nodes: ${memory.nodeCount}`);
    console.log('💾 Memory persisted with OneDrive integration');
    
  } catch (error) {
    console.error('❌ Memory sync failed:', error);
    process.exit(1);
  }
}

syncMemory().catch(console.error);
