// Trinity Memory Visualizer
// Usage: Place this file in your project, run with Node.js, or adapt for browser/React
// Reads trinity-memory.json and prints a simple graph structure

const fs = require('fs');
const path = require('path');

const memoryPath = path.join(__dirname, '../../trinity-memory/trinity-memory.json');

function loadMemory() {
  const raw = fs.readFileSync(memoryPath, 'utf-8');
  return JSON.parse(raw);
}

function printGraph(memory) {
  console.log('Trinity Memory Graph:');
  for (const [id, node] of memory.nodes) {
    const content = node.content.text;
    const connections = node.connections || [];
    console.log(`- [${id}] ${content}`);
    if (connections.length > 0) {
      connections.forEach(conn => {
        console.log(`    ↳ connects to: ${conn}`);
      });
    }
  }
}

function main() {
  const memory = loadMemory();
  printGraph(memory);
}

main();
