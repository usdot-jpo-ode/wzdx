## road_event_source_info object
**Required**

The road_event_source_info object stores metadata about the organizations and information within the work zone data feed.
- Feeds must contain at least one road_event_source_info object in the feed_sources array
- road_event features are related to road_event_feed_info objects via the road_event_source_info.source_info_id member.

## Road Event Source Info Content
Member | Data Type | Description | Conformance | Notes
---------- | --------- | ---------------- | ----------- | -----
**source_info_id** | Text | Unique identifier for the organization providing work zone data. | Required | 
**source_organization** | Text | Authoritative source of the work zone data. | Required | Example: County DOT
**source_contact_name** | Text | The name of a contact responsible for the<br>work zone source data | Required | Example: Jo Help
**source_contact_email** | Text | The source's email address.  | Required |
**source_update_frequency** | Text | The frequency at which the data source is<br>updated and made available through the<br>data feed. Format shall include value+<br>units such as<br>30s, 15m, or 24h where:<ul><li>s = seconds</li><li>m = minutes</li><li>h-hours</li></ul> | Optional | Example 30s<br>15m<br>24h
**source_update_date** | DateTime | The UTC date and time when the data source was last updated. | Required | All date/time formats shall use ISO 8601 Data elements and interchange formats – Information interchange. Example: `2016-11-03T19:37:00Z`
**location_verify_method** | Text | The method used to verify the accuracy of the location information | Required | Example Survey accurate GPS equipment accurate to 0.1 cm
**location_method** | Enumeration; Text | The typical method used to locate the beginning and end of a work zone impact area. | Required | See [Location Method Enumerated Type](/feed-content/enumerated-types/location_method.md)
**lrs_type** | Text |Describes the type of linear referencing<br>system used for the milepost<br>measurements | Required | Example Use of milemarkers posted by the<br>roadways. These are registered<br>to a dynamic segmentation of<br>statewide LRS basemap.
**lrs_url** | URL |A URL where additional information on the<br>LRS information and transformation<br>information is stored | Optional | Example https://aaa.bbb.com/lrs

## Road Event Source Info diagram
![Image metadata model](https://github.com/usdot-jpo-ode/jpo-wzdx/blob/v3-metadata-update/images/feed_source_event_relationship.jpg)
