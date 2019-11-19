# Example 3: Caltrans
- [Template](#road_event_feed_info-template)
- [XML Implementation](#xml-implementation)
- [JSON Implementation](#json-implementation)

### road_event_feed_info template
Tag | Value
--- | -----
feed_info_id | C299CA-0004-2016-04-12-00:01:00
feed_update_date | 2016-04-19T14:41:04
feed_publisher | Caltrans
feed_metadata | Caltrans-Metadata.txt
feed_version | 2.0

Tag | Value
--- | -----
road_event_id | 23543
feed_info_id | C299CA-0004-2016-04-12-00:01:00
geometry_type | MultiPoint
geometry | [[40.635122,-122.733841][40.67201,-122.654384]]
road_name | CA-299
event_direction | eastbound
event_beginning_milepost | 114.19
event_ending_milepost | 121.633
event_beginning_accuracy | estimated
event_ending_accuracy | estimated
event_start_date | 2016-04-12T15:58:00
event_end_date | 2016-04-30T
event_start_date_accuracy | estimated
event_end_date_accuracy | estimated
event_status | active
event_total_lanes | 2
event_open_lanes | right
event_closed_lanes | left
event_closed_shoulders | inside
event_workers_present | True
event_restrictions | n/a
event_description |One lane closed on Route 299 East near Lewiston to French Gulch (0.6 mi west of Crystal Creek Rd) for approximately 30 days.
event_issuingOrganization | Caltrans
event_creation_date | 2016-04-12T00:01:00
event_update_date | 2016-04-19T14:41:04

### XML Implementation
```xml
<road_event_feed_info>
	<feed_info_id>C299CA-0004-2016-04-12-00:01:00</feed_info_id>
	<feed_update_date>2016-04-19T14:41:04</feed_update_date>
	<feed_publisher>Caltrans</feed_publisher>
	<feed_metadata>Caltrans-Metadata.txt</feed_metadata>
	<feed_version>2.0</feed_version>
</road_event_feed_info>
```

```xml
<road_events>
	<road_event_id>23543</road_event_id>
	<feed_info_id>C299CA-0004-2016-04-12-00:01:00</feed_info_id>
	<geometry_type>MultiPoint</geometry_type>
	<geometry>[[40.635122,-122.733841][40.67201,-122.654384]]</geometry>
	<road_name>CA-299</road_name>
	<event_direction>eastbound</event_direction>
	<event_beginning_milpost>114.19</event_beginning_milpost>
	<event_ending_milepost>121.633<event_ending_milepost>
	<event_beginning_accuracy>estimated</event_beginning_accuracy>
	<event_ending_accuracy>estimated</event_ending_accuracy>
	<event_start_date>2016-04-12T15:58:00</event_start_date>
	<event_end_date>2016-04-30T</event_end_date>
	<event_start_date_accuracy>estimated</event_start_date_accuracy>
	<event_end_date_accuracy>estimated</event_end_date_accuracy>
	<event_status>active</event_status>
	<event_total_lanes>2</event_total_lanes>
	<event_open_lanes>right</event_open_lanes>
	<event_closed_lanes>left</event_closed_lanes>
	<event_closed_houlders>inside</event_closed_shoulders>
	<event_workers_present>True</event_workers_present>
	<event_restrictions>n/a</event_restrictions>
	<event_description>One lane closed on Route 299 East near Lewiston to French Gulch (0.6 mi west of Crystal Creek Rd) for approximately 30 days.</event_description>
	<event_issuingOrganization>Caltrans</event_issuingOrganization>
	<event_creation_date>2016-04-12T00:01:00</event_creation_date>
	<event_update_date>2016-04-19T14:41:04</event_update_date>
</road_events>
```

### JSON Implementation
```json
{
   "road_event_feed_info": {
        "feed_info_id":"C299CA-0004-2016-04-12-00:01:00",
	"feed_update_date":"2016-04-19T14:41:04",
	"feed_publisher":"Caltrans",
	"feed_metadata":"Caltrans-Metadata.txt",
	"feed_version":"2.0"
      },
}
```

```json
{
   "road_events": {
        "road_event_id":"23543",
	"feed_info_id":"C299CA-0004-2016-04-12-00:01:00",
	"geometry_type":"MultiPoint",
	"geometry":"[[40.635122,-122.733841][40.67201,-122.654384]]",
	"road_name":"CA-299",
	"event_direction":"eastbound",
	"event_begin_milepost":"114.19",
	"event_end_milepost":"121.633",
	"event_beginning_accuracy":"estimated",
	"event_ending_accuracy":"estimated",
	"event_start_date":"2016-04-12T15:58:00",
	"event_end_date":"2016-04-30T",
	"event_start_date_accuracy":"estimated",
	"event_end_date_accuracy":"estimated",
	"event_status": "active",
        "event_total_lanes": "2",
        "event_open_lanes": "right",
        "event_closed_lanes": "left",
        "event_closed_shoulders": "inside",
        "event_workers_present": "True",
        "event_restrictions": "n/a",
        "event_description": "One lane closed on Route 299 East near Lewiston to French Gulch (0.6 mi west of Crystal Creek Rd) for approximately 30 days.",
        "event_issuingOrganization": "Caltrans",
	"event_creation_date":"2016-04-12T00:01:00",
        "event_update_date": "2016-04-19T14:41:04"
      },
   }
}
```
