# Work Zone Data Exchange (WZDx) v2.0 - Specification Reference Document 

Updated 1/21/2020


## TABLE OF CONTENTS 
- [**Introduction**](#introduction)
    - [Background](#background)
    - [Purpose and Scope](#purpose-and-scope)
    - [Document Organization](#document-organization)
- [**Feed Content**](#feed-content)
    - [Entity Relationship Diagram](#entity-relationship-diagram)


## Introduction
### Background 
Up-to-date information about dynamic conditions occurring on roads – such as construction events – can help Automated Vehicles (AVs) navigate safely and efficiently. Many infrastructure owners and operators (IOOs) maintain data on work zone activity. However, a lack of common data standards and convening mechanisms makes it difficult and costly for third parties – including original equipment manufacturers (OEMs) and navigation applications – to access and use these data across various jurisdictions. 

The Work Zone Data Exchange (WZDx) Specification enables infrastructure owners and operators (IOOs) to make harmonized work zone data available for third party use. The intent is to make travel on public roads safer and more efficient through ubiquitous access to data on work zone activity. Specifically, the project aims to get data on work zones to vehicles to help automated driving systems (ADS) and human drivers navigate more safely.

Improving access to work zone data is one of the top needs identified through the US Department of Transportation (USDOT) [Data for Automated Vehicle Integration (DAVI)](https://www.transportation.gov/av/data) effort. 

In support of AV integration into our nation’s transportation system, the [Federal Highway Administration (FHWA)](https://www.fhwa.dot.gov/) and [Intelligent Transportation Systems Joint Program Office (ITS JPO)](https://www.its.dot.gov/) co-led the early stages of the WZDx project and remain actively involved along with the [Bureau of Transportation Statistics (BTS)](https://www.bts.gov/), [Federal Motor Carrier Safety Administration (FMCSA)](https://www.fmcsa.dot.gov/), and others in the USDOT. The effort seeks to jumpstart the voluntary adoption of a basic work zone data specification through collaboration with data producers and data users. WZDx will enable collaborative maintenance and expansion of the specification as operational and technological enhancements become available.

The [Work Zone Data Working Group (WZDWG)](https://github.com/usdot-jpo-ode/jpo-wzdx/wiki ), established under the Federal Geographic Data Committee (FGDC) Transportation Subcommittee (TSC) will maintain the specification with the goal of publishing incremental updates to refine the features, attributes, and vocabulary needed to model work zone activity data. Many data producers and users (i.e., the [WZDx Working Group](https://github.com/usdot-jpo-ode/jpo-wzdx/wiki)) voluntarily committed to participating and have been actively involved in the development of the v2.0 specification.  

Upon finalization of the second iteration of work zone data specification, data producers will utilize the specification to make their respective active work zone data feeds available for use by non-government users. These users will then use the harmonized data in a meaningful way. These two outcomes will result in the establishment of the voluntary date exchange of work zone data (i.e., a minimum viable product (MVP) of harmonized work zone data). This approach is intended to be repeatable leading to the accelerated harmonization of local data.

### Purpose and Scope
This specification describes data concepts, their meaning, and their enumeration (as applicable) in order to standardize a data feed specification to be used to publish work zone information. This document defines the content of the Work Zone Data Specification by means of an Entity Relationship Diagram (ERD). The ERD organizes data into distinct entities (also known as tables or objects), defines the content (also known as fields or properties) of each entity, and documents how those entities, tables or objects are related (relationships). Also included, when applicable, are enumeration tables which define the values to which field content is restricted.

For purposes of this effort, “road_events” is defined as data elements needed for most (if not all) possible work zone data use cases. The data specification includes data elements that data producers (i.e., state transportation agencies and other IOOs) are already producing (“required”) as well as those that may not currently be produced (“optional”). The "road_events" table is designed to be extensible, meaning both required and optional data elements can be added to support specific use cases now and in the future.

The WZDx data specification will be incrementally enhanced to evolve into a data standard that supports advanced warnings to automated vehicles in and around work zones. 

### Document Organization
The remainder of this document is organized into the following sections:

- **Feed Content** - details the data content of the WZDx specification, including data tables, field names and types, enumerations.
- **Create Feed** - contains information regarding creation of a WZDx feed, such as the feed format, example feed outputs, and validation tools.


## Feed Content 
The WZDx specification uses a relational model to manage data structure. It defines distinct entities (called tables or objects) which contain the data content (called fields or properties) of each entity. The relationship between these entities describes how the data within each is related and how the feed should be built. These entities are found in the data tables below. 

Some fields within a data table are restricted to a defined enumeration of values. These enumerations are found in the enumerated types table.

### Entity Relationship Diagram
The Entity Relationship Diagram (ERD) below indicates the relationship between the data tables. *Required* fields are represented in bold.

![Entity Relationship Diagram](/images/road_event_erd.png)
