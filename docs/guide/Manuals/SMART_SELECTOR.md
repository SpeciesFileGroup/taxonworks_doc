# Smart selectors

This is version _0.0.1_. All changes beyond grammar will result in an increment. Higher level increments reflect larger changes that may reflect new ways of doing things, or differences in user interfaces, etc.

_You can ask for help and clarification live in person on [Gitter](https://gitter.im/SpeciesFileGroup/taxonworks)!_

## Overview

Smart selectors are user interface components that let you link one record to another by quickly selecting (creating inline if needed) a related record.

## Exercise target audience

All TaxonWorks users.

## Exercise goals

* Understand the purpose and use of Smart Selectors.

## Assumptions

* You understand basic navigation throughout TaxonWorks
* We assume you have the following cards on your hub Favorites tab:
  - *Tasks*
    - New source
    - Comprehensive digitization

## Gotchas

* TaxonWorks is only officially supported on Firefox and Chrome.

## Tips

* Become familiar with the Pinboard, it greatly influences what is Smart selectors present
* Smart selectors get better with use, at first they will appear largely blank, after adding a couple records they increasingly become populated

## Related exercises

None.

## Exercise

### Syntax

- In the exercise bulleted points are actions you should take, non-bulleted tasks are comments or guiding questions.
- `Highlighted words` refer to text or elements in the application, for example button or field names.
- "Quoted words" are literal values to be input or noticed

### The Smart selector concept

Smart selectors are TaxonWorks attempt to increase the efficiency of the curators ability to find and re-use related data.  They do this variously by:
* Identifying related records used recently (the past two weeks)
* Drawing from the user's Pinboard selections
* Using the default user selected option from the Pinboard
* Presenting multiple options in a simple modal form
* Using autocompletes to quickly search through the data

Not all smart selectors have the same options, but most do. When they differ it's usually by the presence or absence of the `Common` and `Show-all` tabs.

* The first tab with data, from left to right, is the tab shown on load.

#### The `Quick` tab

The `Quick` tab is TaxonWorks' attempt at presenting the most likely choice to the curator. It is a 5-item list that combines records presented in the Recent and Pinboard tabs.

The layout is:
1. Pinboard selected record (on pinboard, and selected as default)
2. Most recent record (see below)
3. 2nd most recent record
4. 3rd most recent record
5. 4th most recent record

#### The `Recent` tab

The recent tab is populated with records that were recently used for this type of object.  In some cases extra guessing is done to predict that you may want, say a Person from a related type of record, not just type of record your are presently on.

* The list is populated with values _from the last two weeks_.
* The list is populated with records created or updated _by this user only_.
* The list is scoped to related records used _in this project_ (for the most part, minor exceptions exist for cross-project accessible data).

#### The `Pinboard` tab

The pinboard tab presents the _top 10 records from the User's pinboard_ for the corresponding type of data. For example you may have 15 People added to your pinboard. The top 10 (as ordered on the Pinboard) are presented as options when selecting an Author.

#### The `Search` tab

The search tab includes an autocomplete. The search behind the autocompletes attempt to find the most likely records based on the search terms and place those towards the top of the list.  The fuzzier the match, the more likely it will be towards the end of the list.  They do this by running multiple queries and compiling the results into a list. Most autocompletes present only 20 records, to further refine the list change your search terms.

#### The `Common` tab*

Some smart selectors have a fixed set of values that are deemed the most likely selections across all decisions.  If present these are on the `Common` tab.

#### The `Show all` tab

For those smart selectors with a `Common` tab there is also a `Show all` tab, which presents a modal pop-up containing all possible choices.

##### Inline record creation

With smart selectors some `Search` autocompletes include the option to create new records for the unmatched search term(s) directly.  These include:
* All autocompletes referencing People
* The OTU autocomplete

In both options a small form, or other options allow for new records to be created without navigating away from the selector.

#### Resetting a choice

To unselect a record chosen in the smart selector use the `circular blue icon with the undo arrow`.

#### Multiple selections

Some smart selectors permit multiple selections. If so they will be listed below the selector. Use the `Red trash can icon` to remove a selected option from the list.

#### Locking values

Some tasks include lock toggles that lock a smart selectors values in. Locked selectors mean that if a record is chosen, then it will be used in the next record as well.

### Example use

* Smart selectors are found throughout TaxonWorks.
* The `New source` task has smart selectors for Serials, Authors, and Editors.
* The `Comprehensive collection object form` task has smart selectors for many things including Collectors, Collecting Events, OTUs, Biological Relationship and Namespaces.
* Try creating a record in one of the forms. Include a selection from one or more smart selectors.
* Navigate to a new record, notice the Quick and Recent tabs are now populated.
* Add a record to your pinboard.
* Create a new record. Notice that the Pinboard tab is now populated, and the Quick options are affected as well.

### Wrapping up

Smart selectors will change as we find better ways to increase record selection based on better prediction, user preferences, and internal navigation improvements.

## Addendum

None.

