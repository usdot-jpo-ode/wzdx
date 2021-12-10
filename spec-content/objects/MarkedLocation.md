# MarkedLocation Object
The `MarkedLocation` object describes a specific location where a [LocationMarker](/spec-content/objects/LocationMarker.md) is placed, such as the start or end of a work zone road event. The marked location is typically within a road event, but is not required to be. 

## Properties 
Name | Type | Description | Conformance | Notes
--- | --- | --- | --- | ---
`type` | [MarkedLocationType](/spec-content/enumerated-types/MarkedLocationType.md) | The type of location (e.g. start or end) that is marked. | Required |
`road_event_id` | String | The ID of a [RoadEventFeature](/spec-content/objects/RoadEventFeature.md) that the `MarkedLocation` applies to. | Optional | This property is optional because the field device information producer may not always have road event information.

## Used By
Property | Object
--- | --- 
`marked_locations` | [LocationMarker](/spec-content/objects/LocationMarker.md)