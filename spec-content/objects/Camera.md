# Camera Object
The `Camera` object describes a camera device deployed in the field, capable of capturing still images.

The `Camera` is a type of field device; it has a `core_details` property which contains the [FieldDeviceCoreDetails](/spec-content/objects/FieldDeviceCoreDetails.md) and exists within a [FieldDeviceFeature](/spec-content/objects/FieldDeviceFeature.md).

## Properties
Name | Type | Description | Conformance | Notes
--- | --- | --- | --- | ---
`core_details` | [FieldDeviceCoreDetails](/spec-content/objects/FieldDeviceCoreDetails.md) | The core details of the field device that are shared by all types of field devices, not specific to cameras. | Required | This property appears on all field devices.
`image_url` | String; [uri](https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-7.3.5) | A URL pointing to an image file for the camera image still. | Optional |
`image_timestamp` | String; [date-time](https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-7.3.1) | The UTC date and time when the image was captured. | Conditional; required if `image_url` is provided | Please see [Business Rule](/Creating_a_WZDx_Feed.md#business-rules) #5. 

## Used By
Property | Object
--- | --- 
`properties` | [FieldDeviceFeature](/spec-content/objects/FieldDeviceFeature.md)
