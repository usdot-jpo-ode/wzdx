# EventType Enumerated Type
The type of a WZDx road event.

## Values
Value | Description
--- | ---
`work-zone` | An area of a trafficway with highway construction, maintenance, or utility-work activities.  A work zone is typically marked by signs, channeling devices, barriers, pavement markings, and/or work vehicles.  It extends from the first warning sign or flashing lights on a vehicle to the "End of Road Work" sign or the last traffic control device.  A work zone may be for short or long durations and may include stationary or moving activities.<br>Inclusions:<ol><li>Long-term stationary highway construction such as building a new bridge, adding travel lanes to the roadway, and extending an existing trafficway.<li>Mobile highway maintenance such as striping the roadway, median, and roadside grass mowing/landscaping, and pothole repair.<li>Short-term stationary utility work such as repairing electric, gas, or water lines within the trafficway.</ol>Exclusions:<ol><li>Private construction, maintenance, or utility work outside the trafficway.</ol>*The AASHTO term equivalent to roadway is traveled way.<br>*The AASHTO term equivalent to trafficway is highway, street, or road.<br><br>Source: https://www.fhwa.dot.gov/publications/publicroads/99mayjun/workzone.cfm
`detour` | A temporary rerouting of road users onto an existing trafficway to avoid a work zone or other impedance.<br><br>Source: https://mutcd.fhwa.dot.gov/htm/2009/part6/part6c.htm
`restriction` | A section of roadway that has limitations of how that section can be used.

## Used By
Property | Object
--- | ---
`event_type` | [RoadEventCoreDetails](/spec-content/objects/RoadEventCoreDetails.md)
