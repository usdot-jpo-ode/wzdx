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
0 | 320 | roadway-relocation | 1
1 | 320 | overhead-work | 1

#### Lane Information (0 or more entries per road event)
lanes Table

lane_id | road_event_id | lane_edge_reference | lane_number | lane_status | lane_type
--|--|--|--|--|--
 |  |  |  |  | 

#### Lane Restriction Information (0 or more entries per lane)
lanes_restictions Table

lane_restriction_id| lane_id | restriction_type | restriction_value | restriction_units
--|--|--|--|--
||||
||||

### GeoJSON Implementation

[iCone Example Mapped](https://gist.github.com/DeraldDudley/be7a31d028dfeac5586cf0a29fab9c01#file-icone_multipoint_example-geojson)

```geojson
{
"road_event_feed_info": {
	"feed_info_id": "1",
	"feed_update_date": "2015-01-07T16:50:56Z"
},
"type": "FeatureCollection",
"features": [
 {
"type": "Feature",
	"properties": {
		"road_event_id": "320",
		"feed_info_id": "1",
		"road_name": "I-35",
		"road_number": "I-35",
		"direction": "northbound",
		"begining_accuracy": "verified",
		"ending_accuracy": "verified",
		"start_date": "2015-01-07T16:50:56Z",
		"start_date_accuracy": "verified",
		"event_status": "active",
		"total_num_lanes": "3",
		"vehicle_impact": "all-lanes-open",
		"description": "Long-term deployment near Temple",
		"issuing_organization": "iCone",
		"update_date":"2018-01-17T22:32:00Z",
		"type_of_work":[[
			{"type_of_work_id":"0", "type_name":"roadway-relocation", "is_architectual_change":"1"},
			{"type_of_work_id":"1", "type_name":"overhead-work", "is_architectual_change":"1"}
		]]
      },
	"geometry": {
        "type": "MultiPoint",
        	"coordinates": [[-97.4030700, 31.0855180],[-97.4030700, 31.0855180]]
      }
    }
  ]
}
