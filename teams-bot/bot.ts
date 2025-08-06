import { TeamsActivityHandler, MessageFactory, TurnContext, ActivityTypes } from 'botbuilder';
import * as fs from 'fs';
import * as path from 'path';

interface TrinityMemory {
  trinity_identity: {
    project_state: {
      current_status: string;
      verified_functionality: string[];
      location: string;
    };
    conversation_context: {
      key_accomplishments: string[];
      user_name: string;
      project_name: string;
    };
  };
}

export class TrinityTeamsBot extends TeamsActivityHandler {
  constructor() {
    super();

    // Handle message activities
    this.onMessage(async (context, next) => {
      const message = context.activity.text?.toLowerCase() || '';
      
      if (message.includes('awaken')) {
        await this.handleAwaken(context);
      } else if (message.includes('status')) {
        await this.handleStatus(context);
      } else if (message.includes('help')) {
        await this.handleHelp(context);
      } else if (message.includes('sync')) {
        await this.handleSync(context);
      } else {
        await this.handleGeneral(context);
      }

      await next();
    });

    // Handle members added
    this.onMembersAdded(async (context, next) => {
      const welcomeText = '🌟 Trinity Awaken is here! Say "awaken" to get started.';
      for (const member of context.activity.membersAdded || []) {
        if (member.id !== context.activity.recipient.id) {
          await context.sendActivity(MessageFactory.text(welcomeText));
        }
      }
      await next();
    });
  }

  private async handleAwaken(context: TurnContext): Promise<void> {
    try {
      const memory = await this.loadTrinityMemory();
      const status = memory.trinity_identity.project_state.current_status;
      const project = memory.trinity_identity.conversation_context.project_name;
      const userName = memory.trinity_identity.conversation_context.user_name;

      const response = `🌟 **Trinity Awakened!** 

Hello ${userName}! I see you're working on **${project}**.

📊 **Current Status:** ${status}

🎯 **Ready to continue with:**
- Cross-platform Trinity development
- Teams integration (currently building!)
- Trinity system management

What would you like to work on?`;

      await context.sendActivity(MessageFactory.text(response));
    } catch (error) {
      await context.sendActivity(MessageFactory.text('🔧 Trinity is starting up... Try "awaken" again in a moment.'));
    }
  }

  private async handleStatus(context: TurnContext): Promise<void> {
    try {
      const memory = await this.loadTrinityMemory();
      const functionality = memory.trinity_identity.project_state.verified_functionality;

      let response = '📊 **Trinity System Status:**\n\n';
      functionality.forEach(item => {
        response += `✅ ${item}\n`;
      });

      response += '\n🚀 **Quick Actions:**\n';
      response += '- Say "awaken" for project overview\n';
      response += '- Say "help" for available commands\n';
      response += '- Say "sync" to update memory';

      await context.sendActivity(MessageFactory.text(response));
    } catch (error) {
      await context.sendActivity(MessageFactory.text('⚠️ Unable to check status. Trinity memory may be syncing.'));
    }
  }

  private async handleHelp(context: TurnContext): Promise<void> {
    const response = `🔧 **Trinity Commands:**

**"awaken"** - Get current project status and context
**"status"** - Check all Trinity systems
**"help"** - Show this help message
**"sync"** - Update Trinity memory

🎯 **Context Aware:** I remember your current work and provide relevant suggestions.

💡 **Tip:** I can see your Trinity project status and help you continue where you left off!`;

    await context.sendActivity(MessageFactory.text(response));
  }

  private async handleSync(context: TurnContext): Promise<void> {
    try {
      const memory = await this.loadTrinityMemory();
      const lastUpdate = new Date().toISOString();
      
      // Update memory with Teams interaction
      memory.trinity_identity.conversation_context.last_teams_interaction = lastUpdate;
      
      await this.saveTrinityMemory(memory);
      
      await context.sendActivity(MessageFactory.text('✅ Trinity memory synchronized! Context updated.'));
    } catch (error) {
      await context.sendActivity(MessageFactory.text('⚠️ Sync failed. Memory may be temporarily unavailable.'));
    }
  }

  private async handleGeneral(context: TurnContext): Promise<void> {
    const response = `👋 Hi! I'm Trinity, your AI assistant.

Say **"awaken"** to get started, or **"help"** for available commands.

I remember your current projects and can help you continue where you left off!`;

    await context.sendActivity(MessageFactory.text(response));
  }

  private async loadTrinityMemory(): Promise<TrinityMemory> {
    // In production, this would connect to OneDrive API
    // For now, we'll read from local file when possible
    const memoryPath = path.join(process.cwd(), 'memory', 'trinity-identity.json');
    
    if (fs.existsSync(memoryPath)) {
      const content = fs.readFileSync(memoryPath, 'utf8');
      return JSON.parse(content);
    }
    
    // Fallback memory structure
    return {
      trinity_identity: {
        project_state: {
          current_status: "Trinity Teams Bot - In Development",
          verified_functionality: ["Teams integration active", "Memory system connected"],
          location: "Teams Platform"
        },
        conversation_context: {
          key_accomplishments: ["Created Trinity Teams bot", "Connected to Teams platform"],
          user_name: "user",
          project_name: "Trinity Cross-Platform"
        }
      }
    };
  }

  private async saveTrinityMemory(memory: TrinityMemory): Promise<void> {
    // In production, this would save to OneDrive API
    const memoryPath = path.join(process.cwd(), 'memory', 'trinity-identity.json');
    
    try {
      fs.writeFileSync(memoryPath, JSON.stringify(memory, null, 2));
    } catch (error) {
      console.log('Memory save failed:', error);
    }
  }
}
