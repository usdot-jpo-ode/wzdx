<img src="/images/wzdx_logo_blue_orange_x.png" height="150"/>

# Work Zone Data Exchange (WZDx) Specification
The Work Zone Data Exchange (WZDx) Specification aims to make harmonized work zone data provided by infrastructure owners and operators (IOOs) available for third party use, making travel on public roads safer and more efficient through ubiquitous access to data on work zone activity.

The goal of WZDx is to enable widespread access to up-to-date information about dynamic conditions occurring on roads such as construction events. Currently, many IOOs maintain data on work zone activity. However, a lack of common data standards and convening mechanisms makes it difficult and costly for third parties such as original equipment manufacturers (OEMs) and navigation applications to access and use these data across various jurisdictions. WZDx defines a common language for describing work zone information. This simplifies the design process for producers and the processing logic for consumers and makes work zone data more accessible.

Specifically, WZDx defines the structure and content of several [GeoJSON](https://datatracker.ietf.org/doc/html/rfc7946) documents that are each intended to be distributed as a data feed. The feeds describe a variety of high-level road work-related information such as the location and status of work zones, detours, and field devices.

## README Outline
- [Data Feeds](#data-feeds)
- [Repository Organization](#repository-organization)
- [Project Description](#project-description)
- [Contact Information](#contact-information)
- [Release Notes](#release-notes)
    - [Release v4.2 (Feb 2023)](#wzdx-v42-february-2023)
- [Getting Started](#getting-started)
- [JSON Schemas](#json-schemas)
- [Contributions](#contributions)
- [Versioning](#versioning)
- [License](#license)

## Data Feeds
WZDx defines the structure and content of multiple distinct data feeds. Each feed is distributed as a single GeoJSON file and is represented by both human-friendly documentation in the [spec-content](/spec-content/) directory and a JSON Schema in [/schemas](/schemas/). Each feed is designed for a specific use case.

### List of Data Feeds
Feed Name | Description | Producer | Consumer | Uses | Content
--- | --- | --- | --- | --- | ---
**Work Zone Feed** | Provides high-level information about events occurring on roadways (called "road events") related to work zones that impact the characteristics of the roadway and involve a change from the default state (such as a lane closure). The Work Zone Feed is the original work zone data exchange feed and was previously named "WZDxFeed". | Agencies responsible for managing roadways and road work, typically state and local DOTs. | Traveling public via third parties such as mapping companies and CAVs. | Route planning; increased awareness; "put work zones on the map". | Work zone and detour road events (see [WorkZoneRoadEvent](/spec-content/objects/WorkZoneRoadEvent.md) and [DetourRoadEvent](/spec-content/objects/DetourRoadEvent.md)).
**Device Feed** | Provides information (location, status, live data) about field devices deployed on the roadway in work zones. | Work zone equipment manufacturers or vendors. | Agencies responsible for managing roadways and permitting work, typically state and local DOTs. Third parties such as mapping companies and CAVs may also be interested in field device information. | Simplifies design process for agencies wanting to interface with equipment manufacturers; aids in dynamically generating a Work Zone Feed with accurate information; reduces effort for manufacturers to conform to different agencies requirements. | Field devices (see [FieldDeviceFeature](/spec-content/objects/FieldDeviceFeature.md)).

The WZDx Specification has also been extended to define data feeds for representing other types of road events, such as restrictions (included in WZDx v4.0 as the `RoadRestrictionFeed`), crashes, disasters, and strong winds. The specification for those feeds is available at the [Transportation Data Exchange (TDx) GitHub site](https://github.com/usdot-jpo-ode/TDx). 

## Repository Organization
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

**Why was WZDx developed?**
Improving access to work zone data was one of the top needs identified through the US Department of Transportation (USDOT) [Data for Automated Vehicle Integration (DAVI)](https://www.transportation.gov/av/data) effort.

Up-to-date information about dynamic conditions occurring on roads – such as construction events – can help ADS and humans navigate safely and efficiently. Many IOOs maintain data on work zone activity. However, a lack of common data standards and convening mechanisms makes it difficult and costly for third parties – including original equipment manufacturers (OEMs) and navigation applications – to access and use these data across various jurisdictions.

Inspired by [GTFS](https://developers.google.com/transit/gtfs/reference/), USDOT launched WZDx to jumpstart the voluntary adoption of a basic work zone data specification through collaboration with data producers and data users.

**Who was involved in developing WZDx?**
The [Federal Highway Administration (FHWA)](https://www.fhwa.dot.gov/) and [Intelligent Transportation Systems Joint Program Office (ITS JPO)](https://www.its.dot.gov/) co-led the early stages of the WZDx project and remain actively involved along with the [Bureau of Transportation Statistics (BTS)](https://www.bts.gov/), [Federal Motor Carrier Safety Administration (FMCSA)](https://www.fmcsa.dot.gov/), and others in the USDOT. 

Many data producers have set up data feeds based on the specification. These WZDx-compliant feeds and their links can be found in the [Work Zone Data Exchange Feed Registry](https://data.transportation.gov/d/69qe-yiui). Data producers with feeds in the registry as of February 2023 include: 
* Colorado Department of Transportation
* Florida Department of Transportation
* Iowa Department of Transportation
* Massachusetts Department of Transportation 
* Maricopa County Department of Transportation
* Maryland Department of Transportation
* Metropolitan Transportation Commission (California)
* Minnesota Department of Transportation
* National Park Service
* North Carolina Department of Transportation
* Oklahoma Department of Transportation
* Texas Department of Transportation
* Utah Department of Transportation

Development of WZDx versions 2.0 through 4.2 was overseen by the [Work Zone Data Working Group (WZDWG)](https://github.com/usdot-jpo-ode/wzdx/wiki), established under the Federal Geographic Data Committee (FGDC) Transportation Subcommittee (TSC) to maintain and update the WZDx Specification.

**What is happening with WZDx now?**
The U.S. DOT’s ITS Joint Program Office has engaged ITE and SAE on a new effort that will standardize the WZDx Specification and harmonize multiple work zone-related standards. The project began in late 2022 with public facing portions beginning in early 2023. The published standard will be freely available at the conclusion of the project.

**How can I get help with implementation?**
Review [Creating_a_WZDx_Feed.md](/Creating_a_WZDx_Feed.md) which contains information to assist in creating a WZDx data feed, such as the feed format, business rules, and validation tools.

The project repository will be updated with resources to help with implementation. If you have implementation questions, please make a [new GitHub discussion](https://github.com/usdot-jpo-ode/wzdx/discussions/new) if you need help implementing the WZDx Specification or have questions.

The Federal Highway Administration led efforts, via the [Work Zone Data Initiative (WZDI)](https://ops.fhwa.dot.gov/wz/wzdx/index.htm#wzdi), to develop a standard approach for collecting, organizing, and sharing data on the “when”, “where,” and “how” of work zone deployment.  As part of this effort, key documents were developed and made publicly available:

- WZDI Framework provides a conceptual architecture for work zone data systems for collecting, storing, disseminating, managing, maintaining and archiving work zone activity data.
- WZDI Data Dictionary provides digital descriptions of work zone activities that enable and support transportation agencies and third party providers to describe and communicate work zone-related information to agency, private sector, and public users timely and seamlessly across multiple jurisdictions and regions.

## Contact Information

Contact Name: ITS JPO

Contact Information: [avdx@dot.gov](mailto:avdx@dot.gov?subject=Submission%20of%20WZDx%20Specification%20Issue&Body=Issue%20name:%20“[Clarification%20/%20New%20feature%20/%20Question%5d%20—%20Summarize%20topic”%20%0d%23%23%20Summary%0dA%20concise%20description%20of%20the%20problem,%20feature%20request%20(proposed%20change),%20or%20question.%20%0d%23%23%20Motivation%0dFor%20a%20clarification…%20Describe%20the%20ambiguity%20or%20edge%20case(s)%20in%20further%20detail,%20and%20the%20issues%20and%20problems%20this%20poses.%20%0dFor%20a%20new%20feature…%20Describe%20the%20use%20case%20that%20requires%20this%20data%20spec%20feature.%20%0dFor%20a%20question…%20Describe%20the%20deliberation%20that%20led%20to%20the%20question%20within%20your%20project%20or%20organization.%20%0d%23%23%20Proposed%20changes%0d%20In%20the%20case%20of%20a%20proposed%20change,%20provide%20one%20or%20a%20few%20options%20for%20moving%20forward.)

## Release Notes

### WZDx v4.2 (February 2023)

#### New Functionality
- Add `impacted_cds_curb_zones` property to the [WorkZoneRoadEvent](/spec-content/objects/WorkZoneRoadEvent.md) object to allow indicating if any [Curb Data Specification](https://github.com/openmobilityfoundation/curb-data-specification) curb zones are impacted by the work zone using new [CdsCurbZonesReference](/spec-content/objects/CdsCurbZonesReference.md) object.
- Add `work_zone_type` property to the [WorkZoneRoadEvent](/spec-content/objects/WorkZoneRoadEvent.md) object to allow indicating if a work zone road event represents a planned moving operation, an active moving operation, or a standard static work zone. 
- Add the following values to the [Direction](/spec-content/enumerated-types/Direction.md) enumerated type:
    - `inner-loop`
    - `outer-loop`
- Add `velocity_kph` property to the [FieldDeviceCoreDetails](/spec-content/objects/FieldDeviceCoreDetails.md) object to allow indicating the velocity of a field device.
- Add `work-truck-with-lights-flashing` to the [MarkedLocationType](/spec-content/enumerated-types/MarkedLocationType.md) enumerated type.

#### Refactoring
No properties were deprecated or removed in WZDx v4.2.

#### Cleanup
- Expand the description of the `geometry` property on the [RoadEventFeature](/spec-content/objects/RoadEventFeature.md) object to clarify how geometry should be used to represent a road event.
- Update the description of the `open` and `closed` enumerations of the [LaneStatus](/spec-content/enumerated-types/LaneStatus.md) enumerated type.
- Update the description of the [FlashingBeacon](/spec-content/objects/FlashingBeacon.md) object to clarify that it should only be used as a flashing warning beacon mounted on a temporary traffic control device.

## Getting Started

The WZDWG welcomes feedback and comments on the WZDx v4.2 Specification. Comments can be made by posting a GitHub [Issue](https://github.com/usdot-jpo-ode/wzdx/issues) or [Discussion](https://github.com/usdot-jpo-ode/wzdx/discussions), while suggested changes can be made using a [Pull Request](https://github.com/usdot-jpo-ode/wzdx/pulls).

1. Read about WZDWG activities [Wiki](https://github.com/usdot-jpo-ode/wzdx/wiki) and the [WZDx Early Adopter's Guide](/documents/WZDx_Early_Adopters_Guide.pdf).
2. Learn about using GitHub as a [tool for collaboration and support](#contributions).
3. Read [Creating a WZDx feed](/Creating_a_WZDx_Feed.md) which contains information about creating a WZDx data feed, such as the feed format, business rules, and validation tools.
4. Use the [Specification Content](/spec-content) page to understand the data components of the specification.
5. Consider using the [IBI.WZDx](https://github.com/ibi-group/IBI.WZDx) .NET class library to facilitate development of a feed.
6. Validate your feed output using the respective [JSON Schema](#json-schemas).
7. Publish your feed and tell us about it via [avdx@dot.gov](mailto://avdx@dot.gov).

## JSON Schemas
The WZDx Specification defines a JSON schema for each feed within the [schemas](/schemas) directory. Schemas can be used to validate a WZDx feed document for compliance to the specification. The repository contains schemas for the following feeds:

### Current Version (4.2)
- [WZDx v4.2 Work Zone Feed](/schemas/4.2/WorkZoneFeed.json)
- [WZDx v4.2 Device Feed](/schemas/4.2/DeviceFeed.json)

### Previous Versions
- [WZDx v4.1 Work Zone Feed](/schemas/4.1/WorkZoneFeed.json)
- [WZDx v4.1 Device Feed](/schemas/4.1/DeviceFeed.json)
- [WZDx v4.0 WZDxFeed](/schemas/4.0/WZDxFeed.json)
- [WZDx v4.0 SwzDeviceFeed](/schemas/4.0/SwzDeviceFeed.json)
- [WZDx v4.0 RoadRestrictionFeed](/schemas/4.0/RoadRestrictionFeed.json)
- [WZDx v3.1 WZDxFeed](/schemas/3.1/WZDxFeed.json)
- [WZDx v3.0 WZDxFeed](/schemas/3.0/WZDxFeed.json)
- [WZDx v2.0 WZDxFeed](/schemas/2.0/WZDxFeed.json)
## Contributions

**How do I contribute to the WZDx Specification?**

- Report bugs and request features via [GitHub Issues](https://github.com/usdot-jpo-ode/wzdx/issues).
- Ask the WZDx community for input on a question or propose an idea you have via [GitHub Discussions](https://github.com/usdot-jpo-ode/wzdx/discussions).
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
