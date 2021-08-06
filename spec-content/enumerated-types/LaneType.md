# Lane Type 
A description of the type of a lane on the roadway.

## Values
Value | Description
--- | ---
`general` | A generic lane type, intended to be used for general purpose travel lanes.
`exit-lane` | A lane leading towards an egress from the current roadway. An `exit-lane` usually becomes an `exit-ramp` after a gore point.
`exit-ramp`| A lane at an interchange leading away from the mainline to another roadway.
`entrance-lane` | A lane leading towards an ingress to another roadway. An `entrance-lane` usually becomes an `entrance-ramp` after a gore point.
`entrance-ramp` | A lane at an interchange leading away from the current roadway to another roadway.
`sidewalk` | A path for pedestrians, usually on the side of the roadway.
`bike-lane` | A lane on the roadway for use by cyclists only.
`shoulder` | A portion of the roadway that is outside (either right or left) of the main travel lanes on the roadway. A shoulder can have many uses but is not intended for general traffic.
`parking` | A lane used for parking, not allowed for travel.
`median` | An often unpaved, non-drivable area that separates sections of the roadway. In most cases a median should only be described if it separates lanes in a single direction of travel, as per [business rule #1](/create-feed/README.md) each direction of travel must be represented a separate road event.
`center-left-turn-lane` | A lane in the center of a bidirectional roadway that traffic from both directions uses to make a left turn.

## Used By
Property | Object
--- | ---
`type` | [Lane](/spec-content/objects/Lane.md)

## Additional Information
The LaneType enumerated type was originally based on the TMDD LaneRoadway Enumeration, which is imported into TMDD from SAE 2540 (ITIS Standard).

In later release, other standards were examined for inspiration. These include SAE J2735 and the ISO 20524-1 Geographic Data Files (GDF) standard.