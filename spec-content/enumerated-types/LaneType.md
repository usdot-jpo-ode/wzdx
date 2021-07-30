# Lane Type 
A description of the type of a lane on the roadway.

## Values
Value | Description
--- | ---
`general` | The most generic lane type, intended to be used for general purpose travel lanes.
`right-turning-lane` | A lane where right turns are permissible
`left-turning-lane`| A lane where left turns are permissible
`right-exit-lane` | A lane with an egress on the right
`left-exit-lane` | A lane with an egress on the left
`left-exit-ramp`| An exit ramp with an egress on the left in the direction of flow at an interchange
`right-exit-ramp` | An exit ramp with an egress on the right in the direction of flow at an interchange
`right-entrance-ramp` | A lane or ramp with an ingress on the right
`left-entrance-ramp` | A lane or ramp with an ingress on the left
`sidewalk` | A sidewalk or pedestrian way
`bike-lane` | A lane on the roadway for cyclists only
`shoulder` | A generic shoulder
`center-left-turn-lane` | A lane in the center of a bidirectional roadway in which traffic from both directions uses to make a left turn
`left-lane` (DEPRECATED) | *This value is deprecated and will be removed in a future version; use `lane` instead* - The leftmost lane
`right-lane` (DEPRECATED) | *This value is deprecated and will be removed in a future version; use `lane` instead* - The rightmost lane
`middle-lane` (DEPRECATED) | *This value is deprecated and will be removed in a future version; use `lane` instead* - A lane that is not the rightmost or leftmost lane
`center-lane` (DEPRECATED) | *This value is deprecated and will be removed in a future version; use `lane` instead* - The center-most lane when the total number of lanes is odd
`right-shoulder` (DEPRECATED) | *This value is deprecated and will be removed in a future version; use `shoulder` instead* — The outer shoulder or the rightmost shoulder
`left-shoulder` (DEPRECATED) | *This value is deprecated and will be removed in a future version; use `shoulder` instead* — The inner shoulder or the leftmost shoulder
`right-second-exit-ramp` (DEPRECATED) | *This value is deprecated and will be removed in a future version; use `right-exit-lane` instead* — The second exit ramp with an egress on the right in the direction of flow at an interchange
`left-second-exit-ramp` (DEPRECATED) | *This value is deprecated and will be removed in a future version; use `left-exit-lane` instead* — The second exit ramp with an egress on the left in the direction of flow at an interchange
`right-second-entrance-ramp` (DEPRECATED) | *This value is deprecated and will be removed in a future version; use `right-entrance-lane` instead* — The second entrance ramp with an ingress on the right in the direction of flow at an interchange
`left-second-entrance-ramp` (DEPRECATED) |  *This value is deprecated and will be removed in a future version; use `left-entrance-lane` instead* — The second entrance ramp with an ingress on the left in the direction of flow at an interchange
`right-merging-lane` (DEPRECATED) | *This value is deprecated and will be removed in a future version; specify merging lanes via the lane's `status` property* — The right lane where the lane ends with a gradual merge with the second most lane
`left-merging-lane` (DEPRECATED) | *This value is deprecated and will be removed in a future version; specify merging lanes via the lane's `status` property* — The left lane where the lanes ends by a gradual merge with the second most left lane
`hov-lane` (DEPRECATED) | *This value is deprecated and will be removed in a future version; specify hovs via the lane's `restrictions` property* — A high-occupancy vehicle lane
`alternating-flow-lane` (DEPRECATED) |  *This value is deprecated and will be removed in a future version; specify alternating flow via the lane's `status` property (value of `alternating-flow`)* — A lane where signal or flagger controls lane flow |
`reversible-lane` (DEPRECATED) | *This value is deprecated and will be removed in a future version; specify reversible status via the lane's `status` property (value of `alternating-flow`)* — A lane in which traffic may travel in either direction, depending on certain conditions such as time of day |

## Used By
Property | Object
--- | ---
`type` | [Lane](/spec-content/objects/Lane.md)

## Additional Information
The LaneType enumerated type was originally based on the TMDD LaneRoadway Enumeration, which is imported into TMDD from SAE 2540 (ITIS Standard).

In later release, other standards were examined for inspiration. These include SAE J2735 and the ISO 20524-1 Geographic Data Files (GDF) standard.