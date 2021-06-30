# Creating the Feed
This directory contains information regarding creation of a WZDx feed, such as the feed format, example feed outputs, JSON schemas, and validation tools.

## Feed Format and File Type

The WZDx v3.1 data feed is formatted according to the [GeoJSON](https://geojson.org/) specification. GeoJSON is the file format of choice because:
- It is a lightweight data exchange format.
- It is easy for humans to read and write.
- It is easy for machines to parse and generate.
- The format is designed to exchange spatial data, which is a primary goal of the Work Zone Data Working Group.
- It is an open specification and does not carry licensing burdens.
- GeoJSON formatted-data is published as text files, so there is a low technological burden of entry.
- GeoJSON validation, mapping, and visualization tools already exist and will ease adoption by producers and consumers.

A WZDx feed contains a single entry describing aspects of the feed itself (such as version) as well as one or more entries which describe a work zone's (generically: road event) characteristics along a single road segment in a single direction.

The tables below detail the specificaton's content and describe the data used to build the feed.

## Objects
### WZDx Feed Information

- The [RoadEventFeedInfo](/spec-content/objects/RoadEventFeedInfo.md) object describes the data feed.
- The [RoadEventDataSource](/spec-content/objects/RoadEventDataSource.md) object describes the data sources used to build the work zone data feed.

### WZDx Work Zone (Road Event) Information

- The [RoadEvent](/spec-content/objects/RoadEvent.md) object describes a work zone event.
- The [TypeOfWork](/spec-content/objects/TypeOfWork.md) object describes the work taking place along the road.  If applicable, it indicates if the work changes the roadway's architecture.
- The [Lane](/spec-content/objects/Lane.md) object identifies and describes individual lanes within an event.
- The [LaneRestriction](/spec-content/objects/LaneRestriction.md) object describes restrictions for identified lanes.
- The [Relationship](/spec-content/objects/Relationship.md) object identifies sequential and hierarchical relationships between road events and other entities.

The figure below models the tables and their relationships.

## Work Zone Data Object Diagram

![WZDx Object Diagram](/images/wzdx_object_diagram.jpg)

## Feed Examples
The following WZDx feed examples represent a variety of scenarios common when creating road events. Most of the examples are modeled after work zone scenarios used in [previous WZDx discussion](https://github.com/usdot-jpo-ode/jpo-wzdx/discussions/131) Optional fields are not included in all examples but represented at least once across the various examples. Each scenario is provided as a geojson but may contain multiple work zones documenting differences in representing road events at varying levels of complexity. A comprehensive geojson contains all of the scenarios in a single file.  Example files are provided for both the `LineString` and `MultiPoint` geometry types.

* [All MultiPoint GeoJSON Example](/create-feed/examples/multipoint-example)
* [All LineString GeoJSON Example](/create-feed/examples/linestring-example)

Below is a summary of each of the example WZDx feeds and detailed differences for each of the road events:

**Scenario 1  - Simple Workzone** ([Linestring](/create-feed/examples/linestring-example/scenario1_simple_linestring_example.geojson) or [MultiPoint](/create-feed/examples/multipoint-example/scenario1_simple_multipoint_example.geojson)) - Scenario 1 is based on the same numbered annotated work zones in [Discussion Topic 131](https://github.com/usdot-jpo-ode/jpo-wzdx/discussions/131) with a single lane closed on a multi-lane facility.
- First work zone shown with basic lane information ("id": "71234")
- Second work zone shown with detailed lane information ("id": "WDM-58493-NB")
- Third work zone showing a work zone broken into multiple road events with detailed lane information.  Also demonstrates the use of relationship fields. ("id": "65773-1", "65773-2", "65773-3") 

**Scenario 2 - Lane Shift (simple case)** ([Linestring](/create-feed/examples/linestring-example/scenario2_laneshift_linestring_example.geojson) or [MultiPoint](/create-feed/examples/multipoint-examplescenario2_laneshift_multipoint_example.geojson)) - Scenario 2 is based on the same numbered annotated work zones in [Discussion Topic 131](https://github.com/usdot-jpo-ode/jpo-wzdx/discussions/131) which keeps all lanes open but shifts them resulting in both shoulders being closed on a multi-lane facility.

- Single work zone with lane shift in the detailed lane information showing us of verified location and start time. ("id": "7733")

**Scenario 3 - Shoulder Closure** ([Linestring](/create-feed/examples/linestring-example/scenario3_shoulder_linestring_example.geojson) or [MultiPoint](/create-feed/examples/multipoint-example/scenario3_shoulder_multipoint_example.geojson)) - Scenario 31 is based on the same numbered annotated work zones in [Discussion Topic 131](https://github.com/usdot-jpo-ode/jpo-wzdx/discussions/131) which closes the shoulder in a single direction on an undivided roadway.

- Single work zone but two road events (one in direction of shoulder closure and second in opposite direction).  Also demonstrates the use of restrictions for the event as well as individual lanes. ("id": "121388-2", "121388-2")

**Scenario 4 - Road Closure with Detour on Arterial** ([Linestring](/create-feed/examples/linestring-example/scenario4_detour_linestring_example.geojson) or [MultiPoint](/create-feed/examples/multipoint-example/scenario4_detour_multipoint_example.geojson)) - Scenario 4 is based on the same numbered annotated work zones in [Discussion Topic 131](https://github.com/usdot-jpo-ode/jpo-wzdx/discussions/131) which has an associated detour for a road closure.  The example is slightly modified for use on a multi-lane facility.

- Single work zone with a detour showing use of relationship and multiple road events making up a detour. (WZ - "id": "67890"; Detour - "id": "67890-detour1","67890-detour2","67890-detour3")

**Scenario 5 - Work Zone with Bridge Work Overhead** ([Linestring](/create-feed/examples/linestring-example/scenario5_recurring_linestring_example.geojson) or [MultiPoint](/create-feed/examples/multipoint-example/scenario5_recurring_multipoint_example.geojson)) - Scenario 5 is based on the same numbered annotated work zones in [Discussion Topic 131](https://github.com/usdot-jpo-ode/jpo-wzdx/discussions/131) assuming that it is just a single lane closure but is recurring over multiple days.

- Simple work zone but added a recurring component.  Four additional events were created with a pending status.  The active work zone event demonstrates value of verified location and time. ("id": "PLK01012016-Day1", "PLK01012016-Day2", "PLK01012016-Day3", "PLK01012016-Day4", "PLK01012016-Day5")

**Local Access Example** ([Linestring](/create-feed/examples/linestring-example/localaccess_linestring_example.geojson) or [MultiPoint](/create-feed/examples/multipoint-example/localaccess_multipoint_example.geojson)) - The local access only example shows a basic work zone that keeps all lanes open but places restrictions to only local traffic.

- Single work zone with local access using the 'restrictions'.  One event shows basic level details that can be provided while the opposite direction road event shows detailed lane information.  The detailed lane information also includes a bike lane for reference. ("id": "WZ389-NB", "WZ389-SB"

**Comprehensive Example** ([Linestring](/create-feed/examples/linestring-example/comprehensive_linestring_example.geojson) or [MultiPoint](/create-feed/examples/multipoint-example/comprehensive_multipoint_example.geojson))
- This geojson contains all of the examples listed above in a single file showing how the various road events across multiple organizations/data sources can be produced

## JSON Schemas
The [schemas](/create-feed/schemas) directory includes a JSON Schema for the following WZDx feed versions:

* [WZDx v2.0 Feed](/create-feed/schemas/wzdx_v2.0_feed.json)
* [WZDx v3.0 Feed](/create-feed/schemas/wzdx_v3.0_feed.json)
* [WZDx v3.1 Feed](/create-feed/schemas/wzdx_v3.1_feed.json)



## Business Rules
The following business rules help assure a standardized and interpretable use of the WZDx specification. The specification describes the required structure and data fields to describe a work zone, whereas business rules are additional requirements for using the WZDx specification in a standard manner. Note that business rules are distinct from best practices in that the latter are suggestions and business rules are requirements.

1. Each direction of travel must be represented by a separate road event. For example, if there is a work zone on a roadway with two lanes, each in an opposite travel direction (↑↓), each direction must be a separate road event.
2. Construction which requires alternating traffic flows within a lane must be represented with at least one road event in each direction. Similarly, roadways that during normal operation have an alternating flow of traffic direction based on time of day must be represented by at least one road event in each direction.
3. The preferred [GeoJSON Geometry](https://tools.ietf.org/html/rfc7946#page-7) for a [RoadEventFeature](/spec-content/objects/RoadEventFeature.md) is `LineString`, which allows indicating the full path of the road event. In cases where only the beginning and ending coordinates are available, the `MultiPoint` can be used.  
4. A cascading multi-lane closure should consider the speed of vehicles traveling through the work zone. If the distance between lane closures is short enough that time in a to-be-closed lane is not significant, which is common, the to-be-closed lane should be represented as closed to avoid traffic delays and potential crashes.
5. A detour must be represented with a [RoadEvent](/spec-content/objects/RoadEvent.md) of type (i.e. with `event_type` of) `detour` and its containing [RoadEventFeature](/spec-content/objects/RoadEventFeature.md) should have a `geometry` of `type` `LineString` to represent the full detour route. The detour road event should be connected to the work zone road event using the `relationship` property on the detour road event.
6. If the `lanes` property on the [RoadEvent](/spec-content/objects/RoadEvent.md) object is provided, it must include one entry for every lane in the road event. Providing lane information for only some of the lanes in a road event is not allowed.

## Data Validation
### WZDx v2.0, v3.0, and v3.1
Use the corresponding JSON schema linked above to validate WZDx v2.0, v3.0, and v3.1 feeds.

### WZDx v1.0
To validate data feeds and measure compliance with the v1.1 specification, the GSA/18F team have developed a prototype data validation tool. This validation service that checks work zone activities against the WZDx v1.1 JSON schema specification is available [here](https://github.com/18F/usdot-jpo-ode-workzone-data-exchange/wiki).

### Self-Validation Checklist
For a list of steps to take to make sure your data feed is ready to publish, follow the [Self-Validation Checklist](/documents/WZDx_Data_Feed_Self-Validation_Checklist.docx)

## Collaborate via GitHub
GitHub is an open-source repository hosting service that allows for the storage and collaboration of data projects with version control (tracks changes and allows you to revert to previous iterations). The GitHub workflow is comprised of following steps:
- **Creating a Branch** - Branching allows you to make a copy of your project (i.e., the master branch) so that you keep your master branch clean (i.e., free of changes). This copy lets you experiment with new features (e.g., new data fields).
- **Adding Commits** - A commit is any change made to your project that you can track, allowing you to create a record of your work that others can use as reference.  
- **Opening a Pull Request** - Pull requests allow you to alert others on your team to review and discuss your changes.
- **Discussing and Reviewing Commits** - This part of the process allows reviewers on your team or the DAVI Data Team check that the spec is properly implemented (e.g., that data types are correctly specified in the JSON schema).
- **Merging to Master Branch** - Once your commits have been reviewed and approved, you can push your changes to merge with the master branch.

A more in-depth [tutorial is available here](https://guides.github.com/introduction/flow/).

To start collaborating, [join GitHub](https://github.com/) by creating free [organization and user accounts](https://help.github.com/articles/differences-between-user-and-organization-accounts/) for your team.

### How Do I Get Help?
To interact directly with the DAVI Data Team and to get help implementing the spec for your data, post an **issue** under the **help wanted** label on the Work Zone GitHub site.

![Posting An Issue](/images/issues.png)
