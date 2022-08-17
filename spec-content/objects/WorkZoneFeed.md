# WorkZoneFeed Object (GeoJSON FeatureCollection)
The `WorkZoneFeed` object is the root (highest level) object of a WZDx Work Zone Feed. There is one WorkZoneFeed object per WZDx GeoJSON document. The `WorkZoneFeed` is an instance of a [GeoJSON FeatureCollection](https://tools.ietf.org/html/rfc7946#section-3.3) object.

The `WorkZoneFeed` contains high-level information about events ocurring on roadways (called "road events") that impact the characteristics of the roadway and involve a change from the default state (such as a lane closure). The Work Zone Feed is the original work zone data exchange feed and was previously named `WZDxFeed`.

## Properties
Name | Type | Description | Conformance | Notes
--- | --- | --- | --- | ---
`feed_info` | [FeedInfo](/spec-content/objects/FeedInfo.md) | Information about the WZDx Work Zone Feed. | Conditional; required if `road_event_feed_info` is not provided. | This is a WZDx-specific [foreign member](https://tools.ietf.org/html/rfc7946#section-6.1) and is not part of the GeoJSON specification.
`type` | String; `"FeatureCollection"` | The GeoJSON object type. For WZDx, this must be the string `FeatureCollection`. | Required | This is a GeoJSON property.
`features` | Array; \[[RoadEventFeature](/spec-content/objects/RoadEventFeature.md)\] | An array of GeoJSON [Feature](https://tools.ietf.org/html/rfc7946#section-3.2) objects which represent WZDx road events. | Required |
`bbox` | GeoJSON [Bounding Box](https://tools.ietf.org/html/rfc7946#section-5) | Information on the coordinate range for all RoadEventFeatures in the WZDx feed. Must be an array of length `2n` where `n` is the number of dimensions represented in the contained geometries, with all axes of the most southwesterly point followed by all axes of the more northeasterly point.  The axes order of a bbox follows the axes order of geometries. | Optional | This is a GeoJSON property.
`road_event_feed_info` (DEPRECATED) | [FeedInfo](/spec-content/objects/FeedInfo.md) | *This property is deprecated and will be removed in a future release, use the `feed_info` property instead* — Information about the WZDx Work Zone Feed. | Conditional; required if `feed_info` is not provided. | This is a WZDx-specific [foreign member](https://tools.ietf.org/html/rfc7946#section-6.1) and is not part of the GeoJSON specification.

## Used By
WZDx GeoJSON document (one `WorkZoneFeed` object per file).
