# Direction 
The direction of a roadway. The values are based on the standard naming for US roadways and indicates the direction the traffic flow regardless of the real heading angle of the roadway.

## Values
Value | Description
--- | ---
`northbound`| Road flow is in the northbound direction
`eastbound` | Road flow is in the eastbound direction
`southbound` | Road flow is in the southbound direction
`westbound` | Road flow is in the westbound direction
`undefined` | Used if a data producer has start and end location for a road, but the road doesn't have a direction. Allows data consumers to assume that first coordinate is the start of an actual work zone.
`unknown` | 	Used if a data producer doesn't know for sure which direction of travel is affected (including on a roadway with signed directions). Create an event for each direction and use the `unknown` enumeration. The data consumer cannot safely assume that work is affecting this direction of travel.

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
