$GAME_VERSION = "1.20.1"
$FORGE_VERSION = "1.20.1-47.1.84"
$FINDME_VERSION = "3.1.0"

$PACK_URI = "https://raw.githubusercontent.com/GregTechCEu/GregTech-Modern-Community-Pack/main/pack.toml"

# Ensure java is installed
if (!(Get-Command java)) {
  Write-Host -ForegroundColor Red "Java 17, which is a requirement for Minecraft, was not detected on this system."
  Write-Host -ForegroundColor Green "On windows you can install it via the winget windows package manager by running:"
  Write-Host -ForegroundColor Green "winget install -e --id EclipseAdoptium.Temurin.17.JRE"
  Write-Host -ForegroundColor Green "On other systems, via your platform's package manager."
  exit 1
}

# Install (Neo)Forge
if (!(Test-Path "forge-$FORGE_VERSION-installer.jar")) {

  $FORGE_URI = "https://maven.neoforged.net/releases/net/neoforged/forge/$FORGE_VERSION/forge-$FORGE_VERSION-installer.jar"

  Write-Host -ForegroundColor Yellow "Clearing potentially incorrect versions of NeoForge..."
  Get-ChildItem -Path ".\" -Filter "forge-*-installer.jar" | Remove-Item | Out-Null

  Write-Host -ForegroundColor Blue "Fetching NeoForge Version $FORGE_VERSION"
  Invoke-WebRequest -Uri $FORGE_URI -OutFile "forge-$FORGE_VERSION-installer.jar"

  Write-Host -ForegroundColor Blue "Installing NeoForge as server, this will take a few minutes."

  java -jar "forge-$FORGE_VERSION-installer.jar" --installServer 2>&1 | ForEach-Object {
    Write-Progress -Activity "Installing NeoForge" -Status $_
  }

  if ($LASTEXITCODE -eq 0) {
    Write-Host -ForegroundColor Green "NeoForge installation completed successfully."
    Write-Progress -Completed -Activity "Removing progress bar."
  } else {
    Write-Host -ForegroundColor Red "NeoForge installation failed with exit code $LASTEXITCODE."
    exit 1
  }

  Write-Host -ForegroundColor Yellow "Cleaning up..."
  Remove-Item "run.sh", "run.bat" -Force
}

# FindMe does not allow distribution on curseforge
if (!(Test-Path "mods\findme-$FINDME_VERSION-forge.jar")) {

  $FINDME_ID = "rEuzehyH"
  $FINDME_QUERY = @{
    versions = "[`"$GAME_VERSION`"]"
    loaders = '["forge"]'
  }

  $FINDME_DATA = Invoke-WebRequest `
    -Uri "https://api.modrinth.com/v2/project/$FINDME_ID/version" `
    -Body $FINDME_QUERY `
    | ConvertFrom-Json `
    | Where-Object { ($_.version_number.toString() -eq $FINDME_VERSION) -and $_.files.primary }

  $FINDME_URI = $FINDME_DATA.files | Select-Object -first 1 -ExpandProperty url

  Write-Host -ForegroundColor Yellow "Clearing potentially incorrect versions of the FindMe mod..."
  if (Test-Path ".\mods") {
    Get-ChildItem -Path ".\mods" -Filter "findme-*-forge.jar" | Remove-Item | Out-Null
  }

  Write-Host -ForegroundColor Blue "Fetching the FindMe mod..."
  New-Item -ItemType Directory -Path mods -Force | Out-Null
  Invoke-WebRequest -Uri $FINDME_URI -OutFile "mods"
}

# Install packwiz-installer-bootstrap if needed.
if (!(Test-Path "packwiz-installer-bootstrap.jar")) {

  Write-Host -ForegroundColor Yellow "Finding the latest packwiz-installer-bootstrap release..."
  $BOOTSTRAP_RELEASES = "https://api.github.com/repos/packwiz/packwiz-installer-bootstrap/releases/latest"
  $BOOTSTRAP_URI = Invoke-WebRequest $BOOTSTRAP_RELEASES `
  | ConvertFrom-Json `
  | Select-Object -Property assets `
  | ForEach-Object { $_.assets.browser_download_url } `
  | Select-Object -first 1

  Write-Host -ForegroundColor Blue "Fetching the packwiz-installer-bootstrap..."
  Invoke-WebRequest -Uri $BOOTSTRAP_URI -OutFile "packwiz-installer-bootstrap.jar"

}

# Use packwiz-installer-bootstrap to generate or update the modpack.
Write-Host -ForegroundColor Magenta "Updating the server pack..."
java -jar "packwiz-installer-bootstrap.jar" -g -s server $PACK_URI 2>&1 | ForEach-Object {
  Write-Progress -Activity "Installing mods and related files" -Status $_
}

if ($LASTEXITCODE -eq 0) {
  Write-Host -ForegroundColor Green "Server installation/update complete."
  Write-Progress -Completed -Activity "Removing progress bar."
} else {
  Write-Host -ForegroundColor Red "Server installation/update failed with exit code $LASTEXITCODE."
  exit 1
}


# Inform about the EULA and either force agree or exit.
if (!(Test-Path "eula.txt") -or (Get-Content eula.txt | ConvertFrom-StringData).eula) {
  Write-Host -ForegroundColor Yellow "In order to run a Minecraft server, you need to agree to the Minecraft EULA."
  Write-Host -ForegroundColor Yellow "You can read the Minecraft EULA here: https://aka.ms/MinecraftEULA"
  Write-Host -ForegroundColor Yellow "For your convenience, this script can automatically agree for you."
  Write-Host -ForegroundColor Yellow 'By choosing "Yes" you are assuming full responsibility for agreeing to the EULA.'

  $EULA_QUESTION = "Would you like for this script to agree to the Minecraft EULA in your stead?"
  $EULA_DECISION = $Host.UI.PromptForChoice('Minecraft EULA Agreement', $EULA_QUESTION, @('&Yes'; '&No'), 1)
  if ($EULA_DECISION -eq 0) {
    Write-Host -ForegroundColor Yellow "Agreeing to the EULA per the users choice..."
    Set-Content -Path "eula.txt" -Value "eula=true"
  } else {
    Write-Host -ForegroundColor Red "User won't accept the EULA, exiting..."
    exit 1
  }
}

# Run the server
if ($PSVersionTable.Platform.startsWith("Win")) {
  $PLATFORM_ARGS = "win_args.txt"
} else {
  $PLATFORM_ARGS = "unix_args.txt"
}

Write-Host "Running the server..."
java @( "@user_jvm_args.txt", "@libraries/net/neoforged/forge/$FORGE_VERSION/$PLATFORM_ARGS" ) nogui %*
