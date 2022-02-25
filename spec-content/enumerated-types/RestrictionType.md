# RestrictionType Enumerated Type
The type of vehicle restriction on a roadway.

## Values
Value | Description
--- | ---
`local-access-only` | Only vehicles accessing addresses along the segment being described are allowed; this includes emergency services, deliveries, and direct property access.
`no-trucks` | Trucks are prohibited from traveling this part of the network.
`travel-peak-hours-only` | Travel restricted to travel peak hours only.
`hov-3` | Travel restricted to high occupancy vehicles of three or more.
`hov-2` | Travel restricted to high occupancy vehicles of two or more.
`no-parking` | No parking along the segment being described.
`reduced-width` | Lane width reduced along the segment being described.
`reduced-height` | Height restrictions reduced along the segment being described.
`reduced-length` | Vehicle length restrictions reduced along the segment being described.
`reduced-weight` | Vehicle weight restrictions reduced along the segment being described.
`axle-load-limit` | Vehicle axle-load-limit restrictions reduced along the segment being described.
`gross-weight-limit` | Vehicle gross-weight-limit restrictions reduced along the segment being described.
`towing-prohibited` | Towing prohibited along the segment being described.
`permitted-oversize-loads-prohibited` | “Permitted oversize loads” prohibited along the segment being described; this applies to annual oversize load permits.
'closure-undefined' | Road is closed, though reason is unknown.
'closure-special-event' | Road is closed because of an event such as sports, cultural, holiday, etc.
'closure-seasonal' | Road is closed because of time of year, etc.
'closure-flooding' | Road is closed due to flooding or related inclement weather.

## Used By
Property | Object
--- | ---
`type` | [Restriction](/spec-content/objects/Restriction.md)
