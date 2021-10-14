# Relationship Object
The `Relationship` object is used to identify both sequential and hierarchical relationships between a road events and other entities. For example, a relationship can be used to link multiple road events to a common "parent", such as a project or phase, or identify a sequence of road events that make up a larger work zone.

## Properties
Name | Type | Description | Conformance | Notes
--- | --- | --- | --- | ---
`first` | Array; \[String\] | Indicates the first (can be multiple) road event in a sequence of road events. All values in this array should be a road event ID—they should match the `id` property on a `RoadEventFeature` within the same WZDx GeoJSON document. | Optional |
`next` | Array; \[String\] | Indicates the next (can be multiple) road event in a sequence of road events. All values in this array should be a road event ID—they should match the `id` property on a `RoadEventFeature` within the same WZDx GeoJSON document. | Optional |
`parents` | Array; \[String\] | Indicates entities that the road event with this relationship is a part of, such as a work zone project or phase. Values can but do not have to correspond to a WZDx entity. | Optional | 
`children` | Array; \[String\] | Indicates entities that are part of the road event with this relationship, such as a detour or piece of equipment. Values can but do not have to correspond to a WZDx entity. | Optional | 

## Used By
Property | Object
--- | ---
`relationship` | [RoadEventCoreDetails](/spec-content/objects/RoadEventCoreDetails.md)

## Important Notes
The value of all elements in the `Relationship`'s `first` or `next` properties must match the value of the `id` property of a [RoadEventFeature](/spec-content/objects/RoadEventFeature.md) that is included in the same WZDx GeoJSON document.
