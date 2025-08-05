# Trinity Awaken Startup Script
# This script starts the complete Trinity Awaken system

$Host.UI.RawUI.WindowTitle = "Trinity Awaken - Starting..."
$Host.UI.RawUI.BackgroundColor = "Black"
$Host.UI.RawUI.ForegroundColor = "Green"
Clear-Host

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "    🌟 TRINITY AWAKEN STARTUP 🌟" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Project directory
$ProjectPath = "c:\Users\user\OneDrive - d3cipher.io\Desktop\Trinity Dropzone\Workspaces\orphan\New folder"

Write-Host "🔄 Changing to project directory..." -ForegroundColor Yellow
Set-Location $ProjectPath

# Verify we're in the right place
if (-not (Test-Path "package.json")) {
    Write-Host "❌ ERROR: Trinity Awaken project not found!" -ForegroundColor Red
    Write-Host "Expected location: $PWD" -ForegroundColor Red
    Write-Host "Please check the path and try again." -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host "✅ Found Trinity Awaken project" -ForegroundColor Green
Write-Host "📁 Location: $PWD" -ForegroundColor White
Write-Host ""

# Check Node.js installation
try {
    $nodeVersion = node --version
    Write-Host "✅ Node.js version: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js not found! Please install Node.js first." -ForegroundColor Red
    Start-Process "https://nodejs.org"
    Read-Host "Press Enter to exit"
    exit 1
}

# Check if dependencies are installed
if (-not (Test-Path "node_modules")) {
    Write-Host "🔄 Installing dependencies..." -ForegroundColor Yellow
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Failed to install dependencies" -ForegroundColor Red
        Read-Host "Press Enter to exit"
        exit 1
    }
    Write-Host "✅ Dependencies installed" -ForegroundColor Green
    Write-Host ""
}

# Check and connect to existing Trinity Memory repository
Write-Host "🧠 Connecting to Trinity Memory System..." -ForegroundColor Magenta
$memoryPath = "C:\Users\user\OneDrive - d3cipher.io\Development\TrinityMemory"
if (Test-Path $memoryPath) {
    Write-Host "✅ Found existing Trinity Memory repository" -ForegroundColor Green
    Write-Host "📂 Location: $memoryPath" -ForegroundColor Blue
    Write-Host "🔗 Syncing with OneDrive persistent memory..." -ForegroundColor Cyan
} else {
    Write-Host "⚠️ Trinity Memory repository not found, creating local memory..." -ForegroundColor Yellow
}

# Setup memory sync with existing repository
Write-Host "🔄 Setting up memory persistence..." -ForegroundColor Yellow
npm run setup:deciphergit
Write-Host ""

# Sync with existing Trinity Memory
Write-Host "🔄 Syncing with persistent Trinity Memory..." -ForegroundColor Yellow
npm run memory:sync
Write-Host ""

# Start the system
Write-Host "🚀 Starting Trinity Awaken Full System..." -ForegroundColor Cyan
Write-Host ""
Write-Host "🌐 Web Interface: " -NoNewline -ForegroundColor White
Write-Host "http://localhost:3000" -ForegroundColor Blue
Write-Host "🎼 MCP Orchestra: " -NoNewline -ForegroundColor White  
Write-Host "ws://localhost:8080" -ForegroundColor Blue
Write-Host "🧠 Trinity Memory: " -NoNewline -ForegroundColor White
Write-Host "Connected to OneDrive persistent storage" -ForegroundColor Magenta
Write-Host ""
Write-Host "Press Ctrl+C in any terminal window to stop the system" -ForegroundColor Yellow
Write-Host ""

# Update window title
$Host.UI.RawUI.WindowTitle = "Trinity Awaken - Running (Web: :3000 | MCP: :8080 | Memory: OneDrive)"

# Start the full Trinity system
npm run trinity:full

Write-Host ""
Write-Host "🛑 Trinity Awaken system stopped" -ForegroundColor Red
Write-Host "💾 Memory automatically saved to OneDrive Trinity repository" -ForegroundColor Green
Read-Host "Press Enter to close"
