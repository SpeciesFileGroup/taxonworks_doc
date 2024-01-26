---
sidebarParentPosition: 100
---

# Introduction

_Categorized help that answer a commonly asked question._

### How do I contribute back to the community?
See '[Contributing](/develop/Contributing)' in develop.

### What about sequence and genomic data, how do they fit into TaxonWorks vision? 

To see this vision realized we need dedicated collaborators (developers, work-bench experts, labs) and funding, i.e. the Species File Group and its current collaborators does not presently have these advances as targeted milestones, nor do they anticipate significant code-contributions from "core" members in the absence of said collaborations/funding. The SFG is very open to guiding work done in this area, i.e. facilitating developers and data-modellers and providing parallel work in some areas, for example implementing externally developed, well thought out, UIs.

At present managing Sequence data is within the purview of TaxonWork's "vision" in the following ways (we're an open community, this can evolve):
* Sequence handling in TaxonWorks is envisioned as leaning towards long-term vouchering alongside simple sequence annotations (think biodiversity informatics focused on taxonomy) as opposed to more complex annotation systems (e.g. complex structural annotations, functional graphs, etc.).
* TaxonWorks contains excellent [CollectionObject](/develop/Data/models#sequence) and [Extract](/develop/Data/models#extract) management capabilities, i.e. the framework for vouchering the physical origin of sequences is well developed. This in-and-of-itself, particularly in combination with the extensible functionality offered by customizable data-attributes may fill a gap within molecular labs.
* TaxonWorks has a [Sequence](/develop/Data/models#sequence) model, and some nice back-end functionality work has been done on it, for example we added a logic-based (and/or) description framework for linking one sequence to another (think primers, blast reference sequences, etc.)
* There is a nice Descriptor context that treats Sequences as just another column type, i.e. there are excellent inherent capabilities for mixing molecual and morphological data and exporting unified datasets for analysis.
* While Sequence objects can be created in the UI functionality therein is primitive and has not been used "for real", i.e. the UI/UX needed for actual practical day-to-day work does not exist (2024/1/26)
* Sequences managed in TaxonWorks should be _curated_ and have some human-asserted metadata. For example we're not aiming to manage raw-reads, or unassembled data.
* Sequences are stored as raw strings, not in a BLAST database, it is of course conceivable to change this back-end storage should advantages in indexing and storage size be needed in the future.
* Storing genomes (unassembled or assembled) is not presently a goal. Linking vouchers to metadata about a genome is fully in scope.
* We know of many systematics labs where *10k x 4k* matrices (terminals by genes) are now the targets of research efforts. We know of no system that comprehensively manages this type of project, for example tracking gaps in required target specimens or genes as projects progress. This is the initial maximum size we envision fitting within a TaxonWorks framework.
* We understand the basic starting points (annotated FASTA files) for large-scale integrative taxonomy (LIT). Combining an entry point that starts data management with an annotated FASTA file and then lets users advance their species concepts through the powerful means of exploring their data with existing (and novel) querying is very much in the scope of our vision. Single barcode-style sequences for 100s of thousands of specimens / project is well within our vision.
* Analysis of sequence data should be done _outside_ TaxonWorks, being facilitated by API endpoints and exports manageable _inside_ TaxonWorks.  For example once Sequence data are present you can not use TaxonWorks to trigger an alignment (though calculating some simple distance metrics are desirable for filtering data in LIT contexts). 
* We have done prior work in managing full Sanger-sequencing workflows (PCRs, worksheets, etc.). This code is in the precursor project `mx`.  It may be relevant to some.
* No well tested batch loading functionality exists. Simple FASTA processing should be very straightforward.  Thanks to the scripting framwework that comes with TaxonWorks the software is very well positioned to facilitate custom 1-off migrations.
* We very much would like to facilitate the export to NCBI/repository framework based on data captured in TaxonWorks. 

