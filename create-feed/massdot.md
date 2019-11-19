# Example 1: MassDOT 

- [Template](#road_event_feed_info-template)
- [XML Implementation](#xml-implementation)
- [JSON Implementation](#json-implementation)

### road_event_feed_info template
Tag | Value
--- | -----
feed_info_id | 137097
feed_update_date | 2017-11-02T18:57:02Z
feed_publisher | MassDOT
feed_metadata | MassDOT-Metadata.txt
feed_version | 2.0

Tag | Value
--- | -----
road_event_id | 1243532
feed_info_id | 137097
geometry_type | MultiPoint
geometry | [[42.33865,-72.63399][42.33307,-72.6214]]
road_name | I-91
event_direction | southbound
event_beginning_accuracy | estimated
event_ending_accuracy | estimated
event_start_date | 2016-11-03T19:37:00
event_end_date | 2016-11-04T05:30:00
event_start_date_accuracy | estimated
event_end_date_accuracy | estimated
event_status | active
event_total_lanes | 3
event_open_lanes | right2
event_closed_lanes | left1
event_closed_shoulders | inside
event_workers_present | n/a
event_restrictions | n/a
event_description | I-91 Southbound   Exit (20) Rt-5/ Rt-10 Northampton Hadley to Exit<br>(19) Rt-9
event_issuingOrganization | MassDOT
event_update_date | 2017-11-02T18:57:02

### XML Implementation
```xml
<road_event_feed_info>
	<feed_info_id>137097</feed_info_id>
	<feed_update_date>2017-11-02T18:57:02</feed_update_date>
	<feed_publisher>MassDOT</feed_publisher>
	<feed_metadata>MassDOT-Metadata.txt</feed_metadata>
	<feed_version>2.0</feed_version>
</road_event_feed_info>
```

```xml
<road_events>
	<road_event_id>1243532</road_event_id>
	<feed_info_id>137097</feed_info_id>
	<geometry_type>MultiPoint</geometry_type>
	<geometry>[[42.33865,-72.63399][42.33307,-72.6214]]</geometry>
	<road_name>I-91</road_name>
	<event_direction>southbound</event_direction>
	<event_beginning_accuracy>estimated</event_beginning_accuracy>
	<event_ending_accuracy>estimated</event_ending_accuracy>
	<event_start_date>2016-11-03T19:37:00</event_start_date>
	<event_end_date>2016-11-04T05:30:00</event_end_date>
	<event_start_date_accuracy>estimated</event_start_date_accuracy>
	<event_end_date_accuracy>estimated</event_end_date_accuracy>
	<event_status>active</event_status>
	<event_total_lanes>3</event_total_lanes>
	<event_open_lanes>right2</event_open_lanes>
	<event_closed_lanes>left1</event_closed_lanes>
	<event_closed_houlders>inside</event_closed_shoulders>
	<event_workers_present>n/a</event_workers_present>
	<event_restrictions>n/a</event_restrictions>
	<event_description>I-91 Southbound Exit (20) Rt-5/Rt-10 Northhampton Hadley to Exit (19) Rt-9</event_description>
	<event_issuingOrganization>MassDOT</event_issuingOrganization>
	<event_update_date>2017-11-02T18:57:02</event_update_date>
</road_events>
```

### JSON Implementation
```json
{
   "road_event_feed_info": {
        "feed_info_id":"137097",
	"feed_update_date":"2017-11-02T18:57:02",
	"feed_publisher":"MassDOT",
	"feed_metadata":"MassDOT-Metadata.txt",
	"feed_version":"2.0"
      },
}
```

```json
{
   "road_events": {
        "road_event_id":"1243532",
	"feed_info_id":"137097",
	"geometry_type":"MultiPoint",
	"geometry":"[[42.33865,-72.63399][42.33307,-72.6214]]",
	"road_name":"I-91",
	"event_direction":"southbound",
	"event_beginning_accuracy":"estimated",
	"event_ending_accuracy":"estimated",
	"event_start_date":"2016-11-03T19:37:00",
	"event_end_date":"2016-11-04T05:30:00",
	"event_start_date_accuracy":"estimated",
	"event_end_date_accuracy":"estimated",
	"event_status": "active",
        "event_total_lanes": "3",
        "event_open_lanes": "right2",
        "event_closed_lanes": "left1",
        "event_closed_shoulders": "inside",
        "event_workers_present": "n/a",
        "event_restrictions": "n/a",
        "event_description": "I-91 Southbound Exit (20) Rt-5/Rt-10 Northhampton Hadley to Exit (19) Rt-9",
        "event_issuingOrganization": "MassDOT",
        "event_update_date": "2017-11-02T18:57:02"
      },
   }
}
```
