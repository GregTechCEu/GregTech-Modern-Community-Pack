# Windows installation instructions.

## Section 1

First, let's see if your system already has Powershell version 7+ installed.

- Open the start menu or click the searchbox
- Type `pwsh`

If you see `Powershell 7` appear, you may click it to open it, then please skip to section 3.

## Section 2

If you didn't see the above, please instead search for `powershell`.
Depending on your version of windows, you may be faced with a few options.
The only one that matters for this installation is the one simply titled `Windows Powershell`
After you click on `Windows Powershell` you may run the following command to install the correct version of Powershell.

```
winget install -e --id Microsoft.Powershell
```

Once the installation has finished, repeat the steps in Section 1.

## Section 3

To begin with, please make a note of where you downloaded the `start.ps1` script.<br/>
The most likely location is `C:\Users\YOUR_USERNAME\Downloads\serverpack` where the YOUR_USERNAME section is replaced with your windows username.

Whatever the location, we need to point powershell to it. To do so we'll use the `Set-Location` powershell command.

```ps1
Set-Location -Path "THE PATH YOU MADE A NOTE OF ABOVE"
```

Now that we're here, we need to unblock the installer from running. <br/>
This is default windows behavior for downloaded files and its for your own safety.<br/>
If you have reason to believe you cannot trust this script, you may ask a person that's familiar with powershell and that you trust, to look through the source for you. The script can at any time be read through by opening it in your text editor of choice.

To unblock the script through powershell, you may simply run the following command:

```ps1
Unblock-File -Path "start.ps1"
```

## Section 4

All that is left to run the server is to type

```ps1
.\start.ps1
```

inside of this powershell window.

Depending on your computer specifications and internet speed, the first run will take some time. It will:

- Procure Forge for you.
- Install Forge in server configuration for you.
- Procure all the mods for you by making use of the packwiz-installer-bootstrap project [packwiz info here](https://packwiz.infra.link/)
- Procure the `FindMe` mod from modrinth as it does not allow distribution via CF.
- Allow you to either agree to or deny the Microsoft Minecraft EULA.
- If you agree, it will proceed to run the server.

Please note: After the server runs for the first time, you will want to wait for it to finish, then once the server is ready you will want to type `stop` to exit it so you may edit your server configuration files. Instructions on doing so are outside of the scope of this project.

Subsequent runs of `start.ps1` will

- Keep your server up to date by consulting the modpack's github repository for updates.
- Start the server per your configuration.
