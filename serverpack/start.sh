#!/bin/bash

FORGE_VERSION="1.20.1-47.4.10"
PACK_TAG="v1.14.5"

# Ensure java is installed
if ! command -v java >/dev/null 2>&1; then
    echo "Java 17 must be installed"
    exit 1
fi

# Function to download with either curl or wget
download() {
    if command -v curl >/dev/null 2>&1; then
        curl -OJL "$1"
    elif command -v wget >/dev/null 2>&1; then
        wget "$1"
    else
        echo "Neither curl nor wget found. Please install either curl or wget."
        exit 1
    fi
}

# Install (Neo)Forge
if [ ! -f forge-$FORGE_VERSION-installer.jar ]; then

    # download "https://maven.neoforged.net/releases/net/neoforged/forge/$FORGE_VERSION/forge-$FORGE_VERSION-installer.jar"
    download "https://maven.minecraftforge.net/net/minecraftforge/forge/$FORGE_VERSION/forge-$FORGE_VERSION-installer.jar"
    java -jar forge-$FORGE_VERSION-installer.jar --installServer
    rm run.sh run.bat
fi

# FindMe does not allow distribution on curseforge
if [ ! -f mods/findme-3.1.1-forge.jar ]; then
    mkdir -p mods
    download "https://mediafilez.forgecdn.net/files/5074/609/findme-3.2.1-forge.jar" -O mods/findme-3.2.1-forge.jar
fi

# Install packwiz if needed
if [ ! -f packwiz-installer-bootstrap.jar ]; then
    download "https://github.com/packwiz/packwiz-installer-bootstrap/releases/download/v0.0.3/packwiz-installer-bootstrap.jar"
fi

java -jar packwiz-installer-bootstrap.jar -g -s server https://raw.githubusercontent.com/GregTechCEu/GregTech-Modern-Community-Pack/refs/tags/$PACK_TAG/pack.toml

java @user_jvm_args.txt @libraries/net/minecraftforge/forge/$FORGE_VERSION/unix_args.txt nogui
