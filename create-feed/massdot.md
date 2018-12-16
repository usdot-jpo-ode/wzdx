# Example 1: MassDOT 

- [Template](#template)
- [XML Implementation](#xml-implementation)
- [JSON Implementation](#json-implementation)

### Template
Tag | Value
--- | -----
Identifier | 137097
StartDateTime<ul><li>startDateTime-ver</li></ul> | startDateTime-ver: 2016-11-03T19:37:00
EndDateTime<ul><li>endDateTime-est</li></ul> | endDateTime-est: 2016-11-04T05:30:00
BeginLocation<ul><li>roadName</li><li>roadNum</li><li>roadDirection</li><li>latitude</li><li>longitude</li><li>milepost</li></ul> | roadName: I-91<br>roadDirection: southbound<br>latitude-est: 42.33865<br>longitude-est: -72.63399
EndLocation<ul><li>latitude</li><li>longitude</li><li>milepost</li></ul> | latitude-est: 42.33307<br>longitude-est: -72.6214
wz-Status | active
totalLanes | 3
openLanes | right2
closedLanes | left1
closedShoulders | inside
workersPresent | n/a
RoadRestriction*<ul><li>roadRestriction</li></ul> | n/a
description | I-91 Southbound   Exit (20) Rt-5/ Rt-10 Northampton Hadley to Exit<br>(19) Rt-9
issuingOrganization | MassDOT
timeStampEventUpdate | 2017-11-02T18:57:02

### XML Implementation

### JSON Implementation
```json
{
   "WZDx": {
      "Header": {
         "timeStampUpdate": "2017-11-02T18:57:02",
      },
      "WorkZoneActivity": {
         "identifier": "137097",
         "startDateTime": {
            "startDateTime-ver": "2016-11-03T19:37:00",
         },
         "endDateTime": {
            "endDateTime-est": "2016-11-04-T05:30:00",
         },
         "beginLocation": {
            "roadName": "I-91",
            "roadDirection": "southtbound",
            "latitude-est": 42.33865,
            "longitude-est": -72.63399,
         },
         "endLocation": {
            "latitude-est": 42.33307,
            "longitude-est": -72.6214,
         },
         "wz_status": "active",
         "totalLanes": "3",
         "openLanes": "right2",
         "closedLanes": "left1",
         "closedShoulders": "inside",
         "workersPresent": "n/a",
         "roadRestrictions": "n/a",
         "description": "I-91 Southbound Exit (20) Rt-5/Rt-10 Northhampton Hadley to Exit (19) Rt-9",
         "issuingOrganization": "MassDOT",
         "timestampEventUpdate": "2017-11-02T18:57:02"
      },
   }
}
```
