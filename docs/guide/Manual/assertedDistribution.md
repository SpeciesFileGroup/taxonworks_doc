---
sidebarPosition: 550
---
# Asserted Distributions

_Information in this section shows ways to document asserted distributions for biological taxa and other objects in TaxonWorks._

## Resources

- TaxonWorks [Asserted Distribution Model](https://docs.taxonworks.org/develop/Data/models.html#asserted-distribution)

Tasks and Radials used in this work include
- `New asserted distribution task`
- `Browse Taxon Names`
- `OTU quick forms Radial`
- `Radial OTU` to batch add an assertion
- `Filter Taxon Names`
- `Filter OTUs`
- `Manage Controlled Vocabulary task`

## Three ways (how-to) assert distributions in TaxonWorks

In these examples, we want to document the information about where given taxa can be found, according to a given source (e.g. a publication, personal expertise). With this data captured, it then becomes possible in TaxonWorks to programmatically connect biological associations information with geospatial distribution data. For example, a given taxa "A" eats taxa "B" in a given region on the planet. 

### One. New asserted distribution task
This task gives you a way to capture and relate 4 pieces of information.

#left[**New asserted distribtion task**: See Source, Object, Shape, Confidence sections](https://sfg.taxonworks.org/s/bavcz7 [screenshot showing fielde Source, Object, Shape, Confidence that can be set for each asserted distribution])

1. `Source`: where you search and then pick or add (new) a given publication 

#left[**Pick the Source**](https://sfg.taxonworks.org/s/lejvef [screenshot showing where you search for the source you want to cite for asserted distribution information])

2. `Object`: Choose which type of TW Object you want. 
- select the object type
- search and then pick, in this particular case, the `OTU` (the biological taxa for which you are adding distribution information)

#left[**Select the Object**: choose the object of this asserted distribtion](https://sfg.taxonworks.org/s/havhqi[screenshot showing where you pick the TaxonWorks Object])

3. `Shape`: where you search and then pick a `geographic area` (e.g. Thailand, Minnesota, etc) or you pick a shape from a custom gazetteer.

#left[**Select the Shape**](https://sfg.taxonworks.org/s/2qjj84[screenshot showing where you select the geospatial shape or gazetteer entry for this asserted distribution for this TW Object])

4. `Confidence`: where you can search for and then pick a confidence level you set. 
  - You may need to create these confidences first using the TaxonWorks `Manage Controlled Vocabulary Terms` task and there you can make the desired levels you want to use. 
  
  #left[**Adding Confidence Status**: Using the `Manage Controlled Vocabulary Task` to create confidence options you can then attach to objects in TW. These are optional and customizable](https://sfg.taxonworks.org/s/l11b3x[screenshot showing where you can pick the confidence level you want to associate with this asserted distribution for this TW Object])

5. `Clone`: at the bottom of the form, you will see your newly created `Asserted Distribution`
- you can delete it if need be (see the trash can)
- you can use the `Radial annotator` to add more information to this distribution record. 
- options: You can clone parts of this / any `Asserted Distribution` if combinations of those parts (Source, Object, or Geo Shape) fit the next `Asserted Distribution` you want to create. See bottom of screenshot next.

#left[**See and Clone pieces of any Asserted Distribution**](https://sfg.taxonworks.org/s/3n5erq[screenshot showing that you can clone pieces of any asserted distribtion in case you want to edit only parts of one to apply to another taxa or another object and source in TW])

6. The form auto-saves if the box in the top right of the form is checked.

### Two. Browse Taxon Names to Radial OTU to Asserted Distribution

1. From `Browse Taxon Names` task, search for the taxa you want to add distribution information to.

#left[**Browse Taxon Names** to find the taxa for the asserted distributions you want to create](https://sfg.taxonworks.org/s/mo8cpa[screenshot showing how you search for the taxa you want to create an asserted distribution for])

2. In the top menu bar, click the `OTU quick forms` radial, select `Asserted Distributions` in the radial. With this radial you can add information to the OTU record without leaving the Taxon Name page.

#left[**Use Quick OTU Forms radial**: select Asserted Distribution](https://sfg.taxonworks.org/s/px2dbq[screenshot showing which radial to use to find the option to create an asserted distribution])

3. Search to find and then select the `Source`

#left[**Select Source for New Asserted Distribution**](https://sfg.taxonworks.org/s/yjjp0s[screenshot showing pop up to make a new asserted distribution and the first step is to search and then select the source])

4. Select the desired `Shape` from Geographic Area or Gazetteer options

5. The `Asserted Distribution` is saved automatically. 

::: tip
Note in the above screenshot you can `Clone last Citation` and also lock a `Source` in the event you want to use it in your next asserted distribution records.
:::

### Three. Bulk Add Asserted Distributions
1. From `Filter Taxon Names`, search for the taxa of interest and select `self and descendants` (in this case).

#left[**Filter Taxon Names to find taxa of interest**](https://sfg.taxonworks.org/s/dewr44[Screeshot showing search using Filter Taxon Names task to find taxa of interest for your asserted distribution])

2. Use the `Radial Filter` option (on left sidebar) to send the results to `Filter OTUs` task.

#left[**Send Taxon Name results to Filter OTUs**](https://sfg.taxonworks.org/s/jdyez0[screenshot showing that you can sent the results of your Filter Taxon Name search to the Filter OTUs task])

3. Now, you have all the OTUs for the taxa selected.

#left[**OTUs now ready for their Asserted Distribution**](https://sfg.taxonworks.org/s/72gada[screenshot showing OTUs])

4. On the right side, select all, then use the `Radial OTU` and choose `Add asserted distribution` to add distribution information to all of these `OTU` objects at the same time.

#left[**Use the Radial OTU** to create a mass asserted distribution](https://sfg.taxonworks.org/s/yel0bm[screenshot showing that you can now add an asserted distribution for all of these selected OTUs at one time])

### Edit Asserted Distribution
You can edit any `Asserted Distributions` from the `OTU Quick Forms` Radial.

<!-- TODO NOTE the "edit" for `Asserted Distributions` is missing `Confidence`, and `Object` in this pop-up
-->

<!-- TODO AND, in the (old) `Editing asserted distribution` there is no `Confidence` nor can you see the `Source`
-->