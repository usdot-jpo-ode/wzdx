# Enumerated Fields
This section includes a table of enumerated fields.

#### Table 7. Enumerated Types
Data Element | Used by | Allowed Values | Notes | Source
-|-|-|-|-
**geometry_type**|road_events|||[geoJson Specification](https://tools.ietf.org/html/rfc7946)
**event_direction**|road_events|<ul><li>northbound</li><li>eastbound</li><li>southbound</li><li>westbound</li></ul>||Adapted from<br>TMDD link-<br>alignment
**event_type**|road_events
**event_status** | road_events | See Enumerated Type<br>Definitions (Table 8)
**event_activity_type**|road_events|-|-|-
**event_vehicle_impact**|road_events|-|-|-
**event_start_date_accuracy**|road_events|<ul><li>estimated</li><li>verified</li></ul>|-|-
**event_end_date_accuracy**|road_events|<ul><li>estimated</li><li>verified</li></ul>|-|-
**event_beginning_demarcation**|road_events|<ul><li>estimated</li><li>verified</li></ul>|-|-
**event_ending_demarcation**|road_events|<ul><li>estimated</li><li>verified</li></ul>|-|-
**event_begin_mp_demarcation**|road_events|<ul><li>estimated</li><li>verified</li></ul>|-|-
**event_end_mp_demarcation**|road_events|<ul><li>estimated</li><li>verified</li></ul>|-|-
**lane_edge_reference**|lanes|<ul><li>left</li><li>right</li></ul>|-|-
**lane_status**|lanes|<ul><li>open</li><li>closed</li><li>shift-left</li><li>shift-right</li></ul>|-|-
**lane_type** |lanes| <ul><li>all</li><li>left-lane</li><li>right-lane</li><li>left-2-lanes</li><li>left-3-lanes</li>right-2-lanes</li><li>right-3-lanes</li><li>center</li><li>middle-lane</li><li>right-turning-lane</li><li>left-turning-lane</li><li>right-exit-lane</li><li>left-exit-lane</li><li>right-merging-lane</li><li>left-merging-lane</li><li>right-exit-ramp</li><li>right-second-exit-ramp</li><li>right-entrance-ramp</li><li>right-second-entrance-ramp</li><li>left-exit-ramp</li><li>left-second-exit-ramp</li><li>left-entrance-ramp</li><li>left-second-entrance-ramp</li><li>sidewalk</li><li>bike-lane</li><li>none</li><li>unknown</li><li>alternate-flow-lane</li><li>shift-left</li><li>shift-right</li></ul> |  | Adapted from<br>TMDD<br>LaneRoadway
**restriction_type** | lane_restrictions | <ul><li>no-trucks</li><li>travel-peak-hours-only</li><li>hov</li><li>no-parking</li><li>bike-lane</li><li>ramp</li><li>towing-prohibited</li><li>permitted-oversize-loads-<br>prohibited (this applies to<br>annual oversize load<br>permits</li><li>reduced-width</li><li>reduced-height</li><li>reduced-length</li><li>reduced-weight</li><ul><li>axle-load-limit</li><li>gross-weight-limit</li></ul></ul> | Included one<br>or more<br>flags as needed | See<br>definitions<br>below
