# FeedDataSource Object
The `FeedDataSource` object describes information about a specific data source used to build a work zone data feed. A WZDx feed must contain at least one `FeedDataSource`, included as an entry in the `data_sources` array of the [FeedInfo](/spec-content/objects/FeedInfo.md) object.

## Properties
Name | Type | Description | Conformance | Notes
--- | --- | --- | --- | ---
`data_source_id` | String | Unique identifier for the data source organization providing work zone data. | Required | Linked to a road event by the `data_source_id` property on the road event's [core details](/spec-content/objects/RoadEventCoreDetails.md) or a field device by the `data_source_id` property on the device's [core details](/spec-content/objects/FieldDeviceCoreDetails.md). <br />Please see [Business Rule](/Creating_a_WZDx_Feed.md#business-rules) #4.
`organization_name` | String | The name of the organization for the authoritative source of the work zone data. | Required | Example: County DOT
`update_date` | String; [date-time](https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-7.3.1) | The UTC date and time when the data source was last updated. | Optional | All date-time formats shall follow [RFC 3339 Section 5.6](https://tools.ietf.org/html/rfc3339#section-5.6). Example: `2016-11-03T19:37:00Z`<br />Please see [Business Rule](/Creating_a_WZDx_Feed.md#business-rules) #5.
`update_frequency` | Integer | The frequency in seconds at which the data source is updated. | Optional |
`contact_name` | String | The name of the individual or group responsible for the work zone data source. | Optional | Example: `Jo Help`
`contact_email` | String; [email](https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-7.3.2) | The email address of the individual or group responsible for the data source. | Optional |
`lrs_type` (DEPRECATED) | String | *This property is deprecated and will be removed in a future version* — Describes the type of linear referencing system (LRS) used for the milepost measurements. | Optional | Example: `Use of milemarkers posted by the roadways. These are registered to a dynamic segmentation of statewide LRS basemap.`
`lrs_url` (DEPRECATED) | String; [uri](https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-7.3.5) | *This property is deprecated and will be removed in a future version* — A URL where additional information on the LRS information and transformation information is stored. | Optional | Example `https://aaa.bbb.com/lrs`
`location_verify_method` (DEPRECATED) | String | *This property is deprecated and will be removed in a future version; verified locations must use GPS devices as defined in the [SpatialVerification](/spec-content/enumerated-types/SpatialVerification.md) enumerated type* — The method used to verify the accuracy of the location information. | Optional | Example: `Survey accurate GPS equipment accurate to 0.1 cm`

## Used By
Property | Object
--- | --- 
`data_sources` | [FeedInfo](/spec-content/objects/FeedInfo.md)
