# Tables
_This file auto-generated 2025-06-17 14:33:39 -0500 via 'rake tw:docs:table_markdown'. Do not hand-edit._

[alternate_values](#alternate-values), [asserted_distributions](#asserted-distributions), [attributions](#attributions), [biocuration_classifications](#biocuration-classifications), [biological_associations](#biological-associations), [biological_associations_biological_associations_graphs](#biological-associations-biological-associations-graphs), [biological_associations_graphs](#biological-associations-graphs), [biological_relationship_types](#biological-relationship-types), [biological_relationships](#biological-relationships), [cached_map_item_translations](#cached-map-item-translations), [cached_map_items](#cached-map-items), [cached_map_registers](#cached-map-registers), [cached_maps](#cached-maps), [character_states](#character-states), [citation_topics](#citation-topics), [citations](#citations), [collecting_events](#collecting-events), [collection_object_observations](#collection-object-observations), [collection_objects](#collection-objects), [collection_profiles](#collection-profiles), [common_names](#common-names), [confidences](#confidences), [container_items](#container-items), [containers](#containers), [contents](#contents), [controlled_vocabulary_terms](#controlled-vocabulary-terms), [conveyances](#conveyances), [data_attributes](#data-attributes), [dataset_record_fields](#dataset-record-fields), [dataset_records](#dataset-records), [depictions](#depictions), [derived_collection_objects](#derived-collection-objects), [descriptors](#descriptors), [documentation](#documentation), [documents](#documents), [downloads](#downloads), [extracts](#extracts), [field_occurrences](#field-occurrences), [gazetteers](#gazetteers), [gene_attributes](#gene-attributes), [geographic_area_types](#geographic-area-types), [geographic_areas](#geographic-areas), [geographic_areas_geographic_items](#geographic-areas-geographic-items), [geographic_items](#geographic-items), [georeferences](#georeferences), [identifiers](#identifiers), [images](#images), [import_datasets](#import-datasets), [labels](#labels), [languages](#languages), [leads](#leads), [loan_items](#loan-items), [loans](#loans), [namespaces](#namespaces), [notes](#notes), [observation_matrices](#observation-matrices), [observation_matrix_column_items](#observation-matrix-column-items), [observation_matrix_columns](#observation-matrix-columns), [observation_matrix_row_items](#observation-matrix-row-items), [observation_matrix_rows](#observation-matrix-rows), [observations](#observations), [organizations](#organizations), [origin_relationships](#origin-relationships), [otu_page_layout_sections](#otu-page-layout-sections), [otu_page_layouts](#otu-page-layouts), [otu_relationships](#otu-relationships), [otus](#otus), [people](#people), [preparation_types](#preparation-types), [project_members](#project-members), [project_sources](#project-sources), [protocol_relationships](#protocol-relationships), [protocols](#protocols), [ranged_lot_categories](#ranged-lot-categories), [repositories](#repositories), [roles](#roles), [sequence_relationships](#sequence-relationships), [sequences](#sequences), [serial_chronologies](#serial-chronologies), [serials](#serials), [sled_images](#sled-images), [sounds](#sounds), [sources](#sources), [sqed_depictions](#sqed-depictions), [tagged_section_keywords](#tagged-section-keywords), [tags](#tags), [taxon_determinations](#taxon-determinations), [taxon_name_classifications](#taxon-name-classifications), [taxon_name_relationships](#taxon-name-relationships), [taxon_names](#taxon-names), [type_materials](#type-materials)
## alternate_values
[top](#tables),[er](/develop/Data/models.html#alternate-value),[rdoc](https://rdoc.taxonworks.org/AlternateValue.html)

|Name|Type|
|----|----|
|id|integer|
|alternate_value_object_attribute|character varying|
|alternate_value_object_id|integer|
|alternate_value_object_type|character varying|
|[language](#languages)_id|integer|
|type|character varying|
|value|text|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
|project_id|integer|
## asserted_distributions
[top](#tables),[er](/develop/Data/models.html#asserted-distribution),[rdoc](https://rdoc.taxonworks.org/AssertedDistribution.html),[api](https://api.taxonworks.org/#/asserted_distributions)

|Name|Type|
|----|----|
|id|integer|
|asserted_distribution_shape_id|integer|
|asserted_distribution_shape_type|character varying|
|geographic_area_id|integer|
|is_absent|boolean|
|[otu](#otus)_id|integer|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
|project_id|integer|
## attributions
[top](#tables),[er](/develop/Data/models.html#attribution),[rdoc](https://rdoc.taxonworks.org/Attribution.html)

|Name|Type|
|----|----|
|id|bigint|
|attribution_object_id|bigint|
|attribution_object_type|character varying|
|copyright_year|integer|
|license|character varying|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
|project_id|bigint|
## biocuration_classifications
[top](#tables),[er](/develop/Data/models.html#biocuration-classification),[rdoc](https://rdoc.taxonworks.org/BiocurationClassification.html)

|Name|Type|
|----|----|
|id|integer|
|[biocuration_class](#controlled_vocabulary_terms)_id|integer|
|biocuration_classification_object_id|bigint|
|biocuration_classification_object_type|character varying|
|[biological_collection_object](#collection_objects)_id|bigint|
|position|integer|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
|project_id|integer|
## biological_associations
[top](#tables),[er](/develop/Data/models.html#biological-association),[rdoc](https://rdoc.taxonworks.org/BiologicalAssociation.html),[api](https://api.taxonworks.org/#/biological_associations)

|Name|Type|
|----|----|
|id|integer|
|biological_association_object_id|integer|
|biological_association_object_type|character varying|
|biological_association_subject_id|integer|
|biological_association_subject_type|character varying|
|biological_relationship_id|integer|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
|project_id|integer|
## biological_associations_biological_associations_graphs
[top](#tables),[er](/develop/Data/models.html#biological-associations-biological-associations-graph),[rdoc](https://rdoc.taxonworks.org/BiologicalAssociationsBiologicalAssociationsGraph.html)

|Name|Type|
|----|----|
|id|integer|
|biological_association_id|integer|
|biological_associations_graph_id|integer|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
|project_id|integer|
## biological_associations_graphs
[top](#tables),[er](/develop/Data/models.html#biological-associations-graph),[rdoc](https://rdoc.taxonworks.org/BiologicalAssociationsGraph.html)

|Name|Type|
|----|----|
|id|integer|
|layout|jsonb|
|name|character varying|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
|project_id|integer|
## biological_relationship_types
[top](#tables),[er](/develop/Data/models.html#biological-relationship-type),[rdoc](https://rdoc.taxonworks.org/BiologicalRelationshipType.html)

|Name|Type|
|----|----|
|id|integer|
|biological_property_id|integer|
|biological_relationship_id|integer|
|type|character varying|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
|project_id|integer|
## biological_relationships
[top](#tables),[er](/develop/Data/models.html#biological-relationship),[rdoc](https://rdoc.taxonworks.org/BiologicalRelationship.html),[api](https://api.taxonworks.org/#/biological_relationships)

|Name|Type|
|----|----|
|id|integer|
|definition|text|
|inverted_name|character varying|
|is_reflexive|boolean|
|is_transitive|boolean|
|name|character varying|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
|project_id|integer|
## cached_map_item_translations
[top](#tables),[er](/develop/Data/models.html#cached-map-item-translation),[rdoc](https://rdoc.taxonworks.org/CachedMapItemTranslation.html)

|Name|Type|
|----|----|
|id|bigint|
|cached_map_type|character varying|
|geographic_item_id|bigint|
|translated_geographic_item_id|bigint|
|created_at|timestamp(6) without time zone|
|updated_at|timestamp(6) without time zone|
## cached_map_items
[top](#tables),[er](/develop/Data/models.html#cached-map-item),[rdoc](https://rdoc.taxonworks.org/CachedMapItem.html)

|Name|Type|
|----|----|
|id|bigint|
|geographic_item_id|bigint|
|is_absent|boolean|
|level0_geographic_name|character varying|
|level1_geographic_name|character varying|
|level2_geographic_name|character varying|
|[otu](#otus)_id|bigint|
|reference_count|integer|
|type|character varying|
|untranslated|boolean|
|created_at|timestamp(6) without time zone|
|updated_at|timestamp(6) without time zone|
|project_id|bigint|
## cached_map_registers
[top](#tables),[er](/develop/Data/models.html#cached-map-register),[rdoc](https://rdoc.taxonworks.org/CachedMapRegister.html)

|Name|Type|
|----|----|
|id|bigint|
|cached_map_register_object_id|bigint|
|cached_map_register_object_type|character varying|
|created_at|timestamp(6) without time zone|
|updated_at|timestamp(6) without time zone|
|project_id|bigint|
## cached_maps
[top](#tables),[er](/develop/Data/models.html#cached-map),[rdoc](https://rdoc.taxonworks.org/CachedMap.html),[api](https://api.taxonworks.org/#/cached_maps)

|Name|Type|
|----|----|
|id|bigint|
|cached_map_type|character varying|
|geometry|geography(Geometry,4326)|
|[otu](#otus)_id|bigint|
|reference_count|integer|
|created_at|timestamp(6) without time zone|
|updated_at|timestamp(6) without time zone|
|project_id|bigint|
## character_states
[top](#tables),[er](/develop/Data/models.html#character-state),[rdoc](https://rdoc.taxonworks.org/CharacterState.html)

|Name|Type|
|----|----|
|id|integer|
|description_name|character varying|
|[descriptor](#descriptors)_id|integer|
|key_name|character varying|
|label|character varying|
|name|character varying|
|position|integer|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
|project_id|integer|
## citation_topics
[top](#tables),[er](/develop/Data/models.html#citation-topic),[rdoc](https://rdoc.taxonworks.org/CitationTopic.html)

|Name|Type|
|----|----|
|id|integer|
|[citation](#citations)_id|integer|
|pages|character varying|
|[topic](#controlled_vocabulary_terms)_id|integer|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
|project_id|integer|
## citations
[top](#tables),[er](/develop/Data/models.html#citation),[rdoc](https://rdoc.taxonworks.org/Citation.html),[api](https://api.taxonworks.org/#/citations)

|Name|Type|
|----|----|
|id|integer|
|citation_object_id|integer|
|citation_object_type|character varying|
|is_original|boolean|
|pages|character varying|
|[source](#sources)_id|integer|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
|project_id|integer|
## collecting_events
[top](#tables),[er](/develop/Data/models.html#collecting-event),[rdoc](https://rdoc.taxonworks.org/CollectingEvent.html),[api](https://api.taxonworks.org/#/collecting_events)

|Name|Type|
|----|----|
|id|integer|
|cached|text|
|cached_level0_geographic_name|character varying|
|cached_level1_geographic_name|character varying|
|cached_level2_geographic_name|character varying|
|document_label|text|
|elevation_precision|character varying|
|end_date_day|integer|
|end_date_month|integer|
|end_date_year|integer|
|field_notes|text|
|formation|character varying|
|geographic_area_id|integer|
|group|character varying|
|lithology|character varying|
|max_ma|numeric|
|maximum_elevation|numeric|
|md5_of_verbatim_label|character varying|
|member|character varying|
|meta_prioritize_geographic_area|boolean|
|min_ma|numeric|
|minimum_elevation|numeric|
|print_label|text|
|start_date_day|integer|
|start_date_month|integer|
|start_date_year|integer|
|time_end_hour|smallint|
|time_end_minute|smallint|
|time_end_second|smallint|
|time_start_hour|smallint|
|time_start_minute|smallint|
|time_start_second|smallint|
|verbatim_collectors|character varying|
|verbatim_date|character varying|
|verbatim_datum|character varying|
|verbatim_elevation|character varying|
|verbatim_field_number|character varying|
|verbatim_geolocation_uncertainty|character varying|
|verbatim_habitat|text|
|verbatim_label|text|
|verbatim_latitude|character varying|
|verbatim_locality|character varying|
|verbatim_longitude|character varying|
|verbatim_method|character varying|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
|project_id|integer|
## collection_object_observations
[top](#tables),[er](/develop/Data/models.html#collection-object-observation),[rdoc](https://rdoc.taxonworks.org/CollectionObjectObservation.html)

|Name|Type|
|----|----|
|id|integer|
|data|text|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
|project_id|integer|
## collection_objects
[top](#tables),[er](/develop/Data/models.html#collection-object),[rdoc](https://rdoc.taxonworks.org/CollectionObject.html),[api](https://api.taxonworks.org/#/collection_objects)

|Name|Type|
|----|----|
|id|integer|
|accessioned_at|date|
|buffered_collecting_event|text|
|buffered_determinations|text|
|buffered_other_labels|text|
|collecting_event_id|integer|
|current_repository_id|integer|
|deaccession_reason|character varying|
|deaccessioned_at|date|
|preparation_type_id|integer|
|ranged_lot_category_id|integer|
|[repository](#repositories)_id|integer|
|total|integer|
|type|character varying|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
|project_id|integer|
## collection_profiles
[top](#tables),[er](/develop/Data/models.html#collection-profile),[rdoc](https://rdoc.taxonworks.org/CollectionProfile.html)

|Name|Type|
|----|----|
|id|integer|
|arrangement_level|integer|
|collection_type|character varying|
|computerization_level|integer|
|condition_of_labels|integer|
|conservation_status|integer|
|container_condition|integer|
|[container](#containers)_id|integer|
|data_quality|integer|
|identification_level|integer|
|number_of_collection_objects|integer|
|number_of_containers|integer|
|[otu](#otus)_id|integer|
|processing_state|integer|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
|project_id|integer|
## common_names
[top](#tables),[er](/develop/Data/models.html#common-name),[rdoc](https://rdoc.taxonworks.org/CommonName.html),[api](https://api.taxonworks.org/#/common_names)

|Name|Type|
|----|----|
|id|integer|
|end_year|integer|
|geographic_area_id|integer|
|[language](#languages)_id|integer|
|name|character varying|
|[otu](#otus)_id|integer|
|start_year|integer|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
|project_id|integer|
## confidences
[top](#tables),[er](/develop/Data/models.html#confidence),[rdoc](https://rdoc.taxonworks.org/Confidence.html)

|Name|Type|
|----|----|
|id|integer|
|confidence_level_id|integer|
|confidence_object_id|integer|
|confidence_object_type|character varying|
|position|integer|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
|project_id|integer|
## container_items
[top](#tables),[er](/develop/Data/models.html#container-item),[rdoc](https://rdoc.taxonworks.org/ContainerItem.html)

|Name|Type|
|----|----|
|id|integer|
|contained_object_id|integer|
|contained_object_type|character varying|
|disposition|character varying|
|disposition_x|integer|
|disposition_y|integer|
|disposition_z|integer|
|parent_id|integer|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
|project_id|integer|
## containers
[top](#tables),[er](/develop/Data/models.html#container),[rdoc](https://rdoc.taxonworks.org/Container.html)

|Name|Type|
|----|----|
|id|integer|
|disposition|character varying|
|name|character varying|
|print_label|text|
|size_x|integer|
|size_y|integer|
|size_z|integer|
|type|character varying|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
|project_id|integer|
## contents
[top](#tables),[er](/develop/Data/models.html#content),[rdoc](https://rdoc.taxonworks.org/Content.html),[api](https://api.taxonworks.org/#/contents)

|Name|Type|
|----|----|
|id|integer|
|[language](#languages)_id|bigint|
|[otu](#otus)_id|integer|
|revision_id|integer|
|text|text|
|[topic](#controlled_vocabulary_terms)_id|integer|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
|project_id|integer|
## controlled_vocabulary_terms
[top](#tables),[er](/develop/Data/models.html#controlled-vocabulary-term),[rdoc](https://rdoc.taxonworks.org/ControlledVocabularyTerm.html),[api](https://api.taxonworks.org/#/controlled_vocabulary_terms)

|Name|Type|
|----|----|
|id|integer|
|css_color|character varying|
|definition|text|
|name|character varying|
|position|integer|
|type|character varying|
|uri|character varying|
|uri_relation|character varying|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
|project_id|integer|
## conveyances
[top](#tables),[er](/develop/Data/models.html#conveyance),[rdoc](https://rdoc.taxonworks.org/Conveyance.html),[api](https://api.taxonworks.org/#/conveyances)

|Name|Type|
|----|----|
|id|bigint|
|conveyance_object_id|bigint|
|conveyance_object_type|character varying|
|end_time|numeric|
|position|integer|
|[sound](#sounds)_id|bigint|
|start_time|numeric|
|created_by_id|bigint|
|updated_by_id|bigint|
|created_at|timestamp(6) without time zone|
|updated_at|timestamp(6) without time zone|
|project_id|bigint|
## data_attributes
[top](#tables),[er](/develop/Data/models.html#data-attribute),[rdoc](https://rdoc.taxonworks.org/DataAttribute.html),[api](https://api.taxonworks.org/#/data_attributes)

|Name|Type|
|----|----|
|id|integer|
|attribute_subject_id|integer|
|attribute_subject_type|character varying|
|controlled_vocabulary_term_id|integer|
|import_predicate|character varying|
|type|character varying|
|value|text|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
|project_id|integer|
## dataset_record_fields
[top](#tables),[er](/develop/Data/models.html#dataset-record-field),[rdoc](https://rdoc.taxonworks.org/DatasetRecordField.html)

|Name|Type|
|----|----|
|id|bigint|
|dataset_record_id|bigint|
|encoded_dataset_record_type|integer|
|import_dataset_id|integer|
|position|integer|
|value|character varying|
|project_id|integer|
## dataset_records
[top](#tables),[er](/develop/Data/models.html#dataset-record),[rdoc](https://rdoc.taxonworks.org/DatasetRecord.html)

|Name|Type|
|----|----|
|id|bigint|
|import_dataset_id|bigint|
|metadata|jsonb|
|status|character varying|
|type|character varying|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp(6) without time zone|
|updated_at|timestamp(6) without time zone|
|project_id|bigint|
## depictions
[top](#tables),[er](/develop/Data/models.html#depiction),[rdoc](https://rdoc.taxonworks.org/Depiction.html),[api](https://api.taxonworks.org/#/depictions)

|Name|Type|
|----|----|
|id|integer|
|caption|text|
|depiction_object_id|integer|
|depiction_object_type|character varying|
|figure_label|character varying|
|[image](#images)_id|integer|
|is_metadata_depiction|boolean|
|position|integer|
|sled_image_id|bigint|
|sled_image_x_position|integer|
|sled_image_y_position|integer|
|svg_clip|xml|
|svg_view_box|character varying|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
|project_id|integer|
## derived_collection_objects
[top](#tables),[er](/develop/Data/models.html#derived-collection-object),[rdoc](https://rdoc.taxonworks.org/DerivedCollectionObject.html)

|Name|Type|
|----|----|
|id|integer|
|collection_object_id|integer|
|collection_object_observation_id|integer|
|position|integer|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
|project_id|integer|
## descriptors
[top](#tables),[er](/develop/Data/models.html#descriptor),[rdoc](https://rdoc.taxonworks.org/Descriptor.html)

|Name|Type|
|----|----|
|id|integer|
|cached_gene_attribute_sql|character varying|
|default_unit|character varying|
|description|text|
|description_name|character varying|
|gene_attribute_logic|character varying|
|key_name|character varying|
|name|character varying|
|position|integer|
|short_name|character varying|
|type|character varying|
|weight|integer|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
|project_id|integer|
## documentation
[top](#tables),[er](/develop/Data/models.html#documentation),[rdoc](https://rdoc.taxonworks.org/Documentation.html)

|Name|Type|
|----|----|
|id|integer|
|[document](#documents)_id|integer|
|documentation_object_id|integer|
|documentation_object_type|character varying|
|position|integer|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
|project_id|integer|
## documents
[top](#tables),[er](/develop/Data/models.html#document),[rdoc](https://rdoc.taxonworks.org/Document.html)

|Name|Type|
|----|----|
|id|integer|
|document_file_content_type|character varying|
|document_file_file_name|character varying|
|document_file_file_size|integer|
|document_file_fingerprint|character varying|
|document_file_updated_at|timestamp without time zone|
|is_public|boolean|
|page_map|jsonb|
|page_total|integer|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
|project_id|integer|
## downloads
[top](#tables),[er](/develop/Data/models.html#download),[rdoc](https://rdoc.taxonworks.org/Download.html),[api](https://api.taxonworks.org/#/downloads)

|Name|Type|
|----|----|
|id|bigint|
|description|character varying|
|expires|timestamp without time zone|
|filename|character varying|
|is_public|boolean|
|name|character varying|
|request|character varying|
|times_downloaded|integer|
|total_records|integer|
|type|character varying|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
|project_id|bigint|
## extracts
[top](#tables),[er](/develop/Data/models.html#extract),[rdoc](https://rdoc.taxonworks.org/Extract.html)

|Name|Type|
|----|----|
|id|integer|
|day_made|integer|
|month_made|integer|
|[repository](#repositories)_id|bigint|
|verbatim_anatomical_origin|character varying|
|year_made|integer|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
|project_id|integer|
## field_occurrences
[top](#tables),[er](/develop/Data/models.html#field-occurrence),[rdoc](https://rdoc.taxonworks.org/FieldOccurrence.html),[api](https://api.taxonworks.org/#/field_occurrences)

|Name|Type|
|----|----|
|id|bigint|
|collecting_event_id|bigint|
|is_absent|boolean|
|ranged_lot_category_id|bigint|
|total|integer|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp(6) without time zone|
|updated_at|timestamp(6) without time zone|
|project_id|bigint|
## gazetteers
[top](#tables),[er](/develop/Data/models.html#gazetteer),[rdoc](https://rdoc.taxonworks.org/Gazetteer.html)

|Name|Type|
|----|----|
|id|bigint|
|geographic_item_id|integer|
|iso_3166_a2|character varying|
|iso_3166_a3|character varying|
|name|character varying|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp(6) without time zone|
|updated_at|timestamp(6) without time zone|
|project_id|bigint|
## gene_attributes
[top](#tables),[er](/develop/Data/models.html#gene-attribute),[rdoc](https://rdoc.taxonworks.org/GeneAttribute.html)

|Name|Type|
|----|----|
|id|integer|
|controlled_vocabulary_term_id|integer|
|[descriptor](#descriptors)_id|integer|
|position|integer|
|[sequence](#sequences)_id|integer|
|sequence_relationship_type|character varying|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
|project_id|integer|
## geographic_area_types
[top](#tables),[er](/develop/Data/models.html#geographic-area-type),[rdoc](https://rdoc.taxonworks.org/GeographicAreaType.html)

|Name|Type|
|----|----|
|id|integer|
|name|character varying|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
## geographic_areas
[top](#tables),[er](/develop/Data/models.html#geographic-area),[rdoc](https://rdoc.taxonworks.org/GeographicArea.html)

|Name|Type|
|----|----|
|id|integer|
|data_origin|character varying|
|geographic_area_type_id|integer|
|iso_3166_a2|character varying|
|iso_3166_a3|character varying|
|level0_id|integer|
|level1_id|integer|
|level2_id|integer|
|name|character varying|
|parent_id|integer|
|tdwgID|character varying|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
## geographic_areas_geographic_items
[top](#tables),[er](/develop/Data/models.html#geographic-areas-geographic-item),[rdoc](https://rdoc.taxonworks.org/GeographicAreasGeographicItem.html)

|Name|Type|
|----|----|
|id|integer|
|data_origin|character varying|
|date_valid_from|character varying|
|date_valid_to|character varying|
|geographic_area_id|integer|
|geographic_item_id|integer|
|origin_gid|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
## geographic_items
[top](#tables),[er](/develop/Data/models.html#geographic-item),[rdoc](https://rdoc.taxonworks.org/GeographicItem.html)

|Name|Type|
|----|----|
|id|integer|
|cached_total_area|numeric|
|geography|geography(GeometryZ,4326)|
|type|character varying|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
## georeferences
[top](#tables),[er](/develop/Data/models.html#georeference),[rdoc](https://rdoc.taxonworks.org/Georeference.html)

|Name|Type|
|----|----|
|id|integer|
|api_request|character varying|
|collecting_event_id|integer|
|day_georeferenced|integer|
|error_depth|numeric|
|error_geographic_item_id|integer|
|error_radius|numeric|
|geographic_item_id|integer|
|is_public|boolean|
|month_georeferenced|integer|
|position|integer|
|type|character varying|
|year_georeferenced|integer|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
|project_id|integer|
## identifiers
[top](#tables),[er](/develop/Data/models.html#identifier),[rdoc](https://rdoc.taxonworks.org/Identifier.html),[api](https://api.taxonworks.org/#/identifiers)

|Name|Type|
|----|----|
|id|integer|
|cached|text|
|cached_numeric_identifier|double precision|
|identifier|character varying|
|identifier_object_id|integer|
|identifier_object_type|character varying|
|[namespace](#namespaces)_id|integer|
|position|integer|
|relation|character varying|
|type|character varying|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
|project_id|integer|
## images
[top](#tables),[er](/develop/Data/models.html#image),[rdoc](https://rdoc.taxonworks.org/Image.html),[api](https://api.taxonworks.org/#/images)

|Name|Type|
|----|----|
|id|integer|
|height|integer|
|image_file_content_type|character varying|
|image_file_file_name|character varying|
|image_file_file_size|integer|
|image_file_fingerprint|character varying|
|image_file_meta|text|
|image_file_updated_at|timestamp without time zone|
|pixels_to_centimeter|double precision|
|user_file_name|character varying|
|width|integer|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
|project_id|integer|
## import_datasets
[top](#tables),[er](/develop/Data/models.html#import-dataset),[rdoc](https://rdoc.taxonworks.org/ImportDataset.html)

|Name|Type|
|----|----|
|id|bigint|
|description|character varying|
|metadata|jsonb|
|source_content_type|character varying|
|source_file_name|character varying|
|source_file_size|bigint|
|source_updated_at|timestamp without time zone|
|status|character varying|
|type|character varying|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp(6) without time zone|
|updated_at|timestamp(6) without time zone|
|project_id|bigint|
## labels
[top](#tables),[er](/develop/Data/models.html#label),[rdoc](https://rdoc.taxonworks.org/Label.html)

|Name|Type|
|----|----|
|id|bigint|
|is_copy_edited|boolean|
|is_printed|boolean|
|label_object_id|bigint|
|label_object_type|character varying|
|style|character varying|
|text|character varying|
|total|integer|
|type|character varying|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
|project_id|integer|
## languages
[top](#tables),[er](/develop/Data/models.html#language),[rdoc](https://rdoc.taxonworks.org/Language.html)

|Name|Type|
|----|----|
|id|integer|
|alpha_2|character varying|
|alpha_3_bibliographic|character varying|
|alpha_3_terminologic|character varying|
|english_name|character varying|
|french_name|character varying|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
## leads
[top](#tables),[er](/develop/Data/models.html#lead),[rdoc](https://rdoc.taxonworks.org/Lead.html),[api](https://api.taxonworks.org/#/leads)

|Name|Type|
|----|----|
|id|bigint|
|description|text|
|is_public|boolean|
|link_out|text|
|link_out_text|character varying|
|origin_label|character varying|
|[otu](#otus)_id|bigint|
|parent_id|bigint|
|position|integer|
|redirect_id|bigint|
|text|text|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp(6) without time zone|
|updated_at|timestamp(6) without time zone|
|project_id|bigint|
## loan_items
[top](#tables),[er](/develop/Data/models.html#loan-item),[rdoc](https://rdoc.taxonworks.org/LoanItem.html)

|Name|Type|
|----|----|
|id|integer|
|date_returned|date|
|disposition|character varying|
|[loan](#loans)_id|integer|
|loan_item_object_id|integer|
|loan_item_object_type|character varying|
|position|integer|
|total|integer|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
|project_id|integer|
## loans
[top](#tables),[er](/develop/Data/models.html#loan),[rdoc](https://rdoc.taxonworks.org/Loan.html)

|Name|Type|
|----|----|
|id|integer|
|date_closed|date|
|date_received|date|
|date_requested|date|
|date_return_expected|date|
|date_sent|date|
|is_gift|boolean|
|lender_address|text|
|recipient_address|character varying|
|recipient_country|character varying|
|recipient_email|character varying|
|recipient_honorific|character varying|
|recipient_phone|character varying|
|request_method|character varying|
|supervisor_email|character varying|
|supervisor_phone|character varying|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
|project_id|integer|
## namespaces
[top](#tables),[er](/develop/Data/models.html#namespace),[rdoc](https://rdoc.taxonworks.org/Namespace.html)

|Name|Type|
|----|----|
|id|integer|
|delimiter|character varying|
|institution|character varying|
|is_virtual|boolean|
|name|character varying|
|short_name|character varying|
|verbatim_short_name|character varying|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
## notes
[top](#tables),[er](/develop/Data/models.html#note),[rdoc](https://rdoc.taxonworks.org/Note.html),[api](https://api.taxonworks.org/#/notes)

|Name|Type|
|----|----|
|id|integer|
|note_object_attribute|character varying|
|note_object_id|integer|
|note_object_type|character varying|
|text|text|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
|project_id|integer|
## observation_matrices
[top](#tables),[er](/develop/Data/models.html#observation-matrix),[rdoc](https://rdoc.taxonworks.org/ObservationMatrix.html),[api](https://api.taxonworks.org/#/observation_matrices)

|Name|Type|
|----|----|
|id|integer|
|is_public|boolean|
|name|character varying|
|[otu](#otus)_id|bigint|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
|project_id|integer|
## observation_matrix_column_items
[top](#tables),[er](/develop/Data/models.html#observation-matrix-column-item),[rdoc](https://rdoc.taxonworks.org/ObservationMatrixColumnItem.html)

|Name|Type|
|----|----|
|id|integer|
|controlled_vocabulary_term_id|integer|
|[descriptor](#descriptors)_id|integer|
|observation_matrix_id|integer|
|position|integer|
|type|character varying|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
|project_id|integer|
## observation_matrix_columns
[top](#tables),[er](/develop/Data/models.html#observation-matrix-column),[rdoc](https://rdoc.taxonworks.org/ObservationMatrixColumn.html)

|Name|Type|
|----|----|
|id|integer|
|cached_observation_matrix_column_item_id|integer|
|[descriptor](#descriptors)_id|integer|
|observation_matrix_id|integer|
|position|integer|
|reference_count|integer|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
|project_id|integer|
## observation_matrix_row_items
[top](#tables),[er](/develop/Data/models.html#observation-matrix-row-item),[rdoc](https://rdoc.taxonworks.org/ObservationMatrixRowItem.html)

|Name|Type|
|----|----|
|id|integer|
|controlled_vocabulary_term_id|integer|
|observation_matrix_id|integer|
|observation_object_id|integer|
|observation_object_type|character varying|
|position|integer|
|taxon_name_id|bigint|
|type|character varying|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
|project_id|integer|
## observation_matrix_rows
[top](#tables),[er](/develop/Data/models.html#observation-matrix-row),[rdoc](https://rdoc.taxonworks.org/ObservationMatrixRow.html)

|Name|Type|
|----|----|
|id|integer|
|cached_observation_matrix_row_item_id|integer|
|name|character varying|
|observation_matrix_id|integer|
|observation_object_id|integer|
|observation_object_type|character varying|
|position|integer|
|reference_count|integer|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
|project_id|integer|
## observations
[top](#tables),[er](/develop/Data/models.html#observation),[rdoc](https://rdoc.taxonworks.org/Observation.html),[api](https://api.taxonworks.org/#/observations)

|Name|Type|
|----|----|
|id|integer|
|cached|character varying|
|cached_column_label|character varying|
|cached_row_label|character varying|
|character_state_id|integer|
|continuous_unit|character varying|
|continuous_value|numeric|
|day_made|integer|
|description|text|
|[descriptor](#descriptors)_id|integer|
|frequency|character varying|
|month_made|integer|
|observation_object_id|integer|
|observation_object_type|character varying|
|presence|boolean|
|sample_max|numeric|
|sample_mean|numeric|
|sample_median|numeric|
|sample_min|numeric|
|sample_n|integer|
|sample_standard_deviation|numeric|
|sample_standard_error|numeric|
|sample_units|character varying|
|time_made|time without time zone|
|type|character varying|
|year_made|integer|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
|project_id|integer|
## organizations
[top](#tables),[er](/develop/Data/models.html#organization),[rdoc](https://rdoc.taxonworks.org/Organization.html)

|Name|Type|
|----|----|
|id|bigint|
|address|character varying|
|alternate_name|character varying|
|area_served_id|integer|
|department_id|integer|
|description|text|
|disambiguating_description|text|
|duns|character varying|
|email|character varying|
|global_location_number|character varying|
|legal_name|character varying|
|name|character varying|
|parent_organization_id|integer|
|same_as_id|integer|
|telephone|character varying|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
## origin_relationships
[top](#tables),[er](/develop/Data/models.html#origin-relationship),[rdoc](https://rdoc.taxonworks.org/OriginRelationship.html)

|Name|Type|
|----|----|
|id|integer|
|new_object_id|integer|
|new_object_type|character varying|
|old_object_id|integer|
|old_object_type|character varying|
|position|integer|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
|project_id|integer|
## otu_page_layout_sections
[top](#tables),[er](/develop/Data/models.html#otu-page-layout-section),[rdoc](https://rdoc.taxonworks.org/OtuPageLayoutSection.html)

|Name|Type|
|----|----|
|id|integer|
|dynamic_content_class|character varying|
|otu_page_layout_id|integer|
|position|integer|
|[topic](#controlled_vocabulary_terms)_id|integer|
|type|character varying|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
|project_id|integer|
## otu_page_layouts
[top](#tables),[er](/develop/Data/models.html#otu-page-layout),[rdoc](https://rdoc.taxonworks.org/OtuPageLayout.html)

|Name|Type|
|----|----|
|id|integer|
|name|character varying|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
|project_id|integer|
## otu_relationships
[top](#tables),[er](/develop/Data/models.html#otu-relationship),[rdoc](https://rdoc.taxonworks.org/OtuRelationship.html)

|Name|Type|
|----|----|
|id|bigint|
|object_otu_id|integer|
|subject_otu_id|integer|
|type|character varying|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp(6) without time zone|
|updated_at|timestamp(6) without time zone|
|project_id|bigint|
## otus
[top](#tables),[er](/develop/Data/models.html#otu),[rdoc](https://rdoc.taxonworks.org/Otu.html),[api](https://api.taxonworks.org/#/otus)

|Name|Type|
|----|----|
|id|integer|
|name|text|
|taxon_name_id|integer|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
|project_id|integer|
## people
[top](#tables),[er](/develop/Data/models.html#person),[rdoc](https://rdoc.taxonworks.org/Person.html),[api](https://api.taxonworks.org/#/people)

|Name|Type|
|----|----|
|id|integer|
|cached|text|
|first_name|character varying|
|last_name|character varying|
|prefix|character varying|
|suffix|character varying|
|type|character varying|
|year_active_end|integer|
|year_active_start|integer|
|year_born|integer|
|year_died|integer|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
## preparation_types
[top](#tables),[er](/develop/Data/models.html#preparation-type),[rdoc](https://rdoc.taxonworks.org/PreparationType.html)

|Name|Type|
|----|----|
|id|integer|
|definition|text|
|name|character varying|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
## project_members
[top](#tables),[er](/develop/Data/models.html#project-member),[rdoc](https://rdoc.taxonworks.org/ProjectMember.html)

|Name|Type|
|----|----|
|id|integer|
|clipboard|jsonb|
|is_project_administrator|boolean|
|last_seen_at|timestamp without time zone|
|time_active|integer|
|user_id|integer|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
|project_id|integer|
## project_sources
[top](#tables),[er](/develop/Data/models.html#project-source),[rdoc](https://rdoc.taxonworks.org/ProjectSource.html)

|Name|Type|
|----|----|
|id|integer|
|[source](#sources)_id|integer|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
|project_id|integer|
## protocol_relationships
[top](#tables),[er](/develop/Data/models.html#protocol-relationship),[rdoc](https://rdoc.taxonworks.org/ProtocolRelationship.html)

|Name|Type|
|----|----|
|id|integer|
|position|integer|
|[protocol](#protocols)_id|integer|
|protocol_relationship_object_id|integer|
|protocol_relationship_object_type|character varying|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
|project_id|integer|
## protocols
[top](#tables),[er](/develop/Data/models.html#protocol),[rdoc](https://rdoc.taxonworks.org/Protocol.html)

|Name|Type|
|----|----|
|id|integer|
|description|text|
|is_machine_output|boolean|
|name|character varying|
|short_name|text|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
|project_id|integer|
## ranged_lot_categories
[top](#tables),[er](/develop/Data/models.html#ranged-lot-category),[rdoc](https://rdoc.taxonworks.org/RangedLotCategory.html)

|Name|Type|
|----|----|
|id|integer|
|maximum_value|integer|
|minimum_value|integer|
|name|character varying|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
|project_id|integer|
## repositories
[top](#tables),[er](/develop/Data/models.html#repository),[rdoc](https://rdoc.taxonworks.org/Repository.html)

|Name|Type|
|----|----|
|id|integer|
|acronym|character varying|
|institutional_LSID|character varying|
|is_index_herbariorum|boolean|
|name|character varying|
|status|character varying|
|url|character varying|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
## roles
[top](#tables),[er](/develop/Data/models.html#role),[rdoc](https://rdoc.taxonworks.org/Role.html)

|Name|Type|
|----|----|
|id|integer|
|[organization](#organizations)_id|bigint|
|[person](#people)_id|integer|
|position|integer|
|role_object_id|integer|
|role_object_type|character varying|
|type|character varying|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
|project_id|integer|
## sequence_relationships
[top](#tables),[er](/develop/Data/models.html#sequence-relationship),[rdoc](https://rdoc.taxonworks.org/SequenceRelationship.html)

|Name|Type|
|----|----|
|id|integer|
|[object_sequence](#sequences)_id|integer|
|[subject_sequence](#sequences)_id|integer|
|type|character varying|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
|project_id|integer|
## sequences
[top](#tables),[er](/develop/Data/models.html#sequence),[rdoc](https://rdoc.taxonworks.org/Sequence.html)

|Name|Type|
|----|----|
|id|integer|
|name|character varying|
|sequence|text|
|sequence_type|character varying|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
|project_id|integer|
## serial_chronologies
[top](#tables),[er](/develop/Data/models.html#serial-chronology),[rdoc](https://rdoc.taxonworks.org/SerialChronology.html)

|Name|Type|
|----|----|
|id|integer|
|[preceding_serial](#serials)_id|integer|
|[succeeding_serial](#serials)_id|integer|
|type|character varying|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
## serials
[top](#tables),[er](/develop/Data/models.html#serial),[rdoc](https://rdoc.taxonworks.org/Serial.html)

|Name|Type|
|----|----|
|id|integer|
|first_year_of_issue|smallint|
|is_electronic_only|boolean|
|last_year_of_issue|smallint|
|name|text|
|place_published|character varying|
|[primary_language](#languages)_id|integer|
|publisher|text|
|[translated_from_serial](#serials)_id|integer|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
## sled_images
[top](#tables),[er](/develop/Data/models.html#sled-image),[rdoc](https://rdoc.taxonworks.org/SledImage.html)

|Name|Type|
|----|----|
|id|bigint|
|cached_total_collection_objects|integer|
|cached_total_columns|integer|
|cached_total_rows|integer|
|[image](#images)_id|bigint|
|metadata|jsonb|
|object_layout|jsonb|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp(6) without time zone|
|updated_at|timestamp(6) without time zone|
|project_id|bigint|
## sounds
[top](#tables),[er](/develop/Data/models.html#sound),[rdoc](https://rdoc.taxonworks.org/Sound.html),[api](https://api.taxonworks.org/#/sounds)

|Name|Type|
|----|----|
|id|bigint|
|name|text|
|created_by_id|bigint|
|updated_by_id|bigint|
|created_at|timestamp(6) without time zone|
|updated_at|timestamp(6) without time zone|
|project_id|bigint|
## sources
[top](#tables),[er](/develop/Data/models.html#source),[rdoc](https://rdoc.taxonworks.org/Source.html),[api](https://api.taxonworks.org/#/sources)

|Name|Type|
|----|----|
|id|integer|
|abstract|text|
|address|character varying|
|annote|character varying|
|author|text|
|bibtex_type|character varying|
|booktitle|character varying|
|cached|text|
|cached_author_string|text|
|cached_nomenclature_date|date|
|chapter|character varying|
|copyright|text|
|crossref|character varying|
|day|smallint|
|doi|character varying|
|edition|character varying|
|editor|character varying|
|howpublished|character varying|
|institution|character varying|
|isbn|character varying|
|issn|character varying|
|journal|character varying|
|key|character varying|
|language|character varying|
|[language](#languages)_id|integer|
|month|character varying|
|note|character varying|
|number|character varying|
|organization|character varying|
|pages|character varying|
|publisher|character varying|
|school|character varying|
|[serial](#serials)_id|integer|
|series|character varying|
|stated_year|character varying|
|title|text|
|translator|character varying|
|type|character varying|
|url|character varying|
|verbatim|character varying|
|verbatim_contents|text|
|verbatim_keywords|text|
|volume|character varying|
|year|smallint|
|year_suffix|character varying|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
## sqed_depictions
[top](#tables),[er](/develop/Data/models.html#sqed-depiction),[rdoc](https://rdoc.taxonworks.org/SqedDepiction.html)

|Name|Type|
|----|----|
|id|integer|
|boundary_color|character varying|
|boundary_finder|character varying|
|[depiction](#depictions)_id|integer|
|has_border|boolean|
|in_progress|timestamp without time zone|
|layout|character varying|
|metadata_map|jsonb|
|result_boundary_coordinates|jsonb|
|result_ocr|jsonb|
|specimen_coordinates|jsonb|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
|project_id|integer|
## tagged_section_keywords
[top](#tables),[er](/develop/Data/models.html#tagged-section-keyword),[rdoc](https://rdoc.taxonworks.org/TaggedSectionKeyword.html)

|Name|Type|
|----|----|
|id|integer|
|[keyword](#controlled_vocabulary_terms)_id|integer|
|otu_page_layout_section_id|integer|
|position|integer|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
|project_id|integer|
## tags
[top](#tables),[er](/develop/Data/models.html#tag),[rdoc](https://rdoc.taxonworks.org/Tag.html),[api](https://api.taxonworks.org/#/tags)

|Name|Type|
|----|----|
|id|integer|
|[keyword](#controlled_vocabulary_terms)_id|integer|
|position|integer|
|tag_object_attribute|character varying|
|tag_object_id|integer|
|tag_object_type|character varying|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
|project_id|integer|
## taxon_determinations
[top](#tables),[er](/develop/Data/models.html#taxon-determination),[rdoc](https://rdoc.taxonworks.org/TaxonDetermination.html)

|Name|Type|
|----|----|
|id|integer|
|[biological_collection_object](#collection_objects)_id|bigint|
|day_made|integer|
|month_made|integer|
|[otu](#otus)_id|integer|
|position|integer|
|print_label|text|
|taxon_determination_object_id|bigint|
|taxon_determination_object_type|character varying|
|year_made|integer|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
|project_id|integer|
## taxon_name_classifications
[top](#tables),[er](/develop/Data/models.html#taxon-name-classification),[rdoc](https://rdoc.taxonworks.org/TaxonNameClassification.html),[api](https://api.taxonworks.org/#/taxon_name_classifications)

|Name|Type|
|----|----|
|id|integer|
|taxon_name_id|integer|
|type|character varying|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
|project_id|integer|
## taxon_name_relationships
[top](#tables),[er](/develop/Data/models.html#taxon-name-relationship),[rdoc](https://rdoc.taxonworks.org/TaxonNameRelationship.html),[api](https://api.taxonworks.org/#/taxon_name_relationships)

|Name|Type|
|----|----|
|id|integer|
|object_taxon_name_id|integer|
|subject_taxon_name_id|integer|
|type|character varying|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
|project_id|integer|
## taxon_names
[top](#tables),[er](/develop/Data/models.html#taxon-name),[rdoc](https://rdoc.taxonworks.org/TaxonName.html),[api](https://api.taxonworks.org/#/taxon_names)

|Name|Type|
|----|----|
|id|integer|
|cached|text|
|cached_author|text|
|cached_author_year|text|
|cached_classified_as|text|
|cached_gender|text|
|cached_html|text|
|cached_is_available|boolean|
|cached_is_valid|boolean|
|cached_misspelling|boolean|
|cached_nomenclature_date|date|
|cached_original_combination|text|
|cached_original_combination_html|text|
|cached_primary_homonym|text|
|cached_primary_homonym_alternative_spelling|text|
|cached_secondary_homonym|text|
|cached_secondary_homonym_alternative_spelling|text|
|cached_valid_taxon_name_id|integer|
|etymology|text|
|feminine_name|text|
|masculine_name|text|
|name|text|
|neuter_name|text|
|parent_id|integer|
|rank_class|text|
|type|character varying|
|verbatim_author|text|
|verbatim_name|text|
|year_of_publication|integer|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
|project_id|integer|
## type_materials
[top](#tables),[er](/develop/Data/models.html#type-material),[rdoc](https://rdoc.taxonworks.org/TypeMaterial.html)

|Name|Type|
|----|----|
|id|integer|
|collection_object_id|integer|
|[protonym](#taxon_name)_id|integer|
|type_type|character varying|
|created_by_id|integer|
|updated_by_id|integer|
|created_at|timestamp without time zone|
|updated_at|timestamp without time zone|
|project_id|integer|
