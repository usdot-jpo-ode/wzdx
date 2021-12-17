# MarkedLocationType Enumerated Type
The `MarkedLocationType` enumerated type describes options for what a [MarkedLocation](/spec-content/objects/MarkedLocation.md) can mark, such as the start or end of a road event.

## Values
Value | Description
--- | ---
`afad` | An automatic flagger assistance device.
`flagger` | A human who is directing traffic.
`lane-shift` | A lane shift.
`lane-closure` | One or more lanes are closed.
`temporary-traffic-signal` | A temporary traffic signal.
`road-event-start` | The start point of a road event.
`road-event-intermediate` | A middle point of a road event.
`road-event-end` | The end point of a road event.
`road-event-undetermined` | A point in a road event of undetermined order.
`work-zone-start` | The start point of a work zone.
`work-zone-intermediate` | A middle point of a work zone.
`work-zone-end` | The end point of a work zone.
`work-zone-undetermined` | A point in a work zone of undetermined order.

## Used By
Property | Object
--- | ---
`type` | [MarkedLocation](/spec-content/objects/MarkedLocation.md)
