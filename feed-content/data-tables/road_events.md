# road_events
**Required**

This table (formerly the Common Core Data Dictionary) contains information about work zone events.  The information describes where, when, and what activity is taking place along a road segment. This specification currently accommodates work zones; This design accommodates multiple road event types.

This table is related to the [road_event_feed_info](/feed-content/data-tables/road_event_feed_info.md) table by the foreign key feed_info_id.  For every record in the road_event_feed_info table there must exist one or more road_event records.

This table is related to the [types_of_work](/feed-content/data-tables/types_of_work.md) table; For each record in the road_events table there may exist zero or more records in the types_of_work table. The road_event_id field acts as the foreign key in the types_of_work table.

This table is related to the [lanes](/feed-content/data-tables/lanes.md) table; For each record in the road_events table there may exist one or more records in the lanes table. The road_event_id field acts as the foreign key in the lanes table.

## Road Events Table Structure

Field Name | Data Type | Description | Conformance | Notes
--------- | --------- | ---------------- | ----------- | -----
**road_event_id** | ID | A unique identifier issued by the data feed provider to identify the work zone project or activity | Required | Primary Key
**[feed_info_id](/feed-content/data-tables/road_event_feed_info.md)** | ID |Identifies the feed to which a road event is related.|Required|Foreign Key to road_event_feed_info
**subidentifier** | ID | A unique identifier issued by data feed provider that provides additional references to project or activity | Optional | This identifier may be used in more than one feed as a reference to an<br>agency project number or permit ID
**geometry_type** | Enumeration: Multipoint or LineString|May be represented as a linestring or a multipoint as defined in the GeoJson specification.|Required|
**geometry**|Coordinate(s); Float|A coordinate pair or an array of coordinates. In either case, the first coordinate is the beginning point and the last coordinate is the ending point of the road event|Required|Coordinate pairs and coordinate arrays are formatted according to the geoJson spec
**road_name**|Text|Publicly known name of the road on which the event occurs.|Required|
**road_number**|Text|The road number designated by a jurisdiction such as a county, state or interstate|Optional|Examples I-5, VT 133
**direction**|Enumeration; Text|The digitization direction of the road that is impacted by the event.|Required|Example North (for I-5 North); See [Direction Enumerated Type](/feed-content/enumerated-types/derived-from-its-standards/direction.md)
**beginning_cross_street**|Text|Name or number of the nearest cross street along the roadway where the event begins|Optional|Required when Road Classification is arterial.
**ending_cross_street**|Text|Name or number of the nearest cross street along the roadway where the event ends|Optional|Required when Road Classification is arterial.
**beginning_milepost**|Float|The linear distance measured against a milepost marker along a roadway where the event begins|Optional|	A milepost or mile marker is a surveyed distance posted along a roadway measuring the length (in miles or tenth of a mile) from the south west to the north east. These markers are typically notated on State and local government digital road networks. Provide link to description of milepost method in metadata file.
**ending_milepost**|Float|The linear distance measured against a milepost marker along a roadway where the event ends|Optional|A milepost or mile marker is a surveyed distance posted along a roadway measuring the length (in miles or tenth of a mile) from the south west to the north east. These markers are typically notated on State and local government digital road networks. Provide link to description of milepost method in metadata file.
**beginning_accuracy**|Enum: Estimated or Verified|Indicates how the beginning coordinate was defined.|Required|see [Spatial Verification Enumerated Type](/feed-content/enumerated-types/spatial_verification.md)
**ending_accuracy**|Enum: Estimated or Verified|Indicates how the ending coordinate was defined.|Required|see [Spatial Verification Enumerated Type](/feed-content/enumerated-types/spatial_verification.md)
**start_date**|DateTime|The UTC time and date when the event begins.|Required|All date/time formats shall use ISO 8601 Data elements and interchange formats – Information interchange. Example: `2016-11-03T19:37:00Z`
**end_date**|DateTime|The UTC time and date when the event ends.|Required|All date/time formats shall use ISO 8601 Data elements and interchange formats – Information interchange. Example: `2016-11-03T19:37:00Z`
**start_date_accuracy**|Enum: Estimated or Verified|A measure of how accurate the start Date Time is.|Required|see [Time Verification Enumerated Type](/feed-content/enumerated-types/time_verification.md)
**end_date_accuracy**|Enumeration: Estimated or Verified|A measure of how accurate the end Date Time is.|Required|see [Time Verification Enumerated Type](/feed-content/enumerated-types/time_verification.md)
**event_status** |Enumeration; Text|The status of the event|Optional|See [Event Status Enumerated Type](/feed-content/enumerated-types/event_status.md)
**total_num_lanes** |Integer|The total number of lanes associated with the road segment designated by the event geometry|Optional|A segment is a part of a roadway in a single direction designated the event geometry
**vehicle_impact**|Enumeration; Text|The impact to vehicular lanes along a single road in a single direction|Required| See [Vehicle Impact Enumerated Type](/feed-content/enumerated-types/vehicle_impact.md)
**workers_present**|Boolean|A flag indicating that there are workers present in the event space|Optional
**reduced_speed_limit**|Integer|The reduced speed limit posted within the event space|Optional|
**restrictions** | Enumumeration; Text | One or more road restrictions applying to the work zone road segment associated with the work zone delimited by semicolons  | Optional | These are included as flags rather than detailed restrictions. Detailed restrictions are coded to specific lanes in the lane_restrictions table. See [Road Restriction Enumerated Type](/feed-content/enumerated-types/road_restriction)
**description** | Data element | Short free text description of work zone | Optional | This will be populated with formal phrases in a later WZDx version
**issuing_organization** |Text | The organization issuing the data feed | Optional | Will create a list in a<br>future version
**creation_date** | DateTime | The UTC time and date when the activity or event was created | Optional | All date/time formats shall use ISO 8601 Data elements and interchange formats – Information interchange. Example: `2016-11-03T19:37:00Z`
**update_date** | DateTime | The UTC time and date when the activity or event was updated | Optional | All date/time formats shall use ISO 8601 Data elements and interchange formats – Information interchange. Example: `2016-11-03T19:37:00Z`
