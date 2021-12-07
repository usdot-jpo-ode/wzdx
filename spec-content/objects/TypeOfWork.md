# TypeOfWork Object
The `TypeOfWork` object indicates the type of work being done in a road event, if applicable (e.g. typical work zones), as well as optionally noting if the type of work will result in an architectural change to the roadway.

## Properties
Property Name | Data Type | Description | Conformance | Notes
--- | --- | --- | --- | ---
`type_name` | [WorkTypeName](/spec-content/enumerated-types/WorkTypeName.md) | A high-level text description of the type of work being done. | Required | 
`is_architectural_change` | Boolean | A flag indicating whether the type of work will result in an architectural change to the roadway. | Optional |

## Used By
Property | Object
--- | ---
`types_of_work` | [WorkZoneRoadEvent](/spec-content/objects/WorkZoneRoadEvent.md)
