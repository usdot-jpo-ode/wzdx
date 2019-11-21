# Example 1: MassDOT 

- [Template](#road_event_feed_info-template)
- [XML Implementation](#xml-implementation)
- [JSON Implementation](#json-implementation)

### road_event_feed_info template
Tag | Value
--- | -----
feed_info_id | 137097
update_date | 2017-11-02T18:57:02Z
publisher | MassDOT
metadata | MassDOT-Metadata.txt
version | 2.0

Tag | Value
--- | -----
road_event_id | 1243532
feed_info_id | 137097
geometry_type | MultiPoint
geometry | [[42.33865,-72.63399][42.33307,-72.6214]]
road_name | I-91
direction | southbound
beginning_accuracy | estimated
ending_accuracy | estimated
start_date | 2016-11-03T19:37:00
end_date | 2016-11-04T05:30:00
start_date_accuracy | estimated
end_date_accuracy | estimated
event_status | active
total_num_lanes | 3
open_lanes | right-2-lanes
closed_lanes | left-lane
closed_shoulders | inside
workers_present | n/a
restrictions | n/a
description | I-91 Southbound   Exit (20) Rt-5/ Rt-10 Northampton Hadley to Exit<br>(19) Rt-9
issuing_organization | MassDOT
update_date | 2017-11-02T18:57:02

### XML Implementation
```xml
<road_event_feed_info>
	<feed_info_id>137097</feed_info_id>
	<update_date>2017-11-02T18:57:02</update_date>
	<publisher>MassDOT</publisher>
	<metadata>MassDOT-Metadata.txt</metadata>
	<version>2.0</version>
</road_event_feed_info>
```

```xml
<road_events>
	<road_event_id>1243532</road_event_id>
	<feed_info_id>137097</feed_info_id>
	<geometry_type>MultiPoint</geometry_type>
	<geometry>[[42.33865,-72.63399][42.33307,-72.6214]]</geometry>
	<road_name>I-91</road_name>
	<direction>southbound</direction>
	<beginning_accuracy>estimated</beginning_accuracy>
	<ending_accuracy>estimated</ending_accuracy>
	<start_date>2016-11-03T19:37:00</start_date>
	<end_date>2016-11-04T05:30:00</end_date>
	<start_date_accuracy>estimated</start_date_accuracy>
	<end_date_accuracy>estimated</end_date_accuracy>
	<event_status>active</event_status>
	<total_num_lanes>3</total_num_lanes>
	<open_lanes>right-2-lanes</open_lanes>
	<closed_lanes>left-lane</closed_lanes>
	<closed_shoulders>inside</closed_shoulders>
	<description>I-91 Southbound Exit (20) Rt-5/Rt-10 Northampton Hadley to Exit (19) Rt-9</description>
	<issuing_organization>MassDOT</issuing_organization>
	<update_date>2017-11-02T18:57:02</update_date>
</road_events>
```

### JSON Implementation
```json
{
	"road_event_feed_info": {
		"feed_info_id": "137097",
		"update_date": "2017-11-02T18:57:02",
		"publisher": "MassDOT",
		"metadata": "MassDOT-Metadata.txt",
		"version": 2.0
	}
}
```

```json
{
	"road_events": {
		"road_event_id": "1243532",
		"feed_info_id": "137097",
		"geometry_type": "MultiPoint",
		"geometry": "[[42.33865,-72.63399][42.33307,-72.6214]]",
		"road_name": "I-91",
		"direction": "southbound",
		"beginning_accuracy": "estimated",
		"ending_accuracy": "estimated",
		"start_date": "2016-11-03T19:37:00",
		"end_date": "2016-11-04T05:30:00",
		"start_date_accuracy": "estimated",
		"end_date_accuracy": "estimated",
		"event_status": "active",
		"total_num_lanes": 3,
		"open_lanes": "right-2-lanes",
		"closed_lanes": "left-lane",
		"closed_shoulders": "inside",
		"description": "I-91 Southbound Exit (20) Rt-5/Rt-10 Northampton Hadley to Exit (19) Rt-9",
		"issuing_organization": "MassDOT",
		"update_date": "2017-11-02T18:57:02"
	}
}
```
