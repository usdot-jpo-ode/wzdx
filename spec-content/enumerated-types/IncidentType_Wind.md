# IncidentType_Wind Enumerated Type
Values describe events that have detoured, restricted, or closed a road.

## Values
Value | Description
--- | ---
`calm-winds` | Calm, operations normal. (windspeed: <1 mph / <1 km/h)
`light-winds` | Light winds may interrupt normal operations. (windspeed: 1-12 mph / 1-19 km/h)
`moderate-winds` | Moderate winds may interrupt normal operations. (windspeed: 13-18 mph / 20-28 km/h)
`windy` | Conditions are windy. Use Caution. (windspeed: 19-24 mph / 29-38 km/h)
`strong-winds` | Strong winds interrupt normal operations. (windspeed: 25-38 mph / 39-61 km/h)
`gale-force-winds` | Gale force winds interrupt normal operations. (windspeed: 39-54 mph / 62-88 km/h)
`storm-force-winds` | Storm force winds or a tropical storm interrupts normal operations. (windspeed: 55-72 mph / 89-117 km/h)
`hurricane-force-winds` | Hurricane force winds or a hurricane interrupts normal operations. (windspeed: >73 mph / >117 km/h)
`tornado` | A tornado interrupts normal operations. 
`crosswinds` | Crosswinds interrupt normal operations.
`gusty-winds` | Gusty winds interrupt normal operations.

## Used By
Property | Object
--- | ---
`type_of_incident` | [IncidentRoadEvent](/spec-content/objects/IncidentRoadEvent.md)
