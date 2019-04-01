
# Nomenclature basics

_This manual provided a basic how-to for gettings started with the nomenclature interfaces as they *currently* exist._

## Accessing the functionality

* Navigate to the Tasks list.
* Use the filter (on the left) to select 'Nomenclature" related tasks
* Currently useful tasks are yellow ( red = experiment, works, but might not last, or might radically change; yellow = more or less stable, some changes anticipated but basic functionality will remain same; green=you can write a manual, won't change for any reason)

## Curating data

### Name and classification

_nothing here_

### Authorship

Use this section to set authorship of the name (as opposed to a subsequent citation).  Authorship can be *asserted* directly or *inferred*.  If authorship is asserted or inferred in more than one way it is prioritized and take as follows:

* From the verbatim_author and verbatim_year fields
* From the Person (TaxonNameAuthor) assigned as an author of the taxon name
* From the Source author and source year fields
* From the Person assigned as an author of the Source assigned as the original citation

The _preferred priority_ is:

* Assign an original citation ('Source' in Author section) that has People assigned as authors to it. 
* Over-ride the authorship in the Source if needed by Assiging one or more People from that source as authors in the 'Person' section (for example when doing Smith in `Jones & Smith`).
* Over-ride the *appearance* of a authorship rendered from either of the above by providing a `verbatim author`.

Advanced tips:

* TaxonWorks is about creating the links between concepts (e.g. things like People, Collection Objects, Names, Otus). How those concepts are visualized is a big can of worms.  You can assign alternate values to People's names (e.g. abbreviations, alternate spellings) if you want to reflect how an authors name is spelt in different contexts.  

#### ICZN 

##### Parentheses around author/year

* The preferred mechanism to rendering parentheses around a author/year (indicating current placement is different than original) is to assign the original genus in the Original Combination (see below).  This will automatically render then name correctly.
* If you do not know the original combination, or you wish to "force" the use of parentheses you must use the 'Verbatim name' in 'Verbatim'- place the parentheses around the author there: `(Smith)`.  The code will automatically include the year in rendering out the name as needed.

##### Year of publication (availability) versus stated year

The year a name becomes available defines its priority for nomenclatural purposes.  It may differ from the year printed on the matter which is made available.  The year of publication can be inferred from the Source linked to the name as an original combination, or explicitly noted in the `Author->Verbatim->Verbatim year` section.

1) If you only have reference to a single value, it goes in year (month, day)
2) If you have reference to two year values, the actual year of publication goes in year, and the stated year of publication goes in stated_year.
3) If you have month or day publication, they go in month or day.
4) The value provided in `verbatim_year` is always assumed to be the actual year of publication.

We assume that if two dates are known then the user will create and reference a Source to record those values, i.e. there is no mechanism to provide and differentiate the two types of year directly with the name itself.

### Status ("asserted")

### Relationships (e.g. synonymy) to other names

#### Homonomy

If we know that `Aus aus` is a homonym of `Bus aus`, and that `Cus bus` is a replacement name, then we have to express **two** "facts", i.e. relationship between protonyms, in this case 1) between `A. aus` and `B. aus`, 2) between `A. aus` and `C. bus`.

The basic steps are therefor:

1) Ensure all 3 protonyms exist (`aus`, `aus`, `bus`)
2) Navigate to the _invalid_ name `Aus aus`
3) Create the first relationship: Select the _senior homonym_ name `Bus aus` and a homonym relationship (be specific: "primary homonym" or "secondary homonym")
4) Create the second relationship: Select the valid name (replacement name) `Cus bus` and add a synonym relationship ("replaced by" or "subjective synonym of")

A few comments:
1) Always start with (browse too, then edit) the _invalid_ name and add relationships that reference the valid name
2) Check the soft validation messages, they will let you know if what can be improved or added.
3) When adding a relationship, select one that is as specific as possible. A homonym could be replaced by either a `nomen novum` or by an existing `junior synonym`.
 
### Original combinations

### Type metadata

#### Genus and Family group names

Data can be added directly on the `New Taxon Name` task.

#### Species group names

See also the [basic article parsing](https://github.com/SpeciesFileGroup/taxonworks_doc/blob/master/manuals/BASIC_ARTICLE_PARSING.md) manual for a walk through that addresses many of these issues in a more contextual framework.

_Before you start_: 1) Add biocuration classifications that you might reference (e.g. `Male`, `Female`, `Adult` etc.).  Do this by adding a new Controlled Vocabulary Term of type `BiocurationClass` or using the `Manage biocuration types and groups` task.  You only need to do this once in your project.

Either access the task `New type specimen` through the `New taxon name` task in the `Type` section or directly from the tasks tab (filter by `Nomenclature` on the left to quickly find the task).

* Select the type type, this unlocks the Collection object form below.
* If the type designator is _not the same as the either 1) the original citation on the species protonym or 2) the original citation on the type material record_ then select the type designator if knonw.  The designator will be *inferred* from the aforementioned citations otherwise.
* At present, if you have created a collecting event find it by id (the current searc is a stub, and very crude), otherwise add verbatim data to the "Buffered" sections, these data persist with the collection object, to be transcribed into collecting events, determinations records, etc. some time downstream in the digitization process.
* Select the Biocuration classes you want by clicking on a green button (remember green in TaxonWorks means create a record). This creates a record indicating that the collectiong object is that class.  The button will turn red (remember red in TaxonWorks means destroy a record).  Clicking a red button will remove that classification from the object.
* Click create.  Your record will be added to the right side of the form, you will see it highlighted by type type in a light green.  That means the form on the left can be used to edit that record.
* Click 'New type' to add another record (e.g. paratype).

### Citations

### Incertae sedis

Incertae sedis implies a relationship between two protonyms.  Any time something you want to express references two protonyms you must use a Taxon Name Relationship to express this data.  For the name in question select the "parent" under which it should be placed, then select the relationship.

### Misidentifications

Misidentifications are a tricky gray area.  Remember that we only care about the nomenclatural consequences of the use of the names in questions.  Taxon Identifications are linkages of OTUs to Collection objects, this is the preferred mechanism for linking one or more identifications to a collection object.

A question from a user reflects the trickieness:

> Imagine there is a genus _Aus_, with type species _Aus bus_. Then someone describe a new species _Aus cus_, which subsequent authors don't even consider to be in the same superfamily. So I cannot enter Aus twice because the second one is a misidentification but no one knows for sure what it is.

Technically one *can* add _Aus_ twice, the second _Aus_ is not the same Protonym, and will have a parent of "Root" if unknown, or some finer classification if known.  This would let you express the nomenclatural difference between the names.

## Navigation helpers

## Help

* _Their is currently NO useful help from the orange slideout on the right, this will change as text appears here and migrates to the native help system._

## Understanding the data model

* Concepts, at a low level, are gradually being documented here https://github.com/SpeciesFileGroup/taxonworks_doc/tree/master/concepts (see the TaxonWorksNomenclature.pdf, you can zoom in to see details).

## Nomenclature, not biology

* A reminder, if you want to record information about biology (hosts, parasites, distribution, etc.) that doesn't belong in the nomenclature section, you will use the Otu radial icon or OTU nav icon to access and record those data from a nomenclatural context.
