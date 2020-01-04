# Work Zone Data Exchange (WZDx)
Last updated 12/31/2019 - WZDx specification v2.0 

## What is the WZDx Specification?
The Work Zone Data Exchange (WZDx) Specification enables infrastructure owners and operators (IOOs) to make harmonized work zone data available for third party use. The intent is to make travel on public roads safer and more efficient through ubiquitous access to data on work zone activity. Specifically, the project aims to get data on work zones in
to vehicles to help automated driving systems (ADS) and human drivers navigate more safely. 

## Why is WZDx being developed?
Improving access to work zone data is one of the top needs identified through the US Department of Transportation (USDOT) [Data for Automated Vehicle Integration (DAVI)](https://www.transportation.gov/av/data) effort. 

Up-to-date information about dynamic conditions occurring on roads – such as construction events – can help ADS and humans navigate safely and efficiently. Many IOOs maintain data on work zone activity. However, a lack of common data standards and convening mechanisms makes it difficult and costly for third parties – including original equipment manufacturers (OEMs) and navigation applications – to access and use these data across various jurisdictions. 

Thus, inspired by [GTFS](https://developers.google.com/transit/gtfs/reference/), USDOT launched WZDx to jumpstart the voluntary adoption of a basic work zone data specification through collaboration with data producers and data users. Longer term, the goal is to enable collaborative maintenance and expansion of the specification to meet the emerging needs of ADS.

## Who is involved in developing WZDx?
The [Federal Highway Administration (FHWA)](https://www.fhwa.dot.gov/) and [Intelligent Transportation Systems Joint Program Office (ITS JPO)](https://www.its.dot.gov/) co-led the early stages of the WZDx project and remain actively involved along with the [Bureau of Transportation Statistics (BTS)](https://www.bts.gov/), [Federal Motor Carrier Safety Administration (FMCSA)](https://www.fmcsa.dot.gov/), and others in the USDOT. Several data producers and data users voluntarily developed v1.1 of the specification in collaboration with USDOT, and have started to set up data feeds based on it. The Maricopa County Department of Transportation data feed can be found [here](https://api.mcdot-its.com/WZDx/Activity/Get), and the Iowa Department of Transportation data feed is located [here](https://data.iowadot.gov/datasets/iowa-work-zone-data-exchange-wzdx).

Going forward, the [Work Zone Data Working Group (WZDWG)](https://github.com/usdot-jpo-ode/jpo-wzdx/wiki), established under the Federal Geographic Data Committee (FGDC) Transportation Subcommittee (TSC) will maintain the specification with the goal of publishing incremental updates to refine the features, attributes, and vocabulary needed to model work zone activity data. 

## How can I participate?
The WZDWG welcomes feedback and comments on the v2 specification. Comments can be made by posting a GitHub Issue, while suggested changes can be made using a pull request. Alternatively, issues or suggested changes can be emailed to [avdx@dot.gov](mailto:avdx@dot.gov?subject=Submission%20of%20WZDx%20Specification%20Issue&Body=Issue%20name:%20“[Clarification%20/%20New%20feature%20/%20Question%5d%20—%20Summarize%20topic”%20%0d%23%23%20Summary%0dA%20concise%20description%20of%20the%20problem,%20feature%20request%20(proposed%20change),%20or%20question.%20%0d%23%23%20Motivation%0dFor%20a%20clarification…%20Describe%20the%20ambiguity%20or%20edge%20case(s)%20in%20further%20detail,%20and%20the%20issues%20and%20problems%20this%20poses.%20%0dFor%20a%20new%20feature…%20Describe%20the%20use%20case%20that%20requires%20this%20data%20spec%20feature.%20%0dFor%20a%20question…%20Describe%20the%20deliberation%20that%20led%20to%20the%20question%20within%20your%20project%20or%20organization.%20%0d%23%23%20Proposed%20changes%0d%20In%20the%20case%20of%20a%20proposed%20change,%20provide%20one%20or%20a%20few%20options%20for%20moving%20forward.).

The WZDx v2 specification is now available for IOOs to stand up data feeds. Once these data feeds are available, OEMs, navigation applications, and others can use the data. Below are steps for IOOs to get started. 

1. Continue reading about the [Purpose and Scope](#purpose-and-scope)
2. Learn about using GitHub as a [tool for collaboration and support](/create-feed/README.md#collaborate-via-github).
3. Use [Feed Content](/feed-content) to understand the data components of the spec.
4. [Create your own feed](/create-feed) using the example feeds and learn about the supported data files.
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

## Table of Contents (V2.0)
- [Introduction](#introduction)
    - [Background](#background)
    - [Document Organization](#document-organization)
- [Creating the Specification](/create-feed)
    - [Example Feed GeoJSON Files](/create-feed/examples)
- [Feed Content](/feed-content)
    - [Data Tables](/feed-content/data-tables)
        - [Road Event Feed Info Table](/feed-content/data-tables/road_event_feed_info.md)
        - [Road Event Table](/feed-content/data-tables/road_events.md)
        - [Types of Work Table](/feed-content/data-tables/types_of_work.md)
        - [Lanes Table](/feed-content/data-tables/lanes.md)
        - [Lane Restrictions Table](/feed-content/data-tables/lane_restrictions.md)
        - [Metadata Table](/feed-content/data-tables/metadata.md)
    - [Enumerated Types](/feed-content/enumerated-types)
        - [Enumerated Types Derived from ITS Standards](/feed-content/enumerated-types/derived-from-its-standards)
- [Images use throughout the specification](/images)

## Introduction
### Background
Up-to-date information about dynamic conditions occurring on roads – such as construction events – can help Automated Vehicles (AVs) navigate safely and efficiently. Many infrastructure owners and operators (IOOs) maintain data on work zone activity. However, a lack of common data standards and convening mechanisms makes it difficult and costly for third parties – including original equipment manufacturers (OEMs) and navigation applications – to access and use these data across various jurisdictions. 
In support of AV integration into our nation’s transportation system, the Federal Highway Administration (FHWA) and USDOT’s Intelligent Transportation Systems Joint Program Office (ITS JPO) are co-leading the Work Zone Data Exchange (WZDx) project. The effort seeks to jumpstart the voluntary adoption of a basic work zone data specification through collaboration with data producers and data users. WZDx will enable collaborative maintenance and expansion of the specification as operational and technological enhancements become available.
Upon finalization of the first iteration of work zone data specification, data producers will utilize the specification to make their respective active work zone data feeds available for use by non-government users. These users will then use the harmonized data in a meaningful way. These two outcomes will result in the establishment of the voluntary date exchange of work zone data (i.e., a minimum viable product (MVP) of harmonized work zone data). This approach is intended to be repeatable leading to the accelerated harmonization of local data.
Many data producers and users (i.e., the [WZDx Working Group](https://github.com/usdot-jpo-ode/jpo-wzdx/wiki)) voluntarily committed to participating and have been actively involved in the development of the v2 specification.