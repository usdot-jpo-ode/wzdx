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
320 | 1 | | LineString | [[-97.4030700, 31.0855180],[-97.4030700, 31.0855180]] | I-35 | I-35 | northbound | | | | | verified | verified | 2015-01-07T16:50:56Z |  | verified | | active | 3 | all-lanes-open | true |  | | Long-term deployment near Temple | iCone | | 2018-01-17T22:32:00Z

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
        "type": "LineString",
        	"coordinates": [
          [
            -97.40439623594284,
            31.08519686435773
          ],
          [
            -97.40249454975128,
            31.085775717976823
          ],
          [
            -97.40068674087524,
            31.086336191930844
          ],
          [
            -97.39590972661972,
            31.08780397485987
          ],
          [
            -97.39341259002686,
            31.08858724254471
          ],
          [
            -97.39155113697052,
            31.089172966359566
          ],
          [
            -97.3892229795456,
            31.089887314831213
          ],
          [
            -97.38771826028824,
            31.090346700078552
          ],
          [
            -97.38431990146637,
            31.091405574613724
          ],
          [
            -97.38134801387787,
            31.092342703187434
          ],
          [
            -97.37842440605164,
            31.09315579254894
          ],
          [
            -97.3727434873581,
            31.094791137649405
          ],
          [
            -97.36893475055695,
            31.095898195179483
          ],
          [
            -97.367684841156,
            31.096311615844815
          ],
          [
            -97.36635446548462,
            31.096816905325735
          ],
          [
            -97.36278712749481,
            31.09836491182291
          ],
          [
            -97.36218631267548,
            31.09868185959668
          ],
          [
            -97.36188054084778,
            31.098883970668275
          ],
          [
            -97.36108660697937,
            31.09961432300118
          ],
          [
            -97.36042678356169,
            31.10056974398948
          ],
          [
            -97.35979914665222,
            31.101639987818167
          ],
          [
            -97.35915005207062,
            31.102907728852266
          ],
          [
            -97.35883355140685,
            31.10375747333312
          ],
          [
            -97.35861361026762,
            31.1046852937585
          ],
          [
            -97.35831320285797,
            31.10556717407662
          ],
          [
            -97.35670387744904,
            31.10981110855904
          ],
          [
            -97.35606551170349,
            31.111441574073297
          ],
          [
            -97.35475659370422,
            31.11500094374912
          ],
          [
            -97.35335111618042,
            31.118523440143104
          ],
          [
            -97.35303997993469,
            31.11936845243064
          ],
          [
            -97.35275566577911,
            31.11988280405256
          ],
          [
            -97.35239088535309,
            31.120475223448462
          ],
          [
            -97.35199928283691,
            31.12093905310755
          ],
          [
            -97.35161304473877,
            31.121333995386752
          ],
          [
            -97.35106587409973,
            31.121816190127124
          ],
          [
            -97.35053479671477,
            31.122174390348224
          ],
          [
            -97.34964430332184,
            31.12278516453001
          ],
          [
            -97.34919905662537,
            31.123092846275487
          ],
          [
            -97.34852313995361,
            31.12340052702334
          ],
          [
            -97.34793305397034,
            31.123616362176474
          ],
          [
            -97.3467367887497,
            31.123919449009563
          ],
          [
            -97.34568536281586,
            31.12412150636047
          ],
          [
            -97.34449982643127,
            31.12419038944994
          ],
          [
            -97.34351813793182,
            31.124341932070774
          ],
          [
            -97.34227895736694,
            31.124580726012436
          ],
          [
            -97.34128654003143,
            31.124787374130754
          ],
          [
            -97.3400366306305,
            31.125104233704743
          ],
          [
            -97.33937680721282,
            31.125324657132143
          ],
          [
            -97.33904421329498,
            31.12546701365688
          ],
          [
            -97.33854532241821,
            31.12560936996804
          ],
          [
            -97.33816981315613,
            31.1257425418077
          ],
          [
            -97.3369789123535,
            31.126233898357658
          ],
          [
            -97.33621180057526,
            31.126702291952206
          ],
          [
            -97.33557343482971,
            31.127161499113907
          ],
          [
            -97.33501017093658,
            31.127634480166922
          ],
          [
            -97.33461856842041,
            31.128061538703715
          ],
          [
            -97.33421087265015,
            31.128497779310305
          ],
          [
            -97.33361542224883,
            31.12925545559642
          ],
          [
            -97.33306288719177,
            31.13025649741086
          ],
          [
            -97.33263909816742,
            31.131285079831837
          ],
          [
            -97.33208119869232,
            31.13275905573364
          ],
          [
            -97.3315393924713,
            31.13406770673225
          ],
          [
            -97.33074009418488,
            31.136372725283998
          ],
          [
            -97.33037531375885,
            31.137332367886245
          ],
          [
            -97.32964307069778,
            31.139240145271625
          ],
          [
            -97.32961624860764,
            31.139286060018566
          ]
        ]
      }
    }
  ]
}
