# WZDx Feed (GeoJSON FeatureCollection)
The `WZDx Feed` object is the root (highest level) object of a WZDx feed. There is one WZDx feed object per WZDx GeoJSON file. The `WZDx Feed` is an instance of a [GeoJSON FeatureCollection](https://tools.ietf.org/html/rfc7946#section-3.3) object.

## Properties
Property Name | Data Type | Description | Conformance | Notes
--- | --- | --- | --- | ---
`road_event_feed_info` | [Road Event Feed Info](/spec-content/objects/road_event_feed_info.md) | Information about the WZDx feed | Required | This is a WZDx-specific [foreign member](https://tools.ietf.org/html/rfc7946#section-6.1) and is not part of the GeoJSON specification.
`type` | String; `"FeatureCollection"` | The GeoJSON object type. For WZDx, this must be the string `FeatureCollection`. | Required | This is a GeoJSON property.
`features` | Array; [Road Event Feature](/spec-content/objects/road_event_feature.md)s | An array of GeoJSON [Feature](https://tools.ietf.org/html/rfc7946#section-3.2) objects which represent WZDx road events. | Required | 

## Appears On
WZDx GeoJSON document root object (one per file).
