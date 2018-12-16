# Example 3: Caltrans
- [Template](#template)
- [XML Implementation](#xml-implementation)
- [JSON Implementation](#json-implementation)

### Template
Tag | Value
--- | -----
Identifier | C299CA-0004-2016-04-12-00:01:00
StartDateTime<ul><li>startDateTime</li></ul> | startDateTime-ver: 2016-04-12T15:58:00
EndDateTime<ul><li>endDateTime</li></ul> | endDateTime-est: 2016-04-30T
BeginLocation<ul><li>roadName</li><li>roadNum</li><li>roadDirection</li><li>latitude</li><li>longitude</li><li>milepost</li></ul> | roadName: CA-299<br>roadDirection: East<br>latitude-est: 40.635122<br>longitude-est: -122.733841<br>milepost-est: 114.190T23:59:00
EndLocation<ul><li>latitude</li><li>longitude</li><li>milepost</li></ul> | latitude-est: 40.67201<br>longitude-est: -122.654384<br>milepost-est: 121.633
wz-Status | Active
totalLanes | 2
openLanes | right
closedLanes | left
closedShoulders | Inside
workersPresent | True
RoadRestrictions*<ul><li>roadRestriction</li></ul> |
description | One lane closed on Route 299 East near Lewiston to French Gulch<br>(0.6 mi west of Crystal Creek Rd) for approximately 30 days.
issuingOrganization | Caltrans
timeStampCreation | 2016-04-12T00:01:00
timeStampUpdate | 2016-04-19T14:41:04

### XML Implementation
```xml
<Header>
	<timeStampUpdate>2017-11-02T18:57:02</timeStampUpdate>
</Header>
<WorkZoneActivity>
        <identifier>137097</identifier>
	      <startDateTime>
		      <startDateTime-est>2016-11-03T19:37:00</startDateTime-est>
	      </startDateTime>
	      <endDateTime>
		      <endDateTime-est>2016-11-04T05:30:00</endDateTime-est>
	      </endDateTime>
	      <beginLocation>
		      <roadName>I-91</roadName>
		      <roadDirection>southbound</roadDirection>
		      <latitude-est>42.33865</latitude-est>
		      <longitude-est>-72.63399</longitude-est>
	      </beginLocation>
	      <endLocation>
		      <latitude-est>42.33307</latitude-est>
		      <longitude-est>-72.6214</longitude-est>
	      </endLocation>
	      <wz_status>active</wz_status>
	      <totalLanes>3</totalLanes>
	      <openLanes>right2</openLanes>
	      <closedLanes>left1</closedLanes>
	      <closedShoulders>inside</closedShoulders>
	      <workersPresent>n/a</workersPresent>
	      <roadRestrictions>n/a</roadRestrictions>
	      <description>I-91 Southbound Exit (20) Rt-5/Rt-10 Northhampton Hadley to Exit (19) Rt-9</description>
	      <issuingOrganization>MassDOT</issuingOrganization>
	      <timestampEventUpdate>2017-11-02T18:57:02</timestampEventUpdate>
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
