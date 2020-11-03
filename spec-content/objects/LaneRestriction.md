# Lane Restriction
The `LaneRestriction` object describes a restriction on a specific lane within a road event.

## Properties
Property Name | Data Type | Description | Conformance | Notes
--- | --- | --- | --- | ---
`restriction_type` | [Road Restriction Enumerated Type](/spec-content/enumerated-types/road_restriction.md) | The type of restriction being enforced. | Required |
`restriction_value` | Number | The measure of the restriction type. | Optional |
`restriction_units` | [Lane Restriction Unit Enumerated Type](/spec-content/enumerated-types/lane_restriction_unit.md)
 | Units of measure for the restriction value. | Conditional: required if `restriction_value` is not null |

## Appears On
Object | Property
--- | ---
[Lane](/spec-content/objects/road_event.md) | `restrictions`