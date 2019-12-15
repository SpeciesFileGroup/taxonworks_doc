# DEVELOPERS

## Installation
Get started quickly with [install_taxonworks instructions](https://github.com/SpeciesFileGroup/install_taxonworks).  Instructions for "native" (non-docker based) installs are also maintained there.

## Code documentation
[Rdoc](http://rdoc.taxonworks.org) based on inline documentation is generated on each commit of the code to the development branch (has known issues, see [#13](https://github.com/SpeciesFileGroup/taxonworks_doc/issues/13))

This doc is also generated at [https://rdoc.info/github/SpeciesFileGroup/taxonworks](https://rdoc.info/github/SpeciesFileGroup/taxonworks).

## API
See [taxonworks_api](https://github.com/SpeciesFileGroup/taxonworks_api), this refers to the publically accessible endpoints for an instance of TaxonWorks

## Schema, database, data-model
* TaxonWorks uses a relational database that is fairly strongly graph and ontology influenced.  This meshes well with [Rails](https://rubyonrails.org/) conventions that lean heavily on a RESTful approach. Some aspects are object-relational in nature, but overall it does not strictly follow this convention.  This means that the `Code documentation` above contains a description of the schema.
* [Postgis](https://postgis.net/) is used to handle georeferencing and gazeteer-reference internally.
* Rails generates a [schema.rb](https://github.com/SpeciesFileGroup/taxonworks/blob/development/db/schema.rb) based on database migrations.  Note this may not always be upto-date, for example different branches may contain changes to be merged in. The schema is not referenced in production operations.
* STUB - link to ER diagram

## How-to
[How-to](/development/HOW-TO.md) contains quick reminders, recipes, etc. for coding TaxonWorks. 
