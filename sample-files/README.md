# Sample Files
This directory contains sample feeds.

## Evolving XML schema and GeoJSON examples
The following un-versioned files are intended to be updated with any relevant changes to the specification and represent the most current version, whether in progress or released.
* [CaltTrans Example GeoJSON](/create-feed/examples/caltrans.geojson)
* [iCone Example GeoJSON](/create-feed/examples/icone.geojson)
* [MassDot Example GeoJSON](/create-feed/examples/massdot.geojson)

## XML Schema and Examples of GeoJSON files
You may locate sample feeds and schema specific to a release of the specification by navigating to the branch tagged with the specific version number. For example, sample files for WZDx version 1.1 will be located at https://github.com/usdot-jpo-ode/jpo-wzdx/tree/v1.1/sample-files. You may view a list of available tagged releases by clicking on the "Branch" dropdown menu on the upper left and navigating to the "Tags" tab of the dropdown.

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
