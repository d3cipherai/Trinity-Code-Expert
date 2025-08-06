# Create WORKING Trinity Awaken Desktop Shortcut
# This fixes the encoding issues and creates a reliable shortcut

Write-Host "Creating FIXED Trinity Awaken Desktop Shortcut..." -ForegroundColor Cyan

$ProjectPath = "c:\Users\user\OneDrive - d3cipher.io\Desktop\Trinity Dropzone\Workspaces\orphan\New folder"
$DesktopPath = [Environment]::GetFolderPath("Desktop")

# Create WScript Shell object
$WshShell = New-Object -ComObject WScript.Shell

# MAIN SHORTCUT - Trinity Awaken (Fixed Version)
$ShortcutPath = Join-Path $DesktopPath "Trinity Awaken FIXED.lnk"
$Shortcut = $WshShell.CreateShortcut($ShortcutPath)

# Configure shortcut to use the fixed script
$Shortcut.TargetPath = "powershell.exe"
$Shortcut.Arguments = "-ExecutionPolicy Bypass -File `"$ProjectPath\scripts\trinity-fixed.ps1`""
$Shortcut.WorkingDirectory = $ProjectPath
$Shortcut.Description = "Trinity Awaken - FIXED VERSION (Web + MCP Orchestra + Memory)"
$Shortcut.IconLocation = "shell32.dll,25"  # Star icon
$Shortcut.WindowStyle = 1  # Normal window
$Shortcut.Save()

Write-Host "FIXED desktop shortcut created!" -ForegroundColor Green
Write-Host "Location: $ShortcutPath" -ForegroundColor White
Write-Host ""
Write-Host "NEW WORKING SOLUTION:" -ForegroundColor Cyan
Write-Host "   Double-click 'Trinity Awaken FIXED' on your desktop" -ForegroundColor White
Write-Host ""
Write-Host "This shortcut will:" -ForegroundColor Yellow
Write-Host "  1. Navigate to the correct directory" -ForegroundColor White
Write-Host "  2. Check for Node.js and dependencies" -ForegroundColor White
Write-Host "  3. Start Trinity Awaken with npm run trinity:full" -ForegroundColor White
Write-Host "  4. Keep the window open to show status" -ForegroundColor White
Write-Host ""
Write-Host "SETUP COMPLETE!" -ForegroundColor Green
