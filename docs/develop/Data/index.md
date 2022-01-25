---
sidebarPosition: 300
---

# Overview
_Answers the question "What does the data-store in TaxonWorks look like, what are its broad details, and what is the thought behind how it came to be?"_

## Concepts 

At its core TaxonWorks' data model is a handfull of straightforward, yet broad concepts (orange nodes below): 
* Taxon names - about nomenclature
* Collection objects - about specimens 
* Collecting events - who, where, when, and how some things was collected
* OTUs - like species or taxon concepts, but even broader, a place to link all the bits that aren't nomenclature, a useful biological unit permiting meaningful work
* Observations - data about CollectionObjects or Otus, e.g. characters or measurements
* Descriptors - classes of observations, like quantitative, qualitative, or statistical
* Asserted distributions - the low-resolution distribution of OTUs according to the literature
* Biological associations - biological relationships, like host-parasite
* Sequence - curated chunks of the genome
* Source - a reference

The other types of data are looslely classified as annotations (blue ovals) and "supporting" (light-blue rectangles).  Annotations can be thought of as ways to customize the data-model.  Supporting data are the bits of information that link to and across core classes, for example a [Citation]() links a [Source]() to nearly everything.

<figure>
  <object
  data="/images/model/er.svg"
  type="image/svg+xml">
  </object>
<figcaption>
Key data classes in TaxonWorks. 1) Nodes. Orange, rounded rectangles: 'core' data; light-blue rectangles: 'supporting' data; blue ovals: 'annotators'x. 2) Edges. Solid lines: key relationships; dashed lines: examples, i.e. not all relationships to the class being pointed at are shown. Click to navigate to that class.</figcaption>
</figure>

## Meta-model
TaxonWorks uses an "ontology-based, graph-aware, relational database" approach to representing and storing data. Practically speaking this means several things:
* Each Data table (see below) corresponds to a class of data. A record in that table asserts that an single instance of that class exists. This is the "Ontology" bit.
* In various cases data are organized into graph patterns (network-based, i.e. nodes, edges, and their attributes) ammenable to down-stream migration into graph databases (e.g. [TaxonNames](), [BiologicalAssociations]()) or serialization into formats like RDF.
* Tables are named exactly as the class is named, in a pluralized format, for example the class [`TaxonName`]() is stored in table [`taxon_names`]()).
* Some classes of data have subclasses (e.g. [BiologicalCollectionObject]() is a subclass of [CollectionObject]() and [Specimen]() is a subclass of [BiologicalCollectionObject]. Each subclass adds assertions as to what the thing being represented is. Subclass assertions are stored in the field `type` (e.g. [CollectionObject](tables link).
* Some classes of data are "polymorphic", particularly annotators (see below). This means that one table references many other tables by a combination of `<object>_type` and `<object>_id`.  For example see the fields `note_object_id` and `note_object_type` in [Notes](table link).

There are well known arguments as to when/how each aspect of this approach breaks down or fails in certain circumstances.  Our approach is to try and balance the semantics of the data models with the understanding and needs of the scientists using them. Too much semantics and there is a disconnect between what they actually do and the model, too little and things like identifiers, citations, provenance and attribution are not supported.

In addition to the individual table-class approach there are several higher-level classes, used to carefully isolate the differences between users, the data they curator, and how those data are displayed and presented:
* Data - The properties of things in TaxonWorks.  When designing our data-store we strive to eliminate, or minimize all fields that describe how we display or see Data (see below).  Data are further classified, more for the purposes of utility than meaning, into three categories:
  * Core - the basic categories most useful for describing life 
  * Supporting - the data that link or extend core classes 
  * Annotation - General classes of of data that can be applied to most core and supporting classes
* Project - Describes Users, and Projects, i.e. manages who can curate what data.
* UI/Display/Layout - Tables that define how we display, visualize, or present Data.

When customizing or adapting TaxonWorks to your needs, maintaing this seperate of concerns will faciliate the long term integrity of your data. For example, you can create custom attributes for Data classes via [DataAttributes](), these attributes should describe the things they are tied to, not just what "I want to see on some page".

# Database

For an auto-generated schema in in text see [db/schema.rb](https://github.com/SpeciesFileGroup/taxonworks/blob/development/db/schema.rb)

# Code

As noted the database model is mirrored almost exactly in code, for example the [`otus` table]() is represented by an [OTUs](model).  See [code documenation here](https://rdoc.taxonworks.org/).
