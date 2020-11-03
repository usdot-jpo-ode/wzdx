# Lane
The `Lane` object describes an individual lane on the roadway within a road event.

## Properties
Property Name | Data Type | Description | Conformance | Notes
--- | --- | --- | --- | ---
`order` | Positive Integer | The position of a lane in sequence on the roadway. This value is used as an index to indicate the order of all WZDx lanes provided for a road event. | Required | A value of `1` must represent the **left-most** lane and an increase in 1 must represent moving a single lane over from the **left**.
`type` | [Lane Type Enumerated Type](/spec-content/enumerated-types/derived-from-its-standards/lane_type.md) | An indication of the type of lane or shoulder. | Required | 
`status` | [Lane Status Enumerated Type](/spec-content/enumerated-types/lane_status.md) | Status of the lane for the traveling public. | Required |
`lane_number` | Positive Integer | The number assigned to the lane to help identify its position. Flexible, but usually used for regular, driveable lanes. | Optional | Assigned by counting from the **left** edge of the improved surface. Useful for text to voice translation.
`restrictions` | Array; \[[LaneRestriction](/spec-content/objects/LaneRestriction.md)\] | A list of specific restrictions that apply to the lane. | Optional | 

## Appears On
Object Name | Property
--- | ---
[Road Event](/spec-content/objects/road_event.md) | `lanes`