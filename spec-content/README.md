# WZDx Specification Content
The WZDx specification describes the content and structure of a WZDx GeoJSONrepository  a relational model to manage data structure. It defines distinct entities called objects which contain the data content (called fields or properties) of each entity. The structure of and relationship between objects describes how a WZDx feed will look. These objects are found in the [objects](/spec-content/objects) directory.

The value of some properties of an object are restricted to a defined set of values. These enumerations are found in the [enumerated-types](/spec-content/enumerated-types) directory.

## Objects
The WZDx specification describes the structure and content of a JSON file (specifically GeoJSON) which can be called an instance of a "WZDx Feed". Each feed instance has one root object with many properties and nested objects. Each distinct object is described in its own file within the [objects](/spec-content/objects) directory. An object represents a distinct entity, such as a road event, a lane, or information about a feed. All pieces of data that descibe that entity are included as properties (or fields) on the object.

## Data Tables
The WZDx specification data content is organized into distinct entities which are represented by tables. Each table is described by its own file in the [data-tables](/spec-content/data-tables) directory and represents a distinct entity, such as a road event, a lane, or the information about a feed. All pieces of data that describe that entity are included within the table. Tables are related using a foreign key, which is an ID field that points to the primary ID field (primary key) of a different table. This relational structure indicates how to store data as well as how the feed output should be built from tables.

The relationships between tables is shown visually using an Entity Relationship Diagram (ERD).

### Entity Relationship Diagram
The Entity Relationship Diagram (ERD) below indicates the relationship between the data tables.

![Entity Relationship Diagram](/images/road_event_erd.jpg)

#### Updating the ERD
When making changes to the specification, the ERD needs to be updated as well. To modify the ERD, open `/images/road_event_erd.drawio` at https://app.diagrams.net (or any drawio editor). There will be two diagrams shown as tabs in the bottom of the screen: `road_event_erd` for the full diagram and `feed_source_event_relationship` for the section on data sources/feeds only. Make necessary changes to the diagram using the web editor, then download the `drawio` file and replace `/images/road_event_erd.drawio` with the new file. Additionally **export** each of the two diagrams individually as a JPEG, using the diagram name as the file name, and replace `/images/road_event_erd.jpg` and `/images/feed_source_event_relationship.jpg` with the new image files.

### Data Table Structure
Each data table defines a list of data fields which are described by the following characteristics:

- **Field Name** - name of the field or column
- **Data Type** - identifies the kind of data being stored and indicates if the field’s content is restricted to an enumeration
- **Description** - description of the data content
- **Conformance** - description of the requirement for including data in the data feed file. There are three categories of conformance:
    - *Required* - must be included
    - *Optional* - may be included
    - *Conditional* - associated with two or more data concepts; requires that at least one of the concepts be included in the data feed file
- **Notes** - comments, guidance, or notes for future consideration

### List of Data Tables
This section provides a list of all data tables uses in the WZDx specification.

- [Lanes](/spec-content/data-tables/lanes.md)
- [Lane Restrictions](/spec-content/data-tables/lane_restrictions.md)
- [Relationships](/spec-content/data-tables/relationships.md)
- [Road Events](/spec-content/data-tables/road_events.md)
- [Road Event Data Sources](/spec-content/data-tables/road_event_data_sources.md)
- [Road Event Feed Info](/spec-content/data-tables/road_event_feed_info.md)
- [Types of Work](/spec-content/data-tables/types_of_work.md)


## Enumerated Types
Many object properties are restricted to a finite set of values, defined by an enumerated type. The enumerations for each enumerated type as well as what object properties it is used by is described in its own file in the [enumerated-types](/spec-content/enumerated-types) directory.

Some enumerated types are specifically derived from the Traffic Management Data Dictionary (TMDD); these are found in the [enumerated-types/derived-from-its-standards](/spec-content/enumerated-types/derived-from-its-standards/) directory.

### Enumerated Types Derived from ITS Standards
The following enumerated types used in the WZDx spec are translated from enumerations from the [TMDD](https://www.standards.its.dot.gov/Content/documents/advisories/TMDD_2013.aspx):

- [direction](/spec-content/enumerated-types/derived-from-its-standards/direction.md)
- [lane_type](/spec-content/enumerated-types/derived-from-its-standards/lane_type.md)


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
This section provides a list of all enumerated types used in the WZDx specification.

- [Event Type](/spec-content/enumerated-types/event_type.md)
- [Event Status](/spec-content/enumerated-types/event_status.md)
- [Geometry Type](/spec-content/enumerated-types/geometry_type.md)
- [Lane Restriction Unit](/spec-content/enumerated-types/lane_restriction_unit.md)
- [Lane Status](/spec-content/enumerated-types/lane_status.md)
- [Location Method](/spec-content/enumerated-types/location_method.md)
- [Road Restriction](/spec-content/enumerated-types/road_restriction.md)
- [Spatial Verification](/spec-content/enumerated-types/spatial_verification.md)
- [Time Verification](/spec-content/enumerated-types/time_verification.md)
- [Vehicle Impact](/spec-content/enumerated-types/vehicle_impact.md)
- [Work Type Name](/spec-content/enumerated-types/work_type_name.md)
- [**Enumerated Types Derived from ITS Standards**](/spec-content/enumerated-types/derived-from-its-standards)
    - [Direction](/spec-content/enumerated-types/derived-from-its-standards/direction.md)
    - [Lane Type](/spec-content/enumerated-types/derived-from-its-standards/lane_type.md)

### Data Fields Using Enumerated Types
For ease of reference, the table below describes all fields in the WZDx specification whose value is restricted an enumerated type, as well as the data table the field is from.

Property Name | Object | Enumerated Type | Notes
--- | --- | --- | ---
`beginning_accuracy` | [road_event](/spec-content/objects/road_events.md) | [Spatial Verification](/spec-content/enumerated-types/spatial_verification.md) | Enumeration updated in WZDx v3.0
`direction` | [road_event](/spec-content/objects/road_event.md) | [Direction](/spec-content/enumerated-types/derived-from-its-standards/direction.md) | Enumeration adapted from TMDD link-alignment
`end_date_accuracy` | [road_event](/spec-content/objects/road_event.md) | [Time Verification](/spec-content/enumerated-types/time_verification.md) | Enumeration updated in WZDx v3.0
`ending_accuracy` | [road_events](/spec-content/objects/road_event.md) | [Spatial Verification](/spec-content/enumerated-types/spatial_verification.md) | Enumeration updated in WZDx v3.0
`event_type` | [road_event](/spec-content/objects/road_event.md) | [Event Type](/spec-content/enumerated-types/event_type.md) | Enumeration create in WZDx v3.0
`event_status` | [road_event](/spec-content/objects/road_event.md) | [Event Status](/spec-content/enumerated-types/event_status.md) | Enumeration created in WZDx v1.0
`geometry_type` | [road_event](/spec-content/objects/road_event.md) | [Geometry Type](/spec-content/enumerated-types/geometry-type.md) | Enumeration from [GeoJSON Specification](https://tools.ietf.org/html/rfc7946)
`location_method` | [road_event_data_source](/spec-content/objects/road_event_data_source.md) | [Location Method](/spec-content/enumerated-types/location_method.md) | Enumeration created in WZDx v3.0 but referenced since v1.1
`restrictions` | [road_event](/spec-content/objects/road_event.md) | [Road Restriction](/spec-content/enumerated-types/road_restriction.md) | Enumeration created in WZDx v1.0
`restriction_type` | [lane_restriction](/spec-content/objects/lane_restriction.md) | [Road Restriction](/spec-content/enumerated-types/road_restriction.md) | Individual lane restrictions | Enumeration created in WZDx v1.0
`restriction_units` | [lane_restriction](/spec-content/objects/lane_restriction.md) | [Lane Restriction Unit](/spec-content/enumerated-types/lane_restriction_unit.md) | This is an intial list, created in WZDx v2.0, and is not intended to be complete. More values will be added as needed.
`start_date_accuracy` | [road_event](/spec-content/objects/road_event.md) | [Time Verification](/spec-content/enumerated-types/time_verification.md) | Enumeration updated in WZDx v3.0
`status` | [lane](/spec-content/objects/lane.md) | [Lane Status](/spec-content/enumerated-types/lane_status.md) | Enumeration created in WZDx v2.0
`type` | [lane](/spec-content/objects/lane.md) | [Lane Type](/spec-content/enumerated-types/derived-from-its-standards/lane_type.md) | Enumeration adapted from TMDD LaneRoadway, updated in WZDx v3.0
`type_name` | [type_of_work](/spec-content/objects/type_of_work.md) | [Work Type Name](/spec-content/enumerated-types/work_type_name.md) | Enumeration created in WZDx v2.0
`vehicle_impact` | [road_event](/spec-content/objects/road_event.md) | [Vehicle Impact](/spec-content/enumerated-types/vehicle_impact.md) | Enumeration created in WZDx v2.0
