#!/usr/bin/env python3
"""

Script for Windows/Linux that that creates a prismlauncher importable dev instance.
(MacOS/BSD untested)

It will package all files and download the required mods using the pakku.jar
then create a .zip file that can be imported into prismlauncher

The script will:
    Create a folder named `instanceBuild`
    Download the latest pakku.jar
    Copy all the root files into `instanceBuild/modpack-name` (The modpack name is the same as the root folder name)
    Download the required mods using the pakku.jar
    Create a .zip file that can be imported into prismlauncher

You may import the .zip file at `instanceBuild/deepas-template-modpack.zip` into prismlauncher for a dev instance

Dependencies:
- Python 3.6+
    - All platforms: https://www.python.org/downloads/
    - Win11/Win10 with winget: `winget install python3` (In cmd/powershell)
- Java Runtime: https://adoptium.net/en-GB/temurin/releases?version=21
    - Java 21 is what I mostly use, you only need JRE.
    - If running pakku.jar fails then your Java runtime may be off PATH (Search `set java path` up...)
        Or you may be using 32 bit Java,
        pakku requires 64bit Java to allocate it's default memory amount without args.

"""

import os
import shutil
import stat
import subprocess
import urllib.request
import zipfile
from pathlib import Path
from typing import Optional

# Variables & Paths
ROOT_DIR = Path(".").resolve()
PACK_NAME = ROOT_DIR.name  # Copies the root directories name as the pack name
BUILD_DIR = ROOT_DIR / "instanceBuild"
PACK_DIR = BUILD_DIR / PACK_NAME
MINECRAFT_DIR = PACK_DIR / "minecraft"
PRISM_FILES_DIR = ROOT_DIR / ".pakku" / "prism-overrides"
PAKKU_JAR_URL = (
    "https://github.com/juraj-hrivnak/pakku/releases/latest/download/pakku.jar"
)
PAKKU_JAR = ROOT_DIR / "pakku.jar"
OUTPUT_ZIP = BUILD_DIR / f"{PACK_NAME}.zip"


# Helper functions
def handle_remove_readonly(func, path, exc):
    """Clear read‑only bit on Windows and retry deletion."""
    if func in (os.unlink, os.remove, os.rmdir) and exc[1].errno == 13:
        os.chmod(path, stat.S_IWRITE)
        func(path)
    else:
        raise


def rmtree_if_exists(path: Path) -> None:
    """Delete a directory tree if it exists, handling read‑only files."""
    if path.exists():
        shutil.rmtree(path, onerror=handle_remove_readonly)


def download_file(url: str, dest: Path) -> None:
    """Download a file, following redirects."""
    print(f"Downloading {url} -> {dest}")
    urllib.request.urlretrieve(url, dest)


def copy_except(
    src: Path, dst: Path, exclude_dir: str, exclude_file: Optional[str] = None
) -> None:
    """Copy all contents of 'src' to 'dst', skipping a folder and optionally a file."""
    if not dst.exists():
        dst.mkdir(parents=True)

    for item in src.iterdir():
        if item.name == exclude_dir:
            continue
        if exclude_file and item.name == exclude_file:
            continue
        dest_item = dst / item.name
        if item.is_dir():
            shutil.copytree(item, dest_item, dirs_exist_ok=True)
        else:
            shutil.copy2(item, dest_item)


def copy_overrides() -> None:
    """Copy .pakku/prism-overrides/* into the pack root."""
    if not PRISM_FILES_DIR.exists():
        print(
            f"Warning: Overrides source '{PRISM_FILES_DIR}' does not exist, skipping."
        )
        return
    for item in PRISM_FILES_DIR.iterdir():
        dest = PACK_DIR / item.name
        if item.is_dir():
            shutil.copytree(item, dest, dirs_exist_ok=True)
        else:
            shutil.copy2(item, dest)


def run_java_fetch() -> None:
    """Run 'java -jar pakku.jar fetch' inside the minecraft/ directory."""
    java_cmd = ["java", "-jar", "pakku.jar", "fetch"]
    print(f"Running: {' '.join(java_cmd)} in {MINECRAFT_DIR}")
    subprocess.run(java_cmd, cwd=MINECRAFT_DIR, check=True)


def zip_directory(source_dir: Path, output_zip: Path) -> None:
    """Create a ZIP archive containing all files and folders inside source_dir."""
    print(f"Creating ZIP archive: {output_zip}")
    with zipfile.ZipFile(output_zip, "w", zipfile.ZIP_DEFLATED) as zf:
        for file_path in source_dir.rglob("*"):
            if file_path.is_file():
                arcname = file_path.relative_to(source_dir)
                zf.write(file_path, arcname)


# Main runner function
def main():
    print(f"Building pack from folder: {PACK_NAME}")

    # 1. Clean previous build
    print("Step 1: Cleaning previous instanceBuild...")
    rmtree_if_exists(BUILD_DIR)

    # 2. Download/update pakku.jar
    print("Step 2: Downloading/updating pakku.jar...")
    download_file(PAKKU_JAR_URL, PAKKU_JAR)

    # 3. Copy root contents (except instanceBuild) into minecraft/
    print("Step 3: Copying root contents (excluding instanceBuild) to minecraft/...")
    copy_except(ROOT_DIR, MINECRAFT_DIR, exclude_dir="instanceBuild")

    # 4. Copy prism overrides into the pack root
    print("Step 4: Copying prism overrides...")
    copy_overrides()

    # 5. Run pakku fetch inside minecraft/
    print("Step 5: Running 'pakku fetch'...")
    run_java_fetch()

    # 6. Zip the entire pack folder
    print("Step 6: Creating final ZIP archive...")
    zip_directory(PACK_DIR, OUTPUT_ZIP)

    print(f"Done! Modpack archive created at: {OUTPUT_ZIP}")


if __name__ == "__main__":
    main()
