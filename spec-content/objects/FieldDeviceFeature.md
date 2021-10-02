# FieldDeviceFeature Object
The FieldDeviceFeature object is a GeoJSON feature representing a deployed field device. This object contains the specific details of the field device, alike to how the RoadEventFeature object in a WZDx Feed contains the RoadEvent object via the `properties` property. Currently, only point devices are supported.

## Properties
Name | Type | Description | Conformance | Notes
--- | --- | --- | --- | ---
`id` | String | A unique identifier issued by the data feed provider to identify the field device. | Required | This is a GeoJSON property. 
`type` | String; `"Feature"` | The GeoJSON object type. This MUST be the string `Feature`. | Required | This is a GeoJSON property.
`properties` | One of: [ArrowBoard](/spec-content/objects/ArrowBoard.md), [Camera](/spec-content/objects/Camera.md), [DynamicMessageSign](/spec-content/objects/DynamicMessageSign.md), [FlashingBeacon](/spec-content/objects/FlashingBeacon.md), [LocationMarker](/spec-content/objects/LocationMarker.md), [TrafficSensor](/spec-content/objects/TrafficSensor.md) | The specific details of the field device. | Required | This is a GeoJSON property.
`geometry` | GeoJSON [Geometry](https://tools.ietf.org/html/rfc7946#section-3.1) object with `type` of [Point](https://tools.ietf.org/html/rfc7946#section-3.1.2). | The geometry of the field device, indicating its location. The Geometry object's `type` property MUST be [Point](https://tools.ietf.org/html/rfc7946#section-3.1.2). | Required | This is a GeoJSON property. 
`bbox` | GeoJSON [Bounding Box](https://tools.ietf.org/html/rfc7946#section-5) | Information on the coordinate range for this field device. Must be an array of length 2*n where n is the number of dimensions represented in the `geometry` property, with all axes of the most southwesterly point followed by all axes of the more northeasterly point.  The axes order of a bbox follows the axes order of the `geometry`. | Optional | This is a GeoJSON property.

## Used By
Property | Object
--- | ---
`features` | [WZDx Feed](/spec-content/objects/WZDxFeed.md)