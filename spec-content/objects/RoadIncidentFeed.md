# RoadIncidentFeed Object (GeoJSON FeatureCollection)
The `RoadIncidentFeed` object is the root (highest level) object of a WZDx road incident feed. There is one `RoadIncidentFeed` object per road incident feed GeoJSON document. The `RoadIncidentFeed` is a [GeoJSON FeatureCollection](https://tools.ietf.org/html/rfc7946#section-3.3).

The `RoadIncidentFeed` informs drivers about the location of roadway incidents. Incident types are described by [`type_of_incident`](/spec-content/enumerated-types/event_enumerations.md) enumerations.

## Properties
Name | Type | Description | Conformance | Notes
--- | --- | --- | --- | ---
`feed_info` | [FeedInfo](/spec-content/objects/FeedInfo.md) | Information about the WZDx road incident feed. | Required | This is a WZDx-specific [foreign member](https://tools.ietf.org/html/rfc7946#section-6.1) and is not part of the GeoJSON specification.
`type` | String; `"FeatureCollection"` | The GeoJSON object type. For WZDx, this must be the string `FeatureCollection`. | Required | This is a GeoJSON property.
`features` | Array; \[[RoadEventFeature](/spec-content/objects/RoadEventFeature.md)\] | An array of GeoJSON [Feature](https://tools.ietf.org/html/rfc7946#section-3.2) objects which represent WZDx road events. | Required |
`bbox` | GeoJSON [Bounding Box](https://tools.ietf.org/html/rfc7946#section-5) | Information on the coordinate range for all RoadEventFeatures in the WZDx feed. Must be an array of length 2*n where n is the number of dimensions represented in the contained geometries, with all axes of the most southwesterly point followed by all axes of the more northeasterly point.  The axes order of a bbox follows the axes order of geometries. | Optional | This is a GeoJSON property.

## Used By
Road Incident GeoJSON document (one `RoadIncidentFeed` object per file).
