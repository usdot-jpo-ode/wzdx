# Worker Presence Object
The `WorkerPresence` object containss information on the presence of workers in the `RoadEvent`'s area.

## Properties
Name | Type | Description | Conformance | Notes
--- | --- | --- | --- | ---
`are_workers_present` | Boolean | Whether workers are present in the work zone event area, following the definition provided in the `worker_presence_definition` property on the `RoadEventDataSource` object. | Required | 
`source` | [WorkerPresenceSource](/spec-content/enumerated-types/WorkerPresenceSource.md) | Data source providing information on whether workers are present in the work zone event area. | Optional | 
`worker_presence_last_confirmed_date` | String; date-time | Date and time at which the presence of workers was last confirmed using the `source`. | Optional |
`confidence` | [WorkerPresenceConficence](/spec-content/enumerated-types/WorkerPresenceConfidence.md) | Data producer’s confidence in workers being present in the work zone event area at the time of feed publication. | Optional | 

## Used By
Property | Object
--- | ---
`worker_presence` | [RoadEvent](/spec-content/objects/RoadEvent.md)
