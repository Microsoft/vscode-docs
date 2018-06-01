---
Order: 5
Area: getstarted
TOCTitle: Themes
ContentId: CAC88BC7-90A5-4384-8A05-2187117C0F72
PageTitle: Visual Studio Code Themes
DateApproved: 5/3/2018
MetaDescription: Changing the color theme in Visual Studio Code. You can use color themes provided by VS Code, the community or create your own new themes.  TextMate .tmTheme files are supported.
---
# Color Themes

Color themes let you modify the colors in VS Code's user interface to suit your preferences and work environment.

![Preview themes from the Command Palette](images/themes/themes_hero.gif)

## Selecting the Color Theme

The current color theme is configured in the [settings](/docs/getstarted/settings.md).

```javascript
  // Specifies the color theme used in the workbench.
  "workbench.colorTheme": "Default Dark+"
}
```

However, there is no need to edit the settings directly. It's easier to use the Color Theme Picker to preview and select a theme.

1. Open the Color Theme picker with **File** > **Preferences** > **Color Theme**. (**Code** > **Preferences** > **Color Theme** on macOS)
2. Use the cursor keys to preview the colors of the theme.
3. Select the theme you want and hit `kbstyle(Enter)`.

![Themes in the Command Palette](images/themes/colorthemes.png)

> **Tip:** By default, the theme is configured in the user settings and applies to all workspaces. But you can also configure a workspace specific theme. To do so, set a theme in the workspace settings.

## Color Themes from the Marketplace

There are several out-of-the-box color themes in VS Code for you to try.

Many more themes have been uploaded to the VS Code [Extension Marketplace](/docs/editor/extension-gallery.md) by the community.  If you find one you want to use, install it and restart VS Code and the new theme will be available.

> **Tip:** To search for themes, type 'theme' in the Extensions view (`kb(workbench.view.extensions)`) search box.

<div class="marketplace-extensions-themes"></div>

You can also browse the [VS Code Marketplace](https://marketplace.visualstudio.com/vscode/Themes) site directly to find available themes.

## Customizing a Color Theme

You can customize your active color theme with the `workbench.colorCustomizations` and `editor.tokenColorCustomizations` user [settings](/docs/getstarted/settings.md).

To set the colors of VS Code UI elements such as list & trees (File Explorer, suggestions widget), diff editor, Activity Bar, notifications, scroll bar, split view, buttons and more, use `workbench.colorCustomizations`.

![activity bar theming](images/themes/theme-activitybar.gif)

You can use IntelliSense while setting `workbench.colorCustomizations` values or, for a list of all customizable colors, see the [Theme Color Reference](/docs/getstarted/theme-color-reference.md).

To customize a specific theme only, use the following syntax:
```json
"workbench.colorCustomizations": {
    "[Monokai]": {
        "sideBar.background": "#347890"
    }
}
```

To tune the syntax highlighting colors, use the `editor.tokenColorCustomizations` setting:

![Token Color Customization](images/themes/token_color_customization.png)

A pre-configured set of syntax tokens ('comments', 'strings', ...) is available for the most common constructs. If you want more, you can do so by directly specifying TextMate theme color rules:

![Advanced Token Color Customization](images/themes/token_color_customization_advanced.png)

>**Note**: Directly configuring TextMate rules is an advanced skill as you need to understand on how TextMate grammars work. Go [here](/docs/extensions/themes-snippets-colorizers.md#textmate-theme-rules) for more information

Again, to customize a specific theme only, use the following syntax:

```json
"editor.tokenColorCustomizations": {
    "[Monokai]": {
        "comments": "#229977"
    }
},
```

## Creating your own color theme

Creating and publishing a theme extension is quite easy. Customize your colors in your user settings then generate a theme definition file with the **Developer: Generate Color Theme From Current Settings** command.

VS Code's Yeoman [extension generator](/docs/extensions/yocode.md) will help you generate the rest of the extension.

See the [Adding a new Theme](/docs/extensions/themes-snippets-colorizers.md#adding-a-new-theme) topic in our Extension Authoring section to learn more.

# Icon Themes

File icon themes can be contributed by extensions and selected by users as their favorite set of file icons. File icons are shown in the File Explorer and tabbed headings.

## Selecting the File Icon Theme

The current File Icon theme is persisted in your user [settings](/docs/getstarted/settings.md).

```javascript
  // Specifies the icon theme used in the workbench.
  "workbench.iconTheme": null
}
```

There is no need to edit the `settings.json` file directly. It is better to use the File Icon Theme picker to preview and select a theme.

1. Open the Icon Theme picker with **File** > **Preferences** > **File Icon Theme**. (**Code** > **Preferences** > **File Icon Theme** on macOS)
2. Use the cursor keys to preview the icons of the theme.
3. Select the theme you want and hit `kbstyle(Enter)`.

By default, no file icon set is configured, therefore the File Explorer shows no icons. Once an icon theme is selected, the selected theme will be remembered and set again when VS Code is started the next time.

VS code ships with two icon themes; **Minimal** and **Seti**. To install more icon themes, select the **Find more in the Marketplace...** item in the icon theme picker.

You can also browse the [VS Code Marketplace](https://marketplace.visualstudio.com/vscode/Themes) site directly to find available themes.

## Creating your own File Icon Theme

You can create your own File Icon Theme from icons (preferably SVG), see the [Adding a new Icon Theme](/docs/extensions/themes-snippets-colorizers.md#adding-a-new-icon-theme) topic in our Extension Authoring section for details.

## Next Steps

Themes are just one way to customize VS Code. If you'd like to learn more about VS Code customization and extensibility, try these topics:

* [Settings](/docs/getstarted/settings) -  Learn how to configure VS Code to your preferences through user and workspace settings.
* [Snippets](/docs/editor/userdefinedsnippets.md) - Add additional snippets to your favorite language.
* [Extending Visual Studio Code](/docs/extensions/overview.md) - Learn about other ways to extend VS Code.
* [Themes, Snippets, and Colorizers](/docs/extensions/themes-snippets-colorizers.md) - You can package themes, snippets and language colorizers for use in VS Code.
