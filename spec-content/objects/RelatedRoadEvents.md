### RelatedRoadEvents Object
The RelatedRoadEvents object is used to identify another road event that is related to a road event.

Property Name | Value | Description | Conformance | Notes
--- | --- | --- | --- | ---
`type` | [RelatedRoadEventType](/spec-content/enumerated-types/RelatedRoadEventType.md) | The type of road event being identifed, such as another sequence of related work zones, a detour, or next road event in sequence. | Required |
`id` | String | An identifier for the related road event by the `type` property. | Required |

#### Used By
Property | Object
--- | ---
`related_road_events` | [RoadEventCoreDetails](/spec-content/objects/RoadEventCoreDetails.md)
