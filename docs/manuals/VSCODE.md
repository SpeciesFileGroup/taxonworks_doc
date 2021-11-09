# Visual Studio Code

The purpose of this guide is to provide the optimal configuration for a development environment in TaxonWorks based on VueJS and Ruby on Rails

## Installation

### Download

VSCode is available for Mac / Linux / Windows: https://code.visualstudio.com/Download 

## Plugins

### Installation

On the left side of the main window there is a bar that contains 5 icons (Files, Search, Git, Debugger, Extensions). Click the last one and search for the following plugins

**Vue VS Code Extension Pack**

A collection of extensions for working with Vue Applications in VS Code
https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-extensionpack


**ESLint - Dirk Baeumer**

> A plugin to validate javascript code. We currently use the configuration suggested by VueJS for better development syntax

**Ruby - Peng Lv**

> Ruby Language and Debugging Support for Visual Studio Code


## Configuration

In TaxonWorks we develop using identation of 2 space. To avoid any problem with this in your code, we recommend add the following line inside the user configuration file to make it as the default indentation:
```
"editor.tabSize": 2
```