# Create Simple Trinity Desktop Shortcut - NO ALIASES
# Direct command execution that we know works

Write-Host "Creating DIRECT Trinity Desktop Shortcut..." -ForegroundColor Cyan

$ProjectPath = "c:\Users\user\OneDrive - d3cipher.io\Desktop\Trinity Dropzone\Workspaces\orphan\New folder"
$DesktopPath = [Environment]::GetFolderPath("Desktop")

# Create WScript Shell object
$WshShell = New-Object -ComObject WScript.Shell

# DIRECT SHORTCUT - Runs exactly what worked in terminal
$ShortcutPath = Join-Path $DesktopPath "Trinity Awaken DIRECT.lnk"
$Shortcut = $WshShell.CreateShortcut($ShortcutPath)

# Configure shortcut to run the EXACT command that worked
$Shortcut.TargetPath = "powershell.exe"
$Shortcut.Arguments = "-NoExit -Command `"cd '$ProjectPath'; npm run trinity:full`""
$Shortcut.WorkingDirectory = $ProjectPath
$Shortcut.Description = "Trinity Awaken - DIRECT startup (no scripts, just npm run trinity:full)"
$Shortcut.IconLocation = "shell32.dll,25"  # Star icon
$Shortcut.WindowStyle = 1  # Normal window
$Shortcut.Save()

Write-Host "DIRECT desktop shortcut created!" -ForegroundColor Green
Write-Host "Location: $ShortcutPath" -ForegroundColor White
Write-Host ""
Write-Host "DIRECT COMMAND SHORTCUT:" -ForegroundColor Cyan
Write-Host "   Double-click 'Trinity Awaken DIRECT' on your desktop" -ForegroundColor White
Write-Host ""
Write-Host "This shortcut will run EXACTLY:" -ForegroundColor Yellow
Write-Host "   cd 'c:\Users\user\OneDrive - d3cipher.io\Desktop\Trinity Dropzone\Workspaces\orphan\New folder'" -ForegroundColor White
Write-Host "   npm run trinity:full" -ForegroundColor White
Write-Host ""
Write-Host "No scripts, no aliases, just the raw commands that work!" -ForegroundColor Green
