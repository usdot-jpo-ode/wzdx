# TypeOfIncident Object
The `TypeOfIncident` object describes an event that causees disruptions to expected operations.

## Properties
Property Name | Data Type | Description | Conformance | Notes
--- | --- | --- | --- | ---
`incident_category` | [IncidentCategory](/spec-content/enumerated-types/IncidentCategory.md) | The category of incedent causing disruptions. | Required | 
`incident_type` | [IncidentType](/spec-content/enumerated-types/IncidentType.md) | The type incedent causing disruptions. | Required | IncidentType must be within the category of the catetory indicated with `incident_category`.
`description` | String | Short free text desciption of the type of incident. | Required | 

## Used By
Property | Object
--- | ---
`types_of_incident` | [IncidentRoadEvent](/spec-content/objects/IncidentRoadEvent.md)
