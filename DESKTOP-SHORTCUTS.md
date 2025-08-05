# Trinity Awaken Desktop Shortcuts

## 🖱️ How to Use

### "Trinity Awaken" Shortcut
- **Double-click** to start the complete Trinity Awaken system
- Automatically handles:
  - ✅ Dependency installation (if needed)
  - 🔗 DecipherGit memory connection setup
  - 🌐 Next.js web server (http://localhost:3000)
  - 🎼 MCP Orchestra (ws://localhost:8080)
  - 🧠 Trinity Memory System

### "Trinity Awaken Project" Shortcut  
- **Double-click** to open the project folder
- Use this to:
  - 📝 Edit files in VS Code
  - 🔍 Browse project structure
  - 🛠️ Access configuration files

## 🚀 After Reboot Instructions

1. **Double-click "Trinity Awaken"** on your desktop
2. Wait for the green terminal window to appear
3. System will automatically:
   - Install any missing dependencies
   - Connect to DecipherGit memory
   - Start both web and MCP servers
4. **Open your browser** to http://localhost:3000
5. **System is ready!** 🎉

## 🔧 Manual Commands (if needed)

From the project folder, you can also run:
```cmd
npm run startup          # Same as desktop shortcut
npm run trinity:full     # Start both servers
npm run create:shortcuts # Recreate desktop shortcuts
npm run memory:sync      # Sync memory with DecipherGit
```

## 🆘 Troubleshooting

**If shortcut doesn't work:**
1. Right-click "Trinity Awaken Project" → Open
2. Double-click `scripts/start-trinity.bat`
3. Or run `npm run startup` in terminal

**If ports are busy:**
- Close any running Node.js processes
- Restart your computer
- Try the shortcut again

**Missing shortcuts:**
- Run `npm run create:shortcuts` from project folder
- Or manually run `scripts/create-shortcuts.ps1`

---
**Trinity Awaken** - Your persistent AI memory system is just one click away! 🌟
