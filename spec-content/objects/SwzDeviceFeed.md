# SwzDeviceFeed Object (GeoJSON FeatureCollection)
The `SwzDeviceFeed` object is the root (highest level) object of a smart work zone device feed. There is one `SwzDeviceFeed` object per feed GeoJSON document. The `SwzDeviceFeed` is a [GeoJSON FeatureCollection](https://tools.ietf.org/html/rfc7946#section-3.3) object.

The `SwzDeviceFeed` contains information (location, status, live data) about field devices deployed on the roadway in work zones.

## Properties
Name | Type | Description | Conformance | Notes
--- | --- | --- | --- | ---
`feed_info` | [FeedInfo](/spec-content/objects/FeedInfo.md) | Information about the data feed. | Required | This is a WZDx-specific [foreign member](https://tools.ietf.org/html/rfc7946#section-6.1) and is not part of the GeoJSON specification.
`type` | String; `"FeatureCollection"` | The GeoJSON object type. For WZDx, this must be the string `FeatureCollection`. | Required | This is a GeoJSON property.
`features` | Array; \[[FieldDeviceFeature](/spec-content/objects/FieldDeviceFeature.md)\] | An array of GeoJSON [Feature](https://tools.ietf.org/html/rfc7946#section-3.2) objects which each represent a field device deployed in a smart work zone. | Required | This is a GeoJSON property.
`bbox` | GeoJSON [Bounding Box](https://tools.ietf.org/html/rfc7946#section-5) | Information on the coordinate range for all `FieldDeviceFeature`s in the feed. The value must be an array of length `2n` where `n` is the number of dimensions represented in the contained geometries, with all axes of the most southwesterly point followed by all axes of the more northeasterly point.  The axes order of a `bbox` follows the axes order of geometries. | Optional | This is a GeoJSON property.

## Used By
SwzDeviceFeed GeoJSON document (one `SwzDeviceFeed` object per file).
