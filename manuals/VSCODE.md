# Visual Studio Code

The purpose of this guide is to provide the optimal configuration for a development environment in TaxonWorks based on VueJS and Ruby on Rails

## Installation

### Download

VSCode is available for Mac / Linux / Windows: https://code.visualstudio.com/Download 

## Plugins

### Installation

To the left of the VSCode window there is a bar that contains 5 icons (Files, Search, Git, Debugger, Extensions). Click the last one and search for the following plugins

**Vetur - Pine Wu**

It includes compatibility with files of vuejs and the necessary tools to simplify the workflow:

Syntax-highlighting
Auto Completion
Formatting

More information about the features could be found at the Vetur site:
https://vuejs.github.io/vetur/

**Path Intellisense - Christian Kohler**
Very useful to find and autocomplete the path of the files to be included in the code

**ESLint - Dirk Baeumer**

A plugin to validate javascript code. We currently use the configuration suggested by VueJS for better development syntax

**Ruby - Peng Lv**

Ruby Language and Debugging Support for Visual Studio Code

## Configuration

It is necessary to add some parameters in the user configuration file to get ESLint work with Vue, it is necessary to set certain parameters in the user's configuration. For this we must follow certain steps:

1) In the main bar, click on Code -> Preferences -> Settings.

2) In the right panel we will add the following code:

```
{
    "eslint.options": {
        "extensions": [".js", ".vue"],
    },
    "eslint.validate": [
        "javascript",
        {"language": "vue", "autoFix": true},
        {"language": "javascript", "autoFix": true},
        {"language": "html", "autoFix": true}
    ]
}
```

If you already have some configurations within that window, we recommend adding only the ESLint properties to avoid replace any other configuration

In TaxonWorks we develop using identation of 2 space, to avoid any problem with this in your code, we recommend add the following line inside the configuration file:
```
"editor.tabSize": 2
```