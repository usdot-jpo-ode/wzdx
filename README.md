<img src="/images/wzdx_logo_blue_orange_x.png" height="150"/>

# Work Zone Data Exchange (WZDx) Specification
The Work Zone Data Exchange (WZDx) Specification aims to make harmonized work zone data provided by infrastructure owners and operators (IOOs) available for third party use, making travel on public roads safer and more efficient through ubiquitous access to data on work zone activity.

The goal of WZDx is to enable widespread access to up-to-date information about dynamic conditions occurring on roads such as construction events. Currently, many IOOs maintain data on work zone activity. However, a lack of common data standards and convening mechanisms makes it difficult and costly for third parties such as original equipment manufacturers (OEMs) and navigation applications to access and use these data across various jurisdictions. WZDx seeks to be a common language for describing road events, simplying the design process for producers and the processing logic for consumers, and making work zone data more accessible. 

## Repostitory Organization
The WZDx Specification repository contains two main subdirectories, each containing their own README file with additional information about the purpose and files within:


1. [`create-feed`](/create-feed), which contains information regarding the creation of a WZDx feed, including feed format, example feeds, JSON schemas, and validation tools.
2. [`spec-content`](/spec-content), which details the data content of the WZDx specification, including objects, property names and types, and enumerated types.


Two additional directories, [`images`](/images) and [`documents`](/documents), contain the images that are referenced throughout the repository and PDF and Word documents such as the WZDx Early Adopter's Guide and WZDx Data Feed Self Validation Checklist. 

### Contents
- [**Creating a WZDx Feed**](/create-feed)
    - [**Example Feed GeoJSON Files**](/create-feed/examples)   
        - [LineString Examples](/create-feed/examples/linestring_examples)
            - [Comprehensive](/create-feed/examples/linestring-examples/comprehensive_linestring_example.geojson)
            - [Local Access Only (bidirectional)](/create-feed/examples/linestring-examples/local_access_only_bidirectional_linestring_example.geojson)
            - [Simple Work Zone](/create-feed/examples/linestring-examples/scenario1_simple_linestring_example.geojson)
            - [Lane Shift](/create-feed/examples/linestring-examples/scenario2_laneshift_linestring_example.geojson)
            - [Shoulder Closure (bidirectional)](/create-feed/examples/linestring-examples/scenario3_shoulder_bidrectional_linestring_example.geojson)
            - [Detour](/create-feed/examples/linestring-examples/scenario4_detour_linestring_example.geojson)
            - [Recurring Work](/create-feed/examples/linestring-examples/scenario5_recurring_linestring_example.geojson)
        - [MultiPoint Examples](/create-feed/examples/multipoint_examples)
            - [Comprehensive](/create-feed/examples/multipoint-examples/comprehensive_multipoint_example.geojson)
            - [Local Access Only (bidirectional)](/create-feed/examples/multipoint-examples/local_access_only_bidirectional_multipoint_example.geojson)
            - [Simple Work Zone](/create-feed/examples/multipoint-examples/scenario1_simple_multipoint_example.geojson)
            - [Lane Shift](/create-feed/examples/multipoint-examples/scenario2_laneshift_multipoint_example.geojson)
            - [Shoulder Closure (bidirectional)](/create-feed/examples/multipoint-examples/scenario3_shoulder_bidrectional_multipoint_example.geojson)
            - [Detour](/create-feed/examples/multipoint-examples/scenario4_detour_multipoint_example.geojson)
            - [Recurring Work](/create-feed/examples/multipoint-examples/scenario5_recurring_multipoint_example.geojson)
    - [**JSON Schemas**](/create-feed/schemas)
        - [WZDx v2.0 Feed](/create-feed/schemas/wzdx_v2.0_feed.json)
        - [WZDx v3.0 Feed](/create-feed/schemas/wzdx_v3.0_feed.json)
        - [WZDx v3.1 Feed](/create-feed/schemas/wzdx_v3.1_feed.json)
        - [WZDx v4.0 Feed](/create-feed/schemas/wzdx_v4.0_feed.json)
- [**Specification Content**](/spec-content)
    - [**Objects**](/spec-content/objects)
        - [WZDXFeed](/spec-content/objects/WZDxFeed.md)
        - [RoadEventFeedInfo](/spec-content/objects/RoadEventFeedInfo.md)
        - [RoadEventDataSource](/spec-content/objects/RoadEventDataSource.md)
        - [RoadEventFeature](/spec-content/objects/RoadEventFeature.md)
        - [RoadEvent](/spec-content/objects/RoadEvent.md)
        - [TypeOfWork](/spec-content/objects/TypeOfWork.md)
        - [Lane](/spec-content/objects/Lane.md)
        - [LaneRestriction](/spec-content/objects/LaneRestriction.md)
        - [Relationship](/spec-content/objects/Relationship.md)
        - [WorkerPresence](/spec-content/objects/WorkerPresence.md)
    - [**Enumerated Types**](/spec-content/enumerated-types)
        - [Direction](/spec-content/enumerated-types/Direction.md)
        - [EventStatus](/spec-content/enumerated-types/EventStatus.md)
        - [EventType](/spec-content/enumerated-types/EventType.md)
        - [LaneRestrictionUnit](/spec-content/enumerated-types/LaneRestrictionUnit.md)
        - [LaneStatus](/spec-content/enumerated-types/LaneStatus.md)
        - [LaneType](/spec-content/enumerated-types/LaneType.md)
        - [LocationMethod](/spec-content/enumerated-types/LocationMethod.md)
        - [RoadRestriction](/spec-content/enumerated-types/RoadRestriction.md)
        - [SpatialVerification](/spec-content/enumerated-types/SpatialVerification.md)
        - [TimeVerification](/spec-content/enumerated-types/TimeVerification.md)
        - [VehicleImpact](/spec-content/enumerated-types/VehicleImpact.md)
        - [WorkerPresenceConfidence](/spec-content/enumerated-types/WorkerPresenceConfidence.md)
        - [WorkerPresenceDefinition](/spec-content/enumerated-types/WorkerPresenceDefinition.md)
        - [WorkerPresenceMethod](/spec-content/enumerated-types/WorkerPresenceMethod.md)
        - [WorkTypeName](/spec-content/enumerated-types/WorkTypeName.md)
- [**Images Used throughout the Specification**](/images)
  - [Object Diagram](/images/wzdx_object_diagram.jpg)
     - [Object Diagram editable draw.io file](/images/wzdx_object_diagram.drawio)

## README Outline
- [Work Zone Data Exchange (WZDx) Specification](#work-zone-data-exchange-wzdx-specification)
  - [Repository Organization](#repostitory-organization)
  - [Contents](#contents)
- [README Outline](#readme-outline)
- [Project Description](#project-description)
- [Contact Information](#contact-information)
- [Release Notes](#release-notes)
    - [Release v3.1 (Apr 2021)]
- [Getting Started](#getting-started)
- [Contributions](#contributions)
- [Versioning](#versioning)
- [License](#license)

## Project Description

**What is the WZDx Specification?**
The Work Zone Data Exchange (WZDx) Specification enables infrastructure owners and operators (IOOs) to make harmonized work zone data available for third-party use. The intent is to make travel on public roads safer and more efficient through ubiquitous access to data on work zone activity. Specifically, the project aims to get data on work zones to vehicles to help automated driving systems (ADS) and human drivers navigate more safely.

**Why is WZDx being developed?**
Improving access to work zone data is one of the top needs identified through the US Department of Transportation (USDOT) [Data for Automated Vehicle Integration (DAVI)](https://www.transportation.gov/av/data) effort.

Up-to-date information about dynamic conditions occurring on roads – such as construction events – can help ADS and humans navigate safely and efficiently. Many IOOs maintain data on work zone activity. However, a lack of common data standards and convening mechanisms makes it difficult and costly for third parties – including original equipment manufacturers (OEMs) and navigation applications – to access and use these data across various jurisdictions.

Inspired by [GTFS](https://developers.google.com/transit/gtfs/reference/), USDOT launched WZDx to jumpstart the voluntary adoption of a basic work zone data specification through collaboration with data producers and data users. Longer-term, the goal is to enable collaborative maintenance and expansion of the specification to meet the emerging needs of ADS.

**Who is involved in developing WZDx?**
The [Federal Highway Administration (FHWA)](https://www.fhwa.dot.gov/) and [Intelligent Transportation Systems Joint Program Office (ITS JPO)](https://www.its.dot.gov/) co-led the early stages of the WZDx project and remain actively involved along with the [Bureau of Transportation Statistics (BTS)](https://www.bts.gov/), [Federal Motor Carrier Safety Administration (FMCSA)](https://www.fmcsa.dot.gov/), and others in the USDOT. 

Several data producers and data users voluntarily developed v1.1 of the specification in collaboration with USDOT, and have set up data feeds based on the specification. These WZDx-compliant feeds and their links can be found in the [Work Zone Data Exchange Feed Registry](https://data.transportation.gov/d/69qe-yiui). Data producers with feeds in the registry currently include: Texas Department of Transportation (TxDOT), Massachusetts Department of Transportation (MassDOT), Maricopa County Department of Transportation (MCDOT), and Iowa Department of Transportation (IDOT).

Going forward, the [Work Zone Data Working Group (WZDWG)](https://github.com/usdot-jpo-ode/wzdx/wiki), established under the Federal Geographic Data Committee (FGDC) Transportation Subcommittee (TSC) will maintain the WZDx Specification with the goal of publishing incremental updates to refine the features, attributes, and vocabulary needed to model work zone activity data.

**How can I get help with implementation?**
This project repository will be continually updated with resources to help with implementation - in the meantime, please make a GitHub issue or discussion entry if you need help implementing the WZDx Specification or have questions.

The Federal Highway Administration is leading efforts, via the [Work Zone Data Initiative (WZDI)](https://ops.fhwa.dot.gov/wz/wzdx/index.htm#wzdi), to develop a standard approach for collecting, organizing, and sharing data on the “when”, “where,” and “how” of work zone deployment.  As part of this effort, key documents have been developed and made publicly available:

- WZDI Framework provides a conceptual architecture for work zone data systems for collecting, storing, disseminating, managing, maintaining and archiving work zone activity data.
- WZDI Data Dictionary provides digital descriptions of work zone activities that enable and support transportation agencies and third party providers to describe and communicate work zone-related information to agency, private sector, and public users timely and seamlessly across multiple jurisdictions and regions.

## Contact Information

Contact Name: ITS JPO

Contact Information: [avdx@dot.gov](mailto:avdx@dot.gov?subject=Submission%20of%20WZDx%20Specification%20Issue&Body=Issue%20name:%20“[Clarification%20/%20New%20feature%20/%20Question%5d%20—%20Summarize%20topic”%20%0d%23%23%20Summary%0dA%20concise%20description%20of%20the%20problem,%20feature%20request%20(proposed%20change),%20or%20question.%20%0d%23%23%20Motivation%0dFor%20a%20clarification…%20Describe%20the%20ambiguity%20or%20edge%20case(s)%20in%20further%20detail,%20and%20the%20issues%20and%20problems%20this%20poses.%20%0dFor%20a%20new%20feature…%20Describe%20the%20use%20case%20that%20requires%20this%20data%20spec%20feature.%20%0dFor%20a%20question…%20Describe%20the%20deliberation%20that%20led%20to%20the%20question%20within%20your%20project%20or%20organization.%20%0d%23%23%20Proposed%20changes%0d%20In%20the%20case%20of%20a%20proposed%20change,%20provide%20one%20or%20a%20few%20options%20for%20moving%20forward.)

## Release Notes

### Release v3.1 (April 2021)
Following the major v3.0 release, the changes for the v3.1 release were developed with the goal enhancing and cleaning up the spec without making major changes or breaking backwards compatibility. Thus, in v3.1 many enumerated type values or object properties were deprecated rather than removed. Most if not all of these deprecated values will be removed in the next major release.

This repository was also renamed from `jpo-wzdx` to `wzdx` on 2021-04-05. All links pointing to `jpo-wzdx` will automatically redirect to the new URL. 

#### Features
* Add `local-access-only` restriction
* Add `license` property to the `RoadEventFeedInfo` object

#### Refactoring
* Refactor `LaneType` enumerated type to deprecate values that can be determined from other properties of the Lane object, such as `order`, `status`, and `lane_restrictions`
* Add value `alternating-flow` to `LaneStatus` enumerated type and deprecate `alternating-one-way`
* Add `road_names` property to the `RoadEvent` object and deprecate `road_name` and `road_number`
* Deprecate the `total_num_lanes` property on the `RoadEvent` object as the `RoadEvent`'s `lanes` array can be used to determine the number of lanes

#### Fixes
* Add optional `bbox` property to allow providing a [GeoJSON Bounding Box](https://tools.ietf.org/html/rfc7946#section-5) for the `WZDxFeed` and `RoadEventFeature` objects
* Add an `id` property to the `RoadEventFeature` object for providing the a road event's identifier to better follow [GeoJSON ID recommendations](https://tools.ietf.org/html/rfc7946#section-3.2)

## Getting Started

The WZDWG welcomes feedback and comments on the WZDx 3.1 Specification. Comments can be made by posting a GitHub [Issues](https://github.com/usdot-jpo-ode/wzdx/issues) or [Discussions](https://github.com/usdot-jpo-ode/wzdx/discussions), while suggested changes can be made using a [Pull Request](https://github.com/usdot-jpo-ode/wzdx/pulls).

1. Read about WZDWG activities [Wiki](https://github.com/usdot-jpo-ode/wzdx/wiki) and the [WZDx Early Adopter's Guide](/documents/WZDx_Early_Adopters_Guide.pdf)
2. Learn about using GitHub as a [tool for collaboration and support](/create-feed/README.md#collaborate-via-github).
3. Use [Specification Content](/spec-content) page to understand the data components of the specification.
4. [Create your own feed](/create-feed) using example feeds and follow the business rules.
5. Validate your feed output using the [WZDx v4.0 Feed JSON Schema](/create-feed/schemas/wzdx_v4.0_feed.json)
6. Publish your feed and tell us about it via avdx@dot.gov.

## Contributions

**How do I contribute to the WZDx Specification?**

- Report bugs and request features via [GitHub Issues](https://github.com/usdot-jpo-ode/wzdx/issues).
- Ask the WZDx community for input on a question or propose an idea you have via [GithHub Discussions](https://github.com/usdot-jpo-ode/wzdx/discussions).
- Create a [GitHub pull request](https://help.github.com/articles/creating-a-pull-request/) that implements new functionality or fixes a bug.
- Review and provide feedback on update issues/discussions/pull requests created by other users.
- Alternatively, [email us](mailto://avdx@dot.gov.) with any questions.
- Help us improve our best practices and formatting on GitHub.

## Versioning

The WZDx specification uses a major.minor versioning scheme, similar to [SemVer](https://semver.org/). The rules are as follows:

1. The minor version number must be incremented if new, backwards compatible fields/entities/enumerations are introduced or if any existing fields/entities/enumerations are marked as deprecated.
2. The major version number must be incremented if any backwards incompatible changes are introduced.
3. Neither version number shall be incremented for documentation changes/clarifications that have no effect on either the specification schema or the content or structure of a GeoJSON feed file which conforms to the specification.

To view available versions, refer to the [tags](https://github.com/usdot-jpo-ode/wzdx/tags) section of this repository.

## License

The WZDx project is in the worldwide public domain (i.e., in the public domain within the United States - copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal](https://creativecommons.org/share-your-work/public-domain/cc0/) public domain dedication). All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to comply with the waiver of copyright interest. see [License](LICENSE) for more details.
