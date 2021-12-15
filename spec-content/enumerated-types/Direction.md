# Direction 
The direction of a roadway. The values are based on the standard naming for US roadways and indicates the direction the traffic flow regardless of the real heading angle of the roadway.

## Values
Value | Description
--- | ---
`northbound`| Road flow is in the northbound direction
`eastbound` | Road flow is in the eastbound direction
`southbound` | Road flow is in the southbound direction
`westbound` | Road flow is in the westbound direction

## Used By
Property | Object
--- | ---
`direction` | [RoadEventCoreDetails](/spec-content/objects/RoadEventCoreDetails.md)

## Additional Information
The `Direction` enumerated type values were based on the TMDD Link-alignment Enumeration, which contains the following values:

```
northbound (1)
eastbound (2)
southbound (3)
westbound (4)
inner-loop (5)
outer-loop (6)
```
