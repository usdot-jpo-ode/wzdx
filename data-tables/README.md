# **Data Tables**
**Revised September 15, 2018**.

This document explains the types of files and the data elements, data frames and enumerated types that make up a Work Zone data feed. The [Common Core Data Table (Table 1)](https://github.com/usdot-jpo-ode/jpo-wzdx/blob/master/data-tables/common-core-dictionary.md), and subsequent tables in this document, include the following columns:
- **Data Name** - name of the data concept (either a data element or data frame) 
- **Data Type** - identification of the data concept as a data element or data frame and whether it is an enumerated type
- **Data Description** - description of the data concept
- **Conformance** - description of the requirement for including data in the data feed file. There are three categories of conformance:
    - *Required* - must be included
    - *Optional* - may be included
    - *Conditional* - associated with two or more data concepts; requires that at least one of the concepts be included in the data feed file
- **Notes** - comments, guidance, or notes for future consideration

### Table of Contents
- [**Common Core Data Dictionary**](https://github.com/usdot-jpo-ode/jpo-wzdx/blob/master/data-tables/common-core-dictionary.md) 
- [**WZDx Header Data**](https://github.com/usdot-jpo-ode/jpo-wzdx/blob/master/data-tables/wzdx-header-data.md)
- [**Data Frames**](https://github.com/usdot-jpo-ode/jpo-wzdx/blob/master/data-tables/data-frames.md)
    - [StartDateTime](https://github.com/usdot-jpo-ode/jpo-wzdx/blob/master/data-tables/data-frames.md#startdatetime)
    - [EndDateTime](https://github.com/usdot-jpo-ode/jpo-wzdx/blob/master/data-tables/data-frames.md#enddatetime)
    - [BeginLocation](https://github.com/usdot-jpo-ode/jpo-wzdx/blob/master/data-tables/data-frames.md#beginlocation)
    - [EndLocation](https://github.com/usdot-jpo-ode/jpo-wzdx/blob/master/data-tables/data-frames.md#endlocation)
    - [RoadRestrictions](https://github.com/usdot-jpo-ode/jpo-wzdx/blob/master/data-tables/data-frames.md#RoadRestrictions)
- [**Enumerated Types**](https://github.com/usdot-jpo-ode/jpo-wzdx/blob/master/data-tables/enumerated-types.md) 
- [**Enumerated Type Definitions**](https://github.com/usdot-jpo-ode/jpo-wzdx/blob/master/data-tables/enumerated-type-definitions.md) 
- [**Enumerated Type Definitions Derived from ITS Standards**](https://github.com/usdot-jpo-ode/jpo-wzdx/blob/master/data-tables/enumerated-value-definitions-derived-from-its-standards.md)
    - [openLanes and closedLanes](https://github.com/usdot-jpo-ode/jpo-wzdx/blob/master/data-tables/enumerated-value-definitions-derived-from-its-standards.md#openlanes-and-closedlanes)
    - [closedShoulders](https://github.com/usdot-jpo-ode/jpo-wzdx/blob/master/data-tables/enumerated-value-definitions-derived-from-its-standards.md#closedshoulders)
    - [roadDirection](https://github.com/usdot-jpo-ode/jpo-wzdx/blob/master/data-tables/enumerated-value-definitions-derived-from-its-standards.md#roaddirection)
- [**Metadata**](https://github.com/usdot-jpo-ode/jpo-wzdx/blob/master/data-tables/metadata.md) 

