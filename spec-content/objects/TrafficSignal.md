# TrafficSignal Object
The `TrafficSignal` object describes a temporary traffic signal deployed on a roadway.

The `TrafficSignal` is a type of field device; it has a `core_details` property which contains the [FieldDeviceCoreDetails](/spec-content/objects/FieldDeviceCoreDetails.md) and exists within a [FieldDeviceFeature](/spec-content/objects/FieldDeviceFeature.md).

Name | Type | Description | Conformance | Notes
--- | --- | --- | --- | ---
`core_details` | [FieldDeviceCoreDetails](/spec-content/objects/FieldDeviceCoreDetails.md) | The core details of the traffic signal device. | Required | This property occurs on all field devices.
`mode` | [TrafficSignalMode](/spec-content/enumerated-types/TrafficSignalMode.md) | The current operating mode of the traffic signal. | Required | 

## Used By
Property | Object
--- | ---
`properties` | [FieldDeviceFeature](/spec-content/objects/FieldDeviceFeature.md)
