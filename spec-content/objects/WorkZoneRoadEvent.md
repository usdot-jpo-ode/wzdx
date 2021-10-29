# WorkZoneRoadEvent Object
The `WorkZoneRoadEvent` object describes a work zone road event including where, when, and what activities are taking place within a work zone on a roadway. A full "work zone" is represented by one or more `WorkZoneRoadEvent`s.

The `WorkZoneRoadEvent` is a type of road event; it has a `core_details` property which contains the [RoadEventCoreDetails](/spec-content/objects/RoadEventCoreDetails.md) and exists within a [RoadEventFeature](/spec-content/objects/RoadEventFeature.md).

## Properties
Name | Type | Description | Conformance | Notes
--- | --- | --- | --- | ---
`core_details` | [RoadEventCoreDetails](/spec-content/objects/RoadEventCoreDetails.md) | The core details of the road event that are shared by all types of road events, not specific to work zones. | Required |
`start_date` | String; [date-time](https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-7.3.1) | The UTC time and date when the event begins. | Required | All datetime formats shall follow [RFC 3339 Section 5.6](https://tools.ietf.org/html/rfc3339#section-5.6). Example: `2016-11-03T19:37:00Z`.
`end_date` | String; [date-time](https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-7.3.1) | The UTC time and date when the event ends. | Required | All datetime formats shall follow [RFC 3339 Section 5.6](https://tools.ietf.org/html/rfc3339#section-5.6). Example: `2016-11-03T19:37:00Z`.
`start_date_accuracy` | [TimeVerification](/spec-content/enumerated-types/TimeVerification.md) | A measure of how accurate the start date-time is. | Required |
`end_date_accuracy` | [TimeVerification](/spec-content/enumerated-types/TimeVerification.md) | A measure of how accurate the end date-time is. | Required | 
`beginning_accuracy` | [SpatialVerification](/spec-content/enumerated-types/SpatialVerification.md) | Indicates how the beginning coordinate was defined. | Required |
`ending_accuracy` | [SpatialVerification](/spec-content/enumerated-types/SpatialVerification.md) | Indicates how the ending coordinate was defined. | Required |
`location_method` | [LocationMethod](/spec-content/enumerated-types/LocationMethod.md) | The typical method used to locate the beginning and end of a work zone impact area. | Required | 
`vehicle_impact` | [VehicleImpact](/spec-content/enumerated-types/VehicleImpact.md) | The impact to vehicular lanes along a single road in a single direction. | Required |
`lanes` | Array; \[[Lane](/spec-content/objects/Lane.md)\] | A list of individual lanes within a road event (roadway segment) | Optional |
`beginning_cross_street` | String | Name or number of the nearest cross street along the roadway where the event begins. | Optional |
`ending_cross_street` | String | Name or number of the nearest cross street along the roadway where the event ends. | Optional |
`beginning_milepost` | Number | The linear distance measured against a milepost marker along a roadway where the event begins. | Optional | A milepost or mile marker is a surveyed distance posted along a roadway measuring the length (in miles or tenth of a mile) from the south west to the north east. These markers are typically notated on State and local government digital road networks. See also the `lrs_type` property on the [RoadEventDataSource](/spec-content/objects/RoadEventDataSource.md) object.
`ending_milepost` | Number | The linear distance measured against a milepost marker along a roadway where the event ends. | Optional | A milepost or mile marker is a surveyed distance posted along a roadway measuring the length (in miles or tenth of a mile) from the south west to the north east. These markers are typically notated on State and local government digital road networks. See also the `lrs_type` property on the [RoadEventDataSource](/spec-content/objects/RoadEventDataSource.md) object.
`event_status` | [EventStatus](/spec-content/enumerated-types/EventStatus.md) | The status of the event. | Optional |
`types_of_work` | Array; \[[TypeOfWork](/spec-content/objects/TypeOfWork.md)\] | A list of the types of work being done in a road event and an indiciation of if each type results in an architectural change to the roadway. | Optional | 
`workers_present` | Boolean | A flag indicating that there are workers present in the event space. | Optional |
`reduced_speed_limit` | Integer | The reduced speed limit posted within the event space. | Optional |
`restrictions` | Array; \[[RoadRestriction](/spec-content/enumerated-types/RoadRestriction.md)\] | Zero or more road restrictions applying to the work zone road segment associated with the work zone. | Optional | These are included as flags rather than detailed restrictions. Detailed restrictions are coded to specific lanes.

## Used By
Property | Object
--- | ---
`properties` | [RoadEventFeature](/spec-content/objects/RoadEventFeature.md)