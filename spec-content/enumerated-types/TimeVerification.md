# TimeVerification Enumerated Type
A measure of how accurate a date-time is.

*All properties that use the TimeVerification enumerated type are deprecated as of WZDx v4.2 and along with those properties it will be removed from the specification in the next major release.*

## Values
Value | Description
--- | ---
`estimated` | Specific times/dates when work will or is occurring; includes advanced notice of<br>activities or unverified work zone activities. This date/time may be reported in<br>advance, but is not actively verified on day of event.
`verified` | Actual reported times/dates when work occurs.

## Used By
Property | Object
--- | ---
`start_date_accuracy` | [WorkZoneRoadEvent](/spec-content/objects/WorkZoneRoadEvent.md)
`start_date_accuracy` | [DetourRoadEvent](/spec-content/objects/DetourRoadEvent.md)
`end_date_accuracy` | [WorkZoneRoadEvent](/spec-content/objects/WorkZoneRoadEvent.md)
`end_date_accuracy` | [DetourRoadEvent](/spec-content/objects/DetourRoadEvent.md)
