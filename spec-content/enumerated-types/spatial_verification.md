# Spatial Verification

## Enumeration
Type | Description
--- | ---
**Estimated (-est)** | Estimated location associated with work zone activities and lane closures.<br>An estimated measurement may be based on an approximation of a location<br>referencing method (e.g., lat/long or milepost), for example: a point relative to a<br>posted milemarker, point on a map, or GPS device that provides less than<br>centimeter accuracy.
**Verified (-ver)** | Actual reported information about work zone locations. Actual location is<br>typically measured by a calibrated navigation or survey system to centimeter<br>accuracy (six decimal places for latitude and longitude).

## Used By
The **Spatial Verification** enumeration is used by the following fields

Field Name | Data Table
--- | ---
beginning_accuracy | [road_events](/spec-content/data-tables/road_events.md)
ending_accuracy | [road_events](/spec-content/data-tables/road_events.md)