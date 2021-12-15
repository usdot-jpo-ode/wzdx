# Spatial Verification
An indication of how a geographical coordinate was defined.

## Values
Value | Description
--- | ---
`estimated` | Estimated location for the work zone road event geometry.  An estimated measurement is based on an approximation of the reported location of a work zone.  Approximations of the location can include but are not limited to a point relative to a posted mile maker or cross street, selecting a point on a map, or locations based on project plans.  
`verified` | Verified locations for the work zone road event geometry representing the actual extents of the work zone.  A verified measurement is based on actual reported data from a GPS equipped device showing the measured location of the work zone.

## Used By
Property | Object
--- | ---
`beginning_accuracy` | [WorkZoneRoadEvent](/spec-content/objects/WorkZoneRoadEvent.md)
`ending_accuracy` | [WorkZoneRoadEvent](/spec-content/objects/WorkZoneRoadEvent.md)
