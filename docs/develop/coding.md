---
sidebarPosition: 50
---

# Coding

_You **can** code (TaxonWorks). Here's where to learn how._


## Scaffolding

_This is not a comprehensive list for adding a new model, but rather some point by point reminders._

Adding a data model to TaxonWorks largely follows [Rails conventions for scaffolding](https://guides.rubyonrails.org/command_line.html#bin-rails-generate).  We won't describe how to add fields, etc., but rather point out some specifics to TaxonWorks that happen during the process.

You can exclude some files while generating the model:

`rails generate scaffold Organization --no-javascript --no-view-specs --no-request-specs --no-fixture --no-stylesheets --no-assets --no-scaffold-stylesheet -p`

Tip: Notice the `-p` for "practice" (or "preview"), this lets you preview what will be done without writing any files.

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

### Spec Factory

See the factories [README.md](https://github.com/SpeciesFileGroup/taxonworks/blob/development/spec/factories/README.md).

### Model

* Document the attributes in the model (e.g. `app/models/organization.rb`)
* Add pertinent concerns: see `otu.rb` for project specific examples, and `source.rb` for community shared data; at minimum you'll need `Shared::IsData`
* Tweak the model test to add at least a couple unit tests (`spec/models`)
* If the model is project specific register it in `app/models/project.rb` `MANIFEST`
* Register the model in `config/interface/hub/data.yml` (see comments therein)

_At this point restarting the server should already show you a clickable card on `Data`._

### Controller

* !! Add the pertinent concerns to the controller (shared vs. project)
* Update `index` to load recent records
* Make sure to permit your attributes
* Check for an autcomplete action, follow patterns as seen in other controllers
* Add a `list` action

#### Controller spec

Rails no longer generates controller specs for you, and they're of limited usefulness, so we currently don't use them with new models.

### Views

* Delete `index.html.erb`
* Follow Rails conventions for `_form.html.erb`. See any other `_form.html.erb` for TaxonWorks conventions and markup. Replace bits with partials as needed (e.g. `/shared/errors`)
* Ensure you have JSON responses for show and index, see `_attributes.json.jbuilder` pattern in most models
* Most models can use an autocomplete, add `autocomplete.json.jbuilder`, the action, and controller, see Queries below
* Update `show.html.erb` to use a shared view
* Add `_attributes.html.erb` so that the shared view can render attributes
* Add a `list.html.erb`

#### View specs

We do not use view specs, remove if you missed the flag.

### Queries

* You may want/need to add a filter or autocomplete query for the model.  See [README.md](https://github.com/SpeciesFileGroup/taxonworks/blob/development/lib/queries/README.md)

### Helpers

* There are some must-dos here, see [helper README](https://github.com/SpeciesFileGroup/taxonworks/blob/development/app/helpers/README.md)


