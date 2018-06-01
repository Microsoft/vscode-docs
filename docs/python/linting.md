---
Order: 3
Area: python
TOCTitle: Linting
ContentId: 0ccb0e35-c4b2-4001-91bf-79ff1618f601
PageTitle: Linting Python in Visual Studio Code
DateApproved: 05/21/2018
MetaDescription: Linting Python in Visual Studio Code
MetaSocialImage: images/tutorial/social.png
---
# Linting Python in VS Code

Linting highlights syntactical and stylistic errors in your Python source code. By default, linting for Python is enabled in Visual Studio Code using Pylint. If PyLint is not already installed in your selected Python environment, VS Code prompts you to install the necessary packages. (You can also manually run `pip install pylint` at a command prompt for that same environment.)

Linting runs automatically when you save a file, and you can run manually using the **Python: Run Linting** command. Issues are shown in the **Problems** panel and as underlines in the code editor. Hovering over an underlined issue displays the details:

![Linting messages in the editor and the Problems panel](images/linting/lint-messages.png)

To enable other linters, use the **Python: Select Linter** command, which again prompts you to install required packages in your selected environment for the linter in question.

The remainder of this article described settings for linting in general as well as specific linters. You add any of the settings to your user `settings.json` file (opened with the **File** > **Preferences** > **Settings** menu command). Refer to [User and workspace settings](/docs/getstarted/settings.md) to find our more about working with settings in VS Code generally.

## General linting settings

To change the linting behavior across all enabled linters, modify the following settings:

| Feature | Setting<br/>(python.linting.) | Default value |
| --- | --- | --- |
| Linting in general | enabled | `true` |
| Linting on file save | lintOnSave | `true` |
| Maximum number of linting messages | maxNumberOfProblems | `100` |
| Exclude file and folder patterns | ignorePatterns | `[".vscode/*.py", "**/site-packages/**/*.py"]`  |

You can easily change `python.linting.enabled` by using the **Python: Enable Linting** command.

When enabling `lintOnSave`, you might also want to enable the generic `files.autoSave` option (see [Save / Auto Save](/docs/editor/codebasics.md#save-auto-save)). The combination provides frequent linting feedback in your code as you type.

## Specific linters

The following table provides a summary of available Python linters and their basic settings. Only Pylint is enabled by default.

| Linter | Package name for `pip install` command | Default state | True/false enable setting<br/>(python.linting.) | Arguments setting<br/>(python.linting.) | Custom path setting<br/>(python.linting.) |
| --- | --- | --- | --- | --- | --- |
| [Pylint](#pylint) (default) | [pylint](https://pypi.org/project/pylint/) | Enabled | pylintEnabled | pylintArgs | pylintPath |
| [Flake8](#flake8) | [flake8](https://pypi.org/project/flake8/) | Disabled | flake8Enabled | flake8Args | flake8Path |
| [mypy](#mypy) | [mypy](https://pypi.org/project/mypy/) | Disabled | mypyEnabled | mypyArgs | mypyPath |
| pydocstyle | [pydocstyle](https://pypi.org/project/pydocstyle/) | Disabled | pydocstyleEnabled | pydocstyleArgs | pydocstylePath |
| [Pep8 (pycodestyle)](#pep8-pycodestyle) | [pep8](https://pypi.org/project/pep8/) | Disabled | pep8Enabled | pep8Args | pep8Path |
| prospector | [prospector](https://pypi.org/project/prospector/) | Disabled | prospectorEnabled | prospectorArgs | prospectorPath |
| pylama | [pylama](https://pypi.org/project/pylama/) | Disabled | pylamaEnabled | pylamaArgs | pylamaPath |

To select a different linter, use the **Python: Select Linter** command. You can also edit your settings manually to enable multiple linters. Note, however, that using the **Select Linter** command overwrites those edits.

Custom arguments can be specified in the appropriate arguments setting for each linter, with each argument given as a separate item in the array.

A custom path is generally unnecessary as the Python extension resolves the path to the linter based on the Python interpreter being used (see [Environments](/docs/python/environments.md)). To use a different version of a linter, specify its path in the appropriate custom path setting. For example, if your selected interpreter is a virtual environment but you want to use a linter that's installed in a global environment, then set the appropriate path setting to point to the global environment's linter.

The sections that follow provide additional details for those individual linters linked in the table. In general, custom rules must be specified in a separate file as required by the linter you're using.

## Pylint

Pylint messages fall into the categories in the following table with the indicated mapping to VS Code categories. You can change the setting to change the mapping.

| Pylint category | Description | VS Code category mapping | Applicable setting<br/>(python.linting.) |
| --- | --- | --- | --- |
| Convention (C) | Programming standard violation | Information (green underline) | pylintCategorySeverity.convention |
| Refactor (R) | Bad code smell | Hint (light bulbs) | pylintCategorySeverity.refactor |
| Warning (W) | pylintCategorySeverity.warning | Warning | Python-specific problems |
| Error (E) | pylintCategorySeverity.error | Error (red underline) | Likely code bugs |
| Fatal (F) | pylintCategorySeverity.fatal | Error | An error prevented further Pylint processing |

### Default Pylint rules

Python in Visual Studio code is configured by default to use a set of linting rules that are friendly to the largest number of  Python developers:

- Enable all Error (E) and Fatal (F) messages.
- Disable all Convention (C) and Refactor (R) messages.
- Disable all Warning (W) messages except the following:
  - unreachable (W0101): Unreachable code
  - duplicate-key (W0109): Duplicate key %r in dictionary
  - unnecessary-semicolon (W0301): Unnecessary semicolon
  - global-variable-not-assigned (W0602): Using global for %r but no assignment is done
  - unused-variable (W0612): Unused variable %r
  - binary-op-exception (W0711): Exception to catch is the result of a binary "%s" operation
  - bad-format-string (W1302): Invalid format string
  - anomalous-backslash-in-string (W1401): Anomalous backslash in string
  - bad-open-mode (W1501): "%s" is not a valid mode for open

These rules are applied through the following default arguments passed to Pylint:

```
--disable=all --enable=F,E,unreachable,duplicate-key,unnecessary-semicolon,global-variable-not-assigned,unused-variable,binary-op-exception,bad-format-string,anomalous-backslash-in-string,bad-open-mode
```

These arguments are passed whenever the `python.linting.pylintUseMinimalCheckers` is set to `true` (the default). If you specify a value in `pylintArgs` or use a Pylint configuration file (see the next section), then `pylintUseMinimalCheckers` is implicitly set to `false`.

For the complete list of Pylint messages, see [readable-pylint-messages](https://github.com/janjur/readable-pylint-messages/blob/master/README.md) (GitHub).

### Command-line arguments and configuration files

See [Pylint command line arguments](https://pylint.readthedocs.io/en/latest/user_guide/run.html#command-line-options) for general switches. Command line arguments can be used to load Pylint plugins, such as that for Django:

```json
"python.linting.pylintArgs": ["--load-plugins", "pylint_django"]
```

Options can also be specified in a `pylintrc` or `.pylintrc` options file in the workspace folder, as described on [Pylint command line arguments](https://pylint.readthedocs.io/en/latest/user_guide/run.html#command-line-options).

To control which Pylint messages are shown, add the following contents to an options file:

```ini
[MESSAGES CONTROL]

# Enable the message, report, category or checker with the given id(s). You can
# either give multiple identifier separated by comma (,) or put this option
# multiple time.
#enable=

# Disable the message, report, category or checker with the given id(s). You
# can either give multiple identifier separated by comma (,) or put this option
# multiple time (only on the command line, not in the configuration file where
# it should appear only once).
#disable=
```

You can easily generate an options file using Pylint itself:

```
pylint --generate-rcfile > .pylintrc
```

The generated file contains sections for all the Pylint options, along with documentation in the comments.

## Pep8 (pycodestyle)

### Command-line arguments and configuration files

See [pycodestyle example usage and output](https://pep8.readthedocs.io/en/latest/intro.html#example-usage-and-output) for general switches. For example, to ignore error E303 (too many blank lines), add the following line to your `settings.json` file:

```json
"python.linting.pep8Args": ["--ignore=E303"]
```

Pep8 options are read from the `[pep8]` section of a `tox.ini` or `setup.cfg` file located in any parent folder of the path(s) being processed. For details, see [pycodestyle configuration](https://pep8.readthedocs.io/en/latest/intro.html#configuration).

### Message category mapping

The Python extension maps pep8 message categories to VS Code categories through the following settings. If desired, change the setting to change the mapping.

| Pep8 category | Applicable setting<br/>(python.linting.) | VS Code category mapping |
| --- | --- | --- |
| W | pep8CategorySeverity.W | Warning |
| E | pep8CategorySeverity.E | Error |

## Flake8

### Command-line arguments and configuration files

See [Invoking Flake8](http://flake8.pycqa.org/en/latest/user/invocation.html) for general switches. For example, to ignore error E303 (too many blank lines), use the following setting:

```json
"python.linting.flake8Args": ["--ignore=E303"]
```

By default, Flake8 ignores E121, E123, E126, E226, E24, and E704.

Flake8 user options are read from the `.flake8` (Windows) or `~/.config/flake8` (macOS/Linux) file.

At the project level, options are read from the `[flake8]` section of a `tox.ini` or `setup.cfg` file. Only the first file is considered.

For details, see [Flake8 configuration](http://flake8.pycqa.org/en/latest/user/configuration.html).

### Message category mapping

The Python extension maps flake8 message categories to VS Code categories through the following settings. If desired, change the setting to change the mapping.

| Flake8 category | Applicable setting<br/>(python.liting.) | VS Code category mapping |
| --- | --- | --- |
| F | flake8CategorySeverity.F | Error |
| E | flake8CategorySeverity.E | Error |
| W | flake8CategorySeverity.W | Warning |

## mypy

### Message category mapping

The Python extension maps mypy message categories to VS Code categories through the following settings. If desired, change the setting to change the mapping.

| mypy category | Applicable setting<br/>(python.linting.) | VS Code category mapping |
| --- | --- | --- |
| error | mypyCategorySeverity.error | Error |
| note | mypyCategorySeverity.note | Information |

## Troubleshooting linting

| Error message | Cause | Solution |
| --- | --- | --- |
| ... unable to import \<module_name\> | The Python extension is using the wrong version of Pylint. | Ensure that the `pythonPath` setting points to a valid Python installation where Pylint is installed. Alternately, set the `python.linting.pylintPath` to an appropriate version of Pylint for the Python interpreter being used. |
| Linting with \<linter\> failed ... | The path to the Python interpreter is incorrect. | Check the `pythonPath` setting (see [Environments](/docs/python/environments.md)). |
| | The linter has not been installed in the current Python environment. | Open a command window, navigate to the location of the Python interpreter in the `pythonPath` setting, and run `pip install` for the linter. |
| | The path to the linter is incorrect. | Ensure that the appropriate `python.linting.<linter>Path` setting for the linter is correct. |
| | Custom arguments are defined incorrectly. | Check the appropriate `python.linting.<linter>Args` settings, and that the value of the setting is an array of separate argument items. For example, `"python.linting.pylintPath": "pylint --load-plugins pylint_django"` is incorrect. The correct syntax is `"python.linting.pylintArgs": ["--load-plugins", "pylint_django"]`. |

## Next steps

- [Debugging](/docs/python/debugging.md) - Learn to debug Python both locally and remotely.
- [Unit testing](/docs/python/unit-testing.md) - Configure unit test environments and discover, run, and debug tests.
- [Basic Editing](/docs/editor/codebasics.md) - Learn about the powerful VS Code editor.
- [Code Navigation](/docs/editor/editingevolved.md) - Move quickly through your source code.
