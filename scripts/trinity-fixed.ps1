# Trinity Awaken Fixed Startup Script
# This script starts the complete Trinity Awaken system

$Host.UI.RawUI.WindowTitle = "Trinity Awaken - Starting..."
$Host.UI.RawUI.BackgroundColor = "Black"
$Host.UI.RawUI.ForegroundColor = "Green"
Clear-Host

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "    TRINITY AWAKEN STARTUP" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# FORCE to Trinity project directory (absolute path to ensure we're in the right place)
$ProjectPath = "c:\Users\user\OneDrive - d3cipher.io\Desktop\Trinity Dropzone\Workspaces\orphan\New folder"

Write-Host "Navigating to Trinity project directory..." -ForegroundColor Yellow
Write-Host "Target: $ProjectPath" -ForegroundColor Cyan

# Force change to the exact project directory
try {
    Set-Location $ProjectPath -ErrorAction Stop
    Write-Host "Successfully navigated to Trinity project" -ForegroundColor Green
} catch {
    Write-Host "ERROR: Could not navigate to Trinity project directory!" -ForegroundColor Red
    Write-Host "Path: $ProjectPath" -ForegroundColor Red
    Write-Host "Error: $($_.Exception.Message)" -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host "Current location: $PWD" -ForegroundColor White

# Verify we're in the right place
if (-not (Test-Path "package.json")) {
    Write-Host "ERROR: Trinity Awaken project not found!" -ForegroundColor Red
    Write-Host "Expected location: $PWD" -ForegroundColor Red
    Write-Host "Please check the path and try again." -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host "Found Trinity Awaken project" -ForegroundColor Green
Write-Host "Location: $PWD" -ForegroundColor White
Write-Host ""

# Check Node.js installation
try {
    $nodeVersion = node --version
    Write-Host "Node.js version: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "Node.js not found! Please install Node.js first." -ForegroundColor Red
    Start-Process "https://nodejs.org"
    Read-Host "Press Enter to exit"
    exit 1
}

# Check if dependencies are installed
if (-not (Test-Path "node_modules")) {
    Write-Host "Installing dependencies..." -ForegroundColor Yellow
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Failed to install dependencies" -ForegroundColor Red
        Read-Host "Press Enter to exit"
        exit 1
    }
    Write-Host "Dependencies installed" -ForegroundColor Green
    Write-Host ""
}

# Start the system
Write-Host "Starting Trinity Awaken Full System..." -ForegroundColor Cyan
Write-Host ""
Write-Host "Web Interface: http://localhost:3000" -ForegroundColor Blue
Write-Host "MCP Orchestra: ws://localhost:8080" -ForegroundColor Blue
Write-Host ""
Write-Host "Press Ctrl+C in any terminal window to stop the system" -ForegroundColor Yellow
Write-Host ""

# Update window title
$Host.UI.RawUI.WindowTitle = "Trinity Awaken - Running (Web: :3000 | MCP: :8080)"

# Check if src/app exists and create app symlink if needed
if (Test-Path "src\app" -and (-not (Test-Path "app"))) {
    Write-Host "Creating app directory link for Next.js compatibility..." -ForegroundColor Yellow
    New-Item -ItemType Junction -Path "app" -Target "src\app"
    Write-Host "App directory link created" -ForegroundColor Green
}

# Start the full Trinity system
Write-Host "Executing: npm run trinity:full" -ForegroundColor Yellow
npm run trinity:full

Write-Host ""
Write-Host "Trinity Awaken system stopped" -ForegroundColor Red
Read-Host "Press Enter to close"
