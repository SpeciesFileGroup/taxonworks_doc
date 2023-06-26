---
sidebarParentPosition: 40 
---

# About Sources in TW

_Discover the Source (e.g. publications) management features of TaxonWorks here. For example, **sources are shared across projects**, a cool and unique time-saving community feature of TW._

Credit: much of the following information derived from a manual tailored for and written by the Universal Chalcidoidea Database (UCD@TW) Project community.

## The Source Hub
In TaxonWorks, sources include the literature database, citations, and other related content that is fed directly into the database. The easiest way to access sources is through the `Source hub` task. This is a unifying task that combines several commonly used tasks associated with sources. As a curator, researcher, data manager, student, or technician you may primarily be working from sources that are published papers. Source data can be entered one record at-a-time field-by-field, or using BibTeX or CrossRef DOIs. From most reference manager software, one can export source information in the BibTex format and edit as needed in any regular text editor. This can be used for uploading `source` data into TW. With this [wiki](https://en.wikipedia.org/wiki/BibTeX), you can learn more about BibTex.

<!--Source Hub [Screenshot](https://sfg.taxonworks.org/s/rdc03q) Legend
<img align="right" width="200" title="Source Hub" src="https://sfg.taxonworks.org/s/rdc03q"/>-->

#left[**Legend:** `Source hub` user interface sections: `select`, `filter`, `recent sources`, add `new source`, and `batch load`. ](https://sfg.taxonworks.org/s/rdc03q [Screenshot of user interface for the Source hub task])

### `Source hub` task features
#### Select a `Source`
The TW `Select a source` option offers a smart selector so you only need to enter as many letters needed to uniquely identify a source. For example, the search string 'wool dal sig' brings up Woolley and Dal Molin (2017). If a source is found it will show beneath the search box. 

- Type information in `Select a source` to see if a source is in the database. In this example, search string is 'Woolley, J. B.'
- If you click on a result in the popup beneath the search box, it will take you to a page showing that source. 

#left[**Legend**: `Source hub` search result](https://sfg.taxonworks.org/s/7vgq1z [User interface showing result of a source search])
- With `Filter sources` you can apply different search criteria to locate sources of interest.
  - Use this feature to identify sources you want to work on.
- `My recent sources` shows a list of sources that you have entered recently.
- `New Source` takes you to a screen that enables you to add new sources using various methods.
- Note the `Batch upload` option here via BibTeX formatted source data.

## Related Source Tasks
Next we delve into the details of various work you may need or want to do with source information (e.g. adding sources, editing, tagging, and filtering). The source content needing to be captured includes such data as new taxon names, people strings or names, distribution information, type information, and biological associations. For efficient source data extraction and entry, we recommend familiarity with the following TW Tasks and Data Cards.

FUTURE LINK TO INFORMATION about each of these items

| Tasks                    | Data Cards                        |
|:--------------------------|:-----------------------------------|
| Browse nomenclature       | Taxon names                        |
| Browse OTUs               | Biological Associations            |
| Source hub                | Sources                            |
| Filter sources            | Manage Controlled Vocabulary Terms |
| New taxon name            |                                    |
| New type specimen         |                                    |
| New combination           |                                    |
| Uniquify People           |                                    |

## Source Show

Once you find the publication of your choice using the `Source Hub`, clicking on it opens the `Show` page. Here you will find various ways to navigate to related information and a path to `Edit` this source record. Next we describe some of the features and functions found in the `Source show.`

<img align="right" width="200" title="Edit, Pin, Annotate a source" src="https://sfg.taxonworks.org/s/m0pegj"/>

Note the green `Pinboard icon` <img src="https://sfg.taxonworks.org/s/5ou5yb" width=30px> at the upper right. Clicking this adds the source to your Pinboard for quick access.

The `Radial Annotator` <img src="https://sfg.taxonworks.org/s/sio9gk" width=30px> is a very common function used throughout TW.  It provides convenient access in one place to a variety of relevant functions. For example, clicking on the `Radial Annotator` for a given`Source` might look like this:

<!--<img align="right" width="200" title="The Radial Annotator" src="https://sfg.taxonworks.org/s/9fbwug"/>-->

#left[**Legend**: The `Radial Annotator` functions ](https://sfg.taxonworks.org/s/9fbwug[])

- `Documentation` is where you can drop a pdf of the source, or supplementary files.
- `Tags` allow you to mark sources for later with tags such as `Source Unprocessed`, or `Source Processed for Nomenclature`. Instructions on creating and editing Tags are included below.
- `Notes` is a free text field for any information you might want to add.
- `Identifiers` provides a place to store one-to-many identifiers for a given object. For example, a paper might have a globally unique digital object identifier, aka DOI, but also an author-assigned identifier.
- `Data attributes` in TW gives you a place to store your unique data that may not fit in any typical TW field currently in the data model.

### Try Editing a Source

<img align="right" width="200" title="Edit a source" hspace="10" src="https://sfg.taxonworks.org/s/vrbjbz"/>  

- From the `Source Hub` search to a publication you choose
- Click `Edit` to open the task to make corrections or put text in title in italics, for example. 

Note that italics are indicated in BibTex format as follows `<i> text </i>`.  Everything in between the special symbols will display or print in italics. There are tools in TW to do this for you by selecting text and hitting a button. 
- Be sure to click the `Save` button to keep any changes.

HINT: In `Edit`, you see **New source** but you started by clicking the `Edit` option from an existing source. Rest assured this **New source** window does not mean duplication of the source.

## Adding a Source

About adding Sources, options offered here include the option to re-order fields and ways to auto-fill the `Source` information using a `CrossRef DOI` or using BibTeX you may generate from Zotero or EndNote. This section features commonly used fields. See the scenarios section to find related activities that fit your workflows.

- First, using the `Source hub` always check to be sure the source is not already in TW. If it isn’t found in the search box in the Source Hub, '—None—' will appear below it. With TW "smart" searches you need only provide enough minimal text to find the source (e.g. misspellings may cause you to miss a source).
- Clicking `New Source` in the `Source Hub` brings up this screen.

#left[New Source user interface options. Note you may reorder the fields as you see fit using the `Sortable fields` box in the upper right.](https://sfg.taxonworks.org/s/nhjizu [screenshot of the New Source user interfact])

- The yellow triangle means you have made changes that have not been saved.
- Be sure to `Save` before you leave this screen, or changes will be lost.
- If you have the DOI for a new source, this button provides access to the CrossRef database of DOIs. If it works (it usually does), most of the fields you need will be filled in. Be sure to _check them_, as they are not always correct.
- If you have the reference in BibTex format (most reference databases will output this), you can input it here.
  - From Zotero, simply select the reference, right-click on it, select "export item" and save the file as BibTeX.
  - From EndNote, select the reference and fill out the "label" field. Then go to File > export and select "text file", "BibTeX export". Most people don’t fill out the "label" field in their EndNote database, but if you don’t, you will have to add the label manually by editing the exported text file (that is the field highlighted in the example below). 
  - In the `New Source Form`, Choose the blue `BibTex` box at the top of the screen, and paste in the exported *.txt file. (No drag and drop here).

Most of the fields may be self-explanatory. Here we note a few tricks, for instance:
- Entering an author name in this box (5) `Authors` tries to pull it up from the table of known authors. If it isn’t found, you can use the `Add New` button that appears in this case. This is an advantage in some situations over entering authors as verbatim text (in the Verbatim from BibTex field lower in the screen), because you can easily pull them up later, for example, when adding author names to new species.

- Similarly, below the `Author` section is a search box for `Serials` (journals). If the journal is not found, look for the `New` button to the right of the Serial screen. This opens a screen for you to add a serial to the serials table.

- Once you have created the new source, you should go to `Documentation` in the blue `Radial annotator` to the right of the `Source` and upload the PDF file if available.

- (Optional) Use the TW `Tag` feature to group and track which papers need data parsing or do not. 
  - To do this go to the Tags choice in the `Radial annotator`
  - Tag the source as desired (e.g. `Unprocessed`)
  - And add other suitable tags such as `No Nomenclatural Acts` or `Nomenclatural Acts` as appropriate (this is specific for the UCD project, other projects may use different tags).

- If a source has a title in a language other than English, and you wish to enter the English translation (or translation in any other language), follow these steps:
  - Enter the source with the title as given in the paper and create it.
  - Click on the blue `Radial BibTex annotator` to the right of the source at the top of the page, and click on the pie slice for `Alternate Values`.
  - Choose title from the pick-list, the language for the translated title, and paste the translation in the Value field.
  - Be sure to `Save` it (green button) if this is a new source. Then the original title and translation will both be rendered.

  As all fields are present on the data entry screen for all types of sources, it can be a bit confusing, particularly for books and chapters in books. The article type for a chapter in a book is "Inbook", and the book title would go into the Booktitle field.  For books, there are fields for Editors, Series (if needed), Booktitle, Publisher, and Address (usually city or city and country). The type of a technical report is `techreport`.

## PDFs for Sources
 Using the UCD@TW Project as an example, note that most screens that pull up lists of sources in TW have a convenient PDF icon that either opens the source in the PDF viewer (where you can download it), or enables you to download it directly to your browser. For example, if you pull up a source using the `Source hub`, you will get a screen like this -- the so-called `Show` page. The pdf icon will open the source in your browser.

#left[**Legend**: `Source` has PDF](https://sfg.taxonworks.org/s/cbn6vy [])

You can also check to see whether a pdf has been associated with a source using the `Radial Annotator` associated with that source. 
- Click the `Documentation` wedge in the `Radial Annotator` to get the screen below. 
- If a pdf for the source is not present, drag and drop it into the box as shown. 
- If a pdf is associated with the source, you can click the icon indicated by the red arrow to download to your browser.

#left[**Legend**: Does `Source` have a PDF?](https://sfg.taxonworks.org/s/bitrgd)

## Tags on Sources
`Tags` in TW provide a unique way to group documents (or other objects in TW) in any way that you choose. With the `keywords` that you put into a tag, you and colleagues can find the relevant materials needing work or find groups where work is complete and may need vetting. 

### UCD@TW Project Tag Example

Because UCD@TW is a community-curated database, they added keyword tags for sources that allow them to better organize and coordinate group work. These are the tags currently associated with their sources. Tags can be added or removed from a source in the `Radial Annotator`. Most of these tags should be self-explanatory. 

<img align="right" width="300" title="Source Processing Tags for UCD" hspace="10" src="https://sfg.taxonworks.org/s/2cldsu"/> 

- HINT: `Keywords` are the words you put in a `Tag`.
- If certain that a source is an `early view document`, that is, not yet published, they add this tag as any nomenclatural acts in the source are not yet valid.
- If the source is new to TW, for now, they use the tag `Source unprocessed`, as this allows other curators and helpers to pull up sources that need to be curated.
- And to anyone starting work to curate a paper, they apply the tag `Source being processed` so that other community members will not try to work on it simultaneously.

HINT: Using the `Browse Annotations` task you can find out who has claimed sources (or assigned various tags).

## Creating or Editing Tags
Using the **Manage Controlled Vocabulary task** (shown below), you can create custom `tags` with the `keywords` of your choice. In this task, you will need to decide the keywords to use, enter them, and define what they mean.

#left[**Legend**: Find `Manage Controlled Vocabulary task`](https://sfg.taxonworks.org/s/p7t05x [])

#left[**Legend**: Create and Edit Tags](https://sfg.taxonworks.org/s/h1tuyz [how to create and edit tags in TaxonWorks])

- To create a new tag use the `Name`, `Definition`, and `Label color` fields on the left of the screen. 
- Note that the definition field _must have at least_ **20 characters** before the `Create` button is clickable. 
- Note that if you want to use the same color for multiple tags, you can use the eyedropper tool in the `Label color` window. 
- To `Edit` an existing tag, use the green icon <img src="https://sfg.taxonworks.org/s/tkwvhi" width=30px/> associated with the `Tag`.

## Sources With Versions or Translated Titles
Some sources exist in more than one version, either with translated titles or in entirely translated versions. To add a translated title, use the radial annotator, under `Alternate values`, and add the information under `title` to add the English version, such as in the case below:

Example Paper With Title in German and English
<img width="600" title="Source Title Versions" hspace="10" src="https://sfg.taxonworks.org/s/8vsf1w"/> 

Note, there are at least two reasons why you might have more than one version of source:
1. Someone has done a translation of a paper, but it has not been published separately. In this case, simpy add the translated pdf as a second document to the source (see `Documentation` option in `Radial Annotator`).
2. The translation has been published separately from the original source. A common example is Entomological Review, which is a parallel version of Entomologicheskoe Obozrenie published in English. In this case, the page numbers are likely to be different in the two journals. You should enter this as a separate source from the original paper in Russian. A search on the author and date will bring up both sources.

## Filtering Sources
TW employs a powerful utility to search for particular sources, the `Filter Source task`. Among the search fields, which can be used in any combination, are the following:
- `Keywords`: search text or title. These are verbatim text search fields that will scan the title or other text fields for keywords, such as taxon names. However, if the name is not in the title, it may not get picked up.
- `Authors`: self explanatory. Search for authors verbatim or for authors in the Authors data table.
- `Date`: you can provide starting and ending years for the search.
- `Tags`: If a source has been tagged, you can search for the tag(s) here. 
  - You can batch tag sources using the method described below.
  - (UCD@TW specific note: However, this will apply mostly to literature that has been added since the transfer of sources from UCD@NHM to UCD@TW).
- `Topics`: This is one of the potentially most powerful uses of this utility. All of the tags to citations from UCD@NHM (the original UCD in London) should have been carried over to UCD@TW on import. Thus, UCD@TW folks can search for papers containing host information, keys to species, redescriptions, or any of the topics in the Topics list. Note that if you have Topics in your pinboard, they will appear here if you select Pinboard. Or you can Search for a topic or pull up the entire list of topics using All.

Once you have created a list of sources, you can do the following:

- `Select All` (button is at top left) or `Select Individual Sources`.
- `Tag`: once you have selected sources you can tag them using whatever tag or tags are in your pinboard by hitting the green `Tag` button. If there is more than one tag indicated as the default in your pinboard, both will be added. Note that if you create a new tag (explained above) this automatically becomes the default tag in your pinboard. 
  - HINT: This is a powerful way to create groups of sources for particular projects.
- **`Download CSV`**: this creates and downloads to your browser a comma-delimited data file.
- **`Download formatted`**: here you have the option to choose a format style (e.g. Zootaxa) and create a formatted bibliography.
- If a **pdf** is associated with the source, you can capture it using the pdf icon.

## Importing Sources
### Add a Source, one at a time
As described above, sources can be uploaded in different ways, one-at-a-time, or in batch using BibTeX format, searching CrossRef or using a URL that pulls in source data using CrossRef DOIs. With the `New Source` task, you have all these options in one task. See above section [Adding a Source](/guide/Manual/Sources/#adding-a-source)

### Source Batch Upload
Using the `Batch Upload` section of the `Sources` `Data tab` (i.e. not the `task` tab) from the project home screen, you can upload a list of BibTex-formatted references all at once. 
![batch_load](https://user-images.githubusercontent.com/11411328/190240979-b9801d87-b97b-47fd-a5aa-bbc251ff6253.jpg)

From this screen, you can upload a Bibtex formatted TXT file that will allow for import of your references. Use this to load bibliographies exported from tools like EndNote, or Zotero. An example file is available [here](https://github.com/SpeciesFileGroup/taxonworks_doc/files/9569266/Monotomidae2.txt). Your Bibtex file must meet the following conditions:
- The file to import should be in UTF-8 encoding.
- The file should have unix style line-endings.
- All entries should include a populated 'Label' field containing a unique internal identifier for the record. Endnote does not provide this by default, Zotero does.
![label_field](https://user-images.githubusercontent.com/11411328/190244623-abc03a72-e110-4907-aec6-7f342cd08170.jpg)

Year fields should not include periods ('.').
Try using a BibTeX bibliography "linter" or validating tool ([for example](https://biblatex-linter.herokuapp.com/)) on the web to find errors in your file. 

Once you upload, you will see a preview list of your sources, highlighted in green, brown, and red. Green references will be imported, brown ones will be imported but have some soft validation that should be cehcked or fixed before upload, and red ones will not be imported.
![references_red_green](https://user-images.githubusercontent.com/11411328/190242804-7cfcde53-d369-4c1a-8fc6-b66dded57152.jpg)

Once you've ironed out any problems, you need to re-upload your data using the `Choose File` button. 
![image](https://user-images.githubusercontent.com/11411328/190245725-76f05ea7-5cb7-453f-b648-28c649fa0272.png)

Click the `Create` Button to upload your sources. 
Once the upload finishes, you should get a screen like this:

![image](https://user-images.githubusercontent.com/11411328/190246930-6c9b23a3-ece1-48d8-97de-f357f48fa5aa.png) 

You can click the edit buttons or search for them in the `Filter Sources` task. 

## Exporting Sources
In TaxonWorks, several options exist to download a source list in the desired format (e. g. comma separated (aka CSV), BibTeX, a custom style of your choosing). Using the `Filter sources` task, you limit your sources to the desired subset and then choose your download format.

### Use `Filter sources` to download selected sources

#left[Using `Filter sources` to select sources to export](https://sfg.taxonworks.org/s/ovt77c [boxes outlining options to select source data to download and to choose the download format])
- Navigate to the `Filter sources` task.
- Use the options in the left side column to limit (aka filter) your results to the desired subset
  - E. g. In the screenshot above, we used the `Title` filter option with the string `Cecidomyiidae`.
- Click on `Filter` at the top left of the window. The result (in this example) returns 1640 records.
- Next, you will decide to download one of the following:
  - all 1640 records
  - a selected subset of the records shown on the first page (default limit is 50 records)
  - all records on the page
- `Select` your set to export.
  - To select a few sources shown on the page, check the boxes next to each desired source.
  - To export all sources on this specific page, you can check just the single box in the header row at the top of the list.
  - To export all 1640 sources, you need to change the number of records shown on the page, to a number larger than your subset. See the drop-down option in the header menu for `records per page`.
    - Maximum number supported is 2500. If your set is larger than that, you'll need to do this using more than one download. Example, you might add a year range to subset your records.
- Use the download options picklist (in the header menu) to select: `CSV`, `BibTeX`, `Download formatted` to get these sources exported in the format you need.
- If you `select` `CSV` from the drop-down options, then click the `down arrow` next to the drop-down box, you get a CSV file downloaded right away.
- If you `select` `BibTeX` or `Download formatted` you will see a preview window to review if they look as expected. If all is well, `click` on the `Generate download` option.

`BibTeX` option.
  #left[Click the `Generate download` button to get the BibTeX file](https://sfg.taxonworks.org/s/sgsfe9 [Click the `Generate download` option to get the BibTeX file])

`Download formatted` option gives you many standard publishing formats to choose from. In this example, we used `Zootaxa.`
  #left[Click the `Generate download` button to get the `Custom formatted` file](https://sfg.taxonworks.org/s/8jl5hq [Click the `Generate download` option to get the `Custom formatted` file])

## Source Scenarios (aka How-To)
When getting data from publication sources into TW, many "how-to" questions may arise. Please see next the following common situations and how to proceed for each. Each of these examples offer you an opportunity to _try it_ yourself in your sandbox account.

### Find uncurated unparsed papers
_Say you want to find new sources (papers) that have not yet been curated._ The easiest way to do this is to use the `Filter Sources` task. This specific example uses the [_tagging_ method chosen by the UCD@TW Project](/guide/Manual/Sources/#ucd-tw-project-tag-example). In this example, if you enter the family `Encyrtidae` name string in both `Search Text and Title`, and choose `Source unprocessed` tag in the Tags filter option, you will generate a list of currently uncurated papers for that family:  

#left[Tags can help you organize and find specific data](https://sfg.taxonworks.org/s/nnavty [Creating tags in TaxonWorks and applying them to objects, you can then use these tags to find or subset data records])

The `tag` box allows you to create collections of sources, for example, to download as *.CSV files for your own spreadsheet or database.

The `PDF icon` opens the `source` in the `source viewer`, from which it can be downloaded. If no PDF is associated with the source, the PDF icon will not show.  You will need to find a pdf for the source outside of TW, and add it using the `Radial Annotator`, as shown above.

Note that there is a red button to `remove from project`. This is because references are SHARED across projects in TaxonWorks, that is, if someone outside UCD already created this source record, you should be able to simply add it. Note that reference data for sources are shared, but not PDFs.

The blue buttons to the right are the `BibTex Annotator` for sources, described above, and the `Navigate Radial` (looks like a compass arrow), which brings up various functions, including an _edit slice_ which takes you to the source editor.

### Document information from a newly published source
When a new source (paper/book/etc.) is published and you want to document the information it contains, note the following steps. 

(Historically, this workflow is described in-depth as an exercise in the former documentation repository in "basic_article_parsing.md" which you can find in [Other Documents](https://docs.taxonworks.org/guide/other-documents.html) from the left sidebar).

  1. Go to the `Source Hub` task card, search the sources in TW to see if it exists.
  2. If it doesn’t then create it, preferably using `CrossRef` function (blue icon at top of `New Source` Screen) as described above. We recommend using `CrossRef` because it imports more metadata (`BibTeX` e.g. from Google Scholar keeps fields to a bare minimum).
  3. If it is in the database but has not been processed, this will be indicated in the `Radial Annotator` under `tags`.  Always be careful since automatically imported articles, even if they are recent, may have wrong data. For example, the year informed by the web site may not match the year of publication (usually explicitly stated in the PDF file).
  4. Also, see immediately above for instructions on using the `Filter Sources` task.

### Add more species information
To add additional information about the species from the publication, first navigate to the OTU corresponding to the new taxon name. From the `Browse nomenclature` page for the taxon, you can hit the `Browse OTU` icon at the top of the page. This takes you to the OTU that is associated with the taxon: 

Alternatively, you can use the `Browse OTU` task to find the OTU.  TW may bring up more than one choice:

[INSERT SCREENSHOT HERE] 

In this case the OTU name with the check mark refers to the protonym (name as originally published. The OTU name followed by (c) refers to a subsequent combination. It is best to choose the subsequent combination as this will ensure that the data is tracked correctly.

(UCD-specific note: in this case, there is a third choice, which looks like a ghost, that is, a name that was created as a string when host or distribution records were imported from the original UCD@NHM. You should ignore ghosts. UCD@TW are working on eliminating them).

The most common tasks at this point will be to capture `Citations`, `Asserted Distributions`, and `Biological Associations`.
- `Citations`. These provide a way to capture any information that is in the publication (e.g. whether it includes a diagnosis, whether the taxon is figured, information on hosts or distribution, etc.), and `page numbers` on which the information is found. Citing the exact page numbers will help subsequent users quickly find this information in long publications treating many species.
- To enter this information, hit the `Radial Annotator` at top of screen
- Choose `Citations`, enter the source (it should still be pinned)
- Enter the exact `page number`s on which the information is found in the publication
- Click `Create`
- Click the blue `All` button for a list of currently used topics. Select the ones that are relevant
- Scroll to the bottom of the screen, and click the green `Create` button. 
- When you close this screen (x at upper right) you should return to the OTU (`Browse Taxa`) page. If you refresh this in your browser, you should see the `citation` you have created in the upper right.  

HINT: `Topics` are unique to each project. For the UCD project, having created a lot of topics now, they suggest creating a new topic only if absolutely necessary.  
  
  For those working on other projects, you can use the `Manage Controlled Vocabulary Terms` card in the Tasks portfolio to create and define new topics.  Here, the `Keyword` tab at the top refers to `Tags`, discussed above, and the `Topic` tab refers to `Topics`.

#### Asserted Distributions 
- Click the blue `Quick Forms` icon <img src="https://sfg.taxonworks.org/s/w7ow2j" width=20px> at top right, and follow the instructions to pick geographic areas from which the taxon is reported. This is the place to capture information from a `Distribution` section of the publication.
- Enter the `source` which should still be pinned, and the exact `page numbers` on which the distribution information is given. 
  - `Is Original` means this is the first time that this distribution has been published. 
  - `Is absent` presumably means that the publication states that the taxon is not present in the designated area, but UCD notes they are not sure when to use this.
- Next, enter the most restrictive geographic area present in the TW database, which in most cases will be a state or a province.  

HINT: If the paper contains many new asserted distributions, it is more efficient to record these using the `New Asserted Distribution task`. Here you can lock in the source and each OTU, and enter the geographic areas one by one, without having to repeat the other information. In this example, we have locked the source and OTU (red arrows below), and we can enter geographic areas one by one. The task contains other tools (not shown below) that enable you to clone combinations of the Source/OTU, Source/Geographic area, or OTU/Geographic area.

[INSERT SCREENSHOT HERE]

Next, update the `tags` (if necessary) to track progress. UCD Example, once you have entered the `distribution` data from the source, if you are not at this time going to enter other information such as biological associations, add the `Source processed – Distribution` tag to the source.

- `Biological Associations`. These are also accessed from the blue `Quick forms` icon <img src="https://sfg.taxonworks.org/s/w7ow2j" width=20px/>.  The form is shown below. Examples presented here are UCD-based. You may have to enter more information as host data may or maynot already be in your instance of TW.  

[INSERT SCREENSHOT HERE] 

  - Selecting `All` (1) will bring up a list of all `Biological Association` in the project (2).

(UCD-specific note: In general for chalcidoids, you will want to capture the `Primary (animal) host` or `Plant host`, `Plant Associate` in the case of parasitoids, or Parasitoid host in the case of hyperparasitoids). 

  - Pick the relevant blue tab and then hit the blue `Search` button (4) to find the host or associate name in the TW database. In most (UCD) cases, this will be a plant or animal name, so select OTU (3). 
    - Search for the taxon name in the database (this brings up a select OTU search box). The UCD database is extensive, and usually the host will already be there, either as a `Taxon Name` or as an `OTU`. If TW finds either of these, it will bring them up for you to choose. 
    - If neither are found, TW will ask you if you want to "customize an OTU with that name". Say yes, and cut and paste the OTU name in the OTU box that comes up. Leave the Taxon Name box below the OTU box blank. IF YOU DO THIS, BE SURE YOU ARE SPELLING THE NAME CORRECTLY! For this reason it is best to cut and paste whenever possible. There is probably no reason to enter the author name of the OTU, but it doesn’t hurt anything. 
  - Once you have entered the host or associate OTU, enter the `Citation` (source) (5) and `page number`(s) on which the information is located. 
  - As above the `Is original` box (6) means that _this biological association has not been published previously_. So check this box if this is new information not published before.
  - Use the `Browse OTUs` page for the taxon (accessed with the `Browse OTUs card`) to see all previous biological associations recorded in TW for that entity.

At this time, there is no Biological Associations task comparable to the `Asserted Distributions` task (this has been requested of the development team). 
- IF you are entering several new `Biological Associations` from a paper, you can _lock the citation_ for the source by hitting the little lock icon next to the pinboard icon in the Citation box.
- [INSERT SCREEN SHOT for above]

Since most new species will be compared with other existing species, you will want to capture this information also. This is treated as another Biological Association, since any comparison will involve another OTU. 
- Repeat the process for hosts, but choose `Compared With` (instead of associate) and follow the procedure above.

After completing these tasks, close the form and return to the OTU page for the taxon. If you refresh your browser, all the new information should be displayed.

[INSERT SCREEN SHOT of OTU for a taxon showing biological associations]

Remember to make good use of the `tags` for tracking progress.
- If you have entered data for the biological associations reported in a paper, but are not planning to enter other data such as geographic distributions at this time, add the `Source processed – Biological Information` to the source.
- If you have entered all nomenclatural acts in the paper, all relevant topics associated with the citation, all distribution information and all biological information, remove any tags associated with processing and add the tag `Source processed – Complete` to the source.  Congratulations, you have successfully and completely curated this publication!

### Enter information on an existing taxon

Before you do this, we recommend you add the `Browse Taxa` and `Browse Nomenclature` cards to your favorites for easy quick access.

- Check to ensure the publication source you are working with is on your `Pinboard` and selected as the `default`.
- Navigate to the taxon (OTU) using the `Browse Taxa card` in tasks 
- Once you have found the correct taxon, proceed exactly as instructed above for a new taxon.

HINT: _There is at least one important caveat._ If you are capturing information for a species that is currently used in a different combination from the genus in which it was originally described, you may get two OTUs for the species name when you search for it in `Browse taxa`. 
  - one will be the `OTU` attached to the `original protonym` (indicated by a `check mark` next to the name)
  - one will be the `OTU` attached to the `combination` (indicated by a `c` next to the name). 
  - _Use the OTU attached to the combination_, at least for now. This is an area of the database that is still being worked on, but this should facilitate downstream display of the new information.

### Adding images to TW

Images can be attached to various entities in TW, such as `Collection objects` (specimens) including types, `OTUs` (concepts of taxa), `Collecting events`, etc.  If you put images in TW that are not your own property or are in the public domain, you should be sensitive to copyright issues. TW will accept images in PNG, TIFF, or JPEG formats. The following are probably the most common cases in which you might wish to upload images.  

#### Adding `Type specimen` images  
- Navigate to the `Collection object` form for the type using the `New type specimen task`, or go to the `Type` screen (either `Quick` or `Comprehensive`) in the `Edit taxon name` form. 
- If the type has not already been recorded (which will be the case for many old names), you will need to create it first. **Drag and drop** the image into the `Depiction field` (it contains the text `Drop images here to add figures`), in either the `quick` or `comprehensive type` screen.
  - Of course, if you do this, you need to be sure that the images are actually of the types! Note that you can add images to holotypes, allotypes, and all of the other types possible in the `Type` screen. 
  - Note also that if you click in the box surrounded by a dashed line, TW will open a dialog box representing the folders on your computer where you can browse for the images.  

If the image is something other than the type specimen itself, such as labels of a type specimen label or a copy of notes on the type, then:
- Navigate to the `Expanded Edit` `Radial navigator` to the upper right of the `Depiction` field,
- Choose `Depiction` and check `Is data depiction`. 
- If you are pulling the image from a publication, find `Citation` in the `Radial annotator` below the image and give the `source` and `page number`. 

#### Images depicting taxa go with OTUs  

Images illustrating taxa should be attached to `OTUs`.
- Use the `Browse taxa` task to find the `OTU`.
- Note the `Radial Annotator` to the right of the name at the top left of the field has a `Depiction slice`, which you can click on and then use to add the image.
- Once the image has loaded, you can use the green `Edit` button to add a `figure name` and a `caption`.
- If you are pulling the image from a published source, be sure to enter the `source` and `page number`, using the `Citations` slice in the `Radial annotator` to the right of the image.
- To delete an image, click the red `trash icon`<img src="https://sfg.taxonworks.org/s/lnxbjc" width=20px/> to the right of it.

#### Adding Image Copyright infomation

To enter the `copyright status` for an image, find the `Attribution` slice in the `Radial annotator` associated with it (it also has a copyright symbol in it). Here you will find a menu with different copyright options, the year of copyright, and various other places to enter the `Creator`, `Owner`, `Editor`, and `Copyright holder` for the image.

Associated with each image are a `Label` field and a `Caption` field.  We recommend using the `Caption` field only to record information associated with the image, such as "Fig. 2, male head, frontal view". The `Label` field is intended for use primarily when using TW to create output such as species pages or publications.

It is also possible to batch process images using the `New Image` task, which may be more efficient if you are uploading many images from the same publication. You can drag and drop batches of images, and then assign the author/creator, source (publication), copyright information and so forth for all of them at once. If you plan to attach the images to an `OTU` or `Collection Object` (including type specimens) upload only the relevant images in each batch. Then you can use the `Depict Some` screen to assign them.