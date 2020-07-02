# Summary 

This repository contains the Work Zone Data Exchange (WZDx) Specification. Last updated 6/26/2020 - WZDx Specification v2.0 

The WZDx Specification repository contains two main subdirectories, each containing their own README file with additional information about the purpose and files within:

1. [`create-feed`](/create-feed), which contains information regarding the creation of a WZDx feed, e.g., feed format, example feed outputs, JSON schemas, and validation tools.
2. [`feed-content`](/feed-content), which details the data content of the WZDx specification, including data tables, field names and types, enumerations.

A third directory- [`images`](/images) - contains the images that are referenced throughout the repository.

### Contents
- [**Creating the WZDx Feed**](/create-feed)
    - [**Example Feed GeoJSON Files**](/create-feed/examples)   
        - [LineString Example](/create-feed/examples/linestring_example.geojson)
        - [MultiPoint Example](/create-feed/examples/multipoint_example.geojson)
    - [**JSON Schemas**](/create-feed/schemas)
        - [WZDx v2.0 Feed](/create-feed/schemas/wzdx_v2.0_feed.json)
- [**Feed Content**](/feed-content)
    - [**Data Tables**](/feed-content/data-tables)
        - [Road Event Feed Info](/feed-content/data-tables/road_event_feed_info.md)
        - [Road Events](/feed-content/data-tables/road_events.md)
        - [Types of Work](/feed-content/data-tables/types_of_work.md)
        - [Lanes](/feed-content/data-tables/lanes.md)
        - [Lane Restrictions](/feed-content/data-tables/lane_restrictions.md)
        - [Metadata](/feed-content/data-tables/metadata.md)
    - [**Enumerated Types**](/feed-content/enumerated-types)
        - [Event Status](/feed-content/enumerated-types/event_status.md)
        - [Geometry Type](/feed-content/enumerated-types/geometry_type.md)
        - [Lane Edge Reference](/feed-content/enumerated-types/lane_edge_reference.md)
        - [Lane Status](/feed-content/enumerated-types/lane_status.md)
        - [Road Restriction](/feed-content/enumerated-types/road_restriction.md)
        - [Spatial Verification](/feed-content/enumerated-types/spatial_verification.md)
        - [Time Verification](/feed-content/enumerated-types/time_verification.md)
        - [Vehicle Impact](/feed-content/enumerated-types/vehicle_impact.md)
        - [Work Type Name](/feed-content/enumerated-types/work_type_name.md)
        - [**Enumerated Types Derived from ITS Standards**](/feed-content/enumerated-types/derived-from-its-standards)
            - [Direction](/feed-content/enumerated-types/derived-from-its-standards/direction)
            - [Lane Type](/feed-content/enumerated-types/derived-from-its-standards/lane_type)
- [**Images Used throughout the Specification**](/images)
  - [Entity Relationship Diagram](/images/entity_relationship_diagram.png)
  

# README Outline
* Project Description
* Contact Information
* Release Notes
* Getting Started
* Contributions
* Versioning
* License

# Project Description

**What is the WZDx Specification?**
The Work Zone Data Exchange (WZDx) Specification enables infrastructure owners and operators (IOOs) to make harmonized work zone data available for third party use. The intent is to make travel on public roads safer and more efficient through ubiquitous access to data on work zone activity. Specifically, the project aims to get data on work zones to vehicles to help automated driving systems (ADS) and human drivers navigate more safely. 

**Why is WZDx being developed?**
Improving access to work zone data is one of the top needs identified through the US Department of Transportation (USDOT) [Data for Automated Vehicle Integration (DAVI)](https://www.transportation.gov/av/data) effort. 

Up-to-date information about dynamic conditions occurring on roads – such as construction events – can help ADS and humans navigate safely and efficiently. Many IOOs maintain data on work zone activity. However, a lack of common data standards and convening mechanisms makes it difficult and costly for third parties – including original equipment manufacturers (OEMs) and navigation applications – to access and use these data across various jurisdictions. 

Inspired by [GTFS](https://developers.google.com/transit/gtfs/reference/), USDOT launched WZDx to jumpstart the voluntary adoption of a basic work zone data specification through collaboration with data producers and data users. Longer-term, the goal is to enable collaborative maintenance and expansion of the specification to meet the emerging needs of ADS.

**Who is involved in developing WZDx?**
The [Federal Highway Administration (FHWA)](https://www.fhwa.dot.gov/) and [Intelligent Transportation Systems Joint Program Office (ITS JPO)](https://www.its.dot.gov/) co-led the early stages of the WZDx project and remain actively involved along with the [Bureau of Transportation Statistics (BTS)](https://www.bts.gov/), [Federal Motor Carrier Safety Administration (FMCSA)](https://www.fmcsa.dot.gov/), and others in the USDOT. Several data producers and data users voluntarily developed v1.1 of the specification in collaboration with USDOT, and have started to set up data feeds based on it: 
- The Texas Department of Transportation data feed based on WZDx Specification v2.0 can be found [here](https://datahub.transportation.gov/Roadways-and-Bridges/Texas-DOT-TxDOT-Work-Zone-Data/h4kh-i7b7)
- The Maricopa County Department of Transportation data feed based on WZDx Specification v1.1 can be found [here](https://datahub.transportation.gov/Roadways-and-Bridges/Maricopa-County-Regional-Work-Zone-Data-Exchange-W/wd94-wugt)
- The Iowa Department of Transportation data feed based on WZDx Specification v1.1 can be found [here](https://data.iowadot.gov/datasets/iowa-work-zone-data-exchange-wzdx).

Going forward, the [Work Zone Data Working Group (WZDWG)](https://github.com/usdot-jpo-ode/jpo-wzdx/wiki), established under the Federal Geographic Data Committee (FGDC) Transportation Subcommittee (TSC) will maintain the WZDx Specification with the goal of publishing incremental updates to refine the features, attributes, and vocabulary needed to model work zone activity data. 

**How can I get help with implementation?**
This project repository will be continually updated with resources to help with implementation - in the meantime, please make a GitHub issue or discussion entry if you need help implementing the WZDx Specification or have questions.

The Federal Highway Administration is leading efforts, via the [Work Zone Data Initiative (WZDI)](https://collaboration.fhwa.dot.gov/wzmp/wzdi/Forms/AllItems.aspx), to develop a standard approach for collecting, organizing, and sharing data on the “when”, “where,” and “how” of work zone deployment.  As part of this effort, key documents have been developed and made publicly available:

- [WZDI Framework](https://collaboration.fhwa.dot.gov/wzmp/Framework/Forms/AllItems.aspx) provides a conceptual architecture for work zone data systems for collecting, storing, disseminating, managing, maintaining and archiving work zone activity data.
- [WZDI Data Dictionary](https://collaboration.fhwa.dot.gov/wzmp/Data%20DictionaryDocuments/Forms/AllItems.aspx) provides digital descriptions of work zone activities that enable and support transportation agencies and third party providers to describe and communicate work zone-related information to agency, private sector, and public users timely and seamlessly across multiple jurisdictions and regions.

## Contact Information

Contact Name: ITS JPO
Contact Information: [avdx@dot.gov](mailto:avdx@dot.gov?subject=Submission%20of%20WZDx%20Specification%20Issue&Body=Issue%20name:%20“[Clarification%20/%20New%20feature%20/%20Question%5d%20—%20Summarize%20topic”%20%0d%23%23%20Summary%0dA%20concise%20description%20of%20the%20problem,%20feature%20request%20(proposed%20change),%20or%20question.%20%0d%23%23%20Motivation%0dFor%20a%20clarification…%20Describe%20the%20ambiguity%20or%20edge%20case(s)%20in%20further%20detail,%20and%20the%20issues%20and%20problems%20this%20poses.%20%0dFor%20a%20new%20feature…%20Describe%20the%20use%20case%20that%20requires%20this%20data%20spec%20feature.%20%0dFor%20a%20question…%20Describe%20the%20deliberation%20that%20led%20to%20the%20question%20within%20your%20project%20or%20organization.%20%0d%23%23%20Proposed%20changes%0d%20In%20the%20case%20of%20a%20proposed%20change,%20provide%20one%20or%20a%20few%20options%20for%20moving%20forward.). 

## Release Notes

#### Release v2.0 (Jan 14, 2020)

- [WZDx Specification v2.0](/feed-content) is now available for IOOs to stand up data feeds. Once data feeds are available from respective IOOs, OEMs, navigation applications, and others can use the data. This release includes the first set of major changes to the specification. 

  - [Required GeoJSON formatting](https://github.com/usdot-jpo-ode/jpo-wzdx/pull/53) of a WZDx feed. GeoJSON is a data interchange format based on JavaScript Object Notation (JSON) designed to exchange geospatial data. Since feeds can be used with existing validation, mapping, and visualizations tools, requiring GeoJSON will improve the accessibility of work zone data activity to producers and consumers.
  - Converted the “common core” data dictionary into a [relational data model](https://github.com/usdot-jpo-ode/jpo-wzdx/pull/54) with road event tables featuring new geometry-specific data elements. This conversion permits a more efficient organization of the data elements for each work zone and supports a flexible, scalable data model.
  - Added new data tables to accommodate [mobility impact and lane level impacts/restrictions](https://github.com/usdot-jpo-ode/jpo-wzdx/pull/57) (i.e., closures and restrictions). The new lane-level information, as well as overall vehicle impact fields, allowing IOOs new flexibility in communicating impacts and mobility restrictions of a work zone.
  - Added a new [Types of Work table](https://github.com/usdot-jpo-ode/jpo-wzdx/pull/59) to provide specific information on the types of work being performed at a work zone. This enumerated table categorizes the type of work and indicates if construction in a work zone will cause any architectural changes to the roadway. This information will support keeping the maps used by autonomous vehicles up to date.  

#### Release v1.1 (Sep 15, 2018)

- [WZDx Specification v1.1](https://github.com/usdot-jpo-ode/jpo-wzdx/tree/v1.1) 
  - Initial release. This version served as a first step in providing a standard work zone data activity framework. This version of the specification focused on “common core” data concepts which are defined as data elements needed for most work zone data use cases. The specification included data elements that data producers were already producing as well as those that may not currently be produced.

## Getting Started

The WZDWG welcomes feedback and comments on the WZDx v2.0 Specification. Comments can be made by posting a GitHub [Issues](https://github.com/usdot-jpo-ode/jpo-wzdx/issues) or [Discussions](https://github.com/usdot-jpo-ode/jpo-wzdx/discussions), while suggested changes can be made using a [Pull Request](https://github.com/usdot-jpo-ode/jpo-wzdx/pulls). 

1. Read about WZDWG activities on the project [Wiki](https://github.com/usdot-jpo-ode/jpo-wzdx/wiki)
2. Learn about using GitHub as a [tool for collaboration and support](/create-feed/README.md#collaborate-via-github).
3. Use [Feed Content](/feed-content) to understand the data components of the specification.
4. [Create your own feed](/create-feed) using example feeds and learn about supported data files.
5. Validate your feed output using the [WZDx v2.0 Feed JSON Schema](https://github.com/usdot-jpo-ode/jpo-wzdx/blob/master/create-feed/schemas/wzdx_v2.0_feed.json) 
6. Publish your feed and tell us about it via avdx@dot.gov. 
  
## Contributions

**How do I contribute to the WZDx Specification?**

- Report bugs and request features via [GitHub Issues](https://github.com/usdot-jpo-ode/jpo-wzdx/issues).
- Ask the WZDx community for input on a question or propose an idea you have via [GithHb Discussions](https://github.com/usdot-jpo-ode/jpo-wzdx/discussions).
- Create a [GitHub pull request](https://help.github.com/articles/creating-a-pull-request/) that outlines a new functionality or fixes a bug.
- Review and provide feedback on update issues/discussions/pull requests created by other users.
- Alternatively, [email us](mailto://avdx@dot.gov.) with any questions.
- Help us improve our best practices and formatting on GitHub.

## Versioning

We use [SemVer](https://semver.org/) for versioning. to view available versions, refer to the [tags](https://github.com/usdot-jpo-ode/jpo-wzdx/tags) section of this repository.


## License

The WZDx project is in the worldwide public domain (i.e., in the public domain within the United States - copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal](https://creativecommons.org/share-your-work/public-domain/cc0/) public domain dedication).
 
All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to comply with the waiver of copyright interest.

