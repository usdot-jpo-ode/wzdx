# WorkZoneRoadEvent Object
The `WorkZoneRoadEvent` object describes a work zone road event including where, when, and what activities are taking place within a work zone on a roadway. A full "work zone" is represented by one or more `WorkZoneRoadEvent`s.

The `WorkZoneRoadEvent` is a type of road event; it has a `core_details` property which contains the [RoadEventCoreDetails](/spec-content/objects/RoadEventCoreDetails.md) and exists within a [RoadEventFeature](/spec-content/objects/RoadEventFeature.md).

## Properties
Name | Type | Description | Conformance | Examples
--- | --- | --- | --- | --- 
`core_details` | [RoadEventCoreDetails](/spec-content/objects/RoadEventCoreDetails.md) | The core details of the road event that are shared by all types of road events, not specific to work zones. | Required | See [RoadEventCoreDetails Object](https://github.com/usdot-jpo-ode/wzdx/blob/v4.0_business_rules/spec-content/objects/RoadEventCoreDetails.md) Table |
`start_date` | String; [date-time](https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-7.3.1) | The UTC time and date when the event begins. <br />**Business Rule**: All datetime formats shall follow [RFC 3339 Section 5.6](https://tools.ietf.org/html/rfc3339#section-5.6). | Required  | `2016-11-03T19:37:00Z` |
`end_date` | String; [date-time](https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-7.3.1)  | The UTC time and date when the event ends. <br />**Business Rule**: All datetime formats shall follow [RFC 3339 Section 5.6](https://tools.ietf.org/html/rfc3339#section-5.6). | Required  | `2016-11-03T19:37:00Z` |
`start_date_accuracy` | [TimeVerification](/spec-content/enumerated-types/TimeVerification.md) | A measure of how accurate the start date-time is. | Required | "verified" |
`end_date_accuracy` | [TimeVerification](/spec-content/enumerated-types/TimeVerification.md) | A measure of how accurate the end date-time is. | Required  | "estimated" |
`beginning_accuracy` | [SpatialVerification](/spec-content/enumerated-types/SpatialVerification.md) | Indicates how the beginning coordinate was defined. | Required | "verified" |
`ending_accuracy` | [SpatialVerification](/spec-content/enumerated-types/SpatialVerification.md) | Indicates how the ending coordinate was defined. | Required | "verified" |
`location_method` | [LocationMethod](/spec-content/enumerated-types/LocationMethod.md) | The typical method used to locate the beginning and end of a work zone impact area. | Required | "sign-method" |
`vehicle_impact` | [VehicleImpact](/spec-content/enumerated-types/VehicleImpact.md) | The impact to vehicular lanes along a single road in a single direction. | Required | "all-lanes-closed" |
`lanes` | Array; \[[Lane](/spec-content/objects/Lane.md)\] | A list of individual lanes within a road event (roadway segment). <br />**Business Rule**: If the lanes property is provided, it must include one entry for every lane in the road event. Providing lane information for only some of the lanes in a road event is not allowed. | Optional | {"order":1, "type":"general", "status":"open"} |
`beginning_cross_street` | String | Name or number of the nearest cross street along the roadway where the event begins. | Optional | "Main Street" |
`ending_cross_street` | String | Name or number of the nearest cross street along the roadway where the event ends. | Optional | "Second Street" |
`beginning_milepost` | Number | The linear distance measured against a milepost marker along a roadway where the event begins. <br />**Business Rule**: Include only as many significant figures as your equipment can accurately measure. | Optional | 10.50 |
`ending_milepost` | Number | The linear distance measured against a milepost marker along a roadway where the event ends. <br />**Business Rule**: Include only as many significant figures as your equipment can accurately measure. | Optional | 15.85 |
`event_status` | [EventStatus](/spec-content/enumerated-types/EventStatus.md) | The status of the event. | Optional | "active" |
`types_of_work` | Array; \[[TypeOfWork](/spec-content/objects/TypeOfWork.md)\] | A list of the types of work being done in a road event and an indiciation of if each type results in an architectural change to the roadway. | Optional | "surface-work" |
`worker_presence` | [WorkerPresence](/spec-content/objects/WorkerPresence.md) | Information about whether workers are present in the road event area. | Optional |"false" |
`reduced_speed_limit_kph` | Number | The reduced speed limit posted within the road event, in kilometers per hour. This property only needs to be supplied if the speed limit within the road event is lower than the posted speed limit of the roadway. <br />**Business Rule**: This property only needs to be supplied if the speed limit within the road event is lower than the posted speed limit of the roadway.| Optional | 45 |
`restrictions` | Array; [[Restriction](/spec-content/objects/Restriction.md)] | A list of zero or more road restrictions that apply to the roadway segment described by this road event. <br />**Note**: Restrictions can also be provided on an individual lane.| Optional | {“type”:“reduced-height”, “value”:11.75, “unit”:“feet”} |


## Used By
Property | Object
--- | ---
`properties` | [RoadEventFeature](/spec-content/objects/RoadEventFeature.md)
