# Script to create Trinity Awaken desktop shortcut

$ProjectPath = "c:\Users\user\OneDrive - d3cipher.io\Desktop\Trinity Dropzone\Workspaces\orphan\New folder"
$DesktopPath = [Environment]::GetFolderPath("Desktop")
$ShortcutPath = Join-Path $DesktopPath "Trinity Awaken.lnk"

# Create WScript Shell object
$WshShell = New-Object -ComObject WScript.Shell

# Create the shortcut
$Shortcut = $WshShell.CreateShortcut($ShortcutPath)
$Shortcut.TargetPath = Join-Path $ProjectPath "scripts\start-trinity.vbs"
$Shortcut.WorkingDirectory = $ProjectPath
$Shortcut.Description = "Start Trinity Awaken - Memory System & MCP Orchestra"
$Shortcut.IconLocation = "shell32.dll,25"  # Star icon
$Shortcut.WindowStyle = 1  # Normal window
$Shortcut.Save()

Write-Host "Desktop shortcut created!" -ForegroundColor Green
Write-Host "Location: $ShortcutPath" -ForegroundColor White
Write-Host ""
Write-Host "You can now start Trinity Awaken by double-clicking the desktop shortcut!" -ForegroundColor Cyan

# Also create a shortcut on the desktop to the project folder
$FolderShortcutPath = Join-Path $DesktopPath "Trinity Awaken Project.lnk"
$FolderShortcut = $WshShell.CreateShortcut($FolderShortcutPath)
$FolderShortcut.TargetPath = $ProjectPath
$FolderShortcut.Description = "Trinity Awaken Project Folder"
$FolderShortcut.IconLocation = "shell32.dll,4"  # Folder icon
$FolderShortcut.Save()

Write-Host "Project folder shortcut created!" -ForegroundColor Green
Write-Host "Location: $FolderShortcutPath" -ForegroundColor White
