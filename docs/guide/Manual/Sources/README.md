---
---
# About Sources in TW

_Discover the Source (e.g. publications) management features of TaxonWorks here. For example, sources are shared across projects, a cool time-saving community feature of TW._

Credit: much of the following information derived from a manual tailored for and written by the Universal Chalcidoidea Database (UCD@TW) Project community.

## The Source Hub
In TaxonWorks, "sources" include the literature database, citations, and other content that is fed directly into the database. The easiest way to access sources is through the Source Hub task. This is a unifying task that combines several commonly used tasks associated with sources. As a curator, researcher, or perhaps data manager, or technician you may primarily be working from sources that are published papers. Source data can be entered one record at-a-time field-by-field or using BibTeX or CrossRef DOIs. From most reference manager software, one can export source information in the BibTex format and edited as needed in any regular text editor. A good source of information on BibTex is https://en.wikipedia.org/wiki/BibTeX.

SOURCE HUB SCREEN SHOT

Legend
- (1) To see if a source is in the database, type information in **Select a source.** This is a smart selector so you only need to enter as many letters needed to uniquely identify a source. For example, the string “wool dal sig” brings up Woolley and Dal Molin (2017). If a source is found it will show beneath the search box. If you click on this, it will take you to a page describing the source.
- (2) **Filter sources** takes you to a screen that allows you to apply different search criteria to locate sources of interest. We will use this later to identify sources that you may need to work on.
- (3) **My recent sources** shows a list of sources that you have entered recently.
- (4) **New Source** takes you to a screen that enables you to add new sources using various methods.
- (5) Note the **Batch upload** option here via BibTeX formatted source data.

## Related Source Tasks
Next we delve into the details of various work you may need or want to do with source information (e.g. adding sources, editing, tagging, and filtering). The source content needing to be captured includes such data as new taxon names, people strings or names, distribution information, type information, and biological associations. For efficient source data extraction and entry, we recommend familiarity with the following TW Tasks and Data Cards.

FUTURE LINK TO INFORMATION about each of these items

| Tasks                     | Data Cards                        |
|:--------------------------|:-----------------------------------|
| Browse nomenclature       | Taxon names 
| Browse OTUs               | Biological Associations            |
| Source hub                | Sources                            |
| Filter sources            | Manage Controlled Vocabulary Terms |
| New taxon name            |                                    |
| New type specimen         |                                    |
| New combination           |                                    |
| Uniquify People           |                                    |

## Editing a Source

Using the Source Hub to search for a publication of your choice, you may find the information needs editing.

SCREENSHOT TO SHOW WHERE TO CLICK ON SOURCE TO OPEN IT

Note the green **Pinboard icon** at the upper right. Hitting this adds the source to your Pinboard for quick access.

The **Radial Annotator** is a very common function used throughout TW.  It provides convenient access in one place to a variety of relevant functions. For example, the Radial Annotator for a given Source might look like this:

RADIAL ANNOTATOR SCREENSHOT

- **Documentation** is where you can drop a pdf of the source, or supplementary files.
- **Tags** allow you to mark sources for later with tags such as "Source Unprocessed", or "Source Processed for Nomenclature." Instructions on creating and editing Tags are included below.
- **Notes** is a free text field for any information you might want to add.
- **Identifiers** provides a place to store one-to-many identifiers for a given object. For example, a paper might have a globally unique digital object identifier, aka DOI, but also an author-assigned identifier.
- **Data attributes** in TW gives you a place to store your unique data that may not fit in any typical TW field currently in the data model.

### Try Editing a Source
From the Source Hub search to a publication and then click Edit to open the task to make corrections or put text in italics, for example. Note that italics are indicated in BibTex format as follows `<i> text </i>`.  Everything in between the special symbols will display or print in italics. There are tools in TW to do this for you by selecting text and hitting a button. Be sure to click the Save button to keep any changes.

HINT: In Edit, you see "New source" but you started by clicking the `Edit` option. Rest assured this "New source" does not mean duplication of the source.

SAMPLE EDIT SCREENSHOT

## Adding a Source

First, always check to be sure the source is not already in TW. If it isn’t found in the search box in the Source Hub, "—None—" will appear below it. Be sure you are spelling all search terms correctly. Remember that searches in TW are "smart", you need only provide enough text to find the source.

Hitting **New Source** in the **Source Hub** brings up this screen. _Note that the order of items may be somewhat different on your screen as we have sorted them to be more convenient._ To do this, check the "Sortable fields" box at upper right and arrange them however you like. There is a lot going on here, so we will concentrate on the most important things. Later we provide some various related scenarios that may fit your workflows.

SCREENSHOT NEW SOURCE

Legend.
- (1) The yellow triangle means you have made changes that have not been saved.
- (2) BE SURE TO SAVE CHANGES before you leave this screen, or they will be lost.
- (3) If you have the doi for a new source, this button provides access to the CrossRef database of doi's. If it works (it usually does), most of the fields you need will be filled in. However, BE SURE TO CHECK THEM, as they aren’t always correct.
- (4) If you have the reference in BibTex format (most reference databases will output this), you can input it here.
  - from Zotero, simply select the reference, right-click on it, select “export item” and save the file as BibTeX.
  - from EndNote, select the reference and fill out the "label" field. Then go to File > export and select "text file", "BibTeX export". Most people don’t fill out the "label" field in their EndNote database, but if you don’t, you will have to add the label manually by editing the exported text file (that is the field highlighted in the example below). In the New Source Form, Choose the blue BibTex box at the top of the screen, and paste in the exported *.txt file. Drag and drop doesn’t seem to work here.

Most of the fields should be self-explanatory. However, there are a few tricks, for instance:
- (5) Entering an author name in this box (5) tries to pull it up from the table of known authors. If it isn’t found, you can ADD NEW. This is an advantage in some situations over entering authors as verbatim text (in the Verbatim from BibTex field lower in the screen), because you can easily pull them up later, for example, when adding author names to new species.

Below the Author section is a search box for Serials (journals).  If the journal is not found, look for the NEW button to the right of the Serial screen. This will add a serial to the serials table.

As all fields are present on the data entry screen for all types of sources, it can be a bit confusing, particularly for books and chapters in books. The article type for a chapter in a book is "Inbook", and the book title would go into the Booktitle field.  For books, there are fields for Editors, Series (if needed), Booktitle, Publisher, and Address (usually city or city and country). The type of a technical report is "techreport".

Once you have created the new source, you should go to Documentation in the blue radial annotator to the right of the Source and upload the PDF file if available.

Also, you may wish to use the TW tagging feature to group which papers need to data entered. To do this go to the Tags choice in the radial annotator, tag the source as "Unprocessed" (or other suitable tags), and add a Tag for either "No Nomenclatural Acts" or "Nomenclatural Acts" as appropriate (this is specific for the UCD project, other projects may use different tags).

If a source has a title in a language other than English, and you wish to enter the English translation (or translation in any other language), follow these steps:
1. Enter the source with the title as given in the paper and create it.
2. Click on the blue radial BibTex annotator to the right of the source at the top of the page, and click on the pie slice for Alternate Values.
3. Choose title from the pick-list, the language for the translated title, and paste the translation in the Value field.
4. Be sure to save it (green button) if this is a new source.  Then the original title and translation will both be rendered.


## Importing

## Filtering

## Exporting



