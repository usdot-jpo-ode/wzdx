# IncidentType Enumerated Type
Descriptions of the incidents causing disruptions to expected operations.

## Values
Incident Type | Incident Value
--- | --- 
`Crash` |  A crash interrupts normal operations.
`Crash-Injury` | A crash involving and injury interrupts normal operations. 
`Crash-Investigation` | A crash investigation interrupts normal operations. 
`Incident` | An non-crash incident interrupts normal operations.
`Spill` | A spill interrupts normal operations.


## Used By
Property | Object
--- | ---
`incident_type` | [TypeOfIncident](/spec-content/objects/TypeOfIncident.md)
