# HybridSign Object
The HybridSign object describes a hybrid sign that contains static text (e.g. on an aluminum sign) along with a single electronic message display, used to provide information to travelers. This object is intended to be general to represent hybrid signs with multiple functions, such as variable speed limit signs (VSLS), hybrid travel time signs and other similar systems.

The HybridSign is a type of field device; it has a `core_details` property which contains the [FieldDeviceCoreDetails](/spec-content/objects/FieldDeviceCoreDetails.md) and exists within a [FieldDeviceFeature](/spec-content/objects/FieldDeviceFeature.md).

## Properties 
Name | Type | Description | Conformance | Notes
--- | --- | --- | --- | ---
`core_details` | [FieldDeviceCoreDetails](/spec-content/objects/FieldDeviceCoreDetails.md) | The core details of the field device shared by all field devices types, not specific to hybrid signs. | Required | This property appears on all field devices.
`dynamic_message_function` | [HybridSignDynamicMessageFunction](/spec-content/enumerated-types/HybridSignDynamicMessageFunction.md) | The function the dynamic message displayed (e.g. a speed limit). | Required |
`dynamic_message_text` | String | A text representation of the message currently posted to the electronic component of the hybrid sign. | Required |
`static_sign_text` | String | The static text on the non-electronic component of the hybrid sign. | Optional |

## Used By
Property | Object
--- | --- 
`properties` | [FieldDeviceFeature](/spec-content/objects/FieldDeviceFeature.md)
