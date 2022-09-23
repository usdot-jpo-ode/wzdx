### RelatedRoadEventType Enumerated Type
Describes how a road event is related to the road event that the RelatedRoadEvent object occurs on. For example, the first road event in a sequence of events along the roadway, an instance of a recurrent work zone, a nearby work zone-type road event, or a nearby detour-type road event. 

In many cases, the related road event type only refers to the first road event as the corresponding "work zone" may encompass multiple road events.  In these situations, end users will need to use the "first" road event and iterate through all linked road events to find all related road events.

Value | Description
--- | ---
`first-in-sequence` | The first road event in a sequence of road events that together describe a full work zone or detour
`next-in-sequence` | The next (subsequent) road event in a sequence of road events that together describe a full work zone or detour
`first-occurrence` | The first road event in the first occurrence in time of a recurrent work zone
`next-occurrence` | The first road event in the next occurrence in time of a recurrent work zone
`related-work-zone` | The first road event of related work zones (i.e. not part of a sequence of road events or recurrent work zone)
`related-detour` | The first road event of related detours (i.e. not part of a sequence of road events)
`planned-moving-operation` | The first road event of a related planned moving operation work zones (i.e. not part of a sequence of road events)
`active-moving-operation` | The first road event of a related active moving operation work zones (i.e. not part of a sequence of road events)

#### Used By
Property | Object
--- | ---
`type` | [RelatedRoadEvent](/spec-content/objects/RelatedRoadEvent.md)
