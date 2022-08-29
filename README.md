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
    - [Release v4.1 (Aug 2022)](#wzdx-v41-august-2022)
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
**Work Zone Feed** | Provides high-level information about events occurring on roadways (called "road events") related to work zones that impact the characteristics of the roadway and involve a change from the default state (such as a lane closure). The Work Zone Feed is the original work zone data exchange feed and was previously named "WZDxFeed". | Agencies responsible for managing roadways and road work, typically state and local DOTs. | Traveling public via third parties such as mapping companies and CAVs. | Route planning; increased awareness; "put work zones on the map". | Work zone and detour road events (see [WorkZoneRoadEvent](/spec-content/objects/WorkZoneRoadEvent.md) and [DetourRoadEvent](/spec-content/objects/DetourRoadEvent.md)).
**Device Feed** | Provides information (location, status, live data) about field devices deployed on the roadway in work zones. | Work zone equipment manufacturers or vendors. | Agencies responsible for managing roadways and permitting work, typically state and local DOTs. Third-parties such as mapping companies and CAVs may also be interested in field device information. | Simplifies design process for agencies wanting to interface with equipment manufacturers; aids in dynamically generating a Work Zone Feed with accurate information; reduces effort for manufacturers to conform to different agencies requirements. | Field devices (see [FieldDeviceFeature](/spec-content/objects/FieldDeviceFeature.md)).

The WZDx Specification has also been extended to other types of road events, such as restrictions (included in WZDx v4.0 as the `RoadRestrictionFeed`), crashes, disasters, and strong winds. The specification for those feeds are available at the Transportation Data Exchange (TDx) GitHub site here: https://github.com/usdot-jpo-ode/TDx. 

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

### WZDx v4.1 (August 2022)

#### New Functionality
- Add `is_moving` boolean property to the [FieldDeviceCoreDetails](/spec-content/objects/FieldDeviceCoreDetails.md) to allow indicating if any field device is moving as part of a mobile operation.
- Add `road_direction` property to the [FieldDeviceCoreDetails](/spec-content/objects/FieldDeviceCoreDetails.md) to allow providing the direction of the roadway that a field device is associated with.
- Recommend using Universally Unique Identifiers (UUID) for the `id` property of the [RoadEventFeature](/spec-content/objects/RoadEventFeature.md), [FieldDeviceFeature](/spec-content/objects/FieldDeviceFeature.md), and [FeedDataSource](/spec-content/objects/FeedDataSource.md), noting that a UUID may be required in the next major release.
- Add `name` property to [RoadEvenCoreDetails](/spec-content/objects/RoadEventCoreDetails.md) to allow providing a human-friendly name for a road event.
- Add the following values to the [MarkedLocationType](/spec-content/enumerated-types/MarkedLocationType.md) enumerated type:
    - `personal-device`
    - `ramp-closure`
    - `road-closure`
    - `delineator`
- Add the following values to the [Direction](/spec-content/enumerated-types/Direction.md) enumerated type:
    - `undefined`
    - `unknown`
- Add `no-passing` to the [RestrictionType](/spec-content/enumerated-types/RestrictionType.md) enumerated type.
- Add a `sign_text` property to the [FlashingBeacon](/spec-content/objects/FlashingBeacon.md) object.
- Add a [TrafficSignal](/spec-content/objects/TrafficSignal.md) object to allow represent temporary traffic signals in a WZDx Device Feed.
- Add `two-way-center-turn-lane` to the [LaneType](/spec-content/enumerated-types/LaneType.md) enumerated type to replace the existing `center-left-turn-lane` with a more generic value.

#### Refactoring
- Deprecate `is_moving` property on the [ArrowBoard](/spec-content/objects/ArrowBoard.md); use the new `is_moving` on the [FieldDeviceCoreDetails](/spec-content/objects/FieldDeviceCoreDetails.md) instead.
- Change the conformance of the `road_event_id` property on the [TrafficSensorLaneData](/spec-content/objects/TrafficSensorLaneData.md) from "Required" to "Optional" to allow providing lane-level data without a defined road event.
- Deprecate the `road_event_feed_info` property on the [WorkZoneFeed] object; use the new `feed_info` property instead.
- Add `is_start_position_verified` and `is_end_position_verified` boolean properties to the [WorkZoneRoadEvent](/spec-content/objects/WorkZoneRoadEvent.md)(/spec-content/objects/WorkZoneRoadEvent.md) to allow indiciating if the start and end positions are verified and clarify what verified means; these properties replace `beginning_accuracy` and `ending_accuracy`.
- Deprecate the `beginning_accuracy` and `ending_accuracy` properties on the [WorkZoneRoadEvent](/spec-content/objects/WorkZoneRoadEvent.md) object; use the new `is_start_position_verified` and `is_end_position_verified` properties instead.
- Add `is_start_date_verified` and `is_end_date_verified` boolean properties to the [WorkZoneRoadEvent](/spec-content/objects/WorkZoneRoadEvent.md) to allow indiciating if the start and end date and times are verified and clarify what verified means; these properties replace `start_date_accuracy` and `end_date_accuracy`.
- Deprecate the `start_date_accuracy` and `end_date_accuracy` properties on the [WorkZoneRoadEvent](/spec-content/objects/WorkZoneRoadEvent.md) object; use the new `is_start_date_verified` and `is_end_date_verified` properties instead.
- Deprecate the `event_status` property on the [WorkZoneRoadEvent](/spec-content/objects/WorkZoneRoadEvent.md) object.
- Change the conformance of the `road_names` property on the [FieldDeviceCoreDetails](/spec-content/objects/FieldDeviceCoreDetails.md) from "Required" to "Optional".
- Deprecate the `traffic-signal` value in the [MarkedLocationType] enumerated type; use the new [TrafficSignal] object instead.
- Deprecate the `center-left-turn-lane` value in the [LaneType](/spec-content/enumerated-types/LaneType.md) enumerated type; use the new `two-way-center-turn-lane` instead.
- Add a `related_road_events` property (and new supporting object [RelatedRoadEvent](/spec-content/objects/RelatedRoadEvent.md) and enumerated type [RelatedRoadEventType](/spec-content/enumerated-types/RelatedRoadEventType.md)) to the [RoadEventCoreDetails](/spec-content/objects/RoadEventCoreDetails.md) to allow explicitly defining relationships/connections between road events; this replaces the [Relationship] object/concept.
- Deprecate the `relationship` property on the [RoadEventCoreDetails](/spec-content/objects/RoadEventCoreDetails.md); use the new `related_road_events` property instead.

#### Cleanup
- Change the type of the `average_speed_kph`, `volume_vph`, and `occupancy_percent` properties on the [TrafficSensor](/spec-content/objects/TrafficSensor.md) and [TrafficSensorLaneData](/spec-content/objects/TrafficSensorLaneData.md) object from "Integer" to "Number"
- Change the allowed minimum value for `average_speed_kph` on [TrafficSensorLaneData](/spec-content/objects/TrafficSensorLaneData.md) from `1` to `0`.
- Add a `feed_info` property to the [WorkZoneFeed](/spec-content/objects/WorkZoneFeed.md) object to replace the `road_event_feed_info`.
- Expand the description of the `update_date` property on the [RoadEventCoreDetails](/spec-content/objects/RoadEventCoreDetails.md) and [FieldDeviceCoreDetails](/spec-content/objects/FieldDeviceCoreDetails.md) to clarify what the value represents.
- Remove the [RoadRestrictionFeed](/spec-content/objects/RoadRestrictionFeed.md) (it moved to [usdot-jpo-ode/TDx](https://github.com/usdot-jpo-ode/TDx)).

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

### Current Version (4.1)
- [WZDx v4.1 Work Zone Feed](/schemas/4.1/WorkZoneFeed.json)
- [WZDx v4.1 Device Feed](/schemas/4.1/SwzDeviceFeed.json)

### Previous Versions
- [WZDx v4.0 WZDxFeed](/schemas/4.0/WZDxFeed.json)
- [WZDx v4.0 SwzDeviceFeed](/schemas/4.0/SwzDeviceFeed.json)
- [WZDx v4.0 RoadRestrictionFeed](/schemas/4.0/RoadRestrictionFeed.json)
- [WZDx v3.1 WZDxFeed](/schemas/3.1/WZDxFeed.json)
- [WZDx v3.0 WZDxFeed](/schemas/3.0/WZDxFeed.json)
- [WZDx v2.0 WZDxFeed](/schemas/2.0/WZDxFeed.json)
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
