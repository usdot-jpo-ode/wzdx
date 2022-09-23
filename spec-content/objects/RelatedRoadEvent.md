### RelatedRoadEvent Object
The `RelatedRoadEvent` object identifies a road event that is related to the road event that the `RelatedRoadEvent` object occurs on.

Property Name | Value | Description | Conformance | Notes
--- | --- | --- | --- | ---
`type` | [RelatedRoadEventType](/spec-content/enumerated-types/RelatedRoadEventType.md) | The type of relationship with the road event being identifed, such as another sequence of related work zones, a detour, or next road event in sequence. | Required |
`id` | String | An identifier for the related road event. The value of this property should correspond to the `id` of a RoadEventFeature within the same WZDx feed. | Required |

#### Used By
Property | Object
--- | ---
`related_road_events` | [RoadEventCoreDetails](/spec-content/objects/RoadEventCoreDetails.md)
