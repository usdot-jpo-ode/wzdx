# FieldDeviceType Enumerated Type
The `FieldDeviceType` enumerated type enumerates all types of field devices described by the specification.

## Values
Value | Description
--- | ---
`arrow-board` | An electronic, connected arrow board which can display an arrow pattern to direct traffic. See [ArrowBoard](/spec-content/objects/ArrowBoard.md).
`camera` | A camera device deployed in the field, capable of capturing still images. See [Camera](/spec-content/objects/Camera.md).
`dynamic-message-sign` | An electronic traffic sign deployed on the roadway, used to provide information to travelers. See [DynamicMessageSign](/spec-content/objects/DynamicMessageSign.md).
`flashing-beacon` | A flashing beacon light of any form, used to indicate caution and capture driver attention. See [FlashingBeacon](/spec-content/objects/FlashingBeacon.md).
`hybrid-sign` | A message sign that contains both static text (e.g. on an aluminium board) along with a variable electronic message sign, used to provide information to travelers. See [HybridSign](/spec-content/objects/HybridSign.md).
`location-marker` | Any GPS-enabled ITS device that is placed at a point on a roadway to mark a location (often the beginning or end of a road event). See [LocationMarker](/spec-content/objects/LocationMarker.md).
`temporary-traffic-control-zone-sign` | A static, non-electronic sign that conveys both general and specific messages by means of words, symbols, and/or arrows (see definition in [MUTCD Section 6F.02 General Characteristics of Signs](https://mutcd.fhwa.dot.gov/htm/2009/part6/part6f.htm)).
`traffic-sensor` | A device deployed on a roadway which captures traffic metrics such as speed, volume, or occupancy. See [TrafficSensor](/spec-content/objects/TrafficSensor.md).
`traffic-signal` | A temporary traffic signal deployed on a roadway. See [TrafficSignal](/spec-content/objects/TrafficSignal.md).

## Used By
Property | Object
--- | ---
`device_type` | [FieldDeviceCoreDetails](/spec-content/objects/FieldDeviceCoreDetails.md)