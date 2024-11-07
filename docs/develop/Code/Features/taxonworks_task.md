---
sidebarPosition: 100
---

# TaxonWorks task

You can stub all the basic code for a new task using a generator.  The result of this call is a new blank card in Tasks that leads you to a new blank interface. [See the code base for more](https://github.com/SpeciesFileGroup/taxonworks/blob/development/lib/generators/taxon_works/task/USAGE.md).

```ruby
rails generate taxon_works:task ...
```

To create a Vue.js-based stub use the `--vue` flag.  When using this parameter do not include method params:

```ruby
rails generate taxon_works:task print_labels labels/ --vue
```

You can use `-p` to "practice" running the generator (no files are written/changed).

As in the model-generating case, if you're developing using Docker then you'll be running `bin/rails generate` from a Docker app shell.
 * If you're on linux or mac then any new files created by the command will be owned by root in your local taxonworks folder. See [Scaffolding a new model](#scaffolding-a-new-model) for a command to fix that.

Non-Vue.js-based tasks use the standard Rails routes/controller/views directory structure.

Vue.js app files, on the other hand, are located in `app/javascript/vue/tasks/` - for example the generator command above will create a file `app/javascript/vue/tasks/labels/print_labels/app.vue` where you can start writing your Vue app.

Another difference: while pure-Rails tasks will typically get access to controller data via html.erb files, Vue-based tasks will instead retrieve that data via ajax calls to controller actions which will return json data from json.jbuilder view files. Those data-fetching ajax routines are referred to as endpoints, e.g. Otu endpoints for retrieving Otu-related data can be found in `app/javascript/vue/routes/endpoints/Otu.js`. If you're writing a task related to a new model, one of your first tasks will likely be creating new endpoints for your model so that you can retrieve data for your task.

* If your task uses an id query parameter to load content related to that id, the TaxonWorks convention is to name the query parameter `<model>_id`. Thus the Browse Otus task, for example, uses a query parameter of the form `?otu_id=1` to browse to the Otu with id 1.




