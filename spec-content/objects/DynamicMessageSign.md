# DynamicMessageSign Object
The DynamicMessageSign object describes a dynamic message sign (DMS)—also known as changeable message sign (CMS) or variable message sign (VMS)—which is an electronic traffic sign deployed on the roadway used to provide information to travelers.

The DynamicMessageSign is a type of field device; it has a `core_details` property which contains the [FieldDeviceCoreDetails](/spec-content/objects/FieldDeviceCoreDetails.md) and exists within a [FieldDeviceFeature](/spec-content/objects/FieldDeviceFeature.md).

## Properties 
Name | Type | Description | Conformance | Notes
--- | --- | --- | --- | ---
`core_details` | [FieldDeviceCoreDetails](/spec-content/objects/FieldDeviceCoreDetails.md) | The core details of the field device that are shared by all types of field devices, not specific to dynamic message signs. | Required | This property appears on all field devices.
`message_multi_string` | String | The MULTI (Mark-Up Language for Transportation Information, see [NTCIP 1203 v03](https://www.ntcip.org/file/2018/11/NTCIP1203v03f.pdf)) formatted string describing the message currently posted to the sign. | Required | If the message is unknown, such as due to an error, the empty string `""` can be used.

## Used By
Property | Object
--- | --- 
`properties` | [FieldDeviceFeature](/spec-content/objects/FieldDeviceFeature.md)