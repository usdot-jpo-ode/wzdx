# Relationship
The `Relationship` object is used to identify both sequential and hierarchical relationships between a road events and other entities. For example, a relationship can be used to link multiple road events to a common "parent", such as a project or phase, or identify a sequence of road events that make up a larger work zone.

## Properties
Property Name | Data Type | Description | Conformance | Notes
--- | --- | --- | --- | ---
`first` | Array; String | Indicates the first (can be multiple) road event in a sequence of road events. All values in this array should be a road event ID—they should match the `road_event_id` property on a `Road Event` within the same WZDx GeoJSON document. | Optional |
`next` | Array; String | Indicates the next (can be multiple) road event in a sequence of road events. All values in this array should be a road event ID—they should match the `road_event_id` property on a `Road Event` within the same WZDx GeoJSON document. | Optional |
`parents` | Array; String | Indicates entities that the road event with this relationship is a part of, such as a work zone project or phase. | Optional | Values can but do not have to correspond to a WZDx entity
`children` | Array; String | Indicates entities that are part of the road event with this relationship, such as a detour or piece of equipment. | Optional | Values can but do not have to correspond to a WZDx entity

## Appears On
Object Name | Property
--- | ---
[Road Event GeoJSON Feature](/spec-content/objects/road_event_geojson_feature.md) | `Properties`

## Additional Notes
The value of the `Road Event`'s `data_source_id` property must match the value of the `data_source_id` property of a [Road Event Data Source](/spec-content/objects/road_event_data_source.md) that is included in the same feed instance (GeoJSON file).
