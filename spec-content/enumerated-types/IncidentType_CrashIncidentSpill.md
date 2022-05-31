### IncidentType_CrashIncidentSpill Enumerated Type
Values describe calamitous events that have detoured, restricted, or closed a road.

### Values
Value | Description
--- | ---
`Crash` | A crash interrupts normal operations.
`Crash - Injury` | A crash involving and injury interrupts normal operations. 
`Crash - Investigation` | A crash investigation interrupts normal operations. 
`Incident` | An non-crash incident interrupts normal operations. 
`Spill` | A spill interrupts normal operations. 

### Used By
Property | Object
--- | ---
`type_of_incident` | [IncidentRoadEvent](/spec-content/objects/IncidentRoadEvent.md)
