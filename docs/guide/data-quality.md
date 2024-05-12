---
sidebarPosition: 55 
---

# Data Quality Help and Hints

_Curating data to best support reproducible and [FAIR](https://en.wikipedia.org/wiki/FAIR_data) use means we all need ways to address data quality (e.g.  completeness, consistency, compliance). We note **Quality**, as a abstract and rather subject term, proves difficult to pin down. **Fidelity*** may prove more a more tractable term. Here we gather our collective tips on defining, finding, fixing (and preventing) some of the more common issues._

Our TW Philosopy on _data quality_ or _fidelity_: we try to build in methods to prevent issues in the first place. Where we know they can happen, we try to build in tools to help you both find and fix. We also plan further development to extend our `soft validation` tools which will discover issues for you and offer to fix them `on click`. Note that when, where, and how you find any data anomalies will vary. And in turn, this influences the options and methods for fixing them (e. g. one-by-one, bulk annotation, scripts). For example, you might notice issues when:
- cleaning data up in a spreadsheet _before_ upload to any CMS
- exploring your exported data with tools like OpenRefine, or via R, or via another API
- looking at feedback from another source (e. g. GBIF or iDigBio or ALA or OBIS or [Bionomia](https://bionomia.net/))
- someone on the internet sees something and contacts you
- perusing data already in your own database
- mapping you data to migrate to another database or share with an aggregator
- using your database _data visualization_ tools to see _distinct values_ in a given field (e. g. Project vocabulary task in TaxonWorks) or on a map. See also [Distinct Values - Why This Data Directory?](https://github.com/tdwg/dwc-qa/tree/master/data)
- reviewing your software repository issue-tracker (e. g. [gitHub for TaxonWorks](https://github.com/SpeciesFileGroup/taxonworks/issues))

In structuring these hints, we group the known issues into categories: `Identifiers` (e .g. catalog numbers), `Time` (e. g. dates), `Place` (aka geography, location), `Taxon`, and `Other` and `Tools and Resources`

## Identifiers


## Time
### Date out-of-bounds
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

## Place

## Taxon

## Other 

## Tools and Resources
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
  - **Fidelity*** - as referenced by Erica Krimmel at TaxonWorks Together 2024 as a term that may more exactly convey what we can manage when we talk about making our data as fit-for-purposes (known and imagined) as possible (rather than the more _subjective_ term of _quality_).
