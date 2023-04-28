---
sidebarPosition: 500
---

# Annotation  
_TaxonWorks excels in annotating data. Tags, notes, custom data-attributes, citations, alternative value, confidence levels, attribution and more are all customizable by the user then usable to enrich and manage their projects._

TaxonWorks provides a nearly universally applicable set of "annotation" types that can be used on core and supporting data. 

## Use cases
_Annotations have many potential uses in TaxonWorks. Some examples to get you thinking._

### My data don't fit in TaxonWorks!
You're checking out TaxonWorks, it seems to have most of what you need, but the [UI](/about/glossary#ui) seems to be missing fields for key data that are critical to your project. See [Data attributes](#data-attributes)

### Export to a particular DarwinCore field
TaxonWorks maps its internal model to well over 50 Darwin Core fields automatically. In addition, users can add Controlled Vocabulary Terms that reference DarwinCore fields to further extend the data that can be exported. See [Darwin core exportable URIs](#darwin-core-exportable-uris).

### I need to make a group of records
As part of your [SOP](/about/glossary#sop) you are constantly needing to make temporary small groups of data to review and modify. 

In TaxonWorks you can filter and select objects by Tags (and many other similar things).  Tags can be batch created, destroyed in mass, and used to dynamically grow and shrink matrices, group your data into stages of a workflow, indicate things "TODO", filter records, add objects to loans, and much more. See [Tags](#tags).

### I need to annotate this data with how it came to be
In your project it's important to know (record a provenance trail) that some Observations came from one [SOP](/about/glossary#sop), while others came from another. See [Protocols](#protocols).

## User interface

_Annotations are implemented in the [UI](/about/glossary#ui) in many different ways, but there are several key interfaces that are perhaps the most important._

### Radial annotator
The radial annotator is used to call up and access the different types of annotations that are available for the [object](/about/glossary#/object) in question. 

#center[A radial annotator opened for a CollectionObject](https://sfg.taxonworks.org/s/4h0mya [An open radial annotator] w{80%} h{50%})

### Manage controlled vocabulary terms task
The `Manage controlled vocabular terms` task is used to customize the types of annotations you want to use.  Think of it as creating the Keywords that your linking to your records, or the new column that you're adding to your table of data (e.g. names, collection objects, or collecting events).

#center[The task open to the Predicates tab](https://sfg.taxonworks.org/s/mm68d4 [Managing a controlled vocabulary] w{80%} h{50%})

### "Custom fields"
_UI inputs for data attributes._

If you are a project administrator you can make new fields (see Data attributes below) appear in the [UI](/about/glossary#ui) in various places.
* Create the "fields" (see Data attributes below) you need
* Click `Project` (top right), then `Preferences` (top left)
* Select the model you want the new fields to appear for (e.g. `CollectionObject`)
* Check all fields that you want to appear as input fields.  Note that this creates new form-fields, you can always access and create data-attributes through the radial annotator.

Fields will now appear in the UI where pertinent, notably the `Comprehensive digitization` task, the `OTU quick forms` radial, and the `New collecting event` task.

#center[`Attributes` inputs (bottom left) displaying for selected Predicates](https://sfg.taxonworks.org/s/1cxfb0 [Illustrating how new fields can be added to forms] w{80%} h{50%})

## Annotation types
### Controlled vocabulary terms
Many annotation types start with the creation of a controlled vocabulary term (CVT).  This is done in the `Manage controlled vocabulary terms` task. 

All CVTs must have 2 parts:
1) A `name`, or label - used to select the CVT in the interface, for display, etc.
2) A `definition` - don't assume that your label is understandable, now, or over time! Provide a definition so that others may interpret and apply this CVT term as your project intends it to be used.

A third attribute is the `Uri`. This attribute is used to assert that the CVT in your project means the same things as data used in _others_ projects.

### Data attributes
Think of [DataAttributes](/models#data-attributes) as custom columns on your table. There are two types in TaxonWorks, "Import", and "Internal". The latter are created in the user-interface, the former are used in the documentation of bulk-data import, typically for bespoke datasets. DataAttributes are key-value pairs that reference a record (or [object](/about/glossary#object). They reference the object the attribute is being attached to, a type of CVT called a `Predicate`, and the value. 

#### Customizing models
For example you might add a DataAttribute referencing a `Predicate` you created called "TownshipAndRange" with the value "Smithville" to a CollectingEvent.

#### Darwin Core exportable URIs
TaxonWorks "knows" about certain DarwinCore fields that are not 1:1 mappable to its model. To add data to these fields, and have them export 1:1 (i.e. typing "Stuff; Things" results in "Stuff; Things" being exported into the field) to your DarwinCore exports do this:

* Determine if the DwC attribute you want to use is "known" by TaxonWorks. At present it's best to do this by looking at the code itself, 
[here is the list](https://raw.githubusercontent.com/SpeciesFileGroup/taxonworks/development/config/initializers/constants/_controlled_vocabularies/dwc_attribute_uris.rb).  If you find your attribute (e.g. `asssociatedTaxa`) then note (cpy to your clipboard) the URI it corresponds to (in our example `http://rs.tdwg.org/dwc/terms/associatedTaxa`).
* In the `Manage controlled vocabulary terms` task create a new `Predicate`, name it typically 1:1 with the name of the DwC field, but this is required, the magic is in the Uri field.
* Add the URI to your Predicate that you found in from the file above by pasting or typing it in.

You may want to add the field to directly to the UI, for example the `New collecting event` task or `Comprehensive specimen digitization`, [see above](#custom-fields) for how to do this.

At this point you have a new field in TaxonWorks that will be exported to DwC when requested.

_Note that on export no processing or validation is done on the export of these fields, you get in the export what you type in the field._

### Tags
Tags are used an arbitrary label with your [object](/guide/glossary#object). Think of tags as data attributes with no value. To create a type of Tag create a `Keyword` in the CVT manager. You can apply tags in the radial annotator, in batch in filter interfaces, and in various other ways.

_Note that technically a Tag is the link (or join) between a Keyword (CVT) and an Object, not the Keyword itself._  

### Protocols
Tagging an object with a Protocol asserts "some or all of the data in here came from this process.  Create new protocols via `Data`->`Protocols`. You can attach PDFs describing your protocol to your Protocol to expand its description.

### Alternate values
Alternate values reference a TaxonWorks field and provide a way to include a Translation, Abbreviation, Misspelling or Alternate spelling.  To create one:
* Open the radial annotator for the record in question
* Select `Alternate values`
* Select the type of alternate value (e.g. Abbreviation)
* Select the target field (e.g. `title` of a source)
* Add the value, and click Create.

_Alternate values are not allowed on the `name` of a TaxonName, don't even think about requesting this._

### Identifiers
Identifiers are broader subject (i.e. we need further discussion here). Briefly, there are two types in TaxonWorks, "Global", and "Local". The latter are in essence those types of identifiers that people thought really hard about, and tried to make universally applicable, the former, not so much.

In the real-world there are no-such-things as "unique" identifiers per [object](/about/glossary#object). TaxonWorks embraces this philosophy by allowing you to add as many identifiers to your data as you want. Identifiers can be used to say and do things like:
* Conceptually, my digital thing is the `same_as` your digital thing
* If you find my identifier you'll likely be able to find my thing (e.g. a `Identifier::Local::CatalogNumber` that represents a physical label `localized_to` my specimen)
* The same things has two different "unique" identifiers, and that thing is my thing
* I'm tracking (integrating/referencing/relating) this thing in my project, but with minimal detail, you can get more details on this thing if you can find other things "out there" with the same Identifier
* My thing is the Person with this ORCiD (Identifier)
* My thing historically could be found (your results may vary now) with this Identifier
* I want to make labels for my specimens that reference my trip-codes so that I can quickly call them up, print them, assign them to Specimens, etc., and darn it my (Matt's) "MJY-YYYY" codes do not mean "Mark Jupiter Yahoo", but I need their (Mark's) "MJY" codes too. You can keep them the same, but different, using TaxonWorks' Namespaces.
* Print labels and barcodes in TaxonWorks

### Notes
Notes are the most unrestricted annotation type, you're simply adding a block of text (Markdown is allowed) to a record.  You _should not_ assume that all notes of are of some type. You should also not use Notes because you want something to appear _somewhere_, it's much better to do this with a more defined annotation such as a data attribute.

### Verifiers
A Verifier is a very generic way of saying "This Person verified this record". It links a Person object with a role "verifier" to your data. There are no sub-types of verification, for that functionality see [Confidences](#confidences).

### Documentation
Some classes of data can be "documented", this simply means attaching a link to a binary document (e.g. pdf) to the record. The assertion being made is "this binary file contains the content of that thing", as in "This is the PDF of that Source".

### Confidences
Projects can create their own arbitrary levels of [Confidence](/models#confidence) (think data-quality) that they can use to annotate there data with. For example you might have a ConfidenceLevel "1 - Origin unknonw" or "B - Spelling check required".
