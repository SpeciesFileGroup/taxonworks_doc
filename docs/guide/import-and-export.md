---
sidebarPosition: 2000
---

# Import and export

_Many projects start with imports, and target exports. Here is where you find what is possible in TaxonWorks._

## Imports
TaxonWorks offers two ways to import data: 1) via the User Interface (UI) entering one record at a time or batch uploading, and 2) programmatically with customized scripts for very large datasets (> 1000 records). We seek to make the data import and entry as savvy as possible. As you experience these options, please contribute your ideas for ways to enhance these processes. (Submit ideas, submit code, and please bring your voice to our [sfgcommons meetings on Wednesdays](https://speciesfilegroup.org/events.html)).

### Data types
For bulk/batch uploads, TW supports import of various types of data including checklists, occurrence specimen record data, sequence data, source information (i.e. publications) and more. And using the DwC Archive Import Task, TW offers the use of the current gold standard for sharing specimen occurrence data via a tab-separated text file. This file can stand alone or be part of a Darwin Core Archive (DwCA) zipped file. These (your) data are mapped to Darwin Core terms, TaxonWorks specific elements, or your own custom Data Attributes (details below). Support for importing observations is underway. 

- sample checklist (link)
- sample specimen record dataset (link)

### Batch imports
There are various batch importers available within the UI (user interface). These are polished to differing degrees and have various benefits and limitations. The required format is described in the UI. All batch loaders are two-step, allowing for (and requiring) a preview of results before inserting them into the database.

- To explore available batch loaders click on a Data card in the Hub. If batch loader(s) are available then then the batch load link will be enabled. 
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
  - simple batchload
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
To upload occurrence (vouchered specimen data records) data, TW offers the ability to use a DwC Archive file. This provides options to share data that maps to concepts (aka terms, elements, properties) in Darwin Core, but also to specific fields in TaxonWorks and to custom "Data Attribute" fields you can add, if need

For these **occurrence datasets** one needs to map each term to be imported. This next section explains the different mapping options available and steps needed to get started.

### Precursor steps to DwC-A import
- For your dataset, you may need to create one or more **namespaces.** These namespaces allow TW to a) track uniqueness of each object and b) group these objects. For example, in your collection of physical objects, your catalog numbers may have duplicates if your specimens have come from other instituion collections in the past. Creating namespaces in TW is simple to do, but spending some time on this before upload can simplify the process. Namespaces also need to be unique in your TW Project (first-come, first-served). [NEED EXAMPLES here].
- In addition, if your dataset has terms not mappable to TW concepts or the DwC terms we currently support, you'll need to create custom "Data Attributes." These need to be created before upload (ideally). If you don't, then records with these data will not upload but are easy for you to address after other records import.
- For some **biocuration** data in TW you may find you need to add the group and accepted values for a given class before upload (e.g. group=caste and class=queen).

### DwC terms mappings
Next please note the dwc terms that TW currently recognizes. Also see examples below for how to map to existing TW terms, custom data attributes, and biocuration information.

#### Record-level class

Term|Mapping
---|---
`type` | It is checked that it equals `PhysicalObject` before allowing the record to be imported. If the value is empty or term not present it is assumed it is a `PhysicalObject`
`institutionCode` | Selects the repository for the specimen that is registered with an acronym equal to this value
`collectionCode` | Paired with `institutionCode` it is used to select the namespace for `catalogNumber` from a user-defined lookup table in import settings, the value itself is not imported.
`basisOfRecord` | It is checked that it equals `PreservedSpecimen` before allowing the record to be imported. If the value is empty or term not present it is assumed it is a `PreservedSpecimen`

#### Occurrence class

Term|Mapping
---|---
`catalogNumber` | The identifier value for Catalog Number local identifier. The namespace is selected from the namespaces lookup table in import settings queried by `institutionCode`:`collectionCode` pair.
`recordedBy` | It is imported as-is in verbatim collectors field of the collecting event. Additionally, the value is parsed into people and assigned as collectors of the CE. Previously existing people is not used unless the data origin is the same dataset the record belongs to, otherwise any missing people is created.
`individualCount` | The total individuals count of the specimen record.
`sex` | Selects the biocuration class from the "sex" biocuration group to be assigned as biocuration classification for the specimen.
`preparations` | Selects an existing preparation matching the name with this value

#### Event class

Term|Mapping
---|---
`fieldNumber` | Verbatim trip identifier of collecting event
`eventDate` | The ISO8601-formatted date is split into start year, month and day collecting event fields. If the value is composed of two dates separated by `/`, then rightmost date is used as end date and split in the same way as start date. If data contradicts dates from other non-empty date-related terms the record will fail to import
`eventTime` | Time is split into time start hour, minute and second of collecting event
`startDayOfYear` | Using `year` and the value for this term month and day are calculated and stored in start year, month and day collecting event fields. If the computed value contradicts dates from other non-empty date-related terms the record will fail to import
`endDayOfYear` |  Using `year` and the value for this term month and day are calculated and stored in end year, month and day collecting event fields. If the computed value contradicts dates from other non-empty date-related terms the record will fail to import
`year` | The start date year of the collecting event. If the value contradicts dates from other non-empty date-related terms the record will fail to import
`month` | The start date month of the collecting event. If the value contradicts dates from other non-empty date-related terms the record will fail to import
`day` | The start date day of the collecting event. If the value contradicts dates from other non-empty date-related terms the record will fail to import
`verbatimDate` | Verbatim date of the collecting event
`habitat` | Verbatim habitat of the collecting event
`samplingProtocol` | Verbatim method of the collecting event
`fieldNotes` | Field notes of the collecting event

#### Location class

Term|Mapping
---|---
`fieldNumber` | Verbatim trip identifier of collecting event

#### Taxon class

Term|Mapping
---|---
`nomenclaturalCode` | Selects the nomenclatural code for the taxon ranks used when creating protonyms. The value itself is not imported
`kingdom` | Creates (unless already present) a protonym at kingdom rank
`phylum` | Creates (unless already present) a protonym at phylum rank
`class` | Creates (unless already present) a protonym at class rank
`order` | Creates (unless already present) a protonym at order rank
`family` | Creates (unless already present) a protonym at family rank
`genus` | Ignored. Extracted from `scientificName` instead
`subgenus` | Ignored. Extracted from `scientificName` instead
`specificEpithet` | Ignored. Extracted from `scientificName` instead
`infraspecificEpithet` | Ignored. Extracted from `scientificName` instead
`scientificName` | Several protonyms created (only when not present already) with their corresponding ranks and placements
`taxonRank` | The taxon rank of the most specific protonym
`higherClassification` | Several protonyms created (only when not present already) with their corresponding ranks and placement. In case a protonym was not already present, only family-group names will be created, names with classsification higher than family-group not previously registered will result in error. Names at genus rank or lower are ignored and extracted from `scientificName` instead
`scientificNameAuthorship` | Verbatim author of most specific protonym

### TW non-standard mappings

The DwC importer has some TW-specific mappings that are neither DwC core terms nor extensions but direct mappings to predicates in your projects imported as data attributes for collection objects and collecting events, biocuration groups and classes, and as an advanced-use feature you may have direct mappings to model fields.

**IMPORTANT**: If submitting an actual DwC-A zip file and not tab-separated text file or spreadsheet, this TW-specific mappings have to be placed as headers in the core table, and not in meta.xml. If you are replacing a mapping from meta.xml, you must make sure to comment it out and also if inserting colums make sure you do the appropriate adjustments to avoid collision.

#### Mappings to project predicates

In cases where you need to import predicate values targetting the imported collection object or collecting event you may do so by naming the column with a pattern like `TW:DataAttribute:<target_class>:<predicate_identifier>`.
`<target_class>` may be `CollectionObject` or `CollectingEvent`, and the `<predicate_identifier>` may be the either the name of the predicate or its URI. As an example if you have a predicate registered with name `ageInDays` and URI `http://rs.gbif.org/terms/1.0/ageInDays`, both `TW:DataAttribute:CollectionObject:ageInDays` and `TW:DataAttribute:CollectionObject:http://rs.gbif.org/terms/1.0/ageInDays` can be used to refer to the same predicate.

#### Mappings to biocuration groups and classes

The importer is able to map `sex` into the appropriate biocuration group and select the approriate class according to the value. For additional mappings you may use a special column name pattern to select a biocuration group like `TW::BiocurationGroup:<group_identifier>` where `<group_identifier>` can be the name of the biocuration group or its URI. In addition the values must match an existing biocuration class and you may use either its name or URI. For example, if you have a biocuration group registered with name `Caste` and URI `urn:example:ants:caste` and biocuration class with name `Queen` and URI `urn:example:ants:caste:queen` the following examples do all create the same biocuration classification:
|Caste|urn:example:ants:caste|
|---|---|
Queen|urn:example:ants:caste:queen
urn:example:ants:caste:queen|Queen
#### Mappings to DwC predicates

Whenever the importer sees that your project has custom attributes for collecting events and/or collection objects that matches Darwin Core URI terms (`http://rs.tdwg.org/dwc/terms/<term>`), them will be imported as data attributes regardless of any existing mapping of the same field. This allows to preserve verbatim dataaset value for reference as also to import data from terms not supported by the importer.

#### Direct mapping to TW model fields (advanced)

This is an advance mapping and requires knowledge of the underlying TW models. The pattern is `TW:<model_class>:<field>` where model can be either `CollectionObject` or `CollectingEvent`, and `<field>` can be the ones listed below.

|Class|fields|
|---|---|
|`CollectionObject`|`buffered_collecting_event`, `buffered_determinations`, `buffered_other_labels`, `total`,
|CollectingEvent|`document_label`, `print_label`, `verbatim_label`, `field_notes`, `formation`, `group`, `lithology`, `max_ma`, `maximum_elevation`, `member`, `min_ma`, `minimum_elevation`, `elevation_precision`, `start_date_day`, `start_date_month`, `start_date_year`, `end_date_day`, `end_date_month`, `end_date_year`, `time_end_hour`, `time_end_minute`, `time_end_second`, `time_start_hour`, `time_start_minute`, `time_start_second`, `verbatim_collectors`, `verbatim_date`, `verbatim_datum`, `verbatim_elevation`, `verbatim_geolocation_uncertainty`, `verbatim_habitat`, `verbatim_latitude`, `verbatim_locality`, `verbatim_longitude`, `verbatim_method`, `verbatim_trip_identifier`

## Exports

## Requesting a new import or export type 


