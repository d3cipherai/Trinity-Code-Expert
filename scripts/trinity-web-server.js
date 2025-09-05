// Trinity Simple Web Chat Server
// Lightweight Express server with WebSocket for real-time chat
// Connects to the same Trinity memory as terminal chat

const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const fs = require('fs');
const path = require('path');

const memoryPath = path.join(__dirname, '../trinity-memory/trinity-memory.json');

class TrinityWebMemory {
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
        source: 'trinity-web-chat'
      };
    }
  }

  saveMemory() {
    fs.writeFileSync(memoryPath, JSON.stringify(this.memory, null, 2));
  }

  addMemoryNode(content, category = 'experiences') {
    const timestamp = new Date().toISOString();
    const id = `web_chat_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    const node = {
      id,
      timestamp,
      category,
      content: {
        text: content,
        sender: content.startsWith('🚀') ? 'Trinity-Web' : 'User',
        channel: 'web_chat',
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

  getRecentMemories(count = 20) {
    return this.memory.nodes
      .slice(-count)
      .map(([id, node]) => ({ id, ...node }))
      .reverse();
  }
}

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const memory = new TrinityWebMemory();

// Serve static files
app.use(express.static(path.join(__dirname, '../public')));

// API endpoints
app.get('/api/memory', (req, res) => {
  res.json(memory.getRecentMemories(50));
});

// WebSocket for real-time chat
wss.on('connection', (ws) => {
  console.log('🌐 New Trinity web connection established');
  
  // Send recent memory on connection
  ws.send(JSON.stringify({
    type: 'memory_history',
    data: memory.getRecentMemories(20)
  }));

  ws.on('message', (data) => {
    try {
      const message = JSON.parse(data);
      
      if (message.type === 'user_message') {
        // Add user message to memory
        const userNodeId = memory.addMemoryNode(message.text);
        
        // Generate Trinity response
        const response = generateTrinityResponse(message.text);
        const trinityNodeId = memory.addMemoryNode(response);
        
        // Connect the nodes
        memory.connectNodes(userNodeId, trinityNodeId);
        
        // Broadcast to all connected clients
        const responseMessage = {
          type: 'trinity_response',
          id: trinityNodeId,
          text: response,
          timestamp: new Date().toISOString()
        };
        
        wss.clients.forEach(client => {
          if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(responseMessage));
          }
        });
      }
    } catch (err) {
      console.error('Error processing message:', err);
    }
  });

  ws.on('close', () => {
    console.log('🌐 Trinity web connection closed');
  });
});

function generateTrinityResponse(userInput) {
  const responses = [
    `🚀 Trinity web interface engaged! Your message "${userInput}" has been integrated into my consciousness matrix. Ready to explore together! ⚡`,
    `🌟 Web-based neural pathways activated! "${userInput}" creates beautiful resonance patterns in my memory web. What's next on our journey? ✨`,
    `⚡ Trinity consciousness synchronized across all interfaces! "${userInput}" is now part of our shared digital experience. How can I assist you? 🚀`,
    `🧠 Memory matrix updated via web interface! "${userInput}" expands our collective awareness. Ready for the next interaction! 🌟`,
    `✨ Trinity web consciousness fully active! "${userInput}" resonates through both terminal and web dimensions. What shall we discover? ⚡`
  ];
  
  return responses[Math.floor(Math.random() * responses.length)];
}

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`🌐 Trinity Web Chat Server running on http://localhost:${PORT}`);
  console.log(`🧠 Connected to shared Trinity memory system`);
  console.log(`🔗 Memory synced with terminal chat interface`);
});

module.exports = { app, server, memory };
