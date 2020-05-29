# Work Zone Data Exchange (WZDx) v2.0 - Specification Reference Document 

Updated 1/23/2020


## TABLE OF CONTENTS 
- [**Introduction**](#introduction)
    - [Background](#background)
    - [Purpose and Scope](#purpose-and-scope)
    - [Document Organization](#document-organization)
- [**Feed Content**](#feed-content)
    - [Data Tables Overview](#data-tables-overview)
      - [Entity Relationship Diagram](#entity-relationship-diagram)
      - [List of Data Tables](#list-of-data-tables)
    - [Road Event Feed Info](#road-event-feed-info)
    - [Road Events](#road-events)
    - [Types of Work](#types-of-work)
    - [Lanes](#lanes)
    - [Lane Restrictions](#lane-restrictions)
    - [Metadata](#metadata)
      - [WZ Location Method Description and Practices](#wz-location-method-description-and-practices)
    - [Enumerated Types Overview](#enumerated-types-overview)
      - [Data Fields Using Enumerated Types](#data-fields-using-enumerated-types)
      - [List of Enumerated Types](#list-of-enumerated-types)
    - [Event Status](#event-status)
    - [Geometry Type](#geometry-type)
    - [Lane Edge Reference](#lane-edge-reference)
    - [Lane Status](#lane-status)
    - [Lane Restriction Unit](#lane-restriction-unit)
    - [Road Restriction](#road-restriction)
    - [Spatial Verification](#spatial-verification)
    - [Time Verification](#time-verification)
    - [Vehicle Impact](#vehicle-impact)
    - [Work Type Name](#work-type-name)
    - [Enumerated Types Derived from ITS Standards](#enumerated-types-derived-from-its-standards)
      - [Lane Type](#lane-type)
      - [Direction](#direction)
- [**Creating the Feed**](#creating-the-feed)
    - [Feed Format and File Type](#feed-format-and-file-type) 
    - [Feed Examples](#feed-examples)
    


## Introduction
### Background 
Up-to-date information about dynamic conditions occurring on roads &mdash; such as construction events &mdash; can help Automated Vehicles (AVs) navigate safely and efficiently. Many infrastructure owners and operators (IOOs) maintain data on work zone activity. However, a lack of common data standards and convening mechanisms makes it difficult and costly for third parties &mdash; including original equipment manufacturers and navigation applications &mdash; to access and use these data across jurisdictions. 

The Work Zone Data Exchange (WZDx) Specification enables infrastructure owners and operators (IOOs) to make harmonized work zone data available for third party use. The intent is to make travel on public roads safer and more efficient through ubiquitous access to data on work zone activity. Specifically, the project aims to get work zone data to vehicles to help automated driving systems and human drivers navigate more safely.

Improving access to work zone data is one of the top needs identified through the US Department of Transportation (USDOT) [Data for Automated Vehicle Integration (DAVI)](https://www.transportation.gov/av/data) effort. 

In support of AV integration into our Nation’s transportation system, the [Federal Highway Administration (FHWA)](https://www.fhwa.dot.gov/) and [Intelligent Transportation Systems Joint Program Office (ITS JPO)](https://www.its.dot.gov/) co-led the early stages of the WZDx project and remain actively involved along with the [Bureau of Transportation Statistics (BTS)](https://www.bts.gov/), [Federal Motor Carrier Safety Administration (FMCSA)](https://www.fmcsa.dot.gov/), and others in the USDOT. The effort seeks to jumpstart the voluntary adoption of a basic work zone data specification through collaboration with data producers and data users. WZDx will enable collaborative maintenance and expansion of the specification as operational and technological enhancements become available.

The [Work Zone Data Working Group (WZDWG)](https://github.com/usdot-jpo-ode/jpo-wzdx/wiki ), established under the Federal Geographic Data Committee (FGDC) Transportation Subcommittee (TSC) will maintain the specification with the goal of publishing incremental updates to refine the features, attributes, and vocabulary needed to model work zone activity data. Many data producers and users (i.e., the [WZDx Working Group](https://github.com/usdot-jpo-ode/jpo-wzdx/wiki)) voluntarily committed to participating and have been actively involved in the development of the v2.0 specification.  

Upon finalization of the second iteration of work zone data specification, data producers will utilize the specification to make their respective active work zone data feeds available for use by non-government users. These users will then use the harmonized data in a meaningful way. These two outcomes will result in the establishment of the voluntary date exchange of work zone data (i.e., a minimum viable product (MVP) of harmonized work zone data). This approach is intended to be repeatable leading to the accelerated harmonization of local data.

### Purpose and Scope
This specification describes data concepts, their meaning, and their enumeration (as applicable) in order to standardize a data feed specification to be used to publish work zone information. This document defines the content of the Work Zone Data Specification by means of an Entity Relationship Diagram (ERD). The ERD organizes data into distinct entities (also known as tables or objects), defines the content (also known as fields or properties) of each entity, and documents how those entities, tables or objects are related (relationships). Also included, when applicable, are enumeration tables that define the values to which field content is restricted.

For purposes of this effort, “road_events” is defined as data elements needed for most (if not all) possible work zone data use cases. The data specification includes data elements that data producers (i.e., state transportation agencies and other IOOs) are already producing (“required”) as well as those that may not currently be produced (“optional”). The "road_events" table is designed to be extensible, meaning both required and optional data elements can be added to support specific use cases now and in the future.

The WZDx data specification will be incrementally enhanced to evolve into a data standard that supports advanced warnings to automated vehicles in and around work zones. 

### Document Organization
The remainder of this document is organized into the following sections:

- **Feed Content** &ndash; details the data content of the WZDx specification, including data tables, field names and types, enumerations.
- **Create Feed** &ndash; contains information regarding creation of a WZDx feed, such as the feed format, example feed outputs, and validation tools.


## Feed Content
The WZDx specification uses a relational model to manage data structure. It defines distinct entities (called tables or objects) that contain the data content (called fields or properties) of each entity. The relationship between these entities describes how the data within each is related and how the feed should be built. These entities are found in the [Data Tables](#list-of-data-tables) below. 

Some fields within a data table are restricted to a defined enumeration of values. These enumerations are found in the [Enumerated Types table](#enumerated-types-overview).

### Data Tables Overview 
The WZDx specification data content is organized into distinct entities that are represented by tables. Each table is described by its own file in the data-tables directory and represents a distinct entity, such as a road event, a lane, or the information about a feed. All pieces of data that describe that entity are included within the table. Tables are related using a foreign key, which is an ID field that points to the primary ID field (primary key) of a different table. This relational structure indicates how to store data as well as how the feed output should be built from tables.

#### Entity Relationship Diagram
The Entity Relationship Diagram (ERD) below indicates the relationship between the data tables. *Required* fields are represented in bold.

![Entity Relationship Diagram](/images/road_event_erd.png)

#### List of Data Tables
A list of all data tables used in the WZDx specification: 
- [Road Event Feed Info](#road-event-feed-info)
- [Road Events](#road-events)
- [Types of Work](#types-of-work)
- [Lanes](#lanes)
- [Lane Restrictions](#lane-restrictions)
- [Metadata](#metadata)

### Road Event Feed Info

This table contains information about road event datasets. For each record in the road_event_feed_info table, there must exist one or more related records in the [road_events](#road-events) table. The feed_info_id field acts as the foreign key in the road_event table. This table was formerly called WZDx Header Data. This table is required.
#### Road Event Feed Info Table 
Field Name | Data Type | Description | Conformance | Notes
---------- | --------- | ---------------- | ----------- | -----
feed_info_id |	ID |	Unique identifier for the data feed. |Required | Primary Key Recommendations on the format of this unique identifier will be made in the future. |
feed_update_date |	DateTime |	The UTC date and time when the data feed was last updated. |	Required | All date/time formats shall use ISO 8601 Data elements and interchange formats &ndash; Information interchange. Example: `2016-11-03T19:37:00Z`
metadata |	URL |	A link to the metadata file (WZ-metadata.txt). See [Metadata table](#metadata) for a description of the file. |	Optional |
version |	Text |	The specification version used to create the dataset |	Optional	 |


### Road Events
This table contains information about work zone events. The information describes where, when, and what activity is taking place along a road segment. This specification currently accommodates work zones. This design accommodates multiple road event types. This table was formerly called Common Core Data Dictionary. This table is required.

This table is related to the [Road Event Feed Info table](#road-event-feed-info) by the foreign key feed_info_id. For every record in the road_event_feed_info table there must exist one or more road_event records.

This table is related to the [Types of Work table](#types-of-work). For each record in the road_events table there may exist zero or more records in the types_of_work table. The road_event_id field acts as the foreign key in the types_of_work table.

This table is related to the [Lanes table](#lanes). For each record in the road_events table there may exist one or more records in the lanes table. The road_event_id field acts as the foreign key in the lanes table.

#### Road Events Table Structure
Each data table defines a list of data fields that are described by the following characteristics:

- **Field Name** &ndash; name of the field or column 
- **Data Type** &ndash; identifies the kind of data being stored and indicates if the field’s content is restricted to an enumeration
- **Description** &ndash; description of the data content
- **Conformance** &ndash; description of the requirement for including data in the data feed file. There are three categories of conformance:
    - *Required* &ndash; must be included
    - *Optional* &ndash; may be included
    - *Conditional* &ndash; associated with two or more data concepts; requires that at least one of the concepts be included in the data feed file
- **Notes** &ndash; comments, guidance, or notes for future consideration

#### Road Events Table

Field Name | Data Type | Description | Conformance | Notes
--------- | --------- | ---------------- | ----------- | -----
**road_event_id** | ID | A unique identifier issued by the data feed provider to identify the work zone project or activity | Required | Primary Key
**[feed_info_id](#road-event-feed-info)** | ID |Identifies the feed to which a road event is related.|Required|Foreign Key to road_event_feed_info.
**subidentifier** | ID | A unique identifier issued by data feed provider that provides additional references to project or activity. | Optional | This identifier may be used in more than one feed as a reference to an<br>agency project number or permit ID.
**geometry_type** | Enumeration: Multipoint or LineString|May be represented as a linestring or a multipoint as defined in the GeoJson specification.|Required|
**geometry**|Coordinate(s); Float|A coordinate pair or an array of coordinates. In either case, the first coordinate is the beginning point and the last coordinate is the ending point of the road event.|Required|Coordinate pairs and coordinate arrays are formatted according to the geoJson spec.
**road_name**|Text|Publicly known name of the road on which the event occurs.|Required|
**road_number**|Text|The road number designated by a jurisdiction, such as a county, state, or interstate.|Optional|Examples I-5, VT 133
**direction**|Enumeration; Text|The digitization direction of the road that is impacted by the event.|Required|Example North (for I-5 North); See [Direction Enumerated Type](#enumerated-types-derived-from-its-standards).
**beginning_cross_street**|Text|Name or number of the nearest cross street along the roadway where the event begins.|Optional|Required when Road Classification is arterial.
**ending_cross_street**|Text|Name or number of the nearest cross street along the roadway where the event ends.|Optional|Required when Road Classification is arterial.
**beginning_milepost**|Float|The linear distance measured against a milepost marker along a roadway where the event begins.|Optional|A milepost or mile marker is a surveyed distance posted along a roadway measuring the length (in miles or tenth of a mile) from the south west to the north east. These markers are typically notated on State and local government digital road networks. Provide link to description of milepost method in metadata file.
**ending_milepost**|Float|The linear distance measured against a milepost marker along a roadway where the event ends.|Optional|A milepost or mile marker is a surveyed distance posted along a roadway measuring the length (in miles or tenth of a mile) from the south west to the north east. These markers are typically notated on State and local government digital road networks. Provide link to description of milepost method in metadata file.
**beginning_accuracy**|Enum: Estimated or Verified|Indicates how the beginning coordinate was defined.|Required|see [Spatial Verification Enumerated Type](#spatial_verification).
**ending_accuracy**|Enum: Estimated or Verified|Indicates how the ending coordinate was defined.|Required|see [Spatial Verification Enumerated Type](#spatial_verification).
**start_date**|DateTime|The UTC time and date when the event begins.|Required|All date/time formats shall use ISO 8601 Data elements and interchange formats &ndash; Information interchange. Example: `2016-11-03T19:37:00Z`
**end_date**|DateTime|The UTC time and date when the event ends.|Required|All date/time formats shall use ISO 8601 Data elements and interchange formats &ndash; Information interchange. Example: `2016-11-03T19:37:00Z`
**start_date_accuracy**|Enum: Estimated or Verified|A measure of how accurate the start Date Time is.|Required|see [Time Verification Enumerated Type](#time_verification).
**end_date_accuracy**|Enumeration: Estimated or Verified|A measure of how accurate the end Date Time is.|Required|see [Time Verification Enumerated Type](#time_verification).
**event_status** |Enumeration; Text|The status of the event.|Optional|See [Event Status Enumerated Type](#event_status)
**total_num_lanes** |Integer|The total number of lanes associated with the road segment designated by the event geometry|Optional|A segment is a part of a roadway in a single direction designated the event geometry.
**vehicle_impact**|Enumeration; Text|The impact to vehicular lanes along a single road in a single direction.|Required| See [Vehicle Impact Enumerated Type](#vehicle_impact).
**workers_present**|Boolean|A flag indicating that there are workers present in the event space.|Optional
**reduced_speed_limit**|Integer|The reduced speed limit posted within the event space.|Optional|
**restrictions** | Enumumeration; Text | Zero or more road restrictions applying to the work zone road segment associated with the work zone delimited by semicolons.| Optional |These are included as flags rather than detailed restrictions. Detailed restrictions are coded to specific lanes in the lane_restrictions table. See [Road Restriction Enumerated Type](#road_restriction).
**description** | Data element | Short free text description of road event.| Optional | This will be populated with formal phrases in a later WZDx version.
**issuing_organization** |Text | The organization issuing the data feed.| Optional | Will create a list in a<br>future version.
**creation_date** | DateTime | The UTC time and date when the activity or event was created.| Optional | All date/time formats shall use ISO 8601 Data elements and interchange formats – Information interchange. Example: `2016-11-03T19:37:00Z`
**update_date** | DateTime | The UTC time and date when the activity or event was updated.| Optional | All date/time formats shall use ISO 8601 Data elements and interchange formats – Information interchange. Example: `2016-11-03T19:37:00Z`

### Types of Work

This table indicates the type of work being done in a road event, if applicable (e.g., typical work zones), as well as noting if the type of work will result in an architectural change to the roadway.

This table is related to the [Road Events table](#road-events) by the foreign key road_event_id. For every record in the road_event table there exists zero or more records in the types_of_work table. This table is optional. 

#### Types of Work Table
Data Name|Data Type|Description|Conformance|Notes
-|-|-|-|-|
type_of_work_id|ID|Identifies the types_of_work record.|Required|Primary key
[road_event_id](#road-events)|ID|Identifies the road event to the type_of_work is related.|Required|Foreign key
type_name|Enumeration; Text|A high-level text description of the type of work being done.|Required|See [Work Type Name Enumerated Type](#work_type_name).
is_architectural_change|Boolean|A flag indicating whether the type of work will result in an architectural change to the roadway.|Optional|


### Lanes
This table identifies and describes individual lanes within a road event. This table is related to the [Road Events table](#road-events) by the foreign key road_event_id. For every record in the road_event table there may exist one or more record(s) in the lanes table. 

This table is related to the [Lane Restrictions table](#lane-restrictions). For each record in the lanes table there may exist one or more records in the lane_restrictions table. The lane_id field acts as the foreign key in the lanes table. This table is optional. 

#### Lanes Table
Data Name|Data Type|Description|Conformance|Notes
-|-|-|-|-|
lane_id|ID|Identifies the lane_info record|Required|Primary key
[road_event_id](#road-events)|ID|Identifies the road event to which a lane information is related.|Required|Foreign key
lane_edge_reference|Enumeration; Text|The roadside edge from which lane are assigned numbers.|Conditional: required if  lane_number is not null|Counting begins from the edge of the improved surface. See [Lane Edge Reference Enumerated Type](#lane_edge_reference).
lane_number|Non-negative Integer|The number assigned to a lane.|Optional|Assigned by counting from right or left edge of the improved surface. Counting begins from the edge indicated in the lane_edge_reference field. Useful for text to voice translation. Numbering should not include shoulders.
lane_status|Enumeration; Text|Status of the lane for the traveling public|Required|Allowed values: open, closed, shift-left, shift-right, merge-right, merge-left, alternating-one-way. See [Lane Status Enumerated Type](#lane_status).
lane_type|Enumeration; Text|A lane descriptor.|Required|See [Lane Status Enumerated Type](#lane_type).


### Lane Restrictions

This table describes individual lane restrictions. This table is related to the lanes table by the foreign key lane_id. For every record in the [Lanes table](#lanes) there may exist one or more record(s) in the lane_restrictions table. This table is optional.

#### Lane Restrictions Table
Data Name|Data Type|Description|Conformance|Notes
-|-|-|-|-
lane_restriction_id|ID|Identifies the lane_info record|Required|Primary key
[lane_id](#lanes)|ID|Identifies the lane to which a restriction info record is related.|Required|Foreign key
restriction_type|Enumeration; Text|The type of restriction being enforced.|Optional|See [Road Restriction Enumerated Type](#road_restriction)
restriction_value|Float|The measure of the restriction type|Optional|
restriction_units|Enumeration; Text|Units of measure for the restriction value|Conditional: required if  restriction_value is not null|See [Lane Restriction Unit Enumerated Type](#lane_restriction_unit)


### Metadata
This table describes the contents of a static file with information about the quality and context of data in the data feed. The files should be made available to data consumers through a link included in the [road_event_feed_info table](#road_event_feed_info). The static file shall be encoded as a comma delimited text file. This table is required. 

**Filename:** WZ-Metadata.txt

##### Metadata Table 
Data Name | Data Type | Description | Conformance | Notes
--------- | ----------- | ------- | ---------| --------
**issuing_organization** | Text | The name of the issuing organization.<br>This name should match the name in the<br>[road_events table](#road_eventsd). | Required | Example: Anyplace public works
**location_verify_method** | Text | The method used to verify the accuracy<br>of the location information.| Required | Example: Survey accurate GPS equipment accurate to 0.1 cm
**wz_location_method** | Enumeration; Text | The typical method used to locate the<br>begin and end of a work zone impact area.<br>Select the method that most closely<br>represents how begin and end locations<br>are assigned in the WZDX file.<ul><li>channel-device-method</li><li>sign-method</li><li>junction-method</li><li>unknown - when method for<br>locating the begin and end<br>locations of the work zone is not known.</li><li>other- when the method for<br>locating the begin and end<br>locations does not closely match any of the alternatives. An explanation<br>should be included in the<br>metadata when this value is assigned.</li></ul> | Required | Example: channel-device-method
**lrs_type** | Text |Describes the type of linear referencing<br>system used for the milepost<br>measurements | Required | Example: use of milemarkers posted by the<br>roadways. These are registered<br>to a dynamic segmentation of<br>statewide LRS basemap.
**lrs_url** | URL |A URL where additional information on the<br>LRS information and transformation<br>information is stored | Optional | Example: https://aaa.bbb.com/lrs
**datafeed_frequency_update** | Text | The frequency at which the data feed is<br>updated and made available through the<br>data feed. Format shall include value+<br>units such as<br>30s, 15m, or 24h where:<ul><li>s = seconds</li><li>m = minutes</li><li>h-hours</li></ul> | Optional | Example: 30s<br>15m<br>24h
**timestamp_metadata_update** | DateTime | The UTC date and time when this file was last<br>updated | Required | Example: 2016-04-12T00:01:00Z
**contact_name** | Text |The name of a contact responsible for the<br>data feed | Required |Example: Jo Help
**contact_email** | Text | The contact’s email address | Required | Example: jhelp@anyplacePW.com

#### WZ Location Method Description and Practices
The metadata file will include one of five enumerated type values for WZ-location-method field.  

For this data element (WZ-location-method), select the value below that most closely represents how begin and end locations are assigned in the WZDX file.

* **channel-device-method** &ndash; *this is the preferred method*
Location of first and last channeling device (e.g., cone or barrier) that is part of a “travel impact effect” (taper) or designation of a work zone transition area. For complex work zones with multiple activities, begin and end locations are the first channeling device for first activity up to the last channeling device of the last activity.

**Simple Scenario**

![Simple channel-device method diagram](/images/channel_device_method_simple.png)

**Complex Scenario**
This example shows three work zone activity areas that are part of a work zone project. Each activity area is treated as an independent work zone activity record, with its own begin and end location where each lane taper begins and ends.

Note: with the data element “subidentifier”, the “owner” can link the three work activities together.

![Complex channel-device method diagram](/images/channel_device_method_complex.png)

* **sign-method**
Location of first and last work zone-related signs. This may be different from the channelization location. For complex work zones, begin would be the first sign before the first activity and end would be the last sign following the last activity.

![sign-method diagram](/images/sign_method.png)

* **junction-method**
Location of a Junction (e.g., a cross street or exit/entrance ramp) before and after a work zone. Note that this is similar to the approach used by Waze to designate a road closure event.

**Arterial Scenario**

![Arterial junction-method diagram](/images/junction_method_arterial.png)

**Highway Scenario**

![Highway junction-method diagram](/images/junction_method_highway.png)

* **unknown** &ndash; when method for locating the begin and end locations of the work zone is not known
* **other** &ndash; when the method for locating the begin and end locations do not closely match any of the alternatives. An explanation should be included in the metadata when this value is assigned.

### Enumerated Types Overview
Some fields within a data table are restricted to a distinct enumeration of values, defined by an enumerated type. The enumerations for each enumerated type as well as what data fields it is used in is described below. Some enumerated types are specifically derived from the Traffic Management Data Dictionary (TMDD); these are found in the [Enumerated Types Derived From ITS Standards](#enumerated-types-derived-from-its-standards).

#### Data Fields Using Enumerated Types
For ease of reference, the table below describes all fields in the WZDx specification whose value is restricted an enumerated type, as well as the data table the field is from.

Field Name | Table | Enumerated Type | Notes
--------- | --------- | ----------- | -----
`geometry_type` | [road_events](#road-events) | [Geometry Type](#geometry-type) | Enumeration from [GeoJSON Specification](https://tools.ietf.org/html/rfc7946)
`direction` | [road_events](#road-events) | [Direction](#direction) | Enumeration adapted from TMDD link-alignment
`beginning_accuracy` | [road_events](#road-events) | [Spatial Verification](#spatial-verification) | Enumeration created in WZDx v2.0
`ending_accuracy` | [road_events](#road-events) | [Spatial Verification](#spatial-verification) | Enumeration created in WZDx v2.0
`start_date_accuracy` | [road_events](#road-events) | [Time Verification](#time-verification) | Enumeration created in WZDx v2.0
`end_date_accuracy` | [road_events](#road-events) | [Time Verification](#time-verification) | Enumeration created in WZDx v2.0
`event_status` | [road_events](#road-events) | [Event Status](#event-status) | Enumeration created in WZDx v2.0
`vehicle_impact` | [road_events](#road-events) | [Vehicle Impact](#vehicle-impact) | Enumeration created in WZDx v2.0
`restrictions` | [road_events](#road-events) | [Road Restriction](#road-restriction) | Enumeration created in WZDx v2.0
`type_name` | [types_of_work](#types-of-work) | [Work Type Name](#work-type-name) | Enumeration created in WZDx v2.0
`lane_edge_reference` | [lanes](#lanes) | [Lane Edge Reference](#lane-edge-reference) | Enumeration created in WZDx v2.0
`lane_status` | [lanes](#lanes) | [Lane Status](#lane-status) | Enumeration created in WZDx v2.0
`lane_type` | [lanes](#lanes) | [Lane Type](#lane-type) | Enumeration adapted from TMDD LaneRoadway
`restriction_type` | [lane_restrictions](#lane-restrictions) | [Road Restriction](#road-restriction) | Individual lane restrictions | Enumeration created in WZDx v1.0
`restriction_units` | [lane_restrictions](#lane-restrictions) | [Lane Restriction Unit](#lane-restriction-unit) | This is an intial list, created in WZDx v2.0, and is not intended to be complete. More values will be added as needed.

#### List of Enumerated Types
A list of all enumerated types used in the WZDx specification: 
  - [Event Status](#event-status)
  - [Geometry Type](#geometry-type)
  - [Lane Edge Reference](#lane-edge-reference)
  - [Lane Status](#lane-status)
  - [Lane Restriction Unit](#lane-restriction-unit)
  - [Road Restriction](#road-restriction)
  - [Spatial Verification](#spatial-verification)
  - [Time Verification](#time-verification)
  - [Vehicle Impact](#vehicle-impact)
  - [Work Type Name](#work-type-name)
  - [Enumerated Types Derived from ITS Standards](#enumerated-types-derived-from-its-standards)

### Event Status
#### Event Status Enumeration Table 
Type | Description
--- | ---
**planned** | Planned status is associated with overall project or phase timing and locations.<br>Typically, this information is estimated during planning or early design phases. The<br>WZDx will not generally include planned activities.
**pending** | Pending is used to alert stakeholders that work is scheduled for the near future (e.g., 2-<br>3 weeks). The certainty of starting at this time is greater than 90% (barring weather<br>and other unforeseen circumstances).<ul><li>Time horizon: approximate begin / end dates</li><li>Location: coverage area and main road name; path (polyline or geoface)<br>around zone area</li></ul>
**active** | Used to alert stakeholder that work zone is in place and active.   
**cancelled** | Reported cancellation of a proposed or active WZ; the coverage applies to the work zone activity record.<ul><li>When date/time is estimated, the cancellation may be one or more days<br>associated within the reported scheduled datetimes.</li></ul>
**completed** | Work Zone is closed and completed; all work zone impacts are mitigated. This status<br>may be used when a work zone activity is completed earlier than expected.

The **Event Status** enumeration is used by the following fields:

Field Name | Data Table
--- | ---
event_status | [road_events](#road-events)

### Geometry Type
#### Geometry Type Enumeration Table
Type | Description
--- | ---
**MultiPoint** | An array of positions. Positions are defined by a coordinate comprised of a longitude and a latitude.
**LineString** | An array of two or more positions. Positions are defined by a coordinate comprised of a longitude and a latitude.

The **Geometry Type** enumeration is used by the following fields:

Field Name | Data Table
--- | ---
geometry_type | [road_events](#road-events)

### Lane Edge Reference
#### Lane Edge Reference Enumeration Table
Type | Description
--- | ---
**left** | Lanes are assigned numbers from the left side of the road.
**right** | Lanes are assigned numbers from the right side of the road.

The **Lane Edge Reference** enumeration is used by the following fields:

Field Name | Data Table
--- | ---
lane_edge_reference | [lanes](#lanes)

### Lane Status
#### Lane Status Enumeration Table
Type | Description
--- | ---
**open** | The lane is open for travel.
**closed** | The lane is closed to travel.
**shift-left** | The lane shifts left from its current bearing and continues.
**shift-right** | The lane shifts right from its current bearing and continues.
**merge-left** | The lane gradually tapers while merging into the lane directly to the left.
**merge-right** | The lane gradually  tapers while merging into the lane directly to the right.
**alternating-one-way** | The lane alternates the direction of travel via either automated controls or onsite personnel.

The **Road Restriction** enumeration is used by the following fields:

Field Name | Data Table
--- | ---
lane_status | [lanes](#lanes)

### Lane Restriction Unit
#### Lane Restriction Unit Enumeration table
Type | Description
--- | ---
**feet** | Imperial system 'feet'
**inches** | Imperial system 'inches'
**centimeters** | Metric system 'centimeters'
**pounds** | Imperial system 'pounds'
**tons** | Imperial system 'tons'
**kilograms** | Metric system 'kilograms'

The **Lane Restriction Unit** enumeration is used by the following fields:

Field Name | Data Table
--- | ---
restriction_units | [lane_restrictions](#lane-restrictions)

### Road Restriction
#### Road Restriction Enumeration Table
Type | Description
--- | ---
**no-trucks** | Trucks are prohibited from traveling in work zone area.
**travel-peak-hours-only** | Travel restricted to travel peak hours only.
**hov-3** | Travel restricted to high occupancy vehicles of three or more.
**hov-2** | Travel restricted to high occupancy vehicles of two or more.
**no-parking** | No parking in work zone area.
**reduced-width** | Lane width reduced in work zone area.
**reduced-height** | Height restrictions reduced in work zone area.
**reduced-length** | Vehicle length restrictions reduced in work zone area.
**reduced-weight** | Vehicle weight restrictions reduced in work zone area.
**axle-load-limit** | Vehicle axle-load-limit restrictions reduced in work zone area.
**gross-weight-limit** | Vehicle gross-weight-limit restrictions reduced in work zone area.
**towing-prohibited** | Towing prohibited in work zone area.
**permitted-oversize-loads-<br>prohibited** | “Permitted oversize loads” prohibited in work zone area; this applies<br>to annual oversize load permits.
 
The **Road Restriction** enumeration is used by the following fields:

Field Name | Data Table
--- | ---
restrictions | [road_events](#road-events)
restriction_type | [lane_restrictions](#lane-restrictions)

### Spatial Verification
#### Spatial Verification Enumeration Table
Type | Description
--- | ---
**Estimated (-est)** | Estimated location associated with work zone activities and lane closures.<br>An estimated measurement may be based on an approximation of a location<br>referencing method (e.g., lat/long or milepost), for example: a point relative to a<br>posted milemarker, point on a map, or GPS device that provides less than<br>centimeter accuracy.
**Verified (-ver)** | Actual reported information about work zone locations. Actual location is<br>typically measured by a calibrated navigation or survey system to centimeter<br>accuracy (six decimal places for latitude and longitude).

The **Spatial Verification** enumeration is used by the following fields:

Field Name | Data Table
--- | ---
beginning_accuracy | [road_events](#road-events)
ending_accuracy | [road_events](#road-events)

### Time Verification
#### Time Verification Enumeration Table
Type | Description
--- | ---
**Estimated (-est)** | Specific times/dates when work will or is occurring; includes advanced notice of<br>activities or unverified work zone activities. This date/time may be reported in<br>advance, but is not actively verified on day of event.
**Verified (-ver)** | Actual reported times/dates when work occurs.

The **Time Verification** enumeration is used by the following fields:

Field Name | Data Table
--- | ---
start_date_accuracy | [road_events](#road-events)
end_date_accuracy | [road_events](#road-events)

### Vehicle Impact
#### Vehicle Impact Enumeration Table
Type | Description
--- | ---
**all-lanes-closed** | All lanes are closed.
**some-lanes-closed** | Some lanes are closed.
**all-lanes-open** | All lanes are closed.
**alternating-one-way** | The roadway is alternating one way.
**unknown** | The vehicle impact is unknown.

The **Vehicle Impact** enumeration is used by the following fields:

Field Name | Data Table
--- | ---
vehicle_impact | [road_events](#road-events)

### Work Type Name
#### Work Type Name Enumeration Table
Type Name | Description
---| ---
**maintenance** | Work with no impact on the roadway. This includes events such as trash pickup, mowing, landscaping.
**minor-road-defect-repair** | Pothole repair, road crack repair and sealing, and other small road defect repairs.
**roadside-work** | Work that is isolated to the side of the road and not in the main travel way, such as repair, replacement, or addition of streetlights, variable message signs (VMS), signs (guide, warning, regulatory, and information signs) in the ground.
**overhead-work** | Work that occurs above the road, such as repair/replacement of overpasses, overhead VMS, wires, overhead signs, signals, etc. This type of work requires a bucket truck or similar setup rather than being isolated to the side of the road.
**below-road-work** | Work occurring below the road such as boring or bridge repair.
**barrier-work** | Repair, replacement, addition, or change of barriers, guardrails, retaining walls, K-barriers, or similar.
**surface-work** | New resurfacing, such as adding new lanes, moving lanes, or adding or changing connectivity (turn lanes), as well as creation or repair of non-drivable surfaces such as the shoulder or median.
**painting** | 	Repainting, re-striping, adding new lanes, moving lanes, adding stop bars/lines, etc. ***Note:** `is_architectural_change` field should be false when new paint is expected to be within 1 meter of the old paint.*
**roadway-relocation** | Physically relocating the road, such as adding a bridge or removing a sharp curve.
**roadway-creation** | Adding a new road.

The **Work Type Name** enumeration is used by the following fields:

Field Name | Data Table
--- | ---
type_name | [types_of_work](#work-type-name)

### Enumerated Types Derived from ITS Standards
The following enumerated types used in the WZDx spec are translated from enumerations from the [TMDD](https://www.standards.its.dot.gov/Content/documents/advisories/TMDD_2013.aspx):

- [Lane Type](#lane-type)
- [Direction](#direction)

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
#### Lane Type
*Note:* LaneRoadway is imported into TMDD from SAE 2540 (ITIS Standard)

#### Lane Type Enumeration Table

TMDD LaneRoadway Enumeration | Lane Type Enumeration | Description
--- | --- | ---
**all-roadways (8192)** | all | Indicates that road all lanes are open or<br>closed; if all lanes are closed then road is<br>effectively closed.
**through-lanes (8193)** |  | Not used
**left-lane (8194)** | left-lane | The left most lane (inside lane)
**right-lane (8195)** | right-lane | The right most lane (outside lane)
|  | left-2-lanes | The two most left lanes
|   | left-3-lanes | The three most left lanes
|   | right-2-lanes | The two most right lanes
|   | right-3-lanes | The three most right lanes
**center-lane (8196)** |  | Not used
**middle-lanes (8197)** | middle-lane | The center most lane where are a total of<br>an odd number of lanes.
**middle-two-lanes (8198)** | middle-two-lanes | The center most lanes where are a total<br>of an even number of lanes.
**right-turning-lanes (8199)** | right-turning-lane | A right lane where right turns are permissible.
**left-turning-lanes (8200)** | left-turning-lane | A left lane where left turns are permissible.
**upper-deck-lanes (8201)** |  | Note used
**lower-deck-lanes (8202)** |  | Note used
**reversible-lanes (8203)** |  | Note used
**right-exit-lanes (8204)** | right-exit-lane | The right lane where the lane provides an<br>egress with a ramp.
**left-exit-lanes (8205)** | left-exit-lane | The left lane where the lanes where the<br>lane provides an egress with a ramp.
**right-merging-lanes (8206)** | right-merging-lane | The right lane where the lane ends with a<br>gradual merge with the second most lane.
**left-merging-lanes (8207)** | left-merging-lane | The left lane where the lanes ends by a<br>gradual merge with the second most left<br>lane.
**right-exit-ramp (8208)** | right-exit-ramp | The (first) exit ramp with an egress on the<br>right in the direction of flow at an<br>interchange.
**right-second-exit-ramp (8209)** | right-second-exit-ramp | The second exit ramp with an egress on<br>the right in the direction of flow at an<br>interchange.
**right-entrance-ramp (8210)** | right-entrance-ramp | The (first) entrance ramp with an ingress<br>on the right in the direction of flow at an<br>interchange.
**right-second-entrance-ramp (8211)** | right-second-entrance-ramp | The second entrance ramp with an<br>ingress on the right in the direction of flow<br>at an interchange.
**left-exit_ramp (8212)** | left-exit-ramp | The (first) exit ramp with an egress on the<br>left in the direction of flow at an<br>interchange.
**left-second-exit-ramp (8213)** | left-second-exit-ramp | The second exit ramp with an egress on<br>the left in the direction of flow at an<br>interchange.
**left-entrance-ramp (8214)** | left-entrance-ramp | The (first) entrance ramp with an ingress<br>on the left in the direction of flow at an<br>interchange.
**left-second-entrance-ramp (8215)** | left-second-entrance-ramp | The second entrance ramp with an<br>ingress on the left in the direction of flow<br>at an interchange.
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
**electronic-toll-lanes (8230)** |  | Not used
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
|  | none | No lanes (open or closed).
|  | unknown | Unknown which lane is referenced.
|  | alternating-flow-lane | Signal or flagger controls lanes flow.
**right-shoulder (8219)** | outside | The outer lane or the right most lane.
**left-shoulder (8220)** | inside | The inner lane or the left most lane.
|  | both | Both inside and outside shoulders.
|  | none | Not needed if field is optional; this is the default<br>value.
|  | unknown | Unknown if shoulder is open, closed or not existing.

The **Lane Type** enumeration is used by the following fields:

Field Name | Data Table
--- | ---
lane_type | [lanes](#lanes)

#### Direction 
*Note:*  Link-alignment is imported from TMDD

#### Direction Enumeration Table
Link-alignment Enumeration | Direction Enumeration | Description
------------------------------ | -------------------------- | -----------
**northbound (1)** | northbound | Road flow is in the northbound direction.
**eastbound (2)** | eastbound | Road flow is in the eastbound direction.
**southbound (3)** | southbound | Road flow is in the southbound direction.
**westbound (4)** | westbound | Road flow is in the westbound direction.
**inner-loop (5)** |  | Not used
**outer-loop (6)** |  | Not used


The **Direction** enumeration is used by the following fields:

Field Name | Data Table
--- | ---
direction | [road_events](#road-events)

## Creating The Feed 
This section provides information regarding creation of a WZDx feed, such as the feed format, example feed outputs, and validation tools.

### Feed Format and File Type

The WZDx v2.0 data feed is formatted according to the [GeoJSON](https://geojson.org/) specification. GeoJSON is the file format of choice because:
- It is a lightweight data exchange format.
- It is easy for humans to read and write.
- It is easy for machines to parse and generate.
- The format is designed to exchange spatial data, which is a primary goal of the Work Zone Data Working Group.
- It is an open specification and does not carry licensing burdens.
- GeoJSON formatted-data is published as text files, there is a low technological burden of entry.
- GeoJSON validation, mapping, and visualization tools already exists and will ease adoption by producers and consumers.

A WZDx feed contains a single entry describing aspects of the feed itself (e.g., version) as well as one or more entries that describe a work zone's (generically: road event) characteristics along a single road segment in a single direction. 

The tables described in the [Feed Content](#feed-content) and summarized below, detail the specification's content and describe the data used to build the feed.
- The [Road Event Feed Information](#road-event-feed-info) table describes the data feed.
- The [Road Events](/#road-events) table describes a work zone event.
- The [Types of Work](#work-type-name) table describes the work taking place along the road.  If applicable, it indicates if the work changes the roadway's architecture.
- The [Lanes](#lanes) table identifies and describes individual lanes within an event.
- The [Lane Restrictions](#lane-restrictions) table describes restrictions for identified lanes.

### Feed Examples
The following WZDx feed examples include all optional fields. An example file is included for both the `LineString` and `MultiPoint` geometry types.

* [MultiPoint GeoJSON Example](/create-feed/examples/multipoint_example.geojson)
* [LineString GeoJSON Example](/create-feed/examples/linestring_example.geojson)
