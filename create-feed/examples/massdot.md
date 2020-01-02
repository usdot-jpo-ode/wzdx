# Example 1: MassDOT

- [Template](#template)
- [GeoJSON Implementation](#geojson-implementation)

### Template

#### Feed Information (1 Entry per feed)
road_event_feed_info Table

feed_info_id | feed_update_date | metadata | version
--- | --- | --- | ---
1 | 2017-11-02T18:57:02 |  | 2.0

#### Event Information (1 or more entries per feed)
road_events Table

road_event_id | feed_info_id | subidentifier | geometry_type | geometry | road_name | road_number | direction | beginning_cross_street | ending_cross_street | beginning_milepost |ending_milepost | beginning_accuracy | ending_accuracy | start_date | end_date | start_date_accuracy | end_date_accuracy | event_status | total_num_lanes | vehicle_impact | workers_present | reduced_speed_limit | restrictions | description | issuing_organization | creation_date | update_date
--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--
137097 | 1 | | MultiPoint | [[-72.63399, 42.33865],[-72.6214, 42.33307]] | I-91 | | southbound | | | | | estimated | estimated | 2016-11-03T19:37:00 | 2016-11-04T05:30:00 | verified | estimated | active | 3 | some-lanes-closed | | | | I-91 Southbound Exit (20) Rt-5/ Rt-10 Northampton Hadley to Exit (19) Rt-9 | MassDOT | | 2017-11-02T18:57:02

#### Type of Work (0 or more entries per road event)
types_of_work Table

type_of_work_id | road_event_id | type_name | is_architectural_change
--|--|--|--
0 | 137097 | maintenance | false
1 | 137097 | overhead-work | false

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

[MassDOT Example Mapped](/create-feed/examples/massdot.geojson)

```geojson
{
  "road_event_feed_info": {
    "feed_info_id": "1",
    "feed_update_date": "2017-11-02T18:57:02",
    "version": "2.0"
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
        "total_num_lanes": 3,
        "vehicle_impact": "some-lanes-closed",
        "description": "I-91 Southbound Exit (20) Rt-5/ Rt-10 Northampton Hadley to Exit (19) Rt-9",
        "issuing_organization": "MassDOT",
        "update_date": "2017-11-02T18:57:02",
        "types_of_work": [
          {
            "type_of_work_id": "0",
            "type_name": "maintenance",
            "is_architectual_change": false
          },
          {
            "type_of_work_id": "1",
            "type_name": "overhead-work",
            "is_architectual_change": false
          }
        ],
        "lanes": [
          {
            "lane_id": "0",
            "lane_edge_reference": "left",
            "lane_number": 1,
            "lane_status": "merge-right",
            "lane_type": "left-lane",
            "lane_restrictions": [
              {
                "lane_restriction_id": "0",
                "restriction_type": "reduced-width",
                "restriction_value": 18,
                "restriction_units": "feet"
              },
              {
                "lane_restriction_id": "1",
                "restriction_type": "reduced-height",
                "restriction_value": 15,
                "restriction_units": "feet"
              }
            ]
          },
          {
            "lane_id": "1",
            "lane_edge_reference": "left",
            "lane_number": 2,
            "lane_status": "open",
            "lane_type": "center-lane"
          },
          {
            "lane_id": "2",
            "lane_edge_reference": "left",
            "lane_number": 3,
            "lane_status": "open",
            "lane_type": "right-lane"
          }
        ]
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
```
