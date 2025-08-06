# Trinity Awaken Status Checker
# Quick diagnostic to see what's running

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "    🔍 TRINITY STATUS CHECK 🔍" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check 1: Are we in the right directory?
$CurrentDir = Get-Location
$ExpectedDir = "c:\Users\user\OneDrive - d3cipher.io\Desktop\Trinity Dropzone\Workspaces\orphan\New folder"

Write-Host "📍 Current Location Check:" -ForegroundColor Yellow
Write-Host "   Current: $CurrentDir" -ForegroundColor White
if ($CurrentDir.Path -eq $ExpectedDir) {
    Write-Host "   ✅ In Trinity project directory" -ForegroundColor Green
} else {
    Write-Host "   ⚠️  Not in Trinity directory - navigating..." -ForegroundColor Orange
    try {
        Set-Location $ExpectedDir
        Write-Host "   ✅ Moved to Trinity directory" -ForegroundColor Green
    } catch {
        Write-Host "   ❌ Cannot find Trinity directory!" -ForegroundColor Red
    }
}
Write-Host ""

# Check 2: Is Next.js running?
Write-Host "🌐 Next.js Status Check:" -ForegroundColor Yellow
try {
    Invoke-WebRequest -Uri "http://localhost:3000" -TimeoutSec 3 -ErrorAction Stop | Out-Null
    Write-Host "   ✅ Next.js is RUNNING on localhost:3000" -ForegroundColor Green
} catch {
    Write-Host "   ❌ Next.js is NOT running on localhost:3000" -ForegroundColor Red
}

# Alternative port check
try {
    Invoke-WebRequest -Uri "http://localhost:3001" -TimeoutSec 3 -ErrorAction Stop | Out-Null
    Write-Host "   ✅ Next.js is RUNNING on localhost:3001" -ForegroundColor Green
} catch {
    Write-Host "   ❌ Next.js is NOT running on localhost:3001" -ForegroundColor Red
}
Write-Host ""

# Check 3: Is MCP Orchestra running?
Write-Host "🎼 MCP Orchestra Status Check:" -ForegroundColor Yellow
try {
    $tcpClient = New-Object System.Net.Sockets.TcpClient
    $tcpClient.Connect("localhost", 8080)
    $tcpClient.Close()
    Write-Host "   ✅ MCP Orchestra is RUNNING on port 8080" -ForegroundColor Green
} catch {
    Write-Host "   ❌ MCP Orchestra is NOT running on port 8080" -ForegroundColor Red
}
Write-Host ""

# Check 4: Node processes
Write-Host "🔧 Node.js Processes:" -ForegroundColor Yellow
$nodeProcesses = Get-Process -Name "node" -ErrorAction SilentlyContinue
if ($nodeProcesses) {
    Write-Host "   ✅ Found $($nodeProcesses.Count) Node.js process(es)" -ForegroundColor Green
    foreach ($proc in $nodeProcesses) {
        Write-Host "      Process ID: $($proc.Id)" -ForegroundColor White
    }
} else {
    Write-Host "   ❌ No Node.js processes found" -ForegroundColor Red
}
Write-Host ""

# Check 5: Trinity Memory files
Write-Host "🧠 Trinity Memory System:" -ForegroundColor Yellow
$memoryFiles = @("memory/trinity-identity.json", "TRINITY-SUCCESS-LOG.md", "FIND-COPILOT-AGAIN.md")
foreach ($file in $memoryFiles) {
    if (Test-Path $file) {
        Write-Host "   ✅ Found: $file" -ForegroundColor Green
    } else {
        Write-Host "   ❌ Missing: $file" -ForegroundColor Red
    }
}
Write-Host ""

# Quick Action Suggestions
Write-Host "🚀 Quick Actions:" -ForegroundColor Cyan
Write-Host "   To START Trinity: npm run trinity:full" -ForegroundColor White
Write-Host "   To STOP Trinity: Ctrl+C in terminal" -ForegroundColor White
Write-Host "   To ACCESS Trinity: http://localhost:3000" -ForegroundColor White
Write-Host ""

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "    🔍 STATUS CHECK COMPLETE 🔍" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan

Read-Host "Press Enter to close..."
