---
sidebarPosition: 300
acknowledgments: Lars Vogt provided many useful insights as to how to frame this page. 
---

# Overview
_Addresses the questions: "What does the data-store in TaxonWorks look like, and what is the thought process behind its development? Who are the target audiences for these docs?"_

To understand the data model used in TaxonWorks, in addition to the discussion below, there are series of linked resources here.  

1) Graphical entity-relationship (["ER"](https://en.wikipedia.org/wiki/Entity%E2%80%93relationship_model)) figures. We use `er` in the "modelling a domain sense", not particularly a 1:1 description of the links between model and database (though there are numerous times where this is the case). Algorithmically drawn, their purpose is to provide an overview of how data in TaxonWorks are modelled at a generalized level. To draw these figures certain constraints are used, this means that they are cleaner looking, and not cluttered, but also that they may not completely illustrate all pertinent entities or relationships as defined for that model. Follow the `er` links or see the `Model` section. _Most nodes can be clicked to navigate onwards._
2) A description of the database table for each model. Tables are named as seen in the headers. Many (but not all) related tables are linked in the column name. Follow the `table` links or see the`Tables` section.
3) A text description of each model/class. This is provided in the context of the code for that model on a [separate website](https://rdoc.taxonworks.org). That website is generated with each code commit, it includes the full documentation for the TaxonWorks code-base, so it is easy to get lost for the uninitiated.  Follow the `rdoc` links from the respective tables and models. Using this site as a basis for exploring `rdoc` can keep you from getting lost therein.
4) Direct links (`api`) to the resources behind the models as represented by TaxonWorks external facing API. For now see documentation at [https://api.taxonworks.org](https://api.taxonworks.org).  Some models do not yet have a corresponding resource.  Some models properties and attributes are accessible by related API endpoints.

## Audience
There are various target audiences for this information, some served more than others. TaxonWorks users may belong to more than one of these roles, they are not exclusive of one-another. With some small exceptions no one resource here fully meets the needs of these audiences, but with a little imagination they have a role. Those who might make use include:
* **Developers** - The obvious target group. All resources (`er`, `table`, `rdoc`, `api`) are routinely referenced during development
* **TaxonWorks' scientists** - TaxonWorks has many facets, browsing the `er` diagrams can illuminate data types that you might not have known existed, or give you a better understanding of how some of interfaces relate to one-another
* **Scientists migrating or evolving personal databases** - Perhaps looking for how they might migrate their data into TaxonWorks, `table` documentation is a potential start for those who seek to migrate their data by scripts
* **Ontology curators** - While not a true ontology, many of the models illustrated in the `er` must be represented in ontologies and all need to be abstracted if ontologies are to represent core needs of biodiversity informatics 
* **Standards builders** - Software and tools guide standards development, and vice-versa. Because standards take a long time to develop tools often "predict" what might need to be standardized. Tools may directly implement standards or serialize to them. All of the entities, and their attributes here, potentially contribute to the broader standards discussion.
* **High-level data modellers** - E.g. those considering archival or indexing resources, `er` diagrams self-describe their domain, and can be used to get a quick over-view of the kinds of data that data-aggregators might need to integrate at a broader scale
* **Students** - Students are perhaps first exposed to taxonomy via specimens in natural history collections, reading papers in print, and in their course work or textbooks. There is whole layer of data-science (biodiversity informatics) behind taxonomy, the illustrations and documentation here can act as a resource for learning about how we describe and classify the Earth's species.
* **Scientists** - In addition to all the science being done, scientists are constantly being asked to do more, differently. How should I organize my data? How might I integrate the diversity of my research program? I'm told to get out of Excel, how might that look? They want [Identifiers](/develop/Data/models.html#identifier) for [People](/develop/Data/models.html#person)? A majority of the data types represented here are accessible via an externally-facing [API](https://api.taxonworks.org) well suited for all the data/information science running in parallel to the observation capture going on in labs, the field, and throughout the scientific process.
* **Semantic web enthusiasts** - A challenge is to turn the generalized `er` models into RDF, for example how might we see TaxonWorks data in [Wikidata](https://www.wikidata.org)? This challenge shares many concerns with ontology builders. What are the universals? Properties? Classes?
<figure>
  <object data="/images/model/data/specimen_object_graph_eg1.svg" type="image/svg+xml"> </object>
  <figcaption>
    An "object graph", exported from TaxonWorks for a collection object, illustrating a serialization of TaxonWorks that begins to approximate that required in RDF representations.  Notice Identifiers (orange triangles), People, Names (pink squares) and Taxon Concepts (green hexagons) are all their own classes of data, among numerous other types.  The figure layout was post-processed in Illustrator.
  </figcaption>
</figure>

## Concepts 
At its core TaxonWorks' data model is a handful of straightforward, yet broad `core` concepts (orange rounded ovals below): 
* [Taxon names](/develop/Data/models.html#taxon-name) - about nomenclature
* [Collection objects](/develop/Data/models.html#collection-object) - about specimens
* [Collecting events](/develop/Data/models.html#collecting-event) - who, where, when, and how some thing was collected
* [OTUs](/develop/Data/models.html#otu) - like species or taxon concepts, but even broader, a place to link all the bits that aren't nomenclature, a useful biological unit permitting meaningful work
* [Observations](/develop/Data/models.html#observation) - data about CollectionObjects or OTUs, e.g. characters or measurements
* [Descriptors](/develop/Data/models.html#descriptor) - classes of Observations, like quantitative, qualitative, or statistical
* [Asserted distributions](/develop/Data/models.html#asserted-distribution) - the low-resolution distribution of OTUs according to the literature
* [Biological associations](/develop/Data/models.html#biological-association) - biological relationships, like host-parasite
* [Sequence](/develop/Data/models.html#sequence) - curated chunks of the genome
* [Source](/develop/Data/models.html#source) - a reference

The other types of data are loosely classified as `annotations` (blue ovals) and `supporting` (light-blue rectangles). Annotations can be thought of as ways to customize the data-model. Supporting data are the bits of information that link to and across `core` classes, for example a [Citation](/develop/Data/models.html#citation) links a [Source](/develop/Data/models.html#source) to nearly anything. This organization, core, supporting, annotation, is echoed in the UI by clicking the "Data" tab in the hub.

<figure>
  <object data="/images/model/er.svg" type="image/svg+xml"> </object>
  <figcaption>
      Key data classes in TaxonWorks. 1) Nodes. Orange, rounded rectangles: 'core' data; light-blue rectangles: 'supporting' data; blue ovals: 'annotators'x. 2) Edges. Solid lines: key relationships; dashed lines: examples, i.e. not all relationships to the class being pointed at are shown. Arrows point to the many side of the relationship, for example one OTU has many Identifiers. Click to navigate to that class.
  </figcaption>
</figure>

## Meta-model
TaxonWorks uses an "ontology-based, graph-aware, relational database" approach to representing and storing data. Practically, this means several things:
* Each [data table](/develop/Data/tables.htm) corresponds to a class of data. A record in that table asserts that an single instance of that class exists. This is the "Ontology" bit.
* In various cases data are organized into graph patterns (network-based, i.e. nodes, edges, and their attributes) amenable to down-stream migration into graph databases (e.g.[`TaxonName`](/develop/Data/models.html#taxon-name) and [Biological associations](/develop/Data/models.html#biological-association)) or serialization into formats like RDF.
* Tables are named exactly as the class is named, in a pluralized format, for example the class [`TaxonName`](/develop/Data/models.html#taxon-name) is stored in table [`taxon_names`](develop/Data/tables.html#taxon-names)).
* Some classes of data have subclasses (e.g. `BiologicalCollectionObject` is a subclass of [CollectionObject](/develop/Data/models.html#collection-object) and `Specimen` is a subclass of `BiologicalCollectionObject`. Each subclass adds assertions as to what the thing being represented is. Subclass assertions are stored in the field `type` (e.g. [CollectionObject](develop/Data/tables.html#collection-objects).
* Some classes of data are "polymorphic", particularly annotators (see below). This means that one table references many other tables by a combination of `<object>_type` and `<object>_id`.  For example see the fields `note_object_id` and `note_object_type` in [Notes](develop/Data/tables.html#notes).

There are well known arguments as to when/how each aspect of this approach breaks down or fails in certain circumstances.  Our approach is to try and balance the semantics of the data models with the understanding and needs of the scientists using them. Too much semantics and there is a disconnect between what they actually do and the model, too little and things like identifiers, citations, provenance and attribution are not supported.

In addition to the individual table-class approach there are several higher-level classes, used to carefully isolate the differences between users, the data they curator, and how those data are displayed and presented:
* Data - The properties of things in TaxonWorks.  When designing our data-store we strive to eliminate, or minimize all fields that describe how we display or see Data (see below).  Data are further classified, more for the purposes of utility than meaning, into three categories:
  * Core - the basic categories most useful for describing life 
  * Supporting - the data that link or extend core classes 
  * Annotation - General classes of of data that can be applied to most core and supporting classes
* Project - Describes Users, and Projects, i.e. manages who can curate what data.
* UI/Display/Layout - Tables that define how we display, visualize, or present Data.

When customizing or adapting TaxonWorks to your needs, maintaining this separate of concerns will facilitate the long term integrity of your data. For example, you can create custom attributes for Data classes via [DataAttributes](/develop/Data/models.html#data-attribute), these attributes should describe the things they are tied to, not just what "I want to see on some page".

There are various constraints (in ontology-speak "universals") on TaxonWorks models/concepts. For example if you create a CollectionObject instance then we assume some very specific things are true _in addition to_ the data you provide. Definitions, and assumptions are encapsulated in the model via code, in the ways we serialize data (e.g. DwC exports), and in the textual descriptions (viewable in `rdoc`), this partitioning is not optimal, but perhaps reflect the reality of how things get built. These assumptions must be further formalized both for computers (e.g. in RDF serialization, or ontology representation) and for human understanding. That is, people will use tools however they can, not however they should, the best way to prevent this "drift" away from intent is education as to why it is important to "follow the rules".

## Code
As noted the database model is mirrored almost exactly in code, for example the [`otus table`](develop/Data/tables.html#otus) is represented by an [`OTU model`](/develop/Data/models.html#otu) in a [`otu.rb file`](https://rdoc.taxonworks.org/Otu.html). This is broadly a convention from [Rails](https://rubyonrails.org/), the back-end software used by TaxonWorks.

## Database
TaxonWorks uses [PostgreSQL](https://www.postgresql.org/) with [PostGIS](https://postgis.net/) extensions. For an auto-generated schema in text format see [db/schema.rb](https://github.com/SpeciesFileGroup/taxonworks/blob/development/db/schema.rb).
 
