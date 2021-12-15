# LocationMethod Enumerated Type
The typical method used to locate the begin and end of a work zone impact area.

## Values
Value | Description
--- | ---
`channel-device-method` | Location of first and last channeling device (e.g., cone or barrier) that is part of a “travel impact effect” (taper) or designation of a work zone transition area. *This is the preferred location method*
`sign-method` | Location of first and last work zone-related signs
`junction-method` | Location of a junction (e.g., a cross street or exit/entrance ramp) before and after a work zone
`other` | Location method does not match any of the other options
`unknown` | Location method is not known

## Used By
Property | Object
--- | ---
`location_method` | [WorkZoneRoadEvent](/spec-content/objects/WorkZoneRoadEvent.md)

## Additional Information
The following sections details the usage of each of the location method

### channel-device-method (Preferred Method)
Location of first and last channeling device (e.g., cone or barrier) that is part of a “travel impact effect” (taper) or designation of a work zone transition area. For complex work zones with multiple activities, begin and end locations are the first channeling device for first activity up to the last channeling device of the last activity.

#### Simple Scenario
![Simple channel-device method diagram](/images/channel_device_method_simple.png)

#### Complex Scenario
This example shows three work zone activity areas that are part of a work zone project. Each activity area is treated as an independent work zone activity record, with its own begin and end location where each lane taper begins and ends.

Note: using the [Relationship](/spec-content/objects/Relationship.md), the “owner” can link the three work activities together.

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

