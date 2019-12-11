# HOW-TO

_A working list of commonly repeated development patterns in TaxonWorks._

## Creating a new task

You can stub all the basic code for a new task using a generator.  The result of this call is a new blank card in Tasks that leads you to a new blank interface. [See the code base for more](https://github.com/SpeciesFileGroup/taxonworks/blob/development/lib/generators/taxonworks/task/USAGE.md)

```ruby
rails scaffold taxonworks:task ...
```

To create Vue.js based stub use the `--vue` flag.  When using this paramater do not include method params:

```ruby
rails generate taxonworks:task print_labels labels/ --vue
```

You can use `-p` to "practice" running the tasks (no files are written/changed).

## Creating a new batch loader

There is a batch-load middle layer that batch loaders can take advantage of.  This generator stubs in all the basic pieces that can then be further refined.  [See the code base for more](https://github.com/SpeciesFileGroup/taxonworks/blob/development/lib/generators/taxonworks/batch_load/USAGE.md)

```ruby
rails scaffold taxonworks:batch_load ...
```

## Adding inline-help

### For javascript (Vue, etc.) related interfaces

#### For vanilla JS:

```
element.setAttribute("data-help", "This will be the line help line displayed in the tip box");
```

#### For VueJS:
VueJS works with a virtual DOM, which makes impossible to write directly on the DOM an persist that information. In this case its gonna be necesarry import the plugin to make it work

```
import HelpSystem from 'plugins/help/help' 
```

To get the information needed to display the help on the interface, would will be needed to create a file with a js object structure that contains that information, an example will be provided on the next steps.

```
//
// en.js file
//

export default {
  section: {
    type: {
      container: "Assign the type of a genus or family group name (ICZN). For species names there is a link that allows a specimen to be created."
    },
  }
}
```

After that file is created, we need to import it

```
import en from './lang/help/en'
```

After that, it needs to be included on the vue instance. The imported lenguage file will be assigned there
The plugin accepts a default language configuration. In the case of this option are not provided, the default will be english.

```
  Vue.use(HelpSystem, { 
    languages: {
      en: en,
      // default: en
    }
  })
```

To start to including the help tips on the interface will be needed to add the `v-help` directive: 
The following properties after the directive its the property inside the help file. Its important to make an organized structure of the language file to recognize more easily each help tip.

Following the example for the english file configuration, this should be the way to add it

```
v-help.section.type
```

```
<div v-help.section.type></div>
```

### For Rails native interfaces (.erb)

```
content_tag(:span, nil, data: {help: 'This is the help line'})
```

### For HTML 

```
<h3 data-help="This data lights up the orange help icon!" > My header </h3> 
```

## Work with dates

Use the format `yyyy-mm-dd`.

## Run asynchronous code / Active Jobs / Delayed Jobs
Running `rails s` is not enough to make queued jobs to run since they way it is setup they don't run in-process.
To make them run you need to open up an extra terminal window and run `rails jobs:work`. You may notice that the CPU usage may constantly be reaching 100% for short bursts continuously (and also speed up your CPU fan). If this is an inconvenience to you, or you even wish to control when it is a good time to start working off jobs you may use `rails jobs:workoff`. This command will run all pending jobs and then exit.

## Running docker specs
To run the same tests we run at the deliver stage in TravisCI you may run `.travis/docker-test.sh`. That will set up images and run the tests inside a docker-compose environment.
