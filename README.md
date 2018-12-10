### Work Zone Data Exchange (WZDx)

# WZDx v1.1 – Common Core Data Specification Reference Document

Updated 9/15/2018

## TABLE OF CONTNETS
[1. Introduction](#1.-introduction)
    1. Background
    2. Purpose
    3. Scope
    4. Document Organization
2. Data Tables
    1. Common Core Data Dictionary
    2. WZDx Header Data
    3. Data Frames
       1. StartDate Time
       2. EndDate Time
       3. BeginLocation
       4. EndLocation
    4. Enumerated Types
    5. Enumerated Type Definitions
    6. Enumerated Value Definitions Derived from ITS Standards
       1. openLanes and closedLanes
       2. closedShoulders
       3. roadDirection
    3. Metadata
3. Creating the Specification
    1. Code Examples
       1. Example 1: MassDOT  
       2. Example 2: iCone
       3. Example 3: Caltrans
4. XML Schema and Examples of XML and JSON files
5. WZ Location Method Description and Practices
    1. channel-device-method (Preferred Method)
    2. sign-method
    3. junction-method

## TABLES AND FIGURES
- Table 1. Common Core Data
- Table 2. WZDx Header Element Information
- Table 3. StartDateTime Data Frame Table
- Table 4. EndDateTime Data Frame Table
- Table 5. BeginLocation Data Frame Table
- Table 6. EndLocation Data Frame Table
- Table 7. Enumerated Types Table
- Table 8. Work Zone Status Definition Table
- Table 9. Spatial and Time Verification Definitions
- Table 10. RoadRestriction Definitions
- Table 11. Metadata
- Figure 1: Work Zone Activity Organization

## 1. Introduction
### i. Background
Up-to-date information about dynamic conditions occurring on roads – such as construction events – can help Automated Vehicles (AVs) navigate safely and efficiently. Many infrastructure owners and operators (IOOs) maintain data on work zone activity. However, a lack of common data standards and convening mechanisms makes it difficult and costly for third parties – including original equipment manufacturers (OEMs) and navigation applications – to access and use these data across various jurisdictions. 
In support of AV integration into our nation’s transportation system, the Federal Highway Administration (FHWA) and USDOT’s Intelligent Transportation Systems Joint Program Office (ITS JPO) are co-leading the Work Zone Data Exchange (WZDx) project. The effort seeks to jumpstart the voluntary adoption of a basic work zone data specification through collaboration with data producers and data users. WZDx will enable collaborative maintenance and expansion of the specification as operational and technological enhancements become available.
Upon finalization of the first iteration of work zone data specification, data producers will utilize the specification to make their respective active work zone data feeds available for use by non-government users. These users will then use the harmonized data in a meaningful way. These two outcomes will result in the establishment of the voluntary date exchange of work zone data (i.e., a minimum viable product (MVP) of harmonized work zone data). This approach is intended to be repeatable leading to the accelerated harmonization of local data.
The following data producers and users (i.e., the WZDx Working Group) voluntarily committed to participating and have been actively involved in the development of the standardized data specification:

Data Producers | Data Users
------------- | ----------
•	Pennsylvania Turnpike Authority<br>(also representing the Smart Belt Coalition) | •	HERE
•	Michigan Department of Transportation | •	Waze
•	Iowa Department of Transportation | •	Panasonic
•	Colorado Department of Transportation | •	Toyota
•	Kentucky Department of Transportation | •	Uber
•	iCone | •	Embark

### ii. Purpose
This document was developed through collaboration with the WZDx Working Group to describe a set of “common core” data concepts, their meaning, and their enumeration (as applicable) in order to standardize a data feed specification to be used to publish work zone information.  
For purposes of this effort, “common core” is defined as data elements needed for most (if not all) work zone data use cases that could possibly be defined. The data specification includes data elements that data producers (i.e., State transportation agencies and other IOOs) are already producing (“required”) as well as those that may not currently be produced (“optional”). This common core is also considered extensible, meaning both required and optional data elements can be added to support specific use cases now and in the future.  

### ii. Scope
The WZDx data feed will be incrementally enhanced to evolve into a data feed that supports advanced warnings to automated vehicles in and around work zones. The current version, (WZDx v1.1) which is included in this document, will serve as a first step in this effort. It highlights common core elements which serve as a foundation for required data. This version of the data feed addresses data currently supported by existing data feeds published by public and private sector organizations.

### iv. Document Organization
The remainder of this document is organized into the following sections:

**Section 2 Data Tables**
- **2.1 Common Core Data Dictionary** - This section includes a table of WZDx common core data concepts. Data concepts may reference a single, discrete data element or may refer to a grouping of several data elements (i.e., a data frame): 
    - *Data Element* – Discrete data concept that cannot be broken down into smaller units. 
    - *Data Frame* - Data concept that describes a portion of a message or data feed that may contain other data elements or data frames. 


    The data described are intended to have clear and unambiguous meanings.

- **2.2. WZDx Header Data** - This section includes a table of header information. Specifically, this includes supplemental data placed at the beginning of the Work Zone Activity records.
- **2.3 Data Frames** -  This section expands on the description of the data frames listed in the data dictionary (Section 2.1) and identifies values for data elements that contain standardized enumerations.  Tables are included for the following data frames:
    - StartDateTime
    - EndDateTime
    - BeginLocation
    - EndLocation
- **2.4 Enumerated Types** - This section includes a table of enumerated data elements.
- **2.5 Enumerated Type Definitions** - This section includes definitions for enumerated types including work zone status, status of Time and Location, and Road Restrictions. 
- **2.7 Metadata** - This section describes the contents of a static file with information about the quality and context of data in the data feed. 

**Section 3. Creating the Specification**
- This section provides a sample of how agencies will complete a Work Zone Activity record.

**Section 4. XML Schema and Examples of XML and JSON files**
- This section includes the validated XML scheme and examples of XML and JSON files.

## 2. DATA TABLES
### 2.1 Common Core Data Dictionary
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

### 2.2. WZDx Header Data
The WZDx header defines the content of the file and lists specific file attributes.  It is considered supplemental data and is placed at the beginning of the block of data (i.e., the “body”) being stored and transmitted.

For the WZDx v1, the body of the data feed comes from the Common Core Data Dictionary.  The header data includes the data feed name, body name, and file header information.
- *Data Feed Name* The data feed file name is “WZDX”. The extension used shall follow the encoding method (e.g., .xml or .json)
- *Data Feed Body* The data feed is composed of one or more work zone activity records (named WorkZoneActivity) as defined in the Common Core Data Dictionary
- *File Header Information* See table below

#### Table 2. WZDx Header Element Information
Data Element Name | Required | Description
----------------- | -------- | -----------
**timeStampUpdate** | yes | An element that designates the data and time<br>the data feed was last updated
**metadataURL** | no | A link to the metadata file (WZ-metadata.txt).<br>See Section 2.6 for a description of the file.
**versionNo** | no | The WZDx version number that was used to create the file

### 2.3. Data Frames
#### **2.3.1. StartDateTime**
Definition: The time and date when a work zone starts. All date/time formats shall use *ISO 8601 Data elements and interchange formats – Information interchange – Representation of dates and times* to represent date and time data elements.

#### Table 3. StartDateTime Data Frame Table
Data | Data Description | Conformance | Notes
---- | ---------------- | ----------- | -----
**startDateTime-est** | The planned time and date<br>when a work zone starts | Conditional<ul><li>startDateTime-est or</li><li>startDateTime-ver or</li><li>startDateTime-cancelled</li></ul> | |
**startDateTime-ver** | A verified time and date<br>when the work zone was<br>actually installed | Conditional<ul><li>startDateTime-est or</li><li>startDateTime-ver or</li><li>startDateTime-cancelled</li></ul> | |
**startDateTime-cancelled** | Cancellation of a planned start<br>time and date assocaited<br>with a work zone | Conditional<ul><li>startDateTime-est or</li><li>startDateTime-ver or</li><li>startDateTime-cancelled</li></ul> | |
**timeConfidenceLevel** | A confidence leve (in<br>percentage) of when the<br>work zone activities will<br>actually start | Optional | For future use

#### 2.3.2 EndDateTime
Definition: The time and date when a work zone ends. All date/time formats shall use *ISO 8601 Data elements and interchange formats – Information interchange – Representation of dates and times to* represent date and time data elements.

#### Table 4. EndDateTime Data Frame Table
Data | Data Description | Conformance | Notes
---- | ---------------- | ----------- | -----
**endDateTime-est** | The planned time and date<br>when a work zone ends | Conditional<ul><li>endDateTime-est or</li><li>endDateTime-ver or</li><li>endDateTime-cancelled</li></ul> | |
**endDateTime-ver** | A verified time and date<br>when the work zone was<br>actually ended | Conditional<ul><li>endDateTime-est or</li><li>endDateTime-ver or</li><li>endDateTime-cancelled</li></ul> | |
**endDateTime-cancelled** | Cancellation of a planned end <br>time and date assocaited<br>with a work zone | Conditional<ul><li>startDateTime-est or</li><li>startDateTime-ver or</li><li>startDateTime-cancelled</li></ul> | |
**timeConfidenceLevel** | A confidence leve (in<br>percentage) of when the<br>work zone activities will<br>actually start | Optional | For future use

#### 2.3.3. BeginLocation
Definition: The LOCATION when work zone impact begins along a single road in a single direction. Provide method for describing “impact” in metadata file (see Section 2.7).

#### Table 5. BeginLocation Data Frame Table
Data | Data Description | Conformance | Notes
---- | ---------------- | ----------- | -----
**roadName** | The name of the road on which<br>the work zone applies which is<br>known by the public | Required | Add a business rule that<br>pulls data from a specified<br>list or formal naming<br>conventions, for example,<br>(1) arterials comply with the<br>USPS Street Suffix Abbreviations (USPS Pub<br>28); (2) all Interstates will<br>be abbreviated as I-#, state<br>route with the<br>state abbreviation and then the number, etc. |
**roadNum** | The road number designated<br>by a jurisdiction such as a<br>county, state or interstate | Optional | Examples I-5, VT 133 |
**roadDirection** | The designated direction of the<br>roadName that is impacted by<br>the work zone activity | Required | Example North (for I-5 North) |
**latitude-est** | The estimated latitude along<br>the roadway where the work<br>zone area begins | Conditional<ul><li>latitude-est or</li><li>latitude-ver</li></ul> |  |
**latitude-ver** | A verified latitude<br>along the roadway where the work zone<br>area begins | Conditional<ul><li>latitude-est or</li><li>latitude-ver</li></ul> | Describe verification<br>method in metadata file
**longitude-est** | The estimated longitude along<br>the roadway where the<br>work zone area begins | Conditional<ul><li>longitude-est or</li><li>longitude-ver</li></ul> |  |
**longitude-ver** | A verified longitude along the<br>roadway where the work zone<br>area begins | Conditional<ul><li>longitude-est or</li><li>longitude-ver</li></ul> | Describe verification<br>method in metadata file
**milepost-est** | The estimated linear distance<br>measured against a milepost<br>marker along a roadway where<br>the work zone begins | Optional<br><br>If included only<br>one milepost<br>value (-est or -ver<br>is needed) | A milepost or mile marker is<br>a surveyed distance posted<br>along a roadway measuring<br>the length (in miles or tenth<br>of a mile) from the south<br>west to the north east. <br>These markers are typically<br>notated on State and local<br>government digital road<br>networks. Provide link to<br>description of milepost<br>method in metadata file<br>(see Section 2.7).
**milepost-ver** | An accurately linear distance<br>measured against a milepost<br>marker along a roadway where the<br>work zone begins | Optional<br><br>If included only<br>one milepost<br>value (-est or -ver<br>is needed) |  |
**crossStreet** | The cross street along the<br>roadway where the work zone<br>area begins | Conditional | Required when Road<br>Classification is arterial

#### 2.3.4. EndLocation
Definition: The LOCATION along a single road in a single direction when work zone impact ends and the traffic returns to normal. Provide method for describing “impact” in metadata file (see Section 2.7)

#### Table 6. EndLocation Data Frame Table
Data Name | Data Description | Conformance | Notes
--------- | ---------------- | ----------- | -----
**latitude-est** | The latitude along a roadway<br>where the work zone area ends<br>and the traffic returns to normal | Conditional<ul><li>latitude-est or</li><li>latitude-ver</li></ul> |  |
**latitude-ver** | A verified latitude along<br>the roadway where the work zone<br>area ends | Conditional<ul><li>latitude-est or</li><li>latitude-ver</li></ul> | Descibe verification method in metadata file
**longitude-est** | The longitude along a roadway<br>where the work zone area ends<br>and the traffic returns to normal | Required |  |
**longitude-ver** | A verified longitude along the<br>roadway where the work zone<br>area ends | Conditional<ul><li>longitude-est or</li><li>longitude-ver</li></ul> | Describe verification<br>method in metadata file
**milepost-est** | The measured linear distance<br>along a roadway where the<br>work zone begins | Optional<br><br>If included only<br>one milepost<br>value (-est or -ver<br>is needed) | Provide link to description<br>of milepost method in<br>metadata file (see Section 2.7)
**milepost-ver** | An accurately linear distance measured<br>against a milepost<br>marker along a roadway where<br>the work zone begins | Optional<br><br>If included only<br>one milepost<br>value (-est or -ver<br>is needed) |  |
**crossStreet** | The cross street along a<br>roadway where the work zone<br>area ends and the traffic returns<br>to normal | Conditional | Required when Road Classification is arterial

### 2.4. Enumerated Types
#### Table 7. Enumerated Types Table
Data Element | Used by | Allowed Values | Notes | Source
------------ | ------- | -------------- | ----- | ------
**wz-Status** | WorkZoneActivity | See Enumerated Type<br>Definitions (Table 8) 
**roadDirection** | BeginLocation | <ul><li>northbound</li><li>eastbound</li><li>eastbound</li><li>southbound</li><li>westbound</li></ul> |  | Adapted from<br>TMDD link-<br>alignment
**roadRestriction** | RoadRestrictions | <ul><li>no-trucks</li><li>travel-peak-hours-only</li><li>hov-3</li><li>hov-2</li><li>no-parking</li><li>bike-lane</li><li>ramp</li><li>towing-prohibited</li><li>permitted-oversize-loads-<br>prohibited (this applies to<br>annual oversize load<br>permits</li><li>reduced-width</li><li>reduced-height</li><li>reduced-length</li><li>reduced-weight</li><ul><li>axle-load-limit</li><li>gross-weight-limit</li></ul></ul> | Included one<br>or more<br>flags as needed | See<br>definitions<br>below
**laneType** | openLanes,<br>closedLanes | <ul><li>all</li><li>left-lane</li><li>right-lane</li><li>left-2-lanes</li><li>left-3-lanes</li>right-2-lanes</li><li>right-3-lanes</li><li>center</li><li>middle-lane</li><li>right-turning-lane</li><li>left-turning-lane</li><li>right-exit-lane</li><li>left-exit-lane</li><li>right-merging-lane</li><li>left-merging-lane</li><li>right-exit-ramp</li><li>right-second-exit-ramp</li><li>right-entrance-ramp</li><li>right-second-entrance-ramp</li><li>left-exit-ramp</li><li>left-second-exit-ramp</li><li>left-entrance-ramp</li><li>left-second-entrance-ramp</li><li>sidewalk</li><li>bike-lane</li><li>none</li><li>unknown</li><li>alternate-flow-lane</li><li>shift-left</li><li>shift-right</li></ul> |  | Adapted from<br>TMDD<br>LaneRoadway
**closedShoulders** | WorkZoneActivity | <ul><li>outside</li><li>inside</li><li>both</li><li>none</li><li>unknown</li></ul> |  | Adapted from<br>TMDD<br>LaneRoadway

### 2.5. Enumerated Type Definitions
#### Table 8. Work Zone Status Definition Table
Term | WZ-Status Description
---- | ---------------------
**Planned** | Planned status is associated with overall project or phase timing and locations.<br>Typically, this information is estimated during planning or early design phases. The<br>WZDx will not generally include planned activities.
**Pending** | Pending is used to alert stakeholders that work is scheduled for the near future (e.g., 2-<br>3 weeks). The certainty of starting at this time is greater than 90% (barring weather<br>and other unforeseen circumstances).<ul><li>Time horizon: approximate begin / end dates</li><li>Location: coverage area and main road name; path (polyline or geoface)<br>around zone area</li></ul>
**Active** | Used to alert stakeholder that work zone is in place and active.   
**Cancelled** | Reported cancellation of a proposed or active WZ; the coverage applies to the work zone activity record.<ul><li>When date/time is estimated, the cancellation may be one or more days<br>associated within the reported scheduled datetimes</li></ul>
**Completed** | Work Zone is closed and completed; all work zone impacts are mitigated. This status<br>may be used when a work zone activity is completed earlier than expected.

#### Table 9. Spatial and Time Verification Definitions
Term | WZ-Status Description
---- | ---------------------
**DateTime<br>Estimated(-est)** | Specific times/dates when work will or is occurring; includes advanced notice of<br>activities or unverified work zone activities. This date/time may be reported in<br>advance, but is not actively verified on day of event.
**DateTime Verified<br>(-ver)** | Actual reported times/dates when work occurs.
**Location<br>Estimated (-est)** | Estimated location associated with work zone activities and lane closures.<br>An estimated measurement may be based on an approximation of a location<br>referencing method (e.g., lat/long or milepost), for example: a point relative to a<br>posted milemarker, point on a map, or GPS device that provides less than<br>centimeter accuracy.
**Location Verified<br>(-ver)** | Actual reported information about work zone locations. Actual location is<br>typically measured by a calibrated navigation or survey system to centimeter<br>accuracy (six decimal places for latitude and longitude).

#### Table 10. RoadRestrictions Definitions
RoadRestrictions | Descriptions
---------------- | ------------
**no-trucks** | Trucks are prohibited from traveling in work zone area
**travel-peak-hours-only** | Travel restricted to travel peak hours only
**hov-3** | Travel restricted to high occupancy vehicles of three or more
**hov-2** | Travel restricted to high occupancy vehicles of two or more
**no-parking** | No parking in work zone area
**bike-lane** | Bike lane closed in work zone area
**ramp** | Ramp closed in work zone area
**reduced-width** | Lane width reduced in work zone area
**reduced height** | Height restrictions reduced in work zone area
**reduced-length** | Vehicle length restrictions reduced in work zone area
**reduced- weight** | Vehicle weight restrictions reduced in work zone area
**axle-load-limit** | Vehicle axle-load-limit restrictions reduced in work zone area
**gross-weight-limit** | Vehicle gross-weight-limit restrictions reduced in work zone area
**towing-prohibited** | Towing prohibited in work zone area
**permitted-oversize-loads-<br>prohibited** | “Permitted oversize loads” prohibited in work zone area; this applies<br>to annual oversize load permits.

### 2.6. Enumerated Value Definitions Derived from ITS Standards
The following tables show the translation from TMDD to the WZDx Enumerated Types (Table 7).

Example of data frame in the TMDD (specified in ASN.1 format)
```xml
DATA-TYPE "EventLane ::= SEQUENCE {
    lanes-type ITIS.LaneRoadway OPTIONAL,
    link-direction Link-direction OPTIONAL,
    lanes-total-original Link-lanes-count OPTIONAL,
    lanes-total-affected Link-lanes-count OPTIONAL,
    event-lanes-affected SEQUENCE (SIZE(1..64)) OF Link-lane-number OPTIONAL,
    lanes-status ITIS.Closures OPTIONAL,
    ...  }"
```

#### 2.6.1. openLanes and closedLanes
Note: LaneRoadway is imported into TMDD from SAE 2540 (ITIS Standard)

LaneRoadway<br>enumerations | Used for openLanes and<br>closedLanes | Description
--------------------------- | ------------------------------------- | -----------
**all-roadways (8192)** | all | Indicates that road all lanes are open or<br>closed; if all lanes are closed then road is<br>effectively closed
**through-lanes (8193)** |  | Not used
**left-lane (8194)** | left-lane | The left most lane (inside lane)
**right-lane (8195)** | right-lane | The right most lane (outside lane)
|  | left-2-lanes | the two most left lanes
|   | left-3-lanes | The three most left lanes
|   | right-2-lanes | The two most right lanes
|   | right-3-lanes | The three most right lanes
**center-lane (8196)** |  | Not used
**middle-lanes (8197)** | middle-lane | The center most lane where are a total of<br>an odd number of lanes
**middle-two-lanes (8198)** | middle-two-lanes | The center most lanes where are a total<br>of an even number of lanes
**right-turning-lanes (8199)** | right-turning-lane | A right lane where right turns are permissible
**left-turning-lanes (8200)** | left-turning-lane | A left lane where left turns are permissible
**upper-deck-lanes (8201)** |  | Note used
**lower-deck-lanes (8202)** |  | Note used
**reversible-lanes (8203)** |  | Note used
**right-exit-lanes (8204)** | right-exit-lane | The right lane where the lane provides an<br>egress with a ramp
**left-exit-lanes (8205)** | left-exit-lane | The left lane where the lanes where the<br>lane provides an egress with a ramp
**right-merging-lanes (8206)** | right-merging-lane | The right lane where the lane ends with a<br>gradual merge with the second most lane
**left-merging-lanes (8207)** | left-merging-lane | The left lane where the lanes ends by a<br>gradual merge with the second most left<br>lane
**right-exit-ramp (8208)** | right-exit-ramp | The (first) exit ramp with an egress on the<br>right in the direction of flow at an<br>interchange
**right-second-exit-ramp (8209)** | right-second-exit-ramp | The second exit ramp with an egress on<br>the right in the direction of flow at an<br>interchange
**right-entrance-ramp (8210)** | right-entrance-ramp | The (first) entrance ramp with an ingress<br>on the right in the direction of flow at an<br>interchange
**right-second-entrance-ramp (8211)** | right-second-entrance-ramp | The second entrance ramp with an<br>ingress on the right in the direction of flow<br>at an interchange 
**left-exit_ramp (8212)** | left-exit-ramp | The (first) exit ramp with an egress on the<br>left in the direction of flow at an<br>interchange
**left-second-exit-ramp (8213)** | left-second-exit-ramp | The second exit ramp with an egress on<br>the left in the direction of flow at an<br>interchange
**left-entrance-ramp (8214)** | left-entrance-ramp | The (first) entrance ramp with an ingress<br>on the left in the direction of flow at an<br>interchange
**left-second-entrance-ramp (8215)** | left-second-entrance-ramp | The second entrance ramp with an<br>ingress on the left in the direction of flow<br>at an interchange 
**escape-ramp (8216)** |  | Not used
**hard-shoulder (8217)** |  | Not used
**soft-shoulder (8218)** |  | Not used
**right-shoulder (8219)** |  | Not used
**left-shoulder (8220)** |  | Not used
**median (8221)** |  | Not used
**sidewalk (8222)** | sidewalk | The sidewalk or pedestrian way
**highways (8223)** |  | Not used
**right-hand-parallel-lanes (8224)** |  | Not used
**left-hand-parallel-lanes (8225)** |  | Not used
**connecting-lanes (8226)** |  | Not used
**express-lanes (8227)** |  | Not used
**local-lanes (8228)** |  | Not used
**toll-lanes (8229)** |  | Not used
**electronic-toll-lanes (8230)** |  | Note used
**toll-plaza (8231)** |  | Not used
**inspection-lane (8232)** |  | Not used
**hov-lanes (8233)** |  | Not used
**bus-lanes (8234)** |  | Not used
**carpool-lanes (8235)** |  | Not used
**truck-lanes (8236)** |  | Not used
**emergency-lanes (8237)** |  | Not used
**passing-lanes (8238)** |  | Not used
**climbing-lanes (8239)** |  | Not used
**slow-lane (8240)** |  | Not used
**service-road (8240)** |  | Not used
**service-road (8241)** |  | Not used
**cycle-lane (8242)** |  | Not used
**tracks (8243)** |  | Not used
**bridge (8244)** |  | Not used
**overpass (8245)** |  | Not used
**elevated-lanes (8246)** |  | Not used
**underpass (8247)** |  | Not used
**tunnel (8248)** |  | Not used
**all-exit-lanes (8249)** |  | Not used
**all-entry-lanes (8250)** |  | Not used
**either-shoulder (8251)** |  | Not used
**shoulder-work (8252)** |  | Not used
|  | bike-lane | Bike lane
|  | none | No lanes (open or closed)
|  | unknown | Unknown which lane is referenced
|  | alternating-flow-lane | Signal or flagger controls lanes flow
|  | left-shift-lanes | All open lanes shift to the left
|  | right-shift-lanes | All open lanes shift to the right

#### 2.6.2. closedShoulders
Note:  LaneRoadway is imported into TMDD from SAE 2540 (ITIS Standard)

LaneRoadway<br>Enumerations | Used for<br>closedShoulders | Description
--------------------------- | --------------------------- | -----------
**right-shoulder (8219)** | outside | The outer lane or the right most lane
**left-shoulder (8220)** | inside | The inner lane or the left most lane
|  | both | Both inside and outside shoulders
|  | none | Not needed if field is optional; this is the default<br>value
|  | unknown | Unknown if shoulder is open, closed or not existing

#### 2.6.3. roadDirection
Note:  Link-alignment is imported from TMDD

Link-alignment<br>enumerations | Used for<br>roadDirections | Description
------------------------------ | -------------------------- | -----------
**northbound (1)** | northbound | Road flow is in the northbound direction
**eastbound (2)** | eastbound | Road flow is in the eastbound direction
**southbound (3)** | southbound | Road flow is in the southbound direction
**westbound (4)** | westbound | Road flow is in the westbound direction
**inner-loop (5)** |  | Not used
**outer-loop (6)** |  | Not used

### 2.7. Metadata
This section describes the contents of a static file with information about the quality and context of data in the data feed. The files should be made available to data consumers through a link included in the WZDx header data elements (see Section 2.2).

The static file shall be encoded as a comma delimited text file.

**Filename:** WZ-Metadata.txt

#### Table 11. Metadata
Data Name | Description | Example
--------- | ----------- | -------
**issuingOrganization** | The name of the issuing organization.<br>This name should match the name in the<br>WorkZoneActivity record. | “Anyplace public works”
**Location-verify-method** | The method used to verify the accuracy<br>of the location information | “Survey accurate GPS equipment accurate to 0.1 cm”
**WZ-location-method** | The typical method used to locate the<br>begin and end of a work zone impact area.<br>Select the method that most closely<br>represents how begin and end locations<br>are assigned in the WZDX file.<ul><li>channel-device-method</li><li>sign-method</li><li>junction-method</li><li>unknown - when method for<br>locating the begin and end<br>locations of the work zone is not known</li><li>other- when the method for<br>locating the begin and end<br>locations do not closely match any of the alternatives. An explanation<br>should be included in the<br>metadata when this value is assigned</li></ul>See description in Section 5. | “channel-device-method”
**LRS-Type** | Describes the type of linear referencing<br>system used for the milepost<br>measurements | “Use of milemarkers posted the<br>roadways. These are registered<br>to a dynamic segmentation of<br>statewide LRS basemap.” 
**LRS-URL** | A URL where additional information on the<br>LRS information and transformation<br>information is stored | https://aaa.bbb.com/lrs
**Datafeed-frequency-update** | The frequency at which the data feed is<br>updated and made available through the<br>data feed. Format shall include value+<br>units such as<br>30s, 15m, or 24h where:<ul><li>s = seconds</li><li>m = minutes</li><li>h-hours</li></ul> | "30s"<br>"15m"<br>24h
'**Timestamp-Metadata-Update** | The time and date when this file was last<br>updated | 2016-04-12T00:01:00
**Contact-name** | The name of a contact responsible for the<br>data feed | Jo Help
**Contact-email** | The contact’s email address | jhelp@anyplacePW.com

## 3. CREATING THE SPECIFICATION
The WZDx-v1 data feed will be specified as an XML file. The file will contain one or more work zone activity entries. A work zone activity entry is defined as a description of work zone characteristics for a road segment along a single roadway in a single direction. The WorkZoneActivity data frame is composed of the common core data dictionary elements (Table 1) and depicted in Figure 1.

![Fig. 1](https://github.com/acosta-dani-bah/ITS-JPO-wzdx/blob/master/images/Figure%201.png)
#### Figure 1: Work Zone Activity Organization
Note: not all optional data elements are included in secondary levels of the hierarchy

### 3.1. Code Examples
The WZDx Activity frame code examples presented below were extracted from existing data feeds generated by several open data sites. These examples use the following sample work zone activity template:

#### Sample Work Zone Activity Template
Tag | Value
--- | -----
Identifier |
subidentifier |
StartDateTime<ul><li>startDateTime-est</li><li>startDateTime-ver</li></ul> |
EndDateTime<ul><li>endDateTime-est</li><li>endDateTime-ver</li></ul> |
BeginLocation<ul><li>roadName</li><li>roadNum</li><li>latitude</li><li>longitude</li><li>milepost</li></ul> |
EndLocation<ul><li>latitude</li><li>longitude</li><li>milepost</li></ul> |
wz-Status |
totalLanes |
openLanes |
closedLanes |
closedShoulders |
workersPresent |
RoadRestrictions*<ul><li>roadRestrictions</li></ul> |
description |
issuingOrganization |
timeStampEventCreation |
timeStampEventUpdate |

Three examples of WorkZoneActivity records are shown below. They were derived from on-line data feeds including:
* MassDOT Event Feed – Example 1
* iCone Event Feed – Example 2
* Caltrans Lane Closure Feed – Example 3 

#### 3.1.1. Example 1: MassDOT 
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

#### 3.1.2. Example 2: iCone
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

#### 3.1.3. Example 3: Caltrans
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

## 4. XML Schema and Examples of XML and JSON files
See files in separate attachment:
* [WXDX_XMLSample.xml](https://github.com/acosta-dani-bah/ITS-JPO-wzdx/blob/master/sample-files/WZDX_XMLSample.xml)
* [wxdx_JSONsample.json](https://github.com/acosta-dani-bah/ITS-JPO-wzdx/blob/master/sample-files/wxdx_JSONsample.json)
* [WZDx_draft01.xsd](https://github.com/acosta-dani-bah/ITS-JPO-wzdx/blob/master/sample-files/WZDx_final01.xsd)


## 5. WZ Location Method Description and Practices 
The metadata file will include one of five enumerated type values for WZ-location-method field.  

For this data element (WZ-location-method), select the value below that most closely represents how begin and end locations are assigned in the WZDX file.

* **channel-device-method** (see section 5.1) – *this is the preferred method*
* **sign-method** (see section 5.2)
* **junction-method** (see section 5.3)
* **unknown** – when method for locating the begin and end locations of the work zone is not known
* **other** – when the method for locating the begin and end locations do not closely match any of the alternatives. An explanation should be included in the metadata when this value is assigned.

### 5.1. channel-device-method (Preferred Method)
Location of first and last channeling device (e.g., cone or barrier) that is part of a “travel impact effect” (taper) or designation of a work zone transition area. For complex work zones with multiple activities, begin and end locations are the first channeling device for first activity up to the last channeling device of the last activity.

#### Simple Scenario
![Fig. 2](https://github.com/acosta-dani-bah/ITS-JPO-wzdx/blob/master/images/Figure%202.png)
 
#### Complex Scenario
This example shows three work zone activity areas that are part of a work zone project. Each activity area is treated as an independent work zone activity record, with its own begin and end location where each lane taper begins and ends. 

Note: with the data element “subidentifier”, the “owner” can link the three work activities together.

![Fig. 3](https://github.com/acosta-dani-bah/ITS-JPO-wzdx/blob/master/images/Figure%203.png)

### 5.2. sign-method
Location of first and last work zone-related signs. This may be different from the channelization location. For complex work zones, begin would be the first sign before the first activity and end would be the last sign following the last activity.

![Fig. 4](https://github.com/acosta-dani-bah/ITS-JPO-wzdx/blob/master/images/Figure%204.png)

### 5.3. junction-method
Location of a Junction (e.g., a cross street or exit/entrance ramp) before and after a work zone. Note that this is similar to the approach used by Waze to designate a road closure event.

#### Aterial Scenario
![Fig. 5](https://github.com/acosta-dani-bah/ITS-JPO-wzdx/blob/master/images/Figure%205.png)

#### Highway Scenario
![Fig. 6](https://github.com/acosta-dani-bah/ITS-JPO-wzdx/blob/master/images/Figure%206.png)
