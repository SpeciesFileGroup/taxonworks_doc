---
sidebarPosition: 600
---

# Tasks
_TaxonWorks offers many tasks. We highlight some of them here. You can find other tasks described with the relevant section of the manual (e. g. tasks for managing nomenclature, or source data)._

## Anatomical Part tasks

We'll start with some of the motivating examples of Anatomical Parts in TaxonWorks:

* Collector goes to field, takes a punch of a fish fin, and returns it -> AnatomicalPart (punch of fish fin) has_origin FieldOccurrence (fish)
* A wing is dissected from a specimen -> AnatomicalPart (wing) has_origin Specimen
* A feather is removed from a bird, and a punch from the feather -> AnatomicalPart (punch of feather of bird) has_origin AnatomicalPart (feather of bird) has_origin FieldOccurrence (bird)
* A louse is collected from the Ear of a bat, the louse is collected, the Bat is not - AnatomicalPart (ear) has_origin FieldOCcurrence (bat), with subsequent BiologicalAssociation CollectionObject (louse) -> 'feeds on' -> ear (of bat)
* AnatomicalPart (receptacle) has_origin OTU (knapweed), with subsequent BiologicalAssociation OTU (*Larinus obtusus* weevil) -> 'pupates in' -> receptacle (of knapweeds)

As you'll note in the examples, in TaxonWorks anatomical parts are *always derived from some object*. At present the object can be a Collection Object, a Field Occurrence, or an OTU. In other words, it will always be 'Anatomical part **of** _______', e.g., 'leg of collection object 1234', never just 'leg'.

Anatomical parts may/should have associated ontology references (as we'll explain below), but TaxonWorks doesn't aim to replicate existing ontologies - TaxonWorks does not serve as a glossary of terms in this sense, it only provides a record of parts *of specific things*.

As we've now discussed, the origin of an anatomical part can be:
* a Collection Object,
* a Field Occurrence,
* an OTU,
* or another Anatomical Part.

In the last case all chains of Anatomical Parts must ultimately start from a Collection Object, a Field Occurrence, or an OTU. In the case of Collection Object, **the Collection Object must have a Taxon Determination by which we may associate the Anatomical Part to an OTU** (Field Occurrences are already required to have a Taxon Determination, and in the OTU origin case of course the OTU itself is the origin OTU). 

Thus in all cases we may refer to the 'origin OTU' of any anatomical part.

In turn, an Anatomical Part can serve as the origin of:
* another Anatomical Part,
* an Extract,
* a Sequence,
* a Sound

Via such origins and endpoints, in its most general form, we can construct a *graph* (actually a *tree*) of Anatomical Parts, with either a Collection Object, a Field Occurrence, or an OTU at the top of the graph, with one or more Anatomical Parts branching off that as children continuing down in one or more possibly branching steps, and ending in some combination of Anatomical Parts, Extracts, Sequences, and Sounds. 

**In most cases your graphs will be simple versions of this general form - see below for some concrete examples.**

### Project ontologies (*for project administrators*)
When creating Anatomical Parts, users can search up to three ontologies for terms describing their specific part. The ontologies available for searching are those listed at [https://www.ebi.ac.uk/ols4/ontologies](https://www.ebi.ac.uk/ols4/ontologies).

By default users are only able to search from [Uberon](https://www.ebi.ac.uk/ols4/ontologies/uberon), "an integrated cross-species anatomy ontology representing a variety of entities classified according to traditional anatomical criteria such as structure, function and developmental lineage." Uberon is a sort of aggregation of terms from many ontologies - as such it covers a broad area, but may return more search results than you'd like.

To provide your users with more specific ontology search options for your project, click on the Project link in the upper right corner when logged in to a project, and then click on 'Anatomical part ontology preferences' under Edit (only visible if you're a project administrator):

#left[Project ontology preferences link](https://sfg.taxonworks.org/s/6bslak)

#left[Ontology preferences page](https://sfg.taxonworks.org/s/3iojzf)

Here you can use the filters to filter by ontology name, title, and/or description, and then Select up to three that you'd like to be available for your users.

:::tip
As we've noted, TaxonWorks is not itself a provider of ontologies. If an ontology you'd like to use isn't listed at OLS, or terms are missing from a listed ontology, reach out to us - SFG has many contacts in this land and can guide people towards contributing there, and thus ultimately cross-referencing in TaxonWorks.
:::

### New/Graph Anatomical Part
#left[New/Graph Anatomical Part task](https://sfg.taxonworks.org/s/0u9zv3)

We'll illustrate the task by way of some typical use cases.

#### Extracting sequence data from a punch of a fish fin
A fin punch is taken from an *Oncorhynchus mykiss* (Rainbow trout) that's then released on site. The punch is stored in 95% ethanol, then as an extract to be used later for sequencing.

In TaxonWorks this will be represented as follows: Field Occurrence (rainbow trout OTU) -> Anatomical Part (fin punch in 95% ethanol) -> Extract -> Sequence.

:::warning
Sequences are present in TaxonWorks but still at an early stage of development, so we'll skip the Sequence step here for now.
:::

When creating Anatomical Parts we always start from the origin/top, in this case the Field Occurrence. So in the Origins selector, choose the Field Occurrence tab, and then search for and select the correct occurrence. Now right click on that occurrence's rectangle in the graph to get a context menu:

#left[Graph context menu](https://sfg.taxonworks.org/s/t2izzo)

and click 'Create child anatomical part'.

In the screenshot below we've searched the Teleost Anatomy Ontology for 'caudal fin' and selected the first exact match. We've also selected '95% EtOH' as the preparation type, and checked the 'Is material' box since our fin is in this case 'material' even though it came from a Field Occurrence (the ambiguous Field Occurrence case should be the only time you need to check that box yourself):

#left[New anatomical part form, filled out](https://sfg.taxonworks.org/s/gz6okk)

:::tip
You can create an Anatomical Part using a user-provided Name alone, or the name/URI result of an ontology search. The ontology search isn't required, but provides more precise information which can be leveraged in downstream uses, so is suggested as best practice whenever possible.
:::

You should now see your new Anatomical Part as a child of the Field Occurrence:

#left[Field occurrence as origin of anatomical part](https://sfg.taxonworks.org/s/00h1n8)

If we had taken two punches from the same Field Occurrence, we could add the second one in the same way we added the first - there would then be two Anatomical Parts drawn with separate lines and circles as children of the Field Occurrence.

:::tip
There's no need to be any more specific than your use requires when it comes to building a hierarchy of parts. In this case we chose 'caudal fin' as our anatomical part; there's no reason to build a hierarchy "fin -> median fin -> caudal fin" unless you have a specific need for those more general terms as well.
:::

To create the extract, right click on the Anatomical Part, then select the (middle) quick-forms radial and Origin Relationship.

:::tip
*All* of the has_origin/origin/graph relationships we're discussing here are actually stored as OriginRelationships in TaxonWorks, that detail is just hidden in some steps; this is one case where it comes to the foreground in the UI.
:::

Read from the top down: "our fin/is the origin of/_____", so select Extract as the endpoint type, select the already-created Extract from the smart selector (here I had the Extract on my pinboard), and click Create. Your screen should now look like

#left[Extract created as endpoint of anatomical part](https://sfg.taxonworks.org/s/sg0m6k)

Note that, as we mentioned in the tip above and you can now see in the screenshot, the Field Occurrence in our graph is in fact the origin of an OriginRelationship from the field occurrence to our anatomical part (we won't normally need to be aware of that though).

Our graph is now:

#left[Field Occurrence to Anatomical Part to Extract graph](https://sfg.taxonworks.org/s/xn3874)

:::tip
As is the case throughout TaxonWorks, we can add attributes such as citations, tags, data attributes, confidences, etc. to each one of these nodes separately via its attribute radial by right-clicking on its graph node.
:::

Again, if we had created more than one extract with our Anatomical Part, we could add additional Extracts as children of the single Anatomical Part in the same way we added the first.

As sequences become more fully integrated, we would add a sequence as a child of the Extract in the same way we added the Extract as a child of the Anatomical Part (you can currently use the pinboard to do so, but autocomplete is not yet implemented on Sequences).

#### Creating a biological relationship involving an anatomical part

Let's create the biological relationship example we mentioned above:
* AnatomicalPart (receptacle) has_origin OTU (knapweed), with subsequent BiologicalAssociation "OTU (*Larinus* weevil) -> 'pupates in' -> receptacle (of knapweeds)"

The anatomical part 'receptacle of *Centaurea* (knapweed)' can be created following the steps from our previous example: in this case I added the Plant Ontology to the list of ontologies to search, and selected the exact match for 'receptacle' from that ontology, with no preparation type:

#left[Receptacle of *Centaurea* anatomical part](https://sfg.taxonworks.org/s/7fd6zw)

To create the Biological Relationship we have several options:
* Use the New Biological Relationship task
* Use the New Biological Retlationship Graph task (with just one edge)
* Use the Biological Relationship slice of the Quick Forms radial for the anatomical part

Since we just created the anatomical part, we'll choose the third option: right click on the anatomical part node in the graph, then click its (middle) quick forms radial and choose Biological Associations. The anatomical part 'receptacle: Centaurea' is already selected as the origin of the relationship; next we'll choose the source to cite this relationship with.

The relationship is 'pupates in/is pupation site of' - we can search on either description, but the form will always load with 'pupates in' coming first. In this case the direction of the form is 'receptacle of *Centaurea*' first, so we just need to click 'flip' on the relationship so that it starts with 'is pupation site of'. To finish the form and auto-create the relationship we'll search for the OTU *Larinus obtusus* as the object of the relationship:

#left[Completed biological relationship](https://sfg.taxonworks.org/s/64zsmi)




## Unify Task
When working with data, you may discover duplicate (or very similar) objects (records). In TaxonWorks, once you discover these, you can use the Unify task to resolve this situation, eliminating one and leaving the other while maintaining the meaning of any related data. You will need to check any data related to the objects you want to unify.

### Determining objects (records) are identical

Because data in TaxonWorks may be related to other data in many different ways there are some nuances to ensuring two things really are the same.  A mental checklist to confirming identity might look like this:

1) Determine that the _attributes_ of the record are identical, or similar enough. For example you see that there are 2 OTUs, each has `name` = 'Aus sp2', and neither has a taxon_name_id. In other words, no Taxon Name in the Nomenclature model, each object existing only as an OTU. 

2) Determine that the _annotations_ on the record are identical, or similar enough. For example the 2 OTUs in question may both have a Note attached to them. One reads "Added by M. Kelly" the other "From Kelly". In particular review `DataAttribute` annotations.

3) Determine that related data linked to the object are identical, or similar enough. For example we might find that both OTUs are used in an `AssertedDistributions`, and both AssertedDistributions reference Counties that are side-by-side, and that these AssertedDistributions share a `Citation` to the same `Source`. You can use the `Related data` report via the radial navigator in side-by-side tabs to compare this information.

### What happens when you Unify

:::danger
Unify does not merge the attributes of the two objects in question if they differ (e.g. #1 above). The attributes of the kept object are retained, and those differences in the removed object are ignored.
:::

:::tip
If the process fails because the unification would create invalid data somewhere in the updated records all changes are reverted and you are left in the original state.  
:::

