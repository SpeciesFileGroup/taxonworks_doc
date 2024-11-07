---
sidebarPosition: 32 
---

# Migrate to TaxonWorks
_General strategies and tips for migrating complete projects into TaxonWorks with reference to broader considerations for any data migration._

For general import and input methods see [Import](/guide/import) and [Export](/guide/export).

## Overview

Those considering TaxonWorks often have existing data in many different formats. One of their first questions is how can they get their existing data into TaxonWorks. In your considerations it might help to read the [Checklist](#checklist), a generic list of things to consider.

## Strategies

TaxonWorks collectively provides a nice spectrum of strategies for moving projects into it depending on the nature of your data and the skill-sets of those helping you. These range from completely manually typing in the data to using code to script enter everything. All the strategies listed below have been employed by at least one project within TaxonWorks.

### Keying

Even with a large dataset some see coming into a new project as a way to start fresh. Keying in your data has the benefit of forcing you to look carefully at it. It ensures a maximal match to TaxonWorks concepts (data models) as everything is done "natively". It lets you master the interfaces you'll ultimately use through repeated use and experimentation. For incoming datasets with tables of less than 500 rows this is very feasible. Remember that the time spent starting, even if weeks or months, is a tiny fraction of the years spent curating into the future. The elephant in the room — the time it takes to write a script, reformat your data, test and refine batch loads — is all time spent, often waiting for others, that you and your team could have been entering data.  

We've worked hard to build interfaces that variously:
* Facilitate adding multiple items via drag and drop (e.g. images)
* Use "smart selectors" that predict what values you might use based on your recent use
* Use hot keys to copy values from field to field
* Use locks to lock in values from record to record
* Use locks to increment values from record to record
* Let you build a list of current favourites, and default forms to use one of them 
* Reference an extended clipboard toggling between 4 values
* Use hot keys to clone records
* Use in-line data creation for related values when autocompletes fail to find a search target
* Select-paste from one target to another
* Make annotation easy in many contexts via radial popups

### Batch load

This option is most likely to fully cover needs if your data are encodable in Darwin Core Occurrence and Checklist formats. Other batch loaders exist per model, though without the sophistication of the former.

### Script 

If your data are old and rich/complex then writing a 1-off script is often the most effective strategy.  It's the practice that SFG members use for datasets that span decades of curation. This is also useful for data not covered in other batch-loaders as part of the hybrid approach.

#### Console

This process is not comprehensive, i.e. complete datasets are not migrated in this way.  It augments the Hybrid approach outlined below. Small updates are possible directly via careful code execution in the Rails console. In production this option is only accessible by server administrators, however crafting this code is possible by users, with the execution step provided via communication with those administrators.  

### Hybrid

Hybrid approaches use one or more of the above options to achieve complete coverage.  For example use BibTeX formatted sources to import References followed by DwC Checklist data for names, DwC Occurrence data for specimens followed by a script that adds BiologicalAssociation data and Citations.  

## Methods _not_ available
### SQL statements
Accessing the database directly via SQL calls is very rarely done by admins, almost exclusively to address bad data that was not initially caught by model validation but has been, i.e. for retroactive fixes. No batch import uses direct calls to write or update as this avoids the data validation layer.

### API POST/PATCH
The external [API](https://api.taxonworks.org) does not allow POST/PATCH requests, i.e. you can't write to the system in that way.

## Migrating from an existing platform
_TODO, document paths from other broadly used software platforms. In general many platforms export to DwC, this is the first step then see Batch Load._ 

## Darwin Core Archive (DwC-A) based strategies

Here the idea is to import the core of your data via the built-in importer, see [Darwin Core Archive (DwC-A) import](import#darwin-core-archive-dwc-a-import), then, if needed, augment the with the Hybrid approach.

## Checklist
_The intent is that these apply to any migration, not just into TaxonWorks._

### Before you start
#### Getting out
Regardless of what you're migrating, and where you are migrating to, one of the very first questions you should ask is not "How do I get in?", but rather "How do I get *out*?".  We know of no software that has lasted forever in its current form, and there is little reason to expect this to change.

* How long do I need to use the platform I'm using?
* What platforms can you migrate to?
* What data-formats does the new platform let me export to.  Do I understand those formats.  Do others understand them?

#### What might I lose?
_And what can I *afford* to lose_

Going from one system to another means you will lose, so to speak, some things.  In addition to the opposite of what you might gain (below) these might include: 

* Institutional memory on how things were done in the old system, for example how to use interfaces, and how data got in-and-out.
* Documentation that is now not relevant in the new system
* Data semantics

#### What might I gain?

In addition to the opposite of what you might lose (above):

* Improved data semantics, which translates to an increase in `data quality` and the `FAIRness` of your data.  This is one of the primary motivators for moving to a new system
* New, better documentation (if it exists)
* Improved interfaces.
* Greater flexibility
* Access to a community of support

#### How long will this take?
Longer than you expect, however this is highly dependent on what you're coming in with. In our experience, particularly with regards to complex, old data, a rough rule of thumb is that *for every year of curation you've done on your dataset you can expect up to 1/2 a years time for the migration process to complete*. This assumes that you want to be a lossless as possible. Research datasets 20 years old have gone through multiple revisions, have had their semantics drift here and there, cover things that are often very specific to some domain and contain other complexities that make this a difficult process. If we think about taking into account the time between the "AHA! This data should move!" moment to the time at which the dataset is moved then you might take into account such things as (in no particular order): 1) writing grants for support (and resubmitting them, that's 4 years right there); 2) finding people to do the work; 3) waiting for those people to have the time to do the work; 4) finding a community to join you in the move; 5) educating you and your community on how to use the new platform; 5) validating data at all steps; 6) practicing the migration; 7) modelling the transition of your data to the new model; 8) iteratively updating your data to match the new model; 9) writing the tools or processes that do the data migration; 10) waiting for new features that must be there to meet your needs to be created on the target platform; 11) debating other platforms to use; 12) building community consensus on what platform to migrate to; 13) doing feature comparisons; 14) learning about your options; 15) waiting for the original curator to retire; 16) waiting for the original curator to retire *and* "be done" with their data; 16) migrating your data to a platform and finding out near the end (or shortly thereafter) that the platform is no longer supported and starting all over again (thanks big G); 17) some standards group changing what identifier you should use; 18) some ontology group changing the meaning of the things the identifiers point to; 19) staff turnover; 20) your ace post-doc who ran the show retiring and never, ever, coming back; 21) big arguments with your governmental agency as to why you should be allowed to move; 22) doing the migration, then figuring out you missed that 1 critical field; 22) waiting for the server that hosts the data to finally die to induce that real motivating moment of panic. *These are all things we've experienced, please share yours!*

### Prepare your data
_Or, "get to text"_

Many systems that you migrate to will want your data in a text format (e.g. CSV). This is in contrast to something like a Spreadsheet. Depending on who is supporting the migration it might be valuable for you to get experienced in exporting to this format, as it may happen iteratively and frequently. If your data are in a wide-spread SQL format that is compatible (e.g. SQLlite or PostgresQL) 

#### Archive your old data
Consider archiving snapshots of your data as they originally existed for all the future digital-archaeologists who need to justify their jobs.

#### Organize your text
Keep `original` copies of exported text files, as "pristine" as possible in one directory.  `Clone` those files into a *working* directory. Use Git to commit the files to persist changes at different times. _TODO: Reference to data carpentry class or R for data science setup._

#### Iteratively clean, transform, and validate your data
_Coming, a pointer to a checklist of data quality utilities._

The process at this step seeks to accomplish a number of things:
* Improving the consistency of your data prior to migration
* Pre-adapting, so to speak, your data to the semantics of the new system.  For example using specific column-headers or splitting data into multiple fields if the new system prefers a specific format.
* A general cleaning of your data.  Since you don't have to go back to your old tools you can use new tools to update your data (see list above) without having the problem of synchronizing the data back to your original tools format.


### Import
_At this point you'll engage the import capabilities of the system you're moving to._

#### Practice
Hopefully that system has ways to trial the import, and re-do it from scratch.  This is key for complex data.  Practice also means using the new system, getting familiar with the user-interfaces and tools.  This helps to confirm whether or not you really want to migrate.  It gives you new views on your data.  You, as the expert, will best see anomalies in the data, some of which may suggests problems with the import process.

#### Plan for transition

Set a date-time for making the final import run. Make sure your community is aware and engaged.

You may also consider taking the opportunity to:
* Broaden your community by encouraging others to join.  Solo-run projects on complex data are "fragile" in ways that groups of collaborators don't face.
* Adding new ways to communicate issues. Remember, no migration is perfect, immediately after the import run expect to see a flurry of communication that points out problems with the data, tools, etc. Perhaps you can start a shared issue tracker or chat-room so that these issues become visible and accessible to others beyond yourself. Open, shared communications lets experts outside your community hop in and help, as opposed to, for example emails from 1 person to another that are "hidden" from others who might help. Open communication also leaves an audit-trail that can be used to highlight the broader impacts of your project (e.g. look, X number of people need our data, and took the time to engage us) in ways that emails can not.

#### Complete the migration



### When you're done

You're never done. Sorry.

