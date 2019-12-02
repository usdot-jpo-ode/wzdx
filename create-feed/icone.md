# Example 2: iCone
- [Template](#road_event_feed_info-template)
- [XML Implementation](#xml-implementation)
- [JSON Implementation](#json-implementation)

### road_event_feed_info template
Tag | Value
--- | -----
feed_info_id | 320
feed_update_date | 2015-01-07T16:50:56Z
metadata | iCone-Metadata.txt
version | 2.0

Tag | Value
--- | -----
road_event_id | 1243532
feed_info_id | 320
geometry_type | MultiPoint
geometry | [[31.0855180,-97.4030700][31.0855180,-97.4030700]]
road_name | I-35
direction | northbound
beginning_accuracy | estimated
ending_accuracy | estimated
start_date | 2015-01-07T16:50:56Z
end_date | 2016-02-07T00:50:00Z
start_date_accuracy | estimated
end_date_accuracy | estimated
event_status | active
total_num_lanes | 3
vehicle_impact | all-lanes-open
workers_present | True
update_date | 2015-01-07T16:50:56Z

### lanes template
Tag | Value
--- | -----
lane_id | 234324
road_event_id | 1243532
lane_edge_reference | 
lane_number | 
lane_status | open
lane_type | all
--- | -----
lane_id | 123145
road_event_id | 1243532
lane_edge_reference | 
lane_number | 
lane_status | closed
lane_type | both-shoulders


### lane_restrictions template
Tag | Value
--- | -----
lane_restriction_id | 1
lane_id | 234324
restriction_type | reduced-height
restriction_value | 15
restriction_units | feet
--- | -----
lane_restriction_id | 2
lane_id | 234324
restriction_type | reduced-width
restriction_value | 10
restriction_units | feet

### XML Implementation
```xml
<wzdx_road_events_feed>
	<road_event_feed_info>
		<feed_info_id>320</feed_info_id>
		<feed_update_date>2015-01-07T16:50:56Z</feed_update_date>
		<metadata>iCone-Metadata.txt</metadata>
		<version>2.0</version>
	</road_event_feed_info>
	<road_events>
		<road_event>
			<road_event_id>1243532</road_event_id>
			<geometry_type>MultiPoint</geometry_type>
			<geometry>[[31.0855180,-97.4030700][31.0855180,-97.4030700]]</geometry>
			<road_name>I-35</road_name>
			<direction>northbound</direction>
			<beginning_accuracy>estimated</beginning_accuracy>
			<ending_accuracy>estimated</ending_accuracy>
			<start_date>2015-01-07T16:50:56Z</start_date>
			<end_date>2016-02-07T00:50:00Z</end_date>
			<start_date_accuracy>estimated</start_date_accuracy>
			<end_date_accuracy>estimated</end_date_accuracy>
			<event_status>active</event_status>
			<total_num_lanes>3</total_num_lanes>
			<open_lanes>all</open_lanes>
			<closed_lanes>none</closed_lanes>
			<closed_shoulders>outside</closed_shoulders>
			<workers_present>True</workers_present>
			<update_date>2018-01-17T22:32:00Z</update_date>
		<road_event>
	</road_events>
	<lanes>
		<lane>
			<lane_id>234324</lane_id>
			<road_event_id>1243532</road_event_id>
			<lane_status>open</lane_status>
			<lane_type>all</lane_type>
		</lane>
		<lane>
			<lane_id>123145</lane_id>
			<road_event_id>1243532</road_event_id>
			<lane_status>closed</lane_status>
			<lane_type>both-shoulders</lane_type>
		</lane>
	</lanes>
	<lane_restrictions>
		<lane_restriction>
			<lane_restriction_id>1</lane_restriction_id>
			<lane_id>234324</lane_id>
			<restriction_type>reduced-height</restriction_type>
			<restriction_value>15</restriction_value>
			<restriction_units>feet</restriction_units>
		</lane_restriction>
		<lane_restriction>
			<lane_restriction_id>2</lane_restriction_id>
			<lane_id>234324</lane_id>
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
			"feed_info_id": "320",
			"feed_update_date": "2015-01-07T16:50:56Z",
			"metadata": "iCone-Metadata.txt",
			"version": "2.0"
		},
		"road_events": [
			{
				"road_event_id": "1243532",
				"geometry_type": "MultiPoint",
				"geometry": [[31.0855180, -97.4030700], [31.0855180, -97.4030700]],
				"road_name": "I-35",
				"direction": "northbound",
				"beginning_accuracy": "estimated",
				"ending_accuracy": "estimated",
				"start_date": "2015-01-07T16:50:56Z",
				"end_date": "2016-02-07T00:50:00Z",
				"start_date_accuracy":"estimated",
				"end_date_accuracy":"estimated",
				"event_status": "active",
				"total_num_lanes": 3,
				"vehicle_impact":"all-lanes-open",
				"workers_present": true,
				"update_date": "2015-01-07T16:50:56Z"
			}
		],
		"lanes": [
			{
				"lane_id":"234324",
				"road_event_id":"1243532",
				"lane_status":"open",
				"lane_type":"all"
			},
			{
				"lane_id":"123145",
				"road_event_id":"1243532",
				"lane_status":"closed",
				"lane_type":"both-shoulders"
			}
		],
		"lane_restrictions": [
			{
				"lane_restriction_id":"1",
				"lane_id":"234324",
				"restriction_type":"reduced-height",
				"restriction_value":"15",
				"restriction_units":"feet"
			},
			{
				"lane_restriction_id":"2",
				"lane_id":"234324",
				"restriction_type":"reduced-width",
				"restriction_value":"10",
				"restriction_units":"feet"
			}
		]
	}
}
```
