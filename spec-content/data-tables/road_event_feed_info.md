# road_event_feed_info
**Required**

The  `road_event_feed_info` table stores feed header information such as metadata, contact information, and data sources.

- A WZDx feed must contain a single `road_event_feed_info` entry.
- A WZDx feed must contain at least one `road_event_data_source` entry, linked to the `road_event_feed_info` via the `feed_info_id` foreign key on the `road_event_data_sources` table. In the GeoJSON feed output, each `road_event_data_source` entry is presented as an object in the `data_sources` array in the `road_event_feed_info` properties.
- A WZDx feed must comply with a single WZDx version.

## Road Event Feed Info Table Structure
Field Name | Data Type | Description | Conformance | Notes
--- | --- | --- | --- | ---
**feed_info_id** |	ID |	Unique identifier for the data feed. | Required | Primary Key Recommendations on the format of this unique identifier will be made in the future. |
**publisher** | Text | The organization responsible for publishing the feed. | Required | Example: State DOT
**version** | Text | The WZDx specification version used to create the data feed in `major.minor` format. | Required | Examples: `1.1`, `2.0`
**update_date** |	DateTime | The UTC date and time when the data feed was last updated. |	Required | All datetime formats shall follow [RFC 3339 Section 5.6](https://tools.ietf.org/html/rfc3339#section-5.6). Example: `2016-11-03T19:37:00Z`
**update_frequency** | Integer | The frequency in seconds at which the data feed is updated. | Optional | Example: 60
**contact_name** | Text | The name of the individual responsible for the data feed. | Optional | Example: Jo Help
**contact_email** | Text  | The email address of the individual responsible for the data feed. | Optional | Example: abc@testcity1.gov

## Feed Info and Data Source Relationship Diagram
![Image metadata model](/images/feed_source_event_relationship.jpg)
