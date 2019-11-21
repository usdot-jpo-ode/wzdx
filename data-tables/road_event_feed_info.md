# road_event_feed_info (Formerly WZDx Header Data)
**Required**

This table contains information about road event datasets.  For each record in the road_event_feed_info table there must exist one or more related records in the [road_events](/data-tables/road_events.md) table.  The feed_info_id field acts as the foreign key in the road_event table.

Field Name | Data Type | Description | Conformance | Notes
---------- | --------- | ---------------- | ----------- | -----
feed_info_id |	ID |	Identifies the feed	Required. Recommendations on the format of this unique identifier will be made in the future. | Primary Key |
update_date |	DateTime |	Designates the date and time the data feed was last updated. |	Required |	
publisher |	Text |	The organization issuing the data feed. |	Optional	|
metadata |	URL |	A link to the metadata file (WZ-metadata.txt). See Section 2.6 for a description of the file. |	Optional	 |
version |	Float |	The specification version used to create the dataset |	Optional	 |
