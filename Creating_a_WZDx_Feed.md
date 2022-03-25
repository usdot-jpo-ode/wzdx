# Creating a WZDx Feed
This documents contains information to assist in creating a WZDx data feed, such as the feed format, business rules, and validation tools.

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

- [WZDxFeed Object](/spec-content/objects/WZDxFeed.md): describes high-level information about work zone events ocurring on roadways (called "road events") that impact the characteristics of the roadway and involve a change from the default state (such as a lane closure). This is the original work zone data exchange feed and the only feed that WZDx defined until [version 4.0](https://github.com/usdot-jpo-ode/wzdx/releases/tag/v4.0).
- [RoadRestrictionFeed Object](/spec-content/objects/RoadRestrictionFeed.md): describes the location and details of restrictions on roadways.
- [SwzDeviceFeed Object](/spec-content/objects/SwzDeviceFeed.md): describes information (location, status, live data) about field devices deployed on the roadway in work zones.

*See the [/spec-content/README.md](/spec-content/README.md) for detailed information on all objects defined by WZDx.*

## Business Rules
The following business rules help assure a standardized and interpretable use of the WZDx specification. The specification describes the required structure and data fields to describe a work zone, whereas business rules are additional requirements for using the WZDx specification in a standard manner. Note that business rules are distinct from best practices in that the latter are suggestions and business rules are requirements.

### WZDxFeed (Work Zones) Business Rules
1. Each direction of travel must be represented by a separate road event. For example, if there is a work zone on a roadway with two lanes, each in an opposite travel direction (↑↓), each direction must be a separate road event.
2. Construction which requires alternating traffic flows within a lane must be represented with at least one road event in each direction. Similarly, roadways that during normal operation have an alternating flow of traffic direction based on time of day must be represented by at least one road event in each direction.
3. The preferred [GeoJSON Geometry](https://tools.ietf.org/html/rfc7946#page-7) for a [RoadEventFeature](/spec-content/objects/RoadEventFeature.md) is `LineString`, which allows indicating the full path of the road event. In cases where only the beginning and ending coordinates are available, the `MultiPoint` can be used.  
4. A cascading multi-lane closure should consider the speed of vehicles traveling through the work zone. If the distance between lane closures is short enough that time in a to-be-closed lane is not significant, which is common, the to-be-closed lane should be represented as closed to avoid traffic delays and potential crashes.
5. A detour must be represented with a [RoadEvent](/spec-content/objects/RoadEvent.md) of type (i.e. with `event_type` of) `detour` and its containing [RoadEventFeature](/spec-content/objects/RoadEventFeature.md) should have a `geometry` of `type` `LineString` to represent the full detour route. The detour road event should be connected to the work zone road event using the `relationship` property on the detour road event.
6. If the `lanes` property on the [WorkZoneRoadEvent](/spec-content/objects/WorkZoneRoadEvent.md), [DetourRoadEvent](/spec-content/objects/DetourRoadEvent.md), or [RestrictionRoadEvent](/spec-content/objects/RestrictionRoadEvent.md) is provided, it must include one entry for every lane in the road event. Providing lane information for only some of the lanes in a road event is not allowed.

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

#### Current Version (4.0)
- [WZDx v4.0 WZDxFeed](/schemas/4.0/WZDxFeed.json)
- [WZDx v4.0 SwzDeviceFeed](/schemas/4.0/SwzDeviceFeed.json)
- [WZDx v4.0 RoadRestrictionFeed](/schemas/4.0/RoadRestrictionFeed.json)

#### Previous Versions
- [WZDx v2.0 WZDxFeed](/schemas/2.0/WZDxFeed.json)
- [WZDx v3.0 WZDxFeed](/schemas/3.0/WZDxFeed.json)
- [WZDx v3.1 WZDxFeed](/schemas/3.1/WZDxFeed.json)
  
### Self-Validation Checklist
For a list of steps to take to make sure your data feed conforms to the specification and is ready to publish, follow the [Self-Validation Checklist](/documents/WZDx_Data_Feed_Self-Validation_Checklist.docx).

### WZDx v1.1
To validate data feeds and measure compliance with the v1.1 specification, the GSA/18F team developed a [prototype data validation tool](https://github.com/18F/usdot-jpo-ode-workzone-data-exchange/wiki).
