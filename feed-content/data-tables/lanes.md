# lanes
**Optional**

This table identifies and describes individual lanes within a road event.  

This table is related to the [road_events](/feed-content/data-tables/road_events.md) table by the foreign key road_event_id.  For every record in the road_event table there may exist one or more record(s) in the lanes table.

This table is related to the [lane_restrictions](/feed-content/data-tables/lane_restrictions.md) table. For each record in the lanes table there may exist one or more records in the lane_restrictions table.  The lane_id field acts as the foreign key in the lanes table.

## Lanes Table Structure
Data Name|Data Type|Description|Conformance|Notes
-|-|-|-|-|
lane_id|ID|Identifies the lane_info record|Required|Primary key
[road_event_id](/data-tables/road_events.md)|ID|Identifies the road event to which a lane information is related.|Required|Foreign key
lane_number|Non-negative Integer|The number assigned to a lane to indiciate its position on the roadway. `lane_number` is assigned by counting away from the side (left or right) indicated by the `lane_number_start_side` field on the associated road event. The "first" lane (closest to the road edge indicated by `lane_number_start_side`) must be given the value `1`. An increase of `lane_number` by 1 must represent moving one lane over away from the starting edge. |Optional| Counting begins from the edge of the improved surface. This field is useful for text to voice translation.
lane_status|Enumeration; Text|Status of the lane for the traveling public|Required|See [Lane Status Enumerated Type](/feed-content/enumerated-types/lane_status.md)
lane_type|Enumeration; Text|An indication of the type of lane or shoulder|Required|See [Lane Type Enumerated Type](/feed-content/enumerated-types/derived-from-its-standards/lane_type.md)
