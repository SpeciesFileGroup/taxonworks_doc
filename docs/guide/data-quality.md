---
sidebarPosition: 55 
---

# Data Quality Help and Hints

_The nature of data, particularly aspects of quality (e.g.  completeness, consistency, compliance) are directly related to whether or not it can be re-used (the R in [FAIR](https://en.wikipedia.org/wiki/FAIR_data)). **Quality** is an abstract and rather subjective term, one difficult to pin down. **Fidelity*** may prove more a more tractable term. Conceptual and implemented means to improve data quality in and around TaxonWorks._

## Motivation

This documentation originated via the co-organization of a workshop at [Digital Data 8](https://digitaldata2024.sched.com/), **Data cleaning for maximum impact: Tools and workflows for data providers to efficiently find and fix data quality issues**. Other co-organizers produced similar documentation resulting in a cross-platform page can be found at iDigBio: [Data Quality Toolkit 2024](https://www.idigbio.org/wiki/index.php/Data_Quality_Toolkit_2024). Each section below is linked to its corresponding topic on that iDigBio page.

## Rationale and Background

Our TW philosopy on _data quality_ or _fidelity_ is multifaceted and can be thought of as the concepts of prevention, discovery, and resolution as applied to a spectrum of processes, from designing the data-models, to implementing validations, to creating tools and workflows facilitating discovery and visualization, to building user-interfaces that curators use to resolve issues, to reflecting feedback from external sources back into the system.

### Prevention
Many of the issues highlighted below can be prevented at inception (when data are captured). At a low level this can happen during data-model design and implementation. For example in TaxonWorks we:
* Carefully model our domain (models) []() so that there is a solid basis for expanding the semantics of what we are capturing. This helps to prevent the addition of fields that seem useful at the time but that ultimately confuse our understanding of the data as the system evolves. 
* Isolating data fields from fields that facilitate TaxonWorks functionality. This separation of concerns ensures we can efficiently implement globally-relevant data-cleaning (e.g. stripping bad characters) and iterative checks on the data while not being confused by fields that don't require such.
* Only permit data changes through a single API (TaxonWorks models), as opposed to updates directly to the database. This forces all validations to be checked when data enters the system, greatly improving data integrity.
* Choosing either the database or the data-model as the location of data validation functions (not both, TaxonWorks validates in the model)
* Creating (sometimes complex) tests that check that the validations implemented still hold, these are run on every single commit to the repository.
* Using a _convention_ to implement our data models and their relationships to one another (e.g. Rails ActiveRecord models)

### Discovery 
In general, when, where, and how you find any data anomalies will vary, not only with respect to TaxonWorks but in working with data in general. For example, you might become aware of issues when:
* Mapping you data to an external standard, perhaps during migration to another database or share with an aggregator
* Cleaning data up in a spreadsheet _before_ upload to a workbench like TaxonWorks
* Exploring your exported data with tools like OpenRefine, or via R, or via another API
* Receiving feedback from another source (e. g. GBIF or iDigBio or ALA or OBIS or [Bionomia](https://bionomia.net/))
* Hearing from someone on the internet sees something and contacts you
* Perusing data already in your own database
* Visualizing issues in day-to-day work, for example via the hundreds of notices possible in TaxonWorks on its "soft validation" framework.
* Using your database _data visualization_ tools to see _distinct values_ in a given field (e. g. `Project vocabulary task` in TaxonWorks) or on a map. 
* Reviewing your software repository issue-tracker (e.g. [gitHub for TaxonWorks](https://github.com/SpeciesFileGroup/taxonworks/issues))
* Learning about what others have done in similar systems (e.g. see [Distinct Values - Why This Data Directory?](https://github.com/tdwg/dwc-qa/tree/master/data))

How data issues are discovered influences the options and methods for fixing them (e. g. one-by-one, bulk annotation, scripts).

### Resolution
Example means to resolve the data are detailed in the specifics below. In addition to those one of the important ways to resolve problems is to use TaxonWorks models in scripts to batch process and fix data.

### Acknowledgements
To _extend the value and scope of this work_ we link to the work of the [Biodiversity Information Standards (TDWG) Biodiversity Data Quality Task Group (BDQ)](https://github.com/tdwg/bdq). We list the BDQ tests relevant to each issue, where they exist. With these connections, we hope to enhance the software developer's vision and work to connect to the BDQ tests to the workbench functionality around preventing, finding, and fixing these types of issues.

We gratefully acknowledge the efforts of this TDWG Task Group and the contributions and conversations with Paul Morris and Lee Belbin in figuring out how to do this. Special thanks to Paul Morris for work done to map the BDQ tests to the specific data quality issues highlighted in this workshop and on this page.

### Structure
Issues below are grouped into the: `Identifiers` (e .g. catalog numbers), `Time` (e. g. dates), `Place` (aka geography, location), `Taxon`, and `Other` and `Tools and Resources`. 

::: warning 
TaxonWorks only references many DarwinCore fields on export of the data, i.e. in the translation of its data model to an external format. 
:::

## Identifiers

### CatalogNumbers

::: tip
Duplicate Identifiers are prevented in the data model. This prevents errors in initial or subsequent (bulk OR one-by-one) uploads to TW. We use `Namespaces` and a simple Identifier ontology to ensure sets of Identifiers whose members are all unique.
:::

 `catalogNumber` is only invoked as a column when exporting to Darwin Core format (it's not a specific field in a TaxonWorks model). When multiple objects are identified by the same `catalogNumber` we associate the corresponding Identifier to a virtual container.  This lets us export a "duplicate" `catalogNumber` in the export for each occurrence record (which is uniquely identified by a UUID) while maintain specific data on individual specimens. `catalogNumbers` that appear identical in their rendering can be differentiated via different Namespaces if it can be determined that they were created via independent processes.  Finally, you can extend any DarwinCore export with a custom data-attribute that might reference, say `dwc:otherCatalogNumbers`.

## Time

### Date out-of-bounds
[idigbio-dqtk-time](https://www.idigbio.org/wiki/index.php/Data_Quality_Toolkit_2024#Dates), [TDWG BDQ](https://github.com/tdwg/bdq) Relevant Tests: [VALIDATION_DATEIDENTIFIED_INRANGE](https://github.com/tdwg/bdq/issues/76), [VALIDATION_EVENTDATE_INRANGE](https://github.com/tdwg/bdq/issues/36), [VALIDATION_YEAR_INRANGE](https://github.com/tdwg/bdq/issues/84), [VALIDATION_NAMEPUBLISHEDINYEAR_INRANGE](https://github.com/tdwg/bdq/issues/64), [VALIDATION_EVENT_CONSISTENT](https://github.com/tdwg/bdq/issues/67)

In TaxonWorks, different types of records have dates associated, for example: the `event date` for a given `Collecting Event`, or the `date identified` (that is, `date determined`), or the `date georeferenced`. Dates out-of-expected bounds would include several kinds of impossible dates. That is, dates in the future or dates before the objects were actually ever collected or dates that are not possible with the birth and death dates for the person who collected/identified/observed/georeferenced/imaged the object/s. These could be grouped as 
- **date hasn't happened yet**
- **date is suspiciously old** and 
- **_flourit_ date and event date not compatible.**

#### Filter Collecting Event by Date
**Find** outlier dates using the `Filter Collecting Event` task, the `Filter Collection Object` task, and you can use the `Project Vocabulary` task to peak inside each field in your database to see distinct values and the records with those values.

#left[Using the **date range** method to find outlier dates with the `Filter Collecting Event` task](https://sfg.taxonworks.org/s/xcmcsl [the Filter Collecting Event task user interface showing where to enter start and end dates to filter with])

- Navigate to the `Filter Collecting Event` task
- Scroll down to the `Collecting Event` filter section
- Enter date range to search
  - e. g. to check for future out-of-bounds dates try putting "tomorrow's" date in for the `start date` and some date way into the future for the `End date`
- Click `Filter` to see resulting records.

::: tip 
Note you can click any column to sort on that column (which sorts only for the records showing on that page). This makes it simpler to see outliers in a date-related column. These sets can also be downloaded as CSV files if need be.
:::

**Find** outlier dates using the `Project Vocabulary` task.
With this task, one can see the unique values present for a given field and how many times that string/value occurs. You `click` on one of the results of the output and see the associated records having that value. For the **out-of-expected-bounds-date** use case, one could see odd unexpected dates easily.

**Find** outlier dates based on someone's lifespan, when known. In the future, you can expect that if you have the active years for a given person entered into the database, and that person is linked to a record where the date collected or identified is not within their active years, you will be able to find these records.

**Fix** the outlier dates found from the above `Filter Collecting Event` task search.

- In the result set, you can navigate to a single record and edit that one
- You can use the **download csv** version of the results if you have a lot of records and want to sort by year in a spreadsheet to see the extent of the year bounds.
  - You can sort by year by clicking on a given column, however, it is only sorting the records on that page (note the number of records per/page can be increased).

### eventDate and year month day
[idigbio-dqtk-date-ymd](https://www.idigbio.org/wiki/index.php/Data_Quality_Toolkit_2024#Year,_Month,_and_Day_Values_Do_Not_Match_Date), [TDWG BDQ](https://github.com/tdwg/bdq) Relevant Tests: [VALIDATION_EVENT_CONSISTENT](https://github.com/tdwg/bdq/issues/67)

In TaxonWorks these align automatically. 
- If using the `DwC Occurrence Importer` and you provide the `eventDate` (in YYYY-MM-DD format) and you provide the dwc:day, dwc:month, and dwc:year, the importer software checks for consistency.
- If using the `DwC Occurrence Importer` and you provide the `eventDate` (in YYYY-MM-DD format) only, we derive the dwc:day, dwc:month, and dwc:year on import. 
- After upload, the `year`, `month`, and `day` fields can be edited, there is no single `eventDate` field which prevents these from potentially getting out of sync.

## Place
[idigbio-dqtk-place](https://www.idigbio.org/wiki/index.php/Data_Quality_Toolkit_2024#Geography)

### Coordinates Zero
[idigbio-dqtk-zero](https://www.idigbio.org/wiki/index.php/Data_Quality_Toolkit_2024#Coordinates_are_Zero), [TDWG BDQ](https://github.com/tdwg/bdq) Relevant Tests: [VALIDATION_COORDINATES_NOTZERO](https://github.com/tdwg/bdq/issues/87), [ISSUE_COORDINATES_CENTEROFCOUNTRY](https://github.com/tdwg/bdq/issues/287)

In TW this will depend. 0, 0 are of course "Valid" however they have to match other data in the record.

**Find** 0, 0 coordinates uing the `Project vocabulary` task
- Select model: `Collecting Event`
- Select attribute: `verbatim_longitude` (or `verbatim_latitude`)
- in `Beginning with` put: 0.0 (for example)
- Click on `Show records`
- Result is a set of records in `Filter collecting events`
  - You will have a set of records that have the properties you provided that you can work on editing.
  - You can edit one record at a time or potentially edit many at once depending on what needs to be updated.

**Fix** unexpected coordinates
It may be possible to fix more than one record at a time depending on the specific issue.

- In your resulting set, Select a record to fix, 
- Then click the `navigator` icon for that record and 
- Click `Edit` in the options provided.

If there are many to fix:
- Select all for that page, or some subset of records
- Then click on the `radial collecting event` icon
- In the `radial collecting event` radial pop-up, select one of these options
  - Set `Collection Date/Time`
  - Set `verbatim fields`

### Coordinates Do Not Fall Within Named Geographic Unit
[idigbio-dqtk-geo-unit](https://www.idigbio.org/wiki/index.php/Data_Quality_Toolkit_2024#Coordinates_Do_Not_Fall_Within_Named_Geographic_Unit), [TDWG BDQ](https://github.com/tdwg/bdq) Relevant Tests: [VALIDATION_COORDINATES-STATEPROVINCE_CONSISTENT](https://github.com/tdwg/bdq/issues/56), [VALIDATION_COORDINATES_COUNTRYCODE_CONSISTENT](https://github.com/tdwg/bdq/issues/50)

If you provide coordinates on upload, we compute the geographic units based on the gazetteer information. So we don't have this issue specifically. You can potentially see outliers using the following method.

**Find and Fix**
- Go to `Filter collecting events`
- Search for the area of interest, (e. g. United States and pick `Descendants`)
- Click `Filter`
- In the resulting set, in the **left** sidebar, click the `linker` icon to get the `Radial linker`
  - Select `Spatial Summary` which gives you a **scatter plot** where the x-axis is longitude, the y-axis is latitude
  - If there are longitudes with positive (or other outlier non-expected) values, you will be able to see them and go to those records to debug.

::: tip
Using the `Collecting Event` software, if you provide spatial constraint (choose a `GeographicArea with shape`) and try and provide a point outside that, you are not allowed to. We note at the same time, you can put whatever conflicting info you want in verbatim_ fields, these are not validated.
:::

### Georeference Metadata with no Associated Georeference
[idigbio-dqtk-metadata-no-georef](https://www.idigbio.org/wiki/index.php/Data_Quality_Toolkit_2024#Georeference_Metadata_with_no_Associated_Georeference) 

Not possible on export (though the inverse is).

### Elevation Unlikely
[idigbio-dqtk-elevation-questionable](https://www.idigbio.org/wiki/index.php/Data_Quality_Toolkit_2024#Elevation_is_Unlikely), [TDWG BDQ](https://github.com/tdwg/bdq) Relevant Tests: [VALIDATION_MAXELEVATION_INRANGE](https://github.com/tdwg/bdq/issues/112), [VALIDATION_MINELEVATION_INRANGE](https://github.com/tdwg/bdq/issues/39), see also [VALIDATION_MINDEPTH_INRANGE](https://github.com/tdwg/bdq/issues/107), [VALIDATION_MAXDEPTH_INRANGE](https://github.com/tdwg/bdq/issues/187) 

To look for unlikely or unexpected elevations, one way would be to use the `Project vocabulary` task.

**Find and Fix** elevation value ranges uing the `Project vocabulary` task:
- Select model: `Collecting Event`
- Select attribute: `maximum_elevation` (or `minimum_elevation`)
- Click on `Show records`
- in the **left** sidebar, click `Term` to sort column to see the value range for max (or min, depending on what you picked)
- Click on the row with any unexpected value to see the records with that value (or click that value in the word cloud).
- Result is a set of records in `Filter collecting events`
  - You will have a set of records that have the properties you provided that you can work on editing.
  - You can edit one record at a time or potentially edit many at once depending on what needs to be updated.

### Improperly Negated Latitudes Longitudes
[idigbio-dqtk-lat-lon-neg](https://www.idigbio.org/wiki/index.php/Data_Quality_Toolkit_2024#Improperly_Negated_Latitudes/Longitudes), [TDWG BDQ](https://github.com/tdwg/bdq) Relevant Tests: [AMENDMENT_COORDINATES_TRANSPOSED](https://github.com/tdwg/bdq/issues/54), [VALIDATION_COORDINATES_TERRESTRIALMARINE](https://github.com/tdwg/bdq/issues/51)

**Find and Fix**
- Go to `Filter collecting events`
- Search for the area of interest, (e. g. United States and pick `Descendants`)
- Click `Filter`
- In the resulting set, in the **left** sidebar, click the `linker` icon to get the `Radial linker`
  - Select `Spatial Summary` which gives you a **scatter plot** where the x-axis is longitude, the y-axis is latitude
  - IF there are longitudes with positive values, you will be able to see them and go to those records to debug.

### Invalid Coordinates
[idigbio-dqtk-invalid-coord](https://www.idigbio.org/wiki/index.php/Data_Quality_Toolkit_2024#Invalid_Coordinates), [TDWG BDQ](https://github.com/tdwg/bdq) Relevant Tests: [VALIDATION_DECIMALLATITUDE_INRANGE](https://github.com/tdwg/bdq/issues/79), [VALIDATION_DECIMALLONGITUDE_INRANGE](https://github.com/tdwg/bdq/issues/30)

Coordinates are exported as Geo referenced, i.e. they can not be illegal values.  They can of course be based on points placed in error.  Errors are minimized due to cross-referencing to geo-spatial gazetteers ensuring that the points dropped are within 10km of the place selected.

### Lower Geography Values Provided, but No Higher Geography
Selecting any `GeographicArea` happens in one place in TaxonWorks, so you automatically get spatial and parent validation going up.* In other words, if you provide the lower geography, we derive the higher geography where there is information in our gazetteers to do so.

### Minimum and Maximum Elevation Values Mismatched
Our Validation software catches this for any parsed values. You can of course put what you like in verbatim fields.

### Mismatched Country and CountryCode Values
[idigbio-dqtk-mismatch-codes](https://www.idigbio.org/wiki/index.php/Data_Quality_Toolkit_2024#Mismatched_Country_and_CountryCode_Values), [TDWG BDQ](https://github.com/tdwg/bdq) Relevant Tests: [VALIDATION_COUNTRY_COUNTRYCODE_CONSISTENT](https://github.com/tdwg/bdq/issues/62)

If a `country` is reported and we have access to a corresponding ISO code (true for a majority of cases), then they are always matched, i.e. they are derived from a unified source, not manually entered independently.

### Mismatched Geographic Terms
[idigbio-dqtk-mismatch-terms](https://www.idigbio.org/wiki/index.php/Data_Quality_Toolkit_2024#Mismatched_Geographic_Terms)

TaxonWorks makes use of an internally managed GeographicArea gazeteer. Selecting a finer resolution entity (e.g. county, state) permits us to crawl the parenthood to fill in the pertinent data.  

::: warning
TaxonWorks also does spatial lookup for Georeference point data. The lookup algorithm can error based on limits to the resolution of the referenced gazeteers.  In this case one cap prioritize the use of GeographicArea to over-ride the spatial lookup. 
:::

### Missing Geodetic Datum
[idigbio-dqtk-datum-missing](https://www.idigbio.org/wiki/index.php/Data_Quality_Toolkit_2024#Missing_Geodetic_Datum), [TDWG BDQ](https://github.com/tdwg/bdq) Relevant Tests: [VALIDATION_GEODETICDATUM_NOTEMPTY](https://github.com/tdwg/bdq/issues/78), see also [VALIDATION_GEODETICDATUM_STANDARD](https://github.com/tdwg/bdq/issues/59) expects an EPSG code, [AMENDMENT_GEODETICDATUM_STANDARDIZED](https://github.com/tdwg/bdq/issues/60) sets to an EPSG code, [AMENDMENT_GEODETICDATUM_ASSUMEDDEFAULT](https://github.com/tdwg/bdq/issues/102)

Missing data here are the norm for historical data. For de-novo capture TaxonWorks exports a number of types as estimated from the processes by which the Georeference was captured or an explicity Protocol reference.

### Missing Latitudes Longitudes
[idigbio-dqtk-lat-lon-missing](https://www.idigbio.org/wiki/index.php/Data_Quality_Toolkit_2024#Missing_Latitudes/Longitudes), [TDWG BDQ](https://github.com/tdwg/bdq) Relevant Tests: [VALIDATION_DECIMALLATITUDE_NOTEMPTY](https://github.com/tdwg/bdq/issues/119), [VALIDATION_DECIMALLONGITUDE_NOTEMPTY](https://github.com/tdwg/bdq/issues/96)

Using the `Filter collecting event` task, you can find records with no Georeference. 

### Misspelled Geographic Unit Names
[idigbio-dqtk-geounit-names-spelling](https://www.idigbio.org/wiki/index.php/Data_Quality_Toolkit_2024#Misspelled_Geographic_Unit_Names), [TDWG BDQ](https://github.com/tdwg/bdq) Relevant Tests: [VALIDATION_COUNTRY_FOUND](https://github.com/tdwg/bdq/issues/21), [VALIDATION_STATEPROVINCE_FOUND](https://github.com/tdwg/bdq/issues/199)

Users do not enter geographic names (unless the customize to export ADM level fields), they are selected from a controlled list of over 40k GeographicAreas. Errors are possible when source gazeteers included the error. We correct these at the installation level as found. TaxonWorks also has a generic set of annotations under the umbrella of AlternateValues.  This lets us link entities to alternate spellings, translations and abbreviations.

## Taxon

### Misspelled or Invalid Taxonomic Names
[idigbio-dqtk-taxonname-missing-invalid](https://www.idigbio.org/wiki/index.php/Data_Quality_Toolkit_2024#Misspelled_or_Invalid_Taxonomic_Names), [TDWG BDQ](https://github.com/tdwg/bdq) Relevant Tests: [VALIDATION_SCIENTIFICNAME_FOUND](https://github.com/tdwg/bdq/issues/46)

A huge variety of nomenclatural nuances can be specifically classified and identified in TaxonWorks, synonymous and misspelled names included.  All of these represent the historical record.  TaxonDeterminations are linked to these names and a CollectionObject as a bridging step. Presenting synomous or misspelled names during export is not only possible but required in various cases (for example for nomenclatural catalogs).

### Unknown Higher Taxonomy
[idigbio-dqtk-higher-tax-unknown](https://www.idigbio.org/wiki/index.php/Data_Quality_Toolkit_2024#Unknown_Higher_Taxonomy), [TDWG BDQ](https://github.com/tdwg/bdq) Relevant Tests: 
[VALIDATION_KINGDOM_FOUND](https://github.com/tdwg/bdq/issues/81), [VALIDATION_PHYLUM_FOUND](https://github.com/tdwg/bdq/issues/22), [VALIDATION_CLASS_FOUND](ttps://github.com/tdwg/bdq/issues/77), [VALIDATION_ORDER_FOUND](ttps://github.com/tdwg/bdq/issues/83), [VALIDATION_SUPERFAMILY_FOUND](ttps://github.com/tdwg/bdq/issues/205) supplemental, [VALIDATION_FAMILY_FOUND](ttps://github.com/tdwg/bdq/issues/28), [VALIDATION_TRIBE_FOUND](ttps://github.com/tdwg/bdq/issues/207) supplemental, [VALIDATION_SUBTRIBE_FOUND](ttps://github.com/tdwg/bdq/issues/208) supplemental, [VALIDATION_GENUS_FOUND](ttps://github.com/tdwg/bdq/issues/122), [VALIDATION_TAXON_UNAMBIGUOUS](ttps://github.com/tdwg/bdq/issues/70), 
[VALIDATION_CLASSIFICATION_CONSISTENT](ttps://github.com/tdwg/bdq/issues/123)

Unknown higher taxonomy is highly specific to the purpose of use of the data. There is no one true classification of nomenclature, or taxa.  Syncronizing of TaxonWorks data to external taxonomies is best done via the processes that merge or take TaxonWorks data into a new system.

## Other 

### Incorrect Character Encodings
All data are encoded as UTF-8. TaxonWorks pre-processes all strings before writing (persisting) them to remove a handful of well-known issues with encoding, for example trimming white-space and removing various invisible characters.

### Incorrect Line Endings
Many different exports are possible in TaxonWorks. Exporting returns a unified format.

### Invalid Individual Count
[idigbio-dqtk-invalid-count](https://www.idigbio.org/wiki/index.php/Data_Quality_Toolkit_2024#Invalid_Individual_Count), [TDWG BDQ](https://github.com/tdwg/bdq) Relevant Tests: 
[VALIDATION_INDIVIDUALCOUNT_INTEGER](https://github.com/tdwg/bdq/issues/290)

The CollectionObject model requires a positive integer as the `total`, invalid values are impossible. 

### Nonstandardized basisOfRecord Values
[idigbio-dqtk-nonstand-basesOfRecord](https://www.idigbio.org/wiki/index.php/Data_Quality_Toolkit_2024#Non-standardized_BasisOfRecord_Values), [TDWG BDQ](https://github.com/tdwg/bdq) Relevant Tests: [VALIDATION_BASISOFRECORD_STANDARD](https://github.com/tdwg/bdq/issues/104), [AMENDMENT_BASISOFRECORD_STANDARDIZED](https://github.com/tdwg/bdq/issues/63)

We generate `dwc:basisOfRecord`, so a non-issue for TW. If an issue on Import, our Importer software will tell you. With the Importer you can "find" and "replace" any non-standard value and then continue the upload.

## External Tools and Resources

Many approaches have influenced how we build and what we build in TaxonWorks with respect to data-quality: 
- Data Carpentry [Data Cleaning with OpenRefine](https://datacarpentry.org/OpenRefine-ecology-lesson/)
- Data Carpentry [Data Organization in Spreadsheets](https://datacarpentry.org/spreadsheet-ecology-lesson/)
- [OpenRefine](https://openrefine.org/) as a great tool for
  - cleaning and structuring messy data
  - extending and enhancing your data
  - tracking and sharing your data cleaning steps automatically
- [Voyant Tools](https://voyant-tools.org/) for visualizing and exploring text data
- ChatGPT proves useful in some instances too (e. g. for finding less common datums)
- [Bob Mesibov’s Data Cleaner’s Cookbook](https://www.datafix.com.au/cookbook/)
- [GBIF’s data quality flags](https://data-blog.gbif.org/post/issues-and-flags/) NOTE: in TaxonWorks, we pull GBIF DQ data back for you into the user-interface so you can evaluate the feedback without leaving TaxonWorks.
- [iDigBio’s data quality flags](https://github.com/iDigBio/idigbio-search-api/wiki/Data-Quality-Flags)
- [OBIS Manual](https://manual.obis.org/index.html) (e. g. their Data Laundry help and community) See also Gan Y-M, Perez Perez R, Provoost P, Benson A, Peralta Brichtova AC, Lawrence E, Nicholls J, Konjarla J, Sarafidou G, Saeedi H, Lear D, Penzlin A, Wambiji N, Appeltans W (2023) Promoting High-Quality Data in OBIS: Insights from the OBIS Data Quality Assessment and Enhancement Project Team . Biodiversity Information Science and Standards 7: e112018. https://doi.org/10.3897/biss.7.112018
- [Linter tools](https://en.wikipedia.org/wiki/Lint_(software)) offer another way to evaluate and tidy up your data. For example, you have a BibTeX file (from EndNote, Zotero, or elsewhere) that seems to have errors. You can use online tools that help you find and fix formatting (syntax) errors. 
  - See [BibTeX Tidy](https://flamingtempura.github.io/bibtex-tidy/index.html) as an example.
- Need to create or convert data into other formats? Some tools that help you with this part of any data transformation processes include:
  - [Tables Generator](https://www.tablesgenerator.com/) (e. g. HTML, LaTeX, MediaWiki, Markdown)
  - [PanDoc - a universal document converter](https://pandoc.org/)
- Authority Files for comparing your data with known sources
  - [Global Names Architecture Tools (GNA) Suite](https://globalnames.org/) helps you 
    - **find** taxon names in documents or on websites
    - **parse** taxon name strings into their parts (e. g. genus, specific epithet, author, year)
    - **verify** taxon names against known sources
    - **verify** from inside OpenRefine using the Global Names [_Reconciliation Service_](https://github.com/gnames/gnverifier/wiki/OpenRefine-readme).
    - [**compare** two files that contain taxon name strings](https://github.com/gnames/gndiff)

### Footnotes
- **Fidelity** - as referenced by Erica Krimmel at [TaxonWorks Together](https://together.taxonworks.org) 2024 as a term that may more exactly convey what we can manage when we talk about making our data as fit-for-purposes (known and imagined) as possible (rather than the more _subjective_ term of _quality_).
