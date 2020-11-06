# WZDx Specification Content
The WZDx specification describes the content and structure of a WZDx GeoJSONrepository  a relational model to manage data structure. It defines distinct entities called objects which contain the data content (called fields or properties) of each entity. The structure of and relationship between objects describes how a WZDx feed will look. These objects are found in the [objects](/spec-content/objects) directory.

The value of some properties of an object are restricted to a defined set of values. These enumerations are found in the [enumerated-types](/spec-content/enumerated-types) directory.

## Objects
The WZDx specification describes the structure and content of a GeoJSON document, which can be called an instance of a "WZDx Feed". Each WZDx GeoJSON document has one root object, a [WZDxFeed](/spec-content/objects/WZDxFeed.md) object, with many properties and nested objects. Each distinct object is described in its own human-readable markdown file within the [objects](/spec-content/objects) directory, as well as within the JSON schema in `/create-feed/schemas/`. An object represents a distinct entity, such as a road event, a lane, or information about a feed. All pieces of data that descibe that entity are included as properties of the object.

### Object Details
Each object is described by a table of properties, which are each defined by the following characteristics:

- **Name** - The property name.
- **Type** - The type of data being stored. This can be one of the JSON primative types (only `String`, `Number`, `Array` are used), `Integer`, as defined in the [JSON schema validation specification](https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.1), a [WZDx Enumerated Type](#enumerated-types), a WZDx Object, or a [GeoJSON Object](https://tools.ietf.org/html/rfc7946#section-3).
- **Description** - A description of the value of the property.
- **Conformance** - An indication of the requirement for including the property in a WZDx GeoJSON document. There are three categories of conformance:
    - *Required* - The property must be included
    - *Optional* - The property may be ommitted
    - *Conditional* - The property's inclusion depends on the inclusion or value of a separate property
- **Notes** - Additional comments, guidance, notes for future consideration, or examples.

### List of Objects
This section provides a tabular list of all data tables uses in the WZDx specification.

Object | Description
--- | ---
[Lane](/spec-content/objects/Lane.md) | An individual lane within a road event.
[LaneRestriction](/spec-content/objects/LaneRestrictions.md) | A lane-level restriction, including type and value.
[Relationships](/spec-content/objects/Relationships.md) | Identification of both sequential and hierarchical relationships between road events and other entities.
[RoadEvent](/spec-content/objects/RoadEvents.md) | Information that describes where, when, and what activity is taking place along a road segment.
[RoadEventDataSource](/spec-content/objects/RoadEventDataSources.md) | Information about a specific data source used to build a work zone data feed.
[RoadEventFeature](/spec-content/objects/RoadEventFeature.md) | The GeoJSON `Feature` container object for a WZDx `RoadEvent`.
[RoadEventFeedInfo](/spec-content/objects/RoadEventFeedInfo.md) | WZDx feed header information such as metadata, contact information, and data sources.
[TypeOfWork](/spec-content/objects/TypeOfWork.md) | A description of the type of work being done in a road event and an indication of if that work will result in an architectural change to the roadway.
[WZDxFeed](/spec-content/objects/WZDxFeed.md) | The root (highest-level) object of a WZDx feed GeoJSON document.

### Entity Relationship Diagram
The Entity Relationship Diagram (ERD) below indicates the relationship between the data tables.

![Entity Relationship Diagram](/images/road_event_erd.jpg)

#### Updating the ERD
When making changes to the specification, the ERD needs to be updated as well. To modify the ERD, open `/images/road_event_erd.drawio` at https://app.diagrams.net (or any drawio editor). There will be two diagrams shown as tabs in the bottom of the screen: `road_event_erd` for the full diagram and `feed_source_event_relationship` for the section on data sources/feeds only. Make necessary changes to the diagram using the web editor, then download the `drawio` file and replace `/images/road_event_erd.drawio` with the new file. Additionally **export** each of the two diagrams individually as a JPEG, using the diagram name as the file name, and replace `/images/road_event_erd.jpg` and `/images/feed_source_event_relationship.jpg` with the new image files.

## Enumerated Types
Many object properties are restricted to a finite set of values, defined by an enumerated type. The enumerations for each enumerated type as well as what object properties it is used by is described in its own file in the [enumerated-types](/spec-content/enumerated-types) directory.

### List of Enumerated Types
This section provides a tabular list of all enumerated types used in the WZDx specification.

Enumerated Type | Description
--- | --- | ---
[EventType](/spec-content/enumerated-types/EventType.md) | The type of a WZDx road event.
[EventStatus](/spec-content/enumerated-types/EventStatus.md) | The status of a road event.
[LaneRestrictionUnit](/spec-content/enumerated-types/LaneRestrictionUnit.md) | Units of measure used for a lane restriction value.
[LaneStatus](/spec-content/enumerated-types/LaneStatus.md) | The status of a lane for the traveling public.
[LocationMethod](/spec-content/enumerated-types/LocationMethod.md) | The typical method used to locate the beginning and end of a work zone impact area.
[RoadRestriction](/spec-content/enumerated-types/RoadRestriction.md) | The type of vehicle restriction on a roadway.
[SpatialVerification](/spec-content/enumerated-types/SpatialVerification.md) | An indication of how a geographical coordinate was defined.
[TimeVerification](/spec-content/enumerated-types/TimeVerification.md) | A measure of how accurate a date-time is.
[VehicleImpact](/spec-content/enumerated-types/VehicleImpact.md) | The impact to vehicular lanes along a single road in a single direction.
[WorkTypeName](/spec-content/enumerated-types/WorkTypeName.md) | A high-level text description of the type of work being done in a road event.
[Direction](/spec-content/enumerated-types/derived-from-its-standards/Direction.md) | The direction for a road event based on standard naming for US roads.
[LaneType](/spec-content/enumerated-types/derived-from-its-standards/LaneType.md) | An indication of the type of lane or shoulder.

### Enumerated Types Derived from ITS Standards
Some enumerated types are specifically derived from the Traffic Management Data Dictionary (TMDD); these are found in the [enumerated-types/derived-from-its-standards](/spec-content/enumerated-types/derived-from-its-standards/) directory. The following enumerated types are translated from enumerations in the [TMDD](https://www.standards.its.dot.gov/Content/documents/advisories/TMDD_2013.aspx):

- [Direction](/spec-content/enumerated-types/derived-from-its-standards/Direction.md)
- [LaneType](/spec-content/enumerated-types/derived-from-its-standards/LaneType.md)

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

### Object Properties using Enumerated Types
For ease of reference, the table below describes all properties in the WZDx specification whose value is restricted an enumerated type, as well as the object that contains that property.

Property | Object | Enumerated Type | Notes
--- | --- | --- | ---
`beginning_accuracy` | [RoadEvent](/spec-content/objects/RoadEvent.md) | [SpatialVerification](/spec-content/enumerated-types/SpatialVerification.md) | Enumeration updated in WZDx v3.0
`direction` | [RoadEvent](/spec-content/objects/RoadEvent.md) | [Direction](/spec-content/enumerated-types/derived-from-its-standards/Direction.md) | Enumeration adapted from TMDD link-alignment
`end_date_accuracy` | [RoadEvent](/spec-content/objects/RoadEvent.md) | [TimeVerification](/spec-content/enumerated-types/TimeVerification.md) | Enumeration updated in WZDx v3.0
`ending_accuracy` | [RoadEvent](/spec-content/objects/RoadEvent.md) | [SpatialVerification](/spec-content/enumerated-types/SpatialVerification.md) | Enumeration updated in WZDx v3.0
`event_type` | [RoadEvent](/spec-content/objects/RoadEvent.md) | [EventType](/spec-content/enumerated-types/EventType.md) | Enumeration create in WZDx v3.0
`event_status` | [RoadEvent](/spec-content/objects/RoadEvent.md) | [EventStatus](/spec-content/enumerated-types/EventStatus.md) | Enumeration created in WZDx v1.0
`location_method` | [RoadEventDataSource](/spec-content/objects/RoadEventDataSource.md) | [LocationMethod](/spec-content/enumerated-types/LocationMethod.md) | Enumeration created in WZDx v3.0 but referenced since v1.1
`restrictions` | [RoadEvent](/spec-content/objects/RoadEvent.md) | [RoadRestriction](/spec-content/enumerated-types/RoadRestriction.md) | Enumeration created in WZDx v1.0
`restriction_type` | [LaneRestriction](/spec-content/objects/LaneRestriction.md) | [RoadRestriction](/spec-content/enumerated-types/RoadRestriction.md) | Individual lane restrictions | Enumeration created in WZDx v1.0
`restriction_units` | [LaneRestriction](/spec-content/objects/LaneRestriction.md) | [LaneRestrictionUnit](/spec-content/enumerated-types/LaneRestrictionUnit.md) | This is an intial list, created in WZDx v2.0, and is not intended to be complete. More values will be added as needed.
`start_date_accuracy` | [RoadEvent](/spec-content/objects/RoadEvent.md) | [TimeVerification](/spec-content/enumerated-types/TimeVerification.md) | Enumeration updated in WZDx v3.0
`status` | [Lane](/spec-content/objects/Lane.md) | [LaneStatus](/spec-content/enumerated-types/LaneStatus.md) | Enumeration created in WZDx v2.0
`type` | [Lane](/spec-content/objects/Lane.md) | [LaneType](/spec-content/enumerated-types/derived-from-its-standards/LaneType.md) | Enumeration adapted from TMDD LaneRoadway, updated in WZDx v3.0
`type_name` | [TypeOfWork](/spec-content/objects/TypeOfWork.md) | [WorkTypeName](/spec-content/enumerated-types/WorkTypeName.md) | Enumeration created in WZDx v2.0
`vehicle_impact` | [RoadEvent](/spec-content/objects/RoadEvent.md) | [VehicleImpact](/spec-content/enumerated-types/VehicleImpact.md) | Enumeration created in WZDx v2.0
