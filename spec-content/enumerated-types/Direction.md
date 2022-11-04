# Direction 
The direction of a roadway. The values are based on the standard naming for US roadways and indicates the direction the traffic flow regardless of the real heading angle of the roadway.

## Values
Value | Description
--- | ---
`northbound`| Road flow is in the northbound direction
`eastbound` | Road flow is in the eastbound direction
`southbound` | Road flow is in the southbound direction
`westbound` | Road flow is in the westbound direction
`inner-loop` | Road flow is on the inner loop of a ring road or beltway. In countries that drive on the right side of the road, this is the clockwise direction.
`outer-loop` | Road flow is on the outer loop of a ring road or beltway. In countries that drive on the right side of the road, this is the counter-clockwise direction.
`undefined` | Road flow does not have a signed direction. For a [RoadEventFeature](/spec-content/objects/RoadEventFeature.md), the first and last coordinates in the feature's geometry represent the beginning and end of the road event in the direction of travel it impacts.
`unknown` | Road flow may have a signed direction, but the affected direction of travel is not known

## Used By
Property | Object
--- | ---
`direction` | [RoadEventCoreDetails](/spec-content/objects/RoadEventCoreDetails.md)
`road_direction` | [FieldDeviceCoreDetails](/spec-content/objects/FieldDeviceCoreDetails.md)

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
