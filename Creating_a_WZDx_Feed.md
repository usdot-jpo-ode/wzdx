# Creating a WZDx Feed
This document contains information to assist in creating a WZDx data feed, such as the feed format, business rules, validation tools, and software libraries.

## Feed Format and File Type
WZDx feeds are formatted according to the [GeoJSON](https://geojson.org/) specification. The output of a WZDx feed is a GeoJSON document (a `.geojson` file) that contains a single [GeoJSON FeatureCollection](https://datatracker.ietf.org/doc/html/rfc7946#section-3.3) which includes information about the feed (see the [FeedInfo Object](/spec-content/objects/FeedInfo.md)) and a list of [GeoJSON Feature](https://datatracker.ietf.org/doc/html/rfc7946#section-3.2)s describing entities specific to the type of feed, such as work zones.

### Why GeoJSON?
GeoJSON is the file format of choice because:

- It is a lightweight data exchange format.
- It is easy for humans to read and write.
- It is easy for machines to parse and generate.
- The format is designed to exchange spatial data, which is a primary goal of the Work Zone Data Working Group.
- It is an open specification and does not carry licensing burdens.
- GeoJSON formatted-data is published as text files, so there is a low technological burden of entry.
- GeoJSON validation, mapping, and visualization tools already exist and will ease adoption by producers and consumers.

## Feed Content
WZDx defines the content and structure of several data feeds. Each feed is described by a single root object with many child objects. The output of a WZDx data feed is a GeoJSON file containing the feed object. WZDx defines the following feed objects:

- [WorkZoneFeed Object](/spec-content/objects/WorkZoneFeed.md): describes high-level information about work zone events occurring on roadways (called "road events") that impact the characteristics of the roadway and involve a change from the default state (such as a lane closure). This is the original work zone data exchange feed and the only feed that WZDx defined until [version 4.0](https://github.com/usdot-jpo-ode/wzdx/releases/tag/v4.0). It was formerly named `WZDxFeed`.
- [DeviceFeed Object](/spec-content/objects/DeviceFeed.md): describes information (location, status, live data) about field devices deployed on the roadway in work zones.

*See the [/spec-content/README.md](/spec-content/README.md) for detailed information on all objects defined by WZDx.*

## Business Rules
The following business rules help assure a standardized and interpretable use of the WZDx specification. The specification describes the required structure and data fields to describe a work zone, whereas business rules are additional requirements for using the WZDx specification in a standard manner. Note that business rules are distinct from best practices in that the latter are suggestions and business rules are requirements that cannot be validated by the JSON schema.

1. An event must be segmented into separate [WorkZoneRoadEvent](/spec-content/objects/WorkZoneRoadEvent.md)s or [DetourRoadEvent](/spec-content/objects/DetourRoadEvent.md)s when the value of a required property or lane object changes. A complex event should be linked together using the `related_road_events` property on the [RoadEventCoreDetails](/spec-content/objects/RoadEventCoreDetails.md).
2. If the `lanes` property on the [WorkZoneRoadEvent](/spec-content/objects/WorkZoneRoadEvent.md) is provided, it must include one entry for every lane in the road event. Providing lane information for only some of the lanes in a road event is not allowed.
3. A [Lane](/spec-content/objects/Lane.md) `order` or [TrafficSensorLaneData](/spec-content/objects/TrafficSensorLaneData.md) `lane_order` value of 1 must represent the left-most lane and an increase in 1 must represent moving a single lane to the right.
4. The `data_source_id` value must match to the `data_source_id` property of a [FeedDataSource](/spec-content/objects/FeedDataSource.md) included within the same WZDx GeoJSON document on the [WorkZoneRoadEvent](/spec-content/objects/WorkZoneRoadEvent.md)s and [DetourRoadEvent](/spec-content/objects/DetourRoadEvent.md)s.
5. All dates and times must be expressed in UTC.

## Implementation Guidance

- Feed producers should consider including a completed road event with a verified start and end date in a public feed for a at least an hour or one feed refresh cycle (whichever is longer) to help inform consumers that the work zone has officially ended.

## Update Guide

No properties were deprecated or removed in WZDx v4.2. All feeds that were compliant with WZDx v4.1 are compliant with WZDx v4.2. All feeds that were compliant with WZDx v4.1 without using deprecated properties or enumerations are compliant with WZDx v4.2 without using deprecated content.

Some properties or enumerations may have slightly different meanings or requirements in v4.2 compared to prior versions. To ensure your feed appropriately represents work zones, feed producers should note the following changes and clarifications:

### RoadEventFeature `geometry`
The description of the [RoadEventFeature](/spec-content/objects/RoadEventFeature.md) object's `geometry` property was updated to clarify how geometry should be used to represent a road event.
* The order of coordinates is meaningful: the first coordinate is the first (furthest upstream) point a road user encounters when traveling through the road event. 
* If a data producer has three or more coordinates that are on the road event path, a `LineString` geometry should be used because it indicates that the points are ordered. 
* Feed producers should aim to provide a higher density of points for sections of roadways with curves so that data consumers can more easily match road events to their road network.

### LaneStatus `open` and `closed`  
The descriptions of the [LaneStatus](/spec-content/enumerated-types/LaneStatus.md) enumerations `open` and `closed` were updated to reflect that a lane's status should be compared against its normal usage. 
For example: if a lane normally used as parking lane is being used for travel during a closure, the `parking` lane should be marked as `closed` and an adjacent lane should have a status of `shift-right` or `shift-left` to indicate which travel lane continues into the parking lane. 

### FlashingBeacon 
The description of the [FlashingBeacon](/spec-content/objects/FlashingBeacon.md) object was updated to clarify that the object should only be used to represent a flashing warning beacon used to supplement a temporary traffic control device. A flashing warning beacon is mounted on a sign or channelizing device and used to indicate a warning condition and capture driver attention.


## Data Security Best Practices
This is a working list of best practices for standing up a WZDx data feed assembled by the WZDx Technical Assistance Co-chairs. Please note that this list is not all encompassing; DOTs should consult with security experts for help with securing infrastructure components. **Please note that these are best practices only; not requirements.**

### REST Endpoint Security
If the WZDx feed is set up as a REST Service endpoint, it is recommended that the only exposed endpoint in the REST service for the feed is a HTTP GET endpoint. If a provider wants to allow queries to the data using the request body rather than using URL parameters with a GET request, HTTP POST is also allowed. Exposing only a retrieval method and a post method will deter unauthorized users from attempting to delete or alter the existing WZDx feed provided. All WZDx endpoints should allow only read access. No public endpoint should be exposed that allows write access to the feed. 

### SSL (TLS)
In order to secure data in transit from the WZDx feed to the recipient, building the data feed endpoint using a Secure Sockets Layer (SSL) certificate is highly recommended. This ensures that the connection between the host and the recipient is secure and that data received from the recipient can be trusted. 

### Cloud-hosted
Though all DOTs have infrastructure capabilities to host a WZDx feed, it is recommended that the feed be cloud hosted on a trusted platform due to the following reasons:

* Security: Trusted cloud hosted providers such as Amazon Web Services, Google Cloud Platform, and Microsoft Azure all have hardened physical security as well as digital security best practices already in place. 
* Dedicated Denial of Service (DDoS) Prevention: DDoS attacks remain a very common form of hacking that are still used today. Cloud providers have built solid solutions that can handle DDoS attacks and prevent downtime. 
*	Scalable: As WZDx feeds become more widely used, they may be hit much more frequently than other endpoints. Cloud hosting allows DOTs to easily scale to accommodate for more hits or usage of the endpoint. 
*	Load Balancing Solutions: Along with scaling physical hardware, load balancing allows DOTs the ability to scale the number of endpoints  serving up WZDx data feeds. 

### Securing the Source of Truth
DOTs should consider the sources that are being used to build the WZDx feeds and ensure that those systems are also following the same best practices listed as above. WZDx feeds should be built from reliable data received from the field and trusted sources of data. 

## Data Validation

### JSON Schemas
The WZDx Specification defines a JSON schema for each feed (WZDx v2.0 and later) within the [schemas](/schemas) directory. The repository contains schemas for the following feeds:

#### Current Version (4.2)
- [WZDx v4.2 Work Zone Feed](/schemas/4.2/WorkZoneFeed.json)
- [WZDx v4.2 Device Feed](/schemas/4.2/DeviceFeed.json)

#### Previous Versions
- [WZDx v4.1 Work Zone Feed](/schemas/4.1/WorkZoneFeed.json)
- [WZDx v4.1 Device Feed](/schemas/4.1/DeviceFeed.json)
- [WZDx v4.0 WZDxFeed](/schemas/4.0/WZDxFeed.json)
- [WZDx v4.0 SwzDeviceFeed](/schemas/4.0/SwzDeviceFeed.json)
- [WZDx v4.0 RoadRestrictionFeed](/schemas/4.0/RoadRestrictionFeed.json)
- [WZDx v3.1 WZDxFeed](/schemas/3.1/WZDxFeed.json)
- [WZDx v3.0 WZDxFeed](/schemas/3.0/WZDxFeed.json)
- [WZDx v2.0 WZDxFeed](/schemas/2.0/WZDxFeed.json)
 
### Self-Validation Checklist
For a list of steps to take to make sure your data feed conforms to the specification and is ready to publish, follow the [Self-Validation Checklist](/documents/WZDx_Data_Feed_Self-Validation_Checklist.docx).

### WZDx v1.1
To validate data feeds and measure compliance with the v1.1 specification, the GSA/18F team developed a [prototype data validation tool](https://github.com/18F/usdot-jpo-ode-workzone-data-exchange/wiki).

## Software Libraries

### Microsoft .NET
[IBI Group](https://www.ibigroup.com/) released an open-source .NET class library ([IBI.WZDx](https://github.com/ibi-group/IBI.WZDx)) that contains models and utilities for producing and consuming Work Zone Data Exchange (WZDx) data feeds in .NET. The library is available as a public NuGet package hosted on nuget.org. Using the library can greatly reduce development effort for creating or reading a WZDx feed. See the [IBI.WZDx README](https://github.com/ibi-group/IBI.WZDx) for detailed usage information.
