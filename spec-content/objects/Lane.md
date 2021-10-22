# Lane Object
The `Lane` object describes an individual lane on the roadway within a road event.

## Properties
Name | Type | Description | Conformance | Notes
--- | --- | --- | --- | ---
`order` | Positive Integer | The position of a lane in sequence on the roadway. This value is used as an index to indicate the order of all WZDx lanes provided for a road event. | Required | A value of `1` must represent the **left-most** lane and an increase in 1 must represent moving a single lane over from the **left**.
`type` | [LaneType](/spec-content/enumerated-types/LaneType.md) | An indication of the type of lane or shoulder. | Required | 
`status` | [LaneStatus](/spec-content/enumerated-types/LaneStatus.md) | Status of the lane for the traveling public. | Required |
`lane_number` | Positive Integer | The number assigned to the lane to help identify its position. Flexible, but usually used for regular, driveable lanes. | Optional | Assigned by counting from the **left** edge of the improved surface. Useful for text to voice translation.
`restrictions` | Array; [[Restriction](/spec-content/objects/Restriction.md)] | A list of zero or more restrictions specific to the lane. | Optional | 

## Used By
Property | Object
--- | ---
`lanes` | [RoadEvent](/spec-content/objects/RoadEvent.md)
