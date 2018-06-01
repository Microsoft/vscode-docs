---
Order:
Area: getstarted
TOCTitle: Theme Color Reference
ContentId: 8e03996d-35e9-4e9f-a60e-50d0962231b8
PageTitle: VS Code Theme Color Reference
DateApproved: 5/3/2018
MetaDescription: Reference for Visual Studio Code theme colors.
---
# Theme Color Reference

You can customize your active Visual Studio Code [color theme](/docs/getstarted/themes.md) with the `workbench.colorCustomizations` user [setting](/docs/getstarted/settings.md).

```json
{
    "workbench.colorCustomizations": {
        "activityBar.background": "#00AA00"
    }
}
```

Below are the customizable colors grouped by UI region.

## Contrast Colors

The contrast colors are typically only set for high contrast themes. If set, they add an additional border around items across the UI to increase the contrast.

- `contrastActiveBorder`: An extra border around active elements to separate them from others for greater contrast.
- `contrastBorder`: An extra border around elements to separate them from others for greater contrast.

## Base Colors

- `focusBorder`: Overall border color for focused elements. This color is only used if not overridden by a component.
- `foreground`: Overall foreground color. This color is only used if not overridden by a component.
- `widget.shadow`: Shadow color of widgets such as Find/Replace inside the editor.
- `selection.background`: Background color of text selections in the workbench (for input fields or text areas, does not apply to selections within the editor and the terminal).
- `descriptionForeground`: Foreground color for description text providing additional information, for example for a label.
- `errorForeground`: Overall foreground color for error messages (this color is only used if not overridden by a component).

## Text Colors

Colors inside a text document, such as the welcome page.

- `textBlockQuote.background`: Background color for block quotes in text.
- `textBlockQuote.border`: Border color for block quotes in text.
- `textCodeBlock.background`: Background color for code blocks in text.
- `textLink.activeForeground`: Foreground color for active links in text.
- `textLink.foreground`: Foreground color for links in text.
- `textPreformat.foreground`: Foreground color for preformatted text segments.
- `textSeparator.foreground`: Color for text separators.

## Button Control

A set of colors for button widgets such as **Open Folder** button in the Explorer of a new window.

![button control](images/theme-color-reference/button.png)

- `button.background`: Button background color.
- `button.foreground`: Button foreground color.
- `button.hoverBackground`: Button background color when hovering.

## Dropdown Control

A set of colors for all dropdown widgets such as in the Integrated Terminal or the Output panel. Note that the
dropdown control is not used on macOS currently.

![drop down control](images/theme-color-reference/dropdown.png)

- `dropdown.background`: Dropdown background.
- `dropdown.listBackground`: Dropdown list background.
- `dropdown.border`: Dropdown border.
- `dropdown.foreground`: Dropdown foreground.

## Input Control

Colors for input controls such as in the Search view or the Find/Replace dialog.

![input control](images/theme-color-reference/input.png)

- `input.background`: Input box background.
- `input.border`: Input box border.
- `input.foreground`: Input box foreground.
- `input.placeholderForeground`: Input box foreground color for placeholder text.
- `inputOption.activeBorder`: Border color of activated options in input fields.
- `inputValidation.errorBackground`: Input validation background color for error severity.
- `inputValidation.errorBorder`: Input validation border color for error severity.
- `inputValidation.infoBackground`: Input validation background color for information severity.
- `inputValidation.infoBorder`: Input validation border color for information severity.
- `inputValidation.warningBackground`: Input validation background color for information warning.
- `inputValidation.warningBorder`: Input validation border color for warning severity.

## Scroll Bar Control

- `scrollbar.shadow`: Scroll Bar shadow to indicate that the view is scrolled.
- `scrollbarSlider.activeBackground`: Slider background color when active.
- `scrollbarSlider.background`: Slider background color.
- `scrollbarSlider.hoverBackground`: Slider background color when hovering.

## Badge

Badges are small information labels, for example, search results count.

- `badge.foreground`: Badge foreground color.
- `badge.background`: Badge background color.

## Progress Bar

- `progressBar.background`: Background color of the progress bar shown for long running operations.

## Lists and Trees

Colors for list and trees like the File Explorer. An active list/tree has keyboard focus, an inactive does not.

- `list.activeSelectionBackground`: List/Tree background color for the selected item when the list/tree is active.
- `list.activeSelectionForeground`: List/Tree foreground color for the selected item when the list/tree is active.
- `list.dropBackground`: List/Tree drag and drop background when moving items around using the mouse.
- `list.focusBackground`: List/Tree background color for the focused item when the list/tree is active.
- `list.focusForeground`: List/Tree foreground color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.
- `list.highlightForeground`: List/Tree foreground color of the match highlights when searching inside the list/tree.
- `list.hoverBackground`: List/Tree background when hovering over items using the mouse.
- `list.hoverForeground`: List/Tree foreground when hovering over items using the mouse.
- `list.inactiveSelectionBackground`: List/Tree background color for the selected item when the list/tree is inactive.
- `list.inactiveSelectionForeground`: List/Tree foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.
- `list.inactiveFocusBackground`: List background color for the focused item when the list is inactive. An active list has keyboard focus, an inactive does not. Currently only supported in lists.
- `list.invalidItemForeground`: List/Tree foreground color for invalid items, for example an unresolved root in explorer.

## Activity Bar

The Activity Bar is displayed either on the far left or right of the workbench and allows fast switching between views of the Side Bar.

- `activityBar.background`: Activity Bar background color.
- `activityBar.dropBackground`: Drag and drop feedback color for the Activity Bar items.
- `activityBar.foreground`: Activity bar foreground color (for example used for the icons).
- `activityBar.border`: Activity Bar border color with the Side Bar.
- `activityBarBadge.background`: Activity notification badge background color.
- `activityBarBadge.foreground`: Activity notification badge foreground color.

## Side Bar

The Side Bar contains views like the Explorer and Search.

- `sideBar.background`: Side Bar background color.
- `sideBar.foreground`: Side Bar foreground color. The Side Bar is the container for views like Explorer and Search.
- `sideBar.border`: Side Bar border color on the side separating the editor.
- `sideBar.dropBackground`: Drag and drop feedback color for the side bar sections. The color should have transparency so that the side bar sections can still shine through. The side bar is the container for views like explorer and search.

- `sideBarTitle.foreground`: Side Bar title foreground color.
- `sideBarSectionHeader.background`: Side Bar section header background color.
- `sideBarSectionHeader.foreground`: Side Bar section header foreground color.

## Editor Groups & Tabs

Editor Groups are the containers of editors. There can be up to three editor groups. A Tab is the container of an editor. Multiple Tabs can be opened in one editor group.

- `editorGroup.background`: Background color of an editor group. The background color shows up when dragging editor groups around.

    ![editorGroup.background](images/theme-color-reference/editorGroup-background.gif)

- `editorGroup.border`: Color to separate multiple editor groups from each other.

    ![editorGroup.border](images/theme-color-reference/editorGroup-border.gif)

- `editorGroup.dropBackground`: Background color when dragging editors around.

    ![editorGroup.dropBackground](images/theme-color-reference/editorGroup-dropbackground.gif)

- `editorGroupHeader.noTabsBackground`: Background color of the editor group title header when Tabs are disabled (set `"workbench.editor.showTabs": false`).

    ![editorGroupHeader.noTabsBackground](images/theme-color-reference/editorgroupheader-notabsbackground.gif)

- `editorGroupHeader.tabsBackground`: Background color of the Tabs container.

    ![editorGroupHeader.tabsBackground](images/theme-color-reference/editorgroupheader-tabsbackground.gif)

- `editorGroupHeader.tabsBorder`: Border color of the editor group title header when tabs are enabled.

    ![editorGroupHeader.tabsBorder](images/theme-color-reference/editorgroupheader-tabsborder.gif)

- `tab.activeBackground`: Active Tab background color.
- `tab.activeForeground`: Active Tab foreground color in an active group.
- `tab.border`: Border to separate Tabs from each other.
- `tab.activeBorder`: Bottom border for the active tab.
- `tab.unfocusedActiveBorder`: Bottom border for the active tab in an inactive editor group.
- `tab.inactiveBackground`: Inactive Tab background color.
- `tab.inactiveForeground`: Inactive Tab foreground color in an active group.
- `tab.unfocusedActiveForeground`: Active tab foreground color in an inactive editor group.
- `tab.unfocusedInactiveForeground`: Inactive tab foreground color in an inactive editor group.
- `tab.hoverBackground`: Tab background color when hovering
- `tab.unfocusedHoverBackground`: Tab background color in an unfocused group when hovering
- `tab.hoverBorder`: Border to highlight tabs when hovering
- `tab.unfocusedHoverBorder`: Border to highlight tabs in an unfocused group when hovering

## Editor Colors

The most prominent editor colors are the token colors used for syntax highlighting and are based on the language grammar installed. These colors are defined by the Color Theme but can also be customized with the `editor.tokenColorCustomizations` setting. See [Customizing a Color Theme](/docs/getstarted/themes.md#customizing-a-color-theme) for  details on updating a Color Theme and the available token types.

All other editor colors are listed here:

- `editor.background`: Editor background color.
- `editor.foreground`: Editor default foreground color.
- `editorLineNumber.foreground`: Color of editor line numbers.
- `editorLineNumber.activeForeground`: Color of the active editor line number.
- `editorCursor.background`: The background color of the editor cursor. Allows customizing the color of a character overlapped by a block cursor.
- `editorCursor.foreground`: Color of the editor cursor.

Selection colors are visible when selecting one or more characters. In addition to the selection also all regions with the same content are highlighted.

![selection highlight](images/theme-color-reference/selectionhighlight.png)

- `editor.selectionBackground`: Color of the editor selection.
- `editor.selectionForeground`: Color of the selected text for high contrast.
- `editor.inactiveSelectionBackground`: Color of the selection in an inactive editor. The color must not be opaque to not hide underlying decorations.
- `editor.selectionHighlightBackground`: Color for regions with the same content as the selection. The color must not be opaque to not hide underlying decorations.
- `editor.selectionHighlightBorder`: Border color for regions with the same content as the selection.

Word highlight colors are visible when the cursor is inside a symbol or a word. Depending on the language support available for the file type, all matching references and declarations are highlighted and read and write accesses get different colors. If document symbol language support is not available, this falls back to word highlighting.

![occurrences](images/theme-color-reference/occurrences.png)

- `editor.wordHighlightBackground`: Background color of a symbol during read-access, for example when reading a variable. The color must not be opaque to not hide underlying decorations.
- `editor.wordHighlightBorder`: Border color of a symbol during read-access, for example when reading a variable.
- `editor.wordHighlightStrongBackground`: Background color of a symbol during write-access, for example when writing to a variable. The color must not be opaque to not hide underlying decorations.
- `editor.wordHighlightStrongBorder`: Border color of a symbol during write-access, for example when writing to a variable.

Find colors depend on the current find string in the Find/Replace dialog.

![Find matches](images/theme-color-reference/findmatches.png)

- `editor.findMatchBackground`: Color of the current search match.
- `editor.findMatchHighlightBackground`: Color of the other search matches. The color must not be opaque to not hide underlying decorations.
- `editor.findRangeHighlightBackground`: Color the range limiting the search (Enable 'Find in Selection' in the find widget). The color must not be opaque to not hide underlying decorations.
- `editor.findMatchBorder`: Border color of the current search match.
- `editor.findMatchHighlightBorder`: Border color of the other search matches.
- `editor.findRangeHighlightBorder`: Border color the range limiting the search (Enable 'Find in Selection' in the find widget).

The hover highlight is shown behind the symbol for which a hover is shown.

![Hover Highlight](images/theme-color-reference/hoverhighlight.png)

- `editor.hoverHighlightBackground`: Highlight below the word for which a hover is shown. The color must not be opaque to not hide underlying decorations.

The current line is typically shown as either background highlight or a border (not both).

![Line Highlight](images/theme-color-reference/line.png)

- `editor.lineHighlightBackground`: Background color for the highlight of line at the cursor position.
- `editor.lineHighlightBorder`: Background color for the border around the line at the cursor position.

The link color is visible when clicking on a link.

![Link](images/theme-color-reference/link.png)

- `editorLink.activeForeground`: Color of active links.

The range highlight is visible when selecting a search result.

![Range Highlight](images/theme-color-reference/rangehighlight.png)

- `editor.rangeHighlightBackground`: Background color of highlighted ranges, used by Quick Open, Symbol in File and Find features. The color must not be opaque to not hide underlying decorations.
- `editor.rangeHighlightBorder`: Background color of the border around highlighted ranges.

To see the editor white spaces, enable **Toggle Render Whitespace**.

- `editorWhitespace.foreground`: Color of whitespace characters in the editor.

To see the editor indent guides, set `"editor.renderIndentGuides": true`.

- `editorIndentGuide.background`: Color of the editor indentation guides.
- `editorIndentGuide.activeBackground`: Color of the active editor indentation guide.

To see editor rulers, define their location with `"editor.rulers"`

- `editorRuler.foreground`: Color of the editor rulers.

Code Lens:

![Code Lenses](images/theme-color-reference/codelens.png)

- `editorCodeLens.foreground`: Foreground color of an editor CodeLens.

Bracket matches:

![Bracket colors](images/theme-color-reference/bracket-colors.png)

- `editorBracketMatch.background`: Background color behind matching brackets.
- `editorBracketMatch.border`: Color for matching brackets boxes.

Overview ruler:

This ruler is located beneath the scroll bar on the right edge of the editor and gives an overview of the decorations in the editor.

- `editorOverviewRuler.border`: Color of the overview ruler border.
- `editorOverviewRuler.findMatchForeground`: Overview ruler marker color for find matches. The color must not be opaque to not hide underlying decorations.
- `editorOverviewRuler.rangeHighlightForeground`: Overview ruler marker color for highlighted ranges, like by the Quick Open, Symbol in File and Find features. The color must not be opaque to not hide underlying decorations.
- `editorOverviewRuler.selectionHighlightForeground`: Overview ruler marker color for selection highlights. The color must not be opaque to not hide underlying decorations.
- `editorOverviewRuler.wordHighlightForeground`: Overview ruler marker color for symbol highlights. The color must not be opaque to not hide underlying decorations.
- `editorOverviewRuler.wordHighlightStrongForeground`: Overview ruler marker color for write-access symbol highlights. The color must not be opaque to not hide underlying decorations.
- `editorOverviewRuler.modifiedForeground`: Overview ruler marker color for modified content.
- `editorOverviewRuler.addedForeground`: Overview ruler marker color for added content.
- `editorOverviewRuler.deletedForeground`: Overview ruler marker color for deleted content.
- `editorOverviewRuler.errorForeground`: Overview ruler marker color for errors.
- `editorOverviewRuler.warningForeground`: Overview ruler marker color for warnings.
- `editorOverviewRuler.infoForeground`: Overview ruler marker color for infos.
- `editorOverviewRuler.bracketMatchForeground`: Overview ruler marker color for matching brackets.

Errors and warnings:

- `editorError.foreground`: Foreground color of error squiggles in the editor.
- `editorError.border`: Border color of error squiggles in the editor.
- `editorWarning.foreground`: Foreground color of warning squiggles in the editor.
- `editorWarning.border`: Border color of warning squiggles in the editor.
- `editorInfo.foreground`: Foreground color of info squiggles in the editor.
- `editorInfo.border`: Border color of info squiggles in the editor.
- `editorHint.foreground`: Foreground color of hints in the editor.
- `editorHint.border`: Border color of hints in the editor.

The gutter contains the glyph margins and the line numbers:

- `editorGutter.background`: Background color of the editor gutter. The gutter contains the glyph margins and the line numbers.
- `editorGutter.modifiedBackground`: Editor gutter background color for lines that are modified.
- `editorGutter.addedBackground`: Editor gutter background color for lines that are added.
- `editorGutter.deletedBackground`: Editor gutter background color for lines that are deleted.

## Diff Editor Colors

For coloring inserted and removed text, use either a background or a border color but not both.

- `diffEditor.insertedTextBackground`: Background color for text that got inserted. The color must not be opaque to not hide underlying decorations.
- `diffEditor.insertedTextBorder`: Outline color for the text that got inserted.
- `diffEditor.removedTextBackground`: Background color for text that got removed. The color must not be opaque to not hide underlying decorations.
- `diffEditor.removedTextBorder`: Outline color for text that got removed.

## Editor Widget Colors

The Editor widget is shown in front of the editor content. Examples are the Find/Replace dialog, the suggestion widget, and the editor hover.

- `editorWidget.background`: Background color of editor widgets, such as Find/Replace.
- `editorWidget.border`: Border color of the editor widget unless the widget does not contain a border or defines its own border color.

- `editorSuggestWidget.background`: Background color of the suggestion widget.
- `editorSuggestWidget.border`: Border color of the suggestion widget.
- `editorSuggestWidget.foreground`: Foreground color of the suggestion widget.
- `editorSuggestWidget.highlightForeground`: Color of the match highlights in the suggestion widget.
- `editorSuggestWidget.selectedBackground`: Background color of the selected entry in the suggestion widget.

- `editorHoverWidget.background`: Background color of the editor hover.
- `editorHoverWidget.border`: Border color of the editor hover.

The Debug Exception widget is a peek view that shows in the editor when debug stops at an exception.

- `debugExceptionWidget.background`: Exception widget background color.
- `debugExceptionWidget.border`: Exception widget border color.

The editor marker view shows when navigating to errors and warnings in the editor (**Go to Next Error or Warning** command).

- `editorMarkerNavigation.background`: Editor marker navigation widget background.
- `editorMarkerNavigationError.background`: Editor marker navigation widget error color.
- `editorMarkerNavigationWarning.background`: Editor marker navigation widget warning color.
- `editorMarkerNavigationInfo.background`: Editor marker navigation widget info color.

## Peek View Colors

Peek views are used to show references and declarations as a view inside the editor.

![Peek view](images/theme-color-reference/peek-view.png)

- `peekView.border`: Color of the peek view borders and arrow.
- `peekViewEditor.background`: Background color of the peek view editor.
- `peekViewEditorGutter.background`: Background color of the gutter in the peek view editor.
- `peekViewEditor.matchHighlightBackground`: Match highlight color in the peek view editor.
- `peekViewEditor.matchHighlightBorder`: Match highlight border color in the peek view editor.
- `peekViewResult.background`: Background color of the peek view result list.
- `peekViewResult.fileForeground`: Foreground color for file nodes in the peek view result list.
- `peekViewResult.lineForeground`: Foreground color for line nodes in the peek view result list.
- `peekViewResult.matchHighlightBackground`: Match highlight color in the peek view result list.
- `peekViewResult.selectionBackground`: Background color of the selected entry in the peek view result list.
- `peekViewResult.selectionForeground`: Foreground color of the selected entry in the peek view result list.
- `peekViewTitle.background`: Background color of the peek view title area.
- `peekViewTitleDescription.foreground`: Color of the peek view title info.
- `peekViewTitleLabel.foreground`: Color of the peek view title.

## Merge Conflicts

Merge conflict decorations are shown when the editor contains special diff ranges.

![Merge ranges](images/theme-color-reference/merge-ranges.png)

- `merge.currentHeaderBackground`: Current header background in inline merge conflicts. The color must not be opaque to not hide underlying decorations.
- `merge.currentContentBackground`: Current content background in inline merge conflicts. The color must not be opaque to not hide underlying decorations.
- `merge.incomingHeaderBackground`: Incoming header background in inline merge conflicts. The color must not be opaque to not hide underlying decorations.
- `merge.incomingContentBackground`: Incoming content background in inline merge conflicts. The color must not be opaque to not hide underlying decorations.
- `merge.border`: Border color on headers and the splitter in inline merge conflicts.
- `merge.commonContentBackground`: Common ancestor content background in inline merge-conflicts. The color must not be opaque to not hide underlying decorations.
- `merge.commonHeaderBackground`: Common ancestor header background in inline merge-conflicts. The color must not be opaque to not hide underlying decorations.
- `editorOverviewRuler.currentContentForeground`: Current overview ruler foreground for inline merge conflicts.
- `editorOverviewRuler.incomingContentForeground`: Incoming overview ruler foreground for inline merge conflicts.
- `editorOverviewRuler.commonContentForeground`: Common ancestor overview ruler foreground for inline merge conflicts.

## Panel Colors

Panels are shown below the editor area and contain views like Output and Integrated Terminal.

- `panel.background`: Panel background color.
- `panel.border`: Panel border color to separate the panel from the editor.
- `panel.dropBackground`: Drag and drop feedback color for the panel title items. The color should have transparency so that the panel entries can still shine through.
- `panelTitle.activeBorder`: Border color for the active panel title.
- `panelTitle.activeForeground`: Title color for the active panel.
- `panelTitle.inactiveForeground`: Title color for the inactive panel.

## Status Bar Colors

The Status Bar is shown in the bottom of the workbench.

- `statusBar.background`: Standard Status Bar background color.
- `statusBar.foreground`: Status Bar foreground color.
- `statusBar.border`: Status Bar border color separating the Status Bar and editor.
- `statusBar.debuggingBackground`: Status Bar background color when a program is being debugged.
- `statusBar.debuggingForeground`: Status Bar foreground color when a program is being debugged.
- `statusBar.debuggingBorder`: Status Bar border color separating the Status Bar and editor when a program is being debugged.
- `statusBar.noFolderForeground`: Status Bar foreground color when no folder is opened.
- `statusBar.noFolderBackground`: Status Bar background color when no folder is opened.
- `statusBar.noFolderBorder`: Status Bar border color separating the Status Bar and editor when no folder is opened.
- `statusBarItem.activeBackground`: Status Bar item background color when clicking.
- `statusBarItem.hoverBackground`: Status Bar item background color when hovering.
- `statusBarItem.prominentBackground`: Status Bar prominent items background color. Prominent items stand out from other Status Bar entries to indicate importance. Change mode `Toggle Tab Key Moves Focus` from command palette to see an example.
- `statusBarItem.prominentHoverBackground`: Status Bar prominent items background color when hovering. Prominent items stand out from other Status Bar entries to indicate importance. Change mode `Toggle Tab Key Moves Focus` from command palette to see an example.

## Title Bar Colors (macOS)

**Note:** These colors are currently only supported on macOS.

- `titleBar.activeBackground`: Title Bar background when the window is active.
- `titleBar.activeForeground`: Title Bar foreground when the window is active.
- `titleBar.inactiveBackground`: Title Bar background when the window is inactive.
- `titleBar.inactiveForeground`: Title Bar foreground when the window is inactive.
- `titleBar.border`: Title bar border color.

## Notification Colors

**Note:** The colors below only apply for VS Code versions 1.21 and higher.

Notification toasts slide up from the bottom-right of the workbench.

![Notification Toasts](images/theme-color-reference/notification-toast.png)

Once opened in the Notification Center, they are displayed in a list with a header:

![Notification Center](images/theme-color-reference/notification-center.png)

- `notificationCenter.border`: Notification Center border color.
- `notificationCenterHeader.foreground`: Notification Center header foreground color.
- `notificationCenterHeader.background`: Notification Center header background color.
- `notificationToast.border`: Notification toast border color.
- `notifications.foreground`: Notification foreground color.
- `notifications.background`: Notification background color.
- `notifications.border`: Notification border color separating from other notifications in the Notification Center.
- `notificationLink.foreground`: Notification links foreground color.

If you target VS Code versions before the 1.21 (February 2018) release, these are the old (no longer supported) colors:

- `notification.background`
- `notification.foreground`
- `notification.buttonBackground`
- `notification.buttonForeground`
- `notification.buttonHoverBackground`
- `notification.errorBackground`
- `notification.errorForeground`
- `notification.infoBackground`
- `notification.infoForeground`
- `notification.warningBackground`
- `notification.warningForeground`

## Extensions

- `extensionButton.prominentForeground`: Extension view button foreground color (for example **Install** button).
- `extensionButton.prominentBackground`: Extension view button background color.
- `extensionButton.prominentHoverBackground`: Extension view button background hover color.

## Quick Picker

- `pickerGroup.border`: Quick picker (Quick Open) color for grouping borders.
- `pickerGroup.foreground`: Quick picker (Quick Open) color for grouping labels.

## Integrated Terminal Colors

- `terminal.background`: The background of the Integrated Terminal's viewport.
- `terminal.border`: The color of the border that separates split panes within the terminal. This defaults to panel.border.
- `terminal.foreground`: The default foreground color of the Integrated Terminal.
- `terminal.ansiBlack`: 'Black' ANSI color in the terminal.
- `terminal.ansiBlue`: 'Blue' ANSI color in the terminal.
- `terminal.ansiBrightBlack`: 'BrightBlack' ANSI color in the terminal.
- `terminal.ansiBrightBlue`: 'BrightBlue' ANSI color in the terminal.
- `terminal.ansiBrightCyan`: 'BrightCyan' ANSI color in the terminal.
- `terminal.ansiBrightGreen`: 'BrightGreen' ANSI color in the terminal.
- `terminal.ansiBrightMagenta`: 'BrightMagenta' ANSI color in the terminal.
- `terminal.ansiBrightRed`: 'BrightRed' ANSI color in the terminal.
- `terminal.ansiBrightWhite`: 'BrightWhite' ANSI color in the terminal.
- `terminal.ansiBrightYellow`: 'BrightYellow' ANSI color in the terminal.
- `terminal.ansiCyan`: 'Cyan' ANSI color in the terminal.
- `terminal.ansiGreen`: 'Green' ANSI color in the terminal.
- `terminal.ansiMagenta`: 'Magenta' ANSI color in the terminal.
- `terminal.ansiRed`: 'Red' ANSI color in the terminal.
- `terminal.ansiWhite`: 'White' ANSI color in the terminal.
- `terminal.ansiYellow`: 'Yellow' ANSI color in the terminal.
- `terminal.selectionBackground`: The selection background color of the terminal.
- `terminalCursor.background`: The background color of the terminal cursor. Allows customizing the color of a character overlapped by a block cursor.
- `terminalCursor.foreground`: The foreground color of the terminal cursor.

## Debug

- `debugToolBar.background`: Debug toolbar background color.
- `debugToolBar.border`: Debug toolbar border color.

## Welcome Page

- `welcomePage.buttonBackground`: Background color for the buttons on the Welcome page.
- `welcomePage.buttonHoverBackground`: Hover background color for the buttons on the Welcome page.
- `walkThrough.embeddedEditorBackground`: Background color for the embedded editors on the Interactive Playground.

## Git Colors

- `gitDecoration.modifiedResourceForeground`: Color for modified git resources. Used file labels and the SCM viewlet.
- `gitDecoration.deletedResourceForeground`: Color for deleted git resources. Used file labels and the SCM viewlet.
- `gitDecoration.untrackedResourceForeground`: Color for untracked git resources. Used file labels and the SCM viewlet.
- `gitDecoration.ignoredResourceForeground`: Color for ignored git resources. Used file labels and the SCM viewlet.
- `gitDecoration.conflictingResourceForeground`: Color for conflicting git resources. Used file labels and the SCM viewlet.
