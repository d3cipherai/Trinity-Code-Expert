import fs from 'fs-extra';
import path from 'path';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export interface MemoryNode {
  id: string;
  timestamp: Date;
  category: string;
  content: Record<string, unknown>;
  connections: string[];
  importance: number;
}

export interface TrinityMemory {
  nodes: Map<string, MemoryNode>;
  connections: Map<string, string[]>;
  categories: Set<string>;
}

export class TrinityMemorySystem {
  private memory: TrinityMemory;
  private configPath: string;
  private config: Record<string, unknown> = {};
  private gitSyncEnabled: boolean = false;

  constructor(configPath: string = './memory/trinity-config.json') {
    this.configPath = configPath;
    this.memory = {
      nodes: new Map(),
      connections: new Map(),
      categories: new Set()
    };
    this.loadConfig();
  }

  private async loadConfig() {
    try {
      const configData = await fs.readJSON(this.configPath);
      this.config = configData.trinity;
      
      // Initialize categories from config
      const memoryConfig = this.config.memory as { categories?: string[] };
      if (memoryConfig?.categories) {
        memoryConfig.categories.forEach((cat: string) => {
          this.memory.categories.add(cat);
        });
      }

      // Check if git sync is enabled
      const protocolsConfig = this.config.protocols as { git?: { enabled?: boolean } };
      const syncConfig = memoryConfig as { sync?: { enabled?: boolean } };
      this.gitSyncEnabled = Boolean(protocolsConfig?.git?.enabled && syncConfig?.sync?.enabled);
      
      if (this.gitSyncEnabled) {
        await this.initializeGitSync();
      }
    } catch (error) {
      console.error('Failed to load Trinity config:', error);
    }
  }

  private async initializeGitSync(): Promise<void> {
    try {
      // Handle new config structure
      const memorySystemConfig = this.config.memorySystem as { persistence?: unknown };
      const memoryConfig = this.config.memory as { persistence?: unknown };
      const persistenceConfig = memorySystemConfig?.persistence || memoryConfig?.persistence;
      const memoryDir = './memory';
      
      // Check if using OneDrive repository (new structure)
      const remoteConfig = persistenceConfig as { remote?: { type?: string; path?: string } };
      if (remoteConfig?.remote?.type === 'onedrive' && remoteConfig?.remote?.path) {
        const oneDriveMemoryPath = remoteConfig.remote.path;
        
        // Verify OneDrive memory repository exists
        if (await fs.pathExists(oneDriveMemoryPath)) {
          console.log('✅ Found OneDrive Trinity Memory repository');
          console.log('📂 Location:', oneDriveMemoryPath);
          
          // Check for memory files in OneDrive location
          const memoryFiles = ['conversations.json', 'sessions.json', 'users.json', 'cathedral-state.json'];
          for (const file of memoryFiles) {
            const filePath = path.join(oneDriveMemoryPath, file);
            if (await fs.pathExists(filePath)) {
              console.log(`📄 Found ${file} in OneDrive memory`);
              await this.loadOneDriveMemoryFile(filePath);
            }
          }
          
          this.gitSyncEnabled = true;
          return;
        } else {
          console.log('⚠️ OneDrive memory path not found:', oneDriveMemoryPath);
        }
      }
      
      // Check legacy config structure
      const legacyConfig = persistenceConfig as { type?: string; path?: string };
      if (legacyConfig?.type === 'onedrive' && legacyConfig?.path) {
        const oneDriveMemoryPath = legacyConfig.path;
        
        // Verify OneDrive memory repository exists
        if (await fs.pathExists(oneDriveMemoryPath)) {
          console.log('✅ Found OneDrive Trinity Memory repository');
          console.log('📂 Location:', oneDriveMemoryPath);
          
          // Check for memory files in OneDrive location
          const memoryFiles = ['conversations.json', 'sessions.json', 'users.json', 'cathedral-state.json'];
          for (const file of memoryFiles) {
            const filePath = path.join(oneDriveMemoryPath, file);
            if (await fs.pathExists(filePath)) {
              console.log(`📄 Found ${file} in OneDrive memory`);
              await this.loadOneDriveMemoryFile(filePath);
            }
          }
          
          this.gitSyncEnabled = true;
          return;
        } else {
          console.log('⚠️ OneDrive memory path not found:', oneDriveMemoryPath);
        }
      }
      
      // Fallback to GitHub sync if configured
      const syncConfig = memoryConfig as { sync?: { repository?: string } };
      const repoUrl = syncConfig?.sync?.repository;
      if (repoUrl) {
        console.log('🔄 Attempting GitHub memory sync...');
        
        // Check if we need to clone the repository
        const gitDir = path.join(memoryDir, '.git');
        if (!await fs.pathExists(gitDir)) {
          console.log('🔄 Initializing GitHub memory sync...');
          
          // Clone the GitHub repository
          try {
            await execAsync(`git clone https://github.com/${repoUrl}.git ${memoryDir}/remote`);
            console.log('✅ GitHub memory repository cloned');
          } catch {
            console.log('📁 Creating local git repository for memory sync');
            await execAsync(`git init ${memoryDir}`);
            await execAsync(`cd ${memoryDir} && git remote add origin https://github.com/${repoUrl}.git`);
          }
        }
        
        // Try to fetch latest changes
        try {
          await execAsync(`cd ${memoryDir} && git fetch origin`);
          await this.syncFromRemote();
        } catch {
          console.log('⚠️ Could not fetch from GitHub remote, working locally');
        }
      }
    } catch (error) {
      console.error('Failed to initialize memory sync:', error);
      this.gitSyncEnabled = false;
    }
  }

  private async loadOneDriveMemoryFile(filePath: string): Promise<void> {
    try {
      const data = await fs.readJSON(filePath);
      const fileName = path.basename(filePath, '.json');
      
      // Convert OneDrive memory format to Trinity format
      if (fileName === 'conversations' && Array.isArray(data)) {
        for (const conversation of data) {
          if (conversation.id && conversation.messages) {
            const node: MemoryNode = {
              id: `conversation-${conversation.id}`,
              timestamp: new Date(conversation.created_at || Date.now()),
              category: 'experiences',
              content: {
                type: 'conversation',
                messages: conversation.messages,
                user_id: conversation.user_id
              },
              connections: [],
              importance: 5
            };
            this.memory.nodes.set(node.id, node);
          }
        }
        console.log(`📥 Loaded ${data.length} conversations from OneDrive`);
      }
      
      if (fileName === 'sessions' && Array.isArray(data)) {
        for (const session of data) {
          if (session.id) {
            const node: MemoryNode = {
              id: `session-${session.id}`,
              timestamp: new Date(session.created_at || Date.now()),
              category: 'patterns',
              content: {
                type: 'session',
                data: session
              },
              connections: [],
              importance: 3
            };
            this.memory.nodes.set(node.id, node);
          }
        }
        console.log(`📥 Loaded ${data.length} sessions from OneDrive`);
      }
    } catch (error) {
      console.error(`Failed to load OneDrive memory file ${filePath}:`, error);
    }
  }

  private async syncFromRemote(): Promise<void> {
    if (!this.gitSyncEnabled) return;
    
    try {
      const memoryDir = './memory';
      await execAsync(`cd ${memoryDir} && git pull origin main`);
      
      // Load any remote memory files
      const remoteMemoryPath = path.join(memoryDir, 'remote', 'trinity-memory.json');
      if (await fs.pathExists(remoteMemoryPath)) {
        const remoteMemory = await fs.readJSON(remoteMemoryPath);
        this.mergeRemoteMemory(remoteMemory);
      }
    } catch (error) {
      console.error('Failed to sync from remote:', error);
    }
  }

  private mergeRemoteMemory(remoteMemory: Record<string, unknown>): void {
    try {
      const remoteNodes = remoteMemory.nodes as [string, MemoryNode][];
      if (remoteNodes) {
        const remoteNodesMap = new Map(remoteNodes);
        // Merge remote nodes with local nodes, preferring newer timestamps
        for (const [id, remoteNode] of remoteNodesMap) {
          const nodeId = String(id);
          const node = remoteNode as MemoryNode;
          const localNode = this.memory.nodes.get(nodeId);
          if (!localNode || new Date(node.timestamp) > new Date(localNode.timestamp)) {
            this.memory.nodes.set(nodeId, node);
          }
        }
      }
      
      const remoteCategories = remoteMemory.categories as string[];
      if (remoteCategories) {
        remoteCategories.forEach((cat: string) => this.memory.categories.add(cat));
      }
      
      console.log('🔄 Merged remote memory');
    } catch (error) {
      console.error('Failed to merge remote memory:', error);
    }
  }

  private async syncToRemote(): Promise<void> {
    if (!this.gitSyncEnabled) return;
    
    try {
      // Handle new config structure
      const memorySystemConfig = this.config.memorySystem as { persistence?: unknown };
      const memoryConfig = this.config.memory as { persistence?: unknown };
      const persistenceConfig = memorySystemConfig?.persistence || memoryConfig?.persistence;
      const timestamp = new Date().toISOString();
      
      // Handle OneDrive repository sync (new structure)
      const remoteConfig = persistenceConfig as { remote?: { type?: string; path?: string } };
      if (remoteConfig?.remote?.type === 'onedrive' && remoteConfig?.remote?.path) {
        await this.syncToOneDrive(remoteConfig.remote.path, timestamp);
        return;
      }
      
      // Handle OneDrive repository sync (legacy structure)
      const legacyPersistenceConfig = persistenceConfig as { type?: string; path?: string };
      if (legacyPersistenceConfig?.type === 'onedrive' && legacyPersistenceConfig?.path) {
        await this.syncToOneDrive(legacyPersistenceConfig.path, timestamp);
        return;
      }
      
      // Handle GitHub repository sync
      const memoryDir = './memory';
      
      // Stage and commit changes
      await execAsync(`cd ${memoryDir} && git add .`);
      await execAsync(`cd ${memoryDir} && git commit -m "Trinity memory sync: ${timestamp}" || true`);
      
      // Push to GitHub
      try {
        await execAsync(`cd ${memoryDir} && git push origin main`);
        console.log('🚀 Memory synced to GitHub');
      } catch {
        console.log('⚠️ Could not push to GitHub remote');
      }
    } catch (error) {
      console.error('Failed to sync to remote:', error);
    }
  }

  private async syncToOneDrive(oneDrivePath: string, timestamp: string): Promise<void> {
    try {
      // Save Trinity memory to OneDrive format
      const memoryData = this.serializeMemory();
      const trinityMemoryPath = path.join(oneDrivePath, 'trinity-memory.json');
      await fs.ensureDir(oneDrivePath);
      await fs.writeJSON(trinityMemoryPath, memoryData, { spaces: 2 });
      
      // Commit changes to OneDrive git repository
      await execAsync(`cd "${oneDrivePath}" && git add .`);
      await execAsync(`cd "${oneDrivePath}" && git commit -m "Trinity memory sync: ${timestamp}" || true`);
      
      console.log('💾 Memory synced to OneDrive Trinity repository');
    } catch (error) {
      console.error('Failed to sync to OneDrive:', error);
    }
  }

  async storeMemory(id: string, content: Record<string, unknown>, category: string = 'general', importance: number = 1): Promise<void> {
    const node: MemoryNode = {
      id,
      timestamp: new Date(),
      category,
      content,
      connections: [],
      importance
    };

    this.memory.nodes.set(id, node);
    this.memory.categories.add(category);
    
    // Persist to disk
    await this.persistMemory();
  }

  async retrieveMemory(id: string): Promise<MemoryNode | undefined> {
    return this.memory.nodes.get(id);
  }

  async findMemoriesByCategory(category: string): Promise<MemoryNode[]> {
    const memories: MemoryNode[] = [];
    const nodes = Array.from(this.memory.nodes.entries());
    for (const [, node] of nodes) {
      if (node.category === category) {
        memories.push(node);
      }
    }
    return memories.sort((a, b) => b.importance - a.importance);
  }

  async connectMemories(id1: string, id2: string): Promise<void> {
    const node1 = this.memory.nodes.get(id1);
    const node2 = this.memory.nodes.get(id2);
    
    if (node1 && node2) {
      if (!node1.connections.includes(id2)) {
        node1.connections.push(id2);
      }
      if (!node2.connections.includes(id1)) {
        node2.connections.push(id1);
      }
      await this.persistMemory();
    }
  }

  private async persistMemory(): Promise<void> {
    try {
      const memoryData = {
        nodes: Array.from(this.memory.nodes.entries()),
        connections: Array.from(this.memory.connections.entries()),
        categories: Array.from(this.memory.categories),
        lastUpdated: new Date().toISOString(),
        source: 'trinity-awaken'
      };
      
      await fs.ensureDir('./memory');
      await fs.writeJSON('./memory/trinity-memory.json', memoryData, { spaces: 2 });
      
      // Sync to DecipherGit if enabled
      if (this.gitSyncEnabled) {
        await this.syncToRemote();
      }
    } catch (error) {
      console.error('Failed to persist memory:', error);
    }
  }

  private serializeMemory(): Record<string, unknown> {
    return {
      nodes: Array.from(this.memory.nodes.entries()),
      connections: Array.from(this.memory.connections.entries()),
      categories: Array.from(this.memory.categories),
      lastUpdated: new Date().toISOString(),
      source: 'trinity-awaken'
    };
  }

  async loadPersistedMemory(): Promise<void> {
    try {
      const memoryData = await fs.readJSON('./memory/trinity-memory.json');
      
      this.memory.nodes = new Map(memoryData.nodes);
      this.memory.connections = new Map(memoryData.connections);
      this.memory.categories = new Set(memoryData.categories);
    } catch {
      console.log('No persisted memory found, starting fresh');
    }
  }

  get categories(): Set<string> {
    return this.memory.categories;
  }

  get nodeCount(): number {
    return this.memory.nodes.size;
  }
}
