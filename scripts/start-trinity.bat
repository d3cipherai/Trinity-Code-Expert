@echo off
title Trinity Awaken - Startup Script
color 0A

echo.
echo ========================================
echo    🌟 TRINITY AWAKEN STARTUP 🌟
echo ========================================
echo.
echo Starting Trinity Awaken system...
echo.

REM Change to the project directory
cd /d "c:\Users\user\OneDrive - d3cipher.io\Desktop\Trinity Dropzone\Workspaces\orphan\New folder"

REM Check if we're in the right directory
if not exist "package.json" (
    echo ❌ ERROR: Trinity Awaken project not found!
    echo Expected location: %CD%
    echo Please check the path and try again.
    pause
    exit /b 1
)

echo ✅ Found Trinity Awaken project
echo 📁 Location: %CD%
echo.

REM Check if node_modules exists
if not exist "node_modules" (
    echo 🔄 Installing dependencies...
    call npm install
    if errorlevel 1 (
        echo ❌ Failed to install dependencies
        pause
        exit /b 1
    )
    echo ✅ Dependencies installed
    echo.
)

REM Check and connect to existing Trinity Memory repository
echo 🧠 Connecting to Trinity Memory System...
if exist "C:\Users\user\OneDrive - d3cipher.io\Development\TrinityMemory" (
    echo ✅ Found existing Trinity Memory repository
    echo 📂 Location: C:\Users\user\OneDrive - d3cipher.io\Development\TrinityMemory
    echo 🔗 Syncing with OneDrive persistent memory...
) else (
    echo ⚠️ Trinity Memory repository not found, creating local memory...
)

REM Setup memory sync with existing repository
echo 🔄 Setting up memory persistence...
call npm run setup:deciphergit
echo.

REM Sync with existing Trinity Memory
echo 🔄 Syncing with persistent Trinity Memory...
call npm run memory:sync
echo.

REM Start the Trinity system
echo 🚀 Starting Trinity Awaken Full System...
echo.
echo 🌐 Web Interface: http://localhost:3000
echo 🎼 MCP Orchestra: ws://localhost:8080
echo 🧠 Trinity Memory: Connected to OneDrive persistent storage
echo.
echo Press Ctrl+C in any terminal window to stop the system
echo.

REM Start the full Trinity system
call npm run trinity:full

echo.
echo 🛑 Trinity Awaken system stopped
echo 💾 Memory automatically saved to OneDrive Trinity repository
pause
