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
lane_edge_reference|Enumeration; Text|The roadside edge from which lane are assigned numbers.|Conditional: required if  lane_number is not null|Counting begins from the edge of the improved surface. See [Lane Edge Reference Enumerated Type](/feed-content/enumerated-types/lane_edge_reference.md)
lane_number|Non-negative Integer|The number assigned to a lane (not including shoulders)|Optional|Assigned by counting from right or left edge of the improved surface. Counting begins from the edge indicated in the lane_edge_reference field. Useful for text to voice translation.
lane_status|Enumeration; Text|Status of the lane for the traveling public|Required|Allowed values: open, closed, shift-left, shift-right, merge-right, merge-left, alternating-one-way. See [Lane Status Enumerated Type](/feed-content/enumerated-types/lane_status.md)
lane_type|Enumeration; Text|A lane descriptor|Required|See [Lane Type Enumerated Type](/feed-content/enumerated-types/derived-from-its-standards/lane_type.md)
