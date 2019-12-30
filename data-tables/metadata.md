# Metadata
This section describes the contents of a static file with information about the quality and context of data in the data feed. The files should be made available to data consumers through a link included in the [WZDx header data elements](https://github.com/usdot-jpo-ode/jpo-wzdx/blob/master/data-tables/wzdx-header-data.md).

The static file shall be encoded as a comma delimited text file.

**Filename:** WZ-Metadata.txt

#### Table 11. Metadata
Data Name | Description | Example
--------- | ----------- | -------
**issuingOrganization** | The name of the issuing organization.<br>This name should match the name in the<br>WorkZoneActivity record. | “Anyplace public works”
**Location-verify-method** | The method used to verify the accuracy<br>of the location information | “Survey accurate GPS equipment accurate to 0.1 cm”
**WZ-location-method** | The typical method used to locate the<br>begin and end of a work zone impact area.<br>Select the method that most closely<br>represents how begin and end locations<br>are assigned in the WZDX file.<ul><li>channel-device-method</li><li>sign-method</li><li>junction-method</li><li>unknown - when method for<br>locating the begin and end<br>locations of the work zone is not known</li><li>other- when the method for<br>locating the begin and end<br>locations do not closely match any of the alternatives. An explanation<br>should be included in the<br>metadata when this value is assigned</li></ul>See description in [WZ Location Method Description and Practices](https://github.com/usdot-jpo-ode/jpo-wzdx/blob/v2editorial/sample-files/README.md#wz-location-method-description-and-practices) | “channel-device-method”
**LRS-Type** | Describes the type of linear referencing<br>system used for the milepost<br>measurements | “Use of milemarkers posted the<br>roadways. These are registered<br>to a dynamic segmentation of<br>statewide LRS basemap.” 
**LRS-URL** | A URL where additional information on the<br>LRS information and transformation<br>information is stored | https://aaa.bbb.com/lrs
**Datafeed-frequency-update** | The frequency at which the data feed is<br>updated and made available through the<br>data feed. Format shall include value+<br>units such as<br>30s, 15m, or 24h where:<ul><li>s = seconds</li><li>m = minutes</li><li>h-hours</li></ul> | "30s"<br>"15m"<br>24h
'**Timestamp-Metadata-Update** | The time and date when this file was last<br>updated | 2016-04-12T00:01:00
**Contact-name** | The name of a contact responsible for the<br>data feed | Jo Help
**Contact-email** | The contact’s email address | jhelp@anyplacePW.com
