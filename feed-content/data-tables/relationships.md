# Relationship Object

- Relationship objects are stored as an array of objects, named "relationships", in the [road_events](https://github.com/usdot-jpo-ode/jpo-wzdx/blob/master/feed-content/data-tables/road_events.md) object.
- The relationship object consist of a key / value pair.
- The key, named "type", describes how a road event feature is related to other objects or road events.  
- The value is a text string which uniquely identifies the linked object.
- The object defining a relationship is the linking object.
- The referenced object is the linked object.

## Relationship Object Members
Member | Data Type | Description | Conformance | Notes
---------- | --------- | ---------------- | ----------- | -----
**type** |	Enumeration;<br>Text |	Describes the kind of relationship. | Required |  
**value** | Text | Text string which uniquely identifies the related object. | Required |

## Relationship Types
- "first": The linked object is the first in a series of which the linking object is a part.
- "next": The linked object is the next in a series of which the linking object is a part.
- "child": The linking object is a subpart of the linked object.
- "parent": The linked object is a subpart of the linking object.

## Relationship Business Rules
- The "first" and "next" relationship types define sequential relationships.
- The "first" and "next" relationship types must link road event features. 
- The "parent" and "child" relationship types define hierarchical relationships.
- The "parent" and "child" relationship types may link to "outside" features; "Outside features are objects not included in the Work Zone Data Feed.
