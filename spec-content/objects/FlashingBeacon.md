# FlashingBeacon Object
The `FlashingBeacon` object describes a flashing warning beacon used to supplement a temporary traffic control device. It is mounted on a sign or channelizing device that is used to indicate a warning condition and capture driver attention.

The `FlashingBeacon` is a type of field device; it has a `core_details` property which contains the [FieldDeviceCoreDetails](/spec-content/objects/FieldDeviceCoreDetails.md) and exists within a [FieldDeviceFeature](/spec-content/objects/FieldDeviceFeature.md).

## Properties 
Name | Type | Description | Conformance | Notes
--- | --- | --- | --- | ---
`core_details` | [FieldDeviceCoreDetails](/spec-content/objects/FieldDeviceCoreDetails.md) | The core details of the field device that are shared by all types of field devices, not specific to flashing beacons. | Required | This property appears on all field devices.
`function` | [FlashingBeaconFunction](/spec-content/enumerated-types/FlashingBeaconFunction.md) | Describes the function or purpose of the flashing beacon, i.e. what it is being used to indicate. | Required |
`is_flashing` | Boolean | A yes/no value indicating if the flashing beacon is currently in use and flashing. | Optional | The `is_flashing` property is optional as it should not be provided if the producer does not know if the beacon is flashing (e.g. if it's in error state or similar).
`sign_text` | String | The text on the sign the beacon is mounted on, if applicable. | Optional |

## Used By
Property | Object
--- | --- 
`properties` | [FieldDeviceFeature](/spec-content/objects/FieldDeviceFeature.md)
