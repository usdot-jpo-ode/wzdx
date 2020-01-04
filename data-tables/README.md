# Data Tables

The content of the Work Zone Data Specification is defined by means of an Entity Relationship Diagram (ERD). The ERD organizes data into distinct entities (also known as tables or objects), defines the content (also known as fields or properties) of each entity, and documents how those entities, tables or objects are related (Relationships).  Also included, when applicable, are enumeration tables which define the values to which field content is restricted.

- **Data Name** - name of the field or column 
- **Data Type** - identifies of the kind of data being stored and an indicates if the field’s content is restricted to an enumeration
- **Data Description** - description of the data content
- **Conformance** - description of the requirement for including data in the data feed file. There are three categories of conformance:
    - *Required* - must be included
    - *Optional* - may be included
    - *Conditional* - associated with two or more data concepts; requires that at least one of the concepts be included in the data feed file
- **Notes** - comments, guidance, or notes for future consideration

## Table of Contents
- **Table Definitions**
    - [**Road Event Feed Info Table**](/data-tables/road_event_feed_info.md)
    - [**Road Event Table**](/data-tables/road_events.md)
    - [**Types of Work Table**](/data-tables/types_of_work.md)
    - [**Lanes Table**](/data-tables/lanes.md)
    - [**Lane Restrictions Table**](/data-tables/lane_restrictions.md)
- [**Enumerated Fields**](/data-tables/enumerated-fields.md) 
    - [**Enumerated Field Definitions**](/data-tables/enumerated-field-definitions.md) 
    - [**Enumerated Field Definitions Derived from ITS Standards**](/data-tables/enumerated-field-definitions-derived-from-its-standards.md)
- [**Metadata**](https://github.com/usdot-jpo-ode/jpo-wzdx/blob/master/data-tables/metadata.md) 

## Entity Relationship Diagram
The ERD indicates the relationship between data tables

[Entity Relationship Diagram](!/images/road_event_erd.png)