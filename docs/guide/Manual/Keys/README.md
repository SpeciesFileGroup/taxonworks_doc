---
sidebarParentPosition: 45 
---

# Overview

Keys to identify taxa come in two different forms, standard (hierarchial) and multi-entry. TaxonWorks supports the creation and use of both, adding enough numerous new features to the former in its digital format.

## Standard keys

Historically known as bifurcating, dichotomous and traditional within TaxonWorks these look like this where each branch is a "Lead":

```
1. lead 1 ... 3
-  lead 2 ... Aus

3. lead 3 ... Bus
-  lead 4 ... Cus
-  lead 5 ... Dus
```

Keys may be contain the following:
* 2 or more leads per step/entry, i.e. the model is not limited to couplets or strickly dichotomous formats
* Individual _leads_ can be figured, cited, and annotated with Attribution (e.g. editor, creator, copyright owner)
* Endpoints can point to OTUs or user-defineable text/link combinations, or be redirects to other 
* Number the key (e.g. cloning from literature) explicitly or it can be auto-numbered for print

### Digital

Benefits of the digital version of  TaxonWorks' standard keys:
* See "past" (decisions made prior) and "future" (decisions to be made) endpoints at each step
* Expandable figures with captions and figure numbers
* Link outs in-place to enpoint pages
* See annotations (e.g. notes, flags)

These keys can be used on-or offline using the [pinpoint](https://github.com/SpeciesFileGroup/pinpoint) app, which can further be integrated into any website including those based on TaxonPages.

### Print

TaxonWorks exports print-ready formats with features including:
* Auto numbering of the key on demand 
* Markdown markup for eBook or further styling (coming)

### API 

Standard keys can be exported as one JSON object.  This object is what is used by pinpoint.  It could also be used as a data-object in a larger integrated or aggregating format.  The model is in progress.

## Multi-entry keys

An observation matrix in TaxonWorks can be used as a multi-entry key within or outside of TaxonWorks using the app [distinguish](https://github.com/SpeciesFileGroup/distinguish). Internally this integration extends the role of a multi-entry key engine far beyond its use in diagnosing taxa.  For example the interface can be used to:

* Evaluate progress in the construction of large complicated datasets
* Create a single point of entry for adding annotations of all types that reflect workflows, scientific addenda, etc.
* Navigate two and from other linked resources within TaxonWorks
* Provide multi-language context for the underlying coding of data

Features include:
* Ability to translate any Descriptor (= Character traditionally) into any number of language
* Qualitative weighting of descriptors
* Prioritization of choices based on descriptor order, weighting, or next-best-algorithm
* Toggling between ranks of terminals (only species, only genera, etc.)
* Trivial re-use and reformulation of the key scope by adding or removing new descriptors or terminals
* Rows from OTUs (taxa), CollectionObjects, or Extracts

## Integration of standard and multi-entry keys

3i, one of the precursor to TaxonWorks had functionality that lets multi-entry key algorithms drive the creation of traditional keys in a sophisticated manner.  We have architected TaxonWorks to facilitate replicating that functionality, and to innovate on this front. Internally we have a solid understanding of how to tackle first steps. See the issue tracker for more.
 

