import{_ as t,c as a,b as o,o as i}from"./app-DYVbsdjj.js";const n={};function s(r,e){return i(),a("div",null,e[0]||(e[0]=[o('<h1 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction"><span>Introduction</span></a></h1><p><em>Categorized help that answer a commonly asked question.</em></p><h3 id="how-do-i-contribute-back-to-the-community" tabindex="-1"><a class="header-anchor" href="#how-do-i-contribute-back-to-the-community"><span>How do I contribute back to the community?</span></a></h3><p>See &#39;<a href="/develop/Contributing">Contributing</a>&#39; in develop.</p><h3 id="what-browser-s-are-supported" tabindex="-1"><a class="header-anchor" href="#what-browser-s-are-supported"><span>What browser&#39;s are supported?</span></a></h3><p>Firefox and Chrome.</p><div class="hint-container caution"><p class="hint-container-title">Caution</p><p>Safari and Edge are not supported.</p></div><h3 id="what-about-sequence-and-genomic-data-how-do-they-fit-into-taxonworks-vision" tabindex="-1"><a class="header-anchor" href="#what-about-sequence-and-genomic-data-how-do-they-fit-into-taxonworks-vision"><span>What about sequence and genomic data, how do they fit into TaxonWorks vision?</span></a></h3><p>To see this vision realized we need dedicated collaborators (developers, work-bench experts, labs) and funding, i.e. the Species File Group and its current collaborators does not presently have these advances as targeted milestones, nor do they anticipate significant code-contributions from &quot;core&quot; members in the absence of said collaborations/funding. The SFG is very open to guiding work done in this area, i.e. facilitating developers and data-modellers and providing parallel work in some areas, for example implementing externally developed, well thought out, UIs.</p><p>At present managing Sequence data is within the purview of TaxonWork&#39;s &quot;vision&quot; in the following ways (we&#39;re an open community, this can evolve):</p><ul><li>Sequence handling in TaxonWorks is envisioned as leaning towards long-term vouchering alongside simple sequence annotations (think biodiversity informatics focused on taxonomy) as opposed to more complex annotation systems (e.g. complex structural annotations, functional graphs, etc.).</li><li>TaxonWorks contains excellent <a href="/develop/Data/models#sequence">CollectionObject</a> and <a href="/develop/Data/models#extract">Extract</a> management capabilities, i.e. the framework for vouchering the physical origin of sequences is well developed. This in-and-of-itself, particularly in combination with the extensible functionality offered by customizable data-attributes may fill a gap within molecular labs.</li><li>TaxonWorks has a <a href="/develop/Data/models#sequence">Sequence</a> model, and some nice back-end functionality work has been done on it, for example we added a logic-based (and/or) description framework for linking one sequence to another (think primers, blast reference sequences, etc.)</li><li>There is a nice Descriptor context that treats Sequences as just another column type, i.e. there are excellent inherent capabilities for mixing molecular and morphological data and exporting unified datasets for analysis.</li><li>While Sequence objects can be created in the UI functionality therein is primitive and has not been used &quot;for real&quot;, i.e. the UI/UX needed for actual practical day-to-day work does not exist (2024/1/26)</li><li>Sequences managed in TaxonWorks should be <em>curated</em> and have some human-asserted metadata. For example we&#39;re not aiming to manage raw-reads, or unassembled data.</li><li>Sequences are stored as raw strings, not in a BLAST database, it is of course conceivable to change this back-end storage should advantages in indexing and storage size be needed in the future.</li><li>Storing genomes (unassembled or assembled) is not presently a goal. Linking vouchers to metadata about a genome is fully in scope.</li><li>We know of many systematics labs where <em>10k x 4k</em> matrices (terminals by genes) are now the targets of research efforts. We know of no system that comprehensively manages this type of project, for example tracking gaps in required target specimens or genes as projects progress. This is the initial maximum size we envision fitting within a TaxonWorks framework.</li><li>We understand the basic starting points (annotated FASTA files) for large-scale integrative taxonomy (LIT). Combining an entry point that starts data management with an annotated FASTA file and then lets users advance their species concepts through the powerful means of exploring their data with existing (and novel) querying is very much in the scope of our vision. Single barcode-style sequences for 100s of thousands of specimens / project is well within our vision.</li><li>Analysis of sequence data should be done <em>outside</em> TaxonWorks, being facilitated by API endpoints and exports manageable <em>inside</em> TaxonWorks. For example once Sequence data are present you can not use TaxonWorks to trigger an alignment (though calculating some simple distance metrics are desirable for filtering data in LIT contexts).</li><li>We have done prior work in managing full Sanger-sequencing workflows (PCRs, worksheets, etc.). This code is in the precursor project <code>mx</code>. It may be relevant to some.</li><li>No well tested batch loading functionality exists. Simple FASTA processing should be very straightforward. Thanks to the scripting framework that comes with TaxonWorks the software is very well positioned to facilitate custom 1-off migrations.</li><li>We very much would like to facilitate the export to NCBI/repository framework based on data captured in TaxonWorks.</li></ul>',11)]))}const d=t(n,[["render",s],["__file","index.html.vue"]]),c=JSON.parse(`{"path":"/guide/FAQs/","title":"Introduction","lang":"en-US","frontmatter":{"sidebarParentPosition":100},"headers":[{"level":3,"title":"How do I contribute back to the community?","slug":"how-do-i-contribute-back-to-the-community","link":"#how-do-i-contribute-back-to-the-community","children":[]},{"level":3,"title":"What browser's are supported?","slug":"what-browser-s-are-supported","link":"#what-browser-s-are-supported","children":[]},{"level":3,"title":"What about sequence and genomic data, how do they fit into TaxonWorks vision?","slug":"what-about-sequence-and-genomic-data-how-do-they-fit-into-taxonworks-vision","link":"#what-about-sequence-and-genomic-data-how-do-they-fit-into-taxonworks-vision","children":[]}],"git":{"updatedTime":1731000021000,"contributors":[{"name":"mjy","email":"diapriid@gmail.com","commits":8,"url":"https://github.com/mjy"},{"name":"José Luis Pereira","email":"pepelui@outlook.com","commits":2,"url":"https://github.com/José Luis Pereira"},{"name":"Matt","email":"diapriid@gmail.com","commits":2,"url":"https://github.com/Matt"},{"name":"Matt Yoder","email":"diapriid@gmail.com","commits":2,"url":"https://github.com/Matt Yoder"}]},"filePathRelative":"guide/FAQs/README.md"}`);export{d as comp,c as data};