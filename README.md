### Work Zone Data Exchange (WZDx)

# What is WZDx Specification?
The Work Zone Data Exchange (WZDx) Specification seeks to define a universal langauge to enable a critical mass of infrastructure owners and operators (IOOs) to collaboratively and voluntarily make harmonized work zone data available for third party use. This project is part of a larger effort by USDOT to develop a common framework to facilitate mutually beneficial voluntary data exhanges to support and accelerate the safe, efficient, and accessible integration of Autonomous Vehicles (AVs) into the transportation system.


## Introduction
### Background
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

