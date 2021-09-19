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
This section provides a tabular list of all objects used in the WZDx specification, sectioned by whether the object applies to the feed-level, road event features, or field devices features.

#### Feed-Level
Object | Description
--- | ---
[RoadEventDataSource](/spec-content/objects/RoadEventDataSource.md) | Information about a specific data source used to build a work zone data feed.
[RoadEventFeedInfo](/spec-content/objects/RoadEventFeedInfo.md) | WZDx feed header information such as metadata, contact information, and data sources.
[WZDxFeed](/spec-content/objects/WZDxFeed.md) | The root (highest-level) object of a WZDx feed GeoJSON document.

#### Road Event Features
Object | Description
--- | ---
[Lane](/spec-content/objects/Lane.md) | An individual lane within a road event.
[LaneRestriction](/spec-content/objects/LaneRestriction.md) | A lane-level restriction, including type and value.
[Relationship](/spec-content/objects/Relationship.md) | Identification of both sequential and hierarchical relationships between road events and other entities.
[RoadEvent](/spec-content/objects/RoadEvent.md) | Information that describes where, when, and what activity is taking place along a road segment.
[RoadEventFeature](/spec-content/objects/RoadEventFeature.md) | The GeoJSON `Feature` container object for a WZDx `RoadEvent`.
[TypeOfWork](/spec-content/objects/TypeOfWork.md) | A description of the type of work being done in a road event and an indication of if that work will result in an architectural change to the roadway.

#### Field Device Features
Object | Description
--- | ---
[ArrowBoard](/spec-content/objects/ArrowBoard.md) | An electronic, connected arrow board which can display an arrow pattern to direct traffic.
[Camera](/spec-content/objects/Camera.md) | A camera device deployed in the field, capable of capturing still images.
[DynamicMessagesSign](/spec-content/objects/DynamicMessageSign.md) | An electronic traffic sign deployed on the roadway, used to provide information to travelers.
[FlashingBeacon](/spec-content/objects/FlashingBeacon.md) | A flashing beacon light of any form (e.g. trailer-mounted, vehicle), used to indicate something or capture driver attention.
[FieldDeviceFeature](/spec-content/objects/FieldDeviceFeature.md) | The GeoJSON `Feature` container object for a deployed field device.
[FieldDeviceCoreDetails](/spec-content/objects/FieldDeviceCoreDetails.md) | The core details—both configuration and current state—of a field device that are shared by all types of field devices.
[HybridSign](/spec-content/objects/HybridSign.md) | A hybrid sign that contains static text (e.g. on an alumium sign) along with a single electronic message display, used to provide information to travelers.
[LocationMarker](/spec-content/objects/LocationMarker.md) | Describes any GPS-enabled ITS device that is placed at a point on a roadway to dynamically know the location of something (often the beginning or end of a work zone).
[MarkedLocation](/spec-contentobjects/MarkedLocation.md) | Describes a specific location where a [LocationMarker](/spec-content/objects/LocationMarker.md) is placed, such as the start or end of a work zone road event.
[TrafficSensor](/spec-content/objects/TrafficSensor.md) | A traffic sensor deployed on a roadway which captures traffic metrics (e.g. speed, volume, occupancy) over a collection interval.
[TrafficSensorLaneData](/spec-content/objects/TrafficSensorLaneData.md) | Data for a single lane within a [RoadEvent](/spec-content/objects/RoadEvent.md) measured by a [TrafficSensor](/spec-content/objects/TrafficSensor.md) deployed on the roadway.

### Object Diagram
The object diagram below indicates the relationship between the data objects.

![Object Diagram](/images/wzdx_object_diagram.jpg)

#### Updating the object diagram
When making changes to the specification, the object diagram needs to be updated as well. To modify the object diagram, open `/images/wzdx_object_diagram.drawio` at https://app.diagrams.net (or any drawio editor). Make necessary changes to the diagram using the web editor, then download the `drawio` file and replace `/images/wzdx_object_diagram.drawio` with the new file. Additionally **export** the diagram as a JPEG, using the diagram name as the file name, and replace `/images/wzdx_object_diagram.jpg` with the new image file.

## Enumerated Types
Many object properties are restricted to a finite set of values, defined by an enumerated type. The enumerations for each enumerated type as well as what object properties it is used by is described in its own file in the [enumerated-types](/spec-content/enumerated-types) directory.

### List of Enumerated Types
This section provides a tabular list of all enumerated types used in the WZDx specification, sectioned by whether they apply to the feed-level, road event features, or field device features.

#### Feed-Level
[LocationMethod](/spec-content/enumerated-types/LocationMethod.md) | The typical method used to locate the beginning and end of a work zone impact area.

#### Road Event Features
Enumerated Type | Description
--- | ---
[EventType](/spec-content/enumerated-types/EventType.md) | The type of a WZDx road event.
[EventStatus](/spec-content/enumerated-types/EventStatus.md) | The status of a road event.
[Direction](/spec-content/enumerated-types/Direction.md) | The direction for a road event based on standard naming for US roads.
[LaneRestrictionUnit](/spec-content/enumerated-types/LaneRestrictionUnit.md) | Units of measure used for a lane restriction value.
[LaneStatus](/spec-content/enumerated-types/LaneStatus.md) | The status of a lane for the traveling public.
[LaneType](/spec-content/enumerated-types/LaneType.md) | An indication of the type of lane or shoulder.
[RoadRestriction](/spec-content/enumerated-types/RoadRestriction.md) | The type of vehicle restriction on a roadway.
[SpatialVerification](/spec-content/enumerated-types/SpatialVerification.md) | An indication of how a geographical coordinate was defined.
[TimeVerification](/spec-content/enumerated-types/TimeVerification.md) | A measure of how accurate a date-time is.
[VehicleImpact](/spec-content/enumerated-types/VehicleImpact.md) | The impact to vehicular lanes along a single road in a single direction.
[WorkTypeName](/spec-content/enumerated-types/WorkTypeName.md) | A high-level text description of the type of work being done in a road event.

#### Field Devices
Enumerated Type | Description
--- | ---
[ArrowBoardPattern](/spec-content/enumerated-types/ArrowBoardPattern.md) | A list of options for the posted pattern on an [ArrowBoard](/spec-content/objects/ArrowBoard.md).
[FlashingBeaconFunction](/spec-content/enumerated-types/FlashingBeaconFunction.md) | Describes options for what a [FlashingBeacon](/spec-content/objects/FlashingBeacon.md) is being used to indicate.
[HybridSignVariableMessageFunction] | Describes options for the function of the variable message displayed by the electronic display on a [HybridSign](/spec-content/objects/HybridSign.md).
[FieldDeviceStatus](/spec-content/enumerated-types/FieldDeviceStatus.md) | The operational status of a field device.
[FieldDeviceType](/spec-content/enumerated-types/EventStatus.md) | The type of a field device.
[MarkedLocationType](/spec-content/enumerated-types/MarkedLocationType.md) | Describes options for what a [MarkedLocation](/spec-content/objects/MarkedLocation.md) can mark, such as the start or end of a road event.