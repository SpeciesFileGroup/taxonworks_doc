# HOW-TO

_A working list of commonly repeated development patterns in TaxonWorks._

## Creating a new task

You can stub all the basic code for a new task using a generator.  The result of this call is a new blank card in Tasks that leads you to a new blank interface. [See the code base for more](https://github.com/SpeciesFileGroup/taxonworks/blob/development/lib/generators/taxonworks/task/USAGE.md)

```ruby
rails scaffold taxonworks:task ...
```

## Creating a new batch loader

There is a batch-load middle layer that batch loaders can take advantage of.  This generator stubs in all the basic pieces that can then be further refined.  [See the code base for more](https://github.com/SpeciesFileGroup/taxonworks/blob/development/lib/generators/taxonworks/batch_load/USAGE.md)

```ruby
rails scaffold taxonworks:batch_load ...
```

## Adding inline-help

### For javascript (Vue, etc.) related interfaces

### For Rails native interfaces (.erb)

