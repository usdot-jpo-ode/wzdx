# road_event_feed_info
**Required**

The road_event_feed_info table stores feed header information such as metadata, contact information, and data sources.

- A WZDx feeds must contain a single road_event_feed_info entry
- A WZDx feed must contain at least one road_event_data_source entry (embedded within the `feed_sources`)
- A WZDx feed must comply with a single WZDx version.

## Road Event Feed Info Content
Member | Data Type | Description | Conformance | Notes
---------- | --------- | ---------------- | ----------- | -----
**feed_info_id** |	ID |	Unique identifier for the data feed. |Required | Primary Key Recommendations on the format of this unique identifier will be made in the future. | 
**publisher** | Text | The organization responsible for publishing the feed. | Required | Example: State DOT
**contact_name** | Text | The name of a contact responsible for the data feed | Required | Example: Jo Help
**contact_email** | Text  | The feed contact's email address. | Required | 
**update_frequency** | Text | The frequency at which the data feed is updated and made available through the<br>data feed. Format shall include value+<br>units such as<br>30s, 15m, or 24h where:<ul><li>s = seconds</li><li>m = minutes</li><li>h-hours</li></ul> | Optional | Example 30s<br>15m<br>24h
**update_date** |	DateTime | The UTC date and time when the data feed was last updated. |	Required | All date/time formats shall use ISO 8601 Data elements and interchange formats – Information interchange. Example: `2016-11-03T19:37:00Z`
**version** | Text | The specification version used to create the data feed | Required |

## road_event_feed_info diagram
![Image metadata model](https://github.com/usdot-jpo-ode/jpo-wzdx/blob/v3-metadata-update/images/feed_source_event_relationship.jpg)