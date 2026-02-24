---
sidebarPosition: 550
---
# Asserted Distributions

_Information in this section shows ways to document asserted distributions for biological taxa and other objects in TaxonWorks._

## Resources

- TaxonWorks Asserted Distribution Model https://docs.taxonworks.org/develop/Data/models.html#asserted-distribution

Tasks and Radials used in this work include
- `New asserted distribution task`
- `Browse Taxon Names`
- `OTU quick forms`
- `Radial OTU` to batch add an assertion
- `Filter Taxon Names`
- `Filter OTUs`
- `Manage Controlled Vocabulary task`

## Document three ways (how-to) assert distributions in TaxonWorks

The goal centers around the need to document the information about where given taxa can be found, according to a given source (e.g. a publication, personal expertise). With this data captured, it then becomes possible in TaxonWorks to programmatically connect biological associations information with distribution data. For example, a given taxa "A" eats taxa "B" in a given region on the planet. Next we want to describe three different ways to document asserted distributions in TaxonWorks.

### One. New asserted distribution task
This task gives you a way to capture and relate 4 pieces of information.
1. `Source`: where you search and then pick or add a given publication
2. `Object`: where you search and then pick, in this case, the OTU (the biological taxa for which you are adding distribution information)
3. `Shape`: where you search and then pick a geographic area (e.g. Thailand, Minnesota, etc) or you pick a shape from a custom gazetteer.
4. `Confidence`: where you can search for and then pick a confidence level you set. 
  - You may need to create these confidences first using the TaxonWorks `Manage Controlled Vocabulary Terms` task and there you can make the desired levels you want to use.
5. `Clone`: at the bottom of the form, you will see your newly created `Asserted Distribution`
6. Clone Options: You can clone parts of this / any `Asserted Distribution` if combinations of those parts (Source, Object, or Geo Shape) fit the next `Asserted Distribution` you want to create.

The form auto-saves.

### Two. Browse Taxon Names to Radial OTU to Asserted Distribution
[SEE SCREENSHOTS]
1. From `Browse Taxon Names`, search for the taxa you want to add distribution information to.
2. In the top menu bar, select the `OTU quick forms`, click on `Asserted Distributions`
3. Search to select the `Source`
4. Select the desired `Shape` from Geographic Area or Gazetteer options

TODO NOTE the "edit" for `Asserted Distributions` is missing `Confidence`, and `Object` in this pop-up -- Tom notes you can edit them from the Radial???

TODO AND, in the (old) `Editing asserted distribution` there is no `Confidence` nor can you see the `Source`

### Three. Bulk Add Asserted Distributions
1. From `Filter Taxon Names`, search for the taxa of interest and select `self and descendants`
2. Use the `Radial Filter` option (on left sidebar) to send the results to `Filter OTUs` task.
3. Now, you have all the OTUs for the taxa selected.
4. On the right side, select all, then use the `Radial OTU` and choose `Add asserted distribution` to add distribution information to all of these `OTU` objects at the same time.

### Edit Asserted Distribution
