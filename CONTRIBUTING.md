# Contributing to a pack using this template

### Requirements (from root README.md)
* This template was written solely with [Prism Launcher](https://prismlauncher.org/) in mind. Those using other launchers will need to adjust setup instructions as needed to allow their launcher to recognize the template as an instance.
* Expects understanding git and some basics like commits, pull requests, merging, pushing/pulling.
  * Recommended to install https://gitforwindows.org/ on windows
* Optionally but optimally, install [Pakku](https://juraj-hrivnak.github.io/Pakku/installing-pakku.html) locally. Alternatively you could just use the .jar file located in the templates minecraft folder with `java -jar pakku.jar help`.
  * For using Pakku to pull curseforge mods, add your curseforge accounts API key to pakku. [See guide on the Pakku wiki](https://juraj-hrivnak.github.io/Pakku/setting-up-a-modpack.html#configuring-curseforge-access)
* Python 3.6+ (To use the dev instance setup script)
    * All platforms: https://www.python.org/downloads/
    * Win11/Win10 with winget: `winget install python3` (In cmd/powershell)

### Contributor setup steps:
1. Clone/download the repository of the modpack, extract to a folder if downloaded as a .zip
2. Open the repository folder in a terminal and run `pakku fetch` (`java -jar pakku.jar fetch` if pakku is not locally installed)
3. Run `python3 dev_instance_setup.py` (Can read inside the python script using a text editor for more details)
4. Import the output dev-environment modpack .zip file that the script outputs at `./instanceBuild/modpackname.zip` into prismlauncher (Drag zip file over or right click the background and `create instance`>`import`)
5. Open the `minecraft` folder of the newly imported instance, it now acts as the git repository and can be commited to and pulled from.

Always target pull requests at the `dev` branch, main should nearly never be pushed to directly, as the automated publishing action is meant to do this for modpack releases to function as intended.

## Pakku mod management usage & Info
Note that if pakku is not installed locally you must use a terminal in the minecraft dir (root of repository), and type `java -jar pakku.jar --yes fetch` for example to use Pakku fetch with auto-confirm.

`--yes` can be added before Pakku commands to have them auto-confirm instead of asking per change, while nice I have experienced issues with pakku removing mods that it shouldn't occasionally so I often prefer not to use this.

### Pakku frequently used commands (Use in root of repository, the minecraft folder)
#### [Pakku wiki on sync/fetch](https://juraj-hrivnak.github.io/Pakku/developing-a-modpack.html)
- `pakku sync` gets all of your currently installed mods and adds them to the `pakku-lock.json` file. Will remove mods you no longer have from it. (Like a mod push)
  - Should be used after adding or removing mods from the pack, then commit the `pakku-lock.json` to ensure others can pull your mod changes.
- `pakku fetch` gets the `pakku-lock.json` file and downloads all mods from it, removing mods not in it, to match the file. (Like a mod pull)
  - Should be used after `git pull` to pull all mod changes to the `pakku-lock.json`
#### [Pakku wiki on managing projects](https://juraj-hrivnak.github.io/Pakku/managing-projects.html)
- `pakku remove jei` ([More project removal examples](https://juraj-hrivnak.github.io/Pakku/managing-projects.html#removing-projects))
- `pakku add tmrv` ([More project add examples](https://juraj-hrivnak.github.io/Pakku/managing-projects.html#examples))
- `pakku update jei` / `pakku update -a`
  - I tend not to use these 3 as I add/remove/update mods from prism launcher, then `pakku sync` the changes typically. However `pakku add` can be helpful if multiple people add mods in pull requests before merging, creating a merge conflict, you can `pakku add` the modid's and overwrite to solve the conflict.
#### [Pakku wiki on exporting Modpacks](https://juraj-hrivnak.github.io/Pakku/exporting-a-modpack.html)
- `pakku export` will export your instance as a curseforge-importable .zip file to `minecraft/build/curseforge/modpack-name.zip`
  - Importing this modpack.zip will pretty much give you a full test environment to make sure your modpack will run in production, however a few things will be off, as the github workflow that does proper releases replaces contents of some files when creating an automated release. Read more in the workflow [!README.md](https://github.com/Deepacat/deepas-template-modpack/blob/dev/.github/workflows/!README.md)
  - By default this will output a client and serverpack zip, you can disable exporting server by using `pakku export --no-server` to download less data when exporting for testing.

### pakku.json ([Overrides](https://juraj-hrivnak.github.io/Pakku/adding-overrides.html), [Project Properties](https://juraj-hrivnak.github.io/Pakku/overriding-projects-properties.html#understanding-project-sides))
pakku.json is the main config file for pakku, inside you configure:
- Modpack name, description, authors (DO NOT CHANGE THE VERSION FROM "DEV", the automated action does this.)
- The folders you want to export in your modpack exports (Overrides)
- The folders you want to export specifically for server exports (Server Overrides)
- Which mods are clientside only
- Which projects should not be exported at all (Used for the dev environment only)

You should always export your pack with `pakku export` and test the exported modpack to ensure that all of your files from your commit function in the "production" environment before pushing/submitting a pull request.

When adding an external mod/resource pack which is sometimes required due to platform availability, you may use [manual overrides](https://juraj-hrivnak.github.io/Pakku/adding-manual-overrides.html) that will bundle the .jar/.zip files into the pack without a manifesting to `pakku-lock.json`
- Ensure you have the right to use said content! Or if it is a mod, ensure it's on the "[Approved Non-CurseForge Mods](https://docs.google.com/spreadsheets/d/176Wv-PZUo9hFxy6oC6N8tWdquBLPRtSuLbNK-r0_byM/edit#gid=0)" list (Alphebetical tabs at the bottom of page)
  - Example: If you want to use newer versions of CC:Tweaked which are now exclusive to modrinth, you would download their modrinth .jar file and place as `.pakku/overrides/mods/cc-tweaked-1.20.1-forge-1.119.0.jar` (Note CC:Tweaked has an entirely FOSS license allowing this inclusion of their mod)