# Worker Presence Source Status

## Values
Value | Description
--- | ---
`workers-in-work-zone-working` | Humans physically in the work zone event area, doing road work.
`workers-in-work-zone-not-working` | Humans physically in the work zone event area but not performing work.
`mobile-equipment-in-work-zone-moving` | Mobile equipment is moving within the work zone event area, implying the presence of a worker.   
`mobile-equipment-in-work-zone-not-moving` | Mobile equipment is in the work zone event area but is not moving.
`fixed-equipment-in-work-zone` | Fixed equipment is in the work zone event area.
`humans-behind-barrier` | Humans are present in the work zone event area but separated from traffic by a barrier.
`humans-in-right-of-way` | Humans are present on the drivable surface.
## Used By
Property | Object
--- | ---
`worker_presence_definition` | [RoadEventDataSource](/spec-content/objects/RoadEventDataSource.md)
