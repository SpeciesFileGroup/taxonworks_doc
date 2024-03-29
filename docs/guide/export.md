---
sidebarPosition: 62 
---

# Export 

## Full database dumps

You can export a full copy of your database, minus binaries (e.g. images, documents) into PostgreSQL format via the `Export project database` task.  This lets you:
* Archive your data 
* Load it into a local version of TaxonWorks (e.g. running on your desktop)

## Individual TaxonWorks tables
_Individual tables in native TaxonWorks format as CSV_

### Via "Project data overview and download"
* Open the `Project data overview and download` task
* Click a `Download` link corresponding to the table you want to download (22+ tables available)

### Via individual Data cards
* Click on a Data Card, e.g. `Otus`.
* On the bar in the middle click on `Download`, you'll get a CSV file with the data for that table.

## CSV
### Basic
* _Note that these formats are "in progress", they need refinement._
* Open any of the `Filter` tasks
* Complete a search
* Select the `CSV` option in the download select and click the blue download button beside it.

## Darwin Core Archives
A quite common data package used for sharing data with biodiversity data aggregators like the Global Biodiversity Information Facility (GBIF) and iDigBio, a **Darwin Core Archive (dwca)** contains several files (e.g. your data file, a metadata file, and an index file to tell computers reading the package what to expect to find in this specific data package). In TaxonWorks, you can create these packages as needed. To do so, you will use the DwC Dashboard shown next.  

#left[**Legend**: The `DwC Dashboard` Task](https://sfg.taxonworks.org/s/q4m8is [The DwC Dashboard Task])

### From the DwC Dashboard
* Open the `DwC Dashboard` task. 
* Click one of the green buttons in the `Download Darwin Core Archive` section. 
  * Note your green button options for your dwca file. You may create a dwca for all your data, or a given desired or relevant subset. You can also create your own custom archive (see the `Create DwC Archive by filtered collection object result` option). 
  * Once you click on an option, generating the file can sometimes take several seconds to create/load, so wait a few seconds, and you will see a result in the next step.  
![**Legend**: The TaxonWorks Download Darwin Core Archive panel](https://sfg.taxonworks.org/s/6nga85)
* Your download will be queued and built, then available under the `Recently created DwC Archives` section.
![**Legend**: Recently created DwC Archives](https://sfg.taxonworks.org/s/exphrc)

### From the `Filter collection objects` task 
* Open the task `Filter collection objects`.
* Perform a query to create your desired data subset.
* Use the download select to choose `DwC`.

#left[**Legend**:From `Filter Collection Object`, select the `DwC` download format for a given dataset](https://sfg.taxonworks.org/s/8f6ay6 [Where to select the dwca format for your `collection object` data download])

* Click the blue download button beside the select.
* Optionally click to include data-predicate (custom) fields, scroll down, then click `Download`.  

#left[**Legend**: Optional fields you can include in your dwca file](https://sfg.taxonworks.org/s/j450th [Optional fields you can include in your dwca file])
* Your download is available on the `DwC Dashboard` task after a short period.

### Preparing your data for an aggregator (e.g. GBIF, iDigBio, ALA)
* Your export will download as a [DWCA](https://ipt.gbif.org/manual/en/ipt/latest/dwca-guide), that includes three files (or more) when unzipped:
  1) data.csv (a tab-separated file (TSV) file that can be opened by most spreadsheet programs). This is your downloaded specimen occurrence data.
  2) eml.xml (a metadata file with information about your dataset)
  3) meta.xml (a metadata file that describes the headers included in your dataset). 
* You can (and will need to) edit your eml.xml file in a plain text editor to prepare it for upload to an aggregator. A sample file that works is available [here](https://www.dropbox.com/s/zq4honogcjn64bc/eml_sample.xml?dl=0).
* Once you've edited this EML file, make sure to re-package it into a ZIP file.
* CAUTION, if using a Mac, the system will add two invisible system files when re-zipping. A workaround is available here: https://perishablepress.com/remove-macosx-ds-store-zip-files-mac/ 
* Once repackaged, add this zipped file to your Integrated Publishing Toolkit (IPT) endpoint. Note there are existing IPT instances that would be happy to host your packaged data. More information on setting one up here: 
  1) [iDigBio](https://www.idigbio.org/wiki/index.php/Data_Sharing_Data_Standards_and_Demystifying_the_IPT ) 
  2) [GBIF](https://www.gbif.org/ipt)

## Bibliographies (Reference lists)
* Open the task `Filter sources`
* Use the facets to filter a list of Sources

### As CSV
* Select the `CSV` option in the download select and click the blue download button beside it.

### As BibTeX
* Select the `BiBTeX` option in the download select and click the blue download button beside it.

### Formatted for journals
* Select the `Download formatted` option in the download select and click the blue download button beside it.

#### Create shareable link to your filtered bibliography
You can share a zipped copy of the file by generating a link to it. This functionality is turned on if the project administrator has created an API token (See addendum).
* Click `Generate download`
* Copy the link generated and share it.

A copy of the Download file is also available for future reference, for a period of 2 days, via the `Download` data card.

### Catalog of Life Data Package (ColDP)
* Open the task `Catalogue of Life (ColDP) exports`
* Use the `OTU` autocomplete to choose an OTU.  All children of this OTU, by proxy of the attached TaxonName name will be exported.
* Click `Download`

A copy of the Download file is also available for future reference, for a period of 2 days, via the `Download` data card.

## Data matrices (evolutionary, descriptive, quantitative, etc.)
* Open the `Obervation matrix hub` task
* Click `View` beside the matrix to be downloaded
* Click the link corresponding to the format you want to download (e.g. `TNT`, `nexus`, or `NeXML`)

Descriptor lists and OTU contents are also available as downloads here.

### Nomenclature stats
* Use the `Search a taxon name` autocomplete to select a taxon name
* Refine the columns you wish to see and click `Search` again to update
* Click the blue download icon on the top right 

## JSON

### Individual records
* Open a record in 'Show'
* Notice the URL format, like `/otus/123`.  Nearly all records can be viewed in with a URL pattern like this (this is a "RESTful" format)
* Add `.json` to the request, like `/otus/123.json`
* Select all to copy-paste, or use your web-browsers save as to save as a JSON document 

### Via filters
_All filters can all be used to generate a query that returns JSON_

* Open a filter
* Complete a search 
* Click on the eyeball button and then `Show JSON request`
* Copy the path of the request to your clipboard
* Paste the path of the request to your TaxonWorks base URL (e.g. add it to something like `https://my.taxonworks.org/)` and hit enter 
* Select all to copy-paste, or use your web-browsers save as to save as a JSON document 

## The TaxonWorks API

See [api.taxonworks.org](https://api.taxonworks.org).

