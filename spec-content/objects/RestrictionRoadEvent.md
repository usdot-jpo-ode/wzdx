# RestrictionRoadEvent Object
The `RestrictionRoadEvent` object contains information that describes where, when, and what restrictions are placed along a road segment.

Restrictions are policies limiting road use.

## Properties
Name | Type | Description | Conformance | Notes
--- | --- | --- | --- | ---
`road_event` | [RoadEventCoreDetails](/spec-content/objects/RoadEventCoreDetails.md) | Describes the basic characterisitics of a Road Event.  | Required |
`restrictions` | Array; \[[RoadRestriction](/spec-content/enumerated-types/RoadRestriction.md)\] | Zero or more road restrictions applying to the work zone road segment associated with the work zone. | Optional | These are included as flags rather than detailed restrictions. Detailed restrictions are coded to specific lanes.
`lanes` | Array; \[[Lane](/spec-content/objects/Lane.md)\] | A list of individual lanes within a road event (roadway segment) | Optional |

## Used By
Property | Object
--- | ---
`properties` | [RoadEventFeature](/spec-content/objects/RoadEventFeature.md)

## Important Notes
None
