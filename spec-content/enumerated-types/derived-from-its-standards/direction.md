# Direction 
*Note:*  Link-alignment is imported from TMDD

The direction for a roadway is based on the standard naming for US roadways and indicates the direction the traffic flow regardless of the real heading angle of the roadway.

## Enumeration
WZDx Direction | TMDD Link-alignment Enumeration Value | Description
--- | --- | --
`northbound`| northbound (1) | Road flow is in the northbound direction
`eastbound` | eastbound (2) | Road flow is in the eastbound direction
`southbound` | southbound (3) | Road flow is in the southbound direction
`westbound` | westbound (4) | Road flow is in the westbound direction

The following values from the Link-alignment Enumeration are not used in the WZDx specification:
```
inner-loop (5)
outer-loop (6)
```

## Used By
The **Direction** enumeration is used by the following fields

Field Name | Data Table
--- | ---
direction | [road_events](/spec-content/data-tables/road_events.md)
