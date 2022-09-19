# TrafficSignalMode Enumerated Type
The `TrafficSignalMode` enumerated type describes the current operating mode of a [TrafficSignal](/spec-content/objects/TrafficSignal.md).  

## Values
Value | Description 
--- | ---
`blank` | The signal is not displaying anything.
`flashing-red` | The signal is in a flashing red state that could be part of startup or fault.
`flashing-yellow` | The signal is in a flashing yellow state that could be part of startup or fault.
`fully-actuated` | The signal is using an external trigger for all movements.
`manual` | The signal is using a manual trigger.
`pre-timed` | The signal is using a timed cycle.
`semi-actuated` | The signal is using an external trigger only for the minor movements.
`unknown` | The current operating mode is not known.

## Used By
Property | Object
--- | ---
`mode` | [TrafficSignal](/spec-content/objects/TrafficSignal.md)