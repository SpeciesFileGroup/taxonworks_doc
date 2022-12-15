---
sidebarPosition: 400
---
# Nomenclature

_Collectively gather all your relevant nomenclature information in one place in TW. Nomenclatural data are separated from but connected to the biological taxonomically-related information about such topics as host information, genetic/genomic or other biological associations data about a given biological taxon._

## Nomenclature Quick Start
TW provides a suite of common tasks help you to manage your nomenclatural and related data. This section assumes you have some familiarity with the [TW user interface conventions](/guide/Manual/conventions.html) and introduces new user interface features where needed. Next, please familiarize yourself with the kinds of tasks TW offers related to Nomenclature. 

### Finding `Nomenclature` Tasks
- Navigate to the `Tasks` list
- Use the left side bar filter to `Select` `Nomenclature`
  - The result is a list of task cards, each one related in some way to capturing, using, filtering, editing, and publishing nomenclatural data.

#left[**Legend:** Color-coded `Nomenclature tasks`. Yellow tasks are more or less stable and useful, some changes anticipated but basic functionality will remain the same. If green, they likely won't change. Red indicates experimental status -- they work, but might not last or may radically change.](https://sfg.taxonworks.org/s/xaxbq3 [Screenshot of user interface showing all the current nomenclature-related tasks]). 

`Browse nomenclature`, `New taxon name`, and `New combination` are useful tasks to add, view, and modify existing classification. `Browse nomenclature` provides a convenient way of navigating from one `Taxon Name` to another. It also gives you an option to quickly jump to the `Edit Task`.

## Curating data

### Basic information

All `Taxon Names` are stored as uninomials (called `Protonyms`) in TaxonWorks. A hierarchical nomenclature is entered by you and is customizable to provide the maximum level of flexibility for classifications. Three fields are required to create a `Taxon Name` record in the database: `Name`, `Parent`, and `Taxonomic rank` using the `New taxon name` task. 

- Select the `New taxon name` task.
- Enter the desired `Name`
- Start typing to select the `Parent` from a drop-down that will appear
- Select the `Rank` 
  - Note that TW software smart logic guesses at the `Rank` so please check.
- Click `Create` to `save`.
  - The `Parent` is any valid taxon of a rank higher than a new one. This section is the only section of the form which requires the use of the Save button (after `Create` step). All other sections of the `New Taxon name` form use autosave mode.
  - After you click `Create` the task name changes to `Edit taxon name`.

#left[Three fields required to create a `New taxon name`](https://sfg.taxonworks.org/s/0qc1zo [image shows `Name`, `Parent`, and `Rank` populated])

Once you have entered the required fields for `New taxon name` and clicked `Create` more fields become available for you to populate with data for adding `Author`, `Status`, `Relationship`, `Synonymy`, `Type`, `Original Combination`, `Subsequent Combination`, `Classification`, `Gender`, and `Etymlogy`. Please review the next screenshot for what this looks like in the UI. Below this screenshot after the [Conceptual Approach](https://docs.taxonworks.org/guide/Manual/nomenclature.html#conceptual-approach) section, you will find a breif description of each of these sections followed by detailed explanations and examples.

#left[All fields in the `New taxon name` task](https://sfg.taxonworks.org/s/xvmrib [image shows `Author`, `Status`, `Relationship`, `Synonymy`, `Type`, `Original Combination`, `Subsequent Combination`, `Classification`, `Gender`, and `Etymlogy` fields])

### About Root
The highest rank taxon in a given hierarchy is `Root`. This is a default Taxon and can not be modified, it is created when the project is first initiated. The first taxon attached to the Root requires selection of the Code of Nomenclature (ICZN, ICN, ICNP, ICTV). This selection is required to enforce validation rules specific to this particular Code of Nomenclature. All taxa below this taxon do not require selection of the Code, it will be inherited from the parent. The same database may contain taxa covered by different Codes of Nomenclature. 

#left[Illustrating the concept of `Root` in TaxonWorks](https://sfg.taxonworks.org/s/kn9ib3 [showing how a taxa is related to the concept of root])

See this next screenshot to show how you can have other taxa at the `Root` as needed, that reference a different Code of Nomenclature. 

#left[Showing several taxa that cross kingdoms and Codes of Nomenclature at the level of root](https://sfg.taxonworks.org/s/p13yje [3 taxa shown at level of root])

### Conceptual approach

To understand nomenclature in TaxonWorks it's important to understand that the basic idea is to accumulate/add new facts rather than update, change, or delete existing records. This is incredibly liberating in many ways, as the system will resolve the current status by inferring across the facts that you have added. As an example, rather than think "how do I change this name to invalid", think "how do I add the fact that so-and-so stated this name is invalid". The name was valid in the past, now we add a fact to indicate somebody more recently thinks it's invalid. The system will look at the years the facts were applied and then summarize the facts as we presently see them. This also lets the complete nomenclatural history, in all its gory detail, be recorded.

### Authorship

In the `Author` section of `Edit taxon name` you have _three optional ways_ to pick from to record authorship. This information sets the **original authorship** of the name (as opposed to a subsequent citation). 

#left[Three ways to add **original authorship** via `Source`, `Verbatim`, or `Person`]( https://sfg.taxonworks.org/s/sqzx6q [screenshot shows the 3 ways taxon name `Author` can be added])

The `Source` option works if you have added the relevant `Source` (e. g. publication) for this particular `Taxon name` to TaxonWorks.

#left[Add **original authorship** via `Source`](https://sfg.taxonworks.org/s/a37hw9 [adding taxon name `Author` via `Source`])
- Click `Source`
- Type just a few characters in the search box to find the correct source. A drop-down appears with your search results. Select the relevant publication.
  - `Source author` and `Source year` of that publication will be used for the taxon name `Author`.
  - Note you can **pin** this source if you know you'll immediately be adding more names with the same `Author`.
- Results for this example above would be _Suricata_ Desmarest, 1804.

Here, this example shows using the verbatim option:
#left[Add **original authorship** via `Verbatim`](https://sfg.taxonworks.org/s/b7go7i [screenshot shows adding taxon name `Author` by entering the verbtim information in Verbatim author and Verbatim year fields])

- Click `Verbatim`
- Enter the `Verbatim author` and `Verbatim year` directly.

With the third option to use `Person` you search to find the name you want. (This works the same way as the search for `Source` worked in the above example). Note `People` names are shared across TaxonWorks Projects. Review the options before choosing from the dropdown your search provides.
#left[Add **original authorship** via `Person`](https://sfg.taxonworks.org/s/ezfjtu [screenshot shows adding taxon name `Author` by searching the `Person` table in TaxonWorks])

- Click `Person`
- `Search` (enter only a few letters)
- Click to select the desired `Person`
  - This example shows Desmarest was found by Search and then selected.
  - If you pick an incorrect `Person` then Click on the trash can to remove and search to pick a different person.
  - If you have more than one `Author`, then pick the others here as well.

If **authorship** is provided by you in more than one way it is prioritized and works as follows:

- From the `Verbatim Author` and `Verbatim Year` fields
- From the `Person` (TaxonNameAuthor) assigned as an author of the taxon name
- From the `Source author` and `source year` fields
- From the `Person` assigned as an author of the Source (SourceAuthor) assigned as the original citation

The _preferred priority_ is:

- Assign an original citation (`Source` in `Author` section) that has `People` assigned as authors to that `Source` entry. 
- Override the **authorship** in the `Source` if needed by assigning one or more `People` from that source as authors in the `Person` section (for example when doing Smith in `Jones & Smith`).
- Use `Verbatim Author` and `year`, if original source and `People` roles are not provided.

Keep in mind.

TaxonWorks is about creating the links between concepts (e.g. things like `People`, `Collection Objects`, `Names`, `OTUs`). How those concepts are visualized is a big can of worms. You can assign alternate values to People's names (e.g. abbreviations, alternate spellings) if you want to reflect how an author's name is spelled in different contexts.

#### ICZN 

##### Parentheses around author/year

- The preferred mechanism to rendering parentheses around an author/year (indicating current placement is different than original) is to assign the `original Genus` in the `Original Combination` (see below). This will automatically render the name correctly.

#left[Adding parentheses around author/year using `Original Combination` in `Edit taxon name`](https://sfg.taxonworks.org/s/glilp1 [screenshot shows `Original Combination` section of `Edit taxon name` task])

- If you do not know the original combination, or you wish to "force" the use of parentheses you must use the `Verbatim Author` option. 
  - Place the parentheses around the author there: `(Smith)`. The code will automatically include the year in rendering out the name as needed.

##### Year of publication (availability) versus stated year

The year a name becomes available defines its priority for nomenclatural purposes. It may differ from the year printed on the matter which is made available. The year of publication can be inferred from the Source linked to the name as an original combination, or explicitly noted in the `Author` > `Verbatim` > `Verbatim year` section.

1. If you only have reference to a single value, it goes in `year` (month, day)
2. If you have reference to two year values, the actual `year of publication` goes in `year`, and the `stated year of publication` goes in `stated_year`.
3. If you have `month` or `day` publication, they go in `month` or `day`.
4. The value provided in `verbatim_year` is always assumed to be the actual year of publication.

We assume that if two dates are known then the user will create and reference a `Source` to record those values, i.e. there is no mechanism to provide and differentiate the two types of year directly with the name itself.

### Nomenclatural Status

This section of `Edit taxon name` relates to nomenclatural statuses, which are applicable to the taxon itself and does not require any knowledge of related taxa (e.g., `Nomen nudum`, `Non binomial`). Note that `valid` is the default `Status`.

#left[Three ways to assign `Status` to a taxon name](https://sfg.taxonworks.org/s/2tmtam [screenshot showing where to pick `Status` values for this taxon])

- Multiple Statuses could/can be assigned to the same taxon
- Most common status are listed directly in the `Common` section for you to pick from.
- All available statuses are listed in `Show all` section in a pop-up for you to scroll down and click to select. The statuses which are not applicable to a current taxon are greyed out.
- The `Advanced` option allows you to search for a specific status.

#left[Using `Show all` to select a `Status` for a taxon](https://sfg.taxonworks.org/s/nyehuz [screenshot for how to pick `Status` values for this taxon using `Show all` option])

Keep in mind.

1. All names by default are valid names, i.e. a `valid` status should not be assigned to all the names in the database. Use of the `Valid` status is reserved for special cases, for example when the taxon has a nomenclatural history of being treated as a synonym, and later was treated as a valid name again, in order to preserve a historical record of synonymy, and override it, a status `valid` could be added to the taxon, the `citation` on the status will indicate the `source` where the validity of taxon was confirmed.
2. Status `Homonym` could be added to the taxon to indicate `invalid` status in cases where the `senior homonym` is not known, but this should be avoided -- the better way to record homonymy is to `create a relationship` (see below).

#### Example 1: Nomen nudum

- Select 'Nomen nudum', one of Common statuses

### Relationships - a nomenclatural statuses bases on relationship with other taxon

The nomenclatural relationships are the statuses which require record of two Taxon Names. For example, 'Aus' is a synonym of 'Bus'. In this relationship we can get status for each of those two names 'Aus' is a Junior synonym, 'Bus' is a Senior synonym.

Keep in mind.

[START MORE EDITING HERE]

1. Always start with (browse too, then edit) the _invalid_ name and add relationships that reference the valid (or senior) name
2. Check the soft validation messages, they will let you know if what can be improved or added.
3. When adding a relationship, select one that is as specific as possible, 'subjective synonym' is better than just 'synonym', 'primary homonym' is better than just 'homonym'

#### Example 1: Synonymy

* Although each relationship could be read in either direction (Aus is junior synonym of Bus, Bus is senior synonym of Aus) only one way recording the information is supported in TaxonWorks at the moment. The relationship should always start from **invalid name**. In our example 
it is 'Aus', so the editing should start on the Edit Taxon Page for 'Aus', to build a new relationship, search for the second (related) name, in our example it is 'Bus', and then select the status for this relationship, 'objective synonym'.
* Once the relationship is created a citation could be added to this relationship to indicate the Source, where this synonymy was first proposed.
* In cases of competing synonymy, where in one source 'Aus' is recorded as synonym of 'Bus', and in the next publication it is a synonym of 'Cus', both synonym relationship should be created in the database, if the citations are provided, the latest citation will be used to position
the taxon in the classification.
* In cases where the name was reported as a synonym by mistake and was revalidated in a later publication, the relationship _should not be deleted_, a 'valid' status could be added to the taxon to overwrite the synonymy (see above) 

#### Example 2: Homonomy

If we know that `Aus aus` is a homonym of `Bus aus`, and that `Aus bus` is a replacement name, then we have to express **two** "facts", i.e. relationship between taxa, in this case 1) `A. aus` is a synonym of `B. aus`, 2) `A. aus` is replaced by `A. bus`.
Both of those statemens are invalidating statemens, so both of them start with the taxonomic page for `A. aus`

The basic steps:
1) Ensure all 3 protonyms exist in the database (`aus`, `aus`, `bus`)
2) Navigate to the _invalid_ name `Aus aus`
3) Create the first relationship: Select the _senior homonym_ name `Bus aus` and a homonym relationship (be specific: 'primary homonym' or 'secondary homonym')
4) Create the second relationship: Select the valid name (replacement name) `Aus bus` and add a synonym relationship ('replaced by' or 'subjective synonym of', the second option is true when the substitute name was selected from one of the junior synonyms)

#### Example 3: Misapplication

If we know that `Aus aus Author2` is a misidentification of `Aus aus Author1`, and that `Aus bus` is a correct name, then we have to express **two** "facts", i.e. relationship between taxa, in this case 1) `A. aus Author 2` is a misidentification of `A. aus Author 1`, 
2) `A. aus` is invalid name for `A. bus`. Both of those statemens are invalidating statemens, so both of them start with the taxonomic page for `A. aus`

The basic steps:
1) Ensure all 3 protonyms exist in the database (`aus`, `aus`, `bus`). Additional protonym should be created in the database fo 'Aus aus Author2' different from the correctly applied name 'Aus aus Author1'
2) Navigate to the _invalid_ name `Aus aus Author2`
3) Create the first relationship: Select the _correctly applied name_ name `Aus aus Author1` and a 'misapplication' relationship
4) Create the second relationship: Select the valid name `Aus bus` and add non specific 'invalid, linked to' relationship (do not use 'synonym' relationships, since misapplication is not an avaliable name)

#### Misspelling
Is created the same way as misapplication
 
### Original combinations

The original combination is required to keep track of the taxon history, properly handle parentheses in the author string, and also to validate homonymy between taxa. 
There are two ways to enter the original combination in TaxonWorks

### Cititing the original combination
To cite usage of the original combination cite the taxon name (Protonym) itself.  This is because you are citing the fact that a) there is some name that b) came into existence in some first use, i.e. the definition of a Protonym.

#### Method 1 (when the original combination is different from the current combination)
1) To properly handle taxonomy, always enter taxon name (basic information) in the original form (e.g. species was described as Aus albus Author, now it is Ba alba (Author), the name of the taxon should stay as 'albus', the form transition will be handled by the genus gender 
and the species part of speach.
2) To build an original combination, first move the name of the taxon to the nomenclatural rank level, at which it was originally described. This is important, because a species could be originally described at the subspecies level.
3) Select the original genus and if needed the original subgenus, assuming those taxa are already in the database (if they are not, enter a separate browser tab and enter missing names in the classification.
4) The rank of each name could be adjusted, the name could be dragged up or down.

Note: if the original name has an incorrect spelling which had to be corrected (e.g. 'mülleri' or 'albi-lineata'), or the original genus was misspelt, two protonyms have to be stored in the database. The first one with the correct spelling and the second one with the 
original spelling. The second protonym should be linked to the first one with the 'Incorrect original spelling' relationship. This relationship also overrride the restriction on the Taxon Name spelling, if you cannot create a taxon because it is incorrectly spelled, put 
the corrected spelling for the name, save taxon, add 'misspelling' or 'incorrect original spelling' relationship, change the taxon name to the misspelled form and save it again. 

#### Method 2 (when the original combination is the same as the curent combination)
* Click the button **Set as current**

### Type metadata

#### Genus and Family group names

Data can be added directly in the Type section

#### Species group names

See also the [basic article parsing](https://github.com/SpeciesFileGroup/taxonworks_doc/blob/master/manuals/BASIC_ARTICLE_PARSING.md) manual for a walk through that addresses many of these issues in a more contextual framework.

_Before you start_: 1) Add biocuration classifications that you might reference (e.g. `Male`, `Female`, `Adult` etc.).  Do this by adding a new Controlled Vocabulary Term of type `BiocurationClass` or using the `Manage biocuration types and groups` task.  You only need to do this once in your project.

Either access the task `New type specimen` through the `New taxon name` task in the `Type` section or directly from the tasks tab (filter by `Nomenclature` on the left to quickly find the task).

* Select the type (holotype, paratype, etc.), this unlocks the Collection object form below.
* If the type designator is _not the same as the either 1) the original citation on the species Protonym or 2) the original citation on the type material record_ then select the type designator if known.  The designator will be *inferred* from the aforementioned citations otherwise.
* At present, if you have created a collecting event find it by id (the current searc is a stub, and very crude), otherwise add verbatim data to the "Buffered" sections, these data persist with the collection object, to be transcribed into collecting events, determinations records, etc. some time downstream in the digitization process.
* Select the Biocuration classes you want by clicking on a green button (remember green in TaxonWorks means create a record). This creates a record indicating that the collection object is that class.  The button will turn red (remember red in TaxonWorks means destroy a record).  Clicking a red button will remove that classification from the object.
* Select a repository
* Click create.  Your record will be added to the right side of the form, you will see it highlighted by type type in a light green.  That means the form on the left can be used to edit that record.
* Click 'New type' to add another record (e.g. paratype).

### Family group names 

Several categories for the family group name exist: original family group name form; incorrect original family group name form;
subsequent family group name form; misspelling.
All of them could be added to the database as individual Protonym linked to the correct family group name form (valid or synonym) with 
single TaxonNameRelationship
For example Aini is "family group name original form of" Ainae

### Citations

### Incertae sedis

Incertae sedis implies a relationship between two protonyms.  Any time something you want to express references two protonyms you must use a Taxon Name Relationship to express this data.  For the name in question select the "parent" under which it should be placed, then select the relationship.

### Misidentifications

Misidentifications are a tricky gray area.  Remember that we only care about the nomenclatural consequences of the use of the names in questions.  Taxon Identifications are linkages of OTUs to Collection objects, this is the preferred mechanism for linking one or more identifications to a collection object.

A question from a user reflects the trickiness:

1. Imagine there is a genus _Aus_, with type species _Aus bus_. Then someone describe a new species _Aus cus_, which subsequent authors don't even consider to be in the same superfamily. So I cannot enter _Aus_ twice because the second one is a misidentification but no one knows for sure what it is.

- This is just an original genus. This is the same genus in both species. The genus cannot be misidentified. This is just a position of the 
species in classification, regardless where it was originally described or subsequently placed.

The proper way to hand this is to use a single _Aus_, which is placed in the correct family. In both species _Aus_ is the Original genus, in _Aus bus_, this is also a Parent taxon. In case of _Aus cus_, if the current genus is not assigned, the superfamily is the parent taxon.
An *incertae sedis* relationship should connect _Aus cus_ and the superfamily

2. Species misidentification/misapplication. 

- Misapplication itself does not make an available name. But this a common practice to include misapplication in the list of historical usages of the taxon names, especially in the cases where a new name is proposed as a "replacement" for a previously misidentified species.
Remember, that _nomen novum_ cannot be proposed for misapplication, since it requires a previously available name, but invalid because of homonymy. To record this in TaxonWorks, a new Protonym for a misapplied name should be created in the database. This Protonym should be linked to two other Taxon Names with two Taxon Name Relationships. The first relationship is to an available name with the same spelling (it could be a valid name or a synonym). The relationship type is "Misapplication". The second relationship "Invalidating" relationship should link this TaxonName to the correct name for this taxon. Remember, the "Synonym" relationship is not applicable here, since it assumes that both names are available name, and in this example Misapplication is not an available name.  Follow the soft validation messages for other essential information for the Protonym in the database.

An example: The name _Aus aus_ Author 1, is misapplication for _Aus bus_, and _Aus aus_ Author 2 is completely different species.

After the Protonym for the first name is created two relationships will be added in the database:
* _Aus aus_ Author 1 Misapplication, linked to _Aus aus_ Author 2
* _Aus aus_ Author 1 Invalid, linked to _Aus bus_

Once the misapplication is created, an OTU could be linked to the TaxonName, which could be used, for example, for taxon determination.

## Navigation helpers

### Hotkeys.

TaxonWorks has many hotkeys that can greatly improve productivity if mastered. Click the orange help circle, then the 'Keyboard shortcuts' slide-out to see an up-to-date list of hotkeys.

Mac computers use 'ctrl' as triggering key, PCs use 'alt'.

While on New/Edit taxon name there are extensive options:

* ctrl+s Save taxon name changes
* ctrl+n Create a new taxon name
* ctrl+p Create a new taxon name with the same parent
* ctrl+d Create a child of this taxon name
* ctrl+l Clone this taxon name
* ctrl+e Go to comprehensive specimen digitization
* ctrl+p Create a new taxon name with the same parent
* ctrl+m Go to new type material
* ctrl+c Go to comprehensive specimen digitization
* ctrl+b Go to browse nomenclature
* ctrl+o Go to browse otus

Additionally, on any browse/show page you can:
* ctrl+p - automatically pin and default that name to the pinboard
* ctrl+g - pop-up a quick navigation modal that lets you navigate to the defaulted records

## Help

* _Their is currently NO useful help from the orange slideout on the right, this will change as text appears here and migrates to the native help system._

## Understanding the data model

* Concepts, at a low level, are gradually being documented here https://github.com/SpeciesFileGroup/taxonworks_doc/tree/master/concepts (see the TaxonWorksNomenclature.pdf, you can zoom in to see details).

## Nomenclature, not biology!

* A reminder, if you want to record information about biology (hosts, parasites, distribution, etc.) that doesn't belong in the nomenclature section, you will use the OTU radial icon or OTU nav icon to access and record those data from a nomenclatural context.

## FAQ 

### What about `fossil` taxa in TaxonWorks?
- If the taxon is a fossil, you need to select `Fossil` in the `Status` field of the `New (Edit) Taxon name` task.  The name will now appear with a little cross symbol to the left. 

There are special rules in [ICZN](https://code.iczn.org/zoological-nomenclature/article-1-definition-and-scope/) and TW for fossil taxa. From Article 1 of the ICZN Code "1.2.1. The scientific names of extant or extinct animals include names based on domesticated animals, names based on fossils that are substitutions (replacements, impressions, moulds and casts) for the actual remains of animals, names based on the fossilized work of organisms (ichnotaxa), and names established for collective groups (see, in particular, Articles 10.3, 13.3.2, 23.7, 42.2.1, 66.1, 67.14), as well as names proposed before 1931 based on the work of extant animals."

Note well that for simplicity in TW, the flag `fossil = extinct` is set to `true` by default. If the taxon name is based on a fossil remnant or cast or animal evidence trace, the organismal group may not be extinct. In this case, unselect the flag.

### Can you describe how the authorship label for a name is determined?

Authorship of a name can asserted in 4(!) different ways. That seems confusing at first, but determining what gets shown is pretty straightforwrd.

The authorship label is determined by the FIRST option in the following list that is true. All other values are referenced only in validation reports.

- If the `verbatim name` field is filled out, then it is used.
- If People are assigned as TaxonName authors, then their family names are used.
- If People are assigned to a Source as authors, and that Source is the original source for the taxon name, then their family group names are used.
- If the `author` field of a Source is filled out, then that field is used.

### There are a lot of options for assigning the authorship of a TaxonName, which is the preferred way?

The preferred mechanism is to link the TaxonName to a Source, and assign authors (People) to that source (third option in the list above).  This is the most granular way of creating the data, and therefor it will ultimately give you the most flexibility in reporting and validating the data.

###  Do you have any instructions on how to change combinations or enter new synonymies in TW?

Please follow the instruction in the Nomenclature Basics.

### How do I find out where types are deposited, do you not yet have this function in TW?

Specimen deposition could be assigned to Specimen. If you create the type specimen for the Taxon Name, there is a field for
the type repository. To create the type specimen follow one of the links provided in the Edit Taxon Name task, either *Quick* or
*Comprehensive* in the *Type* section. *Quick type specimen* task allow to copy the entire verbatim-label information. 
The *Comprehensive collection object* allow to provide more detailed information about the specimen. 

### How do I get to the place in TW where I can add a new basionym? I need to try it out and see what happens.

For ICN names, the basionym have to be creaed as a separate protonym and linked to current name with basionym TaxonNameRelationship
For ICZN names, the original combination of protonym is an equivalent of basionym in botany.

### How would I remove a name from synonymy? 

You can symply delete the *Synonym* Taxon Name Relationship. But when the name has been historically treated as a synonym, 
and subsequently was restored, the best practice would be to preserve both treatments in the database. Keep the synonym 
Taxon Name Relationship with its original citation in the database. Add the nomenclatural Status *Valid* to the name. 
This status will overwrite the Taxon Name relationship. Please remember to add the citation to the status, to know where and
when the name was reinstated.

### What is the word form for "arbitrary combination of letters"?

The word form is "noun in apposition"; etymology "arbitrary combination of letters"

### How to record in the database a situation when a taxon, species or genus, is moved from one family to another?
  
  Edit TaxonName task has a special section for this, *Classification*. Select the family-group name, and the 
  relationship *Classified as*. This could be used for original placement of the taxon, or for the subsequent classification.
  Once the Taxon Name Relationship is created, assigne the citation using the radial annotator. 

### How to record a *nomen nudum* that was "subsequently validated"?

  ICZN does not provide a procedure to "validate" a *nomen nudum*. Once unavailable, the
  taxon name keeps this status. The taxon could be described in a subsequent publication
  by the same or a different author(s), with the same or a different spelling. Both names
  in TaxonWorks should be regarded as separate protonyms. *Nomen nudum* should be marked
  with one or several of the appropriate nomenclatural statuses: *nomen nudum* or, preferrably, a 
  more specific one, for example *nomen nudum: no description*. Once the valid name is described and the
  second protonym is entered to the TaxonWorks database, the *nomen nudum* 
  could be linked to the available name (valid or invalid) with a 
  TaxonName Relationship "unavailable or invalid".

### How to enter the author for misspelled name?

The name which is not spelled correctly, the original source, where the misspelling was 
introduced, is still required. The role is not require, because the author string is always 
generated from the correctly spelled protonym. Protonym of misspelled name is linked to the correctly 
spelled name with the Misspelling TaxonNameRelationship.

### How can I record the history of the taxon which had several historical *Incertae sedis* placements?

The *incertae sedis* relationship always correspond to the current placement of the taxon.
For example, a species assigned to the family, instead of proper genus as a parent.
Normally, this will be marked as an invalid placement, the *incertae sedis* relationship
helps to override the error. For historical placements, a different relationship should be used:
*source classified as*.

## FAQ related to family-group names

### Is it possible to link a note to a family group name to specify what the original spelling is, at what level it was proposed and when?

Another protonym with the original spelling should be created in the database. Clone button could be used to replicate 
all information from the current family-group name. This new taxon name should be linked to the original name using special
Taxon Name Relationship *Incorrect original spelling* or *Family group name original form*. TW could be restrictive
in the ending of the original name before you assigne the relationship, so it is recommended to save the Taxon Name
with the proper ending, add the ralationship and return back to modify the *Name* to the original form. And save Taxon Name
again. Assigning the relationship removes the restriction on the family-group name form and ending.

### What protonyms do I need to create for each form of the family-group name?

Individual protonyms should be created for original and each subsequent form of the family group name.
Each protonym should be linked to the current form with the "Family-group name form" or "Family-group name original form" relationships

### To which ranked Protonym do I attach the type genus?

The type genus shoild be attached to any available family-group protonym. 

### Do I have to re-attach the type genus to each family group protonym?

If there are several coordinate names with the same type genus (for example, a family with nomynopypical subfamily),
the same type could be automatically assigned from one to another through the Soft Validation fixes.

## FAQ related to genus-group names

### Do I have to create nominotypical subgenus or subspecies manually?

When a new subgenus or subspecies created and the parent taxon does not contain any other sub- taxa,
you can see the soft validation message like this: "*The parent species of this subspecies does not contain nominotypical subspecies*".
TaxonWorks can detect and created the nominotypical subgenus and subspecies automatically when
running Soft validation fixes, but now it could only be done programmatically. Before the fix is
implemented to the interface, it is advisable to created the missing subgenus or subspecies manually.

### To which rank should I attach the type species in cases where nominotypical genera exist, genus, or subgenus?  What if I have done the opposite?

The type species should be attached to each available protonym. If the type species is attached to either
genus or subgenus, it could be automatically re-assigned to the other through Soft Validation Fixes.

### Does the attachment of the type species differ if the nominotypical subgenus came with, or after the original description of the genus?

According to the ICZN Art. 43, a name established for a taxon at either rank in the genu-group
is deemed to have been simultaneously established by the same author for a nominal taxon at
the other rank in the group; both nominal taxa have the same type species, whether it was fixed originally
or subsequently. Changes in the rank also do not affect the type genus designation. 

## FAQ related to species-group names

### I have a species which was originally described in genus which obviously lies outside the scope of my group. How can I use this genus in the original combination?
  
  The genus name have to be entered into the classification before the use. It may have to Root assigned as
  the parent, or, preferrably, the basic classification (class, order, family) could be provided as well.

### Do I have to create a nominotypical subspecies?

See the description above for the nominotypical subgenus.

### Which ranked name should I attach the type material to, species, or subspecies? 

The type material could be attached to the coordinate taxon of any rank (species, subspecies, superspecies). The Soft
Validation Fix will help to re-attache the same specimen to different ranks. Multiple specimens should 
not be created.

### When creating protonym, what names should I put in Original combination fields?

When selecting Original genus for a species, sometimes two options are available: a valid genus 
name and coordinate subgenus with the same name("*Aus*" and "*Aus* (*Aus*)"). In cases like this the preference should 
always be given to the lower coordinate taxon name ("*Aus* (*Aus*)"). If the genus name is
selected instead, you will get a soft validation waring "*Original Combination: Relationship should move from genus to subgenus*".
This is not a critical error. TaxonWorks can detect and automatically move the relationship
from a genus to coordinate subgenus. But at the present implementation, it could only be done programmatically.




