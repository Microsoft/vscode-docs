---
Order: 1
Area: extensionapi
TOCTitle: Overview
PageTitle: Visual Studio Code Extensibility Reference
DateApproved: 12/18/2015
MetaDescription: Learn the details of Visual Studio Code's rich extensibility (plug-in) model.  This documentation describes the various extension points, activation rules and specific feature APIs (e.g. working with documents and editors).
---

# Extensibility Reference

This section of our documentation goes into detail on the various features of VS Code extensibility.  It's worth reviewing the introduction on the [extensions](/docs/extensions/overview.md) as well as going through the ['Hello World'](/docs/extensions/example-hello-world.md) example before digging in too deeply here.

The easiest way to see VS Code extensions in action is via the [Extension Gallery](/docs/editor/extension-gallery.md).  Once you have built your first extension or are ready to share a [customization](/docs/customization/overview.md), it can be [published](/docs/tools/vscecli.md) for others to install.


## The Extensibility Reference Documents
This section of our documentation covers the following topics...

Topic|Description
-----|-----------
**[package.json Extension Manifest](/docs/extensionAPI/extension-manifest.md)**|Every Visual Studio Code extension needs a manifest file `package.json` at the root of the extension folder. This document provides an overview of the structure of that file and the mandatory fields.
**[Contribution Points](/docs/extensionAPI/extension-points.md)**|Building on the base `project.json`, there are a number of additional extension points you can contribute to e.g. commands, themes, debuggers,...
**[Activation Events](/docs/extensionAPI/activation-events.md)**|VS Code lazily activates extensions. This document outlines the activation options supported in `project.json` e.g. when a specific file type is loaded, when a command is fired, etc
**[API vscode namespace](/docs/extensionAPI/vscode-api.md)**|Review the full vscode namespace API reference.
**[API debugging](/docs/extensionAPI/api-debugging.md)**|Learn the details about integrating debuggers into VS Code.

## Common Questions

Nothing yet


