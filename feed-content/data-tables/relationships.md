# relationships
**optional**

Identify both sequential and hierarchical relationships between road events and other entities. For example, a relationship can be used to link multiple road events to a common "parent", such as a project or phase, or identify a sequence of road events.

Relationships show up on the feed as as a `relationship` property on the [road_events](https://github.com/usdot-jpo-ode/jpo-wzdx/blob/master/feed-content/data-tables/road_events.md) feature properties.

## Relationships Table Structure
Data Name | Data Type | Description | Conformance | Notes
--- | --- | --- | --- | ---
**relationship_id** | ID | Identifies the relationship record | Required | Primary key
[road_event_id](/data-tables/road_events.md) | ID | Identifies the road event to which a relationship applies. | Required | Foreign key to [road_events](/feed-content/data-tables/road_events.md) table
**relationship_type** |	Enumeration; Text<ul><li>first <li>next <li>parents <li>children</ul> |	Characterizes the type of relationship between the road event feature and linked object | Required | <ul><li>The `first` and `next` types define sequential relationships<li>The `parents` and `children` types define hierarchical relationships</ul>
**related_id** | Text | Primary key of the linked feature or object | Required | May contain a singula ID or an array of IDs separated by commas.
