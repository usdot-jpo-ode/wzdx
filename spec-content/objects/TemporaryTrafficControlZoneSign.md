# TemporaryTrafficControlZoneSign Object
The `TemporaryTrafficControlZoneSign` object describes a [temporary traffic control zone sign, as defined by MUTCD Section 6F.02 General Characteristics of Signs](https://mutcd.fhwa.dot.gov/htm/2009/part6/part6f.htm). A temporary traffic control zone sign is a static, non-electronic sign that conveys both general and specific messages by means of words, symbols, and/or arrows.

The `TemporaryTrafficControlZoneSign` is a type of field device; it has a `core_details` property which contains the [FieldDeviceCoreDetails](/spec-content/objects/FieldDeviceCoreDetails.md) and exists within a [FieldDeviceFeature](/spec-content/objects/FieldDeviceFeature.md).

## Properties 
Name | Type | Description | Conformance | Notes
--- | --- | --- | --- | ---
`core_details` | [FieldDeviceCoreDetails](/spec-content/objects/FieldDeviceCoreDetails.md) | The core details of the field device shared by all field devices types, not specific to a temporary traffic control zone sign. | Required | This property appears on all field devices.
`mutcd_sign_designation` | String | The "Sign Designation" as described in [MUTCD Table 6F-1. Temporary Traffic Control Zone Sign and Plaque Sizes](https://mutcd.fhwa.dot.gov/htm/2009/part6/part6f.htm) "Sign Designation" column. | Required |
`mutcd_sign_name` | String | The human-readable name that accopanies the `mutcd_sign_designation` as described in [MUTCD Table 6F-1. Temporary Traffic Control Zone Sign and Plaque Sizes](https://mutcd.fhwa.dot.gov/htm/2009/part6/part6f.htm) "Sign or Plaque" column. | Optional |
`variable_sign_content` | String | Additional content on the sign for signs that is not explicit by the `mutcd_sign_designation` such as a speed, dimension, distance, or direction. | Optional | For example, if `mutcd_sign_designation` is `"W7-3aP"`, `variable_sign_content` could be `"5"`.

## Used By
Property | Object
--- | --- 
`properties` | [FieldDeviceFeature](/spec-content/objects/FieldDeviceFeature.md)
