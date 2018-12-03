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
•	Pennsylvania Turnpike Authority (also representing the Smart Belt Coalition) | •	HERE
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


