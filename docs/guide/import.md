---
sidebarPosition: 60 
---

# Import

_Many projects start with imports, and target [Exports](/guide/export), the former are detailed here._

For strategies on migrating whole projects see [Migrate to TaxonWorks](/guide/migrate-to-TaxonWorks).  This includes an overview of the many ways that data can be added to TaxonWorks.

## Batch loaders
There are various batch importers available within the [UI](/about/glossary#ui). These are polished to differing degrees and have various benefits and limitations. The required format, and often an example spreadsheet, is provided in the UI. All batch loaders are two-step, allowing for (and requiring) a preview of results before inserting them into the database.

- To explore available batch loaders click on a Data card in the Hub. If batch loader(s) are available then then the batch load link will be enabled. 
- Batch importers largely target tab-separated text files, though this is not exclusively the case.
- Notable batch loaders are found in the TaxonNames, Otus, and Sources data cards, though others exist. 
- Explore various batch loaders (each data card highlighted in yellow has associated batch loaders at this writing).

### Try a batch loader

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

## Darwin Core Archive (DwC-A) import

To upload occurrence data, TW offers the ability to use a DwC Archive file format. _For occurrences, the importer is presently limited to vouchered specimen data records._

To use this approach you must have your specimen data in a single spreadsheet-style format that can be export as "CSV".

Preparing for an import follows the following general procedures:
* [Map your data](/guide/import#map-your-data) (provide a column header) for each column of data to be imported
* [Configure TaxonWorks for your DwC import](/guide/import#configure-taxonworks-for-your-dwc-import) by creating records that will be used during the import process

::: tip 
As part of your process you may need to go back and forth between mapping and configuring
:::

### Map your data

The DwC importer provides flexibility in importing diverse data. These fall in to several types:
1) DwC terms
2) User customizable data attributes
3) User customizable biocuration classes
3) TaxonWorks' model specific attributes

As headers, these will look like this: 

`catalogNumber`|`TW:DataAttribute:CollectionObject:color`|`caste`|`TW:CollectingEvent:verbatim_collectors`
---|---|---|---
_A DwC term mapping_ | _A user customizable data attribute_ | A TW biocuration attribute | _A TW specific attribute_ 

::: tip
A first step is to go through your data and figure out which column header type you'll need. Start by matching to supported DwC terms, then go on from there.
:::

#### DwC term mapping

When going from DwC, a flat format, to TaxonWorks your moving your data from rows to Things. We can group the DwC terms into classes to reflect where they end up in TaxonWorks.

##### Record-level class

Term|Mapping
---|---
`type` | It is checked that it equals `PhysicalObject` before allowing the record to be imported. If the value is empty or term not present it is assumed it is a `PhysicalObject`
`institutionCode` | Selects the repository for the specimen that is registered with an acronym equal to this value
`collectionCode` | Paired with `institutionCode` it is used to select the namespace for `catalogNumber` from a user-defined lookup table in import settings, the value itself is not imported.
`basisOfRecord` | It is checked that it equals an expected valid value for term, e.g. `PreservedSpecimen` or `FossilSpecimen` before allowing the record to be imported. If the value is empty or term not present it is assumed it is a `PreservedSpecimen`. _For compatibility with GBIF datasets, `PRESERVED_SPECIMEN` is also allowed._

##### Occurrence class

Term|Mapping
---|---
`catalogNumber` | The identifier value for Catalog Number local identifier. The namespace is selected from the namespaces lookup table in import settings queried by `institutionCode`:`collectionCode` pair. If you require several records to share the same Catalog Number identifier, you may do so by enabling `Containerize specimen with existing ones when catalog number already exists` import setting or by distinct `recordNumber` value.
`recordNumber` | The identifier value for Record Number local identifier. If not empty the record requires to have the short name of the Namespace to use in a TW-specific column named `TW:Namespace:RecordNumber`. This DwC term enables the re-use of the same `catalogNumber` of both existing collection objects and records in the dataset, as the importer assigns related specimens to a container to allow sharing the same Catalog Number identifier.
`recordedBy` | It is imported as-is in verbatim collectors field of the collecting event. Additionally, the value is parsed into people and assigned as collectors of the CE. Previously existing people are not used unless the data origin is the same dataset the record belongs to, otherwise any missing people are created.
`individualCount` | The total number of entities associated with the specimen record (e.g. this record may be for a "lot" containing 6 objects).
`sex` | Selects the biocuration class from the "sex" biocuration group to be assigned as biocuration classification for the specimen.
`preparations` | Selects an existing preparation matching the name with this value.

##### Event class

Term|Mapping
---|---
`eventID` | The identifier for the Collecting Event. If not empty the importer requires a Namespace for it. You may specify a Namespace in a TW-specific column named `TW:Namespace:EventID` by either using a global identifier type (e.g. `Identifier::Global::Uuid`, `Identifier::Global::Lsid`, etc.), or the short name of the Namespace for the Event local identifier. If no namespace is provided, the importer assigns a dataset-specific one with a synthetic name that you can later change. When an existing Collecting Event already has this identifier, the importer re-uses it and the event-related data is ignored.
`fieldNumber` | The identifier value for Field Number local identifier. If not empty the record requires to have the short name of the Namespace to use in a TW-specific column named `TW:Namespace:FieldNumber`. The verbatim trip identifier is also populated by this DwC term. When an existing Collecting Event already has this identifier, the importer re-uses it and the event-related data is ignored. IMPORTANT: if a Collecting Event is already matched by `eventID`, this identifier must exactly match the existing one, otherwise the importer will reject the record. Same rejection will occur if mismatch happens the other way around.
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

##### Location class

Term|Mapping
---|---
`fieldNumber` | Verbatim trip identifier of collecting event

##### Identification class

Term|Mapping
---|---
`identifiedBy` | A list (concatenated and separated) of names of people, groups, or organizations who assigned the Taxon to the subject. If possible, separate the values in a list with space vertical bar space \| (known as a pipe). (e.g. <code>Theodore Pappenfuss &#124; Robert Macey</code>)
`dateIdentified` | The date on which the subject was determined as representing the Taxon. Best practice is to use a date that conforms to ISO 8601-1:2019 [see examples](https://dwc.tdwg.org/terms/#dwc:dateIdentified).

##### Taxon class

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

#### TaxonWorks mappings

The DwC importer task includes some TW-specific mappings that are neither DwC core terms nor in any DwC extension term lists but instead, direct mappings to predicates in your projects imported as data attributes for collection objects and collecting events, biocuration groups and classes, and as an advanced-use feature you may have direct mappings to model fields.

::: warning
 If submitting an actual DwC-A zip file and not tab-separated text file or spreadsheet, this TW-specific mappings have to be placed as headers in the core table, and not in meta.xml. If you are replacing a mapping from meta.xml, you must make sure to comment it out and also if inserting colums make sure you do the appropriate adjustments to avoid collision.
:::

_See [Configure TaxonWorks for your DwC import](/guide/import#configure-taxonworks-for-your-dwc-import) for how to create the records referenced in these mappings._

##### Mappings to project predicates

In cases where you need to import predicate values targetting the imported collection object or collecting event you may do so by naming the column with a pattern like `TW:DataAttribute:<target_class>:<predicate_identifier>`.
`<target_class>` may be `CollectionObject` or `CollectingEvent`, and the `<predicate_identifier>` may be the either the name of the predicate or its URI. As an example if you have a predicate registered with name `ageInDays` and URI `http://rs.gbif.org/terms/1.0/ageInDays`, both `TW:DataAttribute:CollectionObject:ageInDays` and `TW:DataAttribute:CollectionObject:http://rs.gbif.org/terms/1.0/ageInDays` can be used to refer to the same predicate.

##### Mappings to biocuration groups and classes

The importer is able to map `sex` into the appropriate biocuration group and select the approriate class according to the value. For additional mappings you may use a special column name pattern to select a biocuration group like `TW::BiocurationGroup:<group_identifier>` where `<group_identifier>` can be the name of the biocuration group or its URI. In addition the values must match an existing biocuration class and you may use either its name or URI. For example, if you have a biocuration group registered with name `Caste` and URI `urn:example:ants:caste` and biocuration class with name `Queen` and URI `urn:example:ants:caste:queen` the following examples do all create the same biocuration classification:
|Caste|urn:example:ants:caste|
|---|---|
Queen|urn:example:ants:caste:queen
urn:example:ants:caste:queen|Queen

##### Mappings to DwC predicates

Whenever the importer sees that your project has custom attributes for collecting events and/or collection objects that matches Darwin Core URI terms (`http://rs.tdwg.org/dwc/terms/<term>`), them will be imported as data attributes regardless of any existing mapping of the same field. This allows to preserve verbatim dataaset value for reference as also to import data from terms not supported by the importer.

##### Direct mapping to TW model fields

This is an advance mapping and requires knowledge of the underlying TW models. The pattern is `TW:<model_class>:<field>` where model can be either [`CollectionObject`](https://docs.taxonworks.org/develop/Data/models.html#collection-object) or [`CollectingEvent`](https://docs.taxonworks.org/develop/Data/models.html#collecting-event), and `<field>` can be the ones listed below.

|Class|fields|
|---|---|
|`CollectionObject`|`buffered_collecting_event`, `buffered_determinations`, `buffered_other_labels`, `total`,
|`CollectingEvent`|`document_label`, `print_label`, `verbatim_label`, `field_notes`, `formation`, `group`, `lithology`, `max_ma`, `maximum_elevation`, `member`, `min_ma`, `minimum_elevation`, `elevation_precision`, `start_date_day`, `start_date_month`, `start_date_year`, `end_date_day`, `end_date_month`, `end_date_year`, `time_end_hour`, `time_end_minute`, `time_end_second`, `time_start_hour`, `time_start_minute`, `time_start_second`, `verbatim_collectors`, `verbatim_date`, `verbatim_datum`, `verbatim_elevation`, `verbatim_geolocation_uncertainty`, `verbatim_habitat`, `verbatim_latitude`, `verbatim_locality`, `verbatim_longitude`, `verbatim_method`, `verbatim_trip_identifier`

### Configure TaxonWorks for your DwC import

To import your DwC you many need to create several types of things in TaxonWorks. These include [namespaces](Manual/identifiers#namespaces) and [controlled vocabulary terms](Manual/customization#controlled-vocabulary-terms).

#### Namespaces

In the context of the DwC importer namespaces allow TW to
- Assign an Identifier as a CatalogNumber
- Track uniqueness of each object during the import, helping TW to normalize your data, turning it from rows to Things
- Group your Identifiers (and therefor the CollectionObjects they reference) as coming from a specific place

#### Controlled vocabulary terms

There are several kinds of CVTs that may be used in the import process.

::: tip
All CVTs are created and managed via the `Manage controlled vocabulary terms task`.
::: 

##### Predicates 

Think of Predicates as your custom column headers. Predicates are referenced in DataAttributes. Use a Predicate when you want to assign many different values (have rows with many different values) under one heading.

##### Biocuration classes

Think of biocuration classes as custom attributes for your collection objects, things like  'male', 'pupa', or 'larva'.  These let you assign values useful for your curation of your specimens in a controlled way, ensuring problems like 'M.', 'MALE', 'ale' don't happen in what might otherwise be a "Sex" field. [TODO: reference groups?]. This approach is used when your rows have only a few specific values across the dataset.

### Unmapped columns

Column headers that can't be linked via one of the 3 mechanisms are ignored during the import process. This means its important to do some trial runs in a sandbox, or with a smaller dataset to see that your values are mapping over. The `Browse collection object` task is a good place to check this.

::: danger 
No warning is given when columns do not map, they are simply ignored.
:::

::: tip
You can augment your data after import with batch update functionality inside TW. Carefully planning your overal import process can lead to a more efficient overall approach.  Sometimes its easier to work in spreadsheets, sometimes within a database.
:::

## Drag and drop

Drag and drop loading of images and documents are accessible in various places in including the [Radial annotator](/about/glossary#radial-annotator), and, notable, `Tasks -> New image`.

## Record by record 
When first learning TaxonWorks, entering records one-at-a-time offers you the opportunity to learn about more of the features in TW and get a feel for how you and others experience the UI. 

For example, you want to enter a specimen record. You have two Tasks enabling you to do this. Choose to use Comprehensive Specimen Digitization Task or the Simple New Specimen Task.

### Try Simple New Specimen
In your project, try creating a simple new specimen record. 

- Note you will need to select a namespace. You may find you need to add a namespace before you can do this TW task. Adding a value for namespace ensures your uploaded data records will be unique inside your TW project and across TW projects. In your project, you may also need more than one namespace. [Use Tommy’s INHS Insect Collection as an example, with 12 different namespaces that effectively group the various collections housed at INHS ENT].

- If you tried the OTU batch loader you can pick one of your OTUs for the name to assign to this specimen.

- Add an image if you wish

- Select the Preparation type for this specimen. You may need to add a new value to the dropdown using the New preparation type task. 

## Coming from other software

### Scratchpads
We are in the process of exploring two routes to come from Scratchpads to TaxonWorks.  

* The DwC import should work well for occurrence data that is based on collected objects.
* The SFG team is has worked with a select number of individual Scratchpad curators to script the process of transferring their datadata. Contact us if you are interested in what this approach entails. Note that this process takes programming effort that is a limited resource within the SFG.
