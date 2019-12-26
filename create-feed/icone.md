# Example 2: iCone

- [Template](#template)
- [GeoJSON Implementation](#geojson-implementation)

### Template

#### Feed Information (1 Entry per feed)
road_event_feed_info Table

feed_info_id | feed_update_date | metadata | version
--- | --- | --- | ---
1 | 2015-01-07T16:50:56Z |  |

#### Event Information (1 or more entries per feed)
road_events Table

road_event_id | feed_info_id | subidentifier | geometry_type | geometry | road_name | road_number | direction | beginning_cross_street | ending_cross_street | beginning_milepost |ending_milepost | beginning_accuracy | ending_accuracy | start_date | end_date | start_date_accuracy | end_date_accuracy | event_status | total_num_lanes | vehicle_impact | workers_present | reduced_speed_limit | restrictions | description | issuing_organization | creation_date | update_date
--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--
320 | 1 | | MultiPoint | [[-97.4030700, 31.0855180],[-97.4030700, 31.0855180]] | I-35 | I-35 | northbound | | | | | verified | verified | 2015-01-07T16:50:56Z |  | verified | | active | 3 | all-lanes-open | true |  | | Long-term deployment near Temple | iCone | | 2018-01-17T22:32:00Z

#### Type of Work (0 or more entries per road event)
type_of_work Table

type_of_work_id | road_event_id | type_name | is_architectural_change
--|--|--|--
0 | 137097 | maintenance | 0
1 | 137097 | overhead-work | 0

#### Lane Information (0 or more entries per road event)
lanes Table

lane_id | road_event_id | lane_edge_reference | lane_number | lane_status | lane_type
--|--|--|--|--|--
0 | 137097 | left | 1 | merge-right | left-lane
1 | 137097 | left | 2 | open | center-lane
2 | 137097 | left | 3 | open | right-lane

#### Lane Restriction Information (0 or more entries per lane)
lanes_restictions Table

lane_restriction_id| lane_id | restriction_type | restriction_value | restriction_units
--|--|--|--|--
0|0|reduced-width|18|feet
1|0|reduced-height|15|feet

### GeoJSON Implementation

[MassDOT Example Mapped](https://gist.github.com/DeraldDudley/be7a31d028dfeac5586cf0a29fab9c01)

```geojson
{
"road_event_feed_info": {
	"feed_info_id": "1",
	"feed_update_date": "2017-11-02T18:57:02"
},
"type": "FeatureCollection",
"features": [
 {
"type": "Feature",
	"properties": {
		"road_event_id": "",
		"feed_info_id": "",
		"road_name": "",
		"direction": "",
		"begining_accuracy": "",
		"ending_accuracy": "",
		"start_date": "",
		"end_date": "",
		"start_date_accuracy": "",
		"end_date_accuracy": "",
		"event_status": "",
		"total_num_lanes": "",
		"vehicle_impact": "",
		"description": "",
		"issuing_organization": "",
		"update_date":"",
		"type_of_work":[[
			{"type_of_work_id":"0", "type_name":"maintenance", "is_architectual_change":"0"},
			{"type_of_work_id":"1", "type_name":"overhead-work", "is_architectual_change":"0"}
		]],
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
        	"coordinates": [[-97.4030700, 31.0855180],[-97.4030700, 31.0855180]]
      }
    }
  ]
}
