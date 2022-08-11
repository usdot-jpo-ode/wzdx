# DetourRoadEvent Object
The `DetourRoadEvent` object describes a detour on a roadway. The `DetourRoadEvent` can be either a segment of a detour (each segment represented by its own `DetourRoadEvent`) or the entire detour.

The `DetourRoadEvent` is a type of road event; it has a `core_details` property which contains the [RoadEventCoreDetails](/spec-content/objects/RoadEventCoreDetails.md) and exists within a [RoadEventFeature](/spec-content/objects/RoadEventFeature.md).

## Properties
Name | Type | Description | Conformance | Notes
--- | --- | --- | --- | ---
`core_details` | [RoadEventCoreDetails](/spec-content/objects/RoadEventCoreDetails.md) | The core details of the road event that are shared by all types of road events, not specific to detours.  | Required |
`start_date` | String; [date-time](https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-7.3.1) | The UTC time and date when the event begins. | Required | All datetime formats shall follow [RFC 3339 Section 5.6](https://tools.ietf.org/html/rfc3339#section-5.6). Example: `2016-11-03T19:37:00Z`.
`end_date` | String; [date-time](https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-7.3.1) | The UTC time and date when the event ends. | Required | All datetime formats shall follow [RFC 3339 Section 5.6](https://tools.ietf.org/html/rfc3339#section-5.6). Example: `2016-11-03T19:37:00Z`.
`is_start_date_verified` | Boolean | Indicates if the detour has been confirmed to have started, such as from a person or device in the field or a report from a traffic management center. | Conditional; required if `start_date_accuracy` is not provided. |
`is_end_date_verified` | Boolean | Indicates if the detour has been confirmed to have ended, such as from a person or device in the field or a report from a traffic management center. | Conditional; required if `end_date_accuracy` is not provided. |
`beginning_cross_street` | String | Name or number of the nearest cross street along the roadway where the event begins. | Optional |
`ending_cross_street` | String | Name or number of the nearest cross street along the roadway where the event ends. | Optional |
`beginning_milepost` | Number | The linear distance measured against a milepost marker along a roadway where the event begins. | Optional | A milepost or mile marker is a surveyed distance posted along a roadway measuring the length (in miles or tenth of a mile) from the south west to the north east. These markers are typically notated on State and local government digital road networks.
`ending_milepost` | Number | The linear distance measured against a milepost marker along a roadway where the event ends. | Optional | A milepost or mile marker is a surveyed distance posted along a roadway measuring the length (in miles or tenth of a mile) from the south west to the north east. These markers are typically notated on State and local government digital road networks.
`event_status` (DEPRECATED) | [EventStatus](/spec-content/enumerated-types/EventStatus.md) | *This property is deprecated and will be removed in a future release* The status of the event. | Optional |
`start_date_accuracy` (DEPRECATED) | [TimeVerification](/spec-content/enumerated-types/TimeVerification.md) | *This property is deprecated and will be removed in a future release, use `is_start_date_verified` instead* A measure of how accurate the start date-time is. | Conditional; required if `is_start_date_verified` is not provided. |
`end_date_accuracy` (DEPRECATED) | [TimeVerification](/spec-content/enumerated-types/TimeVerification.md) | *This property is deprecated and will be removed in a future release, use `is_end_date_verified` instead* A measure of how accurate the end date-time is. | Conditional; required if `is_end_date_verified` is not provided. |


## Used By
Property | Object
--- | ---
`properties` | [RoadEventFeature](/spec-content/objects/RoadEventFeature.md)
