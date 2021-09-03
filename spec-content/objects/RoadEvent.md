# RoadEvent Object
The `RoadEvent` object contains the minimum-content needed to locate a named road segment.

## Properties
Name | Type | Description | Conformance | Notes
--- | --- | --- | --- | ---
`event_type` | [EventType](/spec-content/enumerated-types/EventType.md) | The type/classification of road event. | Required |
`data_source_id` | String | Identifies the data source from which the road event originates. | Required | The value must match to the `data_source_id` property of a [RoadEventDataSource](/spec-content/objects/RoadEventDataSource.md) included within the same WZDx GeoJSON document.
`road_names` | Array; [String] | A list of publicly known names of the road on which the event occurs. This may include the road number designated by a jurisdiction such as a county, state or interstate (e.g. I-5, VT 133). | Conditional: required if `road_name` is not provided. | This property captures the functionality of the deprecated `road_number` and `road_name` properties and conformance will be required in a future release.
`direction` | [Direction](/spec-content/enumerated-types/Direction.md) | The digitization direction of the road that is impacted by the event. This value is based on the standard naming for US roadways and indicates the direction of the traffic flow regardless of the real heading angle. | Required | Example `northbound` (for I-5 North)
`relationship` | [Relationship](/spec-content/objects/Relationship.md) | Identifies both sequential and hierarchical relationships between the road events and other entities. For example, a relationship can be used to link multiple road events to a common 'parent', such as a project or phase, or identify a sequence of road events | Optional | 
`description` | String | Short free text description of work zone. | Optional | This will be populated with formal phrases in a later WZDx version
`creation_date` | String; [date-time](https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-7.3.1) | The UTC time and date when the activity or event was created. | Optional | All datetime formats shall follow [RFC 3339 Section 5.6](https://tools.ietf.org/html/rfc3339#section-5.6). Example: `2016-11-03T19:37:00Z`.
`update_date` | String; [date-time](https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-7.3.1) | The UTC time and date when the activity or event was updated. | Optional | All datetime formats shall follow [RFC 3339 Section 5.6](https://tools.ietf.org/html/rfc3339#section-5.6). Example: `2016-11-03T19:37:00Z`.

## Used By
Property | Object
--- | ---
`properties` | [RoadEventFeature](/spec-content/objects/RoadEventFeature.md)
`road_event` | [WorkZoneEvent](/spec-content/objects/WorkZoneEvent.md)
`road_event` | [DetourEvent](/spec-content/objects/DetourEvent.md)
`road_event` | [RestrictionEvent](/spec-content/objects/RestrictionEvent.md)

## Important Notes
The value of the `RoadEvent`'s `data_source_id` property MUST match the value of the `data_source_id` property of a [RoadEventDataSource](/spec-content/objects/RoadEventDataSource.md) that is included in the same WZDx GeoJSON document.
