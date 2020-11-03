# Road Event Feed Info
The `Road Event Feed Info` object stores WZDx feed header information such as metadata, contact information, and data sources. There is one `Road Event Feed Info` per WZDx GeoJSON document.

## Properties
Property Name | Data Type | Description | Conformance | Notes
--- | --- | --- | --- | ---
`publisher` | String | The organization responsible for publishing the feed. | Required | Example: `State DOT`
`version` | String | The WZDx specification version used to create the data feed in `major.minor` format. Note this mandates that all data in a WZDx feed complies to a single version of WZDx. | Required | Examples: `1.1`, `2.0`
`data_sources` | Array; \[[Road Event Data Source](/spec-content/objects/road_event_data_source.md)\] | A list specific data sources for the road event data in the feed. | Required | Length of array must be at least one.
`update_date` |	String; [date-time](https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-7.3.1) | The UTC date and time when the data feed was last updated. | Required | All date-time formats shall follow [RFC 3339 Section 5.6](https://tools.ietf.org/html/rfc3339#section-5.6). Example: `2016-11-03T19:37:00Z`
`update_frequency` | Integer | The frequency in seconds at which the data feed is updated. | Optional | Example: `60`
`contact_name` | String | The name of the individual or group responsible for the data feed. | Optional | Example: `Jo Help`
`contact_email` | String; [email](https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-7.3.2) | The email address of the individual or group responsible for the data feed. | Optional | Example: `abc@testcity1.gov`

## Appears On
Object Name | Property
--- | --- 
[WZDx Feed](/spec-content/objects/wzdx_feed.md) | `road_event_feed_info`
