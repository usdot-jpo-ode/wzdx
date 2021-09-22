# Creating the Feed
This directory contains information regarding creation of a WZDx feed, such as the feed format, example feed outputs, JSON schemas, and validation tools.

## Feed Format and File Type

Since v2.0, WZDx has been formatted according to the [GeoJSON](https://geojson.org/) specification. GeoJSON is the file format of choice because:

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
- The [Restriction](/spec-content/objects/Restriction.md) object describes a restriction on a roadway or lane.
- The [Lane](/spec-content/objects/Lane.md) object identifies and describes individual lanes within an event.
- The [Relationship](/spec-content/objects/Relationship.md) object identifies sequential and hierarchical relationships between road events and other entities.

The figure below models the tables and their relationships.

## Work Zone Data Object Diagram

![WZDx Object Diagram](/images/wzdx_object_diagram.jpg)

## Feed Examples
The following WZDx feed examples represent a variety of scenarios common when creating road events. Most of the examples are modeled after work zone scenarios used in [previous WZDx discussion](https://github.com/usdot-jpo-ode/jpo-wzdx/discussions/131). Optional fields are not included in all examples but represented at least once across the various examples. Each scenario is provided as a single GeoJSON file which may contain multiple work zones documenting differences in representing road events at varying levels of complexity. A comprehensive example contains all of the scenarios in a single file. All example scenarios are provided for both the `LineString` and `MultiPoint` geometry types.

* [All LineString GeoJSON Examples](/create-feed/examples/linestring-examples)
* [All MultiPoint GeoJSON Examples](/create-feed/examples/multipoint-examples)

Below is a summary of each of the example WZDx feeds and detailed differences for each of the road events:

### Scenario 1  - Simple Work Zone
Scenario 1 ([Linestring](/create-feed/examples/linestring-examples/scenario1_simple_linestring_example.geojson) or [MultiPoint](/create-feed/examples/multipoint-examples/scenario1_simple_multipoint_example.geojson)) is based on the same numbered annotated work zones in [Discussion Topic 131](https://github.com/usdot-jpo-ode/jpo-wzdx/discussions/131) with a single lane closed on a multi-lane facility.

- First work zone is single direction, single event, with no lane-level information (ID: `71234`).
- Second work zone is single direction, single event, with detailed lane information (ID: `WDM-58493-NB`).
- Third work zone is single direction, three sequential events, with detailed lane information. This work zone demonstrates the use of the `relationship` property, both `first` and `next` to indiciate the order of the road events and `parents` to indicate all road events are related (they all have `parents` as `65773`). (IDs: `65773-1`, `65773-2`, `65773-3`).

### Scenario 2 - Lane Shift (simple scenario)
Scenario 2 ([Linestring](/create-feed/examples/linestring-examples/scenario2_laneshift_linestring_example.geojson) or [MultiPoint](/create-feed/examples/multipoint-examples/scenario2_laneshift_multipoint_example.geojson)) is based on the same numbered annotated work zones in [Discussion Topic 131](https://github.com/usdot-jpo-ode/jpo-wzdx/discussions/131) which keeps all lanes open but shifts them resulting in both shoulders being closed on a multi-lane facility.

- Single work zone with lane shift in the detailed lane information showing us of verified location and start time. ("id": `7733`).

### Scenario 3 - Shoulder Closure (bidirectional work zone)
Scenario 3 ([Linestring](/create-feed/examples/linestring-examples/scenario3_shoulder_bidirectional_linestring_example.geojson) or [MultiPoint](/create-feed/examples/multipoint-examples/scenario3_shoulder_bidrectional_multipoint_example.geojson)) is based on the same numbered annotated work zones in [Discussion Topic 131](https://github.com/usdot-jpo-ode/jpo-wzdx/discussions/131) which closes the shoulder in a single direction on an undivided roadway.

- Single work zone represented by two road events (IDs: `121388-EB`, `121388-WB`), one in direction of shoulder closure and second in opposite direction.
- Demonstrates the use of `restrictions` for the event as well as individual lanes
- Demonstrates the use of `relationship` to show the road events in each direction are related to a common parent (`121388`)

### Scenario 4 - Road Closure with Detour on Arterial
Scenario 4 ([Linestring](/create-feed/examples/linestring-examples/scenario4_detour_linestring_example.geojson) or [MultiPoint](/create-feed/examples/multipoint-examples/scenario4_detour_multipoint_example.geojson) is based on the same numbered annotated work zones in [Discussion Topic 131](https://github.com/usdot-jpo-ode/jpo-wzdx/discussions/131) which has an associated detour for a road closure.  The example is slightly modified for use on a multi-lane facility.

- Single work zone in one direction represented by a single road event (ID: `67890`), with a detour.
- Showing use of `relationship` `parents` and `children` to connect the detour road events (IDs: `67890-detour1`, `67890-detour2`, `67890-detour3`) to the work zone.
- Also uses `relationship` to represent the sequence of the three detour road events.
- Does not use `parents` to connect the work zone and all detour road events to a common parent (e.g. a project), but that approach is acceptable.

### Scenario 5 - Recurring Work Zone
Scenario 5 ([Linestring](/create-feed/examples/linestring-examples/scenario5_recurring_linestring_example.geojson) or [MultiPoint](/create-feed/examples/multipoint-examples/scenario5_recurring_multipoint_example.geojson)) is based on the same numbered annotated work zones in [Discussion Topic 131](https://github.com/usdot-jpo-ode/jpo-wzdx/discussions/131) assuming that it is just a single lane closure but is recurring over multiple days.

- Simple work zone but with a recurring component.
- Five road events: an `active` (day 1, ID: `PLK01012016-Day1`) event and four additional events (IDs: `PLK01012016-Day2`, `PLK01012016-Day3`, `PLK01012016-Day4`, `PLK01012016-Day5`) for later dates with a pending status.
- The `active` work zone event demonstrates value of verified location and time.
- The `relationship` property is used to show all road events are related (they have the same parent of `PLK01012016`).

### Local Access Only (bidirectional work zone)
The local access only example ([Linestring](/create-feed/examples/linestring-examples/local_access_only_bidirectional_linestring_example.geojson) or [MultiPoint](/create-feed/examples/multipoint-examples/local_access_only_bidirectional_multipoint_example.geojson)) shows a basic work zone that keeps all lanes open but places restrictions to only local traffic.

- Single work zone on a bidirectional roadwith with impact to both directions, represented by two road events (IDs: `WZ389-NB`, `WZ389-SB`), one for each direction.
- Uses `local-access-only` [RoadRestriction](/spec-content/enumerated-types/RoadRestriction.md).
- One road event shows basic details (not lane-level), while the opposite direction road event shows detailed lane information. The detailed lane information also includes a bike lane for reference.

### Comprehensive Example
- The comprehensive example ([Linestring](/create-feed/examples/linestring-examples/comprehensive_linestring_example.geojson) or [MultiPoint](/create-feed/examples/multipoint-examples/comprehensive_multipoint_example.geojson)) contains all of the examples listed above in a single GeoJSON file showing how the various road events across multiple organizations and data sources can be represented in a single WZDx feed.

## JSON Schemas
The [schemas](/create-feed/schemas) directory includes a JSON Schema for the following WZDx feed versions:

* [WZDx v2.0 Feed](/create-feed/schemas/wzdx_v2.0_feed.json)
* [WZDx v3.0 Feed](/create-feed/schemas/wzdx_v3.0_feed.json)
* [WZDx v3.1 Feed](/create-feed/schemas/wzdx_v3.1_feed.json)
* [WZDx v4.0 Feed](/create-feed/schemas/wzdx_v4.0_feed.json)

## Business Rules
The following business rules help assure a standardized and interpretable use of the WZDx specification. The specification describes the required structure and data fields to describe a work zone, whereas business rules are additional requirements for using the WZDx specification in a standard manner. Note that business rules are distinct from best practices in that the latter are suggestions and business rules are requirements.

1. Each direction of travel must be represented by a separate road event. For example, if there is a work zone on a roadway with two lanes, each in an opposite travel direction (↑↓), each direction must be a separate road event.
2. Construction which requires alternating traffic flows within a lane must be represented with at least one road event in each direction. Similarly, roadways that during normal operation have an alternating flow of traffic direction based on time of day must be represented by at least one road event in each direction.
3. The preferred [GeoJSON Geometry](https://tools.ietf.org/html/rfc7946#page-7) for a [RoadEventFeature](/spec-content/objects/RoadEventFeature.md) is `LineString`, which allows indicating the full path of the road event. In cases where only the beginning and ending coordinates are available, the `MultiPoint` can be used.  
4. A cascading multi-lane closure should consider the speed of vehicles traveling through the work zone. If the distance between lane closures is short enough that time in a to-be-closed lane is not significant, which is common, the to-be-closed lane should be represented as closed to avoid traffic delays and potential crashes.
5. A detour must be represented with a [RoadEvent](/spec-content/objects/RoadEvent.md) of type (i.e. with `event_type` of) `detour` and its containing [RoadEventFeature](/spec-content/objects/RoadEventFeature.md) should have a `geometry` of `type` `LineString` to represent the full detour route. The detour road event should be connected to the work zone road event using the `relationship` property on the detour road event.
6. If the `lanes` property on the [RoadEvent](/spec-content/objects/RoadEvent.md) object is provided, it must include one entry for every lane in the road event. Providing lane information for only some of the lanes in a road event is not allowed.

## Data Validation
### WZDx v2.0 and later
Use the corresponding JSON schema linked above to validate WZDx v2.0 and later.

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
