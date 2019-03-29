
# Migrating to TaxonWorks

## Overview

Researchers considering TaxonWorks often have existing data in many different formats. One of their first questions is how can they get their existing data in to TaxonWorks. This manual describes the present state of affairs, it's a _very_ rapidly evolving one. 

## Individual dataset approaches

### Batch Imports

There are various batch importers available within the UI (user interface).  These are polished to differing degrees and have various benefits and limitations.  The required format is described in the UI.  All batch loaders are two-step, allowing for (and requiring) a preview of results. 

* To explore available batch loaders click on a Data card in the Hub.  If batch loader(s) are avilable then then the batch load link will be enabled.
* Batch importers largerly target Tab seperated text files, though this is not exclusively the case.
* Notable batch loaders are found in the **TaxonNames**, **Otus**, and **Sources** data cards, though others exists. See section below.

See also [this issue about a future index](https://github.com/SpeciesFileGroup/taxonworks/issues/139).

### Customized Rake tasks

Rake tasks are Ruby (language) native code that let you script your own imports.  

To cover the rich legacy of Taxonomic and Biodiversity databases TaxonWorks has a rich, modern, semantically-based model.  This model is available as a sort of "DSL" (domain specific model) that can be used in scripts.  If you have complex data you might consider a one-off transformation approach in which you use a Rake task to directly script your data into TaxonWorks. Real life examples, addressing imports of varying complexity (and doing so in a variety of ways, some of which are no longer best practices) can be explored in the codebase: [https://github.com/SpeciesFileGroup/taxonworks/tree/development/lib/tasks/import](https://github.com/SpeciesFileGroup/taxonworks/tree/development/lib/tasks/import). 

### General Rake tasks

Rake tasks (as opposed to "Task" in the user interface) are command-line batch importers for a specific format. Of note these include:

* Staged collection object image loaders (used for over 70k images thus far)
* Users, defined in a `yaml` file format.

### UI

Users should not outright abandon manually entering their spreadsheet data into TaxonWorks. We've worked hard to build interfaces that:
* use "smart selectors" that predict what values you might use based on your recent use
* use hot keys to copy values from field to field
* use locks to lock in values from record to record
* let you build a list of current favourites, and default forms to one of those favouirtes
* reference an extended cliboard toggling between 4 copy/pastable values
* use hot keys to clone records
* use locks that increment values from record to record
* use in-line data creation for related values when autocompletes fail to find a search targer
* select-paste from PDFs
* annotated their data in any context using radial popups

All these options facilitate the rapid curation of very rich meta/data.

### RESTful API

_Tokenized creation and update of data is not currently enabled.  The [api documentation](https://github.com/SpeciesFileGroup/taxonworks_api) reflects the current state of affairs.

We developed a proof of concept application that demonstrated how users can manage a matrix of data by using a tokenized API directly.  That code base has moved into the native TaxonWorks codebase. We expect the future will consist of many applications that use the TaxonWorks and its API as a database backend. 

### Identifier matching

_Users may want to find the TaxonWorks id for data in the shared controlled vocabularies within TaxonWorks._

* A wonderful Task for matching existing strings of data to the GeographicArea ids in TaxonWorks exists, it lets you quickly match numerous rows of data, then copy-paste the results back to your spreadsheet.

### Drag and drop

#### Images

A powerful drag/drop tool lets you quickly load images to the system, linking them to attribution and taxon metadata. Users could load thousands of images per day in this manner. See `Tasks -> New image`

### TaxonWorks instances initialization

For those starting their own TaxonWorks these nnstances can be initialized with a rake tasks that loads a large Gazeteer, a list of Serials, a controlled vocabulary of Languages, and a list of Repositories. 

### Planned importers 

_Listed in rough order of our percieved priority_

* DWCA Checklist format (parent/child), with extensions for NOMEN based semantics (but see existing TaxonName importer), work commences in March/2019
* POST/PATCH via tokenized RESTful API calls (e.g. through your favourite scripting language).  This has been proven in concept, and we will be exploring ways to safely allow this for Users.
* A generalized DWCA CollectionObject based importer, to cover around 15-25 fields to start with. An existing DWCA importer was done as a proof of concept, but not heavily tested.  It has major limitations.  See the "PENN State" related task.
* A gRPC/protobuff approach that feeds data very quickly into back-end, with subsequent validation after the fact, targetting formats used by CoLPlus to start

## Import patterns

### Names and sources

Users have successfully used the UI based batch loaders to start projects consisiting of thousands of Sources and TaxonNames.  The general approach is to build a BibTeX bibliography and table of "valid" names.  These are tested against a sandbox project and refined as needed.  When the user is happy with the results a production project can be initated.

## Notable importers

_This is a list of loaders that have been used by non-developer users and for which we've recieved positive feedback._

* Valid taxon names - See `Data -> TaxonNames -> Batch load`
* BibTeX bibliographies - See `Data -> Sources -> Batch load`
* Lists of OTUs - See `Data -> Otus -> Batch load`
* AssertedDistributions - See `Data -> Asserted distributions -> Batch load`

* [gpx](https://en.wikipedia.org/wiki/GPS_Exchange_Format) - `See Data -> CollectingEvents -> Batch load` (coming mid March/2019)

## Data migration services from the Species File Group

If you have a large (10k+ species), rich dataset with a long history the Species File Group would be happy to talk with you about supporting your migration process.  While the SFG can't promise everyone support they are very interested in the process of migrating community-supported datasets from legacy to new formats.  Contact Matt for more information.
