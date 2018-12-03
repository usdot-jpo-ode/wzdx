### Work Zone Data Exchange (WZDx)

# WZDx v1.1 – Common Core Data Specification Reference Document

Updated 9/15/2018

## TABLE OF CONTNETS
1. Introduction
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
- Figure 1: Work Xone Activity Organization

## 1. Introduction
### i. Background
Up-to-date information about dynamic conditions occurring on roads – such as construction events – can help Automated Vehicles (AVs) navigate safely and efficiently. Many infrastructure owners and operators (IOOs) maintain data on work zone activity. However, a lack of common data standards and convening mechanisms makes it difficult and costly for third parties – including original equipment manufacturers (OEMs) and navigation applications – to access and use these data across various jurisdictions. 
In support of AV integration into our nation’s transportation system, the Federal Highway Administration (FHWA) and USDOT’s Intelligent Transportation Systems Joint Program Office (ITS JPO) are co-leading the Work Zone Data Exchange (WZDx) project. The effort seeks to jumpstart the voluntary adoption of a basic work zone data specification through collaboration with data producers and data users. WZDx will enable collaborative maintenance and expansion of the specification as operational and technological enhancements become available.
Upon finalization of the first iteration of work zone data specification, data producers will utilize the specification to make their respective active work zone data feeds available for use by non-government users. These users will then use the harmonized data in a meaningful way. These two outcomes will result in the establishment of the voluntary date exchange of work zone data (i.e., a minimum viable product (MVP) of harmonized work zone data). This approach is intended to be repeatable leading to the accelerated harmonization of local data.
The following data producers and users (i.e., the WZDx Working Group) voluntarily committed to participating and have been actively involved in the development of the standardized data specification:

Data Produces | Data Users
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

## DATA TABLES
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

### 2.3 Data Frames
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

#### BeginLocation
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

#### EndLocation
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

### 2.4 Enumerated Types
#### Table 7. Enumerated Types Table
Data Element | Used by | Allowed Values | Notes | Source
------------ | ------- | -------------- | ----- | ------
**wz-Status** | WorkZoneActivity | See Enumerated Type<br>Definitions (Table 8) |  | Source
**roadDirection** | BeginLocation | <ul><li>northbound</li><li>eastbound</li><li>eastbound</li><li>southbound</li><li>westbound</li></ul> |  | Adapted from<br>TMDD link<br>
**roadRestriction** | RoadRestrictions | <ul><li>no-trucks</li><li>travel-peak-hours-only</li><li>hov-3</li><li>hov-2</li><li>no-parking</li><li>bike-lane</li><li>ramp</li><li>towing-prohibited</li><li>permitted-oversize-loads<br>-prohibited (this applies<br>to annual oversize load<br>permits)</li><li>reduced-width</li><li>reduced-height</li><li>reduced-length</li><li>reduced-weight</li><ul><li>axle-road</li><li>gross-weight-limit</li></ul> | Include one<br>or more flags as needed | See<br>definitions<br>below
    
#### Table 7. Enumerated Types Table
Data Element | Used by | Allowed Values | Notes | Source
------------ | ------- | -------------- | ----- | ------
**wz-Status** | WorkZoneActivity | See Enumerated Type<br>Definitions (Table 8) 
**roadDirection** | BeginLocation | <ul><li>northbound</li><li>eastbound</li><li>eastbound</li><li>southbound</li><li>westbound</li></ul> |  | Adapted from<br>TMDD link-<br>alignment 
**laneType** | openLanes,<br>closedLanes | <ul><li>all</li><li>left-lane</li><li>right-lane</li><li>left-2-lanes</li><li>left-3-lanes</li>right-2-lanes</li><li>right-3-lanes</li><li>center</li><li>middle-lane</li><li>right-turning-lane</li><li>left-turning-lane</li><li>right-exit-lane</li><li>left-exit-lane</ul> |  | Adapted from<br>TMDD<br>LaneRoadway
**fff**









**roadRestriction** | RoadRestrictions | <ul><li>no-trucks</li><li>travel-peak-hours-only</li><li>hov-3</li><li>hov-2</li><li>no-parking</li><li>bike-lane</li><li>ramp</li><li>towing-prohibited</li><li>permitted-oversize-loads<br>-prohibited (this applies<br>to annual oversize load<br>permits)</li><li>reduced-width</li><li>reduced-height</li><li>reduced-length</li><li>reduced-weight</li><ul><li>axle-road</li><li>gross-weight-limit</li></ul> | Include one<br>or more flags as needed | See<br>definitions<br>below
    
    
  

    
    
        




