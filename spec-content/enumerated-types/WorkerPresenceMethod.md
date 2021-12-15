# WorkerPresenceMethod Enumerated Type
Describes methods for how worker presence in a work zone event area is determined.

## Values
Value | Description
--- | ---
`camera-monitoring` | Cameras in the work zone event area show workers are present.
`arrow-board-present` | A GPS-enabled arrow board is located in the work zone event area and broadcasting its location, implying that workers are present.
`cones-present` | GPS-enabled cones are located in the road event area, implying that workers are present.   
`maintenance-vehicle-present` | A GPS-enabled maintenance vehicle is located in the road event area, implying that workers are present. 
`wearables-present` | Workers wearing wearable detection equipment are present in the work zone. 
`mobile-device-present` | Workers with GPS-enabled mobile device tracking are present in the work zone.
`check-in-app` | Workers have checked into the work zone via a mobile app.
`check-in-verbal` | Workers have checked into the work zone via phone or radio to a remote operations center.
`scheduled` | Workers are scheduled to be in the road event area, but presence has not been confirmed. 

## Used By
Property | Object
--- | ---
`method` | [WorkerPresence](/spec-content/objects/WorkerPresence.md)
