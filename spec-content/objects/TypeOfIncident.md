# TypeOfIncident Object
The `TypeOfIncident` object describes an event that causees disruptions to expected operations.

## Properties
Property Name | Data Type | Description | Conformance | Notes
--- | --- | --- | --- | ---
`incident_type` | [IncidentType](/spec-content/enumerated-types/IncidentType.md) | The type incedent causing disruptions. | Required | Populated using an IncidentType enumeration.

## Used By
Property | Object
--- | ---
`incident_types` | [IncidentRoadEvent](/spec-content/objects/IncidentRoadEvent.md)
