# road_event_feed_info 
**Required**

(Formerly WZDx Header Data). This table contains information about road event datasets.  For each record in the road_event_feed_info table there must exist one or more related records in the [road_events](/data-tables/road_events.md) table. The feed_info_id field acts as the foreign key in the road_event table.

Field Name | Data Type | Description | Conformance | Notes
---------- | --------- | ---------------- | ----------- | -----
feed_info_id |	ID |	Unique identifier for the data feed. |Required | Primary Key Recommendations on the format of this unique identifier will be made in the future. |
feed_update_date |	DateTime |	Designates the date and time the data feed was last updated. |	Required |	
metadata |	URL |	A link to the metadata file (WZ-metadata.txt). See [Metadata table](https://github.com/usdot-jpo-ode/jpo-wzdx/blob/v2editorial/data-tables/metadata.md) for a description of the file. |	Optional	 |
version |	Text |	The specification version used to create the dataset |	Optional	 |
