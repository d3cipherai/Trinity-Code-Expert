# Create Ultimate Trinity Awaken Desktop Shortcut
# This creates a single-button solution that ALWAYS works

Write-Host "Creating Ultimate Trinity Awaken Desktop Shortcut..." -ForegroundColor Cyan

$ProjectPath = "c:\Users\user\OneDrive - d3cipher.io\Desktop\Trinity Dropzone\Workspaces\orphan\New folder"
$DesktopPath = [Environment]::GetFolderPath("Desktop")

# Create WScript Shell object
$WshShell = New-Object -ComObject WScript.Shell

# MAIN SHORTCUT - Trinity Awaken (One-Click Startup)
$ShortcutPath = Join-Path $DesktopPath "Trinity Awaken START.lnk"
$Shortcut = $WshShell.CreateShortcut($ShortcutPath)

# Use PowerShell directly with embedded commands to ensure correct directory
# Configure shortcut
$Shortcut.TargetPath = "powershell.exe"
$Shortcut.Arguments = "-ExecutionPolicy Bypass -File `"$TargetScript`""
$Shortcut.WorkingDirectory = $ProjectPath
$Shortcut.Description = "Start Trinity Awaken with persistent memory and autoconfig"
$Shortcut.IconLocation = "$ProjectPath\trinity.ico" # Optional: custom icon
$Shortcut.Save()
$Command = "powershell.exe"
$Arguments = "-ExecutionPolicy Bypass -WindowStyle Normal -Command """ +
    "Set-Location '$ProjectPath'; " +
    "Write-Host 'Starting Trinity Awaken from correct directory...' -ForegroundColor Green; " +
    "Write-Host 'Location: ' -NoNewline; Write-Host `$PWD -ForegroundColor Cyan; " +
    "if (Test-Path 'package.json') { " +
        "Write-Host 'Found Trinity project files' -ForegroundColor Green; " +
        "npm run start " +
    "} else { " +
        "Write-Host 'Trinity project files not found!' -ForegroundColor Red; " +
        "Write-Host 'Current directory: ' -NoNewline; Write-Host `$PWD -ForegroundColor Yellow; " +
        "Read-Host 'Press Enter to exit' " +
    "}" +
    """"

$Shortcut.TargetPath = $Command
$Shortcut.Arguments = $Arguments
$Shortcut.WorkingDirectory = $ProjectPath
$Shortcut.Description = "Trinity Awaken - One-Click Startup (Web + MCP Orchestra + Memory)"
$Shortcut.IconLocation = "shell32.dll,25"  # Star icon
$Shortcut.WindowStyle = 1  # Normal window
$Shortcut.Save()

Write-Host "Ultimate desktop shortcut created!" -ForegroundColor Green
Write-Host "Location: $ShortcutPath" -ForegroundColor White
Write-Host ""
Write-Host "SINGLE BUTTON SOLUTION:" -ForegroundColor Cyan
Write-Host "   Double-click 'Trinity Awaken START' on your desktop" -ForegroundColor White
Write-Host ""

# PROJECT FOLDER SHORTCUT  
$FolderShortcutPath = Join-Path $DesktopPath "Trinity Awaken Project.lnk"
$FolderShortcut = $WshShell.CreateShortcut($FolderShortcutPath)
$FolderShortcut.TargetPath = $ProjectPath
$FolderShortcut.Description = "Trinity Awaken Project Folder"
$FolderShortcut.IconLocation = "shell32.dll,4"  # Folder icon
$FolderShortcut.Save()

Write-Host "Project folder shortcut created!" -ForegroundColor Green
Write-Host "Location: $FolderShortcutPath" -ForegroundColor White
Write-Host ""
Write-Host "SETUP COMPLETE!" -ForegroundColor Green
Write-Host "Your desktop now has:" -ForegroundColor White
Write-Host "  * Trinity Awaken START - Single-click startup" -ForegroundColor Cyan
Write-Host "  * Trinity Awaken Project - Open project folder" -ForegroundColor Cyan
