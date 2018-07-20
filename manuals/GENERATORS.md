
_Restart your development server after running any of these generators._

# Rails based 

You can use `rails generate scaffold` as you would for any Rails application.

* Cleanup generate files that are not used (e.g. tests, css, javascript stubs).  In general any scaffold file that does not have customizations to it should be excluded.
* Register the model (if data) in `config/interface/data/hub.yml`

Use the corresponding files for Otus (e.g. `app/models/otu.rb`, `app/controllers/otus_controller.rb` etc.) as reference patterns:

## Model

* Document the model's attributes at the top
* See also the [model template README](https://github.com/SpeciesFileGroup/taxonworks/blob/development/app/models/README_model_template.md)

_At this point, while not completely configured, following restart of the development server you should see a corresponding card in the Data tab._

* Add pertinent Concerns to the model.
* Add a reference to the model to the `#nuke()` method in `project.rb`

## Controller

* Add `include DataControllerConfiguration::ProjectDataControllerConfiguration`.
* Update the `index` method.
* Add a `list` method.

## Views

* Extract the table from `index.html.erb` into a new `list.html.erb` (or its own partial to be referenced in list) as in otus, and delete `index.html.erb`.

## Helper 

* `model_tag(model)` and `model_link(model)` helper methods.  For example see the [app/views/otus_helper.rb](https://github.com/SpeciesFileGroup/taxonworks/blob/development/app/helpers/otus_helper.rb)  These are used to display the model data in simple, general purpose rendering.

## Specs

* A bare-bones factory for testing purposes.  The factory should be named `valid_<model_name_in_singular>`. See the [spec/factories/otu_factory.rb](https://github.com/SpeciesFileGroup/taxonworks/blob/development/spec/factories/otu_factory.rb) for the pattern.

# TaxonWorks generators

See all generators with `rails generate | grep taxonworks`.  Run any generator with `-p` to "practice"

## New task

You can quickly stub a new TaxonWorks task with `rails generate taxonworks:task`.  Run it without params to get an explanation of the required params.  The task generates the task card, routes, controller, etc.  

* Register the task in `config/interface/data/user_tasks.yml`

## Batch load

You can stub a new batch-loader using `rails generate taxonworks:batch_load`.  Run the command without params to get some help.
