---
sidebarPosition: 100
---

# Radial

_A radial menu._ 

## Radial annotators and navigators
See [Icons in TaxonWorks](https://docs.taxonworks.org/guide/Manual/conventions.html#icons-in-taxonworks) for general information on radials. Here we discuss how radial annotators and navigators are populated from the point of view of a developer.

* The sectors that appear in radials are internally referred to as 'slices'
* Both radial annotators and navigators take an object of some model as input (via a Rails [global id](https://github.com/rails/globalid))

### Radial annotator slices
* Add slices to radial annotators for your model by including annotation concerns such as `Shared::Citations` or `Shared::Depictions` on your model.
* Your Vue task can respond to the addition, deletion, or editing of annotations via a radial annotator by listening for the `create`, `delete`, and `update` events emitted by the annotator.

### Radial navigator slices
* There are several default navigator slices, like Edit and Show for example, see [radial.vue](https://github.com/SpeciesFileGroup/taxonworks/blob/development/app/javascript/vue/components/radials/navigation/radial.vue); some of these can be excluded if so desired using the `exclude` prop
* To add slices to the navigator or to modify the actions associated with the default slices, see the [`object_radials.yml`](https://github.com/SpeciesFileGroup/taxonworks/blob/development/config/interface/object_radials.yml) file and documentation therein.
  * The TaxonWorks convention for using an id query parameter in your task is to name it `<model>_id`. The significance here is that links for tasks added to navigators follow that convention. For example in the object_radials file you can see `browse_otus_task` listed as a task under Otus - that means that a radial navigator on an Otu with id 1 will include a slice with the text 'Browse OTUs' (the name of the task on its task card) and a link of `/tasks/otus/browse?otu_id=1`.


