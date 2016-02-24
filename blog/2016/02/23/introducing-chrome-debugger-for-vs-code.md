---
Order: 2
TOCTitle: Introducing Chrome Debugging for VS Code
PageTitle: Introducing Chrome Debugging for VS Code
MetaDescription: chrome debugger
---

# Introducing Chrome Debugging for VS Code

Since the first release of Visual Studio Code one of our focuses has been to simplify the daily workflow for developers by enabling them to debug their code directly from the editor. We started out with in both .NET and Node.js debugging, and today we are taking the next step by introducing our Chrome Debugger for Visual Studio Code.

Our Chrome Debugger allows front-end developers to debug their client-side JavaScript code running inside Google Chrome directly from Visual Studio Code.

<br />

![Demo](2016_02_23_chrome-debugger-demo.gif)

## How does it work?
Our debugger works by connecting to Chrome over it’s [Chrome Debugger protocol](https://developer.chrome.com/devtools/docs/debugger-protocol), where we map files loaded in the browser to the files open in Visual Studio Code. This means developers now can set a breakpoint directly from their source code, setup variables to watch and see the full call stack when debugging — All without leaving the editor.

In the above example we are showing an [AngularJS](http://github.com/auchenberg/timey) app bundled and minified via Browserify being debugged from Visual Studio Code. This works because our debugger understands [JavaScript Source Maps](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/), which we’ll use to enable developers to debug straight from their original source, and not the transpiled result that the browser sees. Supporting source maps also enables debugging of [TypeScript](http://www.typescriptlang.org/) straight from Visual Studio Code.

For now, Chrome needs to be started with remote debugging enabled, and only supports one concurrent connection. This means if you open up DevTools inside Chrome, the connection to Visual Studio Code will get terminated by Chrome. This is slightly annoying, and we hope this [issue](https://code.google.com/p/chromium/issues/detail?id=129539) will be fixed sometime soon.

## To get started
To get started to you simply open the command palette inside Visual Studio Code and type `ext install chrome` to install the debugger, followed by creating a launch-configuration file which we have explained in detail [right here](https://github.com/Microsoft/vscode-chrome-debug).

You can either setup Visual Studio Code to connect to an already running Chrome instance or simply start a new one with remote debugging enabled, but read more about that in our [README](https://github.com/Microsoft/vscode-chrome-debug).

## Supported features
In this first release we support the following features:
- Setting breakpoints, including in source files when source maps are enabled
- TypeScript, via source maps
- Stepping, including with the buttons on the Chrome page
- Locals scope variables via VS Code Locals pane
- Debugging eval scripts, script tags, and scripts that are added dynamically
- Watches via VSCode Watch panel.
- The debug console
- Most console APIs

## Going forward
We believe there’s much to be done for front-end developers, as building for the web in the recent years has become incredibly complex. With our Chrome debugger we are taking the first step towards a simpler web development workflow, where tooling from different vendors are able to work together, and building for the web feels more integrated.

We’ve released this extension on [GitHub](https://github.com/Microsoft/vscode-chrome-debug) as an MIT licensed open source project. It’s a work in progress, so see our issues page for known bugs – for example we have a few issues around supporting all flavors of generated source maps.

We really want to your feedback and help to build an even better debugging experience, so if you have any issues or ideas to improvements feel free to reach out to us on [Twitter](https://twitter.com/EdgeDevTools) or [GitHub](https://github.com/Microsoft/vscode-chrome-debug/).

–

[Andy Sterland](https://twitter.com/AndySterland), Senior Program Manager, JavaScript Diagnostics <br/>
[Kenneth Auchenberg](https://twitter.com/auchenberg), Program Manager, JavaScript Diagnostics

