---
sidebarPosition: 330
search:
  keywords:
    - annotation confidences
    - biological properties
    - certainty
    - certanties
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

Controlled Vocabulary Terms (CVTs) in TaxonWorks allow projects to **standardize repeated concepts**, promote **consistency**, and improve **search, filtering, reporting, and data exchange**. They play a central role in annotation and metadata throughout the application.

CVTs are used wherever a project benefits from having a defined, reusable set of terms rather than free text.

### Where CVTs Are Used in TaxonWorks

---

CVTs appear in many places, including:

* Specimens / Collection Objects (e.g., biocuration classes like "female", "larva")
* Images and Depictions (e.g., predicates such as “view angle”)
* Identifications (e.g., confidence values)
* Citations and content  (e.g., topics describing what a publication is about)
* Tasks using structured metadata (e.g., batch loading, DwC exports)

### Types of Controlled Vocabulary Terms

---

TaxonWorks supports several distinct CVT categories, each serving a different purpose. The Manage Controlled Vocabulary task is used to create and manage your project's CVTs:

#left[The Manage Controlled Vocabulary task with the Predicates tab selected](https://sfg.taxonworks.org/s/mm68d4)

In the sections below we'll cover the meaning, uses, and creation of each of the following CVT types supported in TaxonWorks.

| Term Type | Purpose |
|-----------|---------|
| **[Keywords (Tags)](#keywords-tags)** | Free-form tagging of many objects across TaxonWorks |
| **[Topics](#topics)** | Describing what a citation or content is *about* |
| **[Predicates (Data Attributes)](#predicates-data-attributes)** | Expand existing TaxonWorks data models with attributes you can assign values to |
| **[Confidences](#confidences)** | Qualitative confidence levels assigned to identifications and more |
| **[Biocuration Classes and Groups](#biocuration-classes-groups)** | Controlled values describing biological properties of specimens |
| **[Biological Properties](#biological-properties)** | Properties describing the role of each side of a biological relationship |


### The role of URIs in CVTs

---

All CVTs allow you to provide an external URI. A URI is a way to:
- sync your terms to those used by users in other projects and the broader community
- provide stronger semantics via built-in relations to other terms of a vocabulary
- increase the likelihood of your exported data being interpretable by other systems and outside users

URIs play an additional special role in TaxonWorks in:
- matching import columns to CVTs on import
- auto-exporting CVT data on export.

#### Import
See 
- [Mappings to project predicates](/guide/import.html#mappings-to-project-predicates) for data attribute mappings
- [Mappings to biocuration groups and classes](/guide/import.html#mappings-to-biocuration-groups-and-classes) for biocuration mappings

#### Export
See 
- [Mappings from project predicates](/guide/export.html#mappings-from-project-predicates) for data attribute mappings
- [Mappings from project biocuration groups and classes](/guide/export.html#mappings-from-project-biocuration-groups-and-classes) for biocuration mappings

### The role of definitions in CVTs

---

Definitions clarify meaning for new users. Don't assume that your label is understandable, now, or over time! Provide a definition so that others may interpret and apply this CVT term as your project intends it to be used.

Think in terms of how you would want your term to be passed on with fidelity to someone inheriting your dataset.

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

Keywords support broad organizational tasks, informal labels, workflow markers, and semantic tagging.

:::tip
A *keyword* is simply a term, like "Needs review". A *tag* is a keyword on a particular piece of data (we say the data has been tagged with that keyword). "Tag" is sometimes loosely used in place of "keyword".
:::

### Some General Examples of Keyword Uses

---

#### Digitization
```
Pending imaging
Published figure
Needs cropping
Ready for OCR
```

#### Project-level organization
Voucher specimens
High priority
Unsorted
Ravary Collection

#### Media
Habitus
Genitalia
SEM
Map

#### Curation
Needs georeference
Determination needs review
Needs verification

### Searching by Keywords

---

You can filter by Keywords in any of the filters for objects that can have tags (collection objects, collecting events, otus, images, taxon names, etc.) - this is what makes tags so useful.

### Creating Keywords

---

You can create or edit keywords using the Manage Controlled Vocabulary task.

1. Click on the **Keyword** tab
2. Enter a **Name** (required)
3. Add a **Definition** (required)
4. Select the color that tags for this keyword will be displayed with
5. Optionally add a **URI** (recommended if your keyword aligns with an external vocabulary)
6. Save

#left[Creating keywords](https://sfg.taxonworks.org/s/hasgvd)

### Adding tags to objects

---

As an example, we'll add the "Ravary collection" tag to a collection object we want to tag as being in that collection. 

1. Open the annotator radial for the collection object (from filter, browse, or show e.g.)
2. Select the Tag slice, select the All tab (or try one of the other tabs) and click on the yellow "Ravary collection" option.

#left[Adding a tag to a collection object](https://sfg.taxonworks.org/s/xnzxlt)

## Topics

**Topics** are Controlled Vocabulary Terms used to describe the *subject* or *focus* of something — usually a **Citation** or **Content** record. A Topic answers the question:

> “What is this publication (or piece of content) about?”

### Where Topics Are Used

---

Topics appear in annotation interfaces for:

- **Citations** (`Citation Topics`)
- **Content** (Notes, Documentation, etc.)

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

#### Filter literature by subject  
Example:
> “Show me all sources that have been cited with the topic ‘Distribution’.”

#### Filter content and notes  
Example:
> “Find project notes about larval morphology.”

### Example Topic Sets

Below are some small general example sets that may help you think about topics that would be useful for your project.

#### **Taxonomy & Systematics**
```
Taxonomy
Phylogeny
Revision
Species Description
Type Information
```

#### **Morphology & Anatomy**
```
Morphology
Genitalia
External Anatomy
Internal Anatomy
Development
```

#### **Ecology & Environment**
```
Distribution
Habitat
Host Association
Behavior
Life History
Paleoenvironment
```

#### **Methods & Tools**
```
Molecular Methods
Imaging
Statistics
Data Standards
```

### When Should I Add a Topic?

---

Add a Topic when you need to consistently categorize literature or content that:

- relates to biological or taxonomic concepts  
- corresponds to a repeating subject area  
- is used frequently across your citation set  
- appears in summaries or review tasks  

Examples of good reasons:

- Reading a lot of papers about “Habitat”
- Tagging all sources relevant to “Revisionary Taxonomy”
- Distinguishing “Morphology” from “Molecular Phylogenetics”

### Creating Topics

---

You can create or edit topics using the Manage Controlled Vocabulary task.

1. Click on the **Topics** tab
2. Enter a **Name** (required)
3. Add a **Definition** (required)
4. Select the color that your topics will be displayed with
5. Optionally add a **URI**
6. Save

#left[Creating topics](https://sfg.taxonworks.org/s/mll02t)

### Adding Topics To Citations

---

First create a citation on an object using its radial annotator. After the citation is created you can add one or more topics to it. If the citation already exists, editing it will allow you to add topics.

#left[Adding topics to a citation on a collection object](https://sfg.taxonworks.org/s/00fl55)


## Predicates (Data Attributes)

**Predicates** (also known as **Data Attribute _types_**) provide the *label* of the data being added to an object.

Data attributes, on the other hand, are the combination of a predicate with a value for that predicate, on a particular piece of data.

For example, if you have a predicate named "Elevation", you could assign the data attribute 'Elevation = 12m' to a particular Collection Object.

:::tip
Data attributes are to Predicates as Tags are to Keywords.
:::

Predicates tell TaxonWorks **what the data attribute represents**, such as:

- “Elevation”  
- “Body length”  
- “Life habit”  
- “View angle” (for depictions)  
- “Collection method”

Unlike Keywords or Topics, Predicates allow one to *extend* existing models by adding a named field to which users can save arbitrary textual data *with prescribed semantics*.

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
Elevation → 1250 m on a Collecting Event
Body length → 12 mm on a Collection Object
View angle → Dorsal on a Depiction of a Collection Object
Observation method → Visual on an Observation Matrix entry
```

:::warning
In the last example you may find yourself saying 'the values of Observation Method should come from a controlled vocabulary!'. TaxonWorks does not yet support this (TODO issue #?) - in such cases teams should agree on and document the expected set of terms. (Filtering can be used to weed out incorrect values.)
:::

---

### Why Use Predicates?

Predicates allow you to:

#### Add data with consistent meanings  
e.g., always using “Elevation” instead of “Altitude” / “elev.” / etc.

#### Improve search and filtering  
Predicates appear in filters that allow textual searches on your data attributes.

#### Enable downstream exports  
Well-defined attribute types integrate cleanly into DwC and custom exports.

#### Standardize annotation across team members  
Everyone uses the same vocabulary for common project attributes.

#### Align with external vocabularies  
URIs make predicates interoperable with ontologies.

---

### URIs for Predicates

---

URIs play a special role on import and export in TaxonWorks via matching of URIs to particular columns of data - for details see:

- [Mappings to project predicates](/guide/import.html#mappings-to-project-predicates) for import matching
- [Mappings from project predicates](/guide/export.html#mappings-from-project-predicates) for export matching
---

### Examples of Useful Predicates

#### For Specimen Data
```
Body length
Depth
Life habit
Emerged date
```

#### For Collecting Events
```
Permit number
Site code
Collection method
Weather
Microhabitat
```

#### For Image Metadata
```
View angle
Imaging device
Lighting type
Scale bar present
```

---

### Creating a Predicate

---

You can create or edit predicates using the Manage Controlled Vocabulary task.

1. Click on the **Predicates** tab
2. Enter a **Name** (required)
3. Add a **Definition** (required)
4. Select the color that your topics will be displayed with
5. Optionally add a **URI**
6. Save

#left[Creating a predicate](https://sfg.taxonworks.org/s/f8u1q5)

### Using Predicates in the UI

---

Here we'll assign data to the 'Permit data' data attribute of a collecting event. From the radial annotator of the desired collecting event, select the Data Attributes slice and then fill in your data:

#left[Assigning data attribute data to a collecting event](https://sfg.taxonworks.org/s/gvkj6e)

:::warning
The value of a data attribute is single-line unstructured data. Here we've entered the data in the format described by the data attribute, but there are no guarantees that there won't be typos or users forgetting the correct format, etc. - in fact it's all but guaranteed that those things will happen. 

 In this case it may be better to use separate 'Permit number' and 'Permit issuer' data attributes to mitigate these issues. We may also want to image the permit itself and attach it to the collecting event as a depiction.
 :::

#### Adding data attribute inputs to tasks

:::warning
You must be a project administrator to add data attribute inputs to tasks.
:::

The Comprehensive Specimen Digitization task and related tasks provide a shortcut for adding data attribute values to a specimen. The first time you use the task you'll see the following in the `Attributes` panel:

#left[Attributes panel with a link to 'Select visible attributes'](https://sfg.taxonworks.org/s/q1hnjw)

Click on the link, select the `CollectionObject` radio, and select which data attributes you'd like to appear on the specimen digitization page. In this case 'Emergence date' is selected but not 'Imaging device' (intended for depictions) or 'Permit data' (intended for collecting events).

:::tip
You can also access the preferences page by clicking `Project` in the top right, and then `Preferences`.
:::

#left[Predicate selection for collection objects](https://sfg.taxonworks.org/s/843ut7)

Now when you reload the Comprehensive Specimen Digitization page you'll see the Attributes panel has an input for 'Emergence date' where you can enter data directly and then save without going through the annotator.

#left[Attribute panel showing Emergence Date input](https://sfg.taxonworks.org/s/843ut7)

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

- “High confidence”
- “Moderate confidence”
- “Low confidence”
- “Doubtful”
- “Tentative”
- “Confirmed”
- “Verified by expert”

---

Confidences help you:

#### Track uncertainty explicitly  
A determination like “_Panthera leo_ (?)” can instead be annotated with “Low confidence,” making uncertainty searchable and standardized.

#### Communicate reliability  
Collaborators can quickly interpret data quality.

#### Improve filtering  
Example:  
> “Show determinations with low confidence.”

#### Support long-term curation  
Confidences highlight places where data might need review later.

### Creating a Confidence

---

You can create or edit confidence levels using the Manage Controlled Vocabulary task.

1. Click on the **Confidences** tab
2. Enter a **Name** (required)
3. Add a **Definition** (required)
4. Select the color that your confidences will be displayed with
5. Optionally add a **URI**
6. Save

#left[Creating a confidence](https://sfg.taxonworks.org/s/f9fj1v)

### Applying a Confidence

---

Here we'd like to indicate confidence level on taxon determinations of a specimen. We'll put the confidence on the specimen where we can filter confidences using Filter Collection Objects. Click on the annotator radial for the collection object, select tye Confidences slice, click the All tab or search for the desired confidence, and click on it to add it.

#left[A confidence added to a collection object](https://sfg.taxonworks.org/s/040way)

## Biocuration Classes & Groups

**Biocuration Classes** are Controlled Vocabulary Terms used to describe **biological properties of specimens** (Collection Objects).  

Common examples include:

- **Sex**: male, female, hermaphrodite, unknown
- **Life stage**: larva, pupa, nymph, adult  
- **Condition**: damaged, complete  
- **Reproductive state**  
- **Caste**

Biocuration Classes are grouped into **Biocuration Groups**, which serve as **organizational categories** to help users manage and apply classes consistently.

---

Biocuration Classes allow projects to:

- **Describe biological state or condition** of specimens  
- **Support filtering** (e.g., “show all larvae of a particular genus”)  
- **Enable standardized DwC exports** (e.g., sex, lifeStage, preparations)  
- **Coordinate consistency across curators**  

---

### What Biocuration Groups Are

---

Groups help organize classes and make large vocabularies easier to navigate.

Examples of useful Groups:

- “Sex”
- “Life stage”
- “Condition”
- "Organism product"
- “Castes”

:::tip
Biocuration classes aren't required to belong to a group, but groups *are* required to trigger automatic matching of data to biocuration classes on import and export - see [URIs for Biocuration Classes](#uris-for-biocuration-classes)
:::

:::tip
Classes, once created, can be added to one or more groups.
:::

:::tip
Groups are an organizational tool for grouping biocuration classes, they aren't themselves applied to data (classes are).
:::

### Examples: Biocuration Classes & the Groups They Belong To

---

Biocuration classes are the labels that belong to a biocuration group.

| Group | Example Classes |
|-------|------------------|
| **Sex** | male, female, hermaphrodite, unknown |
| **Life Stage** | egg, larva, pupa, adult |
| **Preservation** | pinned, alcohol, slide-mounted |
| **Condition** | broken, complete, partial |
| **Reproductive State** | gravid, non-gravid |
| **Caste** (social insects) | worker, queen, soldier |

### Managing Biocuration Classes & Groups

---

Biocuration classes and groups can be *created* and *edited* using the Manage Project Vocabulary task, while both creation and association of classes with groups is best managed through the dedicated Manage Biocuration Classes and Groups task.

#left[The Manage Biocuration Classes and Groups task](https://sfg.taxonworks.org/s/4r3leg)

#### Create a Biocuration Group

Click on `Create biocuration group` - the form you see here is the same as in the Manage Project Vocabulary task.

1. Enter a **Name** (required)
2. Add a **Definition** (required)
3. Select the color that your biocuration group will be displayed with
4. Optionally add a **URI**
5. Save

Here we've filled out the form to create a 'Sex' biocuration group. Note in particular that we've included the TDWG URI for 'sex' and used the TDWG definition for our definition.

#left[Create a biocuration group](https://sfg.taxonworks.org/s/2x00eh)

#left[The task with the 'sex' biocuration group created](https://sfg.taxonworks.org/s/o8dxf9)

#### Create a Biocuration Class

Click on `Create biocuration group` - the form you see here is the same as in the Manage Project Vocabulary task.

1. Enter a **Name** (required)
2. Add a **Definition** (required)
3. Select the color that your biocuration group will be displayed with
4. Optionally add a **URI**
5. Save

We'll add three classes to the 'sex' group: `female`, `male`, and `hermaphrodite`.

TODO
Should we look up URIs for those terms? They certainly exist and adding them would ground our terminology and increase the likelihood of it being interpretable by external ingestors of our data, but they're not specifically used by TaxonWorks. We'll choose to pass this time, they can be added later if need arises.

To create the classes one by one, click on the `Create biocuration class` button, fill out the data, and click `Create`. You'll get a message each time a class is created, but the task only displays groups on the front screen, not classes.

:::tip
Classes in the same group are often assigned the same color so that users can tell at a glance which group a given displayed class comes from.
:::

To add the new classes to the 'sex' group, click the blue 'plus' button in the 'sex' rows - you'll see the following 'Add biocuration class to sex' modal, showing *all* of the biocuration classes you've created. As you click classes they're added to the 'sex' group and turn from green to red - here we've selected the three sex classes we created earlier.

#left[The 'Add biocuration class to sex' modal with three sex classes selected](https://sfg.taxonworks.org/s/273v6d)

Now when you view the Manage Biocuration Classes and Groups main page, you'll see your three classes added to the sex row (I've also created and populated a 'life stage' group):

#left[The main task view showing groups and the classes that belong to them](https://sfg.taxonworks.org/s/eibm4z)

You're now ready to add any class you've created to a Collection Object.

### URIs for Biocuration Classes

---

URIs play a special role on import and export in TaxonWorks via matching of URIs to particular columns of data - for details see:
- [Mappings to biocuration groups and classes](/guide/import.html#mappings-to-biocuration-groups-and-classes) for export matching
- [Mappings from project biocuration groups and classes](/guide/export.html#mappings-from-project-biocuration-groups-and-classes) for import matching

### Applying Biocuration Classes to Specimens

To add biocuration classes to a Collection Object you can use the Comprehensive Specimen Digitization task. There, in the 'Object details' panel, you'll see the groups and classes you've created:

#left[The 'Object details' panel showing biocuration groups and classes](https://sfg.taxonworks.org/s/ocak34)

Simply click on classes to select them, and then click `Save`.

## Biological properties

**Biological properties** are controlled vocabulary terms used to qualify **biological relationships** between taxa. They describe the *role or biological state* each side of a biological relation has relative to the other side, such as “host”, “parasite”, “predator", "prey".

### What biological properties are used for

---

Biological properties are used to:

- specify the role an organism plays in a biological relationship
- distinguish directional or asymmetric relationships
- standardize biological semantics across association data
- support filtering and querying of biological associations

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

#### Creating the Relation
[TODO move to a BA section of the guide]
To model this relationship in TaxonWorks we'll use the Biological Relationship Composer task:

#left[The Biological Relationship Composer task](https://sfg.taxonworks.org/s/u9urki)

The Relations Ontology (RO) provides a definition for [`ectoparasite of`](https://www.ebi.ac.uk/ols4/ontologies/ro/properties/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FRO_0002632?lang=en), so we'll use that here: 'A sub-relation of parasite-of in which the parasite lives on or in the integumental system of the host'. Relations don't have a `URI` field so we've included the URI link with the definition.

This relation is *not*:
- **transitive**: if A is an ectoparasite of B and B is an ectoparasite of C, it doesn't necessarily follow that A is an ectoparasite of C
- **reflexive**: in general A is not an ectoparasite of A

We can either create our Biological Properties for this relationship either in the Manage Controlled Vocabulary task, or right here by clicking New under Properties on the right. We'll add the `parasite` and `host` properties with their definitions:

#left[Definition of the `parasite` biological property](https://sfg.taxonworks.org/s/ih5rns)

#left[Definition of the `host` biological property](https://sfg.taxonworks.org/s/s4mwc1)

Now you can see the two new properties under Properties on the right. We've added `parasite` and `host` to the relation by dragging them from properties to their respective boxes in the relation.

#left[The relationship form filled out, including properties](https://sfg.taxonworks.org/s/156ou6)

Now click `Create`. A 'Flip' button has appeared below the relation; click it. Notice `host` is now on the left and `parasite` is now on the right, and the name of the relation is blank - fill it in with the name of the inverse relation, 'ectoparasitized by' and click `Update`.

Here's what our completed relation looks like:
#left[The completed `ectoparasite of` relation](https://sfg.taxonworks.org/s/bg80r0)

#### Creating a Relationship Using Our Relation

We'll use the relation we just created to model the '_Cimex adjunctus_ is an ectoparasite of _Myotis septentrionalis_' relation between a 'bed bug' and a bat.

Open the New Biological Association task, choose _Cimex adjunctus_ as the subject, 'ectoparasite of' as the Relationship, and _Myotis septentrionalis_ as the Related (i.e. object).

Here we created that relationship and then reloaded the relationship in Edit mode so that you can see both:

#left[The new relationship listed at the bottom, with data in edit mode at the top](https://sfg.taxonworks.org/s/dztkem)

:::tip
You may wonder 'why did I go through all of that work to create properties when they don't even show up in my relationships?' The main value of biological properties within TaxonWorks is that you can filter by them in the Filter Biological Associations task to gain a broader view of _all_ relationships in which a given biological property or properties are used.
:::

## CVT Frequently Asked Questions

#### **Can a Class belong to more than one Group?**  
No — in TaxonWorks a class belongs to exactly one group, which helps maintain a simple classification.

#### **Can I rename Groups without breaking data?**  
Yes. Group renaming does not affect existing specimen annotations.

#### **What happens when I merge two Classes?**  TODO unify
All annotations referencing either class will point to the surviving one.

Tag or DA?
https://dwc.tdwg.org/list/
[Phenotype and Trait Ontology (PATO)](https://ontobee.org/ontology/PATO)