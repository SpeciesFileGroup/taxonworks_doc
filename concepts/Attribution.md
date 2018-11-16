
WIP

# Attribution

This begins to summarize the interseciton of Attribution sensu the work of Thessen and Shorthouse with concepts in TaxonWorks.

## Housekeeping

All records are timestamped and creator/modified stamped.  We do not infer too much from these data other than "in the absence of all other information, this user/person entered and or updated the data". Downstream inference (e.g. this image is owned by the creator) would need to be flagged.

## Data

People are shared across projects.  Wherever they are linked to data we use a generic "Role". There are around 10 roles, for example "TaxonNameAuthor", "Collector", "SourceAuthor", "CopyrightHolder", etc. etc.  

### Annotations

Most of the data that would fall into the attribution world comes as a TaxonWorks Annotation.

* [Citation](http://rdoc.taxonworks.org/Citation.html) - Almost all data in citable. A citation asserts that the data originated or was derived from a Source.
* [Identifier](http://rdoc.taxonworks.org/Identifier.html) - TaxonWorks does not assume we will ever get to a single identifier for any data object.  We can stack identifiers of many types on any data object.  So, if we imaging an identifier (e.g. ORCID) on a Person, we have huge graph of linked data from this identifier via that person's roles. 
* [Protocols](http://rdoc.taxonworks.org/Protocol.html) - Right now a very simple link to the "how" something was done. 
* Attribution - When the user wants to specifically attribute some data instance to someone, or some legal governance (copyright, license) they can annotate that data with an Attribution.  The Attribution is further linked to specific Roles (e.g. creator, copyright_holder, editor). Expanding the concept of the Attribution by adding new role types is trivial, the semantics of the Attribution in relationhip to the data class.

* Notes, Data attributes, Tags - Users can add annotations across their data.  These annotations become entities that are attributable ("I extended the data", "I worked with this data").

Tangental, but perhaps of interest

* [Confidences](http://rdoc.taxonworks.org/Confidence.html) - How confidence a user is in the data assertion.  User customizable.  May have implications in that we could in theory annotate things like OriginRelationships, Attribution, etc. with confidence levels.

### The "Origin" relationship

TaxonWorks has a general [OriginRelationship](http://rdoc.taxonworks.org/OriginRelationship.html) property/edge/relationship that can be used to link data instances that are related in a dependent fashion based on their origin.  For example we can say that Extracts originate from Collection objects, or Collection Objects originate from other collection objects.  If we then imagine origin relationship data linked to a [Protocol](http://rdoc.taxonworks.org/Protocol.html) annotation further linked to an Attribution annotation we have a chain that says `These data` -> `This protocol` -> `By (whatever "role" we need really) these people`.

## Interfaces

### Radial annotation

We can quickly pull up and add annotations, as modeled per data type, this lets us capture "attribution" across all our data.

### Task - Citations by source

We have a report that lists all the data cited from a source.  We also include in this report an list of all infered taxon concepts that are linked to the "primary" citations.  Since we have People -> Authors of Source -> Used in Citation we have a huge network of attributable data, the question is what type of attribution should be exposed.  For example, the Person (author) is not necessarily the creator of the taxon concepts that we infer are linked to their data.

### Task - Browse collection object 

Here we can see the history of the collection object.  Many of the various history "event" types could be used to infer attribution, if it's not specifically asserted.

## API

### Request tracking

We're working on exposing a token based API to data exposed at various levels.  The API will track requests per Token.  Requests totals become something that can be attributed not only to the data provider, but the user requesting the data (e.g. "I used/looked at data in this project every day for 2 years").

## EFfort tracking

We currently track the ammount of time spent on a project, and have pondered more specific tracking (e.g. time spent using a digitization task).  This discrete quantization of effort becomes useful in Attribution.

