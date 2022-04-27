# WorkerPresence Object
The `WorkerPresence` object contains information on the presence of workers in the [WorkZoneRoadEvent](/spec-content/objects/WorkZoneRoadEvent.md)'s area.

## Properties
Name | Type | Description | Conformance | Notes
--- | --- | --- | --- | ---
`are_workers_present` | Boolean | Whether workers are present in the work zone event area. This value should be set in accordance with the definition provided in the `definition` property if it is provided. | Required | 
`definition` | Array; \[[WorkerPresenceDefinition](/spec-content/enumerated-types/WorkerPresenceDefinition.md)\] | A list of situations in which workers are considered to be present in the jurisdiction of the data provider. | Optional
`method` | [WorkerPresenceMethod](/spec-content/enumerated-types/WorkerPresenceMethod.md) | Describes the method for how worker presence in a work zone event area is determined. | Optional | 
`worker_presence_last_confirmed_date` | String; [date-time](https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-7.3.1) | The UTC date and time at which the presence of workers was last confirmed. | Optional | All datetime formats shall follow [RFC 3339 Section 5.6](https://tools.ietf.org/html/rfc3339#section-5.6). <br />Please see [Business Rule](/Creating_a_WZDx_Feed.md#business-rules) #5.
`confidence` | [WorkerPresenceConfidence](/spec-content/enumerated-types/WorkerPresenceConfidence.md) | The data producer’s confidence in the value of `are_workers_present`. | Optional | 

## Used By
Property | Object
--- | ---
`worker_presence` | [WorkZoneRoadEvent](/spec-content/objects/WorkZoneRoadEvent.md)
