# FeedInfo Object
The `FeedInfo` object describes WZDx feed header information such as metadata, contact information, and data sources. There is one `FeedInfo` per WZDx GeoJSON document.

## Properties
Name | Type | Description | Conformance | Notes
--- | --- | --- | --- | ---
`publisher` | String | The organization responsible for publishing the feed. | Required | Example: `State DOT`
`version` | String | The WZDx specification version used to create the data feed in `major.minor` format. Note this mandates that all data in a WZDx feed complies to a single version of WZDx. | Required | Examples: `1.1`, `2.0`
`license` | String; [uri](https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-7.3.5); "https://creativecommons.org/publicdomain/zero/1.0/" | The URL of the license that applies to the data in the WZDx feed. This *must* be the string "https://creativecommons.org/publicdomain/zero/1.0/". | Optional | Data in all public WZDx feeds must be licensed under the [Creative Commons - Public Domian License (CC0)](https://creativecommons.org/share-your-work/public-domain/cc0/) which permits consumers to freely publish the enclosed information. This property is currently optional but *will be required in a future release*. 
`data_sources` | Array; \[[FeedDataSource](/spec-content/objects/FeedDataSource.md)\] | A list of specific data sources for the road event data in the feed. | Required | Length of array must be at least one.
`update_date` |	String; [date-time](https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-7.3.1) | The UTC date and time when the GeoJSON file (representing the instance of the feed) was generated. | Required | The recency of the value of this property depends on if the feed producer is generating a new feed GeoJSON file for each request or generating the file in advance and making it available for download (WZDx does not mandate a particular distribution method). Note all date-time formats shall follow [RFC 3339 Section 5.6](https://tools.ietf.org/html/rfc3339#section-5.6). Example: `2016-11-03T19:37:00Z` <br />Please see [Business Rule](/Creating_a_WZDx_Feed.md#business-rules) #5.
`update_frequency` | Integer | The frequency in seconds at which the data feed is updated. | Optional | Example: `60`
`contact_name` | String | The name of the individual or group responsible for the data feed. | Optional | Example: `Jo Help`
`contact_email` | String; [email](https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-7.3.2) | The email address of the individual or group responsible for the data feed. | Optional | Example: `abc@testcity1.gov`

## Used By
Property | Object
--- | --- 
`feed_info` | [RoadRestrictionFeed](/spec-content/objects/RoadRestrictionFeed.md)
`feed_info` | [SwzDeviceFeed](/spec-content/objects/SwzDeviceFeed.md)
`road_event_feed_info` | [WZDxFeed](/spec-content/objects/WZDxFeed.md)
