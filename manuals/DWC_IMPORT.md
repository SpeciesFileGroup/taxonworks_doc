# Darwin Core Archive (DwC-A) import


## Occurrence datasets


### Mappings

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
