---
sidebarPosition: 330
search:
  keywords:
    - annotation confidences
    - biological properties
    - certainty
    - certainties
    - identification confidences
    - life stages
    - measurements
    - sexes
    - specimen metadata
---

# Customization 

This section describes ways that projects can configure and adapt TaxonWorks
to their own workflows. 

## Controlled Vocabulary Terms (CVTs)

Controlled Vocabulary Terms (CVTs) allow projects to **standardize repeated concepts**, promote **consistency**, and improve **search, filtering, reporting, and data exchange**. They play a central role in annotation and metadata throughout TaxonWorks.

Nearly every object in TaxonWorks can be annotated and/or extended to varying degrees. That being the case, the following are just a few brief indications of where various types of CVTs might apply:

* Specimens / Collection Objects (e.g., biocuration classes like "female", "larva")
* Images and Depictions (e.g., predicates such as “view angle”)
* Identifications (e.g., confidence values like "community ID" or "low confidence")
* Citations and content  (e.g., topics describing what a publication is about, like "larval morphology" or "Project alpha")
* Import and export (matching CVTs to import/export columns)

### Types of Controlled Vocabulary Terms

---

TaxonWorks supports several distinct CVT categories, each serving a different purpose. The Manage Controlled Vocabulary task is used to create and manage your project's CVTs:

#left[The Manage Controlled Vocabulary task with the Predicates tab selected](https://sfg.taxonworks.org/s/mm68d4)

In the sections below we'll cover the meaning, uses, and creation of each of the following CVT types supported in TaxonWorks. See also the [FAQ](#cvt-frequently-asked-questions).

| Term Type | Purpose |
|-----------|---------|
| **[Keywords and Tags](#keywords-tags)** | Free-form tagging of many objects across TaxonWorks |
| **[Topics](#topics)** | Describing what a citation or content is *about* |
| **[Predicates and Data Attributes](#predicates-data-attributes)** | Expand existing TaxonWorks data models with attributes you can assign values to |
| **[Confidences](#confidences)** | Qualitative confidence levels assigned to identifications and more |
| **[Biocuration Classes and Groups](#biocuration-classes-groups)** | Controlled values describing biological properties of specimens |
| **[Biological Properties](#biological-properties)** | Properties describing the role of each side of a biological association |


### The role of URIs in CVTs

---

All CVTs allow you to provide an external URI. A URI is a way to:
- sync your terms to those used by users in other projects and the broader community
- provide stronger semantics via built-in relations to other terms of a vocabulary
- increase the likelihood of your exported data being interpretable by other systems and outside users

Some common examples relate to Darwin Core terms:
- the URI for "lifeStage": [http://rs.tdwg.org/dwc/terms/lifeStage](http://rs.tdwg.org/dwc/terms/lifeStage)
- the URI for "habitat": [http://rs.tdwg.org/dwc/terms/habitat](http://rs.tdwg.org/dwc/terms/habitat)

You can find the entire list of DarwinCore terms at [https://dwc.tdwg.org/list/](https://dwc.tdwg.org/list/), but the use of URIs isn't limited to DarwinCore, there are many other terms associated with bioinformatics that could apply here (see the [FAQ](#cvt-frequently-asked-questions)).

URIs play an additional special role in TaxonWorks in:
- matching import columns to CVTs on import
- auto-exporting CVT data on export.

#### Import
On import, column headers can be matched to CVTs, either by URI or by name, with a value in that column being used to create a CVT of the header's type.
See 
- [Mappings to project predicates](/guide/import.html#mappings-to-project-predicates) for data attribute mappings
- [Mappings to biocuration groups and classes](/guide/import.html#mappings-to-biocuration-groups-and-classes) for biocuration mappings

#### Export
On export, if your data uses CVTs with particular URIs, then TaxonWorks recognizes that those CVTs correspond to well-known DarwinCore terms and can export them as such automatically.
See 
- [Mappings from project predicates](/guide/export.html#mappings-from-project-predicates) for data attribute mappings
- [Mappings from project biocuration groups and classes](/guide/export.html#mappings-from-biocuration-groups-and-classes) for biocuration mappings

### The role of definitions in CVTs

---

Each CVT has a required definition. Definitions clarify meaning for new users - don't assume that your label alone is understandable, now, or over time! Provide a definition so that others may interpret and apply this CVT term as your project intends it to be used.

## Keywords / Tags

**Keywords**, often loosely referred to as *Tags*, allow project members to categorize and group records using simple, user-defined terms. Keywords can be applied to many kinds of objects, including:

- Collection Objects  
- Depictions  
- OTUs  
- Extracts  
- Sources  
- People  
- Loans  
- and more  

Keywords support broad organizational tasks, curational workflow markers, and semantic tagging.

:::tip
A *keyword* is simply a term, like "Needs review". A *tag* is a keyword on a particular piece of data (we say the data has been tagged with that keyword). "Tag" is sometimes loosely used in place of "keyword".
:::

### Some general examples of keyword uses

---

**Digitization**
```
Pending imaging
Published figure
Needs cropping
Ready for OCR
```

**Project-level organization**
```
Voucher specimens
High priority
Unsorted
Ravary Collection
```

**Media**
```
Habitus
Genitalia
SEM
Map
```

**Curation**
```
Needs georeference
Determination needs review
Missing sources
```

### Searching by keywords

---

You can filter by Keywords in any of the filters for objects that can have tags (collection objects, collecting events, otus, images, taxon names, etc.) - this is what makes tags so useful.

### Creating keywords

---

You can create or edit keywords using the Manage Controlled Vocabulary task.

#left[Creating keywords](https://sfg.taxonworks.org/s/hasgvd)

### Adding tags to objects

---

**On a single object**: As an example, we'll add the "Ravary collection" tag to a collection object we want to tag as being in that collection. 

1. Open the annotator radial for the collection object (from filter, browse, or show e.g.)
2. Select the Tag slice, select the All tab (or try one of the other tabs) and click on the yellow "Ravary collection" option.

#left[Adding a tag to a collection object](https://sfg.taxonworks.org/s/xnzxlt)

---

**Bulk add on filter results**: Any filter on an object that supports tags will include the option to batch add tags to a filter result via the [mass annotator radial](conventions#icons-in-taxonworks).

## Topics

**Topics** are Controlled Vocabulary Terms used to describe the *subject* or *focus* of a **Citation** or **Content** record. A Topic answers the question:

> “What is this publication (or piece of content) about?”

Common examples:

- "Identification key"
- "Original description"
- "Behavior"
- "Larval description"
- “Morphology”
- “Distribution”
- “Host Association”
- “Paleoenvironment”

Topics allow you to:

**Filter literature by subject**

Filter Source example:
> “Show me all sources that have been cited with the topic ‘*some_genus* Distribution’.”

**Filter content and notes**

Filter Contents example:
> “Find project notes about larval morphology.”

### Creating topics

---

You can create or edit topics using the Manage Controlled Vocabulary task.

#left[Creating topics](https://sfg.taxonworks.org/s/mll02t)

### Adding topics to citations

---

First create a citation on an object using its radial annotator. After the citation is created you can add one or more topics to it. If the citation already exists, editing it will allow you to add topics.

#left[Adding topics to a citation on a collection object](https://sfg.taxonworks.org/s/00fl55)


## Predicates (Data Attributes)

Predicates/data attributes allow users to add their own data fields to existing models like Collection Object and many others.

**Predicates** (also known as **Data Attribute _types_**) provide the *label* of the data being added to an object.

**Data attributes**, on the other hand, are the combination of a predicate with a value for that predicate, on a particular piece of data.

For example, if you have a predicate named "Temperature (in C)", you could assign the data attribute 'Temperature = 25' to a particular Collecting Event.

:::tip
Data attributes are to Predicates as Tags are to Keywords.
:::

Predicates tell TaxonWorks **what the data attribute represents**, such as:

- “Body length”  
- “Life habit”  
- “View angle” (for depictions)  
- “Collection method”

Unlike Keywords or Topics, Predicates allow one to *extend* existing models by adding a named field to which users can save arbitrary textual data *with prescribed meaning*.

---

Data attributes can be added to many TaxonWorks models, including:

- **Collection Objects**
- **Collecting Events**
- **OTUs**
- **Depictions**
- **Sources**
- **Taxon Names**
- **Observations**

A Data Attribute is always:

```
<Predicate> with <Value (and sometimes Units)> on <model object>
```

Examples:

```
Body length → 12 mm on a Collection Object
View angle → Dorsal on a Depiction of a Collection Object
Observation method → Visual on an Observation Matrix entry
```

:::warning
In the last example you may find yourself saying 'the values of Observation Method should come from a controlled vocabulary!'. TaxonWorks does not yet support this (TODO issue #?) - in such cases teams should agree on and document the expected set of terms. (For now filtering can be used to weed out incorrect values.)
:::

### URIs for predicates

---

URIs on predicates play a special role on import and export in TaxonWorks via matching of URIs to particular columns of data - for details see:

- [Mappings to project predicates](/guide/import.html#mappings-to-project-predicates) for import matching
- [Mappings from project predicates](/guide/export.html#mappings-from-project-predicates) for export matching
---

### Examples of predicates

Here are some general groups of predicates to get you thinking about what might be useful in your project.

**For specimen data**
```
Body length
Depth
Life habit
Emerged date
```

**For collecting events**
```
Permit number
Site code
Collection method
Weather
Microhabitat
```

**For image metadata**
```
View angle
Imaging device
Lighting type
Scale bar present
```

---

### Creating a predicate

---

You can create or edit predicates using the Manage Controlled Vocabulary task.

#left[Creating a predicate](https://sfg.taxonworks.org/s/u99xbi)

### Using predicates in the UI

---

**On a single object**

Here we'll assign data to the 'Permit data' data attribute of a collecting event that we created above, as a cautionary tale. From the radial annotator of the desired collecting event, select the Data Attributes slice and then fill in your data:

#left[Assigning data attribute data to a collecting event](https://sfg.taxonworks.org/s/gvkj6e)

:::danger
The value of a data attribute is single-line unstructured data. Here we've entered the data in the format described by the data attribute, but there are no guarantees that there won't be typos or users forgetting the correct format, etc. - in fact it's all but guaranteed that those things will happen. 

 In this case it's likely better to use separate 'Permit number' and 'Permit issuer' data attributes to mitigate these issues. We may also want to image the permit itself and attach it to the collecting event as a depiction.

 With great power comes great responsibility.
 :::

---

**Bulk add on filter results**

Any filter on an object that supports data attributes will include the option to batch add them to a filter result via the [mass annotator radial](conventions#icons-in-taxonworks).


### Adding data attribute inputs to tasks

---

:::warning
You must be a project administrator to add data attribute inputs to tasks.
:::

The Comprehensive Specimen Digitization task and related tasks provide a shortcut for adding data attribute values to a specimen. By default you'll see the following in the `Attributes` panel:

#left[Attributes panel with a link to 'Select visible attributes'](https://sfg.taxonworks.org/s/q1hnjw)

Click on the link, select the `CollectionObject` radio, and select which data attributes you'd like to appear on the specimen digitization page. In this case 'Emergence date' is selected but not 'Imaging device' (intended for depictions) or 'Permit data' (intended for collecting events).

:::tip
You can also access the preferences page by clicking `Project` in the top right, and then `Preferences`.
:::

#left[Predicate selection for collection objects](https://sfg.taxonworks.org/s/843ut7)

Now when you reload the Comprehensive Specimen Digitization page you'll see the Attributes panel has an input for 'Emergence date' where you can enter data directly and then save without going through the annotator.

#left[Attribute panel showing Emergence Date input](https://sfg.taxonworks.org/s/mab4ti)

A similar procedure applies for adding data attributes inputs to the `OTU quick forms` radial and the `New collecting event` task.

:::tip
Data attributes not available as inputs on tasks in this way can still always be created from the radial annotator.
:::

## Confidences

**Confidences** are Controlled Vocabulary Terms that allow project members to record **how certain** they are about a particular annotation. They provide a qualitative assessment of reliability or uncertainty.

Confidences add important nuance when dealing with:

- taxonomic determinations
- asserted distributions
- taxon names
- many other models

They help curators track uncertainty and help users understand reliability at a glance.

### Usage

---

Anywhere a user might reasonably say “I’m sure,” “I’m unsure,” or “I think so,” a Confidence can be added.

Typical examples:

- “Doubtful”
- “Tentative”
- “Confirmed”
- “Verified by expert”
- “High confidence”
- “Moderate confidence”
- “Low confidence”

---

Confidences help you:

**Track uncertainty explicitly**: A determination like _Boops boops_ (?)” can be annotated with “Low confidence,” making uncertainty searchable and standardized.

**Communicate reliability**: Collaborators can quickly interpret data quality.

**Support curation**: Filter Collection Object example:  
> “Show collection objects with low confidence determinations.”

### Creating a confidence

---

You can create or edit confidence levels using the Manage Controlled Vocabulary task.

#left[Creating a confidence](https://sfg.taxonworks.org/s/f9fj1v)

### Applying a confidence

---

**On a single object**

To indicate confidence level on taxon determinations of a specimen, we'll put the confidence on the specimen, where we can filter confidences using Filter Collection Objects (this isn't entirely satisfactory when a collection object has multiple determinations, but that's a rare case). Click on the annotator radial for the collection object, select the Confidences slice, click the All tab or search for the desired confidence, and click on it to add it.

#left[A confidence added to a collection object](https://sfg.taxonworks.org/s/040way)

---

**Bulk add on filter results**

Any filter on an object that supports confidences will include the option to batch add them to a filter result via the [mass annotator radial](conventions#icons-in-taxonworks).

## Biocuration classes & groups

**Biocuration Classes** are Controlled Vocabulary Terms used to describe **biological properties of specimens** (Collection Objects).  

Common examples include:

- **Sex**: male, female, hermaphrodite, unknown
- **Life stage**: larva, pupa, nymph, adult  
- **Reproductive state**  
- **Caste**

Biocuration Classes are grouped into **Biocuration Groups**, which serve as **organizational categories** to help users manage and apply classes consistently.

---

Biocuration Classes allow projects to:

- **Describe biological state** of specimens  
- **Support filtering** (e.g., “show all larvae of a particular genus”)  
- **Enable standardized DwC exports** (sex, lifeStage, and caste)  

---

### What biocuration groups are

---

Groups help organize classes and make large vocabularies easier to navigate.

Examples of useful Groups:

- “Sex”
- “Life stage”
- “Condition”
- "Organism product"
- “Caste”

:::tip
Biocuration classes aren't required to belong to a group, but groups *are* required in order to trigger automatic matching of data to biocuration classes on import and export - see [URIs for Biocuration Classes](#uris-for-biocuration-classes)
:::

:::tip
Classes, once created, can be added to one or more groups.
:::

:::tip
Groups are an organizational tool for grouping biocuration classes, they aren't themselves applied to data (classes are).
:::

### Examples: biocuration classes & the groups they belong to

---

Biocuration classes are the labels that belong to a biocuration group.

| Group | Example Classes |
|-------|------------------|
| **Sex** | male, female, hermaphrodite, unknown |
| **Life Stage** | egg, larva, pupa, adult |
| **Reproductive State** | gravid, non-gravid|
| **Caste** | worker, queen, soldier |

### Managing biocuration classes & groups

---

Biocuration classes and groups can be *created* and *edited* using the Manage Project Vocabulary task, while both creation and *association* of classes with groups is best managed through the dedicated Manage Biocuration Classes and Groups task.

#left[The Manage Biocuration Classes and Groups task](https://sfg.taxonworks.org/s/4r3leg)

#### Create a biocuration group

Click on `Create biocuration group` - the form you see here is the same as in the Manage Project Vocabulary task.

Here we've filled out the form to create a 'Sex' biocuration group. Note in particular that we've included the TDWG URI for 'sex' and used the TDWG definition for our definition.

#left[Create a biocuration group](https://sfg.taxonworks.org/s/2x00eh)

#left[The task with the 'sex' biocuration group created](https://sfg.taxonworks.org/s/o8dxf9)

#### Create a biocuration class

Click on `Create biocuration class` - the form you see here is the same as in the Manage Project Vocabulary task.

We'll add three classes to the 'sex' group: `female`, `male`, and `hermaphrodite`.

To create the classes one by one, click on the `Create biocuration class` button, fill out the data, and click `Create`. You'll get a message each time a class is created, but the task only displays groups on the front screen, not classes.

:::tip
Classes in the same group are often assigned the same color so that users can tell at a glance which group a given displayed class comes from.
:::

To add the new classes to the 'sex' group, click the blue 'plus' button in the 'sex' row - you'll see the following 'Add biocuration class to sex' modal, showing *all* of the biocuration classes you've created. As you click classes they're added to the 'sex' group and turn from green to red - here we've selected the three sex classes we created earlier.

#left[The 'Add biocuration class to sex' modal with three sex classes selected](https://sfg.taxonworks.org/s/273v6d)

Now when you view the Manage Biocuration Classes and Groups main page, you'll see your three classes added to the sex row (alongside a 'life stage' group):

#left[The main task view showing groups and the classes that belong to them](https://sfg.taxonworks.org/s/eibm4z)

You're now ready to add any class you've created to a Collection Object.

### URIs for biocuration classes

---

URIs play a special role on import and export in TaxonWorks via matching of URIs to particular columns of data - for details see:
- [Mappings to biocuration groups and classes](/guide/import.html#mappings-to-biocuration-groups-and-classes) for import matching
- [Mappings from project biocuration groups and classes](/guide/export.html#mappings-from-biocuration-groups-and-classes) for export matching

### Applying biocuration classes to specimens

---

**On a single object**

To add biocuration classes to a Collection Object you can use the Comprehensive Specimen Digitization task. There, in the "Object details" panel, you'll see the groups and classes you've created:

#left[The "Object details" panel showing biocuration groups and classes](https://sfg.taxonworks.org/s/ocak34)

Simply click on classes to select them, and then click `Save`.

You can also add classes to any Collection Object via its [quick forms](conventions#icons-in-taxonworks) radial and selecting the "Biocuration classifications" slice.

---

**Bulk add from Filter Collection Objects**

You can bulk add biocurations to a Filter Collection Object result set by clicking the `Radial collection object` icon ![Radial collection object icon](https://sfg.taxonworks.org/s/tzopol) and selecting the "Add biocurations" slice.

## Biological properties

**Biological properties** are controlled vocabulary terms used to qualify **biological relationships** between taxa. They describe the *role or biological state* each side of a biological relation has relative to the other side, such as “host”, “parasite”, “predator", "prey".

The main utility of biological properties within TaxonWorks is to support filtering of biological associations:

> Find all biological associations where the host is Salix.

### Examples of biological properties

---

Common examples include:

- `host` (could be used in multiple relationships, or could instead be qualified to be made more specific)
- `parasite`
- `predator`
- `prey`
- `pathogen`
- `symbiont` (may appear on both sides of a relationship)

### How biological properties are applied

---

Biological properties are not applied directly to objects, rather they are used when creating biological relationships.

For example, a relationship type describing ecto-parasitism might use:

- biological property: `parasite`
- biological relationship: `ectoparasite of`
- biological property: `host`

These properties define the biological roles of the two related taxa within that association.

**Creating the relation**

---

To model this relationship in TaxonWorks we'll use the Biological Relationship Composer task:

#left[The Biological Relationship Composer task](https://sfg.taxonworks.org/s/u9urki)

The Relations Ontology (RO) provides a definition for [`ectoparasite of`](https://www.ebi.ac.uk/ols4/ontologies/ro/properties/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FRO_0002632?lang=en), we'll use that here: 'A sub-relation of parasite-of in which the parasite lives on or in the integumental system of the host'. Relations don't have a `URI` field so we've included the URI link with the definition.

This relation is *not* transitive or reflexive, so we don't mark those boxes.
:::tip
In general a relation is:
- **transitive** when: if A is related to B and B is related to C, then A is related to C (for all A, B, C)
- **reflexive** when: A is related to A (for all A)

In the example above, 'is related to' would be 'is ectoparasite of', and A, B, C would be any species in our project (loosely speaking).
:::

We can either create our Biological Properties for this relationship in the Manage Controlled Vocabulary task, or right here by clicking New under Properties on the right. We'll add the `parasite` and `host` properties with their definitions:

#left[Definition of the `parasite` biological property](https://sfg.taxonworks.org/s/ih5rns)

#left[Definition of the `host` biological property](https://sfg.taxonworks.org/s/s4mwc1)

Now you can see the two new properties under Properties on the right. We've also added `parasite` and `host` to the _relation_ by dragging them from properties to their respective boxes in the relation.

#left[The relationship form filled out, including properties](https://sfg.taxonworks.org/s/156ou6)

Now click `Create`. A 'Flip' button has appeared below the relation; click it. Notice `host` is now on the left and `parasite` is now on the right, and the name of the relation is blank - fill it in with the name of the inverse relation, 'ectoparasitized by' and click `Update`.

Here's what our completed relation looks like:
#left[The completed `ectoparasite of` relation](https://sfg.taxonworks.org/s/bg80r0)

**Creating a relationship using our relation**

---

We'll use the relation we just created to model the [_Cimex adjunctus_ is an ectoparasite of _Myotis septentrionalis_](https://www.globalbioticinteractions.org/?accordingTo=https%3A%2F%2Fdoi.org%2F10.1644%2F1545-1410%282000%29634%253C0001%3AMS%253E2.0.CO%3B2&interactionType=parasiteOf&sourceTaxon=Cimex%20adjunctus) relation between a 'bat bug' and a bat.

Open the New Biological Association task, choose _Cimex adjunctus_ as the subject, 'ectoparasite of' as the Relationship, and _Myotis septentrionalis_ as the Related (i.e. object).

Here we created that relationship (listed at the bottom) and then reloaded the relationship in Edit mode so that you can see both:

#left[The new relationship listed at the bottom, with data in edit mode at the top](https://sfg.taxonworks.org/s/dztkem)

:::tip
You may wonder 'why did I go through all of that work to create properties when they don't even show up in my relationships?' The main value of biological properties within TaxonWorks is that you can filter by them in the Filter Biological Associations task to gain a broader view of _all_ relationships in which a given biological property or properties are used.
:::

## CVT Frequently Asked Questions

**An import (or another user) created a CVT that already exists under a different - preferred - name and assigned it to lots of imported records. What can I do?**

---

Discuss with the importer/changer if possible. If you decide to make the change, use the [Unify Objects](tasks#unify-task) task to unify the two CVT terms: keep the older preferrred term, delete the new term. Any data previously associated with the deleted term will now be associated with the preferred term.

:::tip
If the CVT is a data attribute or biocuration, also check to make sure that your existing CVT is using an appropriate URI (or specific Name) to allow matching of imported data on that CVT. Existing biocurations will be reused on import when that's the case. See [The role of URIs in CVTs](#the-role-of-uris-in-cvts) for details.
:::

**Should I use a Tag or a Confidence?**

---

There can definitely be some overlap here. In general confidences should carry with them some level of judgement of data as it is. Tags in these cases, on the other hand, will generally be more curatorial. Thus you may have a confidence value of "community ID" (implying not necessarily expert), whereas a Tag along the same lines might be "Needs ID review" (a call to curatorial action).

**Should I use Tags or a Data Attribute?**

---

Again there's a gray area, particularly if what you're modeling is a boolean (true/false, yes/no) value. Data attributes should be thought of more as permanent (but changeable) data attribute/value pairs added to objects. Tags are maybe lighter annotations aimed more at process and filtering.

**Can I require the values of my data attribute to come from a controlled vocabulary?**

---

Somewhat related to the previous. The answer is "Not yet". For now you'll need to rely on filtering or downloading data and using something like Open Refine to determine if any values don't match your expected terms.


**URIs seem to appear a lot in this discussion. Do I really need them?**

---

The short answer: the only place they're strictly required is so that certain DwCA export data (when it exists) gets added to your archive. Imports match certain data either by URI or by Name, so URI isn't strictly required, but is (arguably) more stable than Name.

That said, why might you want to use them even where they're not required? There are no perfect solutions, and URIs are no exception, but the intent is that:
- They're (in general) a source of well thought out terms and definitions that have been found useful to the community
- As such, they have broad usage and community-agreed-on meaning (a constant struggle, to be fair)
- They automatically sit within the broader context of the terms related to them, which provides additional meaning
- If your data are going to be meaningfully ingestable by other programs, either now or in the future, then well-known persistent URIs, rather than name-matching, provide the clearest picture of what your data are intended to describe.

**What are some other sources for useful CVT URIs if I would like to use them more?**

---

We've already mentioned the Darwin Core terms list: <https://dwc.tdwg.org/list/> See other TDWG standards at <https://www.tdwg.org/standards/>; Latimer Core in particular may be of interest in this context.

Other sources include ontologies:
- [Relations Ontology](https://oborel.github.io/) (RO)
- [The Environment Ontology](https://sites.google.com/site/environmentontology/home) (EnvO)
- [Ontology for Biomedical Investigations](https://obi-ontology.org/) (OBI, not restricted to biomedical use of course)

You can also search for terms from many ontologies at [Ontobee](https://ontobee.org/).
