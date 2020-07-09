# Lane Type 
*Note:* The LaneRoadway enumeration is imported into TMDD from SAE 2540 (ITIS Standard)

## Enumeration
WZDx Lane Type | TMDD LaneRoadway Enumeration Value | Description
--- | --- | ---
**left-lane** | left-lane (8194) | The left most lane
**right-lane** | right-lane (8195) | right-lane | The right most lane
**middle-lane** | middle-lanes (8197) | A lane that is not the rightmost or leftmost lane 
**right-turning-lane** | right-turning-lanes (8199) | A right lane where right turns are permissible
**left-turning-lane** | left-turning-lanes (8200) | A left lane where left turns are permissible
**right-exit-lane** | right-exit-lanes (8204) | The right lane where the lane provides an egress with a ramp
**left-exit-lane** | left-exit-lanes (8205) | The left lane where the lanes where the lane provides an egress with a ramp
**right-merging-lane** | right-merging-lanes (8206) | The right lane where the lane ends with a gradual merge with the second most lane
**left-merging-lane** | left-merging-lanes (8207) | The left lane where the lanes ends by a gradual merge with the second most left lane
**right-exit-ramp** | right-exit-ramp (8208) | The (first) exit ramp with an egress on the right in the direction of flow at an interchange
**right-second-exit-ramp** | right-second-exit-ramp (8209) | The second exit ramp with an egress on the right in the direction of flow at an interchange
**right-entrance-ramp** | right-entrance-ramp (8210) | The (first) entrance ramp with an ingress on the right in the direction of flow at an interchange
**right-second-entrance-ramp** | right-second-entrance-ramp (8211) | The second entrance ramp with an ingress on the right in the direction of flow at an interchange 
**left-exit-ramp** | left-exit_ramp (8212) | The (first) exit ramp with an egress on the left in the direction of flow at an interchange
**left-second-exit-ramp** | left-second-exit-ramp (8213) | The second exit ramp with an egress on the left in the direction of flow at an interchange
**left-entrance-ramp** | left-entrance-ramp (8214) | The (first) entrance ramp with an ingress on the left in the direction of flow at an interchange
**left-second-entrance-ramp** | left-second-entrance-ramp (8215) | The second entrance ramp with an ingress on the left in the direction of flow at an interchange 
**sidewalk** | sidewalk (8222) | The sidewalk or pedestrian way
**bike-lane** | cycle-lane (8242) | Bike lane
**right-shoulder** | right-shoulder (8219) | The outer shoulder or the right most shoulder
**left-shoulder** | left-shoulder (8220) | The inner shoulder or the left most shoulder
**hov-lane** | hov-lanes (8233) | A high-occupancy vehicle lane
**alternating-flow-lane** | | Signal or flagger controls lanes flow
**center-left-turn-lane** | | A lane in the center of a bidirectional roadway in which traffic from both directions pulls to make a left turn
**reversible-lane** | | A lane in which traffic may travel in either direction, depending on certain conditions such as time of day

The following values from the TMDD LaneRoadway Enumeration are not used in the WZDx specification:

```
all-roadways (8192)
through-lanes (8193)
center-lane (8196)
upper-deck-lanes (8201)
lower-deck-lanes (8202)
reversible-lanes (8203)
escape-ramp (8216)
hard-shoulder (8217)
soft-shoulder (8218)
right-shoulder (8219)
left-shoulder (8220)
median (8221)
highways (8223)
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
service-road (8240)
service-road (8241)
tracks (8243)
bridge (8244)
overpass (8245)
elevated-lanes (8246)
underpass (8247)
tunnel (8248)
all-exit-lanes (8249)
all-entry-lanes (8250)
either-shoulder (8251)
shoulder-work (8253)
```

## Used By
The **Lane Type** enumeration is used by the following fields

Field Name | Data Table
--- | ---
lane_type | [lanes](/feed-content/data-tables/lanes.md)
