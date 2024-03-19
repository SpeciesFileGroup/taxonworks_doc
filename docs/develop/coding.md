---
sidebarPosition: 50
---

# Coding

_You **can** code (TaxonWorks). Here's where to learn how._

## Some common development patterns
_A list of commonly repeated development patterns in TaxonWorks._

Tip: If you're using the Docker development environment you'll want to replace calls to `rails` below with `bin/rails`.

### Enter the app shell

* Open a terminal
```
cd /path/to/taxonworks/
```
If using [Docker environment](https://github.com/SpeciesFileGroup/install_taxonworks/blob/master/development/docker/README.md) then continue with:
```
docker-compose exec app bash
```
That puts you in a bash shell inside the linux Docker image.

### Enter the Rails console
* Enter the app shell (see above)
```
rails c
exit
```
From here you can play around with Rails models and query the state of the application. See below for an example of creating a new user by running `create!` on the `User` model.

Tip: Take care when performing database operations from the console, you have direct access to your app's data there. If you're just interested in playing around or trying something out to see how it will work, you can use `rails console --sandbox` instead - any changes you make from sandbox mode will be rolled back when you exit.

### Create a TaxonWorks user from the console
A fresh install of TaxonWorks doesn't include any users. This section covers creating a single user, or read on below for creating a project, users, and some seed data all at once.
* Enter the Rails console (see above)
```
User.create!(name: 'you', password: 'password', password_confirmation: 'password', self_created: true, is_administrator: true, email: 'user@example.com')
quit
```

### Seed a project, users, and some data from the command line
* Enter the app shell (see above)
```
bundle exec rails db:seed
```
Alternatively if you're using Docker you can execute the command above straight from the TaxonWorks directory using `docker-compose`:
```
docker-compose exec app bundle exec rails db:seed
```
This creates an admin and a non-admin user, which are admin@example.com and user@example.com respectively, both with password `taxonworks`.

## Run asynchronous code / active jobs / delayed jobs
Running `rails s` is not enough to make queued jobs run since the way it is setup they don't run in-process. Certain downloads, for example, exist as queued jobs and won't be available until those jobs are run.

To make them run open up a new app shell and run `rails jobs:work`; this will run any existing jobs and then sit and watch for new jobs to run as they come in. You may notice that the CPU usage may constantly be reaching 100% for short bursts (and also speed up your CPU fan). If this is an inconvenience to you, or you wish to control when it is a good time to start working off jobs you may instead use `rails jobs:workoff`. This command will run all existing pending jobs and then exit.

## Scaffolding a new model

_This is not a comprehensive list for adding a new model, but rather some point by point reminders._

Adding a data model to TaxonWorks largely follows [Rails conventions for scaffolding](https://guides.rubyonrails.org/command_line.html#bin-rails-generate).  We won't describe how to add fields, etc., but rather point out some specifics to TaxonWorks that happen during the process.

You can exclude some files while generating the model:

`rails generate scaffold Organization --no-javascript --no-view-specs --no-request-specs --no-fixture --no-stylesheets --no-assets --no-scaffold-stylesheet -p`

Tip: Notice the `-p` for "practice" (or "preview"), this lets you preview what will be done without writing any files.

If you're doing TaxonWorks development in Docker then you'll run the above command from within the [app shell](#enter_the_app_shell); as a result, if you're on linux or mac, the folders and files created by the generate command will be owned by root in your local TaxonWorks folder. To fix that, you can run something like
```
git ls-files --others --directory --exclude-standard -z -o | xargs -0 sudo chown [user]:[user]   # Please check the ls-files output before running sudo chown!
git ls-files -z -o --exclude-standard | xargs -0 sudo chown [user]:[user]   # Please check the ls-files output before running sudo chown!
```

### Migration tips

_This is not comprehensive, see existing migrations for patterns._

* Add `null: false` to timestamps
* Add housekeeping:
```
t.integer :created_by_id, null: false, index: true
t.integer :updated_by_id, null: false, index: true
```
* If the model is specific to projects:
```
t.references :project, index: true, foreign_key: true
```

### Routes

Add the data_routes concern, and move the scaffolded resources line into alphabetic order in the data routes file.

```
  resources :organizations do
    concerns [:data_routes]
  end
```

### Spec factory

See the factories [README.md](https://github.com/SpeciesFileGroup/taxonworks/blob/development/spec/factories/README.md).

### Model

* Document the attributes in the model (e.g. `app/models/organization.rb`)
* Add pertinent concerns: see `otu.rb` for project specific examples, and `source.rb` for community shared data; at minimum you'll need `Shared::IsData`
* Tweak the model test to add at least a couple unit tests (`spec/models`)
* If the model is project specific register it in `app/models/project.rb` `MANIFEST`
* Register the model in `config/interface/hub/data.yml` (see comments therein)
* If your model uses `has_closure_tree` add the hierarchy table for project export in `lib/export/project_data.rb`

_At this point restarting the server should already show you a clickable card on `Data`._

### Controller
If you're new to Rails, keep in mind that controller actions render views, which rely on helpers, so as you work through this section be aware that you may need to also jump to sections below to get everything working.
* !! Add the pertinent concerns to the controller (shared vs. project)
* Update `index` to load recent records
* Make sure to permit your attributes
* Add a `list` action

#### Controller specs

Rails no longer generates controller specs for you, and they're of limited usefulness, so we currently don't use them with new models.

### Views

* Delete `index.html.erb`
* Follow Rails conventions for `_form.html.erb`. See any other `_form.html.erb` for TaxonWorks conventions and markup. Replace bits with partials as needed (e.g. `/shared/errors`)
* Ensure you have JSON responses for show and index, see `_attributes.json.jbuilder` pattern in most models
* Update `show.html.erb` to use a shared view; the shared view is customizable, see otus for example and the view itself for available customizations
* Add `_attributes.html.erb` so that the shared view can render attributes
* Add a `list.html.erb`

#### View specs

We do not use view specs, remove if you missed the flag.

### Queries

* You may want/need to add a filter or autocomplete query for the model.  See [README.md](https://github.com/SpeciesFileGroup/taxonworks/blob/development/lib/queries/README.md) and below for more on autocomplete.

#### Autocomplete
To support autocomplete for your model:
* Add an `autocomplete` action to your controller
* Add `autocomplete.json.jbuilder`
* Add more helpers to support formatting of autocomplete results, see the [Helpers](#helpers) README
* Add a new `lib/queries/<model>/autocomplete.rb` file, see the Queries README above - this is where your autocomplete queries are defined.

You'll probably want to support a search box for your shared show view. If so, first add the autocomplete support above and then:
* Add `<model>_search_form` to your helpers to tell the show view to display the quick_search_form partial in its search box
* Add a `_quick_search_form.html.erb` partial - if you dig down into the partial used there you'll find the call to the autocomplete code you set up earlier
* Add a `search` action to your controller, this will render whichever object is selected from the autocomplete results

### Helpers

* There are some must-dos here, see [helper README](https://github.com/SpeciesFileGroup/taxonworks/blob/development/app/helpers/README.md)

## Creating a new TaxonWorks task

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

## Radial annotators and navigators
See [Icons in TaxonWorks](https://docs.taxonworks.org/guide/Manual/conventions.html#icons-in-taxonworks) for general information on radials. Here we discuss how radial annotators and navigators are populated from the point of view of a developer.

* The sectors that appear in radials are internally referred to as 'slices'
* Both radial annotators and navigators take an object of some model as input (via a Rails [global id](https://github.com/rails/globalid))

### Radial annotator slices
* Add slices to radial annotators for your model by including annotation concerns such as `Shared::Citations` or `Shared::Depictions` on your model.
* Your Vue task can respond to the addition, deletion, or editing of annotations via a radial annotator by listening for the `create`, `delete`, and `update` events emitted by the annotator.

### Radial navigator slices
* There are several default navigator slices, like Edit and Show for example, see [radial.vue](https://github.com/SpeciesFileGroup/taxonworks/blob/development/app/javascript/vue/components/radials/navigation/radial.vue); some of these can be excluded if so desired using the `exclude` prop
* To add slices to the navigator or to modify the actions associated with the default slices, see the [`object_radials.yml`](https://github.com/SpeciesFileGroup/taxonworks/blob/development/config/interface/object_radials.yml) file and documentation therein.
  * The TaxonWorks convention for using an id query parameter in your task is to name it `<model>_id`. The significance here is that links for tasks added to navigators follow that convention. For example in the object_radials file you can see `browse_otus_task` listed as a task under Otus - that means that a radial navigator on an Otu with id 1 will include a slice with the text 'Browse OTUs' (the name of the task on its task card) and a link of `/tasks/otus/browse?otu_id=1`.
