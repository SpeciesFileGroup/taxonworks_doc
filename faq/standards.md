
# Standards FAQ

## What standards does TaxonWorks utilize?

TaxonWorks data model represents the evolution of over 20 years of work on taxonomic workbenches via multiple developers. Those approaches evolved into three preceeding platforms, mx, 3i, and SpeciesFiles. Each of these could export to multiple standards. TaxonWorks semantics represent a unified and improved merging of these approaches. They do not adhere to, nor are the constrained by, any one standard, yet they have been developed with a lot of thought as to how to serialize to many standards and formats, and they reflect a lot of the work done elsewhere either standards or application based. The current persistence layer is a graph-influenced, ontology-aware relational model. Its implementation is highly influenced by object-relational approaches. It consists of "core" classes, properties of the classes ("supporting" data), and a suite of annotation types.

Ultimately TaxonWorks is tracking closer to the approach of the work being done in the BioSchemas world (more graph/RDF/ontology influenced) than the flat/star implemented in some tools that Darwin Core at the center. (See [Bioschemas.org](https://bioschemas.org/), for more on BioSchemas).

Some of the key modelling decisions made in TaxonWorks reflect critically important semantics not, or vaguely implemented in production-used curation tools elsewhere.  Most notably the division of biological concepts (OTUs) and nomenclature is a critical distinction that various standards fail to distinguish sufficiently, and that many curatorial tools fail to adequately implement.

## What standards emerged from the development of TaxonWorks?

* [NOMEN](https://github.com/SpeciesFileGroup/nomen) is perhaps the most advanced nomenclatural rules ontology available. 

## What standards can TaxonWorks currently export/serialize data to?

See [EXPORTING FROM TAXONWORKS](https://github.com/SpeciesFileGroup/taxonworks_doc/blob/master/manuals/EXPORTING_FROM_TAXONWORKS.md).

For ongoing and completed effort see the [Export](https://github.com/SpeciesFileGroup/taxonworks/issues?q=is%3Aissue+is%3Aopen+label%3Aexport) label.

## What standards can TaxonWorks import from?

* A robust Darwin Core Archive format is in near-beta form. Maps the flat occurrence data to around 5 core classes, and various supporting metadata.
* Numerous other import formats, all CSV based are available, some of can be used, in conjunction with simple spreadsheet transformations, to import data of other standards.
