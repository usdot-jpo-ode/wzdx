# Road Event Feature (GeoJSON Feature)
The `Road Event Feature` object is the container object for a WZDx [Road Event](/spec-content/objects/wzdx_road_event.md). The `Road Event Feature` is an instance of a [GeoJSON Feature](https://tools.ietf.org/html/rfc7946#section-3.2).

## Properties
Property Name | Data Type | Description | Conformance | Notes
--- | --- | --- | --- | ---
`type` | String; `"Feature"` | The GeoJSON object type. This MUST be the string `Feature`. | Required | This is a GeoJSON property.
`properties` | [Road Event](/spec-content/objects/road_event.md) | The specific details of road event. | Required | This is a GeoJSON property.
`geometry` | GeoJSON [Geometry](https://tools.ietf.org/html/rfc7946#section-3.1) object with `type` of [LineString](https://tools.ietf.org/html/rfc7946#section-3.1.4) or [MultiPoint](https://tools.ietf.org/html/rfc7946#section-3.1.3) | The geometry of the road event. The Geometry object's `type` property MUST be [LineString](https://tools.ietf.org/html/rfc7946#section-3.1.4) or [MultiPoint](https://tools.ietf.org/html/rfc7946#section-3.1.3). `LineString` allows specifying the entire road event path and should be preferred. `MultiPoint` should be used when only the start and end coordinates are known. | Required | This is a GeoJSON property.

## Appears On
Object Name | Property
--- | ---
[WZDx Feed](/spec-content/objects/wzdx_feed.md) | `Features`
