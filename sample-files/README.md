## XML Schema and Examples of XML and JSON files
See files in separate attachment:
* [WXDX_XMLSample.xml](/sample-files/WZDX_XMLSample.xml)
* [wxdx_JSONsample.json](/sample-files/wxdx_JSONsample.json)
* [WZDx_draft01.xsd](/sample-files/WZDx_final01.xsd)


## WZ Location Method Description and Practices 
The metadata file will include one of five enumerated type values for WZ-location-method field.  

For this data element (WZ-location-method), select the value below that most closely represents how begin and end locations are assigned in the WZDX file.

* **channel-device-method** (see section 5.1) – *this is the preferred method*
* **sign-method** (see section 5.2)
* **junction-method** (see section 5.3)
* **unknown** – when method for locating the begin and end locations of the work zone is not known
* **other** – when the method for locating the begin and end locations do not closely match any of the alternatives. An explanation should be included in the metadata when this value is assigned.

### channel-device-method (Preferred Method)
Location of first and last channeling device (e.g., cone or barrier) that is part of a “travel impact effect” (taper) or designation of a work zone transition area. For complex work zones with multiple activities, begin and end locations are the first channeling device for first activity up to the last channeling device of the last activity.

#### Simple Scenario
![Fig. 2](https://github.com/acosta-dani-bah/ITS-JPO-wzdx/blob/master/images/Figure%202.png)
 
#### Complex Scenario
This example shows three work zone activity areas that are part of a work zone project. Each activity area is treated as an independent work zone activity record, with its own begin and end location where each lane taper begins and ends. 

Note: with the data element “subidentifier”, the “owner” can link the three work activities together.

![Fig. 3](https://github.com/acosta-dani-bah/ITS-JPO-wzdx/blob/master/images/Figure%203.png)

### sign-method
Location of first and last work zone-related signs. This may be different from the channelization location. For complex work zones, begin would be the first sign before the first activity and end would be the last sign following the last activity.

![Fig. 4](https://github.com/acosta-dani-bah/ITS-JPO-wzdx/blob/master/images/Figure%204.png)

### junction-method
Location of a Junction (e.g., a cross street or exit/entrance ramp) before and after a work zone. Note that this is similar to the approach used by Waze to designate a road closure event.

#### Aterial Scenario
![Fig. 5](https://github.com/acosta-dani-bah/ITS-JPO-wzdx/blob/master/images/Figure%205.png)

#### Highway Scenario
![Fig. 6](https://github.com/acosta-dani-bah/ITS-JPO-wzdx/blob/master/images/Figure%206.png)
