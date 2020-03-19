[Back to USERS.md](USERS.md)

# Glossary

_A FAQ of sorts that treats words used in the context of TaxonWorks, digitization, etc.  With brief definitions or pointers to where information is found._

### Buffered
A prefix (`buffered_`) used to indicate verbatim text that is part of a CollectionObject record. Buffered fields are used TaxonWorks in a digitization workflow as the first step of transcribing labels, or images, to digital data. Buffered fields are write-once, they after addition they should not be changed, nor do they track changes to `parsed` values.

### Naïve matching    
Used in context of tracing text in `buffered` fields to the `verbatim` fields include parsed out values.  "Naïve" means we anticipate a very simple match, string to string, no fuzziness, no AI, etc.

### Parsing
Breaking down `buffered` or `verbatim` values into further fields, or semantic relationships.

### Parsed values
In TaxonWorks `parsed values` are the formalized representation of the data.  For example the verbatim date "12.iv.1997" parsed into three fields in TaxonWorks: `start_date_day` (12), `start_date_month` (4), `start_date_year (1997).

### Staged
A reference to a digitization process in where all data are layed out for complete capture within an image.  TaxonWorks uses stages that have areas defined to match specific types of data, for example "Catalog numbers", "Specimen", "Image registration".

### Stage 2
A temporary(?) code-name referencing a step in the digitization process that represents moving from Buffered or Verbatim values to `parsed values`.

### Verbatim fields
Verbatim fields in TaxonWorks are a small set of CollectingEvent fields that contain parts of the Verbatim or Buffered values.  For example given a label like:
```
USA:TX:Brazos Co.
Lick Creek Park
12.iv.1997
M. Yoder, YPT
```
Then the TaxonWorks verbatim fields `verbatim_locality` would contain 'Lick Creek Park' and the `verbatim_date` would include `12.iv.1997`.
