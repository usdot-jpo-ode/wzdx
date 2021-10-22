# LocationMarker Object
The LocationMarker object describes any GPS-enabled ITS device that is placed at a point on a roadway to dynamically know the location of something (often the beginning or end of a work zone). The LocationMarker contains a list of one or more [MarkedLocation](/spec-content/objects/MarkedLocation.mdMarkedLocation.md) objects which indicate the type of location (such as the start or end) and optionally the ID of a [RoadEvent](/spec-content/objects/RoadEvent.md) that the location is associated with.

The LocationMarker is a type of field device; it has a `core_details` property which contains the [FieldDeviceCoreDetails](/spec-content/objects/FieldDeviceCoreDetails.md) and exists within a [FieldDeviceFeature](/spec-content/objects/FieldDeviceFeature.md).

## Properties 
Name | Type | Description | Conformance | Notes
--- | --- | --- | --- | ---
`core_details` | [FieldDeviceCoreDetails](/spec-content/objects/FieldDeviceCoreDetails.md) | The core details of the field device shared by all field devices types, not specific to the location marker. | Required | This property appears on all field devices.
`marked_locations` | Array; [[MarkedLocation](/spec-content/objects/MarkedLocation.md)] | A list of locations that the LocationMarker is marking. | Required |

## Used By
Property | Object
--- | --- 
`properties` | [FieldDeviceFeature](/spec-content/objects/FieldDeviceFeature.md)
