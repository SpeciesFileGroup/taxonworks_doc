

# Comprehensive digitization task basics

## Hotkeys and setup

* Don't forget that `ctrl-S` (or alt- in windows/linux) will save the whole of the record
* Use blue locks to lock values from record to record
* Use blue "undo" circles to unset a value (does not save)
* Throughout TaxonWorks green and red buttons touch the database, but nothing else does

## Catalog number

* You must provide both parts of the catalog number (a Local identifier type in TaxonWorks), a namespace (like `INHS Insect Collection`), and the unique portion of the identifier, like `12345`.
* New Namespaces can be created via `Data -> Namespace`.
* The task will automatically check for the presence of an identical identifier if it can, warning you in red.  Red warnings prevent the save of that identifier.
* Confirm that a catalog number is successfully created by seeing the label for the collection object update (after save) to the right of the search bar on the top of the form.

## Taxon determinations

* A taxon determination requires, minimally, the selection of an Otu, the click of the "Add" bar (notice a record with a red trash can will appear at the bottom of the form), and a subsquent save
* _Simply selecting an OTU does not create a determination_
* You can create new OTUs inline, right there in the form.  Note that if you create an OTU, but fail to use it by clicking "Add", the OTU _remains created_.
* You can create multiple determinations
* The topmost determination, _regardless of the years applied_, is considered the current determination for this collection object
* If you have successfully saved a determination, then it will appear in the object label in the top bar, as does the catalog number

## Buffered values

* Buffered values are _attached to the collection object_, to fully break these data down they need to be translated into the various sub-forms
* You do not need to fill in buffered values.  Whether or not you do is a curatorial decision that should be made at the project level.

