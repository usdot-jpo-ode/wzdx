# Restriction Object
The `Restriction` object describes a restriction on a road event.

## Properties
Name | Type | Description | Conformance | Notes
--- | --- | --- | --- | ---
`restriction_type` | [RestrictionType](/spec-content/enumerated-types/RestrictionType.md) | The type of restriction being enforced. | Required |
`restriction_value` | Number | The measure of the restriction type. | Optional |
`restriction_units` | [RestrictionUnit](/spec-content/enumerated-types/RestrictionUnit.md) | Units of measure for the restriction value. | Conditional: required if `restriction_value` is not null |

## Used By
Property | Object
--- | ---
`restrictions` | [RoadEvent](/spec-content/objects/RoadEvent.md)
`restrictions` | [RoadEvent-RestrictionsNotice](/spec-content/objects/RoadEvent-RestrictionsNotice.md)
`restrictions` | [Lane](/spec-content/objects/Lane.md)
