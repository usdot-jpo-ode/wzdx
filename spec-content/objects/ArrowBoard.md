# ArrowBoard Object
The ArrowBoard object describes an electronic, connected arrow board ([example image](https://trafficlaneclosures.com/wp-content/uploads/2015/03/st4825-arrowboard.png)) which can display an arrow pattern to direct traffic. Arrow boards are often placed at the beginning of a lane closure—thus knowing the location of an arrow board can assist in programmatically generating a WZDx road event with verified spatial information.

The ArrowBoard is a type of field device; it has a `core_details` property which contains the [FieldDeviceCoreDetails](/spec-content/objects/FieldDeviceCoreDetails.md) and exists within a [FieldDeviceFeature](/spec-content/objects/FieldDeviceFeature.md).

## Properties 
Name | Type | Description | Conformance | Notes
--- | --- | --- | --- | ---
`core_details` | [FieldDeviceCoreDetails](/spec-content/objects/FieldDeviceCoreDetails.md) | The core details of the field device that are shared by all types of field devices, not specific to arrow boards. | Required | This property appears on all field devices.
`pattern` | [ArrowBoardPattern](/spec-content/enumerated-types/ArrowBoardPattern.md) | The current pattern displayed on the arrow board. Note this includes `blank`, which indicates that nothing is shown on the arrow board. | Required |
`is_moving` | Boolean | A yes/no value indicating if the arrow board is actively moving (not statically placed) as part of a mobile work zone operation. | Optional | The `is_moving` property is optional and should not be provided if it is not known if the arrow board is moving.
`is_deployed` | Boolean | A yes/no value indicating if the arrow board is in the deployed position (`true`) or stowed/transport position (`false`). | Optional |

## Used By
Property | Object
--- | --- 
`properties` | [FieldDeviceFeature](/spec-content/objects/FieldDeviceFeature.md)