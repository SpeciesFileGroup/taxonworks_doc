---
sidebarPosition: 2000
---

# Import and export

_Many projects start with imports, and target exports. Here is where you find what is possible in TaxonWorks._

## Imports
TaxonWorks offers three ways to import data (one record at a time, batch uploading, and customized). We seek to make the data import and entry as savvy as possible. As you experience these options, please contribute your ideas for ways to enhance these processes. (Submit ideas, submit code, bring your ideas to our [sfgcommons meetings on Wednesdays](https://speciesfilegroup.org/events.html).

### Data types
For bulk/batch uploads, TW supports import of various types of data including checklists, occurrence specimen record data, sequence data, source information (i.e. publications) and more. Support for importing observations is underway.

- sample checklist (link)
- sample specimen record dataset (link)

### Batch imports
There are various batch importers available within the UI (user interface). These are polished to differing degrees and have various benefits and limitations. The required format is described in the UI. All batch loaders are two-step, allowing for (and requiring) a preview of results before inserting them into the database.

- To explore available batch loaders click on a Data card in the Hub. If batch loader(s) are available then then the batch load link will be enabled. 
- Batch importers largely target tab-separated text files, though this is not exclusively the case.
- Notable batch loaders are found in the TaxonNames, Otus, and Sources data cards, though others exist. 
- Explore various batch loaders (each data card highlighted in yellow has associated batch loaders at this writing).

#### Try batch

In your test project, 
1.	Go to the data tab
2.	Select the Otu Data card
3.	Click “batch load”
4.	See instructions in the UI for expected / accepted data types and format.
5.	Create your own file or use this [test file](link)
  Header column = otu_name
  Blank lines are skipped
  Tab-delimited format, UTF-8 encoding, Unix line-endings required
6.	Browse to your file to select it, click preview
7.	If data looks as expected, browse to select that file again and click create.

Batch loaders (as of March 2022) include:

- OTUs [operational taxonomic units](https://docs.taxonworks.org/about/glossary.html#otu-operational-taxonomic-unit)
  - simple batchload
  - data attributes
  - simple batch file
  - OTU with identifier batch load
- collecting events
  - gpx (collecting events with georeferences)
  - castor
- collection objects
  - castor
  - buffered strings
- descriptors
  - qualitative descriptors
  - modify gene descriptor
- sequences
  - Genbank
  - Genbank batch
  - primers
- sources
  - BibTeX
- taxon names
  - simple
  - castor
- asserted distributions
  - simple
- namespaces
  - simple
- sequence relationships
  - primers batch

### Record by record

When first learning TaxonWorks, entering records one-at-a-time offers you the opportunity to learn about more of the features in TW and get a feel for how you and others experience the UI. 

For example, you want to enter a specimen record. You have two Tasks enabling you to do this. Choose to use Comprehensive Specimen Digitization Task or the Simple New Specimen Task.

#### Try Simple New Specimen

In your project, try creating a simple new specimen record. 

- Note you will need to select a namespace. You may find you need to add a namespace before you can do this TW task. Adding a value for namespace ensures your uploaded data records will be unique inside your TW project and across TW projects. In your project, you may also need more than one namespace. [Use Tommy’s INHS Insect Collection as an example, with 12 different namespaces that effectively group the various collections housed at INHS ENT].

- If you tried the OTU batch loader you can pick one of your OTUs for the name to assign to this specimen.

- Add an image if you wish

- Select the Preparation type for this specimen. You may need to add a new value to the dropdown using the New preparation type task. 


## Exports

## Requesting a new import or export type 


