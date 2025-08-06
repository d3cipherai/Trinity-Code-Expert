'use client';

import { useState, useEffect, useRef } from 'react';

interface Message {
  id: string;
  text: string;
  sender: 'trinity' | 'user';
  timestamp: Date;
}

export default function TrinityChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Trinity awakening greeting
  useEffect(() => {
    const trinityGreeting = {
      id: 'greeting-' + Date.now(),
      text: "🌅 Good Morning Sunshine! What's groovy? ✨",
      sender: 'trinity' as const,
      timestamp: new Date()
    };
    
    setMessages([trinityGreeting]);
    setIsConnected(true);
  }, []);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: 'user-' + Date.now(),
      text: input.trim(),
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Send to Trinity MCP Bridge
      const response = await fetch('http://localhost:3979/test-trinity', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: userMessage.text }),
      });

      if (response.ok) {
        const data = await response.json();
        const trinityMessage: Message = {
          id: 'trinity-' + Date.now(),
          text: data.trinity_response || "🤖 Trinity is thinking...",
          sender: 'trinity',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, trinityMessage]);
      } else {
        throw new Error('Trinity MCP Bridge not responding');
      }
    } catch (error) {
      const errorMessage: Message = {
        id: 'error-' + Date.now(),
        text: "🔧 Trinity MCP Bridge offline. Start with: npm run mcp:bridge",
        sender: 'trinity',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Trinity Header */}
      <div className="bg-black/20 backdrop-blur-sm border-b border-purple-500/30 p-4">
        <div className="flex items-center space-x-3">
          <div className={`w-3 h-3 rounded-full ${isConnected ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`}></div>
          <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            🦸‍♀️ Trinity Awaken Chat
          </h2>
          <div className="text-sm text-purple-300">
            {isConnected ? 'Connected to MCP Orchestra' : 'Offline'}
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                message.sender === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-purple-600/80 text-white backdrop-blur-sm'
              }`}
            >
              <div className="text-sm whitespace-pre-wrap">{message.text}</div>
              <div className="text-xs opacity-70 mt-1">
                {message.timestamp.toLocaleTimeString()}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-purple-600/80 text-white backdrop-blur-sm px-4 py-2 rounded-lg">
              <div className="flex items-center space-x-2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                <span>Trinity is thinking...</span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="bg-black/20 backdrop-blur-sm border-t border-purple-500/30 p-4">
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="What's groovy today? ✨"
            className="flex-1 bg-white/10 backdrop-blur-sm border border-purple-500/30 rounded-lg px-4 py-2 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            disabled={isLoading}
          />
          <button
            onClick={sendMessage}
            disabled={!input.trim() || isLoading}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-2 rounded-lg font-medium transition-all duration-200"
          >
            Send
          </button>
        </div>
        <div className="text-xs text-purple-300 mt-2 text-center">
          Connected to Teams as Trinity-Code-Expert@NETORG19101057.onmicrosoft.com
        </div>
      </div>
    </div>
  );
}
