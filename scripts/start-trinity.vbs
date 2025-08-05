Set objShell = CreateObject("WScript.Shell")
Set objFSO = CreateObject("Scripting.FileSystemObject")

' Get the directory where this script is located
scriptDir = objFSO.GetParentFolderName(WScript.ScriptFullName)
projectDir = objFSO.GetParentFolderName(scriptDir)

' Path to the PowerShell script
psScript = projectDir & "\scripts\start-trinity.ps1"

' Check if PowerShell script exists
If objFSO.FileExists(psScript) Then
    ' Run PowerShell script with execution policy bypass
    command = "powershell.exe -ExecutionPolicy Bypass -WindowStyle Normal -File """ & psScript & """"
    objShell.Run command, 1, False
Else
    ' Fallback to batch script
    batScript = projectDir & "\scripts\start-trinity.bat"
    If objFSO.FileExists(batScript) Then
        objShell.Run """" & batScript & """", 1, False
    Else
        MsgBox "Trinity Awaken startup scripts not found!" & vbCrLf & vbCrLf & "Expected location:" & vbCrLf & psScript, vbCritical, "Trinity Awaken Error"
    End If
End If
