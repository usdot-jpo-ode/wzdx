# FieldDeviceCoreDetails Object
The `FieldDeviceCoreDetails` object represents the core details—both configuration and current state—of a field device that are shared by all types of field devices. The `FieldDeviceCoreDetails` object cannot occur directly in a data feed and does not represent a field device on its own. It is used as the value of the `core_details` property on every specific type of field device, each represented by its own object.

## Properties
Name | Type | Description | Conformance | Notes
--- | --- | --- | --- | ---
`device_type` | [FieldDeviceType](/spec-content/enumerated-types/FieldDeviceType.md) | The type of field device. | Required |
`data_source_id` | String | Identifies the data source from which the field device data originates. | Required | Please see [Business Rule](/Creating_a_WZDx_Feed.md#business-rules) #4.
`road_names` | Array; [String] | A list of publicly known names of the road on which the device is located. This may include the road number designated by a jurisdiction such as a county, state or interstate (e.g. I-5, VT 133). | Required |
`device_status` | [FieldDeviceStatus](/spec-content/enumerated-types/FieldDeviceStatus.md) | The operational status of the field device. The value of this property indicates if the device is ok or in an error or warning state. | Required |
`update_date` | String; [date-time](https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-7.3.1) | The UTC time and date when the field device information was updated. | Required | Please see [Business Rule](/Creating_a_WZDx_Feed.md#business-rules) #5. 
`has_automatic_location` | Boolean | A yes/no value indicating if the field device location (parent FieldDeviceFeature's `geometry`) is determined automatically from an onboard GPS (`true`) or manually set/overidden (`false`). | Required |
`name` | String | A human-readable name for the field device. | Optional |
`description` | String | A description of the field device. | Optional |
`status_messages` | Array; [String] | A list of messages associated with the device's status, if applicable. Used to provide additional information about the status such as specific warning or error messages. | Optional | The content of this property is up to the producer.
`road_event_ids` | Array; [String] | A list of one or more IDs of a [RoadEventFeature](/spec-content/objects/RoadEventFeature.md) that the device is associated with. | Optional | 
`milepost` | Number | The linear distance measured against a milepost marker along a roadway where the device is located. | Optional | 
`make` | String | The make or manufacturer of the device. | Optional |
`model` | String | The model of the device. | Optional |
`serial_number` | String | The serial number of the device. | Optional |
`firmware_version` | String | The version of firmware the device is using to operate. | Optional |

## Used By
Property | Object
--- | ---
`core_details` | [ArrowBoard](/spec-content/objects/ArrowBoard.md)
`core_details` | [Camera](/spec-content/objects/Camera.md)
`core_details` | [DynamicMessageSign](/spec-content/objects/DynamicMessageSign.md)
`core_details` | [FlashingBeacon](/spec-content/objects/FlashingBeacon.md)
`core_details` | [HybridSign](/spec-content/objects/HybridSign.md)
`core_details` | [LocationMarker](/spec-content/objects/LocationMarker.md)
`core_details` | [TrafficSensor](/spec-content/objects/TrafficSensor.md)
