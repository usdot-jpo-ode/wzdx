# VehicleImpact Enumerated Type
The impact to vehicular lanes along a single road in a single direction.

## Values
Value | Description
--- | ---
`all-lanes-closed` | All lanes are closed
`some-lanes-closed` | Some lanes are closed
`all-lanes-open` | All lanes are open
`alternating-one-way` | The roadway is alternating one way
`some-lanes-closed-merge-left` | Some lanes merge to the left
`some-lanes-closed-merge-right` | Some lanes merge to the right
`all-lanes-open-shift-left` | All lanes are open, shift to the left
`all-lanes-open-shift-right` | All lanes are open, shift to the right
`some-lanes-closed-split` | Some lanes end and split & merge to the right and left
`flagging` | A flagging operation is in effect
`temporary-traffic-signal` | A temporary traffic signal is in operation
`unknown` | The vehicle impact is unknown

## Used By
Property | Object
--- | ---
`vehicle_impact` | [WorkZoneRoadEvent](/spec-content/objects/WorkZoneRoadEvent.md)
