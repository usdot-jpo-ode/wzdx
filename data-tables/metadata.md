# Metadata
This section describes the contents of a static file with information about the quality and context of data in the data feed. The files should be made available to data consumers through a link included in the [road_event_feed_info table](https://github.com/usdot-jpo-ode/jpo-wzdx/blob/v2editorial/data-tables/road_event_feed_info.md).

The static file shall be encoded as a comma delimited text file.

**Filename:** WZ-Metadata.txt

#### Table 11. Metadata
Field Name | Data Type | Description | Conformance | Notes
--------- | ----------- | ------- | ---------| --------
**issuing_organization** | Text | The name of the issuing organization.<br>This name should match the name in the<br>[road_events table](https://github.com/usdot-jpo-ode/jpo-wzdx/blob/v2editorial/data-tables/road_events.md). | Required | Example Anyplace public works
**Location-verify-method** | Text | The method used to verify the accuracy<br>of the location information | Required | Example Survey accurate GPS equipment accurate to 0.1 cm
**WZ-location-method** | Enumeration; Text | The typical method used to locate the<br>begin and end of a work zone impact area.<br>Select the method that most closely<br>represents how begin and end locations<br>are assigned in the WZDX file.<ul><li>channel-device-method</li><li>sign-method</li><li>junction-method</li><li>unknown - when method for<br>locating the begin and end<br>locations of the work zone is not known</li><li>other- when the method for<br>locating the begin and end<br>locations do not closely match any of the alternatives. An explanation<br>should be included in the<br>metadata when this value is assigned</li></ul>See [WZ location method description and practice](https://github.com/usdot-jpo-ode/jpo-wzdx/blob/v2editorial/sample-files/README.md#wz-location-method-description-and-practices). | Required | Example channel-device-method
**LRS-Type** | Text |Describes the type of linear referencing<br>system used for the milepost<br>measurements | Required | Use of milemarkers posted  by the<br>roadways. These are registered<br>to a dynamic segmentation of<br>statewide LRS basemap. 
**LRS-URL** | URL |A URL where additional information on the<br>LRS information and transformation<br>information is stored | Optional | Example https://aaa.bbb.com/lrs
**Datafeed-frequency-update** | Text | The frequency at which the data feed is<br>updated and made available through the<br>data feed. Format shall include value+<br>units such as<br>30s, 15m, or 24h where:<ul><li>s = seconds</li><li>m = minutes</li><li>h-hours</li></ul> | Optional | Example 30s<br>15m<br>24h
'**Timestamp-Metadata-Update** | DateTime | The time and date when this file was last<br>updated | Required | Example 2016-04-12T00:01:00
**Contact-name** | Text |The name of a contact responsible for the<br>data feed | Required |Example Jo Help
**Contact-email** | Text | The contact’s email address | Required | Example jhelp@anyplacePW.com
