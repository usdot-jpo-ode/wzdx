# WZDx Specification Content
The WZDx specification defines the content and structure of several GeoJSON documents, each intended to be distributed as a data feed. Each GeoJSON document (colloquially "feed") contains a single feed root object. WZDx v4.0 defines the following feed objects:

- [WZDxFeed](/spec-content/objects/WZDxFeed.md): describes high-level information about work zone events ocurring on roadways (called "road events") that impact the characteristics of the roadway and involve a change from the default state (such as a lane closure). This is the original work zone data exchange feed and the only feed that WZDx defined until [version 4.0](https://github.com/usdot-jpo-ode/wzdx/releases/tag/v4.0).
- [RoadRestrictionFeed](/spec-content/objects/RoadRestrictionFeed.md): describes the location and details of restrictions on roadways.
- [SwzDeviceFeed](/spec-content/objects/SwzDeviceFeed.md): describes information (location, status, live data) about field devices deployed on the roadway in work zones.

Each feed object contains many layers of child objects. Together all the objects define the WZDx feed. All WZDx objects are located in the [objects](/spec-content/objects) subdirectory and listed in the [Objects](#objects) section of this document.

The value of certain object properties is restricted to a defined set of values called an **enumerated type**. Enumerated types are located in the [enumerated-types](/spec-content/enumerated-types) subdirectory and listed in the [Enumerated Types](#enumerated-types) section of this document.

## Objects
Each WZDx object is described by a table of properties with following columns:

- **Name** - The property name.
- **Type** - The type of data being stored. This can be one of the JSON primative types (only `String`, `Number`, `Array` are used), `Integer`, as defined in the [JSON schema validation specification section 6.1 (Draft 07)](https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.1), a formatted string as defined in [JSON schema validation specification section 7 (Draft 07)](https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-01#section-7.3), a [WZDx Enumerated Type](#enumerated-types), a WZDx Object, or a [GeoJSON Object](https://tools.ietf.org/html/rfc7946#section-3).
- **Description** - A description of the value of the property.
- **Conformance** - An indication of the requirement for including the property in a WZDx GeoJSON document. There are three categories of conformance:
    - *Required* - The property must be included
    - *Optional* - The property may be ommitted
    - *Conditional* - The property's inclusion depends on the inclusion or value of a separate property
- **Notes** - Additional comments, guidance, notes for future consideration, or examples.

### List of Objects
This section provides a tabular list of all objects used in the WZDx specification.

#### Feed-Level
The following objects are high-level and describe either a WZDx feed or information about a WZDx feed:

Object | Description
--- | ---
[FeedDataSource](/spec-content/objects/FeedDataSource.md) | Information about a specific data source used to build a work zone data feed.
[FeedInfo](/spec-content/objects/FeedInfo.md) | Information about a WZDx feed such as metadata, contact information, and data sources.
[RoadRestrictionFeed](/spec-content/objects/RoadRestrictionFeed.md) | The root (highest-level) object of a **Road Restriction Feed** GeoJSON document.
[SwzDeviceFeed](/spec-content/objects/SwzDeviceFeed.md) | The root (highest-level) object of **Smart Work Zone Device Feed** GeoJSON document.
[WZDxFeed](/spec-content/objects/WZDxFeed.md) | The root (highest-level) object of a **WZDx Feed** GeoJSON document.

#### Road Events
The following objects are used to describe events ocurring on roadways (road events) that impact the characteristics of the roadway and involve a change from the default state:

Object | Description
--- | ---
[DetourRoadEvent](/spec-content/objects/DetourRoadEvent.md) | A detour on a roadway.
[Lane](/spec-content/objects/Lane.md) | An individual lane within a road event.
[Relationship](/spec-content/objects/Relationship.md) | Identification of both sequential and hierarchical relationships between road events and other entities.
[Restriction](/spec-content/objects/Restriction.md) | A restriction on a road event or lane, including type and value.
[RestrictionRoadEvent](/spec-content/objects/RestrictionRoadEvent.md) | Describes a section of roadway and the limitations of how that section can be used.
[RoadEventCoreDetails](/spec-content/objects/RoadEventCoreDetails.md) | The core details of an event occurring on a roadway (i.e. a road event) that is shared by all types of road events.
[RoadEventFeature](/spec-content/objects/RoadEventFeature.md) | The GeoJSON `Feature` container object for a WZDx road event.
[TypeOfWork](/spec-content/objects/TypeOfWork.md) | A description of the type of work being done in a road event and an indication of if that work will result in an architectural change to the roadway.
[WorkerPresence](/spec-content/objects/WorkerPresence.md) | Information about the presence of workers in the road event area.
[WorkZoneRoadEvent](/spec-content/objects/WorkZoneRoadEvent.md) | A work zone road event including where, when, and what activities are taking place within a work zone on a roadway. 

#### Field Devices
The following objects are used to describe deployed roadside [ITS](https://en.wikipedia.org/wiki/Intelligent_transportation_system) devices:

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
[MarkedLocation](/spec-content/objects/MarkedLocation.md) | Describes a specific location where a [LocationMarker](/spec-content/objects/LocationMarker.md) is placed, such as the start or end of a work zone road event.
[SwzDeviceFeed](/spec-content/objects/SwzDeviceFeed.md) | The root (highest-level) object of smart work zone device feed GeoJSON document.
[TrafficSensor](/spec-content/objects/TrafficSensor.md) | A traffic sensor deployed on a roadway which captures traffic metrics (e.g. speed, volume, occupancy) over a collection interval.
[TrafficSensorLaneData](/spec-content/objects/TrafficSensorLaneData.md) | Data for a single lane within a road event (e.g. [WorkZoneRoadEvent](/spec-content/objects/WorkZoneRoadEvent.md)) measured by a [TrafficSensor](/spec-content/objects/TrafficSensor.md) deployed on the roadway.

### Object Diagrams
The object diagrams below depict the relationship between the data objects for each WZDx feed.

[TBD]

#### Updating the object diagram
When making changes to the specification, the object diagram needs to be updated as well. To modify the object diagram, open `/images/wzdx_object_diagram.drawio` at https://app.diagrams.net (or any drawio editor). Make necessary changes to the diagram using the web editor, then download the `drawio` file and replace `/images/wzdx_object_diagram.drawio` with the new file. Additionally **export** the diagram as a JPEG, using the diagram name as the file name, and replace `/images/wzdx_object_diagram.jpg` with the new image file.

## Enumerated Types
Many object properties are restricted to a finite set of values defined by an enumerated type. The enumerations for each enumerated type as well as what object properties it is used by is described in its own file in the [enumerated-types](/spec-content/enumerated-types) directory.

### List of Enumerated Types
This section provides a tabular list of all enumerated types used in the WZDx specification.

#### Road Events
The following enumerated types are used by objects that describe road events:

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
[WorkerPresenceConfidence](/spec-content/enumerated-types/WorkerPresenceConfidence.md) | High-level description of the feed publisher's confidence in worker presence.
[WorkerPresenceDefinition](/spec-content/enumerated-types/WorkerPresenceDefinition.md) | Method of knowing the presence of workers in the road event area.
[WorkerPresenceMethod](/spec-content/enumerated-types/WorkerPresenceMethod.md) | Methods for how worker presence in a work zone event area is determined.
[WorkTypeName](/spec-content/enumerated-types/WorkTypeName.md) | A high-level text description of the type of work being done in a road event.

#### Field Devices
The following enumerated types are used in describing deployed roadside [ITS](https://en.wikipedia.org/wiki/Intelligent_transportation_system) devices:

Enumerated Type | Description
--- | ---
[ArrowBoardPattern](/spec-content/enumerated-types/ArrowBoardPattern.md) | A list of options for the posted pattern on an [ArrowBoard](/spec-content/objects/ArrowBoard.md).
[FlashingBeaconFunction](/spec-content/enumerated-types/FlashingBeaconFunction.md) | Describes options for what a [FlashingBeacon](/spec-content/objects/FlashingBeacon.md) is being used to indicate.
[HybridSignDynamicMessageFunction](/spec-content/enumerated-types/HybridSignDynamicMessageFunction.md) | Describes options for the function of the dynamic message displayed by the electronic display on a [HybridSign](/spec-content/objects/HybridSign.md).
[FieldDeviceStatus](/spec-content/enumerated-types/FieldDeviceStatus.md) | The operational status of a field device.
[FieldDeviceType](/spec-content/enumerated-types/FieldDeviceType.md) | The type of a field device.
[MarkedLocationType](/spec-content/enumerated-types/MarkedLocationType.md) | Describes options for what a [MarkedLocation](/spec-content/objects/MarkedLocation.md) can mark, such as the start or end of a road event.
