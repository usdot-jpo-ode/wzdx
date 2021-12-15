# WorkerPresenceDefinition Enumerated Type
Situations in which workers may be considered present in a work zone.

## Values
Value | Description
--- | ---
`workers-in-work-zone-working` | Humans are physically in the work zone event area, doing road work.
`workers-in-work-zone-not-working` | Humans are physically in the work zone event area but not performing work.
`mobile-equipment-in-work-zone-moving` | Mobile equipment is moving within the work zone event area, implying the presence of a worker.   
`mobile-equipment-in-work-zone-not-moving` | Mobile equipment is in the work zone event area but is not moving.
`fixed-equipment-in-work-zone` | Fixed equipment is in the work zone event area.
`humans-behind-barrier` | Humans are present in the work zone event area but separated from traffic by a barrier.
`humans-in-right-of-way` | Humans are present on the drivable surface.

## Used By
Property | Object
--- | ---
`definition` | [WorkerPresence](/spec-content/objects/WorkerPresence.md)
