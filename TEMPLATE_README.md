<h1 align="center">Deepa's modpack development template</h1>
<p align="center"><b><i>Deepa's preferred modpack development environment, focused on forge 1.20.1, with preset mods and github actions</i></b></p>
<h1 align="center">
    <a href="https://github.com/ThePansmith/PanPack/blob/main/LICENSE.md"><img src="https://img.shields.io/github/license/Deepacat/deepas-template-modpack?style=for-the-badge&logo=github" alt="License"></a>
</h1>

## Features
- [Pakku](https://juraj-hrivnak.github.io/Pakku/about.html):
    - Easily control mods and resourcepacks, handling dependendices for you.
    - Can sync your existing installed mods and resourcepacks from your modpack to be automatically manifested for exports
    - Can easily fetch mods from the pakku manifest file that others have synced to, for contributors to pull the latest mods and resource packs
    - Mods and folders can be easily marked as client or serverside only, or even to not export at all. Useful for dev environment specific mods like ProbeJS or worldedit.
- [Github workflow/Actions](https://github.com/Deepacat/deepas-template-modpack/tree/dev/.github/workflows):
    - Autolinting
      - By default, will **automatically fix** any lint issues in the KubeJS folder, keeping your code organized hassle free.
        - This behavior can be easily changed as applicable, if you prefer it to check pull requests.
    - Build and Release
        - Automatically builds on commit, and will push to curseforge on a version change (Serverpacks included)
        - Automatically Diffs Mods and Pull Requests, and attaches your changelog
        - Can replace text with the update number, useful for the main menu or other files that should have the modpack version.
        - Can publish a truncated changelog to discord if a webhook is provided.
- Other:
    - Setup that allows contributors to pull and make commits directly from their minecraft instance, no need to drag files between them
    - Issue and pull request templates
    - A default `.gitignore` Including many common mods files, and client configs that should be used with the "configured defaults" mod
    - A client config default options setup, preventing users having their client configs overwritten on modpack updates

### Requirements
* This template was written solely with [Prism Launcher](https://prismlauncher.org/) in mind. Those using other launchers will need to adjust setup instructions as needed to allow their launcher to recognize the template as an instance.
* Expects understanding git and some basics like commits, pull requests, merging, pushing/pulling.
  * Recommended to install https://gitforwindows.org/ on windows
* Optionally but optimally, install [Pakku](https://juraj-hrivnak.github.io/Pakku/installing-pakku.html) locally. Alternatively you could just use the .jar file located in the templates minecraft folder with `java -jar pakku.jar help`.
  * For using Pakku to pull curseforge mods, add your curseforge accounts API key to pakku. [See guide on the Pakku wiki](https://juraj-hrivnak.github.io/Pakku/setting-up-a-modpack.html#configuring-curseforge-access)
* Python 3.6+ (To use the dev instance setup script)
    * All platforms: https://www.python.org/downloads/
    * Win11/Win10 with winget: `winget install python3` (In cmd/powershell)

## Setup
### Using this template for a new Modpack
1. Clone/download this repository
2. Rename the cloned repository folder to whatever your modpack name is, or leave it for later if unsure. 
3. Inside of the repository, run the `dev_instance_setup.py` python script
   - You may look inside of this script with a text editor for instructions on using it, how to download python/java, potential issues, and what it does.
4. Import the output dev-environment modpack .zip file that the script outputs at `./instanceBuild/modpackname.zip` into prismlauncher (Drag zip file over or right click the background and `create instance`>`import`)
5. Creating and setting up a repository
   1. At https://github.com/new, create a new empty repository. You do not need to set a template/license/readme or anything here as it'll be overwritten.
      - (Replace `username/modpack-repo` with your own name and repo name from the link)
   2. In a command line using git, run `git remote add origin https://github.com/username/modpack-repo.git` to change the tracked remote from the original template repo to your new modpack repo.
   3. use `git branch -M main` and `git push -u origin main`, then `git branch -M dev` and `git push -u origin dev` to create both required branches on your github repository.
6. Follow the [build/release actions setup & usage](https://github.com/Deepacat/deepas-template-modpack/blob/dev/.github/workflows/!README.md) guide to setup repository secrets, learn proper practices, and setup publishing workflow.

### Using this template with an existing Modpack
1. Follow the above instructions for a new modpack setup
   - (assuming you don't have an existing repo, if you do you could use this and force push over it? Or remove all files from your original repo and use this guide then push the changes)
2. Drag over your modpacks folders like `mods`, `configs`, `kubejs` or whatever else is required for your modpack to work into the modpack template repository (Note not deleting the existing mod folder in the template can cause dupes, optimally delete the templates mod folder)
3. Assuming you have added new mods or replaced the mods folder entirely, open the minecraft folder in a terminal and run `pakku sync` or `java -jar pakku.jar sync` if you didn't install pakku. This will update pakkus modlist used for exporting. (You can use `pakku --yes sync/fetch` to skip all confirmations on the command)

## Usage of this template after setup / Contributing to a repository with this template
See [CONTRIBUTING.md](https://github.com/Deepacat/deepas-template-modpack/blob/dev/CONTRIBUTING.md)

## Github Workflow Building and Publishing
See [build/release actions setup & usage](https://github.com/Deepacat/deepas-template-modpack/blob/dev/.github/workflows/!README.md)

## Notes
* This template supports automatically posting changelogs to discord: add a [discord webhook](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks) to your secrets with the name `discord-webhook` if you wish to enable that.
* Some of the linting rules are disabled by default, you can enable them (or even add your own!) by editing `custom-plugin.mjs`.
* By default, the changes on the `main` and `dev` branches are built, branch names and behavior can be adjusted in the buildscript.

<!-- #### I need a Curseforge Key?
Accessing CurseForge requires the CurseForge API key.

The API key can be generated in the CurseForge for Studios(https://console.curseforge.com/) developer console.

 1. Login to the developer console
 2. Go to the "API keys" tab
 3. Copy your API key
 4. Run `java -jar pakku.jar credentials set --cf-api-key '(API Key)'` in your `minecraft` folder via your terminal (to get to the folder, use the [cd](https://en.wikipedia.org/wiki/Cd_(command)) command). -->


## Credits
- This template is a very opinionated fork of [Panpack](https://github.com/ThePansmith/PanPack) with many more preinstalled mods and tools, with additional scripts and a differing dev environment.
- Buildscripts modified from panpack, which are modified from [Terrafirmagreg](https://www.curseforge.com/minecraft/modpacks/terrafirmagreg-modern)

[^1]: Modrinth release support and using non-prism managers is currently not supported.
[^2]: Don't forget to link to this page in your README so contributors will know how to set up their own instance!