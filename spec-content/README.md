# WZDx Specification Content
The WZDx specification uses a relational model to manage data structure. It defines distinct entities (called tables or objects) which contain the data content (called fields or properties) of each entity. The relationship between these entities describes how the data within each is related and how the feed should be built. These entities are found in the [data-tables](/spec-content/data-tables) directory. 

Some fields within a data table are restricted to a defined enumeration of values. These enumerations are found in the [enumerated-types](/spec-content/enumerated-types) directory.

## Data Tables
The WZDx specification data content is organized into distinct entities which are represented by tables. Each table is described by its own file in the [data-tables](/spec-content/data-tables) directory and represents a distinct entity, such as a road event, a lane, or the information about a feed. All pieces of data that describe that entity are included within the table. Tables are related using a foreign key, which is an ID field that points to the primary ID field (primary key) of a different table. This relational structure indicates how to store data as well as how a the feed output should be built from tables. 

The relationships between tables is shown visually using an Entity Relationship Diagram (ERD).

### Entity Relationship Diagram
The Entity Relationship Diagram (ERD) below indicates the relationship between the data tables. *Required* fields are represented in bold.

![Entity Relationship Diagram](/images/road_event_erd.jpg)

### List of Data Tables
This section provides a list of all data tables uses in the WZDx specification.

- [Road Event Feed Info](/spec-content/data-tables/road_event_feed_info.md)
- [Road Event Data Sources](/spec-content/data-tables/road_event_data_sources.md)
- [Road Events](/spec-content/data-tables/road_events.md)
- [Types of Work](/spec-content/data-tables/types_of_work.md)
- [Lanes](/spec-content/data-tables/lanes.md)
- [Lane Restrictions](/spec-content/data-tables/lane_restrictions.md)

## Enumerated Types
Some fields within a data table are restricted to a distinct enumeration of values, defined by an enumerated type. The enumerations for each enumerated type as well as what data fields it is used in is described in its own file in the [enumerated-types](/spec-content/enumerated-types) directory.

Some enumerated types are specifically derived from the TMDD; these are found in the [enumerated-types/derived-from-its-standards](/spec-content/enumerated-types) directory.

### Enumerated Types Derived from ITS Standards
The following enumerated types used in the WZDx spec are translated from enumerations from the [TMDD](https://www.standards.its.dot.gov/Content/documents/advisories/TMDD_2013.aspx):

- [lane_type](/spec-content/enumerated-types/derived-from-its-standards/lane_type.md)
- [direction](/spec-content/enumerated-types/derived-from-its-standards/direction.md)

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

### List of Enumerated Types
This section provides a list of all enumerated types uses in the WZDx specification.

- [Event Status](/spec-content/enumerated-types/event_status.md)
- [Geometry Type](/spec-content/enumerated-types/geometry_type.md)
- [Lane Edge Reference](/spec-content/enumerated-types/lane_edge_reference.md)
- [Lane Status](/spec-content/enumerated-types/lane_status.md)
- [Lane Restriction Unit](/spec-content/enumerated-types/lane_restriction_unit.md)
- [Road Restriction](/spec-content/enumerated-types/road_restriction.md)
- [Location Method](/spec-content/enumerated-types/location_method.md)
- [Spatial Verification](/spec-content/enumerated-types/spatial_verification.md)
- [Time Verification](/spec-content/enumerated-types/time_verification.md)
- [Vehicle Impact](/spec-content/enumerated-types/vehicle_impact.md)
- [Work Type Name](/spec-content/enumerated-types/work_type_name.md)
- [**Enumerated Types Derived from ITS Standards**](/spec-content/enumerated-types/derived-from-its-standards)
    - [Direction](/spec-content/enumerated-types/derived-from-its-standards/direction)
    - [Lane Type](/spec-content/enumerated-types/derived-from-its-standards/lane_type)

### Data Fields Using Enumerated Types
For ease of reference, the table below describes all fields in the WZDx specification whose value is restricted an enumerated type, as well as the data table the field is from.

Field Name | Table | Enumerated Type | Notes
--------- | --------- | ----------- | -----
`geometry_type` | [road_events](/spec-content/data-tables/road_events.md) | [Geometry Type](/spec-content/enumerated-types/geometry-type.md) | Enumeration from [GeoJSON Specification](https://tools.ietf.org/html/rfc7946)
`direction` | [road_events](/spec-content/data-tables/road_events.md) | [Direction](/spec-content/enumerated-types/derived-from-its-standards/direction.md) | Enumeration adapted from TMDD link-alignment
`beginning_accuracy` | [road_events](/spec-content/data-tables/road_events.md) | [Spatial Verification](/spec-content/enumerated-types/spatial_verification.md) | Enumeration created in WZDx v2.0
`ending_accuracy` | [road_events](/spec-content/data-tables/road_events.md) | [Spatial Verification](/spec-content/enumerated-types/spatial_verification.md) | Enumeration created in WZDx v2.0
`start_date_accuracy` | [road_events](/spec-content/data-tables/road_events.md) | [Time Verification](/spec-content/enumerated-types/time_verification.md) | Enumeration created in WZDx v2.0
`end_date_accuracy` | [road_events](/spec-content/data-tables/road_events.md) | [Time Verification](/spec-content/enumerated-types/time_verification.md) | Enumeration created in WZDx v2.0
`event_status` | [road_events](/spec-content/data-tables/road_events.md) | [Event Status](/spec-content/enumerated-types/event_status.md) | Enumeration created in WZDx v1.0
`vehicle_impact` | [road_events](/spec-content/data-tables/road_events.md) | [Vehicle Impact](/spec-content/enumerated-types/vehicle_impact.md) | Enumeration created in WZDx v2.0
`restrictions` | [road_events](/spec-content/data-tables/road_events.md) | [Road Restriction](/spec-content/enumerated-types/road_restriction.md) | Enumeration created in WZDx v1.0
`type_name` | [types_of_work](/spec-content/data-tables/types_of_work.md) | [Work Type Name](/spec-content/enumerated-types/work_type_name.md) | Enumeration created in WZDx v2.0
`lane_edge_reference` | [lanes](/spec-content/data-tables/lanes.md) | [Lane Edge Reference](/spec-content/enumerated-types/lane_edge_reference.md) | Enumeration created in WZDx v2.0
`lane_status` | [lanes](/spec-content/data-tables/lanes.md) | [Lane Status](/spec-content/enumerated-types/lane_status.md) | Enumeration created in WZDx v2.0
`lane_type` | [lanes](/spec-content/data-tables/lanes.md) | [Lane Type](/spec-content/enumerated-types/derived-from-its-standards/lane_type.md) | Enumeration adapted from TMDD LaneRoadway
`restriction_type` | [lane_restrictions](/spec-content/data-tables/lane_restrictions.md) | [Road Restriction](/spec-content/enumerated-types/road_restriction.md) | Individual lane restrictions | Enumeration created in WZDx v1.0
`restriction_units` | [lane_restrictions](/spec-content/data-tables/lane_restrictions.md) | [Lane Restriction Unit](/spec-content/enumerated-types/lane_restriction_unit.md) | This is an intial list, created in WZDx v2.0, and is not intended to be complete. More values will be added as needed.
`location_method` | [road_event_data_sources](/spec-content/data-tables/road_event_data_sources.md) | [Location Method](/spec-content/enumerated-types/location_method.md) | Enumeration created in WZDx v3.0 but referenced since v1.1
