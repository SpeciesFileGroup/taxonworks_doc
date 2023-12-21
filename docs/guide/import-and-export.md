---
sidebarPosition: 60 
---

# Import and export

_Many projects start with imports, and target exports. Here is where you find what is possible in TaxonWorks._

## Import

TaxonWorks offers two ways to import data: 1) via the User Interface (UI) entering one-to-many records at a time or batch uploading files, and 2) programmatically with customized scripts for large datasets (e.g. > 1000 records). We seek to make the data import and entry as savvy as possible. As you experience these options, please contribute your ideas for ways to enhance these processes. (Submit ideas, submit code, and please bring your voice to our [sfgcommons meetings on Wednesdays](https://speciesfilegroup.org/events.html)).

### Data types
For bulk/batch uploads, TW supports import of various types of data including checklists, occurrence specimen record data, sequence data, source information (i.e. publications) and more. And using the DwC Archive Import Task, TW offers the use of the current gold standard for sharing specimen occurrence data via a tab-separated text file. This file can stand alone or be part of a Darwin Core Archive (DwCA) zipped file. These (your) data are mapped to Darwin Core terms, TaxonWorks specific elements, or your own custom Data Attributes (details below). Support for importing observations is underway. 

- sample checklist (link)
- sample specimen record dataset (link) 

### Batch imports
There are various batch importers available within the UI (user interface). These are polished to differing degrees and have various benefits and limitations. The required format is described in the UI. All batch loaders are two-step, allowing for (and requiring) a preview of results before inserting them into the database.

- To explore available batch loaders click on a Data card in the Hub. If batch loader(s) are available then the batch load link will be enabled. 
- Batch importers largely target tab-separated text files, though this is not exclusively the case.
- Notable batch loaders are found in the TaxonNames, Otus, and Sources data cards, though others exist. 
- Explore various batch loaders (each data card highlighted in yellow has associated batch loaders at this writing).

#### Try batch

In your test project, 
1.	Go to the data tab
2.	Select the Otu Data card
3.	Click “batch load”
4.	See instructions in the UI for expected / accepted data types and format.
5.	Create your own file or use this [test file](link)
  Header column = otu_name
  Blank lines are skipped
  Tab-delimited format, UTF-8 encoding, Unix line-endings required
6.	Browse to your file to select it, click preview
7.	If data looks as expected, browse to select that file again and click create.

Batch loaders (as of March 2022) include:

- OTUs [operational taxonomic units](https://docs.taxonworks.org/about/glossary.html#otu-operational-taxonomic-unit)
  - simple batch load
  - data attributes
  - simple batch file
  - OTU with identifier batch load
- collecting events
  - gpx (collecting events with georeferences)
  - castor
- collection objects
  - castor
  - buffered strings
- descriptors
  - qualitative descriptors
  - modify gene descriptor
- sequences
  - Genbank
  - Genbank batch
  - primers
- sources
  - BibTeX
- taxon names
  - simple
  - castor
- asserted distributions
  - simple
- namespaces
  - simple
- sequence relationships
  - primers batch

### Record by record
When first learning TaxonWorks, entering records one-at-a-time offers you the opportunity to learn about more of the features in TW and get a feel for how you and others experience the UI. 

For example, you want to enter a specimen record. You have two Tasks enabling you to do this. Choose to use Comprehensive Specimen Digitization Task or the Simple New Specimen Task.

#### Try Simple New Specimen
In your project, try creating a simple new specimen record. 

- Note you will need to select a namespace. You may find you need to add a namespace before you can do this TW task. Adding a value for namespace ensures your uploaded data records will be unique inside your TW project and across TW projects. In your project, you may also need more than one namespace. [Use Tommy’s INHS Insect Collection as an example, with 12 different namespaces that effectively group the various collections housed at INHS ENT].

- If you tried the OTU batch loader you can pick one of your OTUs for the name to assign to this specimen.

- Add an image if you wish

- Select the Preparation type for this specimen. You may need to add a new value to the dropdown using the New preparation type task. 

### Darwin Core Archive (DwC-A) import
To upload occurrence (vouchered specimen data records) data, TW offers the ability to use a DwC Archive file. This provides options to share data that maps to concepts (aka terms, elements, properties) in Darwin Core, but also to specific fields in TaxonWorks and to custom "Data Attribute" fields you can add, if needed.

For these **occurrence datasets** one needs to map each term to be imported. This next section explains the different mapping options available and steps needed to get started.

### Precursor steps to DwC-A import
- For your dataset, you may need to create one or more **namespaces.** These namespaces allow TW to
  - track uniqueness of each object and
  - group these objects. 
  
  For example, in your collection of physical objects, your catalog numbers may have duplicates if your specimens have come from other institution collections in the past. Creating namespaces in TW is simple to do, but spending some time on this before upload can simplify the process. Namespaces also need to be unique in your TW Project (first-come, first-served). [NEED EXAMPLES here].
- In addition, if your dataset has terms not mappable to TW concepts or the DwC terms we currently support, you will need to create custom "Data Attributes." These need to be created before upload (ideally). If you don't, then records with these data will not upload but are easy for you to address after other records import.
- For some **biocuration** data in TW you may find you need to add the group and accepted values for a given class before upload (e.g. group=caste and class=queen).

### DwC terms mappings
Next please note the dwc terms that TW currently recognizes. Also see examples below for how to map to existing TW terms, custom data attributes, and biocuration information.

#### Record-level class

Term|Mapping
---|---
`type` | It is checked that it equals `PhysicalObject` before allowing the record to be imported. If the value is empty or term not present it is assumed it is a `PhysicalObject`
`institutionCode` | Selects the repository for the specimen that is registered with an acronym equal to this value
`collectionCode` | Paired with `institutionCode` it is used to select the namespace for `catalogNumber` from a user-defined lookup table in import settings, the value itself is not imported.
`basisOfRecord` | It is checked that it equals an expected valid value for term, e.g. `PreservedSpecimen` or `FossilSpecimen` before allowing the record to be imported. If the value is empty or term not present it is assumed it is a `PreservedSpecimen` [IS THIS STILL TRUE?]

#### Occurrence class

Term|Mapping
---|---
`catalogNumber` | The identifier value for Catalog Number local identifier. The namespace is selected from the namespaces lookup table in import settings queried by `institutionCode`:`collectionCode` pair.
`recordedBy` | It is imported as-is in verbatim collectors field of the collecting event. Additionally, the value is parsed into people and assigned as collectors of the CE. Previously existing people are not used unless the data origin is the same dataset the record belongs to, otherwise any missing people are created.
`individualCount` | The total number of entities associated with the specimen record (e.g. this record may be for a "lot" containing 6 objects).
`sex` | Selects the biocuration class from the "sex" biocuration group to be assigned as biocuration classification for the specimen.
`preparations` | Selects an existing preparation matching the name with this value.
`occurrenceRemarks` | A note, attached to the specimen

#### Event class

Term|Mapping
---|---
`fieldNumber` | Verbatim trip identifier of collecting event
`eventDate` | The ISO8601-formatted date is split into start year, month and day collecting event fields. If the value is composed of two dates separated by `/`, then rightmost date is used as end date and split in the same way as start date. If data contradicts dates from other non-empty date-related terms the record will fail to import
`eventTime` | Time is split into time start hour, minute, and second of collecting event
`startDayOfYear` | Using `year` and the value for this term month and day are calculated and stored in start year, month, and day collecting event fields. If the computed value contradicts dates from other non-empty date-related terms the record will fail to import.
`endDayOfYear` |  Using `year` and the value for this term month and day are calculated and stored in end year, month and day collecting event fields. If the computed value contradicts dates from other non-empty date-related terms the record will fail to import.
`year` | The start date year of the collecting event. If the value contradicts dates from other non-empty date-related terms the record will fail to import
`month` | The start date month of the collecting event. If the value contradicts dates from other non-empty date-related terms the record will fail to import.
`day` | The start date day of the collecting event. If the value contradicts dates from other non-empty date-related terms the record will fail to import
`verbatimEventDate` | Verbatim date of the collecting event
`habitat` | Verbatim habitat of the collecting event
`samplingProtocol` | Verbatim method of the collecting event
`fieldNotes` | Field notes of the collecting event
`eventRemarks` | A note attached to the collecting event.

#### Location class

Term|Mapping
---|---
`fieldNumber` | Verbatim trip identifier of collecting event
`verbatimLocality` | Verbatim locality of the collecting event
`minimumElevationInMeters` | Minimum elevation (in meters) of the collecting event
`maximumElevationInMeters` | Maximum elevation (in meters) of the collecting event
`verbatimElevation` | Verbatim elevation of the collecting event
`decimalLatitude` | Stored as verbatim latitude. If `decimalLongitude` is also present, a Georeference is created
`decimalLongitude` | Stored as verbatim longitude. If `decimalLatitude` is also present, a Georeference is created
`georeferencedBy` | A list (concatenated and separated) of names of people, groups, or organizations who determined the georeference (spatial representation) for the Location. If data is present in this column the importer searches for a Predicate with the uri `http://rs.tdwg.org/dwc/terms/georeferencedBy` or name `georeferencedBy`. If neither exist, creates a new predicate with the name `georeferencedBy` to store the data verbatim.
`georeferenceRemarks` | A note attached to the georeference

#### Identification class

Term|Mapping
---|---
`identifiedBy` | A list (concatenated and separated) of names of people or organizations who assigned the Taxon to the subject. If possible, separate the values in a list with space vertical bar space `\|` (known as a pipe). (e.g. `Theodore Pappenfuss \| Robert Macey`)
`dateIdentified` | The date on which the subject was determined as representing the Taxon. Best practice is to use a date that conforms to ISO 8601-1:2019 [see examples](https://dwc.tdwg.org/terms/#dwc:dateIdentified).
`identificationRemarks`| Comments or notes about the determination
`typeStatus` | A single nomenclatural type to be applied to the subject. If only the type status is supplied (eg. `holotype`), the taxon from the current determination is used. When a typified scientific name is also provided, (e.g. `holotype of Aus bus`), the importer will search through all taxa having relationships with the current determination for a taxon with that name. Including authorship information may resolve assist in resolving homonyms. Examples: `holotype` `syntype of Pseudomyrma triplaridis boxi Wheeler, 1942`
`identificationQualifier` | Used to create/assign `OTU`s of temporary/working names. If used, its value match that of the lowest taxon rank (`specificEpithet`/`infraspecificEpithet`). For example, to create the OTU _Strumigenys sphera_cf1_ (linked to the TaxonName _Strumigenys_): `sphera_cf1`,  with `scientificName` `Strumigenys`, `genus` `Strumigenys`, and `specificEpithet` `sphera_cf1`

#### Taxon class

Term|Mapping
---|---
`nomenclaturalCode` | Selects the nomenclatural code for the taxon ranks used when creating protonyms. The value itself is not imported
`kingdom` | Creates (unless already present) a protonym at kingdom rank
`phylum` | Creates (unless already present) a protonym at phylum rank
`class` | Creates (unless already present) a protonym at class rank
`order` | Creates (unless already present) a protonym at order rank
`superfamily` | The protonym at superfamily rank
`family` | Creates (unless already present) a protonym at family rank
`subfamily` | The protonym at subfamily rank
`tribe` | The protonym at tribe rank
`subtribe` | The protonym at subtribe rank
`genus` | Ignored. Extracted from `scientificName` instead
`subgenus` | Ignored. Extracted from `scientificName` instead
`specificEpithet` | Ignored. Extracted from `scientificName` instead
`infraspecificEpithet` | Ignored. Extracted from `scientificName` instead
`scientificName` | Several protonyms created (only when not present already) with their corresponding ranks and placements
`taxonRank` | The taxon rank of the most specific protonym
`higherClassification` | Several protonyms created (only when not present already) with their corresponding ranks and placement. In case a protonym was not already present, only family-group names will be created, names with classification higher than family-group not previously registered will result in error. Names at genus rank or lower are ignored and extracted from `scientificName` instead
`scientificNameAuthorship` | Verbatim author of most specific protonym. If creating new nomenclature is enabled and the name of the taxon doesn't exist, authorship will be parsed and added to the new Protonym.

### TW non-standard mappings

The DwC importer task includes some TW-specific mappings that are neither DwC core terms nor in any DwC extension term lists but instead, direct mappings to predicates in your projects imported as data attributes for collection objects and collecting events, biocuration groups and classes, and as an advanced-use feature you may have direct mappings to model fields.

**IMPORTANT**: If submitting an actual DwC-A zip file and not tab-separated text file or spreadsheet, this TW-specific mappings have to be placed as headers in the core table, and not in meta.xml. If you are replacing a mapping from meta.xml, you must make sure to comment it out and also if inserting columns make sure you do the appropriate adjustments to avoid collision.

#### Mappings to project predicates

In cases where you need to import predicate values targeting the imported collection object or collecting event you may do so by naming the column with a pattern like `TW:DataAttribute:<target_class>:<predicate_identifier>`.
`<target_class>` may be `CollectionObject` or `CollectingEvent`, and the `<predicate_identifier>` may be either the name of the predicate or its URI. As an example if you have a predicate registered with name `ageInDays` and URI `http://rs.gbif.org/terms/1.0/ageInDays`, both `TW:DataAttribute:CollectionObject:ageInDays` and `TW:DataAttribute:CollectionObject:http://rs.gbif.org/terms/1.0/ageInDays` can be used to refer to the same predicate.

#### Mappings to biocuration groups and classes

The importer is able to map `sex` into the appropriate biocuration group and select the appropriate class according to the value. For additional mappings you may use a special column name pattern to select a biocuration group like `TW::BiocurationGroup:<group_identifier>` where `<group_identifier>` can be the name of the biocuration group or its URI. In addition, the values must match an existing biocuration class and you may use either its name or URI. For example, if you have a biocuration group registered with name `Caste` and URI `urn:example:ants:caste` and biocuration class with name `Queen` and URI `urn:example:ants:caste:queen` the following examples do all create the same biocuration classification:
|Caste|urn:example:ants:caste|
|---|---|
Queen|urn:example:ants:caste:queen
urn:example:ants:caste:queen|Queen
#### Mappings to DwC predicates

Whenever the importer sees that your project has custom attributes for collecting events and/or collection objects that matches Darwin Core URI terms (`http://rs.tdwg.org/dwc/terms/<term>`), them will be imported as data attributes regardless of any existing mapping of the same field. This allows to preserve verbatim dataset value for reference as also to import data from terms not supported by the importer.

#### Direct mapping to TW model fields (advanced)

This is an advance mapping and requires knowledge of the underlying TW models. The pattern is `TW:<model_class>:<field>` where model can be either [`CollectionObject`](https://docs.taxonworks.org/develop/Data/models.html#collection-object) or [`CollectingEvent`](https://docs.taxonworks.org/develop/Data/models.html#collecting-event), and `<field>` can be the ones listed below.

|Class|fields|
|---|---|
|`CollectionObject`|`buffered_collecting_event`, `buffered_determinations`, `buffered_other_labels`, `total`,
|`CollectingEvent`|`document_label`, `print_label`, `verbatim_label`, `field_notes`, `formation`, `group`, `lithology`, `max_ma`, `maximum_elevation`, `member`, `min_ma`, `minimum_elevation`, `elevation_precision`, `start_date_day`, `start_date_month`, `start_date_year`, `end_date_day`, `end_date_month`, `end_date_year`, `time_end_hour`, `time_end_minute`, `time_end_second`, `time_start_hour`, `time_start_minute`, `time_start_second`, `verbatim_collectors`, `verbatim_date`, `verbatim_datum`, `verbatim_elevation`, `verbatim_geolocation_uncertainty`, `verbatim_habitat`, `verbatim_latitude`, `verbatim_locality`, `verbatim_longitude`, `verbatim_method`, `verbatim_trip_identifier`


#### Adding tags to `CollectingEvent`s and `CollectionObject`s
Tags can be added to collection objects and collecting events during the import. To do so, use the column header pattern `TW:Tag:CollectionObject:<tag_name_or_uri>` or `TW:Tag:CollectingEvent:<tag_name_or_uri>`
A value of `true` or `1` will add the tag to the object. No value, `false`, or `0` will skip applying the tag for that row. 
If a tag is applied to a collecting event in one row, subsequent `false`/`0` values will not remove it.

### Coming from other software

#### Scratchpads
We are in the process of exploring two routes to come from Scratchpads to TaxonWorks.  

* The DwC import should work well for occurrence data that is based on collected objects.
* The SFG team has worked with a select number of individual Scratchpad curators to script the process of transferring their datadata. Contact us if you are interested in what this approach entails. Note that this process takes programming effort that is a limited resource within the SFG.


## Export

### Full database dumps

You can export a full copy of your database, minus binaries (e.g. images, documents) into PostgreSQL format via the `Export project database` task.  This lets you:
* Archive your data 
* Load it into a local version of TaxonWorks (e.g. running on your desktop)

### Individual TaxonWorks tables
_Individual tables in native TaxonWorks format as CSV_

#### Via "Project data overview and download"
* Open the `Project data overview and download` task
* Click a `Download` link corresponding to the table you want to download (22+ tables available)

#### Via individual Data cards
* Click on a Data Card, e.g. `Otus`.
* On the bar in the middle click on `Download`, you'll get a CSV file with the data for that table.

### CSV
#### Basic
* _Note that these formats are "in progress", they need refinement._
* Open any of the `Filter` tasks
* Complete a search
* Select the `CSV` option in the download select and click the blue download button beside it.

### Darwin Core Archives
A quite common data package used for sharing data with biodiversity data aggregators like the Global Biodiversity Information Facility (GBIF) and iDigBio, a **Darwin Core Archive (dwca)** contains several files (e.g. your data file, a metadata file, and an index file to tell computers reading the package what to expect to find in this specific data package). In TaxonWorks, you can create these packages as needed. To do so, you will use the DwC Dashboard shown next.  

#left[**Legend**: The `DwC Dashboard` Task](https://sfg.taxonworks.org/s/q4m8is [The DwC Dashboard Task])

#### From the DwC Dashboard
* Open the `DwC Dashboard` task. 
* Click one of the green buttons in the `Download Darwin Core Archive` section. 
  * Note your green button options for your dwca file. You may create a dwca for all your data, or a given desired or relevant subset. You can also create your own custom archive (see the `Create DwC Archive by filtered collection object result` option). 
  * Once you click on an option, generating the file can sometimes take several seconds to create/load, so wait a few seconds, and you will see a result in the next step.  
![**Legend**: The TaxonWorks Download Darwin Core Archive panel](https://sfg.taxonworks.org/s/6nga85)
* Your download will be queued and built, then available under the `Recently created DwC Archives` section.
![**Legend**: Recently created DwC Archives](https://sfg.taxonworks.org/s/exphrc)

#### From the `Filter collection objects` task 
* Open the task `Filter collection objects`.
* Perform a query to create your desired data subset.
* Use the download select to choose `DwC`.

#left[**Legend**:From `Filter Collection Object`, select the `DwC` download format for a given dataset](https://sfg.taxonworks.org/s/8f6ay6 [Where to select the dwca format for your `collection object` data download])

* Click the blue download button beside the select.
* Optionally click to include data-predicate (custom) fields, scroll down, then click `Download`.  

#left[**Legend**: Optional fields you can include in your dwca file](https://sfg.taxonworks.org/s/j450th [Optional fields you can include in your dwca file])
* Your download is available on the `DwC Dashboard` task after a short period.

#### Preparing your data for an aggregator (e.g. GBIF, iDigBio, ALA)
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

### Bibliographies (Reference lists)
* Open the task `Filter sources`
* Use the facets to filter a list of Sources

#### As CSV
* Select the `CSV` option in the download select and click the blue download button beside it.

#### As BibTeX
* Select the `BiBTeX` option in the download select and click the blue download button beside it.

#### Formatted for journals
* Select the `Download formatted` option in the download select and click the blue download button beside it.

##### Create shareable link to your filtered bibliography
You can share a zipped copy of the file by generating a link to it. This functionality is turned on if the project administrator has created an API token (See addendum).
* Click `Generate download`
* Copy the link generated and share it.

A copy of the Download file is also available for future reference, for a period of 2 days, via the `Download` data card.

#### Catalog of Life Data Package (ColDP)
* Open the task `Catalogue of Life (ColDP) exports`
* Use the `OTU` autocomplete to choose an OTU.  All children of this OTU, by proxy of the attached TaxonName name will be exported.
* Click `Download`

A copy of the Download file is also available for future reference, for a period of 2 days, via the `Download` data card.

### Data matrices (evolutionary, descriptive, quantitative, etc.)
* Open the `Obervation matrix hub` task
* Click `View` beside the matrix to be downloaded
* Click the link corresponding to the format you want to download (e.g. `TNT`, `nexus`, or `NeXML`)

Descriptor lists and OTU contents are also available as downloads here.

#### Nomenclature stats
* Use the `Search a taxon name` autocomplete to select a taxon name
* Refine the columns you wish to see and click `Search` again to update
* Click the blue download icon on the top right 

### JSON

#### Individual records
* Open a record in 'Show'
* Notice the URL format, like `/otus/123`.  Nearly all records can be viewed in with a URL pattern like this (this is a "RESTful" format)
* Add `.json` to the request, like `/otus/123.json`
* Select all to copy-paste, or use your web-browsers save as to save as a JSON document 

#### Via filters
_All filters can all be used to generate a query that returns JSON_

* Open a filter
* Complete a search 
* Click on the eyeball button and then `Show JSON request`
* Copy the path of the request to your clipboard
* Paste the path of the request to your TaxonWorks base URL (e.g. add it to something like `https://my.taxonworks.org/)` and hit enter 
* Select all to copy-paste, or use your web-browsers save as to save as a JSON document 

### The TaxonWorks API

See [api.taxonworks.org](https://api.taxonworks.org).

