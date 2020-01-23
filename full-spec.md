# Work Zone Data Exchange (WZDx) v2.0 - Specification Reference Document 

Updated 1/21/2020


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
      
    


## Introduction
### Background 
Up-to-date information about dynamic conditions occurring on roads – such as construction events – can help Automated Vehicles (AVs) navigate safely and efficiently. Many infrastructure owners and operators (IOOs) maintain data on work zone activity. However, a lack of common data standards and convening mechanisms makes it difficult and costly for third parties – including original equipment manufacturers (OEMs) and navigation applications – to access and use these data across various jurisdictions. 

The Work Zone Data Exchange (WZDx) Specification enables infrastructure owners and operators (IOOs) to make harmonized work zone data available for third party use. The intent is to make travel on public roads safer and more efficient through ubiquitous access to data on work zone activity. Specifically, the project aims to get data on work zones to vehicles to help automated driving systems (ADS) and human drivers navigate more safely.

Improving access to work zone data is one of the top needs identified through the US Department of Transportation (USDOT) [Data for Automated Vehicle Integration (DAVI)](https://www.transportation.gov/av/data) effort. 

In support of AV integration into our nation’s transportation system, the [Federal Highway Administration (FHWA)](https://www.fhwa.dot.gov/) and [Intelligent Transportation Systems Joint Program Office (ITS JPO)](https://www.its.dot.gov/) co-led the early stages of the WZDx project and remain actively involved along with the [Bureau of Transportation Statistics (BTS)](https://www.bts.gov/), [Federal Motor Carrier Safety Administration (FMCSA)](https://www.fmcsa.dot.gov/), and others in the USDOT. The effort seeks to jumpstart the voluntary adoption of a basic work zone data specification through collaboration with data producers and data users. WZDx will enable collaborative maintenance and expansion of the specification as operational and technological enhancements become available.

The [Work Zone Data Working Group (WZDWG)](https://github.com/usdot-jpo-ode/jpo-wzdx/wiki ), established under the Federal Geographic Data Committee (FGDC) Transportation Subcommittee (TSC) will maintain the specification with the goal of publishing incremental updates to refine the features, attributes, and vocabulary needed to model work zone activity data. Many data producers and users (i.e., the [WZDx Working Group](https://github.com/usdot-jpo-ode/jpo-wzdx/wiki)) voluntarily committed to participating and have been actively involved in the development of the v2.0 specification.  

Upon finalization of the second iteration of work zone data specification, data producers will utilize the specification to make their respective active work zone data feeds available for use by non-government users. These users will then use the harmonized data in a meaningful way. These two outcomes will result in the establishment of the voluntary date exchange of work zone data (i.e., a minimum viable product (MVP) of harmonized work zone data). This approach is intended to be repeatable leading to the accelerated harmonization of local data.

### Purpose and Scope
This specification describes data concepts, their meaning, and their enumeration (as applicable) in order to standardize a data feed specification to be used to publish work zone information. This document defines the content of the Work Zone Data Specification by means of an Entity Relationship Diagram (ERD). The ERD organizes data into distinct entities (also known as tables or objects), defines the content (also known as fields or properties) of each entity, and documents how those entities, tables or objects are related (relationships). Also included, when applicable, are enumeration tables which define the values to which field content is restricted.

For purposes of this effort, “road_events” is defined as data elements needed for most (if not all) possible work zone data use cases. The data specification includes data elements that data producers (i.e., state transportation agencies and other IOOs) are already producing (“required”) as well as those that may not currently be produced (“optional”). The "road_events" table is designed to be extensible, meaning both required and optional data elements can be added to support specific use cases now and in the future.

The WZDx data specification will be incrementally enhanced to evolve into a data standard that supports advanced warnings to automated vehicles in and around work zones. 

### Document Organization
The remainder of this document is organized into the following sections:

- **Feed Content** - details the data content of the WZDx specification, including data tables, field names and types, enumerations.
- **Create Feed** - contains information regarding creation of a WZDx feed, such as the feed format, example feed outputs, and validation tools.


## Feed Content
The WZDx specification uses a relational model to manage data structure. It defines distinct entities (called tables or objects) which contain the data content (called fields or properties) of each entity. The relationship between these entities describes how the data within each is related and how the feed should be built. These entities are found in the [Data Tables](#list-of-data-tables) below. 

Some fields within a data table are restricted to a defined enumeration of values. These enumerations are found in the enumerated types table XXXXXXXX.

### Data Tables Overview 
The WZDx specification data content is organized into distinct entities which are represented by tables. Each table is described by its own file in the data-tables directory and represents a distinct entity, such as a road event, a lane, or the information about a feed. All pieces of data that describe that entity are included within the table. Tables are related using a foreign key, which is an ID field that points to the primary ID field (primary key) of a different table. This relational structure indicates how to store data as well as how a the feed output should be built from tables.

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
feed_update_date |	DateTime |	The UTC date and time when the data feed was last updated. |	Required | All date/time formats shall use ISO 8601 Data elements and interchange formats – Information interchange. Example: `2016-11-03T19:37:00Z`
metadata |	URL |	A link to the metadata file (WZ-metadata.txt). See [Metadata table](#metadata) for a description of the file. |	Optional |
version |	Text |	The specification version used to create the dataset |	Optional	 |


### Road Events
This table contains information about work zone events. The information describes where, when, and what activity is taking place along a road segment. This specification currently accommodates work zones. This design accommodates multiple road event types. This table was formerly called Common Core Data Dictionary. This table is required.

This table is related to the [Road Event Feed Info table](#road-event-feed-info) by the foreign key feed_info_id. For every record in the road_event_feed_info table there must exist one or more road_event records.

This table is related to the [Types of Work table](#types-of-work). For each record in the road_events table there may exist zero or more records in the types_of_work table. The road_event_id field acts as the foreign key in the types_of_work table.

This table is related to the [Lanes table](#lanes). For each record in the road_events table there may exist one or more records in the lanes table. The road_event_id field acts as the foreign key in the lanes table.

#### Road Events Table Structure
Each data table defines a list of data fields which are described by the following characterstics:

- **Field Name** - name of the field or column 
- **Data Type** - identifies the kind of data being stored and indicates if the field’s content is restricted to an enumeration
- **Description** - description of the data content
- **Conformance** - description of the requirement for including data in the data feed file. There are three categories of conformance:
    - *Required* - must be included
    - *Optional* - may be included
    - *Conditional* - associated with two or more data concepts; requires that at least one of the concepts be included in the data feed file
- **Notes** - comments, guidance, or notes for future consideration

#### Road Events Table

Field Name | Data Type | Description | Conformance | Notes
--------- | --------- | ---------------- | ----------- | -----
**road_event_id** | ID | A unique identifier issued by the data feed provider to identify the work zone project or activity | Required | Primary Key
**[feed_info_id](#road-event-feed-info)** | ID |Identifies the feed to which a road event is related.|Required|Foreign Key to road_event_feed_info
**subidentifier** | ID | A unique identifier issued by data feed provider that provides additional references to project or activity | Optional | This identifier may be used in more than one feed as a reference to an<br>agency project number or permit ID
**geometry_type** | Enumeration: Multipoint or LineString|May be represented as a linestring or a multipoint as defined in the GeoJson specification.|Required|
**geometry**|Coordinate(s); Float|A coordinate pair or an array of coordinates. In either case, the first coordinate is the beginning point and the last coordinate is the ending point of the road event|Required|Coordinate pairs and coordinate arrays are formatted according to the geoJson spec
**road_name**|Text|Publicly known name of the road on which the event occurs.|Required|
**road_number**|Text|The road number designated by a jurisdiction such as a county, state or interstate|Optional|Examples I-5, VT 133
**direction**|Enumeration; Text|The digitization direction of the road that is impacted by the event.|Required|Example North (for I-5 North); See [Direction Enumerated Type](#enumerated-types-derived-from-its-standards)
**beginning_cross_street**|Text|Name or number of the nearest cross street along the roadway where the event begins|Optional|Required when Road Classification is arterial.
**ending_cross_street**|Text|Name or number of the nearest cross street along the roadway where the event ends|Optional|Required when Road Classification is arterial.
**beginning_milepost**|Float|The linear distance measured against a milepost marker along a roadway where the event begins|Optional|	A milepost or mile marker is a surveyed distance posted along a roadway measuring the length (in miles or tenth of a mile) from the south west to the north east. These markers are typically notated on State and local government digital road networks. Provide link to description of milepost method in metadata file.
**ending_milepost**|Float|The linear distance measured against a milepost marker along a roadway where the event ends|Optional|A milepost or mile marker is a surveyed distance posted along a roadway measuring the length (in miles or tenth of a mile) from the south west to the north east. These markers are typically notated on State and local government digital road networks. Provide link to description of milepost method in metadata file.
**beginning_accuracy**|Enum: Estimated or Verified|Indicates how the beginning coordinate was defined.|Required|see [Spatial Verification Enumerated Type](#spatial_verification)
**ending_accuracy**|Enum: Estimated or Verified|Indicates how the ending coordinate was defined.|Required|see [Spatial Verification Enumerated Type](#spatial_verification)
**start_date**|DateTime|The UTC time and date when the event begins.|Required|All date/time formats shall use ISO 8601 Data elements and interchange formats – Information interchange. Example: `2016-11-03T19:37:00Z`
**end_date**|DateTime|The UTC time and date when the event ends.|Required|All date/time formats shall use ISO 8601 Data elements and interchange formats – Information interchange. Example: `2016-11-03T19:37:00Z`
**start_date_accuracy**|Enum: Estimated or Verified|A measure of how accurate the start Date Time is.|Required|see [Time Verification Enumerated Type](#time_verification)
**end_date_accuracy**|Enumeration: Estimated or Verified|A measure of how accurate the end Date Time is.|Required|see [Time Verification Enumerated Type](#time_verification)
**event_status** |Enumeration; Text|The status of the event|Optional|See [Event Status Enumerated Type](#event_status)
**total_num_lanes** |Integer|The total number of lanes associated with the road segment designated by the event geometry|Optional|A segment is a part of a roadway in a single direction designated the event geometry
**vehicle_impact**|Enumeration; Text|The impact to vehicular lanes along a single road in a single direction|Required| See [Vehicle Impact Enumerated Type](#vehicle_impact)
**workers_present**|Boolean|A flag indicating that there are workers present in the event space|Optional
**reduced_speed_limit**|Integer|The reduced speed limit posted within the event space|Optional|
**restrictions** | Enumumeration; Text | One or more road restrictions applying to the work zone road segment associated with the work zone delimited by semicolons  | Optional | These are included as flags rather than detailed restrictions. Detailed restrictions are coded to specific lanes in the lane_restrictions table. See [Road Restriction Enumerated Type](#road_restriction)
**description** | Data element | Short free text description of work zone | Optional | This will be populated with formal phrases in a later WZDx version
**issuing_organization** |Text | The organization issuing the data feed | Optional | Will create a list in a<br>future version
**creation_date** | DateTime | The UTC time and date when the activity or event was created | Optional | All date/time formats shall use ISO 8601 Data elements and interchange formats – Information interchange. Example: `2016-11-03T19:37:00Z`
**update_date** | DateTime | The UTC time and date when the activity or event was updated | Optional | All date/time formats shall use ISO 8601 Data elements and interchange formats – Information interchange. Example: `2016-11-03T19:37:00Z`

### Types of Work

This table indicates the type of work being done in a road event, if applicable (e.g. typical work zones), as well as noting if the type of work will result in an architectural change to the roadway.

This table is related to the [Road Events table](#road-events) by the foreign key road_event_id. For every record in the road_event table there exists zero or more records in the types_of_work table. This table is optional. 

#### Types of Work Table
Data Name|Data Type|Description|Conformance|Notes
-|-|-|-|-|
type_of_work_id|ID|Identifies the types_of_work record|Required|Primary key
[road_event_id](#road-events)|ID|Identifies the road event to the type_of_work is related.|Required|Foreign key
type_name|Enumeration; Text|A high-level text description of the type of work being done.|Required|See [Work Type Name Enumerated Type](#work_type_name)
is_architectural_change|Boolean|A flag indicating whether the type of work will result in an architectural change to the roadway.|Optional|


### Lanes
This table identifies and describes individual lanes within a road event. This table is related to the [Road Events table](#road-events) by the foreign key road_event_id. For every record in the road_event table there may exist one or more record(s) in the lanes table. 

This table is related to the [Lane Restrictions table](#lane-restrictions). For each record in the lanes table there may exist one or more records in the lane_restrictions table. The lane_id field acts as the foreign key in the lanes table. This table is optional. 

#### Lanes Table
Data Name|Data Type|Description|Conformance|Notes
-|-|-|-|-|
lane_id|ID|Identifies the lane_info record|Required|Primary key
[road_event_id](#road-events)|ID|Identifies the road event to which a lane information is related.|Required|Foreign key
lane_edge_reference|Enumeration; Text|The roadside edge from which lane are assigned numbers.|Conditional: required if  lane_number is not null|Counting begins from the edge of the improved surface. See [Lane Edge Reference Enumerated Type](#lane_edge_reference)
lane_number|Non-negative Integer|The number assigned to a lane.|Optional|Assigned by counting from right or left edge of the improved surface. Counting begins from the edge indicated in the lane_edge_reference field. Useful for text to voice translation. Numbering should not include shoulders.
lane_status|Enumeration; Text|Status of the lane for the traveling public|Required|Allowed values: open, closed, shift-left, shift-right, merge-right, merge-left, alternating-one-way. See [Lane Status Enumerated Type](#lane_status)
lane_type|Enumeration; Text|A lane descriptor|Required|See [Lane Status Enumerated Type](#lane_type)


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
**issuing_organization** | Text | The name of the issuing organization.<br>This name should match the name in the<br>[road_events table](#road_eventsd). | Required | Example Anyplace public works
**location_verify_method** | Text | The method used to verify the accuracy<br>of the location information | Required | Example Survey accurate GPS equipment accurate to 0.1 cm
**wz_location_method** | Enumeration; Text | The typical method used to locate the<br>begin and end of a work zone impact area.<br>Select the method that most closely<br>represents how begin and end locations<br>are assigned in the WZDX file.<ul><li>channel-device-method</li><li>sign-method</li><li>junction-method</li><li>unknown - when method for<br>locating the begin and end<br>locations of the work zone is not known.</li><li>other- when the method for<br>locating the begin and end<br>locations does not closely match any of the alternatives. An explanation<br>should be included in the<br>metadata when this value is assigned.</li></ul> | Required | Example channel-device-method
**lrs_type** | Text |Describes the type of linear referencing<br>system used for the milepost<br>measurements | Required | Example Use of milemarkers posted by the<br>roadways. These are registered<br>to a dynamic segmentation of<br>statewide LRS basemap.
**lrs_url** | URL |A URL where additional information on the<br>LRS information and transformation<br>information is stored | Optional | Example https://aaa.bbb.com/lrs
**datafeed_frequency_update** | Text | The frequency at which the data feed is<br>updated and made available through the<br>data feed. Format shall include value+<br>units such as<br>30s, 15m, or 24h where:<ul><li>s = seconds</li><li>m = minutes</li><li>h-hours</li></ul> | Optional | Example 30s<br>15m<br>24h
**timestamp_metadata_update** | DateTime | The UTC date and time when this file was last<br>updated | Required | Example 2016-04-12T00:01:00Z
**contact_name** | Text |The name of a contact responsible for the<br>data feed | Required |Example Jo Help
**contact_email** | Text | The contact’s email address | Required | Example jhelp@anyplacePW.com

#### WZ Location Method Description and Practices
The metadata file will include one of five enumerated type values for WZ-location-method field.  

For this data element (WZ-location-method), select the value below that most closely represents how begin and end locations are assigned in the WZDX file.



* **channel-device-method** – *this is the preferred method*
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

* **unknown** – when method for locating the begin and end locations of the work zone is not known
* **other** – when the method for locating the begin and end locations do not closely match any of the alternatives. An explanation should be included in the metadata when this value is assigned.

### Enumerated Types Overview
Some fields within a data table are restricted to a distinct enumeration of values, defined by an enumerated type. The enumerations for each enumerated type as well as what data fields it is used in is described below. Some enumerated types are specifically derived from the TMDD; these are found in the [Enumerated Types Derived From ITS Standards](#enumerated-types-derived-from-its-standards).

#### Data Fields Using Enumerated Types
For ease of reference, the table below describes all fields in the WZDx specification whose value is restricted an enumerated type, as well as the data table the field is from.

Field Name | Table | Enumerated Type | Notes
--------- | --------- | ----------- | -----
`geometry_type` | [road_events](#road-events) | [Geometry Type](#geometry-type) | Enumeration from [GeoJSON Specification](https://tools.ietf.org/html/rfc7946)
`direction` | [road_events](/feed-content/data-tables/road_events.md) | [Direction](#enumerated-types-derived-from-its-standards) | Enumeration adapted from TMDD link-alignment
`beginning_accuracy` | [road_events](#road-events) | [Spatial Verification](#spatial-verification) | Enumeration created in WZDx v2.0
`ending_accuracy` | [road_events](#road-events) | [Spatial Verification](#spatial-verification) | Enumeration created in WZDx v2.0
`start_date_accuracy` | [road_events](#road-events) | [Time Verification](#time-verification) | Enumeration created in WZDx v2.0
`end_date_accuracy` | [road_events](#road-events) | [Time Verification](#time-verification) | Enumeration created in WZDx v2.0
`event_status` | [road_events](#road-events) | [Event Status](#event-status) | Enumeration created in WZDx v1.0
`vehicle_impact` | [road_events](#road-events) | [Vehicle Impact](#vehicle-impact) | Enumeration created in WZDx v2.0
`restrictions` | [road_events](#road-events) | [Road Restriction](#road-restriction) | Enumeration created in WZDx v1.0
`type_name` | [types_of_work](#types-of-work) | [Work Type Name](#work-type-name) | Enumeration created in WZDx v2.0
`lane_edge_reference` | [lanes](#lanes) | [Lane Edge Reference](#lane-edge-reference) | Enumeration created in WZDx v2.0
`lane_status` | [lanes](#lanes) | [Lane Status](#lane-status) | Enumeration created in WZDx v2.0
`lane_type` | [lanes](#lanes) | [Lane Type](#enumerated-types-derived-from-its-standards) | Enumeration adapted from TMDD LaneRoadway
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
### Geometry Type
### Lane Edge Reference
### Lane Status
### Lane Restriction Unit
### Road Restriction
### Spatial Verification
### Time Verification
### Vehicle Impact
### Work Type Name
### Enumerated Types Derived from ITS Standards
