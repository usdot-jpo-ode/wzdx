# activities (New)
**Optional**

This table describes kind of activities occurring along an identified road event.  

This table is related to the [road_events](/data-tables/road_events.md) table by the foreign key road_event_id.  For every record in the road_event table there may exist one or more record(s) in the activities table.

Data Name|Data Type|Description|Conformance|Notes
-|-|-|-|-|
activity_id|ID|Uniquely identifies the activity record|Required|Primary key
[road_event_id](/data-tables/road_events.md)|ID|Identifies the road event to which a activity information is related.|Required|Foreign key
activity_type|Enumeration; Text|Describes the actions along the identified road event.|Required
activity_is_architectual_change|Boolean|Indicates if the activity will change the capacity or alginment of the road.|Required
