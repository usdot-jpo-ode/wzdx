# MarkedLocationType Enumerated Type
The `MarkedLocationType` enumerated type describes options for what a [MarkedLocation](/spec-content/objects/MarkedLocation.md) can mark, such as the start or end of a road event.

## Values
Value | Description
--- | ---
`afad` | An automatic flagger assistance device.
`delineator` | A generic delineation point in a work zone. This value can be used for most types of marked locations that don't match any of the other values.
`flagger` | A human who is directing traffic.
`lane-shift` | A lane shift.
`lane-closure` | One or more lanes are closed.
`personal-device` | A connected device that is worn or carried by an individual worker in a work zone.
`ramp-closure` | The start of a closed ramp onto or off a main road or highway.
`road-closure` | The start of a closed road.
`road-event-start` | The start point of a road event.
`road-event-end` | The end point of a road event.
`work-zone-start` | The start point of a work zone.
`work-zone-end` | The end point of a work zone.
`temporary-traffic-signal` (DEPRECATED) | A temporary traffic signal. *This property will be removed in a future release; use [TrafficSignal](../objects/TrafficSignal.md) instead.*

## Used By
Property | Object
--- | --- 
`type` | [MarkedLocation](/spec-content/objects/MarkedLocation.md)