---
sidebarPosition: 60
---

# Import

_Many projects start with imports, and target [Exports](/guide/export), the former are detailed here._

For strategies on migrating whole projects see [Migrate to TaxonWorks](/guide/migrate-to-TaxonWorks). This includes an overview of the many ways that data can be added to TaxonWorks.

## Batch loaders

There are various batch importers available within the [UI](/about/glossary#ui). These are polished to differing degrees and have various benefits and limitations. The required format, and often an example spreadsheet, is provided in the UI. All batch loaders are two-step, allowing for (and requiring) a preview of results before inserting them into the database.

- To explore available batch loaders click on a Data card in the Hub. If batch loader(s) are available then then the batch load link will be enabled.
- Batch importers largely target tab-separated text files, though this is not exclusively the case.
- Notable batch loaders are found in the TaxonNames, Otus, and Sources data cards, though others exist.
- Explore various batch loaders (each data card highlighted in yellow has associated batch loaders at this writing).

### Try a batch loader

In your test project,

1. Go to the data tab
2. Select the Otu Data card
3. Click “batch load”
4. See instructions in the UI for expected / accepted data types and format.
5. Create your own file or use this [test file](link)
   Header column = otu_name
   Blank lines are skipped
   Tab-delimited format, UTF-8 encoding, Unix line-endings required
6. Browse to your file to select it, click preview
7. If data looks as expected, browse to select that file again and click create.

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

### Checklist Data

To upload checklist data, this method supports simple and somewhat more complex taxon name lists. Below you will find examples to guide how to create your own datatset and datasets you can use to try in a sandbox.

### Preparing a Checklist

- Please check the table below for terms (fields) the importer recognizes and whether or not certain fields are required or have dependencies (e. g. formatting, identifiers). This is the **mapping** step.
- Identifiers are required in the following columns for this method to work (`taxonID`, `acceptedNameUsageID`, `parentNameUsageID`).
  - The `originalNameUsageID` column must be present for the dataset to import. The software will generate the numbers for you for this column if you don't fill it out (it duplicates the number in the taxonID column).
- Running the exact same dataset in twice will not duplicate names in the case where
  - a) the `parentNameUsageID` _is null_ AND
  - b) you use the `Settings` option to match on existing names where the `parentNameUsageID` is null.
  - IF `parentNameUsageID` _is null_ and you do not use the `Settings` option, the names will be entered (again) as children of `Root` and will say `[GENUS Unspecified]`. These would need to be cleaned up by hand after import.
- Your data in your spreadsheet first goes through a `Staging` step. You will be able to edit data in each cell at the point, if need be, before you click on `Import`.
- Each name you want to import must have its own record row in your dataset. For example, if you will be including **higher classification** data, each of those higher taxa must have their own row. If not, your higher classification data for each taxa **will not import.**
- Your dataset needs to be in xlsx, comma (csv), or tab-separated (txt, tsv) format.
- For best results for how diacritics are handled (like umlauts or tildas), ensure your data are UTF-8 encoded.

:::tip

- This method imports only. It does not update (e. g. fix typos) on a re-try or add more data to a given exiting object in the database.
- Case of `taxonRank` values doesn't seem to matter.
- IF you want to match on existing names, what matters are [TO BE VERIFIED]: only the `sciName` + `scientificNameAuthorship`. (Note a change to higher classification doesn't seem to matter to making the match).
  :::

| Term                                                 | Mapping                                                                                                           |
| ---------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `taxonID`                                            | REQUIRED - a unique identifier for the taxa in this record row                                                    |
| `parentNameUsageID`                                  | REQUIRED - a unique identifier for asserting the correct parent                                                   |
| `parentNameUsage`                                    |
| `acceptedNameUsageID`                                | REQUIRED - if the name is a valid one, this matches the `taxonID`                                                 |
| `scientificName`                                     | REQUIRED                                                                                                          |
| `kingdom`                                            |
| `class`                                              |
| `order`                                              |
| `family`                                             |
| `genus`                                              | REQUIRED                                                                                                          |
| `subgenus`                                           |
| `specificEpithet`                                    | REQUIRED                                                                                                          |
| `infraspecificEpithet`                               |
| `taxonRank`                                          | REQUIRED - Family, Genus, Tribe, Subtribe, Species, etc (not case sensitive)                                      |
| `scientificNameAuthorship`                           | REQUIRED\* - Must provide IF you want to match on existing names in the db (and same format)                      |
| `originalNameUsageID`                                | REQUIRED - Column must be present. IF all cells empty, software will populate them with taxonID at `Staging` step |
| `nomenclaturalCode`                                  | ICZN, ICN - This can be selected in the importer; does not have to be in the spreadsheet                          |
| `TW:TaxonNameClassification:Latinized:Gender`        | note maps directly to the TW datamodel; see TW:\<data model\>:...                                                 |
| `TW:TaxonNameClassification:Latinized:PartOfSpeech`  | note maps directly to the TW datamodel; see TW:\<data model\>:...                                                 |
| `TW:TaxonNameRelationship:incertae\_sedis\_in\_rank` | note maps directly to the TW datamodel; see TW:\<data model\>:...                                                 |
| `TW:TaxonNameClassification:Iczn:Fossil`             | note maps directly to the TW datamodel; see TW:\<data model\>:...                                                 |

|
| **need to search codebase to see if these are supported on import** |
| taxonomicStatus | valid, incertae sedis, obsolete combination |
| originalNameUsage |
| cultivarEpithet |
| nameAccordingTo |
| nomenclaturalStatus |
| taxonRemarks |
| references |

### The Checklist Importer

What follows are the simplest steps when uploading names into an empty database. It is possible to **match** on existing names in your TW project in the event you are importing children of those names, for example.

1. From the `Task` list select `Darwin Core Archive (DwC-A) import`

#left[DwC-A Checklist Importer Task](https://sfg.taxonworks.org/s/0wsyos[shows the task card labeled DwC-A Import])

2. In the importer interface, enter a `Description` for your dataset

#left[DwC-A Checklist Importer Screen in TaxonWorks](https://sfg.taxonworks.org/s/fh5j3y[shows layout of drag and drop importer with description, nomencaltural code, and dataset type fields])

3. Next, select the `Dataset type`. In this case, `Checklist`
4. Then, select the relevant `Nomenclature code`
5. Once you prepare your dataset, click to upload it by picking or drag and drop the file.

   - Depending on the file type (xlsx, csv, txt, tsv) you will need to verify the **separator** (delimiter) for the fields and strings. With xlsx files, the importer figures this out. With csv (comma) and txt (tab) you will get a pop-up asking you to confirm or pick the correct options.
   - In either of these delimiter pop-ups, after you pick or verify, click `upload`.

   #left[Checklist CSV file delimiter verification](https://sfg.taxonworks.org/s/6dyixc [popup to verify the delimiters used in the csv file to be uploaded])

   #left[Checklist TXT file delimiter verification](https://sfg.taxonworks.org/s/35agr4 [popup to verify the delimiters used in the text file to be uploaded])

6. The software will `Stage` your data now (it will take a few seconds or a bit longer depending on the size of the import).

#left[The DwC-A Importer `Staging` step](https://sfg.taxonworks.org/s/srblkw[showing the data ready to import with editable fields before import]) 7. In the resulting staged view, you can edit data in cells (only before the actual import)

- Note at this point, you can sort on the columns and replace values in all or any of the cells if necessary (you cannot edit the header rows).
  - Note your original dataset is stored permanently, but not with values you change after `Staging`.

7. Next click `Import`

- Names will import and you can click on `Browse` for a given row in your dataset to see the data in TW.

#left[The DwC-A Checklist Importer `Browse` after upload](https://sfg.taxonworks.org/s/25r8ml[shows the have been imported and gives you a button per row to see each imported record])

8. If you get error messages, rows with errors don't upload. You can click where it says `Error` to get the error message.

- For some errors, you can fix them in the spreadsheet and then try to `Import` that row/s again.
- For example, you might discover an error message **unparsed tail** for a given cell. Sometimes, it might indicate their is an encoding (diacritic) issue or a hidden character. Try retyping the value for that cell and then click to try re-import of that errored row.

9. In the `Import` pop-up, note you can select `Retry errored records` where you've changed the data in the relevant cells and then click `Start import`.

#left[DwC-A Checklist Retry errored rows](https://sfg.taxonworks.org/s/z1sc7c[pop up with option to retry import of errored record rows that did not upload])

10. You can always download your original dataset.

#### Sample Datasets

We offer five different example datasets (in various file formats) differing in complexity and source (e. g. one of them is from the DwC-A file from a [Plazi Treatment Bank Treatment](https://treatment.plazi.org/GgServer/summary/FFA0AE675753FFF9FFC5FFF1FFA9530C)). Please use them to try out the DwC-A Checklist Importer and as models for your own dataset tests and uploads.

#### Simplest Basic Checklist

This dataset inserts a genus and 5 species in that genus. We provide this sample dataset in 3 file formats, csv, txt, xlsx. It was used to upload names into an empty project (no records in the database).

- [Basic sample dataset - CSV](/examples/sample-checklist-files/basic-simplest-checklist-20250301.csv)
- [Basic sample dataset - TXT](/examples/sample-checklist-files/basic-simplest-checklist-20250301.txt)
- [Basic sample dataset - XLSX](/examples/sample-checklist-files/basic-simplest-checklist-20250301.xlsx)

::: tip
Import `Settings` did not seem to matter in this case since we were not trying to macth on any existing names in the database.

<!---
see SANDWORM 07, 08 -->

:::

#left[Simple DwC-A Checklist](https://sfg.taxonworks.org/s/t5nljb[image showing fields used and sample data for this simplest upload])

#### A Published Genus with many new species

In this use case, we take advantage of the Darwin Core Archive formatted **treatment** files that Plazi produces when it pulls names out of existing published literature. With these treatment files you need to add or adjust very few fields (term) headers and the identifiers you need are already in place. This dataset adds 300 names, one new genus and 299 new children of that genus. We did test where the validly published genus was also NOT already in the database. We then also tested how to match on an existing Genus already in the database. See the process below.

If you are adding new children to an existing genus in the database, then be sure to

- Use the `Settings` option to match on existing names in the database. Note well that in order to match on existing, the `scientificName` string and `scientificNameAuthorship` in the dataset must match the database.

Here is one simple version (derived from Plazi Treatment Bank taxa.txt from inside the DwC-A file for a given treatment). This file will import 300 names. NOT all fields in this file are imported.

1. From the original taxa.txt file

   - we removed all the synonyms, just leaving new species
   - we added a row for the Genus, _Galeopsomyia_, to match the parent in the TW database
   - in the genus row, we put a `1` for `taxonID`, `acceptedNameUsageID`, and `originalNameUsageID`.
   - in the `parentNameUsageID` column we added a `1` for all the species
   - for the `scientificNameAuthorship` for the genus row, we made sure to match the Author name as it appears in the database.
   - we edited the **combinationAuthor** field to match the paper (there was a parsing error in the Plazi Treatment which has been fixed)

2. Dataset

- [Original zipped treatment containing multiple files](/examples/sample-checklist-files/plazi-sample-checklist/FFA0AE675753FFF9FFC5FFF1FFA9530C.zip)
- [Original taxa.txt file](/examples/sample-checklist-files/plazi-sample-checklist/FFA0AE675753FFF9FFC5FFF1FFA9530C\taxa.txt)
- [Modified taxa.txt file](/examples/sample-checklist-files/plazi-treatment-text-file-modified.txt)

3. So, if you have names to upload, it can pay to check [Plazi Treatment Bank](http://plazi.org/treatmentbank/) to see if they have already parsed the names of interest from that published literature.

To test the entire scenario, have a look at the [Modified taxa.txt file](/examples/sample-checklist-files/plazi-treatment-text-file-modified.txt) and try using it to import (into a sandbox account). Columns not recognized by the importer will be ignored.

**Note** there are other usefule files in the Plazi Treatment DwC-A pkg

- The ([references.txt](/examples/sample-checklist-files/plazi-sample-checklist/FFA0AE675753FFF9FFC5FFF1FFA9530C/references.txt)) that specifies the page numbers for each new taxon name.
- With some work, we could adjust the importer to add or match on an existing source
- We could imaging, on import, adding a citation for that name inside that source on the specific page.
- With the [multimedia.txt](/examples/sample-checklist-files/plazi-sample-checklist/FFA0AE675753FFF9FFC5FFF1FFA9530C/multimedia.txt) data we could link to images (figures) that Plazi processing has deposited in Zenodo as part of creating the treatment.
- Using the [occurrences.txt](/examples/sample-checklist-files/plazi-sample-checklist/FFA0AE675753FFF9FFC5FFF1FFA9530C/occurrences.txt) we could pull in data from the materials examined information for each specimen cited in the treatement.

Meanwhile, you can use `Citations by Source` to easily add the source page numbers provided in the treatment to each citation record in TW.

::: tip
Do check the page numbers that the treament file asserts to ensure the paper was parsed correctly.
:::

#### Bryozoa names from a website

In this example set, we started with names we could see on the web (bryozoa.net) for the [year 2008](http://bryozoa.net/annual/taxa2008.html). The following files differ only in file format. Each will import 171 names. Note that to create this file, we had to create the identifier columns for (`taxonID`, `acceptedNameUsageID`, `parentNameUsageID`, and `originalNameUsageID`). (Some testing suggests that you can leave `originalNameUsageID empty and the upload will work. The column must be present however).

- [Bryozoa 2008 - CSV](/examples/sample-checklist-files/bryozoa-2008names-checklist.csv)
- [Bryozoa 2008 - TSV](/examples/sample-checklist-files/bryozoa-2008names-checklist.tsv)
- [Bryozoa 2008 - XLSX](/examples/sample-checklist-files/bryozoa-2008names-checklist.xlsx)

#### More Complex Checklists

Delving into more complex scenarios (synonyms for example) here are some examples for you to look at as you plan your name upload strategy. Note that [in these datasets](https://github.com/SpeciesFileGroup/taxonworks/tree/development/spec/files/import_datasets/checklists), the names existed in a source database. So the identifiers were from their own database. This set of upload test files comes from work done by the developer who wrote the `Checklist` Importer code.

#### Source data from Checklist Bank

[See recent work](https://github.com/speciesfilegroup/taxonworks/issues/3658) to show how you can use / modify datasets from Checklist Bank for importing in to Taxonworks.

---

### Occurrence Data

To upload occurrence data, TW offers the ability to use a DwC Archive file format. _For occurrences, the importer is presently limited to vouchered specimen data records._

To use this approach you must have your specimen data in a single spreadsheet-style format that can be export as "CSV".

Preparing for an import follows the following general procedures:

- [Map your data](/guide/import#map-your-data) (provide a column header) for each column of data to be imported
- [Configure TaxonWorks for your DwC import](/guide/import#configure-taxonworks-for-your-dwc-import) by creating records that will be used during the import process

::: tip
As part of your process you may need to go back and forth between mapping and configuring
:::

#### Map your data

The DwC importer provides flexibility in importing diverse data. These fall in to several types:

1. DwC terms
2. User customizable data attributes
3. User customizable biocuration classes
4. TaxonWorks' model specific attributes

As headers, these will look like this:

| `catalogNumber`      | `TW:DataAttribute:CollectionObject:color` | `caste`                    | `TW:CollectingEvent:verbatim_collectors` |
| -------------------- | ----------------------------------------- | -------------------------- | ---------------------------------------- |
| _A DwC term mapping_ | _A user customizable data attribute_      | A TW biocuration attribute | _A TW specific attribute_                |

::: tip
A first step is to go through your data and figure out which column header type you'll need. Start by matching to supported DwC terms, then go on from there.
:::

#### DwC term mapping

When going from DwC, a flat format, to TaxonWorks your moving your data from rows to Things. We can group the DwC terms into classes to reflect where they end up in TaxonWorks.

##### Record-level class

| Term              | Mapping                                                                                                                                                                                                                                                                                                                   |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`            | It is checked that it equals `PhysicalObject` before allowing the record to be imported. If the value is empty or term not present it is assumed it is a `PhysicalObject`                                                                                                                                                 |
| `institutionCode` | Selects the repository for the specimen that is registered with an acronym equal to this value                                                                                                                                                                                                                            |
| `collectionCode`  | Paired with `institutionCode` it is used to select the namespace for `catalogNumber` from a user-defined lookup table in import settings, the value itself is not imported.                                                                                                                                               |
| `basisOfRecord`   | It is checked that it equals an expected valid value for term, e.g. `PreservedSpecimen` or `FossilSpecimen` before allowing the record to be imported. If the value is empty or term not present it is assumed it is a `PreservedSpecimen`. _For compatibility with GBIF datasets, `PRESERVED_SPECIMEN` is also allowed._ |

##### Occurrence class

| Term              | Mapping                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `catalogNumber`   | The identifier value for Catalog Number local identifier. The namespace is selected from the namespaces lookup table in import settings queried by `institutionCode`:`collectionCode` pair. If you require several records to share the same Catalog Number identifier, you may do so by enabling `Containerize specimen with existing ones when catalog number already exists` import setting or by distinct `recordNumber` value.            |
| `recordNumber`    | The identifier value for Record Number local identifier. If not empty the record requires to have the short name of the Namespace to use in a TW-specific column named `TW:Namespace:RecordNumber`. This DwC term enables the re-use of the same `catalogNumber` of both existing collection objects and records in the dataset, as the importer assigns related specimens to a container to allow sharing the same Catalog Number identifier. |
| `recordedBy`      | It is imported as-is in verbatim collectors field of the collecting event. Additionally, the value is parsed into people and assigned as collectors of the CE. Previously existing people are not used unless the data origin is the same dataset the record belongs to, otherwise any missing people are created.                                                                                                                             |
| `individualCount` | The total number of entities associated with the specimen record (e.g. this record may be for a "lot" containing 6 objects).                                                                                                                                                                                                                                                                                                                   |
| `sex`             | Selects the biocuration class from the "sex" biocuration group to be assigned as biocuration classification for the specimen.                                                                                                                                                                                                                                                                                                                  |
| `preparations`    | Selects an existing preparation matching the name with this value.                                                                                                                                                                                                                                                                                                                                                                             |

##### Event class

| Term                | Mapping                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `eventID`           | The identifier for the Collecting Event. If not empty the importer requires a Namespace for it. You may specify a Namespace in a TW-specific column named `TW:Namespace:EventID` by either using a global identifier type (e.g. `Identifier::Global::Uuid`, `Identifier::Global::Lsid`, etc.), or the short name of the Namespace for the Event local identifier. If no namespace is provided, the importer assigns a dataset-specific one with a synthetic name that you can later change. When an existing Collecting Event already has this identifier, the importer re-uses it and the event-related data is ignored.                  |
| `fieldNumber`       | The identifier value for Field Number local identifier. If not empty the record requires to have the short name of the Namespace to use in a TW-specific column named `TW:Namespace:FieldNumber`. The verbatim trip identifier is also populated by this DwC term. When an existing Collecting Event already has this identifier, the importer re-uses it and the event-related data is ignored. IMPORTANT: if a Collecting Event is already matched by `eventID`, this identifier must exactly match the existing one, otherwise the importer will reject the record. Same rejection will occur if mismatch happens the other way around. |
| `eventDate`         | The ISO8601-formatted date is split into start year, month and day collecting event fields. If the value is composed of two dates separated by `/`, then rightmost date is used as end date and split in the same way as start date. If data contradicts dates from other non-empty date-related terms the record will fail to import                                                                                                                                                                                                                                                                                                      |
| `eventTime`         | Time is split into time start hour, minute, and second of collecting event                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `startDayOfYear`    | Using `year` and the value for this term month and day are calculated and stored in start year, month, and day collecting event fields. If the computed value contradicts dates from other non-empty date-related terms the record will fail to import.                                                                                                                                                                                                                                                                                                                                                                                    |
| `endDayOfYear`      | Using `year` and the value for this term month and day are calculated and stored in end year, month and day collecting event fields. If the computed value contradicts dates from other non-empty date-related terms the record will fail to import.                                                                                                                                                                                                                                                                                                                                                                                       |
| `year`              | The start date year of the collecting event. If the value contradicts dates from other non-empty date-related terms the record will fail to import                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `month`             | The start date month of the collecting event. If the value contradicts dates from other non-empty date-related terms the record will fail to import.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `day`               | The start date day of the collecting event. If the value contradicts dates from other non-empty date-related terms the record will fail to import                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `verbatimEventDate` | Verbatim date of the collecting event                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `habitat`           | Verbatim habitat of the collecting event                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `samplingProtocol`  | Verbatim method of the collecting event                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `fieldNotes`        | Field notes of the collecting event                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

##### Location class

| Term          | Mapping                                      |
| ------------- | -------------------------------------------- |
| `fieldNumber` | Verbatim trip identifier of collecting event |

##### Identification class

| Term             | Mapping                                                                                                                                                                                                                                                                            |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `identifiedBy`   | A list (concatenated and separated) of names of people, groups, or organizations who assigned the Taxon to the subject. If possible, separate the values in a list with space vertical bar space \| (known as a pipe). (e.g. <code>Theodore Pappenfuss &#124; Robert Macey</code>) |
| `dateIdentified` | The date on which the subject was determined as representing the Taxon. Best practice is to use a date that conforms to ISO 8601-1:2019 [see examples](https://dwc.tdwg.org/terms/#dwc:dateIdentified).                                                                            |

##### Taxon class

| Term                       | Mapping                                                                                                                                                                                                                                                                                                                                                                               |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `nomenclaturalCode`        | Selects the nomenclatural code for the taxon ranks used when creating protonyms. The value itself is not imported                                                                                                                                                                                                                                                                     |
| `kingdom`                  | Creates (unless already present) a protonym at kingdom rank                                                                                                                                                                                                                                                                                                                           |
| `phylum`                   | Creates (unless already present) a protonym at phylum rank                                                                                                                                                                                                                                                                                                                            |
| `class`                    | Creates (unless already present) a protonym at class rank                                                                                                                                                                                                                                                                                                                             |
| `order`                    | Creates (unless already present) a protonym at order rank                                                                                                                                                                                                                                                                                                                             |
| `family`                   | Creates (unless already present) a protonym at family rank                                                                                                                                                                                                                                                                                                                            |
| `genus`                    | Ignored. Extracted from `scientificName` instead                                                                                                                                                                                                                                                                                                                                      |
| `subgenus`                 | Ignored. Extracted from `scientificName` instead                                                                                                                                                                                                                                                                                                                                      |
| `specificEpithet`          | Ignored. Extracted from `scientificName` instead                                                                                                                                                                                                                                                                                                                                      |
| `infraspecificEpithet`     | Ignored. Extracted from `scientificName` instead                                                                                                                                                                                                                                                                                                                                      |
| `scientificName`           | Several protonyms created (only when not present already) with their corresponding ranks and placements                                                                                                                                                                                                                                                                               |
| `taxonRank`                | The taxon rank of the most specific protonym                                                                                                                                                                                                                                                                                                                                          |
| `higherClassification`     | Several protonyms created (only when not present already) with their corresponding ranks and placement. In case a protonym was not already present, only family-group names will be created, names with classsification higher than family-group not previously registered will result in error. Names at genus rank or lower are ignored and extracted from `scientificName` instead |
| `scientificNameAuthorship` | Verbatim author of most specific protonym                                                                                                                                                                                                                                                                                                                                             |

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

| Class              | fields                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `CollectionObject` | `buffered_collecting_event`, `buffered_determinations`, `buffered_other_labels`, `total`,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `CollectingEvent`  | `document_label`, `print_label`, `verbatim_label`, `field_notes`, `formation`, `group`, `lithology`, `max_ma`, `maximum_elevation`, `member`, `min_ma`, `minimum_elevation`, `elevation_precision`, `start_date_day`, `start_date_month`, `start_date_year`, `end_date_day`, `end_date_month`, `end_date_year`, `time_end_hour`, `time_end_minute`, `time_end_second`, `time_start_hour`, `time_start_minute`, `time_start_second`, `verbatim_collectors`, `verbatim_date`, `verbatim_datum`, `verbatim_elevation`, `verbatim_geolocation_uncertainty`, `verbatim_habitat`, `verbatim_latitude`, `verbatim_locality`, `verbatim_longitude`, `verbatim_method`, `verbatim_trip_identifier` |

### Configure TaxonWorks for your DwC Occurrence data import

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

Think of biocuration classes as custom attributes for your collection objects, things like 'male', 'pupa', or 'larva'. These let you assign values useful for your curation of your specimens in a controlled way, ensuring problems like 'M.', 'MALE', 'ale' don't happen in what might otherwise be a "Sex" field. [TODO: reference groups?]. This approach is used when your rows have only a few specific values across the dataset.

### Unmapped columns

Column headers that can't be linked via one of the 3 mechanisms are ignored during the import process. This means its important to do some trial runs in a sandbox, or with a smaller dataset to see that your values are mapping over. The `Browse collection object` task is a good place to check this.

::: danger
No warning is given when columns do not map, they are simply ignored.
:::

::: tip
You can augment your data after import with batch update functionality inside TW. Carefully planning your overal import process can lead to a more efficient overall approach. Sometimes its easier to work in spreadsheets, sometimes within a database.
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

- The DwC import should work well for occurrence data that is based on collected objects.
- The SFG team is has worked with a select number of individual Scratchpad curators to script the process of transferring their datadata. Contact us if you are interested in what this approach entails. Note that this process takes programming effort that is a limited resource within the SFG.
