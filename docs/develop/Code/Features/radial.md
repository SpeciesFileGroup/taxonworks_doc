---
sidebarPosition: 100
---

# Radial

_A radial menu._ 

Radials are SVG-based UI elements built with a TaxonWorks agnostic library, you can get the source to use in your own code at [svg_radial_menu](https://github.com/SpeciesFileGroup/svg_radial_menu).

## Radial annotators, navigators, and quick-forms
See [Icons in TaxonWorks](https://docs.taxonworks.org/guide/Manual/conventions.html#icons-in-taxonworks) for general information on radials.

* The sectors that appear in radials are internally referred to as 'slices'
* All radials take an object of some model as input in the form of a Rails [global id](https://github.com/rails/globalid)

### Radial annotator slices
* Add slices to radial annotators for your model by including annotation concerns such as `Shared::Citations` or `Shared::Depictions` on your model. These are detected on initialization and will appear in your radials.
* Your Vue task can respond to the addition, deletion, or editing of annotations via a radial annotator by listening for the `create`, `delete`, and `update` events emitted by the annotator.

### Radial navigator slices
* There are several default navigator slices, like Edit and Show for example, see [radial.vue](https://github.com/SpeciesFileGroup/taxonworks/blob/development/app/javascript/vue/components/radials/navigation/radial.vue); some of these can be excluded if so desired using the `exclude` prop
* To add slices to the navigator or to modify the actions associated with the default slices, see the [`object_radials.yml`](https://github.com/SpeciesFileGroup/taxonworks/blob/development/config/interface/object_radials.yml) file and documentation therein.
  * The TaxonWorks convention for using an id query parameter in your task is to name it `<model>_id`. Links for tasks added to navigators follow this convention. For example in the `object_radials.yml` file you can see `browse_otus_task` listed as a task under Otus - that means that a radial navigator on an Otu with id 1 will include a slice with the text 'Browse OTUs' (the name of the task on its task card) and a link of `/tasks/otus/browse?otu_id=1`.

### Object radial (a.k.a. quick-form) slices
* To add existing object slices to your radial, define the `GRAPH_ENTRY_POINTS` constant in your model, like so: `GRAPH_ENTRY_POINTS = [:asserted_distributions, :biological_associations, :common_names].freeze`
  * Available slices are listed in [`slices.js`](https://github.com/SpeciesFileGroup/taxonworks/blob/development/app/javascript/vue/components/radials/object/constants/slices.js) - see the imports therein for examples of quick-form forms if you're interested in adding one of your own.
    * Note that slice names are not arbitrary: quick-forms are intended to create associated objects of a given model, so slice names need to match an association name.