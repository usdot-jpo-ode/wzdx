## road_event_feed_info
**Required**

This table contains information about road event datasets. For each record in the road_event_feed_info table there must exist one or more related records in the road_event_source_info table. The feed_info_id field acts as the foreign key in the road_event_source_info table.

## Road Event Feed Info Table Structure
Field Name | Data Type | Description | Conformance | Notes
---------- | --------- | ---------------- | ----------- | -----
**feed_info_id** |	ID |	Unique identifier for the data feed. |Required | Primary Key Recommendations on the format of this unique identifier will be made in the future. | 
**feed_publisher** | Text | The organization responsible for publishing the feed. | Required | Example: State DOT
**feed_contact_name** | Text | The name of a contact responsible for the<br>data feed | Required | Example: Jo Help
**feed_contact_email** | Text  | The feed contact's email address. | Required | 
**feed_update_frequency** | Text | The frequency at which the data feed is<br>updated and made available through the<br>data feed. Format shall include value+<br>units such as<br>30s, 15m, or 24h where:<ul><li>s = seconds</li><li>m = minutes</li><li>h-hours</li></ul> | Optional | Example 30s<br>15m<br>24h
**feed_update_date** |	DateTime | The UTC date and time when the data feed was last updated. |	Required | All date/time formats shall use ISO 8601 Data elements and interchange formats – Information interchange. Example: `2016-11-03T19:37:00Z`
**version** | Text | The specification version used to create the data feed | Required |
