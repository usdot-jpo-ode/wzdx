# Work Type Name

## Enumeration
Type | Description
---| ---
**maintenance** | Work with no impact on the roadway. This includes events such as trash pickup, mowing, landscaping.
**minor-road-defect-repair** | Pothole repair, road crack repair and sealing, and other small road defect repairs.
**roadside-work** | Work that is isolated to the side of the road and not in the main travel way, such as repair, replacement, or addition of streetlights, VMS, signs (guide, warning, regulatory, and information signs) in the ground.
**overhead-work** | Work that occurs above the road, such as repair/replacement of overpasses, overhead VMS, wires, overhead signs, signals, etc. This type of work requires a bucket truck or similar setup rather than being isolated to the side of the road.
**below-road-work** | Work occurring below the road such as boring or bridge repair.
**barrier-work** | Repair, replacement, addition, or change of barriers, guardrails, retaining walls, K-barriers, or similar.
**surface-work** | New resurfacing, such as adding new lanes, moving lanes, or adding or changing connectivity (turn lanes), as well as creation or repair of non-drivable surfaces such as the shoulder or median.
**painting** | 	Repainting, re-striping, adding new lanes, moving lanes, adding stop bars/lines, etc. ***Note:** `is_architectural_change` field should be false when new paint is expected to be within 1 meter of the old paint.*
**roadway-relocation** | Physically relocating the road, such as adding a bridge or removing a sharp curve.
**roadway-creation** | Adding a new road.

## Used By
The **Work Type Name** enumeration is used by the following fields

Field Name | Data Table
--- | ---
type_name | [types_of_work](/feed-content/data-tables/types_of_work.md)
