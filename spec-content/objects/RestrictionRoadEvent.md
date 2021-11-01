# RestrictionRoadEvent Object
The `RestrictionRoadEvent` object that describes where, when, and what restrictions are placed along a road segment. Restrictions are policies limiting road use.

## Properties
Name | Type | Description | Conformance | Notes
--- | --- | --- | --- | ---
`core_details` | [RoadEventCoreDetails](/spec-content/objects/RoadEventCoreDetails.md) | Describes the basic characterisitics of a Road Event.  | Required |
`restrictions` | Array; [[Restriction](/spec-content/objects/Restriction.md)] | A list of zero or more road restrictions that apply to the roadway segment described by this road event. | Optional | Restrictions can also be provided on an individual lane.
`lanes` | Array; \[[Lane](/spec-content/objects/Lane.md)\] | A list of individual lanes within a road event (roadway segment) | Optional |

## Used By
Property | Object
--- | ---
`properties` | [RoadEventFeature](/spec-content/objects/RoadEventFeature.md)

## Important Notes
None
