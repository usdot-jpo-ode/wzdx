# WorkZoneType Enumerated Type
The type of work zone road event.

## Values
Value | Description
--- | ---
`static` | The road event statically placed - not moving.
`moving` | The road event is actively moving on the roadway. As opposed to `planned-moving-area`, the road event geometry changes at the operation moves.
`planned-moving-area` | The planned extent of a moving operation.  The active work area will be somewhere within this road event.  As opposed to `moving`, the road event geometry typically does not actively change.

## Used By
Property | Object
--- | ---
`work_zone_type` | [WorkZoneRoadEvent](/spec-content/objects/WorkZoneRoadEvent.md)
