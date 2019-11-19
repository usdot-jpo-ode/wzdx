# Example 2: iCone
- [Template](#road_event_feed_info-template)
- [XML Implementation](#xml-implementation)
- [JSON Implementation](#json-implementation)

### road_event_feed_info template
Tag | Value
--- | -----
feed_info_id | 320
feed_update_date | 2015-01-07T16:50:56Z
feed_publisher | iCone
feed_metadata | iCone-Metadata.txt
feed_version | 2.0

Tag | Value
--- | -----
road_event_id | 1243532
feed_info_id | 320
geometry_type | MultiPoint
geometry | [[31.0855180,-97.4030700][31.0855180,-97.4030700]]
road_name | I-35
event_direction | northbound
event_beginning_accuracy | estimated
event_ending_accuracy | estimated
event_start_date | 2015-01-07T16:50:56Z
event_end_date | n/a
event_start_date_accuracy | estimated
event_end_date_accuracy | estimated
event_status | active
event_closed_lanes | some-lanes-closed
event_update_date | 2015-01-07T16:50:56Z

### XML Implementation
```xml
<road_event_feed_info>
	<feed_info_id>320</feed_info_id>
	<feed_update_date>2015-01-07T16:50:56Z</feed_update_date>
	<feed_publisher>iCone</feed_publisher>
	<feed_metadata>iCone-Metadata.txt</feed_metadata>
	<feed_version>2.0</feed_version>
</road_event_feed_info>
```

```xml
<road_events>
	<road_event_id>1243532</road_event_id>
	<feed_info_id>320</feed_info_id>
	<geometry_type>MultiPoint</geometry_type>
	<geometry>[[31.0855180,-97.4030700][31.0855180,-97.4030700]]</geometry>
	<road_name>I-35</road_name>
	<event_direction>northbound</event_direction>
	<event_beginning_accuracy>estimated</event_beginning_accuracy>
	<event_ending_accuracy>estimated</event_ending_accuracy>
	<event_start_date>2015-01-07T16:50:56Z</event_start_date>
	<event_end_date>n/a</event_end_date>
	<event_start_date_accuracy>estimated</event_start_date_accuracy>
	<event_end_date_accuracy>estimated</event_end_date_accuracy>
	<event_status>active</event_status>
	<event_closed_lanes>some-lanes-closed</event_closed_lanes>
</road_events>
```

### JSON Implementation
```json
{
   "road_event_feed_info": {
        "feed_info_id":"320",
	"feed_update_date":"2015-01-07T16:50:56Z",
	"feed_publisher":"iCone",
	"feed_metadata":"iCone-Metadata.txt",
	"feed_version":"2.0"
      },
}
```

```json
{
   "road_events": {
        "road_event_id":"1243532",
	"feed_info_id":"320",
	"geometry_type":"MultiPoint",
	"geometry":"[[31.0855180,-97.4030700][31.0855180,-97.4030700]]",
	"road_name":"I-35",
	"event_direction":"northbound",
	"event_beginning_accuracy":"estimated",
	"event_ending_accuracy":"estimated",
	"event_start_date":"2015-01-07T16:50:56Z",
	"event_end_date":"n/a",
	"event_start_date_accuracy":"estimated",
	"event_end_date_accuracy":"estimated",
	"event_status": "active",
        "event_closed_lanes": "some-lanes-closed",
        "event_update_date": "2015-01-07T16:50:56Z"
      },
   }
}
```
