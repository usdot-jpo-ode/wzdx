# relationships
**optional**

Identify both sequential and hierarchical relationships between road events and other entities. For example, a relationship can be used to link multiple road events to a common "parent", such as a project or phase, or identify a sequence of road events.

Relationships show up on the feed as as a `relationship` property on the [road_events](/spec-content/data-tables/road_events.md) feature properties.

## Relationships Table Structure
Field Name | Data Type | Description | Conformance | Notes
--- | --- | --- | --- | ---
**relationship_id** | ID | Identifies the relationship record. | Required | Primary key
[road_event_id](/spec-content/data-tables/road_events.md) | ID | Identifies the road event to which a relationship applies. | Required | Foreign key to [road_events](/spec-content/data-tables/road_events.md) table
**first** |	ID; Array |	Indicates the first (can be multiple) road event in a sequence of road events by `road_event_id`. | Optional | Every value provided should be an ID which relates to a road event by `road_event_id`
**next** | ID; Array | Indicates the next (can be multiple) road event in a sequence by `road_event_id`. | Optional | Every value provided should be an ID which relates to a road event by `road_event_id`
**parents** | Text; Array | Indicates entities that the road event with this relationship is a part of, such as a work zone project or phase. | Optional | Values can but do not have to correspond to a WZDx entity
**children** | Text; Array | Indicates entities that are part of the road event with this relationship, such as a detour or piece of equipment. | Optional | Values can but do not have to correspond to a WZDx entity

## Notes
- The format of `first`, `next`, `parents`, and `children` should be conducive to serializing into a JSON array for the feed ouput (e.g. "["parent1", "parent2"]").
- The `first` and `next` fields are used to define sequential relationships.
- The `parents` and `children` fields define hierarchical relationships.
