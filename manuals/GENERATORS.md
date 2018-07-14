
_Restart your development server after running any of these generators._

# Rails based 

You can use `rails generate scaffold` as you would for any Rails application.

Then:

* Cleanup generate files that are not used (e.g. tests, css, javascript stubs).  In general any scaffold file that does not have customizations to it should be excluded.
* Register the model (if data) in `config/interface/data/hub.yml`
* Document the attributes at the top of the model
* Add pertinent Concerns (for example see otu.rb)

At this point, following restart of the server, you should see a corresponding card in the Data tab.  

* All data models in TaxonWorks must have corresponding, bare-bones factory. Rename the generate factory according to the plural_factory scheme and fill out the basics (see the otu_factory.rb for a pattern).

# TaxonWorks generators

See all generators with `rails generate | grep taxonworks`.  Run any generator with `-p` to "practice"

## New task

You can quickly stub a new TaxonWorks task with `rails generate taxonworks:task`.  Run it without params to get an explanation of the required params.  The task generates the task card, routes, controller, etc.  

* Register the task in `config/interface/data/user_tasks.yml`

## Batch load

You can stub a new batch-loader using `rails generate taxonworks:batch_load`.  Run the command without params to get some help.
