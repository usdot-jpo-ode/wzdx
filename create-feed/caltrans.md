# Example 3: Caltrans
- [Template](#road_event_feed_info-template)
- [XML Implementation](#xml-implementation)
- [JSON Implementation](#json-implementation)

### road_event_feed_info template
Tag | Value
--- | -----
feed_info_id | C299CA-0004-2016-04-12-00:01:00
feed_update_date | 2016-04-19T14:41:04
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
end_date | 2016-04-30T00:00:00
start_date_accuracy | estimated
end_date_accuracy | estimated
event_status | active
total_num_lanes | 2
vehicle_impact | some-lanes-closed
workers_present | True
description | One lane closed on Route 299 East near Lewiston to French Gulch (0.6 mi west of Crystal Creek Rd) for approximately 30 days.
issuing_organization | Caltrans
creation_date | 2016-04-12T00:01:00
update_date | 2016-04-19T14:41:04

### lanes template
Tag | Value
--- | -----
lane_id | 459043
road_event_id | 23543
lane_edge_reference | left
lane_number | 1
lane_status | closed
lane_type | left-lane
--- | -----
lane_id | 459044
road_event_id | 23543
lane_edge_reference | left
lane_number | 2
lane_status | open
lane_type | right-lane
--- | -----
lane_id | 459045
road_event_id | 23543
lane_edge_reference | 
lane_number | 
lane_status | closed
lane_type | left-shoulder

### lane_restrictions template
Tag | Value
--- | -----
lane_restriction_id | 1
lane_id | 459044
restriction_type | reduced-height
restriction_value | 15
restriction_units | feet
--- | -----
lane_restriction_id | 2
lane_id | 459044
restriction_type | reduced-width
restriction_value | 10
restriction_units | feet


### XML Implementation
```xml
<wzdx_road_events_feed>
	<road_event_feed_info>
		<feed_info_id>C299CA-0004-2016-04-12-00:01:00</feed_info_id>
		<feed_update_date>2016-04-19T14:41:04</feed_update_date>
		<metadata>Caltrans-Metadata.txt</metadata>
		<version>2.0</version>
	</road_event_feed_info>
	<road_events>
		<road_event>
			<road_event_id>23543</road_event_id>
			<geometry_type>MultiPoint</geometry_type>
			<geometry>[[40.635122,-122.733841][40.67201,-122.654384]]</geometry>
			<road_name>CA-299</road_name>
			<direction>eastbound</direction>
			<beginning_milepost>114.19</beginning_milepost>
			<ending_milepost>121.633<ending_milepost>
			<beginning_accuracy>estimated</beginning_accuracy>
			<ending_accuracy>estimated</ending_accuracy>
			<start_date>2016-04-12T15:58:00</start_date>
			<end_date>2016-04-30T00:00:00</end_date>
			<start_date_accuracy>estimated</start_date_accuracy>
			<end_date_accuracy>estimated</end_date_accuracy>
			<event_status>active</event_status>
			<total_num_lanes>2</total_num_lanes>
			<open_lanes>right-lane</open_lanes>
			<closed_lanes>left-lane</closed_lanes>
			<closed_shoulders>inside</closed_shoulders>
			<workers_present>True</workers_present>
			<description>One lane closed on Route 299 East near Lewiston to French Gulch (0.6 mi west of Crystal Creek Rd) for approximately 30 days.</description>
			<issuing_organization>Caltrans</issuing_organization>
			<creation_date>2016-04-12T00:01:00</creation_date>
			<update_date>2016-04-19T14:41:04</update_date>
		</road_event>
	</road_events>
	<lanes>
		<lane>
			<lane_id>459043</lane_id>
			<road_event_id>23543</road_event_id>
			<lane_edge_reference>left</lane_edge_reference>
			<lane_number>1</lane_number>
			<lane_status>closed</lane_status>
			<lane_type>left-lane</lane_type>
		</lane>
		<lane>
			<lane_id>459044</lane_id>
			<road_event_id>23543</road_event_id>
			<lane_edge_reference>left</lane_edge_reference>
			<lane_number>2</lane_number>
			<lane_status>open</lane_status>
			<lane_type>right-lane</lane_type>
		</lane>
		<lane>
			<lane_id>459045</lane_id>
			<road_event_id>23543</road_event_id>
			<lane_status>closed</lane_status>
			<lane_type>left-shoulder</lane_type>
		</lane>
	</lanes>
	<lane_restrictions>
		<lane_restriction>
			<lane_restriction_id>1</lane_restriction_id>
			<lane_id>459044</lane_id>
			<restriction_type>reduced-height</restriction_type>
			<restriction_value>15</restriction_value>
			<restriction_units>feet</restriction_units>
		</lane_restriction>
		<lane_restriction>
			<lane_restriction_id>2</lane_restriction_id>
			<lane_id>459044</lane_id>
			<restriction_type>reduced-width</restriction_type>
			<restriction_value>10</restriction_value>
			<restriction_units>feet</restriction_units>
		</lane_restriction>
	</lane_restrictions>
</wzdx_road_events_feed>
```

### JSON Implementation
```json
{
	"wzdx_road_events_feed": {
		"road_event_feed_info": {
			"feed_info_id": "C299CA-0004-2016-04-12-00:01:00",
			"feed_update_date": "2016-04-19T14:41:04",
			"metadata": "Caltrans-Metadata.txt",
			"version": "2.0"
	  },
		"road_events": [
			{
				"road_event_id": "23543",
				"feed_info_id": "C299CA-0004-2016-04-12-00:01:00",
				"geometry_type": "MultiPoint",
				"geometry": [[40.635122, -122.733841], [40.67201, -122.654384]],
				"road_name": "CA-299",
				"direction": "eastbound",
				"begin_milepost": 114.19,
				"end_milepost": 121.633,
				"beginning_accuracy": "estimated",
				"ending_accuracy": "estimated",
				"start_date": "2016-04-12T15:58:00",
				"end_date": "2016-04-30T00:00:00",
				"start_date_accuracy": "estimated",
				"end_date_accuracy": "estimated",
				"event_status": "active",
				"total_num_lanes": 2,
        			"vehicle_impact": "some-lanes-closed",
				"workers_present": true,
				"description": "One lane closed on Route 299 East near Lewiston to French Gulch (0.6 mi west of Crystal Creek Rd) for approximately 30 days.",
				"issuing_organization": "Caltrans",
				"creation_date": "2016-04-12T00:01:00",
				"update_date": "2016-04-19T14:41:04"
			}
		],
		"lanes":  [ 
			{
				"lane_id":"459043",
				"road_event_id":"23543",
				"lane_edge_reference":"left",
				"lane_number":"1",
				"lane_status":"closed",
				"lane_type":"left-lane"
			},
			{
				"lane_id":"459044",
				"road_event_id":"23543",
				"lane_edge_reference":"left",
				"lane_number":"2",
				"lane_status":"open",
				"lane_type":"right-lane"
			},
			{
				"lane_id":"459045",
				"road_event_id":"23543",
				"lane_status":"closed",
				"lane_type":"left-shoulder"
			}
		],
		"lane_restrictions":  [
			{
				"lane_restriction_id":"1",
				"lane_id":"459044",
				"restriction_type":"reduced-height",
				"restriction_value":"15",
				"restriction_units":"feet"
			},
			{
				"lane_restriction_id":"2",
				"lane_id":"459044",
				"restriction_type":"reduced-width",
				"restriction_value":"10",
				"restriction_units":"feet"
			}
		]
	}
}
```
