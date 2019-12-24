# Example 1: MassDOT 

- [Template](#template)
- [GeoJSON Implementation](#geojson-implementation)

### Templates

#### Feed Information (1 Entry per feed)
road_event_feed_info Table

feed_info_id | feed_update_date | metadata | version
--- | --- | --- | ---
1 | 2017-11-02T18:57:02 |  |

#### Event Information (1 Entry per event)
road_events Table

road_event_id | feed_info_id | subidentifier | geometry_type | road_name | road_number | direction | beginning_cross_street | ending_cross_street | beginnin_milepost |ending_milepost | beginning_accuracy | ending_accuracy | start_date | end_date | start_date_accuracy | end_date_accuracy | event_status | total_num_lanes | vehicle_impact | workers_present | reduced_speed_limit | restrictions | description | issuing_organization | creation_date | update_date
--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--
137097 | 1 | | MultiPoint | [[-72.63399, 42.33865],[-72.6214, 42.33307]] | I-91 | southbound | | | | | estimated | estimated | 2016-11-03T19:37:00 | 2016-11-04T05:30:00 | verified | estimated | active | 3 | some-lanes-closed | | | | I-91 Southbound Exit (20) Rt-5/ Rt-10 Northampton Hadley to Exit (19) Rt-9 | MassDOT | | 2017-11-02T18:57:02

#### Lane Information (1 Entry per Lane)
lanes Table

lanes_id | road_event_id | lane_edge_reference | lane_number | lane_status | lane_type
--|--|--|--|--|--
0 | 137097 | left | 1 | closed | left-lane
1 | 137097 | left | 2 | open | center-lane
2 | 137097 | left | 3 | open | right-lane


### GeoJSON Implementation
```geojson
{
	"road_event_feed_info": {
		"feed_info_id": "1",
		"feed_update_date": "2017-11-02T18:57:02",
},
	"type": "FeatureCollection",
	"features": [
	 {
		"type": "Feature",
			"properties": {
				"road_event_id": "137097",
				"feed_info_id": "1",
				"road_name": "I-91",
				"direction": "southbound",
				"begining_accuracy": "estimated",
				"ending_accuracy": "estimated",
				"start_date": "2016-11-03T19:37:00",
				"end_date": "2016-11-04T05:30:00",
				"start_date_accuracy": "verified",
				"end_date_accuracy": "estimated",
				"event_status": "active",
				"total_num_lanes": "3",
				"vehicle_impact": "some-lanes-closed",
				"description": "I-91 Southbound Exit (20) Rt-5/ Rt-10 Northampton Hadley to Exit
(19) Rt-9",
				"issuing_organization": "MassDOT",
				"update_date": "2017-11-02T18:57:02"
      },
      "geometry": {
        "type": "MultiPoint",
        "coordinates": [
          [
            -72.63399,
            42.33865
          ],
          [
            -72.6214,
            42.33307
          ]
        ]
      }
    }
  ]
}
