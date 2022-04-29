---
---

# About Sources in TW

_Discover the Source (e.g. publications) management features of TaxonWorks here. For example, sources are shared across projects, a cool time-saving community feature of TW._

Credit: much of the following information derived from a manual tailored for and written by the Universal Chalcidoidea Database (UCD@TW) Project community.

## The Source Hub
In TaxonWorks, "sources" include the literature database, citations, and other content that is fed directly into the database. The easiest way to access sources is through the Source Hub task. This is a unifying task that combines several commonly used tasks associated with sources. As a curator, researcher, or perhaps data manager, or technician you may primarily be working from sources that are published papers. Source data can be entered one record at-a-time field-by-field or using BibTeX or CrossRef DOIs. From most reference manager software, one can export source information in the BibTex format and edited as needed in any regular text editor. A good source of information on BibTex is https://en.wikipedia.org/wiki/BibTeX.

Source Hub [Screenshot](https://sfg.taxonworks.org/s/rdc03q) Legend
<img align="right" width="200" title="Source Hub" src="https://sfg.taxonworks.org/s/rdc03q"/>
- (1) To see if a source is in the database, type information in **Select a source.** This is a smart selector so you only need to enter as many letters needed to uniquely identify a source. For example, the string “wool dal sig” brings up Woolley and Dal Molin (2017). If a source is found it will show beneath the search box. If you click on this, it will take you to a page describing the source. <img align="right" width="200" title="Search Sources" src="https://sfg.taxonworks.org/s/7vgq1z"/>
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

<img align="right" width="200" title="Edit, Pin, Annotate a source" src="https://sfg.taxonworks.org/s/m0pegj"/>

Note the green **Pinboard icon** at the upper right. Hitting this adds the source to your Pinboard for quick access.

The **Radial Annotator** is a very common function used throughout TW.  It provides convenient access in one place to a variety of relevant functions. For example, the Radial Annotator for a given Source might look like this:

<img align="right" width="200" title="The Radial Annotator" src="https://sfg.taxonworks.org/s/9fbwug"/>

- **Documentation** is where you can drop a pdf of the source, or supplementary files.
- **Tags** allow you to mark sources for later with tags such as "Source Unprocessed", or "Source Processed for Nomenclature." Instructions on creating and editing Tags are included below.
- **Notes** is a free text field for any information you might want to add.
- **Identifiers** provides a place to store one-to-many identifiers for a given object. For example, a paper might have a globally unique digital object identifier, aka DOI, but also an author-assigned identifier.
- **Data attributes** in TW gives you a place to store your unique data that may not fit in any typical TW field currently in the data model.

### Try Editing a Source

<img align="right" width="200" title="Edit a source" hspace="10" src="https://sfg.taxonworks.org/s/vrbjbz"/>  

From the Source Hub search to a publication and then click Edit to open the task to make corrections or put text in italics, for example. Note that italics are indicated in BibTex format as follows `<i> text </i>`.  Everything in between the special symbols will display or print in italics. There are tools in TW to do this for you by selecting text and hitting a button. Be sure to click the Save button to keep any changes.

HINT: In Edit, you see **New source** but you started by clicking the `Edit` option from an existing source. Rest assured this "New source" window does not mean duplication of the source.

## Adding a Source

First, always check to be sure the source is not already in TW. If it isn’t found in the search box in the Source Hub, "—None—" will appear below it. Be sure you are spelling all search terms correctly. Remember that searches in TW are "smart", you need only provide enough text to find the source.

Hitting **New Source** in the **Source Hub** brings up this screen. _Note that the order of items may be somewhat different on your screen as we have sorted them to be more convenient._ To do this, check the "Sortable fields" box at upper right and arrange them however you like. There is a lot going on here, so we will concentrate on the most important things. Later we provide some various related scenarios that may fit your workflows.

Add Source [Screenshot](https://sfg.taxonworks.org/s/nhjizu") Legend

<img align="right" width="400" title="Add a source" hspace="10" src="https://sfg.taxonworks.org/s/nhjizu"/>

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
4. Be sure to save it (green button) if this is a new source. Then the original title and translation will both be rendered.

## PDFs for Sources
<img align="right" width="400" title="Source has PDF" hspace="10" src="https://sfg.taxonworks.org/s/cbn6vy"/> At least in the UCD@TW Project, most screens that pull up lists of sources in TW have a convenient PDF icon that either opens the source in the PDF viewer (where you can download it), or enables you to download it directly to your browser. For example, if you pull up a source using the Source Hub, you will get a screen like this. The pdf icon will open the source in your browser.

<img align="right" width="400" title="Does PDF exist for source?" hspace="10" src="https://sfg.taxonworks.org/s/bitrgd"/> You can also check to see whether a pdf has been  associated with a source using the **Radial Annotator** associated with that source. Click the **documentation** wedge in the Radial Annotator to get the screen below. If a pdf for the source is not present, drag and drop it into the box as shown. If a pdf is associated with the source, you can hit the icon indicated by the red arrow to download to your browser.

## Tags on Sources
Tags in TW provide a unique way to group documents (or other objects in TW) in any way that you choose. With these tags (aka "keywords") that you create and apply, you and colleagues can find the relevant materials needing work or find groups where work is complete and may need vetting. 

### UCD@TW Project Tag Example

Because UCD@TW is a community-curated database, they added tags for sources that allow them to better organize and coordinate group work. These are the tags currently associated with their sources. Tags can be added or removed from a source in the Radial Annotator. Most of these tags should be self-explanatory. 

<img align="right" width="300" title="Source Processing Tags for UCD" hspace="10" src="https://sfg.taxonworks.org/s/2cldsu"/> 

- HINT: Tags are also referred to as **Keywords** in TW.
- If they are certain that a source is an "early view" document, that is, not yet published, they add this tag as any nomenclatural acts in the source are not yet valid.
- If the source is new to TW, for now, they use the tag "Source unprocessed", as this allows other curators and helpers to pull up sources that need to be curated.
- And to anyone starting work to curate a paper, they apply the tag "Source being processed" so that other community members will not try to work on it simultaneously.

HINT: Using the Browse Annotations task you can find out who has claimed sources (or assigned various tags).

## Creating or Editing Tags
<img align="right" width="300" hspace="10" title="Find Manage Controlled Vocabulary task" src="https://sfg.taxonworks.org/s/p7t05x"/> This is most easily done using the **Manage Controlled Vocabulary task**, as shown below. Tags on sources are treated as "Keywords" here. 

- To create a new tag use the Name, Definition, and CSS Color fields on the left of the screen. 
- Note that the definition field _must have at least_ **20 characters** before the Create button is clickable. 
- Note that if you want to use the same color for multiple tags, you can use the eyedropper tool in the Label Color window. 
- To edit an existing tag, use the green icon (circle with a pencil in it) associated with the Tag (Keyword).

<img width="500" title="Create, Edit Tags" hspace="10" src="https://sfg.taxonworks.org/s/h1tuyz"/>    

## Sources With Versions or Translated Titles
Some sources exist in more than one version, either with translated titles or in entirely translated versions. To add a translated title, use the radial annotator, under "alternate values", and add the information under "title" to add the English version, such as in the case below:

Example Paper With Title in German and English
<img width="600" title="Source Title Versions" hspace="10" src="https://sfg.taxonworks.org/s/8vsf1w"/> 

Note, there are at least two reasons why you might have more than one version of source:
1. Someone has done a translation of a paper, but it has not been published separately. In this case, simpy add the translated pdf as a second document to the source (Documentation tool in Radial Annotator).
2. The translation has been published separately from the original source. A common example is Entomological Review, which is a parallel version of Entomologicheskoe Obozrenie published in English. In this case, the page numbers are likely to be different in the two journals. You should enter this as a separate source from the original paper in Russian. A search on the author and date will bring up both sources.

## Filtering Sources
TW employs a powerful utility to search for particular sources, the **Filter Source task**. Among the search fields, which can be used in any combination, are the following:
- **Keywords**: search text or title. These are verbatim text search fields that will scan the title or other text fields for keywords, such as taxon names. However, if the name is not in the title, it may not get picked up.
- **Authors**: self explanatory. Search for authors verbatim or for authors in the Authors data table.
- **Date**: you can provide starting and ending years for the search.
- **Tags**: If a source has been tagged, you can search for the tag(s) here. 
  - You can batch tag sources using the method described below.
  - (UCD@TW specific note: However, this will apply mostly to literature that has been added since the transfer of sources from UCD@NHM to UCD@TW).
- **Topics**: This is one of the potentially most powerful uses of this utility. All of the tags to citations from UCD@NHM (the original UCD in London) should have been carried over to UCD@TW on import. Thus, UCD@TW folks can search for papers containing host information, keys to species, redescriptions, or any of the topics in the Topics list. Note that if you have Topics in your pinboard, they will appear here if you select Pinboard. Or you can Search for a topic or pull up the entire list of topics using All.

Once you have created a list of sources, you can do the following:

- **Select All** (button is at top left) or **Select Individual Sources**.
- **Tag**: once you have selected sources you can tag them using whatever tag or tags are in your pinboard by hitting the green Tag button. If there is more than one tag indicated as the default in your pinboard, both will be added. Note that if you create a new tag (explained above) this automatically becomes the default tag in your pinboard. 
  - HINT: This is a powerful way to create groups of sources for particular projects.
- **Download CSV**: this creates and downloads to your browser a comma-delimited data file.
- **Download formatted**: here you have the option to choose a format style (e.g. Zootaxa) and create a formatted bibliography.
- If a **pdf** is associated with the source, you can capture it using the pdf icon.

## Importing
- one at a time
- batch upload

## Exporting
- CSV
- in a custom format


