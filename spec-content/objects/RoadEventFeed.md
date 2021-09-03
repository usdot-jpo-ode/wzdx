# RoadEventFeed Object (GeoJSON FeatureCollection)
The `RoadEventFeed` object is the root (highest level) object of a Road Event Feed (REF). There is one Road Event objects per Road Event Feed GeoJSON document. The `RoadEventFeed` is an instance of a [GeoJSON FeatureCollection](https://tools.ietf.org/html/rfc7946#section-3.3) object.

## Properties
Name | Type | Description | Conformance | Notes
--- | --- | --- | --- | ---
`road_event_feed_info` | [RoadEventFeedInfo](/spec-content/objects/RoadEventFeedInfo.md) | Information about the REF. | Required | This is a REF-specific [foreign member](https://tools.ietf.org/html/rfc7946#section-6.1) and is not part of the GeoJSON specification.
`type` | String; `"FeatureCollection"` | The GeoJSON object type. For an REF, this must be the string `FeatureCollection`. | Required | This is a GeoJSON property.
`features` | Array; \[[RoadEventFeature](/spec-content/objects/RoadEventFeature.md)\] | An array of GeoJSON [Feature](https://tools.ietf.org/html/rfc7946#section-3.2) objects which represent road events such as Work Zones, Detours, Restrictions, etc.. | Required |
`bbox` | GeoJSON [Bounding Box](https://tools.ietf.org/html/rfc7946#section-5) | Information on the coordinate range for all RoadEventFeatures in the REF. Must be an array of length 2*n where n is the number of dimensions represented in the contained geometries, with all axes of the most southwesterly point followed by all axes of the more northeasterly point.  The axes order of a bbox follows the axes order of geometries. | Optional | This is a GeoJSON property.

## Used By
Road Event Feed GeoJSON document (one `RoadEventFeed` object per file).
