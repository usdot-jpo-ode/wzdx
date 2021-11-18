# WZDx Specification Content
The WZDx specification describes the content and structure of a WZDx GeoJSON document. It defines distinct entities called objects which contain the data content (called fields or properties) of each entity. The structure of and relationship between objects describes how the GeoJSON output of a WZDx feed looks. Objects are found in the [objects](/spec-content/objects) directory.

The value of some properties of an object are restricted to a defined set of values. These enumerations are found in the [enumerated-types](/spec-content/enumerated-types) directory.

## Objects
The WZDx specification describes the structure and content of a GeoJSON document, which can be called an instance of a "WZDx Feed". Each WZDx GeoJSON document has one root object, a [WZDxFeed](/spec-content/objects/WZDxFeed.md) object, with many properties and nested objects. Each distinct object is described in its own human-readable markdown file within the [objects](/spec-content/objects) directory, as well as within the JSON schema in `/create-feed/schemas/`. An object represents a distinct entity, such as a road event, a lane, or information about a feed. All pieces of data that describe that entity are included as properties of the object.

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
This section provides a tabular list of all objects used in the WZDx specification.

Object | Description
--- | ---
[Lane](/spec-content/objects/Lane.md) | An individual lane within a road event.
[Restriction](/spec-content/objects/Restriction.md) | A restriction on a road event or lane, including type and value.
[Relationship](/spec-content/objects/Relationship.md) | Identification of both sequential and hierarchical relationships between road events and other entities.
[RoadEventCoreDetails](/spec-content/objects/RoadEventCoreDetails.md) | The core details of an event occurring on a roadway (i.e. a road event) that is shared by all types of road events.
[RoadEventDataSource](/spec-content/objects/RoadEventDataSource.md) | Information about a specific data source used to build a work zone data feed.
[RoadEventFeature](/spec-content/objects/RoadEventFeature.md) | The GeoJSON `Feature` container object for a WZDx `RoadEvent`.
[RoadEventFeedInfo](/spec-content/objects/RoadEventFeedInfo.md) | WZDx feed header information such as metadata, contact information, and data sources.
[TypeOfWork](/spec-content/objects/TypeOfWork.md) | A description of the type of work being done in a road event and an indication of if that work will result in an architectural change to the roadway.
[WorkerPresence](/spec-content/objects/WorkerPresence.md) | Information about the presence of workers in the road event area.
[WZDxFeed](/spec-content/objects/WZDxFeed.md) | The root (highest-level) object of a WZDx feed GeoJSON document.
[RoadRestrictionFeed](/spec-content/objects/RoadRestrictionFeed.md) | The root (highest-level) object of a Road Restriction Feed GeoJSON document.

#### Road Events
Object | Description
--- | ---
[DetourRoadEvent](/spec-content/objects/DetourRoadEvent.md) | A detour on a roadway.
[WorkZoneRoadEvent](/spec-content/objects/WorkZoneRoadEvent.md) | A work zone road event including where, when, and what activities are taking place within a work zone on a roadway.
[RestrictionRoadEvent](/spec-content/objects/RestrictionRoadEvent.md) | describes a section of roadway and the limitations of how that section can be used.

### Object Diagram
The object diagram below indicates the relationship between the data objects.

![Object Diagram](/images/wzdx_object_diagram.jpg)

#### Updating the object diagram
When making changes to the specification, the object diagram needs to be updated as well. To modify the object diagram, open `/images/wzdx_object_diagram.drawio` at https://app.diagrams.net (or any drawio editor). Make necessary changes to the diagram using the web editor, then download the `drawio` file and replace `/images/wzdx_object_diagram.drawio` with the new file. Additionally **export** the diagram as a JPEG, using the diagram name as the file name, and replace `/images/wzdx_object_diagram.jpg` with the new image file.

## Enumerated Types
Many object properties are restricted to a finite set of values, defined by an enumerated type. The enumerations for each enumerated type as well as what object properties it is used by is described in its own file in the [enumerated-types](/spec-content/enumerated-types) directory.

### List of Enumerated Types
This section provides a tabular list of all enumerated types used in the WZDx specification.

Enumerated Type | Description
--- | ---
[Direction](/spec-content/enumerated-types/Direction.md) | The direction for a road event based on standard naming for US roads.
[EventType](/spec-content/enumerated-types/EventType.md) | The type of a WZDx road event.
[EventStatus](/spec-content/enumerated-types/EventStatus.md) | The status of a road event.
[LaneStatus](/spec-content/enumerated-types/LaneStatus.md) | The status of a lane for the traveling public.
[LaneType](/spec-content/enumerated-types/LaneType.md) | An indication of the type of lane or shoulder.
[LocationMethod](/spec-content/enumerated-types/LocationMethod.md) | The typical method used to locate the beginning and end of a work zone impact area.
[RestrictionType](/spec-content/enumerated-types/RestrictionType.md) | The type of vehicle restriction on a roadway or lane.
[SpatialVerification](/spec-content/enumerated-types/SpatialVerification.md) | An indication of how a geographical coordinate was defined.
[TimeVerification](/spec-content/enumerated-types/TimeVerification.md) | A measure of how accurate a date-time is.
[UnitOfMeasurement](/spec-content/enumerated-types/UnitOfMeasurement.md) | Unit of measurement (e.g. "pounds", "centimeters").
[VehicleImpact](/spec-content/enumerated-types/VehicleImpact.md) | The impact to vehicular lanes along a single road in a single direction.
[WorkerPresenceConfidence](/spec-content/enumerated-types/WorkerPresenceConfidence.md) | High-level description of the feed publisher's confidence in worker presence
[WorkerPresenceDefinition](/spec-content/enumerated-types/WorkerPresenceDefinition.md) | Method of knowing the presence of workers in the road event area.
[WorkerPresenceMethod](/spec-content/enumerated-types/WorkerPresenceMethod.md) | Methods for how worker presence in a work zone event area is determined.
[WorkTypeName](/spec-content/enumerated-types/WorkTypeName.md) | A high-level text description of the type of work being done in a road event.