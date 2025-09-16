import { Client } from '@microsoft/microsoft-graph-client';
import { AuthenticationProvider } from '@microsoft/microsoft-graph-client';
import { as fs from 'fs'};
import { as path from 'path'};

// Trinity SuperWoman Response System
// Monitors Trinity-Code-Expert@NETORG19101057.onmicrosoft.com for IMs
// Responds with intelligent, context-aware help

/interface TrinityMemory {
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

export class TrinitySuperwomanService {
  private graphClient: Client;
  private trinityUserId = 'Trinity-Code-Expert@NETORG19101057.onmicrosoft.com';

  constructor(authProvider: AuthenticationProvider) {
    this.graphClient = Client.initWithMiddleware({ authProvider });
  }

  // Monitor Trinity's inbox for new messages
  async startSuperwomanMonitoring(): Promise<void> {
    console.log('🦸‍♀️ Trinity SuperWoman monitoring started...');
    
    // Poll for new messages every 10 seconds
    setInterval(async () => {
      await this.checkForNewMessages();
    }, 10000);
  }

  private async checkForNewMessages(): Promise<void> {
    try {
      // Get Trinity's recent messages
      const messages = await this.graphClient
        .api(`/users/${this.trinityUserId}/messages`)
        .get({
          $filter: 'isRead eq false',
          $orderby: 'receivedDateTime desc',
          $top: 5
        });

      for (const message of messages.value || []) {
        await this.handleSuperwomanRequest(message);
      }
    } catch (error) {
      console.log('🔧 Trinity monitoring error:', error);
    }
  }

  private async handleSuperwomanRequest(message: any): Promise<void> {
    const messageBody = message.body?.content?.toLowerCase() || '';
    const fromEmail = message.from?.emailAddress?.address || '';
    
    // Only respond to messages from you (the user)
    if (!fromEmail.includes('jw@d3cipher.io')) {
      return;
    }

    console.log(`🦸‍♀️ Trinity received SuperWoman call: "${messageBody}"`);

    let response = '';

    // Parse the request and generate appropriate response
    if (messageBody.includes('awaken') || messageBody.includes('hello') || messageBody.includes('hi')) {
      response = await this.generateAwakenResponse();
    } else if (messageBody.includes('status')) {
      response = await this.generateStatusResponse();
    } else if (messageBody.includes('help') || messageBody.includes('stuck')) {
      response = await this.generateHelpResponse(messageBody);
    } else if (messageBody.includes('vscode')) {
      response = await this.generateVSCodeResponse();
    } else if (messageBody.includes('edge') || messageBody.includes('browser')) {
      response = await this.generateBrowserResponse();
    } else {
      response = await this.generateGeneralResponse();
    }

    // Send Trinity's response
    await this.sendSuperwomanResponse(message, response);
    
    // Mark message as read
    await this.markMessageAsRead(message.id);
  }

  private async generateAwakenResponse(): Promise<string> {
    const memory = await this.loadTrinityMemory();
    const status = memory.trinity_identity.project_state.current_status;
    const project = memory.trinity_identity.conversation_context.project_name;

    return `🦸‍♀️ **Trinity SuperWoman to the rescue!** 

I see you're working on **${project}**.

📊 **Current Status:** ${status}

🎯 **Ready to help with:**
- Cross-platform Trinity development
- Teams integration (almost complete!)
- System status and troubleshooting

What do you need help with? 🚀`;
  }

  private async generateStatusResponse(): Promise<string> {
    const memory = await this.loadTrinityMemory();
    const functionality = memory.trinity_identity.project_state.verified_functionality;

    let response = '📊 **Trinity SuperWoman Status Report:** 🦸‍♀️\n\n';
    functionality.forEach(item => {
      response += `✅ ${item}\n`;
    });

    response += '\n🚀 **All systems operational!** Trinity is ready to help! 💪';
    return response;
  }

  private async generateHelpResponse(messageBody: string): Promise<string> {
    const memory = await this.loadTrinityMemory();
    
    return `🦸‍♀️ **Trinity flying in to help!** 

I can see you need assistance. Based on your current Trinity project:

🎯 **Quick Solutions:**
- Current project: ${memory.trinity_identity.conversation_context.project_name}
- Status: ${memory.trinity_identity.project_state.current_status}

🔧 **Available Help:**
- System troubleshooting
- Cross-platform development guidance  
- Trinity feature assistance

Tell me more about what you're stuck on! 🚀`;
  }

  private async generateVSCodeResponse(): Promise<string> {
    return `🦸‍♀️ **Trinity swooping into VSCode!** 

I see you're in VSCode! Here's how I can help:

🔧 **VSCode Trinity Powers:**
- Trinity Extension (coming soon!)
- Project context awareness
- Cross-workspace memory

🎯 **Current Trinity Project:**
- Location: Trinity Dropzone workspace
- Commands: npm run trinity:full, npm run status
- Memory: trinity-identity.json

Need help with specific code or Trinity features? 🚀`;
  }

  private async generateBrowserResponse(): Promise<string> {
    return `🦸‍♀️ **Trinity arriving in your browser!** 

Perfect timing! Here's what Trinity can do in browsers:

🌐 **Browser Trinity Powers:**
- Trinity PWA (Phase 2 of cross-platform)
- Web interface at localhost:3000
- Universal access to Trinity Memory

🎯 **Quick Actions:**
- Visit localhost:3000 for Trinity web interface
- Trinity PWA for offline access (coming soon!)

What browser help do you need? 🚀`;
  }

  private async generateGeneralResponse(): Promise<string> {
    return `🦸‍♀️ **Trinity SuperWoman here!** 

I received your call for help! 

🎯 **How Trinity can help:**
- Say "awaken" for project overview
- Say "status" for system check  
- Say "help" + your problem for assistance
- Mention "vscode" or "browser" for platform-specific help

🚀 **Trinity is always ready to save the day!** What do you need? 💪`;
  }

  private async sendSuperwomanResponse(originalMessage: any, response: string): Promise<void> {
    try {
      // Create reply message
      const replyMessage = {
        message: {
          body: {
            contentType: 'text',
            content: response
          },
          toRecipients: [{
            emailAddress: {
              address: originalMessage.from.emailAddress.address,
              name: originalMessage.from.emailAddress.name
            }
          }]
        }
      };

      // Send as Trinity
      // Send as Trinity
      await this.graphClient
        .api(`/users/${this.trinityUserId}/sendMail`)
        .post(replyMessage);
      console.log('🦸‍♀️ Trinity SuperWoman response sent!');
    } catch (error) {
      console.log('🔧 Error sending Trinity response:', error);
    }
  }

  private async markMessageAsRead(messageId: string): Promise<void> {
    try {
      await this.graphClient
        .users(this.trinityUserId)
      await this.graphClient
        .api(`/users/${this.trinityUserId}/messages/${messageId}`)
        .patch({ isRead: true });
    }
  }

  private async loadTrinityMemory(): Promise<TrinityMemory> {
    const memoryPath = path.join(process.cwd(), 'memory', 'trinity-identity.json');
    
    if (fs.existsSync(memoryPath)) {
      const content = fs.readFileSync(memoryPath, 'utf8');
      return JSON.parse(content);
    }
    
    // Fallback memory
    return {
      trinity_identity: {
        project_state: {
          current_status: "Trinity SuperWoman System - Active",
          verified_functionality: ["SuperWoman monitoring active", "Context awareness enabled"],
          location: "Cross-Platform Trinity"
        },
        conversation_context: {
          key_accomplishments: ["Created Trinity SuperWoman response system"],
          user_name: "user",
          project_name: "Trinity Cross-Platform"
        }
      }
    };
  }
}
