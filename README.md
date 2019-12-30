### Work Zone Data Exchange (WZDx)

# What is the WZDx Specification?
The Work Zone Data Exchange (WZDx) Specification enables infrastructure owners and operators (IOOs) to make harmonized work zone data available for third party use. The intent is to make travel on public roads safer and more efficient through ubiquitous access to data on work zone activity. Specifically, the project aims to get data on work zones in
to vehicles to help automated driving systems (ADS) and human drivers navigate more safely. 

# Why is WZDx being developed?
Improving access to work zone data is one of the top needs identified through the US Department of Transportation (USDOT) [Data for Automated Vehicle Integration (DAVI)](https://www.transportation.gov/av/data) effort. 

Up-to-date information about dynamic conditions occurring on roads – such as construction events – can help ADS and humans navigate safely and efficiently. Many IOOs maintain data on work zone activity. However, a lack of common data standards and convening mechanisms makes it difficult and costly for third parties – including original equipment manufacturers (OEMs) and navigation applications – to access and use these data across various jurisdictions. 

Thus, inspired by [GTFS](https://developers.google.com/transit/gtfs/reference/), USDOT launched WZDx to jumpstart the voluntary adoption of a basic work zone data specification through collaboration with data producers and data users. Longer term, the goal is to enable collaborative maintenance and expansion of the specification to meet the emerging needs of ADS.

## Who is involved in developing WZDx?
The [Federal Highway Administration (FHWA)](https://www.fhwa.dot.gov/) and [Intelligent Transportation Systems Joint Program Office (ITS JPO)](https://www.its.dot.gov/) co-led the early stages of the WZDx project and remain actively involved along with the [Bureau of Transportation Statistics (BTS)](https://www.bts.gov/), [Federal Motor Carrier Safety Administration (FMCSA)](https://www.fmcsa.dot.gov/), and others in the USDOT. Several data producers and data users voluntarily developed v1.1 of the specification in collaboration with USDOT, and have started to set up data feeds based on it. The Maricopa County Department of Transportation data feed can be found [here](https://api.mcdot-its.com/WZDx/Activity/Get), and the Iowa Department of Transportation data feed is located [here](https://data.iowadot.gov/datasets/iowa-work-zone-data-exchange-wzdx).

Going forward, the [Work Zone Data Working Group (WZDWG)](https://github.com/usdot-jpo-ode/jpo-wzdx/wiki ), established under the Federal Geographic Data Committee (FGDC) Transportation Subcommittee (TSC) will maintain the specification with the goal of publishing incremental updates to refine the features, attributes, and vocabulary needed to model work zone activity data. Currently, the WZDWG’s priority is to update WZDx v1.1, developing version 2.0 of the specification based on lessons learned from v1.1 and new insights from the user community. 

## How can I participate?
The WZDWG welcomes feedback and comments on the v2 specification. Comments can be made by posting a GitHub Issue, while suggested changes can be made using a pull request. Alternatively, issues or suggested changes can be emailed to [avdx@dot.gov](mailto:avdx@dot.gov?subject=Submission%20of%20WZDx%20Specification%20Issue&Body=Issue%20name:%20“[Clarification%20/%20New%20feature%20/%20Question%5d%20—%20Summarize%20topic”%20%0d%23%23%20Summary%0dA%20concise%20description%20of%20the%20problem,%20feature%20request%20(proposed%20change),%20or%20question.%20%0d%23%23%20Motivation%0dFor%20a%20clarification…%20Describe%20the%20ambiguity%20or%20edge%20case(s)%20in%20further%20detail,%20and%20the%20issues%20and%20problems%20this%20poses.%20%0dFor%20a%20new%20feature…%20Describe%20the%20use%20case%20that%20requires%20this%20data%20spec%20feature.%20%0dFor%20a%20question…%20Describe%20the%20deliberation%20that%20led%20to%20the%20question%20within%20your%20project%20or%20organization.%20%0d%23%23%20Proposed%20changes%0d%20In%20the%20case%20of%20a%20proposed%20change,%20provide%20one%20or%20a%20few%20options%20for%20moving%20forward.).

The WZDx v2 specification is now available for IOOs to stand up data feeds. Once these data feeds are available, OEMs, navigation applications, and others can use the data. Below are steps for IOOs to get started. 

1. Continue reading about the [Purpose and Scope](#purpose-and-scope)
2. Learn about using GitHub as a [tool for collaboration and support](/create-feed/README.md#collaborate-via-github).
3. Use the [Data Tables](/data-tables/README.md) to understand the data components of the spec.
4. [Create your own feed](/create-feed/README.md) using the example feeds and learn about the supported data files.
5. Test your feed (coming soon).
6. Publish your feed, and tell us about via avdx@dot.gov. 

## How can I get help with implementation? 

This project will be updated with resources to help with implementation; in the meantime, please make a GitHub issue if you need help implementing the specification or have any questions.

The Federal Highway Administration is leading efforts, via the [Work Zone Data Initiative](https://collaboration.fhwa.dot.gov/wzmp/wzdi/Forms/AllItems.aspx), to develop a standard approach for collecting, organizing, and sharing data on the “when”, “where,” and “how” of work zone deployment.  As part of this effort, key documents have been developed and made publicly available:

- [Framework](https://collaboration.fhwa.dot.gov/wzmp/Framework/Forms/AllItems.aspx) provides a conceptual architecture for work zone data systems for collecting, storing, disseminating, managing, maintaining and archiving work zone activity data.
- [Data Dictionary](https://collaboration.fhwa.dot.gov/wzmp/Data%20DictionaryDocuments/Forms/AllItems.aspx) provides digital descriptions of work zone activities that enable and support transportation agencies and third party providers to describe and communicate work zone-related information to agency, private sector, and public users timely and seamlessly across multiple jurisdictions and regions.

## Purpose and Scope

This specification describes data concepts, their meaning, and their enumeration (as applicable) in order to standardize a data feed specification to be used to publish work zone information. This document defines the content of the Work Zone Data Specification by means of an Entity Relationship Diagram (ERD). The ERD organizes data into distinct entities (also known as tables or objects), defines the content (also known as fields or properties) of each entity, and documents how those entities, tables or objects are related (relationships). Also included, when applicable, are enumeration tables which define the values to which field content is restricted.

For purposes of this effort, “road_events” is defined as data elements needed for most (if not all) possible work zone data use cases. The data specification includes data elements that data producers (i.e., state transportation agencies and other IOOs) are already producing (“required”) as well as those that may not currently be produced (“optional”). The "road_events" table is designed to be extensible, meaning both required and optional data elements can be added to support specific use cases now and in the future.

The WZDx data specification will be incrementally enhanced to evolve into a data standard that supports advanced warnings to automated vehicles in and around work zones. 

## TABLE OF CONTENTS
- [Introduction](#introduction)
    - [Background](#background)
    - [Document Organization](#document-organization)
- [Data Tables](/data-tables)
    - [Entity Relationship Diagram](/data-tables/road_event_erd.png)
    - Table Definitions
        - [Road Event Feed Info Table](/data-tables/road_event_feed_info.md)
        - [Road Event Table](/data-tables/road_events.md)
        - [Types of Work Table](/data-table/types_of_work.md)
        - [Lanes Table](/data-tables/lanes.md)
        - [Lane Restrictions Table](/data-tables/lane_restriction.md)
    - [Enumerated Fields](/data-tables/enumerated-fields.md) 
        - [Enumerated Field Definitions](/data-tables/enumerated-field-definitions.md) 
        - [Enumerated Field Definitions Derived from ITS Standards](/data-tables/enumerated-field-definitions-derived-from-its-standards.md)
- [Creating the Specification](/create-feed)
    - [Code Examples](/create-feed/README.md#code-examples)
       - [Example 1 MassDOT](/create-feed/massdot.md)  
       - [Example 2 iCone](/create-feed/icone.md)
       - [Example 3 Caltrans](/create-feed/caltrans.md)
- [XML Schema and Examples of XML and JSON files](sample-files/README.md#xml-schema-and-examples-of-xml-and-json-files)
- [WZ Location Method Description and Practices](/sample-files/README.md#wz-location-method-description-and-practices)

## Introduction
### Background
Up-to-date information about dynamic conditions occurring on roads – such as construction events – can help Automated Vehicles (AVs) navigate safely and efficiently. Many infrastructure owners and operators (IOOs) maintain data on work zone activity. However, a lack of common data standards and convening mechanisms makes it difficult and costly for third parties – including original equipment manufacturers (OEMs) and navigation applications – to access and use these data across various jurisdictions. 
In support of AV integration into our nation’s transportation system, the Federal Highway Administration (FHWA) and USDOT’s Intelligent Transportation Systems Joint Program Office (ITS JPO) are co-leading the Work Zone Data Exchange (WZDx) project. The effort seeks to jumpstart the voluntary adoption of a basic work zone data specification through collaboration with data producers and data users. WZDx will enable collaborative maintenance and expansion of the specification as operational and technological enhancements become available.
Upon finalization of the first iteration of work zone data specification, data producers will utilize the specification to make their respective active work zone data feeds available for use by non-government users. These users will then use the harmonized data in a meaningful way. These two outcomes will result in the establishment of the voluntary date exchange of work zone data (i.e., a minimum viable product (MVP) of harmonized work zone data). This approach is intended to be repeatable leading to the accelerated harmonization of local data.
Many data producers and users (i.e., the [WZDx Working Group](https://github.com/usdot-jpo-ode/jpo-wzdx/wiki)) voluntarily committed to participating and have been actively involved in the development of the v2 specification. 

### Document Organization
The remainder of this specification is organized into the following sections:

**Data Tables**
- **road_events** - This table contains information about work zone events. The information describes where, when, and what activity is taking place along a road segment. This table is related to the road_event_feed_info table by the foreign key feed_info_id. For every record in the road_event_feed_info table there must exist one or more road_event records.
- **road_events_feed_info** - This table contains information about road event datasets. For each record in the road_event_feed_info table there must exist one or more related records in the road_events table. The feed_info_id field acts as the foreign key in the road_event table.
- **types_of_work** - This is an optional table that provides a string description of the type(s) of work being done in the road event (if applicable), as well as an indiciation of if the work type will result in an architectural change to the roadway.
- **lane** - This is an optional table that identifies and describes individual lanes within the road events. This table is related to the road_events table by the foreign key road_event_id.  For every record in the road_event table there may exist one or more record(s) in the lanes table.
- **lane_restrictions** - This is an optional table that describes individual lane restrictions. This table is related to the lanes table by the foreign key lane_id. For every record in the lanes table there may exist one or more record(s) in the lane_restrictions table.
- **Enumerated Types** - This section includes a table of enumerated data elements.
- **Enumerated Type Definitions** - This section includes definitions for enumerated types including work zone status, status of Time and Location, and Road Restrictions. 
- **Metadata** - This section describes the contents of a static file with information about the quality and context of data in the data feed. 

**Creating the Specification**
- This section provides a sample of how agencies will complete a Work Zone Activity record.

**XML Schema and Samples of XML and JSON files**
- This section includes the validated XML scheme and examples of XML and JSON files.
