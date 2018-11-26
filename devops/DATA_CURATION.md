

# Data Curation

Assuming you have access to the application environment there are a number of tools that can be used to curate/maintain data.

_Existing tasks are in [/lib/tasks/curate/curate.rake](https://github.com/SpeciesFileGroup/taxonworks/blob/development/lib/tasks/curate/curate.rake)

## Sqed pre-processing

(re)Calculate the boundaries for Sqed depictions.

`rake tw:curate:recalculate_sqed_boundaries project_id=1 id_start=123 id_end=456`

The params `id_start` and `id_end` are optional.  Running the task without the range will return the start/end ids.

## DWCA indexing

Collection object records are indexed on demand.  A rake task will do the indexing in the background:

`bundle exec rake tw:curate:build_dwc_occurrences RAILS_ENV=production total=1000`

Task is project agnostic, picks records that are not already indexed. Defaults batches to 500 records, increase with `total=` param.
 Can be safely interrupted, wraps calls in small transactions.
