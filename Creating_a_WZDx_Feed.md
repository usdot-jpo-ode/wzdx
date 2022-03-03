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
1. The preferred [GeoJSON Geometry](https://tools.ietf.org/html/rfc7946#page-7) for a [RoadEventFeature](/spec-content/objects/RoadEventFeature.md) is `LineString`, which allows indicating the full path of the road event. Note that the `geometry` of a `FieldDeviceFeature` MUST be of type `Point`.
2. A [DetourRoadEvent](/spec-content/objects/DetourRoadEvent.md) and its containing [RoadEventFeature](/spec-content/objects/RoadEventFeature.md) should have `geometry` of `type` `Linestring` to represent the detour route.
3. A detour which travels along multiple roads must be broekn into a seperate [RoadEvent](/spec-content/objects/RoadEvent.md) for each road so that `RoadName` can be accurately represented.
4. For geometries corresponding to a [WorkZoneRoadEvent](/spec-content/objects/WorkZoneRoadEvent.md), in cases where only the beginning and ending coordinates are available, the `MultiPoint` can be used. 
5. If the `lanes` property on the [WorkZoneRoadEvent](/spec-content/objects/WorkZoneRoadEvent.md), [DetourRoadEvent](/spec-content/objects/DetourRoadEvent.md), or [RestrictionRoadEvent](/spec-content/objects/RestrictionRoadEvent.md) is provided, it must include one entry for every lane in the road event. Providing lane information for only some of the lanes in a road event is not allowed.
6. A work zone must be segmented into separate [RoadEvent](/spec-content/objects/RoadEvent.md)s when a required property of road event or lane object changes. A complex work zone should be linked together using the `Relationship` property.
7. Use the parent/child `Relationship` to identify detours caused by a work zone, or to relate many work zones or other [RoadEvent](/spec-content/objects/RoadEvent.md)s to a single overarching work zone.
8. A value of 1 must represent the left-most lane and an increase in 1 must represent moving a single lane to the right.
9. The `Data_Source_ID` value must match to the `Data_Source_ID` property of [FeedDataSource](/spec-content/objects/FeedDataSource.md) included within the same WZDx GeoJSON document.
10. All datetime formats must follow [RFC 3339 Section 5.6](https://tools.ietf.org/html/rfc3339#section-5.6). Example: 2016-11-03T19:37:00Z.
11. Latitude/longitude coordinates should include only as many significant figures as the data producer's equipment can accurately measure.
12. `reduced_speed_limit_kph` only needs to be supplied if the speed limit within the road event is lower than the posted speed limit of the roadway.
13. `is_architectural_change` should be marked “True” if the road event will cause an alignment change of greater than one meter in the geometry or architecture of the underlying road segment (at the completion of the road event), else “false”.
14. Regardless of type, the `geometry` of every [RoadEventFeature](/spec-content/objects/RoadEventFeature.md) must contain at least two points, representing the beginning and ending of the work zone.
15. If provided, `bbox` must be an array of length 2n where n is the number of dimensions represented in the `geometry` property, with all axes of the most southwesterly point followed by all axes of the more northeasterly point. The axes order of a `bbox` follows the axes order of the `geometry`.



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
