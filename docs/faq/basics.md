[Back to USERS.md](USERS.md)

# FAQ - Basics

_TaxonWorks is an open source project. Answers may change as the project develops. *You* can change answers by contributing to the evolution of TaxonWorks._

## Can a user add their own "fields"?
Yes.  The DataAttribute model allows nearly all models to be expanded with additional fields ("triples").  User's can customize the field names ("Predicates"), linking them via URI to external concepts.  These customizations, when linked to external concepts, are used to link user's data to export formats when possible.

## Can a user add their own data types?
Yes and no. Core models can not be added without new development effort (see below), but Users can customize a wide range of data.  For example Descriptors (columns in a data matrix) can be created and linked to collection objects or OTUs.  This allows for quantitative, qualitative, media, and other data to be added.  Topics/text blocks ("Content") can also be customized. Other annotations (Tags, Notes, Images [=Depictions]) can be customized to do grouping, sorting, and dynamic data reporting. 

From a developers perspective adding the basics of a new model is straigtforward thanks to scaffolding tools (Rails, and custom to TaxonWorks).  Typically only a day or two is needed to program the model and corresponding tests, and to scaffold the generic CRUD functionality.  Developing "Tasks" which wrap that model in a more advanced user interface is by far the limiting factor to development.

## How can I mute the alert noises?
Right click on your browser's tab, then select the "Mute" option.

## Can I join the project and help TaxonWorks evolve?
[Yes](CONTRIBUTING.md).

## Can I use TaxonWorks to make pretty taxon pages for my own website?
TaxonWorks is a workbench, not a replacement for EOL. That said: 1) To make pretty taxon pages you could extract data from the workench API as JSON, and wrap it prettily; 2) Ultimately the TaxonWorks community will develop widgets (think adding a Google map to your homepage) that wrap this data/API and can be used to present things (think Taxon pages, snippets of nomenclatural catalogs, image galleries, etc).  The question as to how integrated widgets from 2) will be with the core codebase is outstanding.

## Can I record (all sorts of) synonymy and generate a nomenclatural catalog?
Yes.  

## Can I limit the power of collaborators to certain subtaxa?
No. But TaxonWorks does have awesome history tracking and data reversion capabilities.  You should trust your collaborators ;).

## Should I host a copy of TaxonWorks at my museum/university?
Maybe? We are committed to minimizing the barrier to installing TaxonWorks on a server you control, likely in the cloud. We're still working out the best way of doing this. You can [start here](https://github.com/SpeciesFileGroup/install_taxonworks) for documentation.

## Can I batch load images?
Drag and drop image loading is available, and we anticipate being able to drop multiple images on the object you wish to depict.  There will also almost certainly be a batch upload if your images are available via an HTTP endpoint.

## What browsers are supported?
TaxonWorks is forward looking, we experiment with and use features that might not be available in all browsers. We recommend using Firefox as it is the primary browser we develop against. We test on Firefox and Chrome.  

## How can I find the internal ID of a record?
`Show` the record in question (double clicking most table rows, or right-click 'Show'), then click "Development view (eye icon, top right). You'll see the `[id: 123 ... ]`.  The global_id can be cut and pasted into API calls as well.  

