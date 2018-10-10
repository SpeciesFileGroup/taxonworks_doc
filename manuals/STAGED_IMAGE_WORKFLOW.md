WIP

# Approach

The basic approach is to break down verbatim data captured in staged images into required elements. 
The premise is that by focusing on specific elements of the process, one at a time, we can leverage an efficiency of scale. 
The alternative approach, parsing out every element of a record, then moving to the next, forces the curator to think about many different issues for each record, rather than a single issue for many records.  This is an inefficient process.

# Outcome

At the end of this process collection objects will have:
1) their label data transcribed, verbatim; 
2) a catalog number; 
> 3) lat-long parsed from verabatim data; 
> 4) geographic-area and verbatim-locality isolated
> 5) collecting event dates transcribed

# Overview of steps

* Produce many staged images that conform to [SQED](https://github.com/SpeciesFileGroup/sqed) processing.
* Batch load those images using a TaxonWorks `rake` task (command line, accessible to admins).
* Transcribe the data, verbatim, for many images.
* Use one of the secondary parsing tasks to parse out specific data of a single type (e.g. one of lat long, geographic area + verbatim locality string, dates)
* Repeat prior step for another data attribute.

# Prequisite knowledge

* A basic understanding of navigating to/within the TaxonWorks hub.  We recommend you "favourite" (click the star) of the pertinent tasks cards for quicker access.

# Specifics

## Producing staged images

* [ ] Documentation should added to the SQED gem website.  

## Batch load those images

* [ ] Migrate/merge documentation from Dean's SOP and rake task notes.

## Verbatim transcription

* User the `Collection object image breakdown TODO list` to enter into the verbatim transcription interface (`Task: Transcribe Specimen`) by using the `Collection object image breakdown TODO list` task.  
Each uncolored square represents a record that needs to be transcribed, clicking that number opens the transcription interface. 

*a.* Find the namespace for the catalog number, lock it.  
- The "namespace" is the text in front of the catalog number that stays the same.

*b.* Use `ctrl-s` to copy the OCR'ed identifier value or transcribe it directly. Check the number—it tends to lose the last digit!

*c.* Transcribe the collecting even label into "buffered collecting event". Type exactly what you see on the labels.

*d.* In buffered determination, put the species determination and the author, if available. Determiner also goes here. Specimen’s sex goes here (“female” or “male”), if present on card. 

*e.* If in doubt, transcribe remaining labels to "other labels"

*f.* It is straightforward and useful to also update the total input (all images default to 1) if needed

*g.* Type  `ctrl-n`, or click the button (but yuck, touching the mouse is dirty and yucky), to save the record and move to the next image.

### Step recommendations
* Stay focused on verbatim transcription at this stage. We recommend you only transcribe labels, do not assign the Taxon Determination or other attributes like Sex or stage at this point.

### Tips
* The `Task: Transcribe Specimen` interface can be driven completely by keypresses with the exception of the real-time OCR window.
* Control (`ctl`) keys are those in square brackets, like `[n]` (which saves the record and jumps you to the next one)

## Verbatim locality and Geographic area extraction

_The goal here is to only populate two fields, `verbatim locality` and geographic area_

* Return to the `Collection object image breakdown TODO list`.  Select a record to work on.  Then click `Buffered breakdown`.

*a.* Highlighting the text of the verbatim locality will automatically copy it to the verbatim locality field, alternatively type it in.

*b.* Use the geographic area picker to find and assign the collecting event to the finest geographic level possible (level 3 subdividions, e.g. counties)
- Searches in geographic area can be limited to their parent scope, for example `Jef Te` prioritizes Jefferson County, Texas to the top.

## Lat/long extraction

* [ ] add pathway to copy Buffered CE to CE

## Collecting event extraction

* [ ] add pathway to copy Buffered CE to CE

# Acknowledgements, authors

Thanks to the Deans lab (Andrew R. Deans & Emily Sandall) for sharing their original SOP proceedure, some of the text here is from that SOP.
