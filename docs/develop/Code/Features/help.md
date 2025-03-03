---
sidebarPosition: 10
---

# Help bubbles

_Help bubbles are available through Taxonworks's orange help button on the right side of the screen._

Help bubbles are available on certain UI features, which guide users on certain features. This includes utilization of interface elements, unique vocabulary, and other elements that would otherwise not be immediately clear to the user.

## Adding help bubbles
### Method 1: Data-help property
* For the desired element, add the `data-help` property and set it equal to your help string
```html
<div data-help="Help string"></div>
```
### Method 2: HtmLerb Data help
* For the desired element, add the `data` property that conforms to the following syntax:
```htmLerb
   <%= data: {help: 'Help string'} %>
```

### Method 3: Separate help file
Help bubbles require certain framework to be included in a page. First, the `HelpSystem` library must be imported into the `main.js` file of the desired project.
```js
import HelpSystem from '@/plugins/help/help'
import en from './help/en'
```
In the `initApp` function, you should include the following code. This is to tell the program to use the `HelpSystem` library.
```js
app.use(HelpSystem, {
    languages: {
        en
    }
})
```
* Make a folder titled **Help**. Inside, make an `en.js` (where `en` is the language code) file where you will contain your help.
* For the element you want to add the help onto, add `v-help.yourcontainer.yourname` as a property to the desired element(s).
* Inside of the `en.js` file, include the following. These will add help which links to the properties made in the previous step.
```js
export default {
    yourcontainer: {
      yourname: 'Help string',
    }
  }
```
