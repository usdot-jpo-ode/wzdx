# FieldDeviceType Enumerated Type
The `FieldDeviceType` enumerated type enumerates all types of field devices described by the specification.

## Values
Value | Description
--- | ---
`arrow-board` | An electronic, connected arrow board which can display an arrow pattern to direct traffic.
`camera` | A camera device deployed in the field, capable of capturing still images.
`dynamic-message-sign` | An electronic traffic sign deployed on the roadway, used to provide information to travelers.
`flashing-beacon` | A flashing beacon light of any form, used to indicate caution and capture driver attention.
`hybrid-sign` | A message sign that contains both static text (e.g. on an aluminium board) along with a variable electronic message sign, used to provide information to travelers.
`location-marker` | Any GPS-enabled ITS device that is placed at a point on a roadway to mark a location (often the beginning or end of a road event).
`traffic-sensor` | A device deployed on a roadway which captures traffic metrics such as speed, volume, or occupancy.
`traffic-signal` | A temporary traffic signal deployed on a roadway.

## Used By
Property | Object
--- | ---
`device_type` | [FieldDeviceCoreDetails](/spec-content/objects/FieldDeviceCoreDetails.md)