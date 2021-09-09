# Worker Presence Object
The `WorkerPresence` object containss information on the presence of workers in the `RoadEvent`'s area.

## Properties
Name | Type | Description | Conformance | Notes
--- | --- | --- | --- | ---
`are_workers_present` | Boolean | Whether workers are present in the work zone event area, following the definition provided in the `worker_presence_definition` property on the `RoadEventDataSource` object. | Required | 
`source` | [WorkerPresenceSource](/spec-content/enumerated-types/WorkerPresenceSource.md) | Data source providing information on whether workers are present in the work zone event area. | Optional | 
`last_confirmed_date` | String; date-time | Date and time at which the presence of workers was last confirmed using the `source`. | Optional |
`reliability_score` | Integer, range 0-10 | Numerical score representing the data producer’s understanding of the likelihood of workers being present in the work zone event area, with 10 indicating absolute certainty. | Optional | 

## Used By
Property | Object
--- | ---
`worker_presence` | [RoadEvent](/spec-content/objects/RoadEvent.md)
