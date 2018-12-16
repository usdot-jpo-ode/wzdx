# Example 2: iCone
- [Template](#template)
- [XML Implementation](#xml-implementation)
- [JSON Implementation](#json-implementation)

### Template
Tag | Value
--- | -----
Identifier | 320
StartDateTime<ul><li>startDateTime-ver</li></ul> | 2015-01-07T16:50:56Z
EndDateTime<ul><li>endDateTime</li></ul> | n/a
BeginLocation<ul><li>roadName</li><li>roadNum</li><li>roadDirection</li><li>latitude</li><li>longitude</li><li>milepost</li></ul> | roadName: I-35<br>roadDirection: Northbound<br>latitude-ver: 31.0855180<br>longitude-ver: -97.4030700
EndLocation<ul><li>latitude</li><li>longitude</li><li>milepost</li></ul> | latitude-ver: 31.0855180<br>longitude-ver: -97.4030700
wz-Status | active
totalLanes | 3
openLanes | all
closedLanes | none
closedShoulders | outside
workersPresent | true
RoadRestrictions*<ul><li>roadRestrictions</li></ul> |
description | Long-term deployment near Temple
issuingOrganization | iCone
timeStampUpdate | 2018-01-17T22:32:00Z

### XML Implementation
```xml
<Header>
         <timeStampUpdate>2018-01-17T22:32:00Z2</timeStampUpdate>
</Header>
<WorkZoneActivity>
	       <identifier>320</identifier>
	       <startDateTime>
		             <startDateTime-est>2015-01-07T16:50:56Z</startDateTime-est>
	       </startDateTime>
	       <endDateTime>
		             <endDateTime-est>n/a</endDateTime-est>
	       </endDateTime>
	       <beginLocation>
		            <roadName>I-35</roadName>
		            <roadDirection>northbound</roadDirection>
		            <latitude-est>31.0855180</latitude-est>
		            <longitude-est>-97.4030700</longitude-est>
	       </beginLocation>
         <endLocation>
		            <latitude-est>31.0855180</latitude-est>
		            <longitude-est>-97.4030700</longitude-est>
	       </endLocation>
	       <wz_status>active</wz_status>
	       <totalLanes>3</totalLanes>
	       <openLanes>all</openLanes>
	       <closedLanes>none</closedLanes>
	       <closedShoulders>outside</closedShoulders>
	       <workersPresent>true</workersPresent>
	       <description>Long-term deployment near Temple</description>
	       <issuingOrganization>iCone</issuingOrganization>
	       <timestampEventUpdate>2018-01-17T22:32:00Z2</timestampEventUpdate>
</WorkZoneActivity>
```
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
