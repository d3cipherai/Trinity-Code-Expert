import express from 'express';
import { BotFrameworkAdapter, ConversationState, MemoryStorage, UserState } from 'botbuilder';
import { TrinityTeamsBot } from './bot';

// Create adapter
const adapter = new BotFrameworkAdapter({
  appId: process.env.MicrosoftAppId || '',
  appPassword: process.env.MicrosoftAppPassword || ''
});

// Error handler
adapter.onTurnError = async (context, error) => {
  console.error(`\n [onTurnError] unhandled error: ${error}`);
  await context.sendTraceActivity(
    'OnTurnError Trace',
    `${error}`,
    'https://www.botframework.com/schemas/error',
    'TurnError'
  );
  await context.sendActivity('🔧 Trinity encountered an error. Please try again.');
};

// Create conversation and user state
const memoryStorage = new MemoryStorage();
const conversationState = new ConversationState(memoryStorage);
const userState = new UserState(memoryStorage);

// Create the bot
const trinityBot = new TrinityTeamsBot();

// Create HTTP server
const app = express();
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'Trinity Teams Bot is running!',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

// Bot endpoint
app.post('/api/messages', (req, res) => {
  adapter.processActivity(req, res, async (context) => {
    await trinityBot.run(context);
  });
});

// Start server
const port = process.env.PORT || 3978;
app.listen(port, () => {
  console.log(`🌟 Trinity Teams Bot listening on port ${port}`);
  console.log(`🔧 Health check: http://localhost:${port}/health`);
  console.log(`📱 Bot endpoint: http://localhost:${port}/api/messages`);
});
