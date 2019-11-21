# road_events (Formerly Common Core Data Dictionary)
**Required**

This table contains information about work zone events.  The information describes where, when, and what activity is taking place along a road segment. This specification currently accommodates work zones; This design accommodates multiple road event types.

This table is related to the [road_event_feed_info](/data-tables/road_event_feed_info.md) table by the foreign key feed_info_id.  For every record in the road_event_feed_info table there must exist one or more road_event records.

Field Name | Data Type | Description | Conformance | Notes
--------- | --------- | ---------------- | ----------- | -----
**road_event_id** | ID | A unique identifier issued by the data feed provider to identify the work zone project or activity | Required | Primary Key
**[feed_info_id](/data-tables/road_event_feed_info.md)** | ID |Identifies the feed to which a road event is related.|Required|Foreign Key to road_event_feed_info
**subidentifier** | ID | A unique identifier issued by data feed provider that provides additional references to project or activity | Optional | This identifier may be used in more than one feed as a reference to an<br>agency project number or permit ID
**geometry_type** | Enumeration: Multipoint or LineString|May be represented as a linestring or a multipoint as defined in the geoJson specification.|Required|
**geometry**|Coordinate(s); Float|A coordinate pair or an array of coordinates. In either case, the first coordinate is the beginning point and the last coordinate is the ending point of the road event|Required|Coordinate pairs and coordinate arrays are formatted according to the geoJson spec
**road_name**|Text|Publicly known name of the road on which the event occurs.|Required|
**road_number**|Text|The road number designated by a jurisdiction such as a county, state or interstate|Optional|Examples I-5, VT 133
**event_direction**|Enumeration; Text|The digitization direction of the road that is impacted by the event.|Required|Example North (for I-5 North)
**beginning_cross_street**|Text|Name or number of the nearest cross street along the roadway where the event begins|Optional|Required when Road Classification is arterial.
**ending_cross_street**|Text|Name or number of the nearest cross street along the roadway where the event ends|Optional|Required when Road Classification is arterial.
**beginning_milepost**|Float|The linear distance measured against a milepost marker along a roadway where the event begins|Optional|	A milepost or mile marker is a surveyed distance posted along a roadway measuring the length (in miles or tenth of a mile) from the south west to the north east. These markers are typically notated on State and local government digital road networks. Provide link to description of milepost method in metadata file (see Section 2.7).
**ending_milepost**|Float|The linear distance measured against a milepost marker along a roadway where the event ends|Optional|A milepost or mile marker is a surveyed distance posted along a roadway measuring the length (in miles or tenth of a mile) from the south west to the north east. These markers are typically notated on State and local government digital road networks. Provide link to description of milepost method in metadata file (see Section 2.7).
**beginning_accuracy**|Enum: Estimated or Verified|Indicates how the beginning coordinate was defined.|Required|
**ending_accuracy**|Enum: Estimated or Verified|Indicates how the ending coordinate was defined.|Required|
**start_date**|DateTime|The time and date when the event begins.|Required|All date/time formats shall use ISO 8601 Data elements and interchange formats – Information interchange
**end_date**|DateTime|The time and date when the event ends.|Required|All date/time formats shall use ISO 8601 Data elements and interchange formats – Information interchange
**start_date_accuracy**|Enum: Estimated or Verified|A measure of how accurate the start Date Time is.|Required|
**end_date_accuracy**|Enumeration: Estimated or Verified|A measure of how accurate the end Date Time is.|Required|
**event_status** |Enumeration; Text|The status of the event|Optional|See Enumerated Type Definitions
**total_lanes** |Integer|The total number of lanes associated with the road segment designated by the event geometry|Optional|A segment is a part of a roadway in a single direction designated the event geometry
**open_lanes** | Enumeration; Text | The laneType that is opened on the road segment designated by<br>the work zone BeginLocation | Optional |
**closed_lanes** | Enumeration; Text | The laneType that is closed due<br>to the work zone on the road segment<br>designated by the Begin Location<br>and EndLocation | Required | More detailed lane impacts / status will be described in Version 2 of the specification
**closed_shoulders** | Enumueration; Text | An enumerated type identifying the<br>shoulder lanes that are closed | Optional | To explicitly state that no shoulders are closed, use none
**workers_present**|Boolean|A flag indicating that there are workers present in the event space|Optional
**reduced_speed_limit**|Integer|The reduced speed limit posted within the event space|Optional|
**restrictions** | Enumumeration; Text | One or more roadRestriction flags indicating restrictions apply to the work zone road segment associated with the work zone bounded by the begin / end locations | Optional | More details may be added to future WZDx versions; these are included as flags rather than detailed restrictions
**description** | Data element | Short free text description of work zone | Optional | This will be populated with formal phrases in a later WZDx version
**issuing_organization** |Text | The organization issuing the data feed | Optional | Will create a list in a<br>future version
**creation_date** | DateTime | The time and date when the activity or event was created | Optional |
**update_date** | DateTime | The time and date when the activity or event was updated | Optional |
