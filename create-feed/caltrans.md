# Example 3: Caltrans
- [Template](#road_event_feed_info-template)
- [XML Implementation](#xml-implementation)
- [JSON Implementation](#json-implementation)

### road_event_feed_info template
Tag | Value
--- | -----
feed_info_id | C299CA-0004-2016-04-12-00:01:00
update_date | 2016-04-19T14:41:04
publisher | Caltrans
metadata | Caltrans-Metadata.txt
version | 2.0

Tag | Value
--- | -----
road_event_id | 23543
feed_info_id | C299CA-0004-2016-04-12-00:01:00
geometry_type | MultiPoint
geometry | [[40.635122,-122.733841][40.67201,-122.654384]]
road_name | CA-299
direction | eastbound
beginning_milepost | 114.19
ending_milepost | 121.633
beginning_accuracy | estimated
ending_accuracy | estimated
start_date | 2016-04-12T15:58:00
end_date | 2016-04-30T
start_date_accuracy | estimated
end_date_accuracy | estimated
event_status | active
total_num_lanes | 2
open_lanes | right-lane
closed_lanes | left-lane
closed_shoulders | inside
workers_present | True
restrictions | n/a
description |One lane closed on Route 299 East near Lewiston to French Gulch (0.6 mi west of Crystal Creek Rd) for approximately 30 days.
issuing_organization | Caltrans
creation_date | 2016-04-12T00:01:00
update_date | 2016-04-19T14:41:04

### XML Implementation
```xml
<road_event_feed_info>
	<feed_info_id>C299CA-0004-2016-04-12-00:01:00</feed_info_id>
	<update_date>2016-04-19T14:41:04</update_date>
	<publisher>Caltrans</publisher>
	<metadata>Caltrans-Metadata.txt</metadata>
	<version>2.0</version>
</road_event_feed_info>
```

```xml
<road_events>
	<road_event_id>23543</road_event_id>
	<feed_info_id>C299CA-0004-2016-04-12-00:01:00</feed_info_id>
	<geometry_type>MultiPoint</geometry_type>
	<geometry>[[40.635122,-122.733841][40.67201,-122.654384]]</geometry>
	<road_name>CA-299</road_name>
	<direction>eastbound</direction>
	<beginning_milepost>114.19</beginning_milepost>
	<ending_milepost>121.633<ending_milepost>
	<beginning_accuracy>estimated</beginning_accuracy>
	<ending_accuracy>estimated</ending_accuracy>
	<start_date>2016-04-12T15:58:00</start_date>
	<end_date>2016-04-30T</end_date>
	<start_date_accuracy>estimated</start_date_accuracy>
	<end_date_accuracy>estimated</end_date_accuracy>
	<event_status>active</event_status>
	<total_num_lanes>2</total_num_lanes>
	<open_lanes>right-lane</open_lanes>
	<closed_lanes>left-lane</closed_lanes>
	<closed_shoulders>inside</closed_shoulders>
	<workers_present>True</workers_present>
	<restrictions>n/a</restrictions>
	<description>One lane closed on Route 299 East near Lewiston to French Gulch (0.6 mi west of Crystal Creek Rd) for approximately 30 days.</description>
	<issuing_organization>Caltrans</issuing_organization>
	<creation_date>2016-04-12T00:01:00</creation_date>
	<update_date>2016-04-19T14:41:04</update_date>
</road_events>
```

### JSON Implementation
```json
{
	"road_event_feed_info": {
		"feed_info_id": "C299CA-0004-2016-04-12-00:01:00",
		"update_date": "2016-04-19T14:41:04",
		"publisher": "Caltrans",
		"metadata": "Caltrans-Metadata.txt",
		"version": 2.0
  }
}
```

```json
{
	"road_events": {
		"road_event_id": "23543",
		"feed_info_id": "C299CA-0004-2016-04-12-00:01:00",
		"geometry_type": "MultiPoint",
		"geometry": "[[40.635122,-122.733841][40.67201,-122.654384]]",
		"road_name": "CA-299",
		"direction": "eastbound",
		"begin_milepost": 114.19,
		"end_milepost": 121.633,
		"beginning_accuracy": "estimated",
		"ending_accuracy": "estimated",
		"start_date": "2016-04-12T15:58:00",
		"end_date": "2016-04-30T",
		"start_date_accuracy": "estimated",
		"end_date_accuracy": "estimated",
		"event_status": "active",
    "total_num_lanes": 2,
    "open_lanes": "right-lane",
    "closed_lanes": "left-lane",
    "closed_shoulders": "inside",
    "workers_present": true,
    "restrictions": "n/a",
    "description": "One lane closed on Route 299 East near Lewiston to French Gulch (0.6 mi west of Crystal Creek Rd) for approximately 30 days.",
    "issuing_organization": "Caltrans",
		"creation_date": "2016-04-12T00:01:00",
    "update_date": "2016-04-19T14:41:04"
  }
}
```
