---
sidebarPosition: 200
---
# Collection Objects
_A place for information about specimens and related collection items_.

As a researcher, as an ecologist, as a collection manager, you want to gather, access, learn from, manage, (and later, share) data describing the `Collection Objects` (CO) that you steward. Inside TaxonWorks the CollectionObject model offers you a rich set of concepts and the ability to add custom `Data Attributes` as needed to store and share more data.

## Collection Object related tasks

`New collection object Task`: This task suits digitization data capture workflows designed to support use of stub or skeletal records. Minimal data captured here, including text blocks, can be parsed later.

#left[The `New collection object` task best suits minimal or skeletal data record creation](https://sfg.taxonworks.org/s/lozewk [The `New collection object` task best suits minimal or skeletal data record creation offering only a few fields])

`New Collecting Event Task`: In addition to the data about the `what` (that is, the physical specimen itself), information about the `where`, `how`, `who`, and `when`, etcetera fit elsewhere in the TaxonWorks data model: the `New Collecting Event (CE) Task` stores information about the where, when, and who.

#left[Use the `New collecting event` task to capture events](https://sfg.taxonworks.org/s/wngpga [The `New collective event` task offers a way to add just the collecting events instead of other related data])

`Comprehensive specimen digitization Task` (CSD): Combined into one screen, much of the data you have related to a specimen can be entered inside this one window. Inside this task, you have access to `buffered data` from stub records and `verbatim` data that can be parsed for you. You'll find you can add people, locality information, biological association data, and add custom fields you need. The following screenshot highlights the different sections of this task in TaxonWorks.

#left[Exploring the Comprehensive Digitization Task in TaxonWorks](https://sfg.taxonworks.org/s/lqkyui[Various sections of the Comprehensive Digitization Task in TaxonWorks hightlighted, such as `Collecting Event` and `Verbatim` fields])

### Customize the layout and reorder fields
In the top right of the above screenshot, note the options to change the layout of the `Comprehensive specimen digitization` task. Using these options, you can hide some content if not wanted or needed and move fields into a more optimum order for your data capture strategy.

#### Layout settings
- Click on `Layout settings` in the top right of the `Comprehensive specimen digitization` task.
- In the pop-up (see next), `select the sections` you want to display. Any un-checked sections do not appear on your screen.

#left[Inside this Pop-up, a checked box means that section of the CSD will display](https://sfg.taxonworks.org/s/siaosk[a pop-up allowing users to decide with sections of the CSD tasks to use or hide])

#### Collection object section inside `Comprehensive specimen digitization Task`
In the top section of the CSD screenshot, you see sections for `Catalog number`, `Repository`, `Preparation`, `Buffered`, and `Depictions`.

`Catalog number`: TW provides several ways for you to add `Catalog numbers` to ensure you can find or subset your CO items as needed. Note the `Namespace` concept in TW which keeps `Catalog numbers` unique inside a TW Project and across projects.
- Select an existing `Namespace` for this CO or add a `New` one if needed
  - You can `Search` to find the one you want.
  - `Recent` offers you items you've selected not too long ago.
  - `Pinboard` gives you the option to attach a given `Namespace` to the foreseeable items you plan to add at the moment.
- Add your `Catalog number` identifier.
- `Check` the `increment` box if you want to create records with numbers that increase accordingly.

`Repository`: Search for the place where the specimen resides. 
- Use `Quick` to search using a few letters to find the place.
- With `Recent` option you can make us of the last entries made if you might be entering data for items being cared for at the same insitutions.
- The `Pinboard` option lets you pick an option (for quick easy access) to be there always unless you remove it from the pinboard.

`Preparation`: `Select` the storage method type from options shown. Note you can add to this list if need be as follows.
- Navigate to the `Data` tab
- `Search` for `Preparation types` and click on the result
- In the `Preparation types` window, click `New`
  - `Type` in the name of the method
  - `Type` the definition of what this term means.
  - `Click` `Create Preparation type`

`Buffered`: Information here can be typed in OR might come from a different task in TaxonWorks that involves capturing an image of labels (and specimens) and getting label text from either typing or from OCR. Data in these fields is not expected to change or be edited.

`Depictions`: Drag and drop any relevant media (images or figures) into this box.

#### Determinations section inside `Comprehensive specimen digitization Task`

`Operational Taxonomic Unit` (OTU): 
- Select the taxon concept applied (the `Determination`) to the specimen.
  - `Quick` for searching names
  - `Recent` to choose from names you've used for the last few records
  - `Pinboard` to keep a name handy you'll be selecting a lot
- `Search` to select the name of the person who identified the specimen.
- Enter the date (as much as you know) the `Determination` was done.
  - `Year` needs to be 4 digits
  - Enter 2 digits for the `Month` (e.g June would be `06`)
  - Enter `day` as one or two digits. One-digit days will be standardized to have a leading zero to display in the YYYY-MM-DD format.
    - Please Do Not use zeroes as placeholders for information you do not have for year, month, or day.
- Click `Add`

#### `Collecting Event` inside `Comprehensive specimen digitization Task`
Here you find the information about the `who`, `when`, and `where` for the specimen collected. Note this is a separate task in TW. (See `New Collecting Event` (CE) Task ). The CE fields offered here make it easier to enter all relevant information in one window, in one task. Note the CE has 3 columns, `Verbatim`, `Parse`, and then label printing and locality preview.

`Verbatim` Collecting Event column
  - `Label`: Enter data here from the label.
    - You may wish to try `Parse fields` for the software to help you move the label text into the correct atomized fields.
  - `Locality`: Enter `verbatim` information from the label or other source describing where on the planet this specimen was collected. 
  - `Latitude`: if provided on label or in another related souce, enter the `latitude` as it is shown in the image or relevant document.
  - `Longitude`: if provided on label or in another related souce, enter the `longitude` as it is shown in the image or relevant document.
  - `Geolocation uncertainty in meters`: a number expected to already to be `meters` 
  - `Elevation`: if provided on label or in another related souce, enter the `elevation` as it is shown in the image or relevant document.
  - `Habitat`: if provided on label or in another related souce, enter the `habitat` as it is shown in the image or relevant document.
  - `Date`: if provided on label or in another related souce, enter the `date` as it is shown in the image or relevant document.
  - `Datum`: if provided on label or in another related souce, enter the `datum` as it is shown in the image or relevant document.
  - `Collectors`: if provided on label or in another related souce, enter the `collectors` as they appear in the image or relevant document.
  - `Method`: if provided on label or in another related souce, enter the `method` as it is shown in the image or relevant document.
  - `Trip identifier`: if provided on label or in another related souce, enter this identifier as it is shown in the image or relevant document.

`Parse` section of CE
This section helps to atomize all the information about when and where and who into separate bits of information. Some features offered here include tools to help you georeference, to indicate units of measurement, and to auto-parse data from the `Verbatim` information.
- `Geographic area`: Search to find the desired higher-level geography (e. g. State, or Country). Again (as above) you have options to use `Quick`, `Recent`, or `Pinboard` to speed finding the place. Additionally, you can use `Map` and then click on the desired place in the resulting map presented.
  - Note that you may find multiple options offered to you. Example, for Alabama, we are offered 4 choices (from various gazetteers). Some are used by many specimens. Choose the one that seems correct (or as outlined by your Project needs documentation). 
- `Start date`: `Enter` the start date (YYYY MM DD)
- `End date`: `Enter` the end date (YYYY MM DD) for the CE
- `Elevation`: note a range and uncertainty can be added here. Please declare the units.
- `Start time`: If relevant and provided, enter the time the event started.
- `End time`: If relevant and provided, enter the time the event ended.
- `Collectors`: 
- `Trip code`:
- `Identifier`:
- `Group`:
- `Formation`:
- `Member`:
- `Lithology`:
- `Minumum MA`:
- `Maximum MA`:
- `Custom attributes`:

#### `Biological Associations` inside `Comprehensive specimen digitization Task`

#### `Type material` inside `Comprehensive specimen digitization Task`

