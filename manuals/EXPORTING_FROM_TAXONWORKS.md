
# Exporting from TaxonWorks

This is version _0.0.1_. All changes beyond grammar will result in an increment. Higher level increments reflect larger changes that may reflect new ways of doing things, or differences in user interfaces, etc.

_You can ask for help and clarification live in person on [Gitter](https://gitter.im/SpeciesFileGroup/taxonworks)!_

## Overview

_Everything here is currently available in production instances of TaxonWorks, i.e. it contains no "future" work._

This manual details how to export data curated in TaxonWorks via number of different mechanisms.

## Exercise target audience

Curators who have compiled data that they now want to share, or do new Science with.

## Exercise goals

The goals are to describe:

* Where to find exports of CSV formats
* Where to find exports of data standards (e.g. DwC-A, BibTeX, Nexus, CoLDP)
* Where to find exports of raw/native TaxonWorks tables
* Where to find export functionality via the public facing "API" 
* Where to find export functionality via internal JSON serving endpoint

At the end of the exercise you should: 

* Export a wide range of data for downstream use 

## Assumptions

* We assume you are familiar with navigating TaxonWorks 
* We assume you know what TaxonWorks Data and Task cards are
* We assume you are able to load a CSV file into Excel, or some other database
* For some exports we assume you are familiar with handling JSON data
* For some exports we assume you are familiar with the standard in question (e.g. DwC-A)
 
## Gotchas
_Export functionality is rapidly evolving and expanding._ There will be a multitude of ongoing improvements, enhancements, and new export mechanisms coming as TaxonWorks evolves. Please see issues labeled with [Export](https://github.com/SpeciesFileGroup/taxonworks/labels/export), and add your own there if you don't see what you need.

## Tips
* Tools like [OpenRefine](https://openrefine.org/) are a great way to explore your CSV data
* [jq](https://stedolan.github.io/jq/) is an awesome command line parser for JSON (and other tools like it exist as well) 

## Related exercises
* None currently

## Exercise
### Syntax
- In the exercise bulleted points are actions you should take, non-bulleted tasks are comments or guiding questions.
- `Highlighted words` refer to text or elements in the application, for example button or field names.
- "Quoted words" are literal values to be input or noticed

### Export TaxonWorks tables
_The native TaxonWorks database format_

#### Via "Project data overview and download"
* Open the `Project data overview and download` task
* Click a `Download` link corresponding to the table you want to download (22+ tables available)

#### Via individual Data cards
* Click on a Data Card, e.g. `Otus`.
* On the bar in the middle click on `Download`, you'll get a CSV file with the data for that table.

### Export DwC-A
* Open the task `Report DWCA table`.
* Click `Download NNNN records.`

See also "Export Collection objects as CSV (DwC-A columns)".

### Export bibliographies
* Open the task `Filter sources`
* Use the facets to filter a list of Souces

#### As CSV
* Click the `Download CSV` button

#### As BibTeX
* Click the `BibTeX` buttona

##### Direct download
* Click the `Download Bibtex` button 

##### Create a file to share via the API
* Click `Generate download`
If the project administrator has created an API token (See addendum) then you will `see a URL link` that you can share that will point to a zipped copy of the download. 

### Export taxon names as CSV
#### Basic
* Open the task `Download nomenclature (basic)`
* Use the `Taxon name` autocomplete to choose a name.  All children of this name will be exported.
* Click `Download`

A copy of the Download file is also available for future reference, for a period of 2 days, via the `Download` data card.

#### ColDP 

* Open the task `Catalogue of Life (ColDP) exports`
* Use the `OTU` autocomplete to choose an OTU.  All children of this OTU, by proxy of the attached TaxonName name will be exported.
* Click `Download`

A copy of the Download file is also available for future reference, for a period of 2 days, via the `Download` data card.

#### Nomenclature stats

* Use the `Search a taxon name` autocomplete to select a Taxon name
* Refine the columns you wish to see, if you want, and click `Search` again to update
* Click `Download CSV`

### Export Collection objects as CSV (DwC-A columns)
* Open the `Filter collection objects` task
* Use the facets to create a collection object list
* Click `Download CSV`, this is the data of a DWCA format.

### Data matrices (evolutionary, descriptive, quantitative, etc.)
* Open the `Obervation matrix hub` task
* Click `View` beside the matrix to be downloaded
* Click the link corresponding to the format you want to download (e.g. `TNT`, `nexus`, or `NeXML`)

### Exporting records and filtered records as JSON 

#### Individual records
* Open a record in 'Show'
* Notice the URL format, like `/otus/123`.  Nearly all records can be viewed in with a URL pattern like this (this is a "RESTful" format)
* Add `.json` to the request, like `/otus/123.json`
* Select all to copy-paste, or use your web-browsers save as to save as a JSON document 

#### Via Filters
* The Taxon Names, Collection Objects, Sources, Collecting Events, and Annotations filters can all be used to generate a JSON returning query.

* For example, for collection objects:
* Open the `Filter collection objects` task
* Use the facets to create a collection object list
* Click the button beside the `Show JSON request`
* Copy the path of the request to your clipboard
* Paste the path of the request to your TaxonWorks base URL (e.g. add it to something like `https://my.taxonworks.org/)` and hit enter 
* Select all to copy-paste, or use your web-browsers save as to save as a JSON document 

### The TaxonWorks API

See [api.taxonworks.org](https://api.taxonworks.org).

### Wrapping up

Reminder of what was taught/learned.

## Addendum
### Using the external facing API
Some export functionality via the API requires a Project Administrator to create an API access token.
_As a Project administrator_:
* Click the `Project` link
* Click the `Edit` link
* Click the `Generate new token` radio button under the `Api access token` header
* Click `Update Project`

When you return the the `Project` link you will see the required Token.  

See [api.taxonworks.org](https://api.taxonworks.org) for more about where your users or collaborators can now access their data.
