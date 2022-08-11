# Lane Object
The `Lane` object describes an individual lane on the roadway within a road event.

## Properties
Name | Type | Description | Conformance | Notes
--- | --- | --- | --- | ---
`order` | Positive Integer | The position of a lane in sequence on the roadway. This value is used as an index to indicate the order of all lanes provided for a road event, starting with 1 for the left-most lane. | Required | Please see [Business Rule](/Creating_a_WZDx_Feed.md#business-rules) #3.
`type` | [LaneType](/spec-content/enumerated-types/LaneType.md) | An indication of the type of lane or shoulder. | Required | 
`status` | [LaneStatus](/spec-content/enumerated-types/LaneStatus.md) | Status of the lane for the traveling public. | Required |
`restrictions` | Array; [[Restriction](/spec-content/objects/Restriction.md)] | A list of zero or more restrictions specific to the lane. | Optional | 
`lane_number` (DEPRECATED) | Positive Integer | *This property is deprecated; use `order` to indicate lane positions* — The number assigned to the lane to help identify its position. Flexible, but usually used for regular, driveable lanes.

## Used By
Property | Object
--- | ---
`lanes` | [WorkZoneRoadEvent](/spec-content/objects/WorkZoneRoadEvent.md)
`lanes` | [RestrictionRoadEvent](/spec-content/objects/RestrictionRoadEvent.md)
