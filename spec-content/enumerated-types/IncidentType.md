# IncidentType Enumerated Type
Descriptions of the incidents causing disruptions to expected operations.

## Values
Category | Value  | Description
--- | --- | -- 
Crash | `crash` |  A crash interrupts normal operations.
Crash | `injury` | A crash involving and injury interrupts normal operations. 
Crash | `investigation` | A crash investigation interrupts normal operations. 
Crash | `incident` | An non-crash incident interrupts normal operations.
Crash | `spill` | A spill interrupts normal operations.
Winds | `strong` | Strong winds interrupt normal operations. (windspeed: 25-38 mph / 39-61 km/h)
Winds | `gale-force` | Gale force winds interrupt normal operations. (windspeed: 39-54 mph / 62-88 km/h)
Winds | `tropical-storm-force` | Storm force winds or a tropical storm interrupts normal operations. (windspeed: 55-72 mph / 89-117 km/h)
Winds | `hurricane-force` | Hurricane force winds or a hurricane interrupts normal operations. (windspeed: >73 mph / >117 km/h)
Winds | `tornado` | A tornado interrupts normal operations. 
Winds | `crosswinds` | Crosswinds interrupt normal operations.
Winds | `gusts` | Winds	Gusty winds interrupt normal operations.
Disaster | `crash-air` | An air crash interrupts normal operations.
Disaster | `crash-rail` | A rail crash interrupts normal operations.
Disaster | `explosion` | An explosion interrupts normal operations.
Disaster | `fire` | A serious fire interrupts normal operations.
Disaster | `fire-building` | A building fire interrupts normal operations.
Disaster | `fire-brush` | A brush fire interrupts normal operations.
Disaster | `fire-forest` | A forest fire has interrupts normal operations.
Disaster | `fire-grass` | A grass fire interrupts normal operations.
Disaster | `fire-wild` | A wild fire interrupts normal operations.
Disaster | `fire-hazardous-materials` | A major hazardous materials fire interrupts normal operations.
Disaster | `flood-flash` | A flash flood interrupts normal operations.
Disaster | `flood-major` | A major flood interrupts normal operations.
Disaster | `flood-reservoir-failure` | A reservoir failure interrupts normal operations.
Disaster | `flood-levee-failure` | A levee failure interrupts normal operations.
Disaster | `flow-avalanche-mud-material` | A levee failure interrupts normal operations.
Disaster | `radiation-release-leak` | A radioactive release interrupts normal operations.
Disaster | `radiation-hazard` | A radiation hazard interrupts normal operations.
Disaster | `seismic-earthquake-damage` | Earthquake damage interrupts normal operations.
Disaster | `seismic-tsunami-tidal-wave` | A tsunami interrupts normal operations.
Disaster | `toxin-release-leak` | A toxic release has interrupts normal operations.
Disaster | `volcanic-ash-fall` | Ash fall interrupts normal operations.
Disaster | `volcanic-lava-flow` | A lava flow interrupts normal operations.
Disaster | `volcanic-eruption` | A volcanic eruption interrupts normal operations.
Special Event | `major` | A major event interrupts normal operations.
Special Event | `airshow` | An airshow interrupts normal operations.
Special Event | `hot-air-ballooning` | Hot air ballooning interrupts normal operations.
Special Event | `concert` | A concert interrupts normal operations.
Special Event | `state-occasion` | A state occasion interrupts normal operations.
Special Event | `vip-visit` | A VIP visit interrupts normal operations.
Special Event | `show` | A show interrupts normal operations.
Special Event | `festival` | A festival interrupts normal operations.
Special Event | `exhibition` | A exhibition interrupts normal operations.
Special Event | `performing-arts` | A performing arts event interrupts normal operations.
Special Event | `outdoor-market` | An outdoor market is interrupting normal operations.
Special Event | `fair` | A fair interrupts normal operations.
Special Event | `carnival` | A carnival interrupts normal operations.
Special Event | `fireworks-display` | A fireworks display interrupts normal operations.
Special Event | `trade-expo` | A trade expo interrupts normal operations.
Special Event | `movie-filming` | Movie filming interrupts normal operations.
Special Event | `parade` | A parade interrupts normal operations.
Special Event | `procession` | A procession interrupts normal operations.
Special Event | `crowd` | A crowd interrupts normal operations.
Special Event | `road-race` | A crowd interrupts normal operations.
Special Event | `running-race` | A crowd interrupts normal operations.

## Used By
Property | Object
--- | ---
`incident_type` | [TypeOfIncident](/spec-content/objects/TypeOfIncident.md)
