# Create BULLETPROOF Trinity Awaken Desktop Shortcut
# This uses the proven working commands

Write-Host "Creating BULLETPROOF Trinity Awaken Desktop Shortcut..." -ForegroundColor Cyan

$ProjectPath = "c:\Users\user\OneDrive - d3cipher.io\Desktop\Trinity Dropzone\Workspaces\orphan\New folder"
$DesktopPath = [Environment]::GetFolderPath("Desktop")

# Create WScript Shell object
$WshShell = New-Object -ComObject WScript.Shell

# BULLETPROOF SHORTCUT - Uses the exact working commands
$ShortcutPath = Join-Path $DesktopPath "Trinity Awaken BULLETPROOF.lnk"
$Shortcut = $WshShell.CreateShortcut($ShortcutPath)

# Configure shortcut with the EXACT working command sequence
$Command = "powershell.exe"
$Arguments = "-ExecutionPolicy Bypass -NoExit -Command """ +
    "cd '$ProjectPath'; " +
    "Write-Host 'Starting Trinity Awaken...' -ForegroundColor Green; " +
    "npm run trinity:full" +
    """"

$Shortcut.TargetPath = $Command
$Shortcut.Arguments = $Arguments
$Shortcut.WorkingDirectory = $ProjectPath
$Shortcut.Description = "Trinity Awaken - BULLETPROOF (Tested Working)"
$Shortcut.IconLocation = "shell32.dll,25"  # Star icon
$Shortcut.WindowStyle = 1  # Normal window
$Shortcut.Save()

Write-Host "BULLETPROOF desktop shortcut created!" -ForegroundColor Green
Write-Host "Location: $ShortcutPath" -ForegroundColor White
Write-Host ""
Write-Host "This shortcut uses the EXACT commands that just worked:" -ForegroundColor Cyan
Write-Host "  1. cd to Trinity project directory" -ForegroundColor White
Write-Host "  2. npm run trinity:full" -ForegroundColor White
Write-Host ""
Write-Host "Double-click 'Trinity Awaken BULLETPROOF' to test!" -ForegroundColor Green
