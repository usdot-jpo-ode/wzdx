# FieldDeviceStatus Enumerated Type
The `FieldDeviceStatus` enumerated type describes the operational status of a field device. The status indicates the health of the device.

## Values
Value | Description 
--- | ---
`ok` | The device is turned on and working without issue.
`warning` | The device is functional but is impaired or impacted in a way that is not critical to operation.
`error` | The device is impaired such that it is not able to perform one or more necessary functions.
`unknown` | The device's operational status is not known.

## Used By
Property | Object
--- | ---
`device_status` | [FieldDeviceCoreDetails](/spec-content/objects/FieldDeviceCoreDetails.md)