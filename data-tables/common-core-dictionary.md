# Common Core Data Dictionary
This section includes a table of WZDx common core data concepts. Data concepts may reference a single, discrete data element or may refer to a grouping of several data elements (i.e., a data frame): 

- **Data Element** – Discrete data concept that cannot be broken down into smaller units. 
- **Data Frame** - Data concept that describes a portion of a message or data feed that may contain other data elements or data frames. The data described are intended to have clear and unambiguous meanings.

#### Table 1. Common Core Data
Data Name | Data Type | Data Description | Conformance | Notes
--------- | --------- | ---------------- | ----------- | -----
**identifier** | Data element | A unique identifier issued by the data feed provider to identify the work zone project or activity | Required | Request that this be a standardized identifier for a future version
**subidentifier** | Data element | A unique identifier issued by data feed provider that provides additional references to project or activity | Optional | This identifier may be used in more than one feed as a reference to an<br>agency project number or permit ID
**StartDateTime** | Data Frame | The time and date when a work zone starts | Required |
**EndDateTime** | Data Frame | The time and date when a work zone ends | Required | 
**BeginLocation** | Data Frame | The LOCATION when work zone impact begins along a single road in<br>a single direction (see BeginLocation). The impact typically begins where the first channeling device (e.g., cone or barrel) is located. | Required | The method used for designating impact should be included in a static Metadata file (see<br>Section 2.7)
**EndLocation** | Data Frame | The LOCATION along a single road<br>in a single direction when work zone<br>impact ends and the traffic returns to<br>normal (See EndLocation) | Required | The method used for<br>designating impact<br>should be included in a<br>static Metadata file (see Section 2.7)
**wz-Status** | Enum | The status of the work zone | Optional | See Enumerated Type Definitions
**totalLanes** | Data element | The total number of lanes associated<br>with the road segment designated by<br>the BeginLocation and EndLocation | Optional | A segment is a part of a<br>roadway in a single<br>direction designated by<br>a start (BeginLocation)<br>and end (EndLocation)
**openLanes** | Enum | The laneType that is opened on the road segment designated by<br>the work zone BeginLocation | Optional |
**closedLanes** | Enum | The laneType that is closed due<br>to the work zone on the road segment<br>designated by the Begin Location<br>and EndLocation | Required | More detailed lane impacts / status will be described in Version 2 of the specification
**closedShoulders** | Enum | An enumerated type identifying the<br>shoulder lanes that are closed | Optional | To explicitly state that no shoulders are closed, use none
**workersPresent** | Data element | A flag indicating that there are<br>workers present in the work zone | Optional | 
**reducedSpdPosted** | Data element | The reduced speed limit posted in<br>the work zone | Optional |
**RoadRestrictions** | Enum | One or more roadRestriction flags indicating restrictions apply to the work zone road segment associated with the work zone bounded by the begin / end locations | Optional | More details may be added to future WZDx versions; these are included as flags rather than detailed restrictions
**description** | Data element | Short free text description of work zone | Optional | This will be populated with formal phrases in a later WZDx version
**ActivityTypes** | Data element | A list of `ActivityType` data frames. These frames indicate the type(s) of work occurring in the activity as well as if each type of work will result in an architectural change to the roadway | Optional |
**issuingOrganization** | Data element | The organization issuing the data feed | Optional | Will create a list in a<br>future version
**timestampEventCreation** | Data element | The time and date when the activity or event was created | Optional |
**timestampEventUpdate** | Data element | The time and date when the activity or event was updated | Optional |
