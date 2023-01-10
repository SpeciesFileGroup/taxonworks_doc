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

The _preferred priority_ for your workflow is:

- Assign an original citation (`Source` in `Author` section) that has `People` assigned as authors to that `Source` entry. 
- Override the **authorship** in the `Source` if needed by assigning one or more `People` from that source as authors in the `Person` section (for example when doing Smith in `Jones & Smith`).
- Use `Verbatim Author` and `year`, if original source and `People` roles are not provided.

Keep in mind.

TaxonWorks is about creating the links between concepts (e.g. things like `People`, `Collection Objects`, `Names`, `OTUs`). How those concepts are visualized is a big can of worms. You can assign alternate values to People's names (e.g. abbreviations, alternate spellings) if you want to reflect how an author's name is spelled in different contexts.

#### ICZN 

##### Parentheses around author/year

- The preferred mechanism to rendering parentheses around an author/year (indicating current placement is different than original) is to assign the `original Genus` in the `Original Combination` (see below). This will automatically render the name correctly.

#left[Use `Original Combination` in `Edit taxon name` to render parentheses](https://sfg.taxonworks.org/s/glilp1 [screenshot shows `Original Combination` section of `Edit taxon name` task])

- If you do not know the original combination, or you wish to "force" the use of parentheses you must use the `Verbatim Author` option. 
  - Place the parentheses around the author there: `(Smith)`. The code will automatically include the year in rendering out the name as needed.

##### Year of publication (availability) versus stated year

The year a name becomes available defines its priority for nomenclatural purposes. It may differ from the year printed on the matter which is made available. The year of publication can be inferred from the `Source` you linked to the name as an original combination, or explicitly noted in the `Edit taxon name` task in the `Author` > `Verbatim` > `Verbatim year` section.

From the `Source hub` task
- Type a few characters to find your `Source` and select it.
- Click the `Edit` (pencil) icon to edit the `year` (month, day) as follows
  - If you only have reference to a single value, it goes in `year` (month, day)
  - If you have reference to two year values, the actual `year of publication` goes in `year`, and the `stated year of publication` goes in `stated_year`.
  - If you have `month` or `day` publication, they go in `month` or `day`.
  - The value provided in `Edit taxon name` > `Author` > `Verbatim` > `verbatim_year` is always assumed to be the actual `year of publication`.

We assume that if two dates are known then the user will create and reference a `Source` to record those values, i.e. there is no mechanism to provide and differentiate the two types of year directly with the name itself.

### Nomenclatural Status

This section of `Edit taxon name` relates to nomenclatural statuses, which are applicable to the taxon itself and does not require any knowledge of related taxa (e.g., `Nomen nudum`, `Non binomial`). Note that `valid` is the default `Status` so that you do not usually have to select `Valid` (except in certain circumstances, see below).

#left[In `Edit taxon name`: Three ways to assign `Status` to a taxon name](https://sfg.taxonworks.org/s/2tmtam [screenshot showing where to pick `Status` values for this taxon])

- Multiple Statuses could/can be assigned to the same taxon
- Most common status are listed directly in the `Common` section for you to pick from.
- The `Advanced` option allows you to search for a specific status.
- All available statuses are listed in `Show all` section in a pop-up for you to scroll down and click to select. The statuses which are not applicable to a current taxon are greyed out.

#left[Using `Show all` to select a `Status` for a taxon](https://sfg.taxonworks.org/s/nyehuz [screenshot for how to pick `Status` values for this taxon using `Show all` option])

Keep in mind.

1. All names by default are valid names, i.e. a `valid` status should not be assigned to all the names in the database. Use of the `Valid` status is reserved for special cases, for example when the taxon has a nomenclatural history of being treated as a synonym, and later was treated as a valid name again, in order to preserve a historical record of synonymy, and override it, a status `valid` could be added to the taxon, the `citation` on the status will indicate the `source` where the validity of taxon was confirmed.
2. Status `Homonym` could be added to the taxon to indicate `invalid` status in cases where the `senior homonym` is not known, but this should be avoided -- the better way to record homonymy is to `create a relationship` (see below).

#### Example 1: Nomen nudum

In this example, you use the selection of a `Status` using the radio buttons shown under `Common`.
#left[After you select a `Common` status, e. g. `Nomen nudum`](https://sfg.taxonworks.org/s/2eqibx [screen shot from `Status` section of `Edit taxon name`])
- Select `Status` = `Nomen nudum` option under `Common`.
- Note your choice is automatically saved after you selected it.

### Relationship

In this sense, a `Relationship` references a nomenclatural `status` (or more than one status) based on the connection to other taxon names.

These nomenclatural relationships are the statuses which require record of two Taxon Names. For example, `Aus` is a **synonym** of `Bus`. In this relationship we can specify a status for each of those two names: 
- `Aus` is a Junior synonym
- `Bus` is a Senior synonym

Keep in mind.

For a given _invalid_ name, navigate to `Edit taxon name` > `Relationship` for that _invalid_ name. In the `Relationship` section, you will do two things: search for and select the related name, then you declare the relationship status picking from the options provided (as described above).

Here's a quick example of what it looks like when you have completed the above process. In this example, we started by using the `Browse Nomenclature` task to search for and find the Nomenclatural record for the _invalid_ name `Thysanidae Peck, 1951`. Then, we clicked the <img src="https://sfg.taxonworks.org/s/tkwvhi" width=25> to get to `Edit taxon name` and go to the `Relationship` section. We searched for the (valid) name Signiphoridae Howard, 1894 and picked it. We then selected one of the default statuses: `Subjective synonym of`. Our choice was saved automatically.

#left[What we see after we declared the `Subjective synonym` status relationship ](https://sfg.taxonworks.org/s/7xi00h [showing the declared relationship between two taxon names])

1. Always start with the _invalid_ name and add relationships that reference the valid (or senior) name
2. Use `Browse nomenclature` to find the _invalid_ name, then `Edit` the `Relationship` for that name.
3. Check the soft validation messages, they will let you know what may be improved or added.
4. When adding a relationship, select one that is as specific as possible, 'subjective synonym' is better than just 'synonym', 'primary homonym' is better than just 'homonym'.

#### Example 1: Synonymy

* Although each relationship could be read in either direction (`Aus` is **junior synonym** of `Bus`, `Bus` is **senior synonym** of `Aus`) only **one way recording** of the information is supported in TaxonWorks at the moment. The relationship should always start from **invalid name**. In our example, it is `Aus`, so the editing should start on the `Edit taxon name` Page for `Aus`. Then, to build a new `relationship`, search for the second (related) name, in our example it is `Bus`, and then select the `status` for this relationship, which is `objective synonym` in this case.
* Once the relationship is created a `citation` could be added to this `relationship` to indicate the `Source`, where this synonymy was first proposed.
* In cases of competing synonymy, where in one source `Aus` is recorded as synonym of `Bus`, and in the next publication it is a synonym of `Cus`, **both** synonym relationships should be created in the database, if the citations are provided, the latest citation will be used to position
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

## Nomenclature Senarios (aka How-To) 

### Add new taxon name
For this task, be sure you have put the `source` in the `Pinboard` and selected it as the `default`, as this will save a lot of time during the process. To manually create a new taxon name (e.g. species / genus / family):
- Select the `New Taxon Name` card from the `Hub`. This will lead to the first screen, where you provide the new name and its parent. 

UCD Specific Note: UCD@TW has been previously populated with the data from John Noyes’ UCD, so inside the UCD@TW database you will not have to create a `root` for the taxonomic name tree (that is, there should always be a parent taxon). First, fill out the name of the highest-level taxon that you are creating, and indicate its parent taxon. For example, if you are creating a new genus with 2 new species, first create the genus, and then create the two new species. If one of the two new species is type-species for the genus, you can come back to the genus name and add the type-species later.

[INSERT SCREENSHOT] 

Note that TW is smart, and as soon as you enter the name, it checks to see if it already has it.

- Next, select the `parent`. This should provide a list of possible parents, pick the correct one. 
  - Based on the rank of the parent, TW will then ask you to select the `precise taxonomic rank of the new name` (see below). If everything is correct, hit `Create`. This will open up the next screen.

- Now you provide the `Source` (publication) and `authors`. If you have pinned the source, the `pinboard` icon will be blue and you can click it to automatically fill in the source details. 
- Then choose `Person`, and enter enough letters to bring up each author (they should be in the database if they were entered with the source).
  - If the authors of the Source are the same as the authors of the new name, you can click the button to the right `Clone from source`. 
  - If multiple persons pop up that appear to be the same (for example `A. Dal Molin` and `Ana Dal Molin`), you can use the `Uniquify People task` to resolve and merge them (see Scenario: Resolving redundant person name strings, and matching author names with and without diacritical marks). 
  - If an author name is not found, you can enter it and add it by clicking the green `Add New` button. This will add the author to the names table. 

- In most cases, for new taxa, you can skip over the `Status` and `Relationship` fields.  However, if the taxon is a fossil, you should check `Fossil` in the `Status` field.  he name will now appear with a little cross symbol to the left. There are special rules in ICZN and TW for fossil taxa.

The `Type` form is next, which opens up a new form to capture details on the type.  We prefer to complete the rest of the `New Taxon Name` form first, and then do the `Type`.

- For new species, the `Original Combination` will be the same as used in the paper, so `Set as Current`. 
- Finally you can _specify the gender and form of the new name_. For species-level names there are four possibilities:

  1. `Adjective`. Most species epithets are probably treated as adjectives, for example, Signiphora flavella meaning a yellow species. These will change their ending if moved to a genus with a different gender. Names with the suffix “-ensis” (usually referring to a place), change the ending only if put in combination with a genus name that is neuter, in which case it becomes “-ense”.
  2. `Noun in Apposition`. These don’t change gender when transferred to other genera with a different gender. An example might be a name like _Aphelinus mali_, named after the common host, the woolly apple aphid. An arbitrary combination of letters is treated as a noun.
  3. `Noun in genitive case`. These are commonly patronyms, ending in “-i” for males and “-ae” for females.
  4. `Participle`. A participle is an adjectival form of a verb. These are treated as adjectives, and they must agree in gender with the genus name. 

- There is a text field to capture the `Etymology`, in most cases you can simply paste this text from the publication.
- Be sure to `Save` all the information (green `Save` button at upper right) before moving to the `Type` screen. (UCD prefers to enter `Type` information last, after everything else on this page has been saved).

In most cases, the `Quick type` screen will provide all the details you need to enter information on the type, and this is what we show below. However, if you have other information to add for the type, such as Lat/Long data, you will need to use the `Comprehensive` form.

- First, pick the nature of the `type` (for most new species this will be a holotype), provide the `source` (click blue `pin` button if source is the `default`), and the `page number`(s) on which the type is designated.
The rest of the information on the type is filled in with the screen below.

  1. In most cases, the type will be a new specimen, not already in TW as an `Existing Collection Object`.  If so, click `New`.
  2. Paste the label data for the type into `Buffered Collecting` event.  This is a verbatim text field.
  3. In most cases, you can ignore `Buffered determinations`, and `Buffered other labels`.
  4. Total is number of specimens (one for a holotype).
  5. Designate the `preparation type` (pin, slide-mount, there are several choices).
  6. The `Repository` is the institution where the type is deposited.  Hopefully the repository will be in the TW table, otherwise you may need to create it using the `Repositories card` in the Data portfolio.  
  7. `Collection Event` refers to a specimen already in the TW database, which in most cases will not be the case if you are curating a new species description.
  8. In `Biocurations`, indicate whether the type is an adult or immature, and a male or female.
  9. Finally, you enter the Identifier for the type, which consists of two parts.  You must first Search for the `Namespace` (see the Glossary above) of the collection in which the type is deposited. Note that this may be different from the repository (a single institution may have several collections, each with a different “namespace”). Think of the `namespace` as the part of a specimen ID number that does not change for each specimen, for example, `TAMU` in `TAMU x01234567`. If the namespace is not in the database, you may need to create it, but since these are shared across projects, there is a good chance it will be there. Once you have selected the namespace, paste in the type or specimen number (only) in the `Identifier` field, and hit the green `Create` button.
 
[INSERT SCREENSHOT]

If you wish to add `paratypes` (optional), you essentially follow the same process for each one.

For many contemporary taxa, there may also be a `ZooBank number` associated with the species. The correct way to enter this is to:
- Scroll to the top of the `Edit Type Specimen` page (or `Edit taxon name` page) and click the `Radial Annotator` to the right of the blue species name.
  - In this case, the `Identifier` will be `Global`. 
  - Pick `Lsid`, and enter the `ZooBank accession number` in the `Identifier` box. Note that some publications will provide the link to ZooBank which is not accepted by TW, but not the actual Lsid. In this case, navigate to ZooBank to get the valid Lsid, which will have the following format:

urn:lsid:zoobank.org:act:5EB72879-1E9C-4A89-BCD8-FF37534B7172

If the paper does not list an Lsid for the new species, it might be worth a try to find it on the Zoobank.org web site.
- Be sure to click the green `Create` button at the bottom of the screen before leaving!

You show now add any additional information about the new species (or genus) in the publication following the process described next.

If you are creating a new `genus-level` or `family-level` name, the process is similar, but in many ways more simple because the type will be a species name or a genus name, respectively.  If the type-species or type-genus name is also new, probably the easiest path would be to create the family-level or genus-level name first, then create the name of the type-species or type-genus, and then return to the new genus-level or family-level name and indicate the type.  If you enter an existing name in the `New Taxon Name` task and select it (assuming it is found), TW will take you to the `Edit Taxon Name` screen where you can enter the type information.

After you click `Create` and `Save` you should be returned to the `Browse Nomenclature` page:

[INSERT SCREENSHOT HERE] 

If you have entered all the information correctly, it should be shown here. Note that the `Validation` form can serve as a checklist. In this case, we have neglected to enter several items, indicated here. To fix these, the easiest way is hit the `Navigate Radial` button (3 at upper right) and from here choose `Edit`.
We think the easiest way to proceed from here is to hit the `Browse OTUs` button (1 at top of screen). This takes you to the summary form for the OTU that you have just created. Note that there is a similar icon on the Browse OTUs page, which will take you back to `Browse Nomenclature` page. This is an easy way to move back and forth between these two important screens.

### Add / amend type information for a new taxon

For many older species group names, there will be no information on the type in TW. If you wish to add this information, you will want to have the original description handy, and pin it to the `Pinboard`. The easiest way to proceed is to use the `New type specimen task`. You can then follow the steps above for designating a type for a new species. 

HINT: The `New type specimen task` is also used to add or modify information on types already in the system.

### New synonymy or removal from synonymy (stat. rev.)

- Find the `junior synonym` name using the `Browse Nomenclature` task. 
- Click the `Edit` icon <img src="https://sfg.taxonworks.org/s/tkwvhi" width=20px/> to navigate to the `Edit taxon name` page.
- Enter the `senior synonym` in the `Relationship` box. A list of candidate names will come up.
- Select the correct one and Set to `Parent`. 
    - A list of choices for the synonym relationship will include `Subjective synonym`, `Objective synonym`, `subsequent Misspelling`, and `Homonym of`.
- Note that you must also `tag` this nomenclatural act (new synonymy) to a citation and page number.
   - Click the `Radial Annotator` icon to the right in the `Relationship box`, and choose `Citations`. 
   - Enter the `Source` (use the blue pin key!) and `page number`(s). 
   - If this is the first time the synonymy has been proposed, check the `Is Original` box.

#### Transfer species to new parent or not
If the junior synonym is a genus name, you must then decide if you want to transfer some or all of the species to the new parent. 
- Once you have made the synonymy, TW will present a table called `Manage Synonyms`. This shows the current parent, and by default, the new parent. You can change the latter to cover cases in which a genus is being split up and the species are being moved to different genera. 
  - You can select species individually, or select All of them.
  - At the bottom of the screen click the green `Move` button. TW will ask you if you are sure you want to do this! 

HINT a la UCD@TW: It is the consenus of UCD@TW curators that if a genus is synonymized under another genus, and the author(s) of the paper do not explicitly treat generic placement of the species formerly contained in it, that all species are considered to belong to the senior synonym, by default.

#### Remove name from synonomy
1. To do this, find the junior synonym and move to the `Edit taxon name` page as above. 
2. Scroll down to `Status` and click the `Show All` button to the right. This brings up a list of all possibilities. 
3. Choose `Valid` (nested under Available), and then be sure to 
4. enter the `Source citation` and pagination as above, but this time use the `Radial annotator` in the right lower corner of the `Status` box.

### New combination

In an older version of TW, your strategy depended upon whether the combination is really new (that is, the species has previously been placed in that genus), or whether the combination had been used before. Scenarios 1 and 2 below cover those cases, respectively. Both procedures still work, but as of November 2021, there is new functionality on the `Edit Taxon Name` page that allows you to handle either case. This is shown as option 3 below. Option 3 is probably the easiest, most preferred way to handle all new combinations now.

For New Combinations.  

- Open the `New Combination` task, and type in the new combination. TW will bring up a list of candidate genera and candidate species. 
  - If you enter a trinomial (for assigning to a subgenus, TW will show 3 sets of names. Pick the correct `genus name` and `species name`
  - Click the `pinboard` icon to paste in the `citation`, add the `page number`, and hit `Create`.
- Once you have created the new combination, be sure to click the `green button` to move the species to the new genus. 
  - (The only time you would not want to move the species to this genus is if you were entering a historical combination, and the species is not currently classified in that genus).  It’s as simple as that!  

Combinations used before.  

- Navigate to the `Edit Taxon name` page for the species. 
- Change the parent to the current genus (the `revived combination`). 
- Then move to the `Radial annotator` to the right of the species name shown in blue at the top right of the screen. 
  - Choose `citation` and enter the `source` and `page number` for the paper in which the former combination was revived.

Option 3 (either use case above)
- Navigate to the `Edit Taxon Name` page for the species in its existing combination. 
- Change the `parent` to the `genus` in which it has now been placed. 
- Scroll down to the `Subsequent combination` box. Click `Set as current`, or drag down the old combination to the species line and enter the genus for the new combination on the genus line. 
- Enter the `source` and `page number` of the paper in which the transfer was published and click `Create`. 

The `new combination` will be added to the chronological list at the bottom of the box, and it should show in the historical list when you return to the name in `Browse Nomenclature`.

If the gender of species is incorrect following the new combination, you may need to change the Gender and form of the species name, and/or the gender of the genus (on the `Edit taxon name` forms for the species name and genus respectively). This correction can also be made using `Click to edit verbatim` (use sparingly).

### Revised family placement for a genus or genus placement for a species

If someone has published a new family-level placement for a genus, recording this is a two step process.
- Navigate to the `Edit taxon name` form for the genus. 
- First, change the `Parent` at the top of the `Edit taxon name` form to the new `family-level taxon`. 
  - If the family name has not been used at this hierarchical level before, you many need to create the `protonym` for it first.
- Second, you must record the `source` of this change. Scroll to the bottom of the `Edit taxon name` screen and find the `Classification` box. Search for the new family-level taxon and `Set to Parent`.
- In the `Radial annotator` that now appears, choose `Citation` and enter the `source` and `page number` where the revised placement was published. 

If you are moving a subfamily, tribe or subtribe to a new family, the process is the same, but you would work from the `Edit taxon name` screen for the appropriate family-level taxon.

To move a species to a different genus or subgenus, use the New Combination task Scenario <!--(Scenario 4.7 above).-->. If you are moving a subfamily, tribe or subtribe to a different family level taxon, but the categorical level of the taxon you are moving does not change, follow the same procedure.

However, if you are changing the categorical level of a `family-group name`, the process is more complicated, and you will need to refer to [Scenario: Changing rank of a family-level taxon](#changing-rank-of-a-family-level-taxon). <!--4.14 below.-->

### Designate nomen nudum or numen dubium 

- To designate a name as a `_nomen nudum_`, `_nomen dubium_` or as `unavailable`, navigate to the `Status field` in the `Edit Taxon Name` form. 
  - The default for this field is valid. Four common choices are shown: `Unavailable`, `Nomen Nudum`, `Nomen Dubium`, and `Fossil`.
  - Click the `All` button here brings up a comprehensive list of other possibilities. For unavailable names you should probably look at the entire list and designate the reason the name is not available.
  - Be sure to enter the `source` and `page number` for the paper that published this information.  

### Homonyms and replacement names

The most common scenario will be that someone has discovered a junior homonym and provided a replacement name. Here are the steps you would follow. First be sure the `source` is the `default` in your `pinboard`.

- First create the replacement name using the `New Taxon Name task`, as described above, entering all information on the authors, citation, etc.
- Then move to the junior homonym (`Browse Nomenclature`, click the green `Edit` button at top right corner). 
  - In the `Relationships` field, enter the `senior homonym`. 
  - You will be given a list of choices, choose `Homonym of`.
- Now designate the replacement name. In the `Relationships` field, enter the `replacement name`. 
  - HINT: `Replaced By` does not appear in the short list of choices, so either search for it (easiest) or find it in the table of `All choices`.
  - Enter the `citation` and `page number` where the `replacement name` was published.

### Resolving redundant person name strings, and matching author names with and without diacritical marks

Often when you enter a person's name string in a search field, such as for authors of a source or taxon, multiple entries will pop up that appear to be the same person, such as `A. Dal Molin` and `Ana Dal Molin`. The `Uniquify People task` provides tools to resolve and merge these. 
- Find one instance of the person in the `Select Person` field, and 
- Load another instance (probably with different abbreviations of names) in the `Match People` field. The task will show you information about each person, such as representative publications. 
- If you are sure that they are the same people, you can merge them by clicking the `Merge People` button.

Diacritical marks (e.g. umlauts, tildas) on author names pose special problems, as the search engines may not find them. For example, if the author name is Ferrière and you enter Ferriere (without the diacritical mark), the search engine will not find it. The best way to resolve this is to treat Ferriere as an `alternate spelling` of the name Fèrriere. To accomplish this:
- Go to the `People data card`, and pull up the name.
- In the `Radial annotator` at the top of the screen, choose `Alternate Values`
- Then click the `Alternate Spelling` tab.
- Select whether it is the first or last name, enter the alternate spelling, and click `Create`. Once this is done, the search engine will find the person using either spelling of the name.

### Recording subsequent misspelling of a name

- First, you need to `create` the misspelled name using the `New Taxon Name task`.  Do not give it an author. 
- Scroll down to the `Relationship` field
- Search for the correctly spelled name
- Set the correctly spelled name as the `Parent`, and 
- Choose the `Misspelling Of` button.
- Enter the `citation` (source) for the `misspelled name` and the `page number` in the `Radial Annotator` on the right of the `Relationship` field.

### Changing rank of a family-level taxon
<a name="change family-level taxon rank"></a>
This is a multi-step process. You may need to raise or lower the rank of a family-level taxon. The process is the same. Here's an example: let’s assume that we wish to raise the categorical level of the taxon Coccophaginae to family level, Coccophagidae. Here are the steps to follow.

1. Check to see if Coccophagidae has been used at the family level before (use `Browse Nomenclature`). If it has, you can skip step 2 below, because the taxon name Coccophagidae already exists in the system.

2. If the taxon at the family-level (Coccophagidae here) does not exist, navigate to the taxon name Coccophaginae (`Browse Nomenclature`) and move to the `Edit Taxon Name screen` to create the name Coccophagidae.
- The best way to do this is to `Clone` the subfamily level name (green button in upper right), as this will retain the author and date, type genus, and other historical information.
- `Select all the boxes` to retain all historical information and type `CLONE` in the box. This will active the green `Clone` button. Note that _you are creating a `taxon name` here_, not an OTU, which is a separate issue.

3. You are now on the `Edit taxon name` page for the cloned name. 
- Change the family ending suffix to “idae”, or Coccophagidae.
- Now change the parent. In this case, it will now be Chalcidoidea.
- Then `Show all ranks`, and pick `Family`.  

4. To record who made the change in categorical level:
- Scroll down to the `Classification field`
- Click `Set to Parent` (which will pick up Chalcidoidea from above), if the current classification is correct. Otherwise, type in the correct parent. 
  - Below the field will be two choices, `Incertae Sedis` and `Classified As`. Pick Source `Classified As`.
- Enter the `source` and `page number` for the publication in which the change was made (in this case, elevation of Coccophaginae to Coccophagidae).

5. Now you need to make the appropriate changes to the nominate subfamily taxon, the subfamily Coccophaginae in this example.
- `Navigate` to the `Edit Taxon Name` form for Coccophaginae.
- Change the `parent` here to the new family-level name, in this case, Coccophagidae.  

6. Next, scroll down to the Relationships field.  
- Enter the new `family-level name` (Coccophagidae), and 
- `show all possible choices` (blue box to right). 
  - Choose `Family Group Name, Original Form Of` from the menu of choices (it is below `Usage` which is below `Unavailable or Invalid, linked to`).
- Enter the `source` and `page number`, as always.

7. At this point, a `Manage Synonymy` screen will appear. This provides a dashboard for assigning the classification of all taxa subordinate to the family name (children, in other words).  

8. Below the `Manage Synonymy` screen you will find the `Classification` screen.
- Type in new `Parent` (Coccophagidae in this example), and 
- Choose `Source Classified As`.
- Enter the `citation` and `page number` for the appropriate publication.

### Changing rank of a genus-level taxon or species-level taxon

Example: to elevate a subgenus to genus level:
- First `Navigate` to the name of the subgenus and click on the `Edit taxon name` tool. 
- Change the `parent` as appropriate (family, subfamily, tribe etc.) and 
- Change the `rank` to genus. 

Next, how to record the citation? Note well, classification relationships should be used only *above* the genus level.

For making any changes in rank at the genus level and below use the `New Combination task`: (explained in <!--section 4.7--> the `New Combination Scenario`). There is still a 2-part process required at the moment.
1. Create the combination (using the `New Combination` task), e.g. Camptoptera (Eofoersteria), and add the `citation` for same there.
2. Update the `classification` by changing the `parent` for the "now" subgenus. You will be required to manually `select the rank`, (e.g. subgenus)

One should be aware that UCD@NHM did not use subgeneric names, they were treated as synonyms of the parent genus. However, if species names were originally described in a subgenus, the original combination was recorded and will show in UCD@TW as a combination, as in the following example:

INSERT Screenshot

If you are working with a genus in which a subgeneric classification has been used, you have the following options:

1. You can create all of the subgeneric names, or find them and treat them as valid children of the appropriate genus. Nominate subgeneric names can be created by cloning the genus name and changing rank (see examples for subfamilies above, section 4.14). Whether or not you want to take the time to do this is up to you and your colleagues, but the tools are there in UCD@TW and in TaxonWorks generally.

2. You can continue to treat the subgenera as junior synonyms of the parent genus.  However, if you curate a paper in which a species is originally described in a subgenus, you should be sure to enter both the `Genus` and `Subgenus` names in the `Original Combination` and `Rank` section of `Edit Taxon Name`.

3. If you want to record historic subgeneric placement, use the `New Combination task`.

### Species groups

These are used in many genera of chalcidoids as informal grouping of species without nomenclatural rank or status. UCD@TW provides the tools to treat these formally (as superspecies which is what the ICZN recommends) but it will not display them as such in `Browse Nomenclature`. However, the consensus in the UCD project seems to be that it is preferable to leave species groups as informal groupings without nomenclatural baggage. How then to indicate or record assignment to species groups? There are several options, each of which has strong and weak points. It is a "policy decision". You will have to decide which option works best for your group.

One.  
- Add the `species group designation` to the `OTU name` field using the `edit OTU` function. The OTU can remain linked to the original taxonomic name. It will display as follows, every time the OTU name is displayed:

INSERT screenshot

Two.  

You will need to use a data attribute with the Predicate name `species group` and add the predicate as a default option to the OTU display.  
- First, create a new `Predicate` using the `Manage Controlled Vocabulary task`. 
- Provide a `definition` and choose a `color`.
- Next, go to `Project` (upper right corner of any screen)
- Choose `Edit Preferences` under `Edit` (upper left corner of screen)
- Select `OTU`, scroll down to`Species Group` and select it.  

Now the `Predicate` is created and will be available for any `OTU` and can be designated where needed.

- Second, `Browse` to a particular OTU and choose `Data Attributes` in the `Radial annotator`. 
- Type `species group` in the `Select a Predicate` box, the `name` of the species group in the `Value` box, and click the green `Create` button. 
- If you want to associate this placement with a literature citation, enter it using the `citations` button to the right of the `species group name` at bottom of the screen.

Once you have completed Step One above, the `Predicate` will be available for any `OTU`, you can designate them using Step Two.

Three.  
- Create a `Tag` for each species group in `Manage Controlled Vocabulary`, 
- Apply the tag to the OTU using the `Radial annotator`. This will allow you to pull up all OTUs assigned to a particular species group in the `Radial annotator`.
- Note well, however, the downside is that the tags will appear in the list for everyone in the project.

Four.  
- Create a matrix of OTUs for each species group.


### About tribes and subtribes

Again, using the UCD@NHM Project as an example, they did not formally recognize taxonomic levels between genera and subfamilies. Names of tribes and subtribes were treated as junior synonyms of their respective families. However, tribal and subtribal classifications are currently used in many families of chalcidoids. If you wish to incorporate these into classifications in UCD@TW, steps to follow are describe below. First, you must determine if the tribal or subtribal form of the name is in UCD@TW, treated as a synonym of the subfamily. See the entire scenario next.

One.  
- To determine if the tribal or subtribal form of the name is in UCD@TW and treated as a synonym of the subfamily, go to `Browse Nomenclature`, `search` for the name, for example, `Coccophagini`.  
  - Be sure that you do not have the redirect to valid name box checked!  
  - If you get a result showing the tribe (or subtribe) name in a black box to the right of the subfamily name (see below), the tribal form is in TW treated as a synonym of the subfamily.

In most cases, if the tribe or subtribe name has been used in the literature, it will show up as a synonym of the nominate subfamily.  If it does not, you will need to create it, so skip to section Five below.

- Navigate to the name with the tribal name at right (not to the valid form of the subfamily name, which may come up without the tribe name in the black box). It will be shown as an invalid synonym of the subfamily. 
- Click the green `Edit` icon to move to the `Edit Taxon Name` form.
- `Show all ranks` in the `Basic Information` form and pick `tribe`.
- Then change the suffix from `-inae` to `-ini` and pick the appropriate `parent`.

Two.  
- Scroll down to `Status`, `Show All`, and select `Valid`.
- Provide the `citation` and `page number` using the `Radial annotator` to the right.

Three.  
- If you wish to provide a citation for this usage of the name, scroll down to `Classification`, choose `Set to Parent` (in this case it would be `Coccophagini`)
- Choose `Source Classified As`.

Four.  
- One more (obsure) task remains. Using the `Navigate Radial icon`<img src="https://sfg.taxonworks.org/s/7w1dx2" width=20px/> to the right of the tribal name at the top of the page, choose `Show`
- Then choose `Edit` in the menu bar at the top of the next screen. This takes you to an older version of the `Edit Taxon Name` form. 
- If a name appears in the `Verbatim Name` field at the bottom of the screen (like `Coccophaginae ), `delete` it and click the green `Update Taxon Name` button. This removes an artifact created when tribal or subtribal names were imported as synonyms from TW@NHM.

Continue from this point only if the tribal or subtribal form of the name did not show up as synonym when you searched for it in step One above. Most likely, in this case it has not been used at this hierachical level before. If it does not show up, create it using the following process.  

Five.  
- Navigate to the taxon name at the subfamily level, for example, Coccophaginae (via `Browse Nomenclature`) and move to the `Edit Taxon Name` screen. 
- Create the name at the tribal or subtribal level, for example, Coccophagini. The best way to do this is to `Clone` the subfamily level name (see green button in upper right), as this will retain the author and date, type genus, and other historical information. `Select all the boxes` to retain all historical information and type `CLONE` in the box. This will active the green `Clone` button. Note that you are creating a taxon name here, not an OTU, which is a separate issue.

Six.  
- Navigate to the tribal (or subtribal) name in `Browse Nomenclature` and move to the `Edit Taxon Name` screen.
- `Pick` the rank (tribe) and change the ending to `-ini`. 
- Change the `parent`. In this case, the parent of Coccophagini would be Coccophaginae.

Seven.  
- Under Classification, set to parent (Coccophaginae) and choose `Source Classified As`. 
- Use the `Radial annotator` to the right to enter a citation for the publication and page number of the paper in which the tribe was recognized or moved.

Eight.  
- The problem with this approach is that all of the children of Coccophaginae will have been transferred to Coccophagini. If some of these genera belong to another tribe, you will need to create any such tribe, using the steps above, and transfer the genera, one by one.

### Taxon classified as _Incertae Sedis_

- First navigate to the appropriate taxon name
- Click the green `Edit Taxon Name` button.
- Change the parent to the higher level taxon in which the taxon has been classified as _Incertae Sedis_.
- Navigate down to the `Classification` field
- Click `Set to Parent`, and choose `Incertae Sedis`.
- Then record the source and page number in which the classification was made using the `Radial annotator` to the right.

### Species name endings changing due to movement to another genus, or correction by publication

For some name:

A - start (origin)   
B - current -> current classification  
    change the parent here -> everything looks more or less right  
C - second move  
preserve "b"

A - Protonym  
B - Combination  
C - Parent (Combination)  

From a practical standpoint, when a name changes, use `New Combination` task.  Why?

1. It lets you create the new combination just by typing in the string
2. Having that combination, even if its just a B, pre-adapts you for C's. This gives you the historical record.
3. In the `New Combination` task, after the combination has been created, there is an option to easily move the name to the correct parent

Considerations vs. line endings.  

4. In the `New combination task` you will find/pick the species _in its original latin form_
  -	If that name has gendered data with it
    - and the new genus has gendered data with it
      - Then conjugation of the species name will automatically be rendered correctly in the new combination, and in reference to the new Parent (after you do 3) above)
    -	To pre-adapt your steps above being easy, follow best practices and **add the gendered information at the time of entry of a Protonym.**

Never just change parent, always go the `Combination` route. (i.e. 2) above).

Example use case of name ending corrected by subsequent publication:

- Species published with incorrect ending
  - Name is always the original form, latinized, never changed
- Author "corrects" the ending in a subsequent publication
  - Key information: in this case there is **no second Protonym**, the gender ending correction happens automagically
  - Key trick: to add a citation with this "fixed" data you must create a new `Combination`, and cite it.  You must compose the combination with the same protonym that was "misspelled"
- Key bits of making new combinations
  - Think about making your new combination by finding
    - `Protonyms` in the *original* combination
  - Remember if you type in a gendered ending, and no suggestions are found, you can always click to search directly by the original combination, or to track down the protonym in the taxon name autocomplete.
  - For all of the above to work, the `Gender and form` section of the `Edit Taxon Name` form on the original protonym must be filled in.

### Species synonymized with two or more other species

- A name is published.
- A type series is used (i.e. there is no holotype)
- The type series is found to represent two different species.
- The author says "we're stating this is two different species, and synonymizing the original name under two other names, but not selecting a holotype. If a future worker selects a holotype, our actions here may need to be changed again" (alternatively, author may synonymize the species _in partim_).
  - Recommendation: Do nothing (do not post the two synonymies in TW) but add a citation and note, there are no governed consequences to manage.
  - If you did have specimen catalog numbers then you could create 2 OTUs, each with the same species name, pre-adapting the data to receive new names for the new names if they come out.
  - Recommendation 2: Use a `Nomen Dubium` status and attach a citation to this.

### Junior synonym conserved by ICZN decision (i.e. senior synonym suppressed)

- Start at the `Edit Taxon Name` form for the suppressed name (senior homonym). 
- Under the `Relationship` section type in the suppressed name
- And using the `Show all` button, select `suppressed under`. 
- Cite this.
- Next, go to the `Edit Taxon Name` form for the junior homonym.
- Under the `Status` section, use the `Show all` button to find `official list of specific names in zoology` and select `valid`. 
- NB: use the `Advanced` button if for some reason the `Show all` button is grayed out. 
- Cite this.

### Entering names with incorrect endings for their taxonomic level

One method: 
- Create name using correct ending, `Save`. 
- Designate as `Not Latin` under status. 
- Change the name ending to the form wanted, `Save`.

Second method: 
- Create name. Using navigation radial, go to `Show`. 
- Click on `Edit`
- Scroll down to bottom of form to `Verbatim` field and type in name as it was originally published. 
- Click `Update Taxon Name`

Third method: 
- Create the name. Click on `Edit` to get to `Edit taxon name` form.
- Click on`Clone`. 
- Select `Add invalid relationship`. 
- Type `clone` and then click the `Clone` button.
- `Edit` the `Relationship` field and select `Family Group Name Form`.

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




