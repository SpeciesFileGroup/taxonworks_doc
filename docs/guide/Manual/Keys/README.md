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

### Tutorial: Standard Key

What follows are the steps for entering data to create a basic dichotomous (standard) key. Please note carefully the logic of when and where key elements are entered as these intricacies are critical.

The instructions that follow will allow you to recreate the key shown here:

```
Key to the males of Rhopalopsole species from Yunnan Province of China from 
Yang, X. & Du, Y.-Z. (2024) A new species of Rhopalopsole (Plecoptera, Leuctridae) from Yunnan Province, China. Biodiversity Data Journal, 12, e134258: 10 pages. https://doi.org/10.3897/bdj.12.e134258.

1 Lateral processes of tergum 10 bifurcate…………………………………………………….... 2

– Lateral processes of tergum 10 not bifurcate……………………………………………….… 4

2 Epiproct triangulate in dorsal view ………………………….R. brevidigitata Qian & Du, 2017

– Epiproct not triangulated in dorsal view…………………………………..……………………. 3

3 Antennae with long hairs…………………………………….…R. sinensis Yang & Yang, 1993

– Antennae without long hairs……………………………..….R. yunnana Sivec & Harper, 2008

4 Subanal lobes are divided into three parts……………………..…….R. dentiloba (Wu, 1973)

– Subanal lobes are not divided into three parts…………………………..……………………. 5

5 Lateral projections of tergum 10 nearly parallel-sided in lateral view……...R. emeishan Sivec & Harper, 2008

– Lateral projections of tergum 10 gradually taper towards the apex in the lateral view……. 6

6 Tergum 10 with central sclerite is about the same length and width…… R. faciursina Qian & Du, 2017

– Tergum 10 with central sclerite distinctly broader than long…………………………………. 7

7 Tergum 9 with a T-shaped weakly sclerotised area in the median……. R. siculiformis Qian & Du, 2012

– Tergum 9 without a T-shaped weakly sclerotised area in the median………………..…….. 8

8 The cercus with a small spine and tergum 9 is mostly sclerotised, somewhat less so in the median pentagonal area with a paired posterior process with sensilla basiconica………………………………………………………R. dulongjianga Yang & Du, sp. nov.

– The cercus without spine and tergum 9 without a pentagonal weakly sclerotised area in the median………………………..R. bispina (Wu, 1949)
```

Starting from `New Dichotomous key` task:

* In the `Key metadata` box, enter a `title` and `description`.
* `Search` for and `select` the taxon for which the key was written, in this case the genus _Rhopalopsole_.
* Check the `Is publicly accessible` box.
* `Save` the metadata, then
* Enter the `citation` for the source of the key using the `radial annotator` that will appear in the upper right corner.

#left[**Legend**: Elements of Key Metadata](https://sfg.taxonworks.org/s/0jo5bf)

* Next type `1` in the `couplet from citation` box.
* Cut and paste couplet 1a into the top left text box, and 1b into the top right text box.
* Click the `Update` button.

#left[**Legend**: Entering couplet 1](https://sfg.taxonworks.org/s/lvvz60)

* Note that since 1a (left column) directs the user to couplet 2, `create and edit the next couplet` must originate from the left hand column. 
  * Click on `create and edit the next couplet` in the left column.
* Type `2` in the `couplet from citation` box.
* Cut and paste couplet 2a into the top left text box, and 2b into the top right text box.
* Search for _`brevidigitata`_ in the left OTU box and `select` the correct one from those shown.
* Click the `Update` button.

#left[**Legend**: Entering couplet 2](https://sfg.taxonworks.org/s/06f0yv)

* Now, in the `Previous couplets` box, `click` on couplet 1.
* This time, in the right hand column (couplet 1b), click on `Create and edit the next` couplet.
* Note that couplet 1b directs the user to couplet 4. 
  * Type `4` in the `Couplet number from citation` box.
* Cut and paste couplet 4a into the top left text box, and 4b into the top right text box.
* Search for _`dentilobata`_ in the left OTU box and `select` the correct one from those shown.
* Click the `Update` button.

* In the `Previous couplets` box, `click` on `couplet 1`. 
  * Then go to bottom of left column and `click` on `couplet 2` to return to couplet 2.
* Note that couplet 2b directs the user to couplet 3. Go to top of right column and `click` on `Create and edit next couplet`.
* Type `3` in the `Couplet number from citation` box.
* Cut and paste couplet 3a into the top left text box, and 3b into the top right text box.

* Search for _`sinensis`_ in the left OTU box and `select` the correct one from those shown.
* Search for _`yunnana`_ in the right OTU box and `select` the correct one from those shown.
* Click the `Update` button.

#left[**Legend**: Entering couplet 3](https://sfg.taxonworks.org/s/0vdwvg)

* In the `Previous couplets box`, click on `couplet 1`.
* Go to bottom of right column and `click` on `Couplet 4` to return to couplet 4.
* Note that couplet 4b directs the use to 5, so go to top of right column and `click` on `Create and edit next couplet`.
* Type `5` in the `Couplet number from citation` box.
* Cut and paste couplet 5a into the top left text box, and 5b into the top right text box.
* Search for _`emeishan`_ in the left OTU box and `select` the correct one from those shown.
* Click the `Update` button.

Enter the rest of the couplets following the above pattern. Once the key is complete use the `radial navigator` button in the upper right to go to `Use dichotomous key` to check your work.

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
 

