# road_event_feed_info
**Required**

(Formerly WZDx Header Data). This table contains information about road event datasets.  For each record in the road_event_feed_info table there must exist one or more related records in the [road_events](/feed-content/data-tables/road_events.md) table. The feed_info_id field acts as the foreign key in the road_event table.

## Road Event Feed Info Table Structure
Field Name | Data Type | Description | Conformance | Notes
---------- | --------- | ---------------- | ----------- | -----
feed_info_id |	ID |	Unique identifier for the data feed. |Required | Primary Key Recommendations on the format of this unique identifier will be made in the future. |
feed_update_date |	DateTime |	The UTC date and time when the data feed was last updated. |	Required | All date/time formats shall use ISO 8601 Data elements and interchange formats – Information interchange. Example: `2016-11-03T19:37:00Z`
metadata |	URL |	A link to the metadata file (WZ-metadata.txt). See [Metadata table](/feed-content/data-tables/metadata.md) for a description of the file. |	Optional |
version |	Text |	The specification version used to create the data feed in major.minor format. |	Optional | Examples: `1.1`, `2.0`
