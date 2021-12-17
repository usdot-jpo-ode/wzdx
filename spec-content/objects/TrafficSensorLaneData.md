# TrafficSensorLaneData Object
The `TrafficSensorLaneData` object describes data for a single lane within a road event (e.g. [WorkZoneRoadEvent](/spec-content/objects/WorkZoneRoadEvent.md)) measured by a [TrafficSensor](/spec-content/objects/TrafficSensor.md) deployed on the roadway.

Note this structure allows a single [TrafficSensor](/spec-content/objects/TrafficSensor.md) to provide data across lanes on multiple road events. It does not allow for lane data to be provided when a road event is not known.

## Properties
Name | Type | Description | Conformance | Notes
--- | --- | --- | --- | ---
`road_event_id` | String | The ID of a [RoadEventFeature](/spec-content/objects/RoadEventFeature.md) which the measured lane occurs in. | Required |
`lane_order` | Positive Integer | The lane's position in sequence within the road event (specified by `road_event_id`). The value of this property corresponds to the associated road event's [Lane](/spec-content/objects/Lane.md)'s `order` property. | Required |
`average_speed_kph` | Number | The average speed of traffic in the lane over the collection interval (in kilometers per hour). | Optional |
`volume_vph` | Integer (>= 0) | The rate of vehicles passing by the sensor in the lane during the collection interval (in vehicles per hour). | Optional |
`occupancy_percent` | Integer (>= 0) | The percent of time the lane monitored by the sensor was occupied by a vehicle over the collection interval. | Optional |

## Used By
Property | Object
--- | ---
`lane_data` | [TrafficSensor](/spec-content/objects/TrafficSensor.md)
