# FlashingBeaconFunction Enumerated Type
The FlashingBeaconFunction enumerated type describes a list of options for what a [FlashingBeacon](/spec-content/objects/FlashingBeacon.md) is being used to indicate.

## Values
Value | Description
--- | ---
`vehicle-entering` | The beacon's function is to indicate vehicles are entering the roadway.
`queue-warning` | The beacon's function is to indicate there is a queue of vehicles.
`reduced-speed` | The beacon's function is to designate a reduced speed limit.
`workers-present` | The beacon's function is to indicate that workers are present on or near the roadway.

## Used By
Property | Object
--- | ---
`function` | [FlashingBeacon](/spec-content/objects/FlashingBeacon.md)