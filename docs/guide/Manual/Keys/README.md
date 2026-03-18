---
sidebarParentPosition: 45 
---

# Overview

Keys to identify taxa come in two different forms, standard (hierarchial) and multi-entry. TaxonWorks supports the creation and use of both, adding numerous new features to both in their digital format. Here we cover standard keys, for multi-entry (interactive) keys, see [Matrices](/guide/Manual/matrices.html#matrices).

## Standard keys

Historically known as bifurcating, dichotomous and traditional within TaxonWorks, these look like this where each branch is a "Lead":

```
1. lead 1 ... 3
-  lead 2 ... Aus

3. lead 3 ... Bus
-  lead 4 ... Cus
-  lead 5 ... Dus
```

Keys may be contain the following:
* 2 or more leads per step/entry, i.e. the model is not limited to couplets or strickly dichotomous formats (sometimes referred to as multifurcating)
* Individual _leads_ can be figured, cited, and annotated with Attribution (e.g. editor, creator, copyright owner)
* Endpoints can point to OTUs or user-defineable text/link combinations, or be redirects to other 
* Number the key (e.g. cloning from literature) explicitly or it can be auto-numbered for print

### Digital

Benefits of the digital version of  TaxonWorks' standard keys:
* See "past" (decisions made prior) and "future" (decisions to be made) endpoints at each step
* Expandable figures with captions and figure numbers
* Link outs in-place to endpoint pages
* See annotations (e.g. notes, flags)

These keys can be used on-or offline using the [pinpoint](https://github.com/SpeciesFileGroup/pinpoint) app, which can further be integrated into any website including those based on TaxonPages.

### Print

TaxonWorks exports print-ready formats with features including:
* Auto numbering of the key on demand 
* Markdown markup for eBook or further styling (coming)

### API 

Standard keys can be exported as one JSON object.  This object is what is used by pinpoint.  It could also be used as a data-object in a larger integrated or aggregating format.  The model is in progress.

### Layouts for standard keys
You have two options in TaxonWorks for how to display standard keys. Click the blue button in the upper right corner to switch between them at any time.

The button says what you'd be switching to, so when it says `Full key`, you're actually currently in `Previous and future` view:

#left[`Previous and future` view of a standard key](https://sfg.taxonworks.org/s/ln55xm)

In this view you can see, above the couplets, each of the leads you've already selected. In each individual lead (typically a left and right "column") of the current couplet you can see all of the remaining choices to be made below that lead. See the next section for a tutorial of how to construct a key using this view.

When the button says `Previous and future` you're in `Full key` view:

#left[`Full key` view of a standard key](https://sfg.taxonworks.org/s/q9tvk9)

In this view the `Key preview` section shows your key in the way it might typically appear in print. The pair of green arrows points to the couplet you're currently viewing. Click on a numbered blue button to load that couplet for viewing/editing; clicking on numbers that aren't buttons navigates within the key within loading a new couplet. Click on the blue circle with a plus inside it in the second lead of couplet 8 to create a new couplet below it - leads that have already been assigned an OTU don't show this button, so you can tell at a glance which terminal leads have not yet been assigned an OTU.

The tutorial of the next section should be followable using the full key view: adding data proceeds the same, only navigation needs to be adjusted.

### Tutorial: Standard Key

What follows are the steps for entering data to create a basic dichotomous (standard) key. Please note carefully the logic of when and where key elements are entered as these intricacies are critical.

The instructions that follow will allow you to recreate the key shown here:

```
Key to the males of Rhopalopsole species from Yunnan Province of China from 
Yang, X. & Du, Y.-Z. (2024) A new species of Rhopalopsole (Plecoptera, Leuctridae) from Yunnan Province, China. Biodiversity Data Journal, 12, e134258: 10 pages. https://doi.org/10.3897/bdj.12.e134258.

1 Lateral processes of tergum 10 bifurcate... 2

– Lateral processes of tergum 10 not bifurcate... 4

2 Epiproct triangulate in dorsal view... R. brevidigitata Qian & Du, 2017

– Epiproct not triangulated in dorsal view... 3

3 Antennae with long hairs... R. sinensis Yang & Yang, 1993

– Antennae without long hairs... R. yunnana Sivec & Harper, 2008

4 Subanal lobes are divided into three parts... R. dentiloba (Wu, 1973)

– Subanal lobes are not divided into three parts... 5

5 Lateral projections of tergum 10 nearly parallel-sided in lateral view... R. emeishan Sivec & Harper, 2008

– Lateral projections of tergum 10 gradually taper towards the apex in the lateral view... 6

6 Tergum 10 with central sclerite is about the same length and width... R. faciursina Qian & Du, 2017

– Tergum 10 with central sclerite distinctly broader than long... 7

7 Tergum 9 with a T-shaped weakly sclerotised area in the median... R. siculiformis Qian & Du, 2012

– Tergum 9 without a T-shaped weakly sclerotised area in the median... 8

8 The cercus with a small spine and tergum 9 is mostly sclerotised, somewhat less so in the median pentagonal area with a paired posterior process with sensilla basiconica... R. dulongjianga Yang & Du, sp. nov.

– The cercus without spine and tergum 9 without a pentagonal weakly sclerotised area in the median... R. bispina (Wu, 1949)
```

Starting from the `New Dichotomous key` task:

* In the `Key metadata` box, enter a `title` and `description`.
* `Search` for and select the taxon for which the key was written, in this case the genus _Rhopalopsole_.
* Check the `Is publicly accessible` box if you want this key to be available on Taxon Pages or via the API.
* `Save` the metadata, then
* Enter the `citation` for the source of the key using the `radial annotator` that will appear in the upper right corner.

#left[Elements of Key Metadata](https://sfg.taxonworks.org/s/0jo5bf)

* Next type `1` in the `Couplet number from citation` box.
* Cut and paste couplet 1a into the top left text box, and 1b into the top right text box.
* Click the `Update` button.

#left[Entering couplet 1](https://sfg.taxonworks.org/s/lvvz60)

* Note that since 1a (left column) directs the user to couplet 2, `create and edit the next couplet` must originate from the left hand column. 
  * Click on `create and edit the next couplet` in the left column.
* Type `2` in the `Couplet number from citation` box.
* Cut and paste couplet 2a into the top left text box, and 2b into the top right text box.
* Search for _`brevidigitata`_ in the left OTU box and select the correct one from those shown.
* Click the `Update` button.

#left[Entering couplet 2](https://sfg.taxonworks.org/s/06f0yv)

* Now, in the `Previous couplets` box, click on couplet 1.
* This time, in the right hand column (couplet 1b), click on `Create and edit the next couplet`.
* Note that couplet 1b directs the user to couplet 4. 
  * Type `4` in the `Couplet number from citation` box.
* Cut and paste couplet 4a into the top left text box, and 4b into the top right text box.
* Search for _`dentilobata`_ in the left OTU box and select the correct one from those shown.
* Click the `Update` button.

* In the `Previous couplets` box, click on `couplet 1`. 
  * Then go to bottom of left column and click on `couplet 2` to return to couplet 2.
* Note that couplet 2b directs the user to couplet 3. Go to top of right column and click on `Create and edit next couplet`.
* Type `3` in the `Couplet number from citation` box.
* Cut and paste couplet 3a into the top left text box, and 3b into the top right text box.

* Search for _`sinensis`_ in the left OTU box and select the correct one from those shown.
* Search for _`yunnana`_ in the right OTU box and select the correct one from those shown.
* Click the `Update` button.

#left[Entering couplet 3](https://sfg.taxonworks.org/s/0vdwvg)

* In the `Previous couplets` box, click on `couplet 1`.
* Go to bottom of right column and click on `couplet 4` to return to couplet 4.
* Note that couplet 4b directs the use to 5, so go to top of right column and click on `Create and edit next couplet`.
* Type `5` in the `Couplet number from citation` box.
* Cut and paste couplet 5a into the top left text box, and 5b into the top right text box.
* Search for _`emeishan`_ in the left OTU box and select the correct one from those shown.
* Click the `Update` button.

Enter the rest of the couplets following the above pattern. Once the key is complete use the `radial navigator` button in the upper right to go to `Use dichotomous key` to check your work.

If your project is set up on Taxon Pages, then an online version of your key will be available on the taxon page of the OTU the key is based on. For example [here](https://dermaptera.speciesfile.org/keys/1220) is the Taxon Pages version of a standard key to the "Higher Taxa of Dermaptera Known in Australia":

#left[The Taxon Pages version of a standard key](https://sfg.taxonworks.org/s/3cozmy)

## Integration of standard and multi-entry keys

3i, one of the precursors to TaxonWorks, had functionality that lets multi-entry key algorithms drive the creation of traditional keys in a sophisticated manner. Here we discuss that functionality as it has been implemented in TaxonWorks.

The functionality discussed here was motivated by the realization that it's often a more straightforward task to split a group by characters one at a time, in no particular order, than it is to sit down and write a standard key from start to end by scratch, **_especially for large groups_** (for small groups one can simply try things in a few different orders until one lands on a good plan). 

The linkage used here is: once the character data has been determined and known to split a group into the parts you want - by experimenting with the interactive key for those characters, for example - then the knowledge gained by studying the character data and the interactive key can be used to build a standard key from the top down. At each stage of the standard key you ask yourself: "of the remaining descriptors in the interactive key for this stage, which character state(s) best split the `Remaining` data in the key?" That choice of state(s) determines a positive selection ("brown") and its opposite ("not brown") - those become the leads of your next couplet, and the `Remaining`/`Eliminated` of the interactive key with that character state selected become the OTUs that remain to be resolved for the left and right lead of that new couplet.

:::tip
You *could* (often) follow this process blindly, making random choices of character states at each stage, to create a valid key; the point here is not that TaxonWorks does all the work for you, but rather that it *allows* you to be the one deciding the best way in which to split at each stage - creating a user-friendly key - and automates the rest.
:::

### An example
As an example we'll retrace the beginning steps of a case where the work has already been done: the leafhopper genus *Eratoneura*. The [interactive key](https://hoppers.speciesfile.org/interactive_keys/21) has 198 OTUs and 40 descriptors; the resulting [dichotomous key](https://hoppers.speciesfile.org/keys/1379) has 199 couplets.

#### Lead OTUs
This process requires keeping track of a list of OTUs at each stage of a key. Interactive keys already do so explicitly with their `Remaining`/`Eliminated` lists at each stage, but for dichotomous keys such lists are typically only implicit: the list of OTUs associated with a lead of a particular couplet is all of the OTUs on leads that are children of the given lead, i.e. all of the OTUs that could potentially turn out to be the correct identification (just like `Remaining` for interactive keys). Naturally then the list of `lead OTUs` for the start of a key is all of the OTUs that can be identified using the key.  We'll start there.

##### Ways to add `lead OTUs` to a key
* Create your new standard key as usual. Click the blue arrow next to the `Update` button to reveal more options, select `Add an OTUs list`, choose `From an observation matrix`, and choose your existing matrix. That brings up a selectable list of all of the OTU rows from that matrix; click `Select all` and then `Add OTUs`. Note the message that's returned: `Added otus to the lead list; saved link to observation matrix`.

:::important
Currently this is the only option for adding an OTUs list to your standard key that will save a link to an observation matrix, which will be useful if you intend to create your key using an interactive key.
:::

You can skip to the next section now if your sole interest is in using an existing interactive key to create a dichotomous key; if you're interested in more general uses of `lead OTUs` for key creation, read on.

* From an existing `observation matrix`. In this case the matrix for *Eratoneura* has already been built, so we can copy its OTUs to a new interactive `lead OTUs` key. Go to the `Edit observation matrix` task for the *Eratoneura* matrix, click on the `Radial matrix` button <img src="https://sfg.taxonworks.org/s/286w1x" width="20px">, select `Add to a new key`, type the name of your new key, select `Create` and then click on `Edit` to start editing the new key.
* The more general route is to use `Filter OTU`. For example, here we want only the current valid species of *Eratoneura*, so we'll start at `Filter Taxon Names` to get that result, and then send it to `Filter OTUs`. Now click on the `Radial Matrix` button <img src="https://sfg.taxonworks.org/s/286w1x" width="20px">, and proceed as in the observation matrix case.

:::tip
There are restrictions on when/where lead OTUs can be attached to leads of a key; in general you'll want to start a new key with lead OTUs rather than trying to add them to an existing partially completed key.
:::

What you see looks similar to the standard traditional key interface, except that now each lead has a list of OTUs attached below it.  The rules of `lead OTUS` are:
* when a new couplet is created, all of the parent lead's OTUs are placed on the *right* lead of the new couplet. This encourages the notion that a user-friendly key places short paths on the left and longer paths on the right.
* each couplet must divide its leads in some way; the logic here is that each final lead of a key should have an OTU.
  * `lead otus` *can* be added to both sides of a couplet, representing the case where there's not enough information at a given couplet to determine that OTU.
* when your key is complete, all of your original `lead otus` should still exist in the key; in an ideal world each original `lead otu` will exist at the end on a unique leaf/terminal lead.
  * it's possible to delete and add OTUs to your OTU lists; under "normal" operations you'll never want to do so.

#left[The start of a `lead OTUs` key, with all `lead OTUs` assigned to the right lead](https://sfg.taxonworks.org/s/7bzx4f)

Some notes on the screenshot:
* a bright green large circle and a full-color OTU name indicate an OTU is assigned to that lead (as on the right here). Click the smaller TaxonWorks-standard green circle with the plus sign in it (on the left here) to move an OTU to the lead you clicked on - note that that will *remove that OTU from the other lead*. Here for example we've clicked the add button on the second OTU on the left:

#left[The second OTU of the list moved to the left side](https://sfg.taxonworks.org/s/xdujq0)

* To support multi-furcating keys, we don't include a remove button that you could click on an existing `lead OTU` to have it reappear as selected on the other side - this protects the requirement that you never lose OTUs while creating the key
* To add an OTU to a new lead without removing it from any others, double-click on the add button
* Click on `Reset all OTUs` on the right-most lead to move all lead OTUs for that couplet back to the rightmost lead
* `lead OTU` moves are auto-saved, you don't need to click `update` on the key after moving `lead OTUs`

#### Using an existing interactive key to divide `lead OTUs`
Use the `Reset all OTUs` button on the right lead to reset the OTUs state if you've moved things around in the previous section. Now you should see a blue `Send OTUs to interactive key` on the right lead. Click it.
* if you created your OTUs list using the method that saves an associated matrix, that click will open the expected interactive key directly
* if not, you'll be presented with the option to choose which interactive key to send your OTUs to each time you click the button [TODO: offer to save the association]

#left[Interactive key being used in the service of a standard key](https://sfg.taxonworks.org/s/pavfpk)

Note that all of your `lead OTUs` are under `Remaining` in the interactive key. We now want to use the interactive key to split those OTUs in a way that's useful for our standard key. In this case, using our knowledge of the characters (and the fact that we already know what the outcome should be!), we'll select the two character states `slender` and `small toothlike` for character 33, `Shape of aedeagus distal processes`: this splits the original OTUs into 12 `Remaining` and 185 `Eliminated` in the interactive key. We want to transfer that split, *and the character states that produced it*, back to our key as the first couplet, so click the `Return to key` button to do so. Note the `Remaining` OTUs are now assigned to the left lead, and the `Eliminated` OTUs are assigned to the right lead. Also the lead text of the left and right leads has been updated with the text of the character states you selected on the left, and the character state text of those character states you did not select on the right. The text is unsaved at this point; at any time you're free to make adjustments to the text and/or the division of OTUs.

* If you check the `Send character depictions` checkbox then depictions associated with the character states you selected will be automatically added to the corresponding leads.

#left[The OTUs of the key have been split by our selection in the interactive key](https://sfg.taxonworks.org/s/nsmvk9)

There are still multiple OTUs remaining on both sides, so let's continue a bit. Click `Create the next couplet` on the left side. Note, as expected, that the 12 OTUs from the left side of the previous couplet all start off on the right side of this new couplet. Click `Send OTUs to interactive key` to split this new set of OTUs. This time we'll select all of the non-absent character states of the character `Position and length of aedeagus ventral processes`: that leaves 2 `Remaining` and 10 `Eliminated` - send those back to the key.

Our key now looks like:

#left[Two remaining OTUs on the left, 10 on the right](https://sfg.taxonworks.org/s/4piqc3)

We're already down to 2 OTUs on the left branches, let's finish that off: click `Create the next couplet` on the left side - again the new couplet loads with the 2 OTUs from the previous couplet on the right. Click `Send OTUs to interactive key`. The interactive key, as expected, shows 2 `Remaining` and 0 `Eliminated` (it automatically restricts the key to the set of OTUs we send it). In this particular case there are many characters left which distinguish the two species; it's up to you which one to send back - this is a case where you'll likely want to update the returned text to add more relevant states to this final lead for a species.

At this point, with exactly one OTU available and assigned on each side, the list OTUs are automatically assigned to their respective leads. This branch of the key is complete.

#left[Both left and right leads have a final OTU assigned](https://sfg.taxonworks.org/s/2idlk3)

If we step back to couplet 2, we now see that the left side indicates for us `Descendants key-complete`, so we know we don't need to do anymore work on the left side. The next step would be to create the next couplet below the right lead of couplet 2, split its OTUs, on and on until all OTU lists have been split as far as possible by the key.



