# RestrictionRoadEvent Object
The `RestrictionRoadEvent` object describes one or more restrictions on a section of a roadway. It describes the location of the road section and the limitations on how it can be used. The `RestrictionRoadEvent` is a linear road event intended to represent persistent restrictions without a defined start or event date, such as bridge clearances. 

The `RestrictionRoadEvent` is a type of road event; it has a `core_details` property which contains the [RoadEventCoreDetails](/spec-content/objects/RoadEventCoreDetails.md) and exists within a [RoadEventFeature](/spec-content/objects/RoadEventFeature.md).

For representing restrictions due to road work, see the [WorkZoneRoadEvent](/spec-content/objects/WorkZoneRoadEvent.md) and [WZDxFeed](/spec-content/objects/WZDxFeed.md).

## Properties
Name | Type | Description | Conformance | Notes
--- | --- | --- | --- | ---
`core_details` | [RoadEventCoreDetails](/spec-content/objects/RoadEventCoreDetails.md) | Describes the basic characterisitics of a road event.  | Required |
`restrictions` | Array; [[Restriction](/spec-content/objects/Restriction.md)] | A list of zero or more road restrictions that apply to the roadway segment described by this road event. | Conditional: required if `lanes` property is not provided. | Restrictions can also be provided on an individual lane.
`lanes` | Array; \[[Lane](/spec-content/objects/Lane.md)\] | A list of individual lanes within a road event (roadway segment). | Conditional: required if `restrictions` property is not provided. | Please see [Business Rule](/Creating_a_WZDx_Feed.md#business-rules) #2.

## Used By
Property | Object
--- | ---
`properties` | [RoadEventFeature](/spec-content/objects/RoadEventFeature.md)

