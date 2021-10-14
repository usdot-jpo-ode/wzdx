# Work Zone Event Status
The status of a road event.

## Values
Value | Description
--- | ---
`planned` | Planned status is associated with overall project or phase timing and locations. Typically, this information is estimated during planning or early design phases. The WZDx will not generally include planned activities.
`pending` | Pending is used to alert stakeholders that work is scheduled for the near future (e.g., 2-3 weeks). The certainty of starting at this time is greater than 90% (barring weather and other unforeseen circumstances).<ul><li>Time horizon: approximate begin / end dates</li><li>Location: coverage area and main road name; path (polyline or geoface) around zone area</li></ul>
`active` | Used to alert stakeholder that work zone is in place and active.   
`cancelled` | Reported cancellation of a proposed or active work zone; the coverage applies to the work zone activity record.<ul><li>When date/time is estimated, the cancellation may be one or more days associated within the reported scheduled datetimes</li></ul>
`completed` | Work zone is closed and completed; all work zone impacts are mitigated. This status may be used when a work zone activity is completed earlier than expected.

## Used By
Property | Object
--- | ---
`event_status` | [WorkZoneRoadEvent](/spec-content/objects/WorkZoneRoadEvent.md), [DetourRoadEvent](/spec-content/objects/DetourRoadEvent.md)
