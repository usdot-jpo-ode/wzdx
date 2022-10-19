# WorkZoneRoadEvent Object
The `WorkZoneRoadEvent` object describes a work zone road event including where, when, and what activities are taking place within a work zone on a roadway. A full "work zone" is represented by one or more `WorkZoneRoadEvent`s.

The `WorkZoneRoadEvent` is a type of road event; it has a `core_details` property which contains the [RoadEventCoreDetails](/spec-content/objects/RoadEventCoreDetails.md) and exists within a [RoadEventFeature](/spec-content/objects/RoadEventFeature.md).

## Properties
Name | Type | Description | Conformance | Notes
--- | --- | --- | --- | ---
`core_details` | [RoadEventCoreDetails](/spec-content/objects/RoadEventCoreDetails.md) | The core details of the road event that are shared by all types of road events, not specific to work zones. | Required | Please see [Business Rule](/Creating_a_WZDx_Feed.md#business-rules) #1.
`start_date` | String; [date-time](https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-7.3.1) | The UTC time and date when the event begins. | Required | All datetime formats shall follow [RFC 3339 Section 5.6](https://tools.ietf.org/html/rfc3339#section-5.6). Example: `2016-11-03T19:37:00Z`. <br />Please see [Business Rule](/Creating_a_WZDx_Feed.md#business-rules) #5.
`end_date` | String; [date-time](https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-7.3.1) | The UTC time and date when the event ends. | Required | All datetime formats shall follow [RFC 3339 Section 5.6](https://tools.ietf.org/html/rfc3339#section-5.6). Example: `2016-11-03T19:37:00Z`. <br />Please see [Business Rule](/Creating_a_WZDx_Feed.md#business-rules) #5.
`is_start_date_verified` | Boolean | Indicates if work has been confirmed to have started, such as from a person or field device. | Conditional; required if `start_date_accuracy` is not provided. |
`is_end_date_verified` | Boolean | Indicates if work has been confirmed to have ended, such as from a person or field device. | Conditional; required if `end_date_accuracy` is not provided. |
`is_start_position_verified` | Boolean | Indicates if the start position (first geometric coordinate pair) is based on actual reported data from a GPS-equipped device that measured the location of the start of the work zone. | Conditional; required if `beginning_accuracy` is not provided. |
`is_end_position_verified` | Boolean | Indicates if the end position (last geometric coordinate pair) is based on actual reported data from a GPS-equipped device that measured the location of the end of the work zone. | Conditional; required if `ending_accuracy` is not provided. |
`location_method` | [LocationMethod](/spec-content/enumerated-types/LocationMethod.md) | The typical method used to locate the beginning and end of a work zone impact area. | Required | 
`vehicle_impact` | [VehicleImpact](/spec-content/enumerated-types/VehicleImpact.md) | The impact to vehicular lanes along a single road in a single direction. | Required |
`impacted_cds_curb_zones`| Array; [[CdsCurbZoneReference]](/spec-content/objects/CdsCurbZoneReference.md) | One or more references to external [CDS Curb Zones](https://github.com/openmobilityfoundation/curb-data-specification/tree/main/curbs#curb-zone) impacted by the work zone. | Optional |
`lanes` | Array; \[[Lane](/spec-content/objects/Lane.md)\] | A list of individual lanes within a road event (roadway segment). | Optional | Please see [Business Rules](/Creating_a_WZDx_Feed.md#business-rules) #1 and #2.
`beginning_cross_street` | String | Name or number of the nearest cross street along the roadway where the event begins. | Optional |
`ending_cross_street` | String | Name or number of the nearest cross street along the roadway where the event ends. | Optional |
`beginning_milepost` | Number | The linear distance measured against a milepost marker along a roadway where the event begins. | Optional | A milepost or mile marker is a surveyed distance posted along a roadway measuring the length (in miles or tenth of a mile) from the south west to the north east. These markers are typically notated on State and local government digital road networks.
`ending_milepost` | Number | The linear distance measured against a milepost marker along a roadway where the event ends. | Optional | A milepost or mile marker is a surveyed distance posted along a roadway measuring the length (in miles or tenth of a mile) from the south west to the north east. These markers are typically notated on State and local government digital road networks.
`types_of_work` | Array; \[[TypeOfWork](/spec-content/objects/TypeOfWork.md)\] | A list of the types of work being done in a road event and an indiciation of if each type results in an architectural change to the roadway. | Optional | 
`worker_presence` | [WorkerPresence](/spec-content/objects/WorkerPresence.md) | Information about whether workers are present in the road event area. | Optional |
`reduced_speed_limit_kph` | Number | The reduced speed limit posted within the road event, in kilometers per hour. This property only needs to be supplied if the speed limit within the road event is lower than the posted speed limit of the roadway. | Optional |
`restrictions` | Array; [[Restriction](/spec-content/objects/Restriction.md)] | A list of zero or more road restrictions that apply to the roadway segment described by this road event. | Optional | Restrictions can also be provided on an individual lane.
`event_status` (DEPRECATED) | [EventStatus](/spec-content/enumerated-types/EventStatus.md) | *This property is deprecated and will be removed in a future release* The status of the event. | Optional |
`start_date_accuracy` (DEPRECATED) | [TimeVerification](/spec-content/enumerated-types/TimeVerification.md) | *This property is deprecated and will be removed in a future release, use `is_start_date_verified` instead* A measure of how accurate the start date-time is. | Conditional; required if `is_start_date_verified` is not provided. |
`end_date_accuracy` (DEPRECATED) | [TimeVerification](/spec-content/enumerated-types/TimeVerification.md) | *This property is deprecated and will be removed in a future release, use `is_end_date_verified` instead* A measure of how accurate the end date-time is. | Conditional; required if `is_end_date_verified` is not provided. |
`beginning_accuracy` (DEPRECATED) | [SpatialVerification](/spec-content/enumerated-types/SpatialVerification.md) | *This property is deprecated and will be removed in a future version, use `is_start_position_verified` instead.* Indicates how the beginning coordinate was defined. | Conditional; required if `is_start_position_verified` is not provided. |
`ending_accuracy` (DEPRECATED) | [SpatialVerification](/spec-content/enumerated-types/SpatialVerification.md) | *This property is deprecated and will be removed in a future version, use `is_end_position_verified` instead.* Indicates how the ending coordinate was defined. | Conditional; required if `is_end_position_verified` is not provided. |

## Used By
Property | Object
--- | ---
`properties` | [RoadEventFeature](/spec-content/objects/RoadEventFeature.md)
