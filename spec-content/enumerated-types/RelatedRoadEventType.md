### RelatedRoadEventType Enumerated Type
Describes a type of related road event, such as a work zone project, recurrent work zone, or detour-type road event. 

Value | Description
--- | ---
`first-in-sequence` | The first road event in a sequence of road events that together describe a full work zone or detour
`next-in-sequence` | The next (subsequent) road event in a sequence of road events that together describe a full work zone or detour
`first-occurrence` | The first road event of the first occurrence of a recurrent work zone. End users will need to iterate using the first road event to find all relevant road events to a related work zone
`next-occurrence` | The first road event of the next occurrence of a recurrent work zone. End users will need to iterate using the first road event to find all relevant road events to a related work zone
`related-work-zone` | First road event of related work zones (i.e. not part of a sequence of road events or recurrent work zone) that are relevant to the given road event.  End users will need to iterate using the first road event to find all relevant road events to a related work zone
`related-detour` | First road event of related detours (i.e. not part of a sequence of road events) that are relevant to the given road event.  End users will need to iterate using the first road event to find all relevant road events to a related detour
`planned-moving-operation` | First road event of a related planned moving operation work zones (i.e. not part of a sequence of road events) that are relevant to the given road event.  End users will need to iterate using the first road event to find all relevant road events to a related work zone
`active-moving-operation` | First road event of a related active moving operation work zones (i.e. not part of a sequence of road events) that are relevant to the given road event.  End users will need to iterate using the first road event to find all relevant road events to a related work zone


#### Used By
Property | Object
--- | ---
`type` | [RelatedRoadEvents](/spec-content/objects/RelatedRoadEvents.md)
