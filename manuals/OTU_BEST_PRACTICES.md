# OTUs, Taxon Names, and History

Our objective is to address this issue:  
_If an OTU label was used to pick an OTU and relate it to some data, then when a Protonym moves, 
the label reflected in the OTU changes how it looks.  The new, updated label, 
may not look like the historical use, what should happen? 
This is the key issue, what are the steps to resolve these cases.

## Database structure

In the TaxonWorks OTU or a Taxonomic Concept is a proxy from TaxonName to any non Nomenclature related 
information in the database (e.g. distribution, biological association, specimen determination). 
It has two properties (both optional): _name_ (free text) and _taxon_name_ (link to the nomenclature).
In most applications, a single OTU linked to a taxon_name is enough to represent variety of 
information which needs to be tighed to a specific scientific name of this taxon. 
In cases where several subsets with the same scientific name are 
required, in addition to the _taxon_name_, a _name_ could be added.

There are several subclasses of _taxon_names_ in the TaxonWorks. The primary classes are 
_Protonyms_ and _Combinations_  (a subsequent name of the use).
Each protonym could be represented in two different ways: original spelling and current spelling. For example, 
valid name _Neotibicen tibicen_ (Linnaeus, 1758) has original combination _Cicada tibicen_ Linnaeus, 1758. 
Further, the protonym could be a synonym of another protonym, so the current name for that protonym will be the 
name of the valid taxon.

## Basic principles and summary
The OTU label could be represented like this:
"_Neotibicen tibicen_ (Linnaeus, 1758) as _Cicada tibicen_ Linnaeus, 1758: OTU1"
Where 
1. _Neotibicen tibicen_ (Linnaeus, 1758) - current nomenenclatural position (always corresponds the current 
    classification of the taxon)
2. _Cicada tibicen_ Linnaeus, 1758 - the name of the taxon, how it was used in determination (the name of the
    species in the specimen determination, or name of the species in a particular publication)
3. OTU1 - optional _name_ of the OTU

* Tie your data to OTUs that have labels that represent their historical use (the second pard of the OTU label)
* Data are summarized across OTUs in a single page, through the proxy use of the nomenclatural classification.
* When an OTU is linked to a Protonym, the label looks correct.  
    When the Protonym moves in the classifiation, the label for the OTU in relation to the data 
    changes.
   * The _data_ haven't moved, they are still tied to the correct concept.
   * It is best practice to always link data with the OTU associated with a proper _taxon_name_
   * Always link data to a subsequent combination, (which does not change even if the _taxon_name_ 
   position in the classification changes. The data linked to a _Protonym_ are considered to be associated with 
   the original combination of this protonym (which does not change) and not with the current placement of 
   the taxon in the classification (which may change when the taxon moves)

## Background on the TaxonName classification
* The current classification is defined by the curator, and the parent of the name
* To record a historical use, i.e. change the current classification, we use Combinations
* When a protonym moves, it gets a new parent, this parent is reflected in the OTU label

## Side note: How are OTU data summarized?
* Some of this sounds complicated, if I manage all this historical stuff, how will I get it summarized? 
* How the Browse taxon page aggregates data across OTUs and synonyms, 
    so that you don't have to move data along to a single OTU
   * The OTU page finds the Protonym for that page
   * All subsequent usages of that protonym are found as well (all invalid names linked to and, 
   and their combinations)
   * All OTUs linked to any of these are collected
   * All data associated with any of the OTU are summarized on a single page   

## TaxonNames and OTUs
* What data goes where
  * Nomenclatural data are attached to _taxon_names_
  * Everything else (biology, geography, determinations, etc.) is attached to an OTU

### One TaxonName and one OTU (1:1)
* Side note: relationship (edge) between TaxonName and OTU would benefit from RC5 semantics between the two

### One TaxonName, many OTUs
Cases where this could be useful
  * Coding same taxon independently for proofing
  * Provide means for splitting a single _taxon_ into several and have all associated information already 
  sorted out to the right OTUs
  * Transcribing data from literature, capturing verbatim names as you go then filtering those 
  OTUs into the same or related concepts

### Many TaxonNames, Many OTUs
* What might this look like?
  * Protonyms
  * Combinations
  * Synonyms

## !! Which OTU should I use?
We might see:
* OTU linked to Protonym
    * If an OTUs is linked to a Protonyms which is a valid name, 
        it is assumed that this protonym is referenced in the form of its original
    * If an OTU is linked to a Protonym which is a synonym of another protonym, 
        it is assumed that the synonym is referenced in its original form
    * If an OTU linked to a subsequent combiantion of a Protonym (valid or synonym), 
        it is assumed that the Protonym is referenced in the form of this combination

### Citing data linked to OTUs
* When should I Cite data linked to an OTU linked to Protonym?
    - when a taxon is used in the form of its original combination, use OTU linked to this Protonym
* When should I Cite data linked to an OTU linked to a Combination?
    - when a taxon is used in the form of subsequent combination, use OTU linked to the Combination

###  OTUs and new subsequent combinations
Use case:
* A new species, Aus aus, is described. A Protonym with this name is created in the TaxonWorks and
    one OTU, "Aus aus as Aus aus",  is linked to this _taxon_name_. A type specimen (as a collection object) 
    with its determination is linked to this OTU
* A new publication is published where the species is moved to another genus, Bus. 
    To represent this in TaxonWorks, the parent of the species is changed to Bus, 
    and a new Combination "Bus aus" is created, linked to a new OTU, "Bus aus as Bus aus"; at the same time 
    the label of the OTU linked to the Protonym is changed to "Bus aus as Aus bus". 
* The new distribution data are linked to the second OTU, associated with the Combination.
* The species became a synonym of "Bus cus", the protonym label changes to "Bus cus as Aus aus", 
    the Combination label changes to "Bus cus as Bus aus", so the type specimen is still linked to "Aus aus"
    and all distribution records are still linked to "Bus aus"

## When should I create a new OTU?
* What are the hints that suggest you need a new OTU?
### What are the mechanisms in TaxonWorks by which new OTUs created?

## What happens when I use the "wrong" OTU?




