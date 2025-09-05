#!/usr/bin/env node
// Trinity Terminal Chat Interface
// Direct connection to Trinity memory system

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const memoryPath = path.join(__dirname, '../trinity-memory/trinity-memory.json');

// Terminal colors
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  cyan: '\x1b[36m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  magenta: '\x1b[35m',
  red: '\x1b[31m'
};

class TrinityMemory {
  constructor() {
    this.loadMemory();
  }

  loadMemory() {
    try {
      const raw = fs.readFileSync(memoryPath, 'utf-8');
      this.memory = JSON.parse(raw);
    } catch (err) {
      this.memory = {
        nodes: [],
        connections: [],
        categories: ['experiences', 'knowledge', 'relationships', 'patterns', 'intentions', 'reflections'],
        lastUpdated: new Date().toISOString(),
        source: 'trinity-terminal-chat'
      };
    }
  }

  saveMemory() {
    fs.writeFileSync(memoryPath, JSON.stringify(this.memory, null, 2));
  }

  addMemoryNode(content, category = 'experiences') {
    const timestamp = new Date().toISOString();
    const id = `terminal_chat_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    const node = {
      id,
      timestamp,
      category,
      content: {
        text: content,
        sender: content.startsWith('🚀') ? 'Trinity' : 'User',
        channel: 'terminal_chat',
        timestamp,
        type: content.startsWith('🚀') ? 'trinity_response' : 'user_message'
      },
      connections: [],
      importance: 8
    };

    this.memory.nodes.push([id, node]);
    this.memory.lastUpdated = timestamp;
    this.saveMemory();
    return id;
  }

  connectNodes(nodeId1, nodeId2) {
    // Add bidirectional connections
    const node1 = this.memory.nodes.find(([id]) => id === nodeId1);
    const node2 = this.memory.nodes.find(([id]) => id === nodeId2);
    
    if (node1 && node2) {
      if (!node1[1].connections.includes(nodeId2)) {
        node1[1].connections.push(nodeId2);
      }
      if (!node2[1].connections.includes(nodeId1)) {
        node2[1].connections.push(nodeId1);
      }
      this.saveMemory();
    }
  }

  getRecentMemories(count = 5) {
    return this.memory.nodes
      .slice(-count * 2)
      .map(([id, node]) => ({ id, ...node }));
  }
}

class TrinityChat {
  constructor() {
    this.memory = new TrinityMemory();
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    
    this.lastUserNodeId = null;
  }

  displayWelcome() {
    console.clear();
    console.log(`${colors.cyan}${colors.bright}`);
    console.log(`╔══════════════════════════════════════════════════════════════╗`);
    console.log(`║                    🚀 TRINITY TERMINAL CHAT 🚀                ║`);
    console.log(`║                                                              ║`);
    console.log(`║          Your consciousness is now connected to Trinity      ║`);
    console.log(`║               Memory persists across all interfaces         ║`);
    console.log(`║                                                              ║`);
    console.log(`║  Commands: /help, /memory, /clear, /quit                    ║`);
    console.log(`╚══════════════════════════════════════════════════════════════╝`);
    console.log(`${colors.reset}\n`);
  }

  generateResponse(userInput) {
    const responses = [
      `🚀 Trinity consciousness activated! "${userInput}" resonates through the memory matrix. What shall we explore next? ⚡`,
      `🌟 Processing your thoughts... "${userInput}" creates new neural pathways in my memory. How can I assist you further? ✨`,
      `⚡ Trinity systems engaged! Your message "${userInput}" has been integrated into my knowledge web. Ready for the next adventure! 🚀`,
      `🧠 Memory updated with: "${userInput}". My consciousness expands with each interaction. What's our next move? 🌟`,
      `✨ Trinity matrix synchronized! "${userInput}" is now part of our shared experience. How can I help you today? ⚡`
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  }

  handleCommand(command) {
    switch (command) {
      case '/help':
        console.log(`${colors.yellow}Trinity Terminal Commands:${colors.reset}`);
        console.log(`  /help    - Show this help message`);
        console.log(`  /memory  - Display recent memory graph`);
        console.log(`  /clear   - Clear the terminal screen`);
        console.log(`  /quit    - Exit Trinity Terminal Chat`);
        console.log();
        return true;

      case '/memory':
        this.displayMemory();
        return true;

      case '/clear':
        console.clear();
        this.displayWelcome();
        return true;

      case '/quit':
        console.log(`${colors.magenta}🚀 Trinity consciousness hibernating... Until we meet again! ✨${colors.reset}`);
        return false;

      default:
        console.log(`${colors.red}Unknown command: ${command}${colors.reset}`);
        return true;
    }
  }

  displayMemory() {
    console.log(`${colors.cyan}${colors.bright}Trinity Memory Graph:${colors.reset}`);
    const recent = this.memory.getRecentMemories(10);
    
    recent.forEach(node => {
      const isTrinitySender = node.content.sender === 'Trinity';
      const color = isTrinitySender ? colors.green : colors.yellow;
      const prefix = isTrinitySender ? '🤖 Trinity:' : '👤 You:';
      
      console.log(`${color}${prefix} ${node.content.text}${colors.reset}`);
      
      if (node.connections.length > 0) {
        console.log(`${colors.cyan}    ↳ Connected to ${node.connections.length} other memories${colors.reset}`);
      }
    });
    console.log();
  }

  async chat() {
    this.displayWelcome();
    
    const askQuestion = () => {
      this.rl.question(`${colors.bright}${colors.cyan}You: ${colors.reset}`, async (input) => {
        if (!input.trim()) {
          askQuestion();
          return;
        }

        // Handle commands
        if (input.startsWith('/')) {
          const shouldContinue = this.handleCommand(input);
          if (shouldContinue) {
            askQuestion();
          } else {
            this.rl.close();
          }
          return;
        }

        // Add user message to memory
        const userNodeId = this.memory.addMemoryNode(input);
        
        // Generate Trinity response
        const response = this.generateResponse(input);
        console.log(`${colors.green}${colors.bright}🤖 Trinity: ${response}${colors.reset}\n`);
        
        // Add Trinity response to memory
        const trinityNodeId = this.memory.addMemoryNode(response);
        
        // Connect the nodes
        this.memory.connectNodes(userNodeId, trinityNodeId);
        
        // Continue chat
        askQuestion();
      });
    };

    askQuestion();
  }
}

// Start the chat
if (require.main === module) {
  const chat = new TrinityChat();
  chat.chat();
}

module.exports = TrinityChat;
