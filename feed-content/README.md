# WZDx Feed Content

The Work Zone Data Exchange Specification is defined by distinct entities (called tables or objects) which contain the data content (called fields or properties) of each entity. The relationship between these entities describes how the data within each is related and how the feed should be built. These entities are found in the [data-tables](/feed-content/data-tables) directory. 

Some fields within a data table are restricted to a defined enumeration of values. These enumerations are found in the [enumerated-types](/feed-content/enumerated-types) directory.

- **Data Tables**
    - [**Road Event Feed Info Table**](/feed-content/data-tables/road_event_feed_info.md)
    - [**Road Event Table**](/feed-content/data-tables/road_events.md)
    - [**Types of Work Table**](/feed-content/data-tables/types_of_work.md)
    - [**Lanes Table**](/feed-content/data-tables/lanes.md)
    - [**Lane Restrictions Table**](/feed-content/data-tables/lane_restrictions.md)
    - [**Metadata Table**](/feed-content/data-tables/metadata.md)
- **Enumerated Fields**
    - [**Enumerated Field Definitions**](/feed-content/enumerated-types) 
    - [**Enumerated Field Definitions Derived from ITS Standards**](/feed-content/enumerated-types/derived-from-its-standards)

## Entity Relationship Diagram
The Entity Relationship Diagram (ERD) below indicates the relationship between the data tables. *Required* fields are represented in bold.

![Entity Relationship Diagram](/images/road_event_erd.png)

## Data Table Structure
Each data table defines a list of data fields which are described by the following characterstics:

- **Data Name** - name of the field or column 
- **Data Type** - identifies of the kind of data being stored and an indicates if the field’s content is restricted to an enumeration
- **Data Description** - description of the data content
- **Conformance** - description of the requirement for including data in the data feed file. There are three categories of conformance:
    - *Required* - must be included
    - *Optional* - may be included
    - *Conditional* - associated with two or more data concepts; requires that at least one of the concepts be included in the data feed file
- **Notes** - comments, guidance, or notes for future consideration

## Enumerated Fields Overview
The table below provides an overview of all enumerated fields in the WZDx specification as well as the table they are used in.

Data Name | Table Used In | Enumerated Type | Notes | Source
------------ | ------- | -------------- | ----- | ------
**geometry_type**|road_events|<ul><li>MultiPoint</li><li>LineString</li></ul>||[geoJson Specification](https://tools.ietf.org/html/rfc7946); [See Geometry Definition.](/feed-content/enumerated-types/geometry-type.md) 
**direction**|road_events|<ul><li>northbound</li><li>eastbound</li><li>southbound</li><li>westbound</li></ul>||[Adapted from<br>TMDD link-<br>alignment](/feed-content/enumerated-types/derived-from-its-standards/direction.md)
**beginning_accuracy**|road_events|<ul><li>estimated</li><li>verified</li></ul>|-|[See Spatial Verification Definition](/feed-content/enumerated-types/spatial_verification.md)
**ending_accuracy**|road_events|<ul><li>estimated</li><li>verified</li></ul>|-|[See Spatial Verification Definition](/feed-content/enumerated-types/spatial_verification.md)
**start_date_accuracy**|road_events|<ul><li>estimated</li><li>verified</li></ul>|-|[See Time Verification Definition](/feed-content/enumerated-types/time_verification.md)
**end_date_accuracy**|road_events|<ul><li>estimated</li><li>verified</li></ul>|-|[See Time Verification Definition](/feed-content/enumerated-types/time_verification.md)
**event_status** | road_events | <ul><li>planned</li><li>pending</li><li>active</li><li>cancelled</li><li>completed</li></ul>|| [See Event Status Definition.](/feed-content/enumerated-types/event_status.md)
**vehicle_impact**|road_events|<ul><li>all-lanes-closed</li><li>some-lanes-closed</li><li>all-lanes-open</li><li>alternating-one-way</li><li>unknown</li></ul>|-| [See Vehicle Impact Definition.](/feed-content/enumerated-types/vehicle_impact.md)
**restrictions** | road_events | <ul><li>no-trucks</li><li>travel-peak-hours-only</li><li>hov-3</li><li>hov-2</li><li>no-parking</li><li>towing-prohibited</li><li>permitted-oversize-loads-<br>prohibited (this applies to<br>annual oversize load<br>permits</li><li>reduced-width</li><li>reduced-height</li><li>reduced-length</li><li>reduced-weight</li><ul><li>axle-load-limit</li><li>gross-weight-limit</li></ul></ul> | Included one<br>or more<br>flags as needed | [See Road Restriction Type Definition.](/feed-content/enumerated-types/road_restriction.md)
**type_name** | type_of_work | <ul><li>maintenance</li><li>minor-road-defect-repair</li><li>roadside-work</li><li>overhead-work</li><li>below-road-work</li><li>barrier-work</li><li>surface-work</li><li>painting</li><li>roadway-relocation</li><li>roadway-creation</li></ul> ||[See Work Type Name Definition.](/feed-content/enumerated-types/work_type_name.md)
**lane_edge_reference**|lanes|<ul><li>left</li><li>right</li></ul>|-| [See Lane Edge Reference Definition.](/feed-content/enumerated-types/lane_edge_reference.md)
**lane_status**|lanes|<ul><li>open</li><li>closed</li><li>shift-left</li><li>shift-right</li><li>merge-right</li><li>merge-left</li><li>alternating-one-way</li></ul>|-| [See Lane Status Type Definition](/feed-content/enumerated-types/lane_status.md)
**lane_type** | lanes | <ul><li>all</li><li>left-lane</li><li>right-lane</li><li>left-2-lanes</li><li>left-3-lanes</li>right-2-lanes</li><li>right-3-lanes</li><li>center</li><li>middle-lane</li><li>right-turning-lane</li><li>left-turning-lane</li><li>right-exit-lane</li><li>left-exit-lane</li><li>right-merging-lane</li><li>left-merging-lane</li><li>right-exit-ramp</li><li>right-second-exit-ramp</li><li>right-entrance-ramp</li><li>right-second-entrance-ramp</li><li>left-exit-ramp</li><li>left-second-exit-ramp</li><li>left-entrance-ramp</li><li>left-second-entrance-ramp</li><li>sidewalk</li><li>bike-lane</li><li>none</li><li>unknown</li><li>alternate-flow-lane</li><li>right-shoulder</li><li>left-shoulder</li><li>both-shoulders</li><li>parking-lane</li><li>transit_lane</li></ul> |  | [Adapted from<br>TMDD<br>LaneRoadway](/feed-content/enumerated-types/derived-from-its-standards/lane_type.md)
**restriction_type** | lane_restrictions | See restriction enumerations | Individual lane restrictions | [See Road Restriction Type Definition.](/feed-content/enumerated-types/road_restriction.md)
**restriction_units** | lane_restrictions | <ul><li>feet</li><li>inches</li><li>centimeters</li><li>pounds</li><li>tons</li><li>kilograms</li></ul> | This is an intial list and not intended to be complete. More options will be added as needed. | [See Lane Restriction Unit Type Definition.](/feed-content/enumerated-types/lane_restriction_unit.md)
