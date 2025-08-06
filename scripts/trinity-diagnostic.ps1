# Trinity Awaken Diagnostic Startup Script
# This script will help us see what's going wrong

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "    🔍 TRINITY DIAGNOSTIC MODE 🔍" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Keep window open no matter what
$Host.UI.RawUI.WindowTitle = "Trinity Awaken - Diagnostic Mode"

# Test 1: Check current location
Write-Host "🔍 Test 1: Current Location" -ForegroundColor Yellow
Write-Host "Current directory: $PWD" -ForegroundColor White
Write-Host ""

# Test 2: Check if target directory exists
$ProjectPath = "c:\Users\user\OneDrive - d3cipher.io\Desktop\Trinity Dropzone\Workspaces\orphan\New folder"
Write-Host "🔍 Test 2: Target Directory Check" -ForegroundColor Yellow
Write-Host "Target path: $ProjectPath" -ForegroundColor White
if (Test-Path $ProjectPath) {
    Write-Host "✅ Target directory EXISTS" -ForegroundColor Green
} else {
    Write-Host "❌ Target directory NOT FOUND" -ForegroundColor Red
}
Write-Host ""

# Test 3: Try to navigate
Write-Host "🔍 Test 3: Navigation Test" -ForegroundColor Yellow
try {
    Set-Location $ProjectPath -ErrorAction Stop
    Write-Host "✅ Successfully navigated to Trinity project" -ForegroundColor Green
    Write-Host "New location: $PWD" -ForegroundColor White
} catch {
    Write-Host "❌ ERROR: Could not navigate to Trinity project directory!" -ForegroundColor Red
    Write-Host "Error: $($_.Exception.Message)" -ForegroundColor Red
}
Write-Host ""

# Test 4: Check for required files
Write-Host "🔍 Test 4: Required Files Check" -ForegroundColor Yellow
$requiredFiles = @("package.json", "next.config.ts", "tsconfig.json")
foreach ($file in $requiredFiles) {
    if (Test-Path $file) {
        Write-Host "✅ Found: $file" -ForegroundColor Green
    } else {
        Write-Host "❌ Missing: $file" -ForegroundColor Red
    }
}
Write-Host ""

# Test 5: Check Node.js
Write-Host "🔍 Test 5: Node.js Check" -ForegroundColor Yellow
try {
    $nodeVersion = node --version
    Write-Host "✅ Node.js version: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js not found!" -ForegroundColor Red
}
Write-Host ""

# Test 6: Check npm scripts
Write-Host "🔍 Test 6: NPM Scripts Check" -ForegroundColor Yellow
if (Test-Path "package.json") {
    try {
        Write-Host "Available npm scripts:" -ForegroundColor White
        npm run
    } catch {
        Write-Host "❌ Error running npm commands" -ForegroundColor Red
    }
} else {
    Write-Host "❌ No package.json found to check scripts" -ForegroundColor Red
}
Write-Host ""

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "    🔍 DIAGNOSTIC COMPLETE 🔍" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan

# KEEP WINDOW OPEN
Read-Host "Press Enter to continue or close this window..."
