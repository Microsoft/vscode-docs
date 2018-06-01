---
Order: 3
Area: editor
TOCTitle: Extension Marketplace
ContentId: 319916C4-93F2-471F-B448-FD416736C40C
PageTitle: Managing Extensions in Visual Studio Code
DateApproved: 5/3/2018
MetaDescription: Discover, add, update, disable and uninstall Visual Studio Code extensions (plug-ins) through the Extension Marketplace.
---
# VS Code Extension Marketplace

**Increase the power of Visual Studio Code through Extensions**

The features that Visual Studio Code includes out-of-the-box are just the start. VS Code extensions let you add languages, debuggers, and tools to your installation to support your development workflow. VS Code's rich extensibility model lets extension authors plug directly into the VS Code UI and contribute functionality through the same APIs used by VS Code.  This topic explains how to find, install, and manage VS Code extensions.

## Browse for extensions

You can browse and install extensions from within VS Code. Bring up the Extensions view by clicking on the Extensions icon in the **Activity Bar** on the side of VS Code or the **View: Extensions** command (`kb(workbench.view.extensions)`).

![Extensions view icon](images/extension-gallery/extensions-view-icon.png)

This will show you a list of the most popular VS Code extensions on the [VS Code Marketplace](https://marketplace.visualstudio.com/VSCode).

![popular extensions](images/extension-gallery/extensions-popular.png)

Each extension in the list includes a brief description, the publisher, the download count and a five star rating. You can click on the extension item to display the extension's [VS Code Marketplace](https://marketplace.visualstudio.com/VSCode) page where you can learn more.

> **Note:** If your computer's Internet access goes through a proxy server, you will need to configure the proxy server. See [Proxy server support](/docs/setup/network.md#proxy-server-support) for details.

### Install an extension

Click the **Install** button and after a successful install, you'll see an **Reload** button which will prompt you to restart VS Code to enable the new extension.

### Extension details

In the extension Details window, you can read the extension's README as well as review the extension's:

* **Contributions** - The extension's additions to VS Code such as settings, commands and keyboard shortcuts, language grammars, debugger, etc.
* **Changelog** - The extension repository CHANGELOG if available.
* **Dependencies** - Lists if the extension depends on any other extensions.

![extension contributions](images/extension-gallery/extension-contributions.png)

If an extension is an Extension Pack, the **Dependencies** section will display which extensions will be installed. [Extension Packs](/docs/extensionAPI/extension-manifest.md#extension-packs) bundle separate extensions together so they can be easily installed at one time.

![extension dependencies](images/extension-gallery/extension-dependencies.png)

### Extensions view commands

You can run various Extensions view commands by clicking on the Extensions view's `...` **More** button.

![more button](images/extension-gallery/more-button.png)

There are commands to show:

* The list of currently installed extensions
* The list of outdated extensions that can be updated
* The list of currently enabled/disabled extensions
* The list of recommended extensions based on your workspace
* The list of globally popular extensions

You can sort the extension list by **Install Count** or **Rating** in either ascending or descending order. You can learn more about extension search filters [below](#extensions-view-filters).

![more dropdown](images/extension-gallery/more-dropdown.png)

### Search for an extension

You can clear the Search box at the top of the Extensions view and type in the name of the extension, tool or programming language you're looking for.

For example, typing 'python' will bring up a list of Python language extensions:

![python extensions](images/extension-gallery/extensions-python.png)

## Manage extensions

VS Code makes it very easy to manage your extensions. You can install, disable, update, and uninstall extensions through the Extensions view, the **Command Palette** (commands have the **Extensions:** prefix) or command line switches.

### List installed extensions

By default, the Extensions view will show your installed extensions. You can also use the **Show Installed Extensions** command, available in the **Command Palette** (`kb(workbench.action.showCommands)`) or the **More** (`...`) dropdown, to clear any text in the search box and show the list of installed extensions.

### Uninstall an extension

To uninstall an extension, click the gear button at the right of an extension entry and then choose **Uninstall** from the dropdown. This will uninstall the extension and prompt you to reload VS Code.

![uninstall an extension](images/extension-gallery/uninstall-extension.png)

### Disable an extension

Disable an extension by clicking the gear button at the right of an extension entry. You can disable an extension globally or just for your current Workspace. You will be prompted to reload VS Code after you disable an extension.

If you want to quickly disable all installed extensions, there is a **Disable All Installed Extensions** command in the **Command Palette** and **More** (`...`) dropdown.

Extensions remain disabled for all VS Code sessions until you re-enable them.

### Enable an extension

Similarly if you have disabled an extension (it will be marked ***Disabled***), you can re-enable it with the **Enable** or **Enable (Workspace)** commands in the dropdown.

![enable extension](images/extension-gallery/enable-extension.png)

There is also an **Enable All Extensions** command in the **More** (`...`) dropdown.

### Extension auto-update

VS Code checks for extension updates and installs them automatically. After an update, you will be prompted to reload VS Code. If you'd rather update your extensions manually, you can disable auto-update with the **Disable Auto Updating Extensions** command which sets the `extensions.autoUpdate` [setting](/docs/getstarted/settings.md)  to `false`.

### Update an extension

If you have extensions auto-update disabled, you can quickly look for extension updates by using the **Show Outdated Extensions** command which uses the `@outdated` filter.  This will display any available updates for your currently installed extensions. Click the **Update** button for the outdated extension and the update will be installed and you'll be prompted to reload VS Code. You can also update all your outdated extensions at one time with the **Update All Extensions** command.

## Recommended extensions

You can see a list of recommended extensions using **Show Recommended Extensions**, which sets the `@recommended` [filter](#extensions-view-filters). Extension recommendations can either be :

* **Workspace Recommendations** - Recommended by other users of your current workspace.
* **Other Recommendations** - Recommended based on recently opened files.

See the section below to learn how to [contribute](#workspace-recommended-extensions) recommendations for other users in your project.

## Configuring extensions

VS Code extensions may have very different configurations and requirements. Some extensions contribute [settings](/docs/getstarted/settings.md) to VS Code, which can be modified in the Settings editor. Other extensions may have their own configuration files. Extensions may also require installation and setup of additional components like compilers, debuggers, and command line tools. Consult the extension's README (visible in the Extensions view Details window) or go to the extension page on the [VS Code Marketplace](https://marketplace.visualstudio.com/VSCode) (click on the extension name in the Details window). Many extensions are open source and have a link to their repository on their Marketplace page.

## Command line extension management

To make it easier to automate and configure VS Code, it is possible to list, install, and uninstall extensions from the [command line](/docs/editor/command-line.md). When identifying an extension, provide the full name of the form `publisher.extension`, for example `ms-python.python`.

Example:

```
code --list-extensions
code --install-extension {extension id}
code --uninstall-extension {extension id}
code --disable-extensions
```

You can see the extension id on the extension Details window next to the extension name.

![extension identifier](images/extension-gallery/extension-identifier.png)

## Extensions view filters

The Extensions view search box supports filters to help you find and manage extensions. You may have seen filters such as `@installed` and `@recommended` if you used the commands **Show Installed Extensions** and **Show Recommended Extensions**. There are also filters to let you sort by popularity and ratings and search by category (for example 'Linters') and tags (for example 'node').

Here are the Extensions view filters:

* `@installed` - Show installed extensions.
* `@outdated` - Show outdated installed extensions. A newer version is available on the Marketplace.
* `@enabled` - Show enabled installed extensions. Extensions can be individually enabled/disabled.
* `@disabled` - Show disabled installed extensions.
* `@builtin` - Show extensions that come with VS Code. Grouped by type (Programming Languages, Themes, etc.).
* `@recommended` - Show recommended extensions. Grouped as Workspace specific or general use.

If no filter is provided, the Extensions view displays the currently installed and recommended extensions.

### Sorting

You can sort extensions with the `@sort` filter which can take the following values:

* `installs` - Sort by Marketplace installation count, in descending order.
* `rating` - Sort by Marketplace rating (1-5 stars), in descending order.
* `name` - Sort alphabetically by extension name.

![sort by install count](images/extension-gallery/sort-install-count.png)

### Categories and tags

Extensions can set **Categories** and **Tags** describing their features.

![extension categories and tags](images/extension-gallery/categories-and-tags.png)

You can filter on category and tag by using `category:` and `tag:`.

![categories debuggers](images/extension-gallery/categories-debuggers.png)

Supported categories are: `[Programming Languages, Snippets, Linters, Themes, Debuggers, Formatters, Keymaps, SCM Providers, Other, Extension Packs, Language Packs]`. Surround the category in quotes if the category name is more than one word (for example, `category:"SCM Providers"`). Tags may contain any string so review the Marketplace to find helpful tags.

## Install from a VSIX

You can manually install a VS Code extension packaged in a `.vsix` file. Using the **Install from VSIX...** command in the Extensions view command drop-down, or the **Extensions: Install from VSIX...** command in the **Command Palette**, point to the `.vsix` file.

You can also install using the VS Code `--install-extension` command line switch providing the path to the `.vsix` file.

```
code --install-extension myextension.vsix
```

You may provide the `--install-extension` multiple times on the command line to install multiple extensions at once.

If you'd like to learn more about packaging and publishing extensions, see our [Publishing Extensions](/docs/extensions/publish-extension.md) topic in the Extension Authoring section.

## Workspace recommended extensions

A good set of extensions can make working with a particular workspace or programming language more productive and you'd often like to share this list with your team or colleagues. You can create a recommended list of extensions for a workspace with the **Extensions: Configure Recommended Extensions (Workspace)** command.

In a single folder workspace, the command creates an `extensions.json` file located in the workspace `.vscode` folder where you can add a list of extensions identifiers ({publisherName}.{extensionName}).

In a [multi-root workspace](/docs/editor/multi-root-workspaces.md), the command will open your `.code-workspace` file where you can list extensions under `extensions.recommendations`. You can still add extension recommendations to individual folders in a multi-root workspace by using the **Extensions: Configure Recommended Extensions (Workspace Folder)** command.

An example `extensions.json` could be:

```json
{
    "recommendations": [
        "eg2.tslint",
        "dbaeumer.vscode-eslint",
        "msjsdiag.debugger-for-chrome"
    ]
}
```

which recommends two linter extensions, TSLint and ESLint, as well as the Chrome debugger extension.

An extension is identified using its publisher name and extension identifier `publisher.extension`. You can see the name on the extension's detail page.

![Extension identifier](images/extension-gallery/extension-identifier.png).

VS Code prompts a user to install the recommended extensions when a workspace is opened for the first time. The user can also review the list with the **Extensions: Show Recommended Extensions** command.

![Show Recommendations](images/extension-gallery/recommendations.png)

## Next steps

Here are a few topics you may find interesting...

* [Publishing to the Marketplace](/docs/extensions/publish-extension.md) - Publish your own extension to the VS Code Marketplace.
* [Extension Generator](/docs/extensions/yocode.md) - Learn how the `yo code` extension generator can scaffold out a new extension.
* [Extending Visual Studio Code](/docs/extensions/overview.md) - Start learning about VS Code extensibility.
* [Your First Extension](/docs/extensions/example-hello-world.md) - Try creating a simple Hello World extension.
* [Troubleshooting Extensions](/docs/extensions/developing-extensions.md#troubleshooting-extensions) - See our troubleshooting guide if an extension isn't working properly.

## Common questions

**Q: Where are extensions installed?**

**A**: Extensions are installed in a per user extensions folder. Depending on your platform, the location is in the following folder:

* **Windows** `%USERPROFILE%\.vscode\extensions`
* **macOS** `~/.vscode/extensions`
* **Linux** `~/.vscode/extensions`

You can change the location by launching VS Code with the `--extensions-dir <dir>` command line [option](/docs/editor/command-line.md).

**Q: Whenever I try to install any extension, I get a connect ETIMEDOUT error.**

**A:** You may see this error if your machine is going through a proxy server to access the Internet.  See the [Proxy server support](/docs/setup/network.md#proxy-server-support) section in SETUP topic for details.

**Q: Can I download an extension directly from the Marketplace?**

**A:** Some users prefer to download an extension once from the Marketplace and then install it multiple times from a local share. This is useful when there are connectivity concerns or if your development team wants to use a fixed set of extensions.

To download an extension, navigate to the details page for the specific extension within the [Marketplace](https://marketplace.visualstudio.com/vscode). On that page there is a **Download Extension** link in the **Resources** section which is located on the right hand side of the page.

Once downloaded, you can then install the extension via the **Install from VSIX...** command in the Extensions view command drop-down.

**Q: Can I stop VS Code from providing extension recommendations?**

**A:** Yes, if you would prefer to not have VS Code display extension recommendations in the Extensions view or through notifications, you can modify the following settings:

* `extensions.showRecommendationsOnlyOnDemand` - Set to true to remove the **RECOMMENDED** section.
* `extensions.ignoreRecommendations` - Set to true to silence extension recommendation notifications.

The **Show Recommended Extensions** command is always available if you wish to see recommendations.