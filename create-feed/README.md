# Creating the Feed
This directory contains information regarding creation of a WZDx feed, such as the feed format, example feed outputs, JSON schemas, and validation tools.

## Feed Format and File Type

The WZDx v2.0 data feed is formatted according to the [GeoJSON](https://geojson.org/) specification. GeoJSON is the file format of choice because:
- It is a lightweight data exchange format.
- It is easy for humans to read and write.
- It is easy for machines to parse and generate.
- The format is designed to exchange spatial data, which is a primary goal of the Work Zone Data Working Group.
- It is an open specification and does not carry licensing burdens.
- GeoJSON formatted-data is published as text files, there is a low technological burden of entry.
- GeoJSON validation, mapping, and visualization tools already exists and will ease adoption by producers and consumers.

A WZDx feed contains a single entry describing aspects of the feed itself (such as version) as well as one or more entries which describe a work zone's (generically: road event) characteristics along a single road segment in a single direction. 

The tables below detail the specificaton's content and describe the data used to build the feed.

## WZDx Feed Information

- The [Road Event Feed Information](/feed-content/data-tables/road_event_feed_info.md) table describes the data feed.

## WZDx Work Zone (Road Event) Information

- The [Road Events](/feed-content/data-tables/road_events.md) table describes a work zone event.
- The [Types of Work](/feed-content/data-tables/types_of_work.md) table describes the work taking place along the road.  If applicable, it indicates if the work changes the roadway's architecture.
- The [Lanes](/feed-content/data-tables/lanes.md) table identifies and describes individual lanes within an event.
- The [Lane Restrictions](/feed-content/data-tables/lane_restrictions.md) table describes restrictions for identified lanes.

The figure below models the tables and their relationships.

## Work Zone Data Entity Relationship Diagram
*Note*: Required data elements are in bold.

![road_event ERD](/images/road_event_erd.png)

## Feed Examples
There are example WZDx GeoJSON feed files in the `examples` directory. The following WZDx feed examples include all optional fields. An example file is included for both the `LineString` and `MultiPoint` geometry types.

* [MultiPoint GeoJSON Example](/create-feed/examples/multipoint_example.geojson)
* [LineString GeoJSON Example](/create-feed/examples/linestring_example.geojson)

## JSON Schemas
The [schemas](/create-feed/schemas) directory includes a JSON Schema for the following WZDx feed versions: 

* [WZDx v2.0 Feed](/create-feed/schemas/wzdx_v2.0_feed.json)

## Business Rules
The following business rules are procedures to assure a standardized and interpretable use of WZDx specification. The specification describes the data elements about a work zone that are required for a conformant data feed, whereas the business rules are requirements for implementing the specification in a standard manner. Note that business rules are distinct from best practices in that the latter are suggestions and business rules are requirements.

1. Each direction of travel receives a separate road event. For example, a work zone on a two lane road, with opposite travel directions ↑↓, are two separate road events.
2. Construction requiring alternating traffic flows in a lane should have a road event for both directions. Additionally, roadways that during normal operation alternate the flow of traffic based on time of day should have separate road events that have corresponding start and end times.
3. The preferred geometry type representation of a road_event is LineString. In the event that coordinates between the beginning and ending points is an unavailable, the road event will be specified by a MultiPoint geometry.  
4. A mobile work zone should consider the update frequency of the WZDx data feed. A mobile work zone should define the start and end of the work zone to be based on the approximate distance covered in the time between elapsed feed update cycles.
5. A cascading multilane closure should consider the speed of vehicles traveling through the work zone. If the distance between lane closure would not allow for a significant period of travel in a to be closed lane, then the lane should be considered closed to avoid traffic delays and potential crashes.
6. A detour should consist of a LineString containing the full detour route around the work zone’s other road events.
7. A WZDx data feed may contain user defined features in addition to optional and required features in the WZDx specification. They are still required to be in adherence with the GeoJSON specification to maintain compatibility for data consumers.

## Example Work Zone Scenarios

See [example_work_zone_scenarios.md](/create-feed/example_work_zone_scenarios.md) for annotated examples of work zone scenarios and how they would be described in WZDx.

## Data Validation Tools
### Version 2.0
Version 2 validation tools are being built. Documentation will be posted here when it is available.

### Version 1.0
To validate data feeds and measure compliance with the v1.1 specification, the GSA/18F team have developed a prototype data validation tool. This validation service that checks work zone activities against the WZDx v1.1 JSON schema specification is available [here](https://github.com/18F/usdot-jpo-ode-workzone-data-exchange/wiki).

## Collaborate via GitHub
GitHub is an open-source repository hosting service that allows for the storage and collaboration of data projects with version control (tracks changes and allows you to revert to previous iterations). The GitHub workflow is comprised of following steps:
- **Creating a Branch** - Branching allows you to make a copy of your project (i.e., the master branch) so that you maintain your master branch clean (i.e., free of changes). This copy lets you experiment with new features (e.g., new data fields).
- **Adding Commits** - A commit is any change made to your project that you can track allowing you to create a record of your work that others can use a reference.  
- **Opening a Pull Request** - Pull requests allows you to alert others on your team to let them review and discuss your changes. 
- **Discussing and Reviewing Commits** - This part of the process allows reviewers on your team or the DAVI Data Team check that the spec is properly implemented (i.e., that data types are correctly specified in an .xsd file).
- **Merging to Master Branch** - Once your commits have been reviewed and approved you can push your changes to merge with the master branch. 

A more in-depth [tutorial is available here](https://guides.github.com/introduction/flow/).

To start collaborating via GitHub:
- [Join GitHub](https://github.com/) by creating a free [organization account and user accounts](https://help.github.com/articles/differences-between-user-and-organization-accounts/) for your team.
- If you are a data producer contact [Nate Deshmukh-Towery](nate.deshmukh-towery@dot.gov) to request your own sub-repository to host your project.

### How Do I Get Help?
To interact directly with the DAVI Data Team and to get help implementing the spec for your data post an **issue** under the **help wanted** label on the Work Zone GitHub site.

![Posting An Issue](https://github.com/usdot-jpo-ode/jpo-wzdx/blob/master/images/issues.png)
