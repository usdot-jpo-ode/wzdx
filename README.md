<img src="/images/wzdx_logo_blue_orange_x.png" height="150"/>

# Work Zone Data Exchange (WZDx) Specification
The Work Zone Data Exchange (WZDx) Specification aims to make harmonized work zone data provided by infrastructure owners and operators (IOOs) available for third party use, making travel on public roads safer and more efficient through ubiquitous access to data on work zone activity.

The goal of WZDx is to enable widespread access to up-to-date information about dynamic conditions occurring on roads such as construction events. Currently, many IOOs maintain data on work zone activity. However, a lack of common data standards and convening mechanisms makes it difficult and costly for third parties such as original equipment manufacturers (OEMs) and navigation applications to access and use these data across various jurisdictions. WZDx defines a common language for describing work zone information. This simplifies the design process for producers and the processing logic for consumers and makes work zone data more accessible.

Specifically, WZDx defines the structure and content of several [GeoJSON](https://datatracker.ietf.org/doc/html/rfc7946) documents that are each intended to be distributed as a data feed. The feeds describe a variety of high-level road work-related information such as the location and status of work zones, detours, and field devices.

## README Outline
- [Data Feeds](#data-feeds)
- [Repository Organization](#repostitory-organization)
- [Project Description](#project-description)
- [Contact Information](#contact-information)
- [Release Notes](#release-notes)
    - [Release v4.0 (Dec 2021)](#wzdx-v40-december-2021)
- [Getting Started](#getting-started)
- [JSON Schemas](#json-schemas)
- [Contributions](#contributions)
- [Versioning](#versioning)
- [License](#license)

## Data Feeds
WZDx defines the structure and content of multiple distinct data feeds. Each feed is distributed as a single GeoJSON file and is represented by both human-friendly documentation in the [spec-content](/spec-content/) directory and a JSON Schema in [/schemas](/schemas/). Each feed is designed for a specific use case is are flexible and its use in practice can vary by application.

### List of Data Feeds
Feed Name | Description | Producer | Consumer | Uses | Content
--- | --- | --- | --- | --- | ---
`WZDxFeed` | Provides high-level information about events occurring on roadways (called "road events"), primarily work zones, that impact the characteristics of the roadway and involve a change from the default state (such as a lane closure). The `WZDxFeed` is the original work zone data exchange feed. | Agencies responsible for managing roadways and road work, typically state and local DOTs. | Traveling public via third parties such as mapping companies and CAVs. | Route planning; increased awareness; "put work zones on the map". | Work zone and detour road events (see [WorkZoneRoadEvent](/spec-content/objects/WorkZoneRoadEvent.md) and [DetourRoadEvent](/spec-content/objects/DetourRoadEvent.md)).
`RoadRestrictionFeed` | Provides information about sections of roadways that have restrictions. Restriction types described by this specification are listed in the [RestrictionType](/spec-content/enumerated-types/RestrictionType.md) enumerated type. | Transportation Authorities like Tribal, Local, State, or Federal Agencies. | Traveling public via third parties such as mapping companies and CAVs. | Increased awareness; Route planning; Driver, Passenger, and Road-User Safety; Increased Efficiency; Reduced Damage to Infrastructure. | Restriction road events (see [RestrictionRoadEvent](/spec-content/objects/RestrictionRoadEvent.md)).
`SwzDeviceFeed` | Provides information (location, status, live data) about field devices deployed on the roadway in work zones. | Smart work zone equipment manufacturers or vendors. | Agencies responsible for managing roadways and permitting work, typically state and local DOTs. Third-parties such as mapping companies and CAVs may also be interested in field device information. | Simplifies design process for agencies wanting to interface with equipment manufacturers; aids in dynamically generating a `WZDxFeed` with accurate information; reduces effort for manufacturers to conform to different agencies requirements. | Field devices (see [FieldDeviceFeature](/spec-content/objects/FieldDeviceFeature.md)).

## Repostitory Organization
The WZDx Specification repository contains several files and subdirectories.

### Directories
1. [documents](/documents): supplementary PDF and Word documents such as the WZDx Early Adopter's Guide and WZDx Data Feed Self Validation Checklist.
2. [examples](/examples): example GeoJSON documents from WZDx data feeds. [examples/README.md](/examples/README.md) describes the content of this directory in detail.
3. [images](/images): the images that are referenced by other Markdown files in the repository.
4. [schemas](/schemas): contains [JSON Schema](https://json-schema.org/)s for each of the feeds defined by WZDx for feed validation.
5. [spec-content](/spec-content): details the data content of the WZDx specification, including objects, property names and types, and enumerated types. [spec-content/README.md](/spec-content/README.md) describes the content of this directory in detail.

### Files
1. [Creating_a_WZDx_Feed.md](/Creating_a_WZDx_Feed.md): information to assist in creating a WZDx data feed, such as the feed format, business rules, and validation tools.
2. [LICENSE](/LICENSE): the Creative Commons Zero v1.0 Universal license that the repository is licensed under.
3. [README.md](/README.md) (this document): information about the WZDx effort and navigating the repository.
4. [RELEASES.md](/RELEASES.md): detailed information about every release of the WZDx specification.

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
Review [Creating_a_WZDx_Feed.md](/Creating_a_WZDx_Feed.md) which contains information to assist in creating a WZDx data feed, such as the feed format, business rules, and validation tools.

This project repository will be continually updated with resources to help with implementation - in the meantime, please make a [new GitHub discussion](https://github.com/usdot-jpo-ode/wzdx/discussions/new) if you need help implementing the WZDx Specification or have questions.

The Federal Highway Administration is leading efforts, via the [Work Zone Data Initiative (WZDI)](https://ops.fhwa.dot.gov/wz/wzdx/index.htm#wzdi), to develop a standard approach for collecting, organizing, and sharing data on the “when”, “where,” and “how” of work zone deployment.  As part of this effort, key documents have been developed and made publicly available:

- WZDI Framework provides a conceptual architecture for work zone data systems for collecting, storing, disseminating, managing, maintaining and archiving work zone activity data.
- WZDI Data Dictionary provides digital descriptions of work zone activities that enable and support transportation agencies and third party providers to describe and communicate work zone-related information to agency, private sector, and public users timely and seamlessly across multiple jurisdictions and regions.

## Contact Information

Contact Name: ITS JPO

Contact Information: [avdx@dot.gov](mailto:avdx@dot.gov?subject=Submission%20of%20WZDx%20Specification%20Issue&Body=Issue%20name:%20“[Clarification%20/%20New%20feature%20/%20Question%5d%20—%20Summarize%20topic”%20%0d%23%23%20Summary%0dA%20concise%20description%20of%20the%20problem,%20feature%20request%20(proposed%20change),%20or%20question.%20%0d%23%23%20Motivation%0dFor%20a%20clarification…%20Describe%20the%20ambiguity%20or%20edge%20case(s)%20in%20further%20detail,%20and%20the%20issues%20and%20problems%20this%20poses.%20%0dFor%20a%20new%20feature…%20Describe%20the%20use%20case%20that%20requires%20this%20data%20spec%20feature.%20%0dFor%20a%20question…%20Describe%20the%20deliberation%20that%20led%20to%20the%20question%20within%20your%20project%20or%20organization.%20%0d%23%23%20Proposed%20changes%0d%20In%20the%20case%20of%20a%20proposed%20change,%20provide%20one%20or%20a%20few%20options%20for%20moving%20forward.)

## Release Notes

### WZDx v4.0 (December 2021)
WZDx version 4.0 implements clean up and small additions in functionality to the WZDx feed and adds definitions for two new feeds, the [SwzDeviceFeed](/spec-content/objects/SwzDeviceFeed.md) and [RoadRestrictionFeed](/spec-content/objects/RoadRestrictionFeed.md). Until version 4.0, the WZDx specification defined only one feed, the [WZDxFeed](/spec-content/objects/WZDxFeed.md).

*For detailed release information, see [RELEASES.md](/RELEASES.md)*

#### Features
- Add values to the [VehicleImpact](/spec-content/enumerated-types/VehicleImpact.md) enumerated type.
- Allow restrictions with a value and unit to be provided at the road event level.
- Add values to the [LaneType](/spec-content/enumerated-types/LaneType.md) enumerated type.
- Define a new data feed, the [RoadRestrictionFeed](/spec-content/objects/RoadRestrictionFeed.md), to enable providing a feed of restrictions on roadways, such as bridge clearances.
- Define a new data feed, the [SwzDeviceFeed](/spec-content/objects/SwzDeviceFeed.md), to enable equipment vendors and manufacturers to provide high-level information about deployed field devices in work zones.
- Rename the `workers_present` property on the [WorkZoneRoadEvent](/spec-content/objects/WorkZoneRoadEvent.md) object to  `worker_presence`; change the type from "boolean" to a new [WorkerPresence](/spec-content/objects/WorkerPresence.md) object which enables providing more nuanced information about worker presence in work zones.
  
#### Refactoring
- Separate the v3.1 RoadEvent object into [RoadEventCoreDetails](/spec-content/objects/RoadEventCoreDetails.md) (details that are shared by all specific types of road events) and specific types of road events ([WorkZoneRoadEvent](/spec-content/objects/WorkZoneRoadEvent.md), [DetourRoadEvent](/spec-content/objects/DetourRoadEvent.md), and [RestrictionRoadEvent](/spec-content/objects/RestrictionRoadEvent.md)) which each contain the `RoadEventCoreDetails` via a `core_details` property; update the [RoadEventFeature](/spec-content/objects/RoadEventFeature.md) `properties` property to be one of the specific road events types.
- Move the `location_method` property from the [FeedDataSource](/spec-content/objects/FeedDataSource.md) object to the [WorkZoneRoadEvent](/spec-content/objects/WorkZoneRoadEvent.md) object.
- Change the `reduced_speed_limit` property on the [WorkZoneRoadEvent](/spec-content/objects/WorkZoneRoadEvent.md) to `reduced_speed_limit_kph`; change its type from "integer" to "number" and clarify that the value should be in kilometers per hour.
- Deprecate the `lane_number` property on the [Lane](/spec-content/objects/Lane.md) object.
- Deprecate the `lrs_type` and `lrs_url` properties on the [FeedDataSource](/spec-content/objects/FeedDataSource.md) object.
- Remove the deprecated value `alternating-one-way` from the [LaneStatus](/spec-content/enumerated-types/LaneStatus.md) enumerated type.
- Remove all deprecated properties from the road event (RoadEvent in previous versions; [WorkZoneRoadEvent](/spec-content/objects/WorkZoneRoadEvent.md) and [RoadEventCoreDetails](/spec-content/objects/RoadEventCoreDetails.md) in 4.0).
- Require the `road_names` property on the [RoadEventCoreDetails](/spec-content/objects/RoadEventCoreDetails.md).
- Require the `id` property on the [RoadEventFeature](/spec-content/objects/RoadEventFeature.md).
- Refine the [LaneType](/spec-content/enumerated-types/LaneType.md) enumerated type.
- Deprecate the `location_verify_method` property on the [FeedDataSource](/spec-content/objects/FeedDataSource.md).
- Update the [SpatialVerification](/spec-content/enumerated-types/SpatialVerification.md) enumerated type value descriptions to clarify that verified work zone locations should use a GPS enabled device.

## Getting Started

The WZDWG welcomes feedback and comments on the WZDx v4.0 Specification. Comments can be made by posting a GitHub [Issue](https://github.com/usdot-jpo-ode/wzdx/issues) or [Discussion](https://github.com/usdot-jpo-ode/wzdx/discussions), while suggested changes can be made using a [Pull Request](https://github.com/usdot-jpo-ode/wzdx/pulls).

1. Read about WZDWG activities [Wiki](https://github.com/usdot-jpo-ode/wzdx/wiki) and the [WZDx Early Adopter's Guide](/documents/WZDx_Early_Adopters_Guide.pdf).
2. Learn about using GitHub as a [tool for collaboration and support](/create-feed/README.md#collaborate-via-github).
3. Read [Creating a WZDx feed](/Creating_a_WZDx_Feed.md) which contains information about creating a WZDx data feed, such as the feed format, business rules, and validation tools.
4. Use the [Specification Content](/spec-content) page to understand the data components of the specification.
5. Validate your feed output using the respective [JSON Schema](#json-schemas).
6. Publish your feed and tell us about it via avdx@dot.gov.

## JSON Schemas
The WZDx Specification defines a JSON schema for each feed within the [schemas](/schemas) directory. Schemas can be used to validate a WZDx feed document for compliance to the specification. The repository contains schemas for the following feeds:

### Current Version (4.0)
- [WZDx v4.0 WZDxFeed](/schemas/4.0/WZDxFeed.json)
- [WZDx v4.0 SwzDeviceFeed](/schemas/4.0/SwzDeviceFeed.json)
- [WZDx v4.0 RoadRestrictionFeed](/schemas/4.0/RoadRestrictionFeed.json)

### Previous Version
- [WZDx v2.0 WZDxFeed](/schemas/2.0/WZDxFeed.json)
- [WZDx v3.0 WZDxFeed](/schemas/3.0/WZDxFeed.json)
- [WZDx v3.1 WZDxFeed](/schemas/3.1/WZDxFeed.json)

## Contributions

**How do I contribute to the WZDx Specification?**

- Report bugs and request features via [GitHub Issues](https://github.com/usdot-jpo-ode/wzdx/issues).
- Ask the WZDx community for input on a question or propose an idea you have via [GithHub Discussions](https://github.com/usdot-jpo-ode/wzdx/discussions).
- Create a [GitHub Pull Request](https://help.github.com/articles/creating-a-pull-request/) that implements new functionality or fixes a bug.
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
