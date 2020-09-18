# Creating the Feed
This directory contains information regarding creation of a WZDx feed, such as the feed format, example feed outputs, JSON schemas, and validation tools.

## Feed Format and File Type

The WZDx v3.0 data feed is formatted according to the [GeoJSON](https://geojson.org/) specification. GeoJSON is the file format of choice because:
- It is a lightweight data exchange format.
- It is easy for humans to read and write.
- It is easy for machines to parse and generate.
- The format is designed to exchange spatial data, which is a primary goal of the Work Zone Data Working Group.
- It is an open specification and does not carry licensing burdens.
- GeoJSON formatted-data is published as text files, so there is a low technological burden of entry.
- GeoJSON validation, mapping, and visualization tools already exist and will ease adoption by producers and consumers.

A WZDx feed contains a single entry describing aspects of the feed itself (such as version) as well as one or more entries which describe a work zone's (generically: road event) characteristics along a single road segment in a single direction.

The tables below detail the specificaton's content and describe the data used to build the feed.

## Data Tables
### WZDx Feed Information

- The [Road Event Feed Information](/spec-content/data-tables/road_event_feed_info.md) table describes the data feed.
- The [Road Event Data Sources](/spec-content/data-tables/road_event_data_sources.md) table describes the data sources used to build the work zone data feed.

### WZDx Work Zone (Road Event) Information

- The [Road Events](/spec-content/data-tables/road_events.md) table describes a work zone event.
- The [Types of Work](/spec-content/data-tables/types_of_work.md) table describes the work taking place along the road.  If applicable, it indicates if the work changes the roadway's architecture.
- The [Lanes](/spec-content/data-tables/lanes.md) table identifies and describes individual lanes within an event.
- The [Lane Restrictions](/spec-content/data-tables/lane_restrictions.md) table describes restrictions for identified lanes.
- The [Relationships](/spec-content/data-tables/relationships.md) table identifies sequential and hierarchical relationships between road events and other entities.

The figure below models the tables and their relationships.

## Work Zone Data Entity Relationship Diagram

![road_event ERD](/images/road_event_erd.jpg)

## Feed Examples
The following WZDx feed examples include all optional fields. An example file is included for both the `LineString` and `MultiPoint` geometry types.

* [MultiPoint GeoJSON Example](/create-feed/examples/multipoint_example.geojson)
* [LineString GeoJSON Example](/create-feed/examples/linestring_example.geojson)

## JSON Schemas
The [schemas](/create-feed/schemas) directory includes a JSON Schema for the following WZDx feed versions:

* [WZDx v2.0 Feed](/create-feed/schemas/wzdx_v2.0_feed.json)
* [WZDx v3.0 Feed](/create-feed/schemas/wzdx_v3.0_feed.json)

## Data Validation Tools
### WZDx v2.0 and v3.0
Use the corresponding JSON schema linked above to validate WZDx v2.0 and v3.0 feeds.

### WZDx v1.0
To validate data feeds and measure compliance with the v1.1 specification, the GSA/18F team have developed a prototype data validation tool. This validation service that checks work zone activities against the WZDx v1.1 JSON schema specification is available [here](https://github.com/18F/usdot-jpo-ode-workzone-data-exchange/wiki).

## Tips for Testing and Validating a New Feed

During the process of developing a WZDx data feed you should validate your prototype feed against the WZDx specification JSON schema. You do this using a JSON schema validator, such as https://www.jsonschemavalidator.net. Copy/paste the WZDx JSON Schema into the left pane and your feed in the right pane. See [here](https://www.jsonschemavalidator.net/s/d2oYmEnj) for a version that already contains the WZDx v2.0 JSON schema.

Additionally, since a WZDx feed is in GeoJSON format, you can easily plot the road event data to visually validate using a GeoJSON visualization tool like http://geojson.io.

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

![Posting An Issue](https://github.com/usdot-jpo-ode/jpo-wzdx/blob/master/images/issues.png)
