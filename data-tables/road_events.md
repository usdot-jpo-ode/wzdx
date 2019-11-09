# road_events (Formerly Common Core Data Dictionary)
**Required**

This table contains information about road events.  The information describes where, when, and what activity is taking place along a road segment. This specification currently accommodates work zones; This design accommodates multiple road event types.

This table is related to the [road_event_feed_info](/data-tables/road_event_feed_info.md) table by the foreign key feed_info_id.  For every record in the road_event_feed_info table there must exist one or more road_event records.

This table is related to the [lanes](/data-tables/lanes.md) table;  For each record in the  road_events table there may exists a one or more records in the lanes table.  The road_event_id field acts  as the foreign key in the lanes table.

Field Name | Data Type | Description | Conformance | Notes
---------- | --------- | ---------------- | ----------- | -----
road_event_id|ID|A unique identifier issued by the data feed provider to identify the road event.|Required|Primary Key
[feed_info_id](/data-tables/road_event_feed_info.md)|ID|Identifies the feed to which a road event is related.|Required|Foreign Key to road_event_feed_info
geometry_type|Enumeration: Multipoint or LineString|May be represented as a linestring or a multipoint as defined in the geoJson specification.|Required|
geometry|Coordinate(s); Float|A coordinate pair or an array of coordinates. In either case, the first coordinate is the beginning point and the last coordinate is the ending point of the road event|Required|Coordinate pairs and coordinate arrays are formatted according to the geoJson spec
road_name|Text|Publicly known name of the road on which the event occurs.|Required|
road_number|Text|The road number designated by a jurisdiction such as a county, state or interstate|Optional|Examples I-5, VT 133
event_start_date|DateTime|The time and date when the event begins.|Required|All date/time formats shall use ISO 8601 Data elements and interchange formats – Information interchange
event_end_date|DateTime|The time and date when the event ends.|Required|All date/time formats shall use ISO 8601 Data elements and interchange formats – Information interchange
event_direction|Text|The digitization direction of the road that is impacted by the event.|Required|Example North (for I-5 North)
event_type|Enumeration; Text|Describes the event affecting road traffic.|Required|Enumeration need defined.|Right now it includes Work Zone.
event_status|Enumeration; Text|The status of the event|Optional|See Enumerated Type Definitions
event_workers_present|Boolean|A flag indicating that there are workers present in the event space|Optional
event_activity_type|Enumeration; Text|Describes the activity affecting road traffic.|Optional|
event_description|Text|Short free text description of the event.|Optional|This will be populated with formal phrases in a later version
event_total_lanes|Integer|The total number of lanes associated with the road segment designated by the event geometry|Optional|A segment is a part of a roadway in a single direction designated the event geometry
event_vehicle_impact|Enumeration; Text|The impact to vehicular lanes along a single road in a single direction|Required|Values = all-lanes-closed, some-lanes-closed, all-lanes-open
event_speed_limit|Integer|The speed limit posted within the event space|Optional|
event_subidentifier|ID|A unique identifier issued by data feed provider that provides additional references to project or activity|Optional|This identifier may be used in more than one feed as a reference to an agency project number or permit ID
event_update_date|DateTime|The time and date when the activity or event was updated|Optional|
event_creation_date|DateTime|The time and date when the activity or event was created|Optional
event_beginning_cross_street|Text|Name or number of the nearest cross street along the roadway where the event begins|Optional|Required when Road Classification is arterial.
event_ending_cross_street|Text|Name or number of the nearest cross street along the roadway where the event ends|Optional|Required when Road Classification is arterial.
event_beginning_milepost|Float|The linear distance measured against a milepost marker along a roadway where the event begins|Optional|	A milepost or mile marker is a surveyed distance posted along a roadway measuring the length (in miles or tenth of a mile) from the south west to the north east. These markers are typically notated on State and local government digital road networks. Provide link to description of milepost method in metadata file (see Section 2.7).
event_ending_milepost|Float|The linear distance measured against a milepost marker along a roadway where the event ends|Optional|A milepost or mile marker is a surveyed distance posted along a roadway measuring the length (in miles or tenth of a mile) from the south west to the north east. These markers are typically notated on State and local government digital road networks. Provide link to description of milepost method in metadata file (see Section 2.7).
event_start_date_accuracy|Enum: Estimated or Verified|A measure of how accurate the start Date Time is.|Optional|
event_end_date_accuracy|Enumeration: Estimated or Verified|A measure of how accurate the end Date Time is.|Optional|
event_beginning_demarcation|Enum: Estimated or Verified|Indicates how the beginning coordinate was defined.|Optional|
event_ending_demarcation|Enum: Estimated or Verified|Indicates how the ending coordinate was defined.|Optional|
event_begin_mp_demarcation|Enum: Estimated or Verified|A measure of the accuracy of the milepost value|Optional|
event_end_mp_demarcation|Enum: Estimated or Verified|A measure of the accuracy of the milepost value|Optional|
