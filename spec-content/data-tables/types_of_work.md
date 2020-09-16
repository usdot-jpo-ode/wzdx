# types_of_work
**Optional**

This table indicates the type of work being done in a road event, if applicable (e.g. typical work zones), as well as noting if the type of work will result in an architectural change to the roadway.

This table is related to the [road_events](/spec-content/data-tables/road_events.md) table by the foreign key `road_event_id`.  For every record in the `road_event` table there exists zero or more records in the `types_of_work` table.

#### Types of Work Table
Field Name | Data Type | Description | Conformance | Notes
--- | --- | --- | --- | ---
type_of_work_id | ID | Identifies the `type_of_work` record. | Required | Primary key
[road_event_id](/spec-content/data-tables/road_events.md) | ID | Identifies the road event to which the `type_of_work` record is related. | Required | Foreign key
type_name | Enumeration; Text | A high-level text description of the type of work being done. | Required | See [Work Type Name Enumerated Type](/spec-content/enumerated-types/work_type_name.md)
is_architectural_change | Boolean | A flag indicating whether the type of work will result in an architectural change to the roadway. | Optional |
