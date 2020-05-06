
# Nomenclature basics

_This manual provided a basic how-to for gettings started with the nomenclature interfaces as they **currently** exist._

## How to get started

* Navigate to the Tasks list.
* Use the filter (on the left) to select 'Nomenclature" related tasks
* Currently useful tasks are yellow ( red = experiment, works, but might not last, or might radically change; yellow = more or less stable, some changes anticipated but basic functionality will remain same; green=you can write a manual, won't change for any reason)
* **Browse nomenclature**, **New taxon name**, and **New combination** are useful tasks to view and modify existing classification. Browse nomenclature page provides convenient way of navigation from one Taxon Name to another. It also provide an option to quickly jump to the
Edit Task 

## Curating data

### Basic information

All TaxonNames are stored as uninomials in TaxonWorks. A hierarchical nomenclature is selected to provide the maximum level of flexibility of classifications. Three fields are required to create a TaxonName record in the database: **name**, **parent**, 
and **taxonomic rank**. The Parent is any valid taxon of a rank higher than a new one. This section is the only section of the form which requires the use of the Save button. All other sections of the form use autosave mode.
The highest rank taxon in a hierarchy is **Root**. This is a defalt Taxon, which could not be modified, it is created when the project is first iniciated, the first taxon attached to the Root requires selection of the Code of 
Nomenclature (ICZN, ICN, ICNP, ICTV), this is required to enforce validation rules specific to this particular Code of Nomenclature. All taxa below this taxon do not require selection of the Code, it will be inherited from the parent.
The same database may contain taxa covered by different Codes of Nomenclature. 

### Authorship

This section is used to set original authorship of the name (as opposed to a subsequent citation).  Authorship can be recorded in three different ways. If authorship is provided in more than one way it is prioritized and take as follows:

* From the Verbatim Author and Verbatim Year fields
* From the Person (TaxonNameAuthor) assigned as an author of the taxon name
* From the Source author and source year fields
* From the Person assigned as an author of the Source (SourceAuthor) assigned as the original citation

The _preferred priority_ is:

* Assign an original citation ('Source' in Author section) that has People assigned as authors to it. 
* Over-ride the authorship in the Source if needed by assiging one or more People from that source as authors in the 'Person' section (for example when doing Smith in `Jones & Smith`).
* Use Verbatim Author and year, if original source and People roles are not provided.

Advanced tips:

* TaxonWorks is about creating the links between concepts (e.g. things like People, Collection Objects, Names, Otus). How those concepts are visualized is a big can of worms.  You can assign alternate values to People's names (e.g. abbreviations, alternate spellings) if you want to reflect how an authors name is spelt in different contexts.  

#### ICZN 

##### Parentheses around author/year

* The preferred mechanism to rendering parentheses around a author/year (indicating current placement is different than original) is to assign the original Genus in the Original Combination (see below).  This will automatically render the name correctly.
* If you do not know the original combination, or you wish to "force" the use of parentheses you must use the 'Verbatim Author'. Place the parentheses around the author there: `(Smith)`.  The code will automatically include the year in rendering out the name as needed.

##### Year of publication (availability) versus stated year

The year a name becomes available defines its priority for nomenclatural purposes.  It may differ from the year printed on the matter which is made available.  The year of publication can be inferred from the Source linked to the name as an original combination, or explicitly noted in the `Author->Verbatim->Verbatim year` section.

1) If you only have reference to a single value, it goes in year (month, day)
2) If you have reference to two year values, the actual year of publication goes in year, and the stated year of publication goes in stated_year.
3) If you have month or day publication, they go in month or day.
4) The value provided in `verbatim_year` is always assumed to be the actual year of publication.

We assume that if two dates are known then the user will create and reference a Source to record those values, i.e. there is no mechanism to provide and differentiate the two types of year directly with the name itself.

### Nomenclatural Status

This section related to nomenclatural statuses, which are applicable to the taxon itself and does not require any knowledge of related taxa (e.g., 'Nomen nudum', 'Non binomial'

* Multiple Statuses could be assigned to the same taxon
* Most common status are listed in the "Common section", but all available statuses are listed in "Show all" section. The statuses which are not applicable to a current taxon are greyed out.
* Advanced section allows to search for a specific status

Comments:
1) All names by default are valid names, "valid" status should not be assigned to all the names in the database. It is reserved for special cases, for example when the taxon has a nomenclatural history of being treated as a synonym, and later was treated as a valid name again, 
in order to preserve a historical recorod of synonymy, and override it, a status 'valid' could be added to the taxon, the citation on the status will indicate the source where the validity of taxon was confirmed.
2) Status 'Homonym' could be added to the taxon to indicate invalid status in cases where the senior homonym is not known, but this should be avoided, the better way to record homonymy is to create a relationship (see below)

#### Example 1: Nomen nudum


* Select 'Nomen nudum', one of Common statuses

### Relationships - a nomenclatural statuses bases on relationship with other taxon

The nomenclatural relationships are the statuses which require record of two Taxon Names. For example, 'Aus' is a synonym of 'Bus'. In this relationship we can get status for each of those two names 'Aus' is a Junior synonym, 'Bus' is a Senior synonym.

Comments:
1) Always start with (browse too, then edit) the _invalid_ name and add relationships that reference the valid (or senior) name
2) Check the soft validation messages, they will let you know if what can be improved or added.
3) When adding a relationship, select one that is as specific as possible, 'subjective synonym' is better than just 'synonym', 'primary homonym' is better than just 'homonym'

#### Example 1: Synonymy

* Although each relationship could be read in either direction (Aus is junior synonym of Bus, Bus is senior synonym of Aus) only one way recording the information is supported in TaxonWorks at the moment. The relationship should always start from **invalid name**. In our example 
it is 'Aus', so the editing should start on the Edit Taxon Page for 'Aus', to buld a new relationship, search for the second (related) name, in our example it is 'Bus', and then select the status for this relationship, 'objective synonym'.
* Once the relationship is created a citation could be added to this relationship to idicate the Source, where this synonymy was first proposed.
* In cases of compiting synonymy, where in one source 'Aus' is recorded as synonym of 'Bus', and in the next publication it is a synonym of 'Cus', both synonym relationship could be created in the database, if the citations are provided, the latest citation will be used to position
the taxon in the classification.
* In cases where the name was reported as a synonym by mistake and was revalidated in a later publication, the relathinship should not be deleted, a 'valid' status could be added to the taxon to overwrite the synonymy (see above) 

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
* If the type designator is _not the same as the either 1) the original citation on the species protonym or 2) the original citation on the type material record_ then select the type designator if knonw.  The designator will be *inferred* from the aforementioned citations otherwise.
* At present, if you have created a collecting event find it by id (the current searc is a stub, and very crude), otherwise add verbatim data to the "Buffered" sections, these data persist with the collection object, to be transcribed into collecting events, determinations records, etc. some time downstream in the digitization process.
* Select the Biocuration classes you want by clicking on a green button (remember green in TaxonWorks means create a record). This creates a record indicating that the collectiong object is that class.  The button will turn red (remember red in TaxonWorks means destroy a record).  Clicking a red button will remove that classification from the object.
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

A question from a user reflects the trickieness:

1. Imagine there is a genus _Aus_, with type species _Aus bus_. Then someone describe a new species _Aus cus_, which subsequent authors don't even consider to be in the same superfamily. So I cannot enter Aus twice because the second one is a misidentification but no one knows for sure what it is.

- This is just an original genus. This is the same genus in both species. The genus cannot be misidentified. This is just a position of the 
species in classification, regardless where it was originally described or subsequently placed.

The proper way to hand this is to use a single _Aus_, which is placed in the correct family. In both species _Aus_ is the Original genus, in _Aus bus_, this is also a Parent taxon. In case of _Aus cus_, if the current genus is not assigned, the superfamily is the parent taxon.
An *incertae sedis* relationship should connect _Aus cus_ and the superfamily

2. Species misidentification/misappliation. 

- Misapplication itself does not make an available name. But this a common practicy to include misapplication in the list of historical
usages of the taxon names, especially in the cases where a new name is proposed as a "replacement" for a previously misidentified species.
Remember, that _nomen novum_ cannot be proposed for misapplication, since it requires a previously availeble name, but invalid because of 
homonymy. To record this in TaxonWorks, a new Protonym for a missapplied name should be created in the database. This protonym should
be linked to two other Taxon Names with two Taxon Name Relationships. The first relationship is to an available name with the same spelling
(it could be a valid name or a synonym). The relationship type is "Misapplication". The second relationship "Invalidating" relationship
should link this TaxonName to the correct name for this taxon. Remember, the "Synonym" relationship is not applicable here, since
it assumes that both names are available name, and in this example Misapplication is not an available name. 
Follow the soft validation messages for other essential information for the Protonym in the database.
An example: The name _Aus aus_ Author 1, is misapplication for _Aus bus_, and _Aus aus_ Author 2 is completely different species.
After the protonym for the first name is created two relationships will be added in the database:
_Aus aus_ Author 1 Misapplication, linked to _Aus aus_ Author 2
_Aus aus_ Author 1 Invalid, linked to _Aus bus_
Once the misapplication is created, an OTU could be added to the TaxonName, which could be used, for example, for taxon determination. 

## Navigation helpers

## Help

* _Their is currently NO useful help from the orange slideout on the right, this will change as text appears here and migrates to the native help system._

## Understanding the data model

* Concepts, at a low level, are gradually being documented here https://github.com/SpeciesFileGroup/taxonworks_doc/tree/master/concepts (see the TaxonWorksNomenclature.pdf, you can zoom in to see details).

## Nomenclature, not biology

* A reminder, if you want to record information about biology (hosts, parasites, distribution, etc.) that doesn't belong in the nomenclature section, you will use the Otu radial icon or OTU nav icon to access and record those data from a nomenclatural context.

# FAQ
* I have a species which was originally described in genus which obviously lies outside the scope of my group.
  How can I use this genus in the original combination?
  - The genus name have to be entered into the classification before the use. It may have to Root assigned as
    the parent, or, preferrably, the basic classification (class, order, family) could be provided as well.
* How to record in the database a situation when a taxon, species or genus, is moved from one family to another
  - Add a Taxon Name Relationthip "classified as" to the Protonym and specify the Protonym for the family group name, which
  is a position for this protonym in this particula publication. Add a citation(s) to this Taxon Name Relationship which indicate 
  the publication where this position of protonym is recorded. 