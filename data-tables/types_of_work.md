# types_of_work
**Optional**

This table indicates the type of work being done in a road event, if applicable (e.g. typical work zones), as well as noting if the type of work will result in an architectural change to the roadway.

This table is related to the [road_events](/data-tables/road_events.md) table by the foreign key road_event_id.  For every record in the road_event table there exists zero or more records in the types_of_work table.

Data Name|Data Type|Description|Conformance|Notes
-|-|-|-|-|
type_of_work_id|ID|Identifies the types_of_work record|Required|Primary key
[road_event_id](/data-tables/road_events.md)|ID|Identifies the road event to the type_of_work is related.|Required|Foreign key
[type_name](/data-table/enumerated-field-definitions.md#Types-of-Work-Type-Names-Table)|Enumeration; Text|A high-level text description of the type of work being done.|Required|
is_architectural_change|Boolean|A flag indicating whether the type of work will result in an architectural change to the roadway.|Optional|
