# Enumerated Value Definitions Derived from ITS Standards
The following tables show the translation from [TMDD](https://www.standards.its.dot.gov/Content/documents/advisories/TMDD_2013.aspx) to the [WZDx Enumerated Types (Table 7)](https://github.com/usdot-jpo-ode/jpo-wzdx/blob/master/data-tables/enumerated-fields.md) for:
- [event_open_lanes and event_closed_lanes](#openlanes-and-closedlanes)
- [event_closed_shoulders](#closedshoulders)
- [event_direction](#roaddirection)

Example of data frame in the TMDD (specified in ASN.1 format)
```xml
DATA-TYPE "EventLane ::= SEQUENCE {
    lanes-type ITIS.LaneRoadway OPTIONAL,
    link-direction Link-direction OPTIONAL,
    lanes-total-original Link-lanes-count OPTIONAL,
    lanes-total-affected Link-lanes-count OPTIONAL,
    event-lanes-affected SEQUENCE (SIZE(1..64)) OF Link-lane-number OPTIONAL,
    lanes-status ITIS.Closures OPTIONAL,
    ...  }"
```

#### event_open_lanes and event_closed_lanes
*Note:* LaneRoadway is imported into TMDD from SAE 2540 (ITIS Standard)

LaneRoadway<br>enumerations | Used for event_open_lanes and<br> event_closed_lanes | Description
--------------------------- | ------------------------------------- | -----------
**all-roadways (8192)** | all | Indicates that road all lanes are open or<br>closed; if all lanes are closed then road is<br>effectively closed
**through-lanes (8193)** |  | Not used
**left-lane (8194)** | left-lane | The left most lane (inside lane)
**right-lane (8195)** | right-lane | The right most lane (outside lane)
|  | left-2-lanes | the two most left lanes
|   | left-3-lanes | The three most left lanes
|   | right-2-lanes | The two most right lanes
|   | right-3-lanes | The three most right lanes
**center-lane (8196)** |  | Not used
**middle-lanes (8197)** | middle-lane | The center most lane where are a total of<br>an odd number of lanes
**middle-two-lanes (8198)** | middle-two-lanes | The center most lanes where are a total<br>of an even number of lanes
**right-turning-lanes (8199)** | right-turning-lane | A right lane where right turns are permissible
**left-turning-lanes (8200)** | left-turning-lane | A left lane where left turns are permissible
**upper-deck-lanes (8201)** |  | Note used
**lower-deck-lanes (8202)** |  | Note used
**reversible-lanes (8203)** |  | Note used
**right-exit-lanes (8204)** | right-exit-lane | The right lane where the lane provides an<br>egress with a ramp
**left-exit-lanes (8205)** | left-exit-lane | The left lane where the lanes where the<br>lane provides an egress with a ramp
**right-merging-lanes (8206)** | right-merging-lane | The right lane where the lane ends with a<br>gradual merge with the second most lane
**left-merging-lanes (8207)** | left-merging-lane | The left lane where the lanes ends by a<br>gradual merge with the second most left<br>lane
**right-exit-ramp (8208)** | right-exit-ramp | The (first) exit ramp with an egress on the<br>right in the direction of flow at an<br>interchange
**right-second-exit-ramp (8209)** | right-second-exit-ramp | The second exit ramp with an egress on<br>the right in the direction of flow at an<br>interchange
**right-entrance-ramp (8210)** | right-entrance-ramp | The (first) entrance ramp with an ingress<br>on the right in the direction of flow at an<br>interchange
**right-second-entrance-ramp (8211)** | right-second-entrance-ramp | The second entrance ramp with an<br>ingress on the right in the direction of flow<br>at an interchange 
**left-exit_ramp (8212)** | left-exit-ramp | The (first) exit ramp with an egress on the<br>left in the direction of flow at an<br>interchange
**left-second-exit-ramp (8213)** | left-second-exit-ramp | The second exit ramp with an egress on<br>the left in the direction of flow at an<br>interchange
**left-entrance-ramp (8214)** | left-entrance-ramp | The (first) entrance ramp with an ingress<br>on the left in the direction of flow at an<br>interchange
**left-second-entrance-ramp (8215)** | left-second-entrance-ramp | The second entrance ramp with an<br>ingress on the left in the direction of flow<br>at an interchange 
**escape-ramp (8216)** |  | Not used
**hard-shoulder (8217)** |  | Not used
**soft-shoulder (8218)** |  | Not used
**right-shoulder (8219)** |  | Not used
**left-shoulder (8220)** |  | Not used
**median (8221)** |  | Not used
**sidewalk (8222)** | sidewalk | The sidewalk or pedestrian way
**highways (8223)** |  | Not used
**right-hand-parallel-lanes (8224)** |  | Not used
**left-hand-parallel-lanes (8225)** |  | Not used
**connecting-lanes (8226)** |  | Not used
**express-lanes (8227)** |  | Not used
**local-lanes (8228)** |  | Not used
**toll-lanes (8229)** |  | Not used
**electronic-toll-lanes (8230)** |  | Note used
**toll-plaza (8231)** |  | Not used
**inspection-lane (8232)** |  | Not used
**hov-lanes (8233)** |  | Not used
**bus-lanes (8234)** |  | Not used
**carpool-lanes (8235)** |  | Not used
**truck-lanes (8236)** |  | Not used
**emergency-lanes (8237)** |  | Not used
**passing-lanes (8238)** |  | Not used
**climbing-lanes (8239)** |  | Not used
**slow-lane (8240)** |  | Not used
**service-road (8240)** |  | Not used
**service-road (8241)** |  | Not used
**cycle-lane (8242)** |  | Not used
**tracks (8243)** |  | Not used
**bridge (8244)** |  | Not used
**overpass (8245)** |  | Not used
**elevated-lanes (8246)** |  | Not used
**underpass (8247)** |  | Not used
**tunnel (8248)** |  | Not used
**all-exit-lanes (8249)** |  | Not used
**all-entry-lanes (8250)** |  | Not used
**either-shoulder (8251)** |  | Not used
**shoulder-work (8252)** |  | Not used
|  | bike-lane | Bike lane
|  | none | No lanes (open or closed)
|  | unknown | Unknown which lane is referenced
|  | alternating-flow-lane | Signal or flagger controls lanes flow
|  | left-shift-lanes | All open lanes shift to the left
|  | right-shift-lanes | All open lanes shift to the right

#### event_closed_shoulders
*Note:*  LaneRoadway is imported into TMDD from SAE 2540 (ITIS Standard)

LaneRoadway<br>Enumerations | Used for<br>closedShoulders | Description
--------------------------- | --------------------------- | -----------
**right-shoulder (8219)** | outside | The outer lane or the right most lane
**left-shoulder (8220)** | inside | The inner lane or the left most lane
|  | both | Both inside and outside shoulders
|  | none | Not needed if field is optional; this is the default<br>value
|  | unknown | Unknown if shoulder is open, closed or not existing

#### event_direction
*Note:*  Link-alignment is imported from TMDD

Link-alignment<br>enumerations | Used for<br>roadDirections | Description
------------------------------ | -------------------------- | -----------
**northbound (1)** | northbound | Road flow is in the northbound direction
**eastbound (2)** | eastbound | Road flow is in the eastbound direction
**southbound (3)** | southbound | Road flow is in the southbound direction
**westbound (4)** | westbound | Road flow is in the westbound direction
**inner-loop (5)** |  | Not used
**outer-loop (6)** |  | Not used
