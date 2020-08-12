# road_event_feed_info
**Required**

The road_event_feed_info table stores feed header information such as metadata, contact information, and data sources.

- A WZDx feeds must contain a single road_event_feed_info entry.
- A WZDx feed must contain at least one road_event_data_source entry, linked to the road_event_feed_info via the `feed_info_id` foreign key on the `road_event_data_sources` table.
- A WZDx feed must comply with a single WZDx version.

## Data Table Structure
Member | Data Type | Description | Conformance | Notes
---------- | --------- | ---------------- | ----------- | -----
**feed_info_id** |	ID |	Unique identifier for the data feed. | Required | Primary Key Recommendations on the format of this unique identifier will be made in the future. | 
**publisher** | Text | The organization responsible for publishing the feed. | Required | Example: State DOT
**version** | Text | The specification version used to create the data feed | Required |
**update_date** |	DateTime | The UTC date and time when the data feed was last updated. |	Required | All date/time formats shall use ISO 8601 Data elements and interchange formats – Information interchange. Example: `2016-11-03T19:37:00Z`
**update_frequency** | Integer | The frequency in seconds at which the data feed is updated | Optional | 
**contact_name** | Text | The name of the individual responsible for the data feed | Optional | Example: Jo Help
**contact_email** | Text  | The email address of the individual responsible for the data feed | Optional |
