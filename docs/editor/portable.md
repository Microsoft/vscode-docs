---
Order:
Area: editor
TOCTitle: Portable Mode
ContentId: A5C839C4-67E9-449C-94B8-4B310FCAAB1B
PageTitle: Portable Mode in Visual Studio Code
DateApproved: 7/5/2018
MetaDescription: Visual Studio Code supports a Portable Mode.
---

# Portable Mode

Visual Studio Code supports [Portable Mode](https://en.wikipedia.org/wiki/Portable_application). This mode enables all data created and maintained by VS Code to live near itself, so it can be moved around across environments.

Portable Mode is supported on the ZIP download for Windows and Linux, as well as the regular Application download for macOS.

## Enable Portable Mode

### Windows, Linux

After unzipping the VS Code download, simply create a `data` folder within Code's folder:

```
|- VSCode-win32-x64-1.25.0-insider
|   |- Code.exe (or code executable)
|   |- data
|   |- ...
```

From then on, that folder will be used to contain all Code data, including session state, preferences, extensions, etc.

The `data` folder can be moved to other VS Code installations. This is useful for updating your portable Code version: simply move the `data` folder to a newer extracted version of VS Code.

#### Merging your existing preferences and extensions to portable

If you have an existing - non portable - installation of VS Code and you want to get your preferences and extensions portable:
* create data folder (see above) 
* start code --> at first start subdirectories "extensions" and "user-data" are created under data
* copy your "old" extensions from "<userHome>\.vscode\extensions\" to "data\extensions"
* copy your user data from "<userHome>\AppData\Roaming\Code\" to "data\user-data"


### macOS

On **macOS**, you need to place the data folder as a sibling of the application itself. Since the folder will be alongside the application, you need to name it specifically so that Code can find it. The default folder name is `code-portable-data`:


```
|- Visual Studio Code.app
|- code-portable-data
```

Portable Mode won't work if your application is in [quarantine](https://apple.stackexchange.com/a/104875), which happens by default if you just downloaded Code. Make sure you remove the quarantine attribute, if Portable Mode doesn't seem to work:

```
xattr -d com.apple.quarantine Visual\ Studio\ Code.app
```

**Note:** On Insiders, the folder should be named `code-insiders-portable-data`.

## TMP Directory

By default, the default `TMP` directory is still the system one even in Portable Mode, since no state is kept there. If you wish to also have your TMP directory within your portable directory, simply create an empty `tmp` directory inside the `data` folder. As long as a `tmp` directory exists, it will be used for TMP data.

