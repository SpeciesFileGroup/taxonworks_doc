[Home](README.md) | [Users](Users.md) | Developers | | [Devops](DEVOPS.md)

# Developers

## Installation
Get started quickly with [install_taxonworks instructions](https://github.com/SpeciesFileGroup/install_taxonworks).  Instructions for "native" (non-docker based) installs are also maintained there.

## Hello World!
A simple example as to how you might [get started](/development/HELLO_WORLD.md).

## How-to
[How-to](/development/HOW-TO.md) contains quick reminders, recipes, etc. for coding TaxonWorks. 

## API (external)
See [taxonworks_api](https://github.com/SpeciesFileGroup/taxonworks_api), this refers to the publically accessible endpoints for an instance of TaxonWorks

## Contributing
* The core team commits directly to the respository, using pull requests (PRs) for larger features.
* Pull requests (PR) can/should be used
* Please flatten (use `git rebase -i`) your commits whenever possible and whenever flattening will not obfuscate what the overall contribution. For example a large PR with many changes may benefit from not flattening commits, but rather documenting in stages.
* Use rubocop for feedback on your code, e.g. `rubocop /app/models/otu.rb`. We do *not* strictly adhere to the linting there, but with increased contributions we will head that way. Please do not add rubocop exception skipping to your code.

## Documentation

### Changelog
* All commits merged to Development should have a corresponding [CHANGELOG.md](https://github.com/SpeciesFileGroup/taxonworks/blob/development/CHANGELOG.md) entry.

### Code
[Rdoc](http://rdoc.taxonworks.org) based on inline documentation is generated on each commit of the code to the development branch (has known issues, see [#13](https://github.com/SpeciesFileGroup/taxonworks_doc/issues/13))

This doc is also generated at [https://rdoc.info/github/SpeciesFileGroup/taxonworks](https://rdoc.info/github/SpeciesFileGroup/taxonworks).

### Schema, database, data-model
* TaxonWorks uses a relational database that is fairly strongly graph and ontology influenced.  This meshes well with [Rails](https://rubyonrails.org/) conventions that lean heavily on a RESTful approach. Some aspects are object-relational in nature, but overall it does not strictly follow this convention.  This means that the `Code documentation` above contains a description of the schema.
* [Postgis](https://postgis.net/) is used to handle georeferencing and gazeteer-reference internally.
* Rails generates a [schema.rb](https://github.com/SpeciesFileGroup/taxonworks/blob/development/db/schema.rb) based on database migrations.  Note this may not always be upto-date, for example different branches may contain changes to be merged in. The schema is not referenced in production operations.
* STUB - link to ER diagram


