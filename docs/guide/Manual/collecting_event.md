---
sidebarPosition: 205
---
# Collecting Events
_A collecting event represents a unique combination of time, space, collector, and method_.


## Collecting event related tasks

### Filter collecting events

#### Facets

##### Geographic area

Requires that a GeographicArea be selected.  

There are 3 settings:
* `Exact` - Return all records that have this, and only this, geographic area selected. Searches on `CollectingEvent#geographic_area_id`.
* `Descendants` - Return all records that have the geographic area(s) _or_ their descendants selected.  Searches on `CollectingEvent#geographic_area_id and GeograpihcArea#parent_id`.
* `Spatial` - If the geographic area has a shape tied to it this is permitted. Combine the results of the `Descentants` search *and* a spatial search referencing Georeferences and return all records that match either. In additions to fields in `Descendants` also does a spatial search on `GeographicItem#<shape or point>` as linked through `Georeference#geographic_item_id` and further to Collecting event via `Georeference#collecting_event_id`.
