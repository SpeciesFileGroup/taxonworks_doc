
# Nomenclature basics

_This manual provided a basic cheat-sheet for gettings started with the nomenclature interfaces as they *currently* exist._

## Accessing the functionality

* Navigate to the Tasks list.
* Use the filter (on the left) to select 'Nomenclature" related tasks
* Currently useful tasks are yellow ( red = experiment, works, but might not last, or might radically change; yellow = more or less stable, some changes anticipated but basic functionality will remain same; green=you can write a manual, won't change for any reason)

## Curating data

### Name and classification

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

* TaxonWorks is about linking the right concepts first.  The current authorship of a name should reflect how the name *should* look if the rules are followed, not how it *did* look when it appeared.  You can assign alternate values to People's names if you want to reflect how an authors name is spelt in different contexts.  

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

### Original combinations

### Type metadata

### Citations

## Navigation helpers

## Help

* _Their is currently NO useful help from the orange slideout on the right, this will change as text appears here and migrates to the native help system._

## Understanding the data model

* Concepts, at a low level, are gradually being documented here https://github.com/SpeciesFileGroup/taxonworks_doc/tree/master/concepts (see the TaxonWorksNomenclature.pdf, you can zoom in to see details).

## Nomenclature, not biology

* A reminder, if you want to record information about biology (hosts, parasites, distribution, etc.) that doesn't belong in the nomenclature section, you will use the Otu radial icon or OTU nav icon to access and record those data from a nomenclatural context.
