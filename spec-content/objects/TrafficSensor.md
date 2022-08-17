# TrafficSensor Object
The `TrafficSensor` object describes a traffic sensor deployed on a roadway which captures traffic metrics (e.g. speed, volume, occupancy) over a collection interval. The `TrafficSensor` can describe lane-level traffic data if available and if associated with a road event (e.g. [WorkZoneRoadEvent](/spec-content/objects/WorkZoneRoadEvent.md)).

The `TrafficSensor` is a type of field device; it has a `core_details` property which contains the [FieldDeviceCoreDetails](/spec-content/objects/FieldDeviceCoreDetails.md) and exists within a [FieldDeviceFeature](/spec-content/objects/FieldDeviceFeature.md).

## Properties
Name | Type | Description | Conformance | Notes
--- | --- | --- | --- | ---
`core_details` | [FieldDeviceCoreDetails](/spec-content/objects/FieldDeviceCoreDetails.md) | The core details of the field device shared by all field devices types, not specific to traffic sensors. | Required | This property appears on all field devices.
`collection_interval_start_date` | String; [date-time](https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-7.3.1) | The UTC date and time where the `TrafficSensor` data began being collected at. The averages and totals contained in the `TrafficSensor` data apply to the inclusive interval of `collection_interval_start_date` to `collection_interval_end_date`. | Required | All datetime formats shall follow [RFC 3339 Section 5.6](https://tools.ietf.org/html/rfc3339#section-5.6). Example: `2016-11-03T19:37:00Z`. <br />Please see [Business Rule](/Creating_a_WZDx_Feed.md#business-rules) #5.
`collection_interval_end_date` | String; [date-time](https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-7.3.1) | The UTC date and time where the `TrafficSensor` collection interval ended. The averages and totals contained in the `TrafficSensor` data apply to the inclusive interval of `collection_interval_start_date` to `collection_interval_end_date`. | Required | All datetime formats shall follow [RFC 3339 Section 5.6](https://tools.ietf.org/html/rfc3339#section-5.6). Example: `2016-11-03T19:37:00Z`. <br />Please see [Business Rule](/Creating_a_WZDx_Feed.md#business-rules) #5.
`average_speed_kph` | Number (>= 0) | The average speed of vehicles across all lanes over the collection interval in kilometers per hour. | Optional |
`volume_vph` | Number (>= 0) | The rate of vehicles passing by the sensor during the collection interval in vehicles per hour. | Optional |
`occupancy_percent` | Number (>= 0) | The percent of time the roadway section monitored by the sensor was occupied by a vehicle over the collection interval. | Optional |
`lane_data` | Array; [[TrafficSensorLaneData](/spec-content/objects/TrafficSensorLaneData.md)] | A list of objects each describing traffic data for a specific lane. | Optional |

## Used By
Property | Object
--- | ---
`properties` | [FieldDeviceFeature](/spec-content/objects/FieldDeviceFeature.md)
