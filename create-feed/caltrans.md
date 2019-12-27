# Example 3: CalTrans 

- [Template](#template)
- [GeoJSON Implementation](#geojson-implementation)

### Template

#### Feed Information (1 Entry per feed)
road_event_feed_info Table

feed_info_id | feed_update_date | metadata | version
--- | --- | --- | ---
1 | 2016-04-19T14:41:04 |  | 2.0

#### Event Information (1 or more entries per feed)
road_events Table

road_event_id | feed_info_id | subidentifier | geometry_type | geometry | road_name | road_number | direction | beginning_cross_street | ending_cross_street | beginning_milepost |ending_milepost | beginning_accuracy | ending_accuracy | start_date | end_date | start_date_accuracy | end_date_accuracy | event_status | total_num_lanes | vehicle_impact | workers_present | reduced_speed_limit | restrictions | description | issuing_organization | creation_date | update_date
--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--
C299CA-0004-2016-04-12-00:01:00 | 1 | | MultiPoint | [[-122.733841, 40.635122],[-122.654384, 40.67201]] | CA-299 | | eastbound | | | 114.190 | 121.633 | estimated | estimated | 2016-11-03T19:37:00 | 2016-11-04T05:30:00 | verified | estimated | active | 2 | some-lanes-closed | true | | | One lane closed on Route 299 East near Lewiston to French Gulch (0.6 mi west of Crystal Creek Rd) for approximately 30 days. | Caltrans | 2016-04-12T00:01:00 | 2016-04-19T14:41:04

#### Type of Work (0 or more entries per road event)
type_of_work Table

type_of_work_id | road_event_id | type_name | is_architectural_change
--|--|--|--
0 | C299CA-0004-2016-04-12-00:01:00 | maintenance | 0
1 | C299CA-0004-2016-04-12-00:01:00 | overhead-work | 0

#### Lane Information (0 or more entries per road event)
lanes Table

lane_id | road_event_id | lane_edge_reference | lane_number | lane_status | lane_type
--|--|--|--|--|--
0 | C299CA-0004-2016-04-12-00:01:00 | left | 1 | merge-right | left-lane
1 | C299CA-0004-2016-04-12-00:01:00 | left | 2 | open | center-lane
2 | C299CA-0004-2016-04-12-00:01:00 | left | 3 | open | right-lane

#### Lane Restriction Information (0 or more entries per lane)
lanes_restictions Table

lane_restriction_id| lane_id | restriction_type | restriction_value | restriction_units
--|--|--|--|--
0|0|reduced-width|18|feet
1|0|reduced-height|15|feet

### GeoJSON Implementation

[CalTrans Example Mapped](https://gist.github.com/DeraldDudley/be7a31d028dfeac5586cf0a29fab9c01#file-caltrans_multipoint_example-geojson)

```geojson
{
"road_event_feed_info": {
	"feed_info_id": "1",
	"feed_update_date": "2016-04-19T14:41:04"
},
"type": "FeatureCollection",
"features": [
 {
"type": "Feature",
	"properties": {
		"road_event_id": "C299CA-0004-2016-04-12-00:01:00",
		"feed_info_id": "1",
		"road_name": "CA-299",
		"road_num": "CA-299",
		"direction": "eastbound",
		"beginning_milepost": "114.190",
		"ending_milepost": "121.633",
		"beginning_accuracy": "estimated",
		"ending_accuracy": "estimated",
		"start_date": "2016-04-12T15:58:00",
		"end_date": "2016-04-30T",
		"start_date_accuracy": "verified",
		"end_date_accuracy": "estimated",
		"event_status": "active",
		"total_num_lanes": "2",
		"vehicle_impact": "some-lanes-closed",
		"worker_present": "true",
		"description": "One lane closed on Route 299 East near Lewiston to French Gulch (0.6 mi west of Crystal Creek Rd) for approximately 30 days.",
		"issuing_organization": "CalTrans",
		"update_date":"2017-11-02T18:57:02",
		"type_of_work":{"type_of_work_id":"0", "type_name":"maintenance", "is_architectual_change":"0"},
		"lanes": [[
		{"lane_id":"0", "lane_edge_reference":"left", "lane_number":"1", "lane_status":"merge-right", "lane_type":"left-lane",
		"lane_restrictions":[[
			{"lane_restriction_id":"0", "restriction_type":"reduced-width", "restriction_value":"18", "restriction_units":"feet"},
			{"lane_restriction_id":"1", "restriction_type":"reduced-height", "restriction_value":"15", "restriction_units":"feet"}
		]]},
		{"lane_id":"1", "lane_edge_reference":"left", "lane_number":"2", "lane_status":"open", "lane_type":"center-lane"},
		{"lane_id":"2", "lane_edge_reference":"left", "lane_number":"3", "lane_status":"open", "lane_type":"right-lane"}
		]]
      },
	"geometry": {
        "type": "MultiPoint",
        	"coordinates": [[-122.733841, 40.635122],[-122.654384, 40.67201]]
      }
    }
  ]
}
