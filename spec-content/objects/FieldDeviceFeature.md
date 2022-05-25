# FieldDeviceFeature Object
The `FieldDeviceFeature` object is a [GeoJSON Feature](https://tools.ietf.org/html/rfc7946#section-3.2) representing a deployed field device. This object contains the specific details of the field device, similar to how the [RoadEventFeature](/spec-content/objects/RoadEventFeature.md) object in a WZDx Feed contains the road event object ([WorkZoneRoadEvent](/spec-content/objects/WorkZoneRoadEvent.md) or [DetourRoadEvent](/spec-content/objects/DetourRoadEvent.md).

Currently, only point devices are supported.

## Properties
Name | Type | Description | Conformance | Notes
--- | --- | --- | --- | ---
`id` | String | A unique identifier issued by the data feed provider to identify the field device. It is recommended that this identifier is a Universally Unique IDentifier (UUID) as defined in [RFC 4122](https://datatracker.ietf.org/doc/html/rfc4122). | Required | This is a GeoJSON property. 
`type` | String; `"Feature"` | The GeoJSON object type. This MUST be the string `Feature`. | Required | This is a GeoJSON property.
`properties` | One of: [ArrowBoard](/spec-content/objects/ArrowBoard.md), [Camera](/spec-content/objects/Camera.md), [DynamicMessageSign](/spec-content/objects/DynamicMessageSign.md), [FlashingBeacon](/spec-content/objects/FlashingBeacon.md), [HybridSign](/spec-content/objects/HybridSign.md), [LocationMarker](/spec-content/objects/LocationMarker.md), [TrafficSensor](/spec-content/objects/TrafficSensor.md) | The specific details of the field device. | Required | This is a GeoJSON property.
`geometry` | GeoJSON [Geometry](https://tools.ietf.org/html/rfc7946#section-3.1) object with `type` of [Point](https://tools.ietf.org/html/rfc7946#section-3.1.2). | The geometry of the field device, indicating its location. The Geometry object's `type` property MUST be [Point](https://tools.ietf.org/html/rfc7946#section-3.1.2). | Required | This is a GeoJSON property. 
`bbox` | GeoJSON [Bounding Box](https://tools.ietf.org/html/rfc7946#section-5) | Information on the coordinate range for this field device. Must be an array of length `2n` where `n` is the number of dimensions represented in the `geometry` property, with all axes of the most southwesterly point followed by all axes of the more northeasterly point.  The axes order of a bbox follows the axes order of the `geometry`. | Optional | This is a GeoJSON property.

## Used By
Property | Object
--- | ---
`features` | [DeviceFeed](/spec-content/objects/DeviceFeed.md)
