# Enumerated Value Definitions Derived from ITS Standards
The following enumerated types used in the WZDx spec are translated from enumerations from the [TMDD](https://www.standards.its.dot.gov/Content/documents/advisories/TMDD_2013.aspx):

- [lane_type](/feed-content/enumerated-types/derived-from-its-standards/lane_type.md)
- [direction](/feed-content/enumerated-types/derived-from-its-standards/direction.md)

Example of data frame in the TMDD (specified in ASN.1 format)
```xml
DATA-TYPE "EventLane ::= SEQUENCE {
    lanes-type ITIS.LaneRoadway OPTIONAL,
    link-direction Link-direction OPTIONAL,
    lanes-total-original Link-lanes-count OPTIONAL,
    lanes-total-affected Link-lanes-count OPTIONAL,
    event-lanes-affected SEQUENCE (SIZE(1..64)) OF Link-lane-number OPTIONAL,
    lanes-status ITIS.Closures OPTIONAL,
    ...  }"
```