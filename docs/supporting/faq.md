---
TOCTitle: FAQ
ContentId: E02F97FD-842B-4D27-B461-37DD18B2582E
PageTitle: Visual Studio Code Frequently Asked Questions
DateApproved: 5/3/2018
MetaDescription: Our docs contain a Common Questions section. Here are items that don't fit in the other topics.
---
# Visual Studio Code FAQ

Our docs contain a **Common Questions** section as needed for specific topics. We've captured items here that don't fit in the other topics.

If you don't see an answer to your question here, check our previously [reported issues](https://github.com/microsoft/vscode/issues) and our [Updates](/updates) notes.

## What is the difference between VS Code and VS Community?

Visual Studio Code is a streamlined code editor with support for development operations like debugging, task running and version control. It aims to provide just the tools a developer needs for a quick code-build-debug cycle and leaves more complex workflows to fuller featured IDEs. For more details about the goals of VS Code, see [Why VS Code](/docs/editor/whyvscode.md).

## Which OS's are supported?

VS Code runs on macOS, Linux, and Windows. See [Requirements](requirements) for the supported versions. You can find more platform specific details under [SETUP](/docs/setup/setup-overview.md).

## Is VS Code free?

Yes, VS Code is [free for private or commercial use](https://code.visualstudio.com/license).

## Report an issue with a VS Code extension

For bugs, feature requests or to contact an extension author, you should use the links available in the Visual Studio Code [Marketplace](https://marketplace.visualstudio.com/vscode).  However, if there is an issue where an extension does not follow our code of conduct, for example it includes profanity, pornography or presents a risk to the user, then we have an email alias where you can [contact us to report the issue](mailto:VSMarketplace@microsoft.com). Once the mail is received, our Marketplace team will look into an appropriate course of action, up to and including unpublishing the extension.

## How do I find the VS Code version?

You can find the VS Code version information in the About dialog box.

On macOS, go to **Code** > **About Visual Studio Code**.

On Windows and Linux, go to **Help** > **About**.

The VS Code version is the first **Version** number listed and has the version format 'major.minor.release', for example '1.6.0'.

## How do I opt out of VS Code auto-updates?

By default, VS Code is set up to auto-update for macOS and Windows users when we release new updates. If you do not want to get automatic updates, you can set the `update.channel` setting from `default` to `none`.

To modify the update channel, go to **File** > **Preferences** > **Settings** (macOS: **Code** > **Preferences** > **Settings**) and add the `update.channel` setting with the value `"none"`.

```json
    "update.channel": "none"
```

You can install a previous release of VS Code by uninstalling your current version and then installing the download provided at the top of a specific release page under [Updates](/updates).

>**Note:** On Linux: If the VS Code repository was installed correctly then your system package manager should handle auto-updating in the same way as other packages on the system. See [Installing VS Code on Linux](/docs/setup/linux.md#updates).

## Licensing

### Location

You can find the VS Code licenses, third party notices and [Chromium](https://www.chromium.org) Open Source credit list under your VS Code installation location `resources\app` folder. VS Code's `ThirdPartyNotices.txt`, Chromium's `Credits_*.html`, and VS Code's English language `LICENSE.txt` are available under `resources\app`. Localized versions of `LICENSE.txt` by Language ID are under `resources\app\licenses`.

### Why does Visual Studio Code have a different license than the vscode GitHub repository?

To learn why Visual Studio Code, the product, has a different license than vscode, the open source [GitHub repository](https://github.com/microsoft/vscode), see [issue #60](https://github.com/Microsoft/vscode/issues/60#issuecomment-161792005) for a detailed explanation.

## Can I run prerelease versions of VS Code?

Want an early peek at new VS Code features?  You can try prerelease versions of VS Code by installing the "Insiders" build.  The Insiders build installs side by side to your stable VS Code install and has isolated settings, configurations and extensions.  The Insiders build is updated nightly so you'll get the latest bug fixes and feature updates from the day before.

To install the Insiders build, go to the Insiders [download page](/insiders).

## VS Code gets unresponsive right after opening a folder

When you open a folder, VS Code will search for typical project files to offer you additional tooling (e.g. the solution picker in the status bar to open a solution). If you open a folder with lots of files, the search can take a large amount of time and CPU resources during which VS Code might be slow to respond. We plan to improve this in the future but for now you can exclude folders from the explorer via settings and they will not be searched for project files:

```json
    "files.exclude": {
        "**/largeFolder": true
    }
```

## VS Code is blank?

The Electron shell used by Visual Studio Code has trouble with some GPU (graphics processing unit) hardware acceleration. If VS Code is displaying a blank (empty) main window, you can try disabling GPU acceleration when launching VS Code by adding the Electron `--disable-gpu` command line switch.

```bash
code --disable-gpu
```

## Installation appears to be corrupt

VS Code does a background check to detect if the installation has been changed on disk. This is done since some extensions directly modify (patch) the VS Code product in such a way that is semi-permanent (until the next update) and this can cause hard to reproduce issues. We are not trying to block VS Code patching, but we want to raise awareness that patching VS Code means you are running an unsupported version. Reinstalling VS Code will replace the modified files and silence the warning.

## GDPR and VS Code

As the General Data Protection Regulation comes into effect, we want to take this opportunity to reiterate that we take privacy very seriously.  That's both for Microsoft as a company and specifically within the VS Code team.

VS Code does collect telemetry data which we use to help understand how to improve the product.  For example, it helps debug issues such as slow start-up times and prioritize features.  While we appreciate this insight, we also know that not everyone wants to send this data, so we continue to offer the ability to disable telemetry as outlined [here](https://code.visualstudio.com/docs/supporting/faq#_how-to-disable-telemetry-reporting).

In preparation for GDPR, we have made several updates to VS Code, these include:

* Making it easier to opt out of telemetry collection by placing a notification in product for all existing and new users.
* Reviewing and classifying the telemetry that we send (which is documented in [our OSS codebase](https://github.com/Microsoft/vscode/pull/34997)).
* Ensuring that we have valid data retention policies in place for any data we do collect, for example crash dumps.

In short, we have worked hard to do the right thing, for all users, as these practices apply to all geographies, not just Europe.

One question we expect people to ask is to see the data we collect. However, we don't have a reliable way to do this as VS Code does not have is a 'sign-in' experience that would uniquely identify a user.  We do send information which helps us approximate a single user for diagnostic purposes (this is based on a hash of the network adaptor NIC) but this is not guaranteed to be unique. For example, VM's often rotate NIC ID's or allocate from a pool.  This technique is sufficient to help us when working through problems, but it is not reliable enough for us to 'provide your data'.

In conclusion, we expect our approach to evolve as we learn more about GDPR and the expectations of our users.  We greatly appreciate the data users do sent to us, as it is very valuable, VS Code is a better product for everyone because it.  And again, if you are worried about privacy, we offer the ability to disable sending telemetry as described [here](https://code.visualstudio.com/docs/supporting/faq#_how-to-disable-telemetry-reporting).

You can find more information about how the Visual Studio family approaches GDPR at [Visual Studio Family Data Subject Requests for the GDPR](https://docs.microsoft.com/en-us/microsoft-365/compliance/gdpr-dsr-visual-studio-family).

## How to disable telemetry reporting

VS Code collects usage data and sends it to Microsoft to help improve our products and services. Read our [privacy statement](https://go.microsoft.com/fwlink/?LinkID=528096&clcid=0x409) to learn more.

If you don't wish to send usage data to Microsoft, you can set the `telemetry.enableTelemetry` setting to `false`.

From **File** > **Preferences** > **Settings** (macOS: **Code** > **Preferences** > **Settings**), add the following option to disable telemetry reporting, this will silence all telemetry events from the VS Code shell.

```json
    "telemetry.enableTelemetry": false
```

> **Important Notice**: This option requires a restart of VS Code to take effect. VS Code gives you the option to install Microsoft and third party extensions. These extensions may be collecting their own usage data and are not controlled by the `telemetry.enableTelemetry` setting. Consult the specific extension's documentation to learn about its telemetry reporting.

## How to disable crash reporting

VS Code collects data about any crashes that occur and sends it to Microsoft to help improve our products and services. Read our [privacy statement](https://go.microsoft.com/fwlink/?LinkID=528096&clcid=0x409) to learn more.

If you don't wish to send crash data to Microsoft, you can set the `telemetry.enableCrashReporter` setting to `false`.

```json
    "telemetry.enableCrashReporter": false
```

> **Important Notice**: This option requires a restart of VS Code to take effect.

## Technical Support

You can ask questions and search for answers on [Stack Overflow](https://stackoverflow.com/questions/tagged/vscode) and enter issues and feature requests directly in our [GitHub repository](https://github.com/Microsoft/vscode/blob/master/CONTRIBUTING.md).

If you'd like to contact a professional support engineer, you can open a ticket with the [Microsoft assisted support team](https://support.microsoft.com/assistedsupportproducts).
