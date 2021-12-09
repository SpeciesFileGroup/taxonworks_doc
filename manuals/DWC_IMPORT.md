# Darwin Core Archive (DwC-A) import


## Occurrence datasets

### DwC terms mappings

#### Record-level class

Term|Mapping
---|---
`type` | It is checked that it equals `PhysicalObject` before allowing the record to be imported. If the value is empty or term not present it is assumed it is a `PhysicalObject`
`institutionCode` | Selects the repository for the specimen that is registered with an acronym equal to this value
`collectionCode` | Paired with `institutionCode` it is used to select the namespace for `catalogNumber` from a user-defined lookup table in import settings, the value itself is not imported.
`basisOfRecord` | It is checked that it equals `PreservedSpecimen` before allowing the record to be imported. If the value is empty or term not present it is assumed it is a `PreservedSpecimen`

#### Occurrence class

Term|Mapping
---|---
`catalogNumber` | The identifier value for Catalog Number local identifier. The namespace is selected from the namespaces lookup table in import settings queried by `institutionCode`:`collectionCode` pair.
`recordedBy` | It is imported as-is in verbatim collectors field of the collecting event. Additionally, the value is parsed into people and assigned as collectors of the CE. Previously existing people is not used unless the data origin is the same dataset the record belongs to, otherwise any missing people is created.
`individualCount` | The total individuals count of the specimen record.
`sex` | Selects the biocuration class from the "sex" biocuration group to be assigned as biocuration classification for the specimen.
`preparations` | Selects an existing preparation matching the name with this value

#### Event class

Term|Mapping
---|---
`fieldNumber` | Verbatim trip identifier of collecting event
`eventDate` | The ISO8601-formatted date is split into start year, month and day collecting event fields. If the value is composed of two dates separated by `/`, then rightmost date is used as end date and split in the same way as start date. If data contradicts dates from other non-empty date-related terms the record will fail to import
`eventTime` | Time is split into time start hour, minute and second of collecting event
`startDayOfYear` | Using `year` and the value for this term month and day are calculated and stored in start year, month and day collecting event fields. If the computed value contradicts dates from other non-empty date-related terms the record will fail to import
`endDayOfYear` |  Using `year` and the value for this term month and day are calculated and stored in end year, month and day collecting event fields. If the computed value contradicts dates from other non-empty date-related terms the record will fail to import
`year` | The start date year of the collecting event. If the value contradicts dates from other non-empty date-related terms the record will fail to import
`month` | The start date month of the collecting event. If the value contradicts dates from other non-empty date-related terms the record will fail to import
`day` | The start date day of the collecting event. If the value contradicts dates from other non-empty date-related terms the record will fail to import
`verbatimDate` | Verbatim date of the collecting event
`habitat` | Verbatim habitat of the collecting event
`samplingProtocol` | Verbatim method of the collecting event
`fieldNotes` | Field notes of the collecting event

#### Location class

Term|Mapping
---|---
`fieldNumber` | Verbatim trip identifier of collecting event

#### Taxon class

Term|Mapping
---|---
`nomenclaturalCode` | Selects the nomenclatural code for the taxon ranks used when creating protonyms. The value itself is not imported
`kingdom` | Creates (unless already present) a protonym at kingdom rank
`phylum` | Creates (unless already present) a protonym at phylum rank
`class` | Creates (unless already present) a protonym at class rank
`order` | Creates (unless already present) a protonym at order rank
`family` | Creates (unless already present) a protonym at family rank
`genus` | Ignored. Extracted from `scientificName` instead
`subgenus` | Ignored. Extracted from `scientificName` instead
`specificEpithet` | Ignored. Extracted from `scientificName` instead
`infraspecificEpithet` | Ignored. Extracted from `scientificName` instead
`scientificName` | Several protonyms created (only when not present already) with their corresponding ranks and placements
`taxonRank` | The taxon rank of the most specific protonym
`higherClassification` | Several protonyms created (only when not present already) with their corresponding ranks and placement. In case a protonym was not already present, only family-group names will be created, names with classsification higher than family-group not previously registered will result in error. Names at genus rank or lower are ignored and extracted from `scientificName` instead
`scientificNameAuthorship` | Verbatim author of most specific protonym

### TW non-standard mappings

The DwC importer has some TW-specific mappings that are neither DwC core terms nor extensions but direct mappings to predicates in your projects imported as data attributes for collection objects and collecting events, biocuration groups and classes, and as an advanced-use feature you may have direct mappings to model fields.

**IMPORTANT**: If submitting an actual DwC-A zip file and not tab-separated text file or spreadsheet, this TW-specific mappings have to be placed as headers in the core table, and not in meta.xml. If you are replacing a mapping from meta.xml, you must make sure to comment it out and also if inserting colums make sure you do the appropriate adjustments to avoid collision.

#### Mappings to project predicates

In cases where you need to import predicate values targetting the imported collection object or collecting event you may do so by naming the column with a pattern like `TW:DataAttribute:<target_class>:<predicate_identifier>`.
`<target_class>` may be `CollectionObject` or `CollectingEvent`, and the `<predicate_identifier>` may be the either the name of the predicate or its URI. As an example if you have a predicate registered with name `ageInDays` and URI `http://rs.gbif.org/terms/1.0/ageInDays`, both `TW:DataAttribute:CollectionObject:ageInDays` and `TW:DataAttribute:CollectionObject:http://rs.gbif.org/terms/1.0/ageInDays` can be used to refer to the same predicate.

#### Mappings to biocuration groups and classes

The importer is able to map `sex` into the appropriate biocuration group and select the approriate class according to the value. For additional mappings you may use a special column name pattern to select a biocuration group like `TW::BiocurationGroup:<group_identifier>` where `<group_identifier>` can be the name of the biocuration group or its URI. In addition the values must match an existing biocuration class and you may use either its name or URI. For example, if you have a biocuration group registerd with name `Caste` and URI `urn:example:ants:caste` and biocuration class with name `Queen` and URI `urn:example:ants:caste:queen` the following examples do all create the same biocuration classification:
|Caste|urn:example:ants:caste|
|---|---|
Queen|urn:example:ants:caste:queen
urn:example:ants:caste:queen|Queen
#### Mappings to DwC predicates

Whenever the importer sees that your project has custom attributes for collecting events and/or collection objects that matches Darwin Core URI terms (`http://rs.tdwg.org/dwc/terms/<term>`), them will be imported as data attributes regardless of any existing mapping of the same field. This allows to preserve verbatim dataaset value for reference as also to import data from terms not supported by the importer.

#### Direct mapping to TW model fields (advanced)

This is an advance mapping and requires knowledge of the underlying TW models. The pattern is `TW:<model_class>:<field>` where model can be either `CollectionObject` or `CollectingEvent`, and `<field>` can be the ones listed below.

|Class|fields|
|---|---|
|`CollectionObject`|`buffered_collecting_event`, `buffered_determinations`, `buffered_other_labels`, `total`,
|CollectingEvent|`document_label`, `print_label`, `verbatim_label`, `field_notes`, `formation`, `group`, `lithology`, `max_ma`, `maximum_elevation`, `member`, `min_ma`, `minimum_elevation`, `elevation_precision`, `start_date_day`, `start_date_month`, `start_date_year`, `end_date_day`, `end_date_month`, `end_date_year`, `time_end_hour`, `time_end_minute`, `time_end_second`, `time_start_hour`, `time_start_minute`, `time_start_second`, `verbatim_collectors`, `verbatim_date`, `verbatim_datum`, `verbatim_elevation`, `verbatim_geolocation_uncertainty`, `verbatim_habitat`, `verbatim_latitude`, `verbatim_locality`, `verbatim_longitude`, `verbatim_method`, `verbatim_trip_identifier`
