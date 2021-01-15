# Lane Type 
*Note:* The LaneRoadway enumeration is imported into TMDD from SAE 2540 (ITIS Standard)

A description of the type of a lane on the roadway.

## Values
WZDx Lane Type | Description | TMDD LaneRoadway Enumeration Value
--- | --- | ---
`lane` | Generic lane type, intended to be used for normal, driveable lanes |
`right-turning-lane` | A lane where right turns are permissible | right-turning-lanes (8199)
`left-turning-lane`| A lane where left turns are permissible | left-turning-lanes (8200)
`right-exit-lane` | A lane with an egress on the right |
`left-exit-lane` | A lane with an egress on the left |
`left-exit-ramp`| An exit ramp with an egress on the left in the direction of flow at an interchange | left-exit_ramp (8212)
`right-exit-ramp` | An exit ramp with an egress on the right in the direction of flow at an interchange | right-exit-ramp (8208)
`right-entrance-ramp` | A lane or ramp with an ingress on the right |
`left-entrance-ramp` | A lane or ramp with an ingress on the left |
`sidewalk` | A sidewalk or pedestrian way | sidewalk (8222)
`bike-lane` | A lane on the roadway for cyclists only | cycle-lane (8242)
`shoulder` | A generic shoulder |
`center-left-turn-lane` | A lane in the center of a bidirectional roadway in which traffic from both directions uses to make a left turn |
`left-lane` (DEPRECATED) | *This value is deprecated and will be removed in a future version; use `lane` instead* - The leftmost lane | left-lane (8194)
`right-lane` (DEPRECATED) | *This value is deprecated and will be removed in a future version; use `lane` instead* - The rightmost lane | right-lane (8195)
`middle-lane` (DEPRECATED) | *This value is deprecated and will be removed in a future version; use `lane` instead* - A lane that is not the rightmost or leftmost lane | middle-lanes (8197)
`center-lane` (DEPRECATED) | *This value is deprecated and will be removed in a future version; use `lane` instead* - The center-most lane when the total number of lanes is odd | center-lane (8196)
`right-shoulder` (DEPRECATED) | *This value is deprecated and will be removed in a future version; use `shoulder` instead* — The outer shoulder or the rightmost shoulder | right-shoulder (8219)
`left-shoulder` (DEPRECATED) | *This value is deprecated and will be removed in a future version; use `shoulder` instead* — The inner shoulder or the leftmost shoulder | left-shoulder (8220)
`right-second-exit-ramp` (DEPRECATED) | *This value is deprecated and will be removed in a future version; use `right-exit-lane` instead* — The second exit ramp with an egress on the right in the direction of flow at an interchange | right-second-exit-ramp (8209)
`left-second-exit-ramp` (DEPRECATED) | *This value is deprecated and will be removed in a future version; use `left-exit-lane` instead* — The second exit ramp with an egress on the left in the direction of flow at an interchange | left-second-exit-ramp (8213)
`right-second-entrance-ramp` (DEPRECATED) | *This value is deprecated and will be removed in a future version; use `right-entrance-lane` instead* — The second entrance ramp with an ingress on the right in the direction of flow at an interchange  | right-second-entrance-ramp (8211)
`left-second-entrance-ramp` (DEPRECATED) |  *This value is deprecated and will be removed in a future version; use `left-entrance-lane` instead* — The second entrance ramp with an ingress on the left in the direction of flow at an interchange | left-second-entrance-ramp (8215)
`right-merging-lane` (DEPRECATED) | *This value is deprecated and will be removed in a future version; specify merging lanes via the lane's `status` property* — The right lane where the lane ends with a gradual merge with the second most lane | right-merging-lanes (8206)
`left-merging-lane` (DEPRECATED) | *This value is deprecated and will be removed in a future version; specify merging lanes via the lane's `status` property* — The left lane where the lanes ends by a gradual merge with the second most left lane | left-merging-lanes (8207)
`hov-lane` (DEPRECATED) | *This value is deprecated and will be removed in a future version; specify hovs via the lane's `restrictions` property* — A high-occupancy vehicle lane | hov-lanes (8233)
`alternating-flow-lane` (DEPRECATED) |  *This value is deprecated and will be removed in a future version; specify alternating flow (alternating one way) via the lane's `status` property* — A lane where signal or flagger controls lane flow |
`reversible-lane` (DEPRECATED) | *This value is deprecated and will be removed in a future version; specify reversible status via the lane's `status` property* — A lane in which traffic may travel in either direction, depending on certain conditions such as time of day |

The following values from the TMDD LaneRoadway Enumeration are not used in the WZDx specification:

```
through-lanes (8193)
upper-deck-lanes (8201)
lower-deck-lanes (8202)
reversible-lanes (8203)
escape-ramp (8216)
hard-shoulder (8217)
soft-shoulder (8218)
median (8221)
right-hand-parallel-lanes (8224)
left-hand-parallel-lanes (8225)
connecting-lanes (8226)
express-lanes (8227)
local-lanes (8228)
toll-lanes (8229)
electronic-toll-lanes (8230)
toll-plaza (8231)
inspection-lane (8232)
bus-lanes (8234)
carpool-lanes (8235)
truck-lanes (8236)
emergency-lanes (8237)
passing-lanes (8238)
climbing-lanes (8239)
slow-lane (8240)
service-road (8241)
tracks (8243)
bridge (8244)
overpass (8245)
elevated-lanes (8246)
underpass (8247)
tunnel (8248)
```

## Used By
Property | Object
--- | ---
`type` | [Lane](/spec-content/objects/Lane.md)
