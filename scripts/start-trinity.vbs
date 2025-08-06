Set objShell = CreateObject("WScript.Shell")
Set objFSO = CreateObject("Scripting.FileSystemObject")

' Trinity Awaken Project Directory (absolute path)
projectDir = "c:\Users\user\OneDrive - d3cipher.io\Desktop\Trinity Dropzone\Workspaces\orphan\New folder"

' Verify the project directory exists
If Not objFSO.FolderExists(projectDir) Then
    MsgBox "Trinity Awaken project folder not found!" & vbCrLf & vbCrLf & "Expected location:" & vbCrLf & projectDir, vbCritical, "Trinity Awaken Error"
    WScript.Quit
End If

' Verify package.json exists (confirms we're in the right project)
If Not objFSO.FileExists(projectDir & "\package.json") Then
    MsgBox "Trinity Awaken project files not found!" & vbCrLf & vbCrLf & "Check location:" & vbCrLf & projectDir, vbCritical, "Trinity Awaken Error"
    WScript.Quit
End If

' Path to the PowerShell script
psScript = projectDir & "\scripts\start-trinity.ps1"

' Check if PowerShell script exists
If objFSO.FileExists(psScript) Then
    ' Run PowerShell script with execution policy bypass and correct working directory
    command = "powershell.exe -ExecutionPolicy Bypass -WindowStyle Normal -Command ""Set-Location '" & projectDir & "'; & '" & psScript & "'"""
    objShell.Run command, 1, False
Else
    ' Fallback to batch script
    batScript = projectDir & "\scripts\start-trinity.bat"
    If objFSO.FileExists(batScript) Then
        ' Run batch script with correct working directory
        command = "cmd.exe /k ""cd /d """ & projectDir & """ && """ & batScript & """"""
        objShell.Run command, 1, False
    Else
        MsgBox "Trinity Awaken startup scripts not found!" & vbCrLf & vbCrLf & "Expected location:" & vbCrLf & psScript, vbCritical, "Trinity Awaken Error"
    End If
End If
