# Lane Restriction Object
The `LaneRestriction` object describes a restriction on a specific lane within a road event.

## Properties
Name | Type | Description | Conformance | Notes
--- | --- | --- | --- | ---
`restriction_type` | [RoadRestriction](/spec-content/enumerated-types/RoadRestriction.md) | The type of restriction being enforced. | Required |
`restriction_value` | Number | The measure of the restriction type. | Optional |
`restriction_units` | [LaneRestrictionUnit](/spec-content/enumerated-types/LaneRestrictionUnit.md) | Units of measure for the restriction value. | Conditional: required if `restriction_value` is not null |

## Appears On
Object | Property
--- | ---
[Lane](/spec-content/objects/Lane.md) | `restrictions`