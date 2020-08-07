# lanes
**Optional**

This table identifies and describes individual lanes within a road event. Each entry in this table represents a single lane.

This table is related to the [road_events](/feed-content/data-tables/road_events.md) table by the foreign key road_event_id.  For every record in the road_event table there may exist one or more record(s) in the lanes table.

This table is related to the [lane_restrictions](/feed-content/data-tables/lane_restrictions.md) table. For each record in the lanes table there may exist one or more records in the lane_restrictions table.  The lane_id field acts as the foreign key in the lanes table.

## Lanes Table Structure
Data Name|Data Type|Description|Conformance|Notes
-|-|-|-|-|
lane_id|ID|Identifies the lane_info record|Required|Primary key
[road_event_id](/data-tables/road_events.md)|ID|Identifies the road event to which a lane information is related.|Required|Foreign key
lane_number | Non-negative Integer | The number assigned to a lane | Optional | Assigned by counting from the **left** edge of the improved surface. Useful for text to voice translation.
lane_status|Enumeration; Text|Status of the lane for the traveling public|Required|Allowed values: open, closed, shift-left, shift-right, merge-right, merge-left, alternating-one-way. See [Lane Status Enumerated Type](/feed-content/enumerated-types/lane_status.md)
lane_type|Enumeration; Text|An indication of the type of lane or shoulder|Required|See [Lane Type Enumerated Type](/feed-content/enumerated-types/derived-from-its-standards/lane_type.md)
