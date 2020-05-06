# *OTU*s, Taxon Names, and History

Our objective is to address this issue:  
If an *OTU* label was used to pick an *OTU* and relate it to some data, then when a Protonym moves, 
the label reflected in the *OTU* changes how it looks.  The new, updated label, 
may not look like the historical use, what should happen? 

## Database structure

Abbreviations used in the text: *T* - taxon; *TN* - taxon_name, a Latin name of *T*, which is divided into 
two subclasses: *P*, Protonyms, and *C*, Subsequent Combinations; 
*OC*, the original combination, and *CN*, current name, are properties of *P* 

In the TaxonWorks, *OTU* or a Taxonomic Concept is a proxy from *TN* to any non Nomenclature related 
information in the database (e.g. distribution, biological association, specimen determination). 
An *OTU* has two properties (both optional): _name_ (free text) and *TN* (a link to nomenclature).
In most applications, a single *OTU* linked to a *TN* is enough to represent variety of 
information which needs to be tied to a particular scientific name of this *T*. 
In cases where several *OTU* with the same *TN* are 
required, in addition to the *TN*, a _name_ could also be added.

In TaxonWorks, each *P* could be represented in two different ways: *OC* and *CN*. For example, 
valid *TN*, _Neotibicen tibicen_ (Linnaeus, 1758), which is a *CN*, it has _Cicada tibicen_ Linnaeus, 1758 as *OC*. 
Further, a *P* could be a synonym of another *P*, so the *CN* for the first will be the 
*CN* of the valid taxon.

## Basic principles and summary
An *OTU* label could be represented like this:
"_Cicada tibicen_ Linnaeus, 1758 now _Neotibicen tibicen_ (Linnaeus, 1758): OTU1"
Where 
1. _Cicada tibicen_ Linnaeus, 1758, the *TN* of the *T*, the way it was used 
    (the name of the species in the specimen determination, or the name of the taxon in a particular publication)
2. _Neotibicen tibicen_ (Linnaeus, 1758), the *CN* (which is always corresponds to the current 
    classification of the *T*)
3. OTU1, an optional _name_ of the *OTU*

* Tie your data to *OTU* which have the label that represent their historical use (the first pard of the *OTU* label)
* Data are summarized across *OTUs* in a single page, through the proxy use of the *CN* in the nomenclatural classification.
* When a *P* moves in the classifiation, the label for the *OTU* changes.
   * The _data_ haven't moved, they are still tied to the correct *OTU*.
   * It is best practice to always link data with the *OTU* associated with a proper *TN*.
   * Data linked to a *P*, represent the *OC* use of that *P*, in all other cases data have to be linked
   *C*, which intend to represent the historical use of this *T*. The *OC* and *C* never change, 
   even if the *P*  position in the classification changes (the parent of *P* changed). 
   

## Background on the TaxonName classification
* The current classification is defined by the curator, and the parent *TN* of each *P*, 
    only one taxon _ROOT_ does not have a parent in the classification
* To record a historical use of *T*, i.e. change the current classification, we use *P*
* When a *P* moves, it gets a new parent, this parent is reflected in the *OTU* label, at the same time
    a new *C* have also be created

## Side note: How are *OTU* data summarized?
* Some of this sounds complicated, if I manage all this historical stuff, how will I get it summarized? 
* How the Browse taxon page aggregates data across *OTUs* and synonyms, 
    so that you don't have to move data along to a single *OTU*
   1. The *OTU* page finds the valid *P* for this *T*
   * All *C* of that *P* are found as well as the synonyms and their *C*
   * All *OTUs* linked to any of these are collected
   * All data associated with any of the *OTU* are summarized as a single _Taxon Concept_.   

## *TN* and *OTU* relationships
* What data goes where
  * Nomenclatural data are attached to *TN*, which includes to *P*, *C*, nomeclatural status,
  synonym relationships, type, etc. Any citation of those belongs to *TN*. For example, those citation
  may include the original publicaiton for the *TN*, when a new *C* is established, when synonymy 
  was recognized.
  * Everything else (biology, geography, determinations, etc.) is attached to an *OTU*

### One *TN* and one *OTU* (1:1)
* In most cases, this is enough to store the variety of imformation associated with each *TN*
* Side note: relationship (edge) between TaxonName and *OTU* would benefit from RC5 semantics between the two

### One TaxonName, many *OTUs*
Cases where this could be useful
  * Coding same taxon independently for proofing
  * Provide means for splitting a single *T* into several and have all associated information already 
  sorted out to the right *OTUs*
  * Transcribing data from literature, capturing verbatim names as you go then filtering those 
  *OTUs* into the same or related concepts

### Many TaxonNames, Many *OTUs*
Some *OTUs* in TaxonWorks may temporary or permanently not being associated with *TN*, for example undescribed
taxa or the concepts which are recognized by only a vernacular name.

## !! Which *OTU* should I use?
We might see:
* *OTU* linked to *P*
    * If an *OTU* is linked to a *P*, 
        it is assumed that this *P* is referenced in the form of its *OC*
    * If an *OTU* is linked to a *P* which is a synonym of another *TN*, 
        it is assumed that the synonym is referenced in its *OC*
    * If an *OTU* linked to a *C*, 
        it is assumed that the *TN* is referenced in the form of this *C*
    * Every time a species changes its parent, a new *C* with a corresponding *OTU is to be created

### Citing data linked to *OTU*s
* When should I cite data linked to an *OTU* linked to a *P*?
    - when a *TN* is used in the form of its *OC*, use *OTU* linked to this *P*
* When should I cite data linked to an *OTU* linked to a *C*?
    - when a *TN* is used in the form of *C*, use *OTU* linked to the *C*

###  Use case:
* A new species, _Aus aus_, is described. A *P* with this name is created in the TaxonWorks and
    one *OTU*, with the label "Aus aus now Aus aus", is linked to this *TN*. 
    A type specimen (as a Collection Object) with its determination is linked to this *OTU*
* A new publication is published where the species is moved to another genus, _Bus_. 
    To represent this in TaxonWorks, the _parent_ of the *P* is changed to _Bus_, 
    and a new *C* _Bus aus_ is created, linked to a new *OTU*, with the label "Bus aus now Bus aus"; 
    at the same time the label of the *OTU* linked to the *P* is automatically changed to "Aus aus now Bus bus". 
* New distribution data are linked to the second *OTU*, associated with the *C*.
* The species becomes a synonym of anothe *P* "Bus cus", the label of the first *P* is automatically 
    changes to "Aus aus now Bus cus", the label of its *C* changes to "Bus aus now Bus cus", 
    so the type specimen is still linked to "Aus aus" and all distribution records are 
    still linked to "Bus aus". All data are still linked to the proper *OTUs*.

## When should I create a new *OTU*?
* *OTU* could be created at the same time a new *TN* (*P* or *C*) is created.
* *OTU* could be created at the time when new data need to be linked to a particular *TN*.

### What are the mechanisms in TaxonWorks by which new *OTU*s created?

## What happens when I use the "wrong" *OTU*?

# FAQ
* How to add the determination if I know that this is a misidentification?
  - Prease see Nomenclature Basics where it is described how to create a Protonym and mark it as a Misapplication; Add an OTU
  to this protonym. Use the OTU for the taxon determination. If you use a misapplied name for a specimen determination, you can get 
  both the name originally reported name, and the valid name for the same taxon.
  - Alternatively you can just simply add two determinations to the same specimen. Even though the specimen is now determened as 
  Name 2, we can still see a historical record linking this name to the previous determination. To make it work, each determination 
  should be accompanied by the determination date. The correct determination will be determined by the nearest date.


