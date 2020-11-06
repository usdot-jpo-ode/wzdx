# Lane Status
The status of a lane for the traveling public.

## Enumeration
Type | Description
--- | ---
**open** | The lane is open for travel
**closed** | The lane is closed to travel
**shift-left** | The lane shifts left from its current bearing and continues
**shift-right** | The lane shifts right from its current bearing and continues
**merge-left** | The lane gradually tapers while merging into the lane directly to the left 
**merge-right** | The lane gradually  tapers while merging into the lane directly to the right
**alternating-one-way** | The lane alternates the direction of travel via either automated controls or onsite personnel

## Used By
The **Road Restriction** enumeration is used by the following fields

Field Name | Data Table
--- | ---
status | [lanes](/spec-content/data-tables/lanes.md)
