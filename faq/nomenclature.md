# FAQ - Nomenclature

## Can you describe how the authorship label for a name is determined?

Authorship of a name can asserted in 4(!) different ways. That seems confusing at first, but determining what gets shown is pretty straightforwrd.

The authorship label is determined by the FIRST option in the following list that is true. All other values are referenced only in validation reports.

* If the `verbatim name` field is filled out, then it is used.
* If People are assigned as TaxonName authors, then their family names are used.
* If People are assigned to a Source as authors, and that Source is the original source for the taxon name, then their family group names are used.
* If the `author` field of a Source is filled out, then that field is used.

## There are a lot of options for assigning the authorship of a TaxonName, which is the preferred way?

The preferred mechanism is to link the TaxonName to a Source, and assign authors (People) to that source (third option in the list above).  This is the most granular way of creating the data, and therefor it will ultimately give you the most flexibility in reporting and validating the data.

## Is it possible to link a note to a family group name to specify what the original spelling is, at what level it was proposed and when?

Another protonym with the original spelling should be created in the database. Clone button could be used to replicate 
all information from the current family-group name. This new taxon name should be linked to the original name using special
Taxon Name Relationship *Incorrect original spelling* or *Family group name original form*. TW could be restrictive
in the ending of the original name before you assigne the relationship, so it is recommended to save the Taxon Name
with the proper ending, add the ralationship and return back to modify the *Name* to the original form. And save Taxon Name
again. Assigning the relationship removes the restriction on the family-group name form and ending.

##  Do you have any instructions on how to change combinations or enter new synonymies in TW?

Please follow the instruction in the Nomenclature Basics.

## How do I find out where types are deposited, do you not yet have this function in TW?

Specimen deposition could be assigned to Specimen. If you create the type specimen for the Taxon Name, there is a field for
the type repository. To create the type specimen follow one of the links provided in the Edit Taxon Name task, either *Quick* or
*Comprehensive* in the *Type* section. *Quick type specimen* task allow to copy the entire verbatim-label information. 
The *Comprehensive collection object* allow to provide more detailed information about the specimen. 

## I am still confused by what you mean by basionym. Do you mean the name (and combination) as originally proposed when that name was first made available (as the botanists use it), or do you mean the name as used in specified publication?

## How do I get to the place in TW where I can add a new basionym? I need to try it out and see what happens.

## How would I remove a name from synonymy? 

You can symply delete the *Synonym* Taxon Name Relationship. But when the name has been historically treated as a synonym, 
and subsequently was restored, the best practice would be to preserve both treatments in the database. Keep the synonym 
Taxon Name Relationship with its original citation in the database. Add the nomenclatural Status *Valid* to the name. 
This status will overwrite the Taxon Name relationship. Please remember to add the citation to the status, to know where and
when the name was reinstated.

## How would I place this name in synonymy? 

Please follow the instruction in the Nomenclature Basics.

## What is the word form for "arbitrary combination of letters"?

The word form is "noun in apposition"; etymology "arbitrary combination of letters"

## I have a species which was originally described in genus which obviously lies outside the scope of my group. How can I use this genus in the original combination?
  
  The genus name have to be entered into the classification before the use. It may have to Root assigned as
  the parent, or, preferrably, the basic classification (class, order, family) could be provided as well.

## How to record in the database a situation when a taxon, species or genus, is moved from one family to another?
  
  Edit TaxonName task has a special section for this, *Classification*. Select the family-group name, and the 
  relationship *Classified as*. This could be used for original placement of the taxon, or for the subsequent classification.
  Once the Taxon Name Relationship is created, assigne the citation using the radial annotator. 

## How to record a *nomen nudum* that was "subsequently validated"?

  ICZN does not provide a procedure to "validate" a *nomen nudum*. Once unavailable, the
  taxon name keeps this status. The taxon could be described in a subsequent publication
  by the same or a different author(s), with the same or a different spelling. Both names
  in TaxonWorks should be regarded as separate protonyms. *Nomen nudum* should be marked
  with one or several of the appropriate nomenclatural statuses: *nomen nudum* or, preferrably, a 
  more specific one, for example *nomen nudum: no description*. Once the valid name is described and the
  second protonym is entered to the TaxonWorks database, the *nomen nudum* 
  could be linked to the available name (valid or invalid) with a 
  TaxonName Relationship "unavailable or invalid".

## How to enter the author for misspeled name?

The name which is not spelled correctly, the original source, where the misspelling was 
introduced, is still required. The role is not require, because the author string is always 
generated from the correctly spelled protonym.

## How can I record the history of the taxon which had several historical *Incertae sedis* placements?

The *incertae sedis* relationship always correspond to the current placement of the taxon.
For example, a species assigned to the family, instead of proper genus as a parent.
Normally, this will be marked as an invalid placement, the *incertae sedis* relationship
helps to override the error. For historical placements, a different relationship should be used:
*source classified as*.

# Contributors

In addition those committing changes to this file the following people have contributed to this FAQ:

* John Noyes

