---
sidebarPosition: 600
---

# Tasks 
_TaxonWorks offers many tasks. We highlight some of them here. You can find other tasks described with the relevant section of the manual (e. g. tasks for managing nomenclature, or source data)._

## Unify Task
When working with data, you may discover duplicate (or very similar) objects (records). In TaxonWorks, once you discover these, you can use the Unify task to resolve this situation, eliminating one and leaving the other while maintaining the meaning of any related data.

### Determining objects (records) are identical

Because data in TaxonWorks may be related to other data in many different ways there are some nuances to ensuring two things really are the same.  A mental checklist to confirming identity might look like this:

1) Determine that the _attributes_ of the record are identical, or similar enough. For example you see that there are 2 OTUs, each has `name` = 'Aus sp2', and neither has a taxon_name_id. In other works, no Taxon Name in the Nomenclature model, each existing only as OTUs. 

2) Determine that the _annotations_ on the record are identical, or similar enough. For example the 2 OTUs in question may both have a Note attached to them. One reads "Added by M. Kelly" the other "From Kelly". In particular review `DataAttribute` annotations.

3) Determine that related data linked to the object are identical, or similar enough. For example we might find that both OTUs are used in an `AssertedDistributions`, and both AssertedDistributions reference Counties that are side-by-side, and that these AssertedDistributions share a `Citation` to the same `Source`.  You can use the `Related data` report via the radial navigator in side-by-side tabs to compare this information.

## What happens when you Unify

:::danger
Unify does not merge the attributes of the two objects in question if they differ (e.g. #1 above). The attributes of the kept object are retained, and those differences in the removed object are ignored.
:::

:::info
If the process fails because the unification would create invalid data somewhere in the updated records all changes are reverted and you are left in the original state.  
:::
