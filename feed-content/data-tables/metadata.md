# Metadata
This section describes the contents of a static file with information about the quality and context of data in the data feed. The files should be made available to data consumers through a link included in the [road_event_feed_info table](/feed-content/data-tables/road_event_feed_info.md).

The static file shall be encoded as a comma delimited text file.

**Filename:** WZ-Metadata.txt

## Metadata Table Structure
Data Name | Data Type | Description | Conformance | Notes
--------- | ----------- | ------- | ---------| --------
**issuing_organization** | Text | The name of the issuing organization.<br>This name should match the name in the<br>[road_events table](/feed-content/data-tables/road_events.md). | Required | Example Anyplace public works
**location_verify_method** | Text | The method used to verify the accuracy<br>of the location information | Required | Example Survey accurate GPS equipment accurate to 0.1 cm
**wz_location_method** | Enumeration; Text | The typical method used to locate the<br>begin and end of a work zone impact area.<br>Select the method that most closely<br>represents how begin and end locations<br>are assigned in the WZDX file.<ul><li>channel-device-method</li><li>sign-method</li><li>junction-method</li><li>unknown - when method for<br>locating the begin and end<br>locations of the work zone is not known</li><li>other- when the method for<br>locating the begin and end<br>locations do not closely match any of the alternatives. An explanation<br>should be included in the<br>metadata when this value is assigned</li></ul> | Required | Example channel-device-method
**lrs_type** | Text |Describes the type of linear referencing<br>system used for the milepost<br>measurements | Required | Example Use of milemarkers posted by the<br>roadways. These are registered<br>to a dynamic segmentation of<br>statewide LRS basemap.
**lrs_url** | URL |A URL where additional information on the<br>LRS information and transformation<br>information is stored | Optional | Example https://aaa.bbb.com/lrs
**datafeed_frequency_update** | Text | The frequency at which the data feed is<br>updated and made available through the<br>data feed. Format shall include value+<br>units such as<br>30s, 15m, or 24h where:<ul><li>s = seconds</li><li>m = minutes</li><li>h-hours</li></ul> | Optional | Example 30s<br>15m<br>24h
**timestamp_metadata_update** | DateTime | The UTC date and time when this file was last<br>updated | Required | Example 2016-04-12T00:01:00Z
**contact_name** | Text |The name of a contact responsible for the<br>data feed | Required |Example Jo Help
**contact_email** | Text | The contact’s email address | Required | Example jhelp@anyplacePW.com

## WZ Location Method Description and Practices
The metadata file will include one of five enumerated type values for WZ-location-method field.  

For this data element (WZ-location-method), select the value below that most closely represents how begin and end locations are assigned in the WZDX file.

* **channel-device-method**  – *this is the preferred method*
* **sign-method**
* **junction-method**
* **unknown** – when method for locating the begin and end locations of the work zone is not known
* **other** – when the method for locating the begin and end locations do not closely match any of the alternatives. An explanation should be included in the metadata when this value is assigned.

### channel-device-method (Preferred Method)
Location of first and last channeling device (e.g., cone or barrier) that is part of a “travel impact effect” (taper) or designation of a work zone transition area. For complex work zones with multiple activities, begin and end locations are the first channeling device for first activity up to the last channeling device of the last activity.

#### Simple Scenario
![Simple channel-device method diagram](/images/channel_device_method_simple.png)

#### Complex Scenario
This example shows three work zone activity areas that are part of a work zone project. Each activity area is treated as an independent work zone activity record, with its own begin and end location where each lane taper begins and ends.

Note: with the data element “subidentifier”, the “owner” can link the three work activities together.

![Complex channel-device method diagram](/images/channel_device_method_complex.png)

### sign-method
Location of first and last work zone-related signs. This may be different from the channelization location. For complex work zones, begin would be the first sign before the first activity and end would be the last sign following the last activity.

![sign-method diagram](/images/sign_method.png)

### junction-method
Location of a Junction (e.g., a cross street or exit/entrance ramp) before and after a work zone. Note that this is similar to the approach used by Waze to designate a road closure event.

#### Arterial Scenario
![Arterial junction-method diagram](/images/junction_method_arterial.png)

#### Highway Scenario
![Highway junction-method diagram](/images/junction_method_highway.png)
