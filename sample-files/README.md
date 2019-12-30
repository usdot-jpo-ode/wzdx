# Sample Files
This directory contains sample XML and JSON feeds as well as an XML Schema. 

## Evolving XML schema and XML and JSON examples 
The following un-versioned files are intended to be updated with any relevant changes to the specification and represent the most current version, whether in progress or released.
* [xml-schema.xsd](/sample-files/xml-schema.xsd)
* [CaltTrans Example.xml](/create-feed/examples/caltrans.geojson)
* [iCone Example.json](/create-feed/examples/icone.geojson)
* [MassDot Example.json](/create-feed/examples/massdot.geojson)

## XML Schema and Examples of XML and JSON files
Sample feeds and schema can also be specific to a release of the specification. These files should be located in a sub-directory named with the specific version number.

### Version 2.0 Examples and Schema
In the `v1.0` directory, find the following sample files:
* [CaltTrans Example.xml](/create-feed/examples/caltrans.geojson)
* [iCone Example.json](/create-feed/examples/icone.geojson)
* [MassDot Example.json](/create-feed/examples/massdot.geojson)
* [WZDx_draft01.xsd](/sample-files/xml-schema.xsd)

### Version 1.0 Examples and Schema
In the `v1.0` directory, find the following sample files:
* [WXDX_XMLSample.xml](/sample-files/v1.0/WZDX_XMLSample.xml)
* [wxdx_JSONsample.json](/sample-files/v1.0/wxdx_JSONsample.json)
* [WZDx_draft01.xsd](/sample-files/v1.0/WZDx_final01.xsd)

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

#### Arterial Scenario
![Fig. 5](https://github.com/acosta-dani-bah/ITS-JPO-wzdx/blob/master/images/Figure%205.png)

#### Highway Scenario
![Fig. 6](https://github.com/acosta-dani-bah/ITS-JPO-wzdx/blob/master/images/Figure%206.png)
