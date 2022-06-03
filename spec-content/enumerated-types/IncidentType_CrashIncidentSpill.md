# IncidentTypeCrashIncidentSpill Enumerated Type
Values describe calamitous events that have detoured, restricted, or closed a road.

## Values
Value | Description
--- | ---
`crash` | A crash interrupts normal operations.
`crash-injury` | A crash involving and injury interrupts normal operations. 
`crash-investigation` | A crash investigation interrupts normal operations. 
`incident` | An non-crash incident interrupts normal operations. 
`spill` | A spill interrupts normal operations. 

## Used By
Property | Object
--- | ---
`type_of_incident` | [IncidentRoadEvent](/spec-content/objects/IncidentRoadEvent.md)
