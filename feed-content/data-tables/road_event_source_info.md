## road_event_source_info
**Required**

This table contains information about organizations providing work zone data feed source data.  For each record in the road_event_source_info table there must exist one or more related records in the [road_events](/feed-content/data-tables/road_events.md) table. The source_info_id field acts as the foreign key in the road_event table.

## Road Event Feed Info Table Structure
Field Name | Data Type | Description | Conformance | Notes
---------- | --------- | ---------------- | ----------- | -----
**source_info_id** | Text | Unique identifier for the organization providing work zone data. | Required | 
**feed_info_id** | Text | Unique identifier for the data feed. Acts as the foreign key to road_event_feed_info table | Required | 
**source_organization** | Text | Authoritative source of the work zone data. | Required | Example: County DOT
**source_contact_name** | Text | The name of a contact responsible for the<br>work zone source data | Required | Example: Jo Help
**source_contact_email** | Text | The source's email address.  | Required |
**source_update_frequency** | Text | The frequency at which the data feed is<br>updated and made available through the<br>data feed. Format shall include value+<br>units such as<br>30s, 15m, or 24h where:<ul><li>s = seconds</li><li>m = minutes</li><li>h-hours</li></ul> | Optional | Example 30s<br>15m<br>24h
**source_update_date** | DateTime | The UTC date and time when the data feed was last updated. | Required | All date/time formats shall use ISO 8601 Data elements and interchange formats – Information interchange. Example: `2016-11-03T19:37:00Z`
**location_verify_method** | Text | The method used to verify the accuracy of the location information | Required | Example Survey accurate GPS equipment accurate to 0.1 cm
**location_method** | Enumeration; Text | The typical method used to locate the<br>begin and end of a work zone impact area.<br>Select the method that most closely<br>represents how begin and end locations<br>are assigned in the WZDX file.<ul><li>channel-device-method</li><li>sign-method</li><li>junction-method</li><li>unknown - when method for<br>locating the begin and end<br>locations of the work zone is not known.</li><li>other- when the method for<br>locating the begin and end<br>locations does not closely match any of the alternatives. An explanation<br>should be included in the<br>metadata when this value is assigned.</li></ul>  | Required | Example: channel-device-method
**lrs_type** | Text |Describes the type of linear referencing<br>system used for the milepost<br>measurements | Required | Example Use of milemarkers posted by the<br>roadways. These are registered<br>to a dynamic segmentation of<br>statewide LRS basemap.
**lrs_url** | URL |A URL where additional information on the<br>LRS information and transformation<br>information is stored | Optional | Example https://aaa.bbb.com/lrs
