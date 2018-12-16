### Enumerated Type Definitions
This section includes definitions for enumerated types including work zone status, status of Time and Location, and Road Restrictions.

#### Table 8. Work Zone Status Definition Table
Term | WZ-Status Description
---- | ---------------------
**Planned** | Planned status is associated with overall project or phase timing and locations.<br>Typically, this information is estimated during planning or early design phases. The<br>WZDx will not generally include planned activities.
**Pending** | Pending is used to alert stakeholders that work is scheduled for the near future (e.g., 2-<br>3 weeks). The certainty of starting at this time is greater than 90% (barring weather<br>and other unforeseen circumstances).<ul><li>Time horizon: approximate begin / end dates</li><li>Location: coverage area and main road name; path (polyline or geoface)<br>around zone area</li></ul>
**Active** | Used to alert stakeholder that work zone is in place and active.   
**Cancelled** | Reported cancellation of a proposed or active WZ; the coverage applies to the work zone activity record.<ul><li>When date/time is estimated, the cancellation may be one or more days<br>associated within the reported scheduled datetimes</li></ul>
**Completed** | Work Zone is closed and completed; all work zone impacts are mitigated. This status<br>may be used when a work zone activity is completed earlier than expected.

#### Table 9. Spatial and Time Verification Definitions
Term | WZ-Status Description
---- | ---------------------
**DateTime<br>Estimated(-est)** | Specific times/dates when work will or is occurring; includes advanced notice of<br>activities or unverified work zone activities. This date/time may be reported in<br>advance, but is not actively verified on day of event.
**DateTime Verified<br>(-ver)** | Actual reported times/dates when work occurs.
**Location<br>Estimated (-est)** | Estimated location associated with work zone activities and lane closures.<br>An estimated measurement may be based on an approximation of a location<br>referencing method (e.g., lat/long or milepost), for example: a point relative to a<br>posted milemarker, point on a map, or GPS device that provides less than<br>centimeter accuracy.
**Location Verified<br>(-ver)** | Actual reported information about work zone locations. Actual location is<br>typically measured by a calibrated navigation or survey system to centimeter<br>accuracy (six decimal places for latitude and longitude).

#### Table 10. RoadRestrictions Definitions
RoadRestrictions | Descriptions
---------------- | ------------
**no-trucks** | Trucks are prohibited from traveling in work zone area
**travel-peak-hours-only** | Travel restricted to travel peak hours only
**hov-3** | Travel restricted to high occupancy vehicles of three or more
**hov-2** | Travel restricted to high occupancy vehicles of two or more
**no-parking** | No parking in work zone area
**bike-lane** | Bike lane closed in work zone area
**ramp** | Ramp closed in work zone area
**reduced-width** | Lane width reduced in work zone area
**reduced height** | Height restrictions reduced in work zone area
**reduced-length** | Vehicle length restrictions reduced in work zone area
**reduced- weight** | Vehicle weight restrictions reduced in work zone area
**axle-load-limit** | Vehicle axle-load-limit restrictions reduced in work zone area
**gross-weight-limit** | Vehicle gross-weight-limit restrictions reduced in work zone area
**towing-prohibited** | Towing prohibited in work zone area
**permitted-oversize-loads-<br>prohibited** | “Permitted oversize loads” prohibited in work zone area; this applies<br>to annual oversize load permits.
