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

#### Taxon class

Term|Mapping
---|---
`nomenclaturalCode` | Selects the nomenclatural code for the taxon ranks used when creating protonyms. The value itself is not imported
`kingdom` | Creates (unless already present) a protonym at kingdom rank
`phylum` | Creates (unless already present) a protonym at phylum rank
`class` | Creates (unless already present) a protonym at class rank
`order` | Creates (unless already present) a protonym at order rank
`family` | Creates (unless already present) a protonym at family rank
`genus` | Ignored. Extracted from `scientificName` instead.
`subgenus` | Ignored. Extracted from `scientificName` instead.
`specificEpithet` | Ignored. Extracted from `scientificName` instead.
`infraspecificEpithet` | Ignored. Extracted from `scientificName` instead.
`scientificName` | Several protonyms created (only when not present already) with their corresponding ranks and placements
`taxonRank` | The taxon rank of the most specific protonym
`scientificNameAuthorship` | Verbatim author of most specific protonym
