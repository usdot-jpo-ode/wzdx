## DATA TABLES
### Common Core Data Dictionary
The Common Core Data Table (Table 1), and subsequent tables in this document, include the following columns:
- *Data Name* - name of the data concept (either a data element or data frame) 
- *Data Type* - identification of the data concept as a data element or data frame and whether it is an enumerated type
- *Data Description* - description of the data concept
- *Conformance* - description of the requirement for including data in the data feed file. There are three categories of conformance:
    - Required - must be included
    - Optional - may be included
    - Conditional - associated with two or more data concepts; requires that at least one of the concepts be included in the data feed file
- *Notes* - comments, guidance, or notes for future consideration

#### Table 1. Common Core Data
Data Name | Data Type | Data Description | Conformance | Notes
--------- | --------- | ---------------- | ----------- | -----
**identifier** | Data element | A unique identifier issued by the<br>data feed provider to identify<br>the work zone project or activity | Required | Request that this be a standardized identifier for a future version
**subidentifier** | Data element | A unique identifier issued by data feed provider<br>that provides additional references to project or activity | Optional | This identifier may be used in more<br>than one feed as a reference to an<br>agency project number or permit ID
**StartDateTime** | Data Frame | The time and date when a work zone<br>starts | Required |
**EndDateTime** | Data Frame | The time and date when a work zone<br>ends | Required | 
**BeginLocation** | Data Frame | The LOCATION when work zone<br>impact begins along a single road in<br>a single direction (see<br>BeginLocation).The impact typically<br>begins where the first channeling<br>device (e.g., cone or barrel) is<br>located. | Required | The method used for<br>designating impact<br>should be included in a<br>static Metadata file (see<br>Section 2.7)
**EndLocation** | Data Frame | The LOCATION along a single road<br>in a single direction when work zone<br>impact ends and the traffic returns to<br>normal (See EndLocation) | Required | The method used for<br>designating impact<br>should be included in a<br>static Metadata file (see Section 2.7)
**wz-Status** | Enum | The status of the work zone | Optional | See Enumerated Type Definitions
**totalLanes** | Data element | The total number of lanes associated<br>with the road segment designated by<br>the BeginLocation and EndLocation | Optional | A segment is a part of a<br>roadway in a single<br>direction designated by<br>a start (BeginLocation)<br>and end (EndLocation)
**openLanes** | Enum | The laneType that is opened on the road segment<br>designated by<br>the work zone BeginLocation | Optional |
**closedLanes** | Enum | The laneType that is closed due<br>to the work zone on the road segment<br>designated by the Begin Location<br>and EndLocation | Required | More detailed lane<br>impacts / status will be<br>described in Version 2<br>of the specification
**closedShoulders** | Enum | An enumerated type identifying the<br>shoulder lanes that are closed | Optional | To explicitly state that no<br>shoulders are closed,<br>use none
**workersPresent** | Data element | A flag indicating that there are<br>workers present in the work zone | Optional | 
**reducedSpdPosted** | Data element | The reduced speed limit posted in<br>the work zone | Optional |
**RoadRestrictions** | Enum | One or more roadRestriction flags<br>indicating restrictions apply to the<br>work zone road segment associated<br>with the work zone bounded by the<br>begin / end locations | Optional | More details may be<br>added to future WZDx<br>versions; these are<br>included as flags rather<br>than detailed restrictions
**description** | Data element | Short free text description of work zone | Optional | This will be populated<br>with formal phrases in a<br>later WZDx version
**issuingOrganization** | Data element | The organization issuing the data feed | Optional | Will create a list in a<br>future version
**timestampEventCreation** | Data element | The time and date when the activity<br>or event was created | Optional |
**timestampEventUpdate** | Data element | The time and date when the activity<br>or event was updated | Optional |
