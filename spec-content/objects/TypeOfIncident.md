# TypeOfIncident Object
The `TypeOfIncident` object describes an event that causees disruptions to expected operations.

## Properties
Property Name | Data Type | Description | Conformance | Notes
--- | --- | --- | --- | ---
`incident_category` | [IncidentCategory](/spec-content/enumerated-types/IncidentCategories.md) | The type incedent causing disruptions. | Required | Populated using an IncidentType enumeration.
`incident_value` | IncidentValue | A description of the incident causing disruptions. | Required | Populated using an value from an IncidentType enumeration.

## Used By
Property | Object
--- | ---
`incident_types` | [IncidentRoadEvent](/spec-content/objects/IncidentRoadEvent.md)
