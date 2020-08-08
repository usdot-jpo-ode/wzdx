# road_event_feed_info
**Required**

The road_event_feed_info object stores metadata about road event datasets.
- Feeds must comply with a single version of the Work Zone Data Specificaiton.
- Feeds must contain at least one road_event_feed_info object
- Feeds must contain at least one road_event_source_info object in the feed_sources array
- road_event features are related to road_event_feed_info objects via the road_event_source_info.source_info_id member.

## Road Event Feed Info Content
Member | Data Type | Description | Conformance | Notes
---------- | --------- | ---------------- | ----------- | -----
**feed_info_id** |	ID |	Unique identifier for the data feed. |Required | Primary Key Recommendations on the format of this unique identifier will be made in the future. | 
**feed_publisher** | Text | The organization responsible for publishing the feed. | Required | Example: State DOT
**feed_contact_name** | Text | The name of a contact responsible for the<br>data feed | Required | Example: Jo Help
**feed_contact_email** | Text  | The feed contact's email address. | Required | 
**feed_update_frequency** | Text | The frequency at which the data feed is<br>updated and made available through the<br>data feed. Format shall include value+<br>units such as<br>30s, 15m, or 24h where:<ul><li>s = seconds</li><li>m = minutes</li><li>h-hours</li></ul> | Optional | Example 30s<br>15m<br>24h
**feed_update_date** |	DateTime | The UTC date and time when the data feed was last updated. |	Required | All date/time formats shall use ISO 8601 Data elements and interchange formats – Information interchange. Example: `2016-11-03T19:37:00Z`
**version** | Text | The specification version used to create the data feed | Required |
**feed_sources** | Collection | An array of road_event_source_info objects | Required |

## road_event_feed_info diagram
![Image metadata model](https://github.com/usdot-jpo-ode/jpo-wzdx/blob/v3-metadata-update/images/feed_source_event_relationship.jpg)

## Road Event Feed Info Example
```
{
  "road_event_feed_info": {
    "feed_info_id": "1",
    "feed_publisher": "AZDOT",
    "feed_contact_name": "Frederick Francis Feedmanager",
    "feed_contact_email": "frederick.feedmanager@azdot.gov",
    "feed_update_frequency": "5m",
    "feed_update_date": "2020-06-18T01:01:01Z",
    "feed_sources": [
      {
        "source_info_id": "1",
        "source_organization": "Maricopa County DOT",
        "source_contact_name": "Solomn Soliel Sourcefeed",
        "source_contact_email": "solomon.sourcefeed@mcdot.gov",
        "source_update_frequency": "1m",
        "source_update_date": "2020-06-18T14:27:01Z",
        "location_verify_method": "GPS",
        "wz_location_method": "channel_device_method",
        "lrs_type": "milemarkers",
        "lrs_url": "https://www.azdot.com/lrs",
        "version": "2.0"
      },
      {
        "source_info_id": "2",
        "source_organization": "Phoenix DPW",
        "source_contact_name": "Samuel Sonny Sourcefeed",
        "source_contact_email": "samuel.sourcefeed@phoenix.gov",
        "source_update_frequency": "5m",
        "source_update_date": "2020-06-18T14:39:01Z",
        "location_verify_method": "GPS",
        "wz_location_method": "channel_device_method",
        "lrs_type": "milemarkers",
        "lrs_url": "https://www.phoenix.gov/lrs",
        "version": "2.0"
      }
    ]
  }
  ```
