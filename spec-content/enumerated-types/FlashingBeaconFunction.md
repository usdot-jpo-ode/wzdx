# FlashingBeaconFunction Enumerated Type
The FlashingBeaconFunction enumerated type describes a list of options for what a [FlashingBeacon](/spec-content/objects/FlashingBeacon.md) is being used to indicate.

## Values
Value | Description
--- | ---
`vehicle-entering` | Vehicles are entering the roadway.
`queue-warning` | There is a queue of vehicles.
`reduced-speed` | There is a reduced speed limit.
`workers-present` | There are workers are present on or near the roadway.

## Used By
Property | Object
--- | ---
`function` | [FlashingBeacon](/spec-content/objects/FlashingBeacon.md)