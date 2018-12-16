## **Data Tables**
**Revised September 15, 2018**.

This document explains the types of files and the data elements, data frames and enumerated types that make up a Work Zone data feed. The Common Core Data Table (Table 1), and subsequent tables in this document, include the following columns:
- *Data Name* - name of the data concept (either a data element or data frame) 
- *Data Type* - identification of the data concept as a data element or data frame and whether it is an enumerated type
- *Data Description* - description of the data concept
- *Conformance* - description of the requirement for including data in the data feed file. There are three categories of conformance:
    - Required - must be included
    - Optional - may be included
    - Conditional - associated with two or more data concepts; requires that at least one of the concepts be included in the data feed file
- *Notes* - comments, guidance, or notes for future consideration

### Table of Contents
1. **Common Core Data Dictionary** 

2. **WZDx Header Data**
3. **Data Frames** -  This section expands on the description of the data frames listed in the data dictionary (Section 2.1) and identifies values for data elements that contain standardized enumerations.  Tables are included for the following data frames:
    - StartDateTime
    - EndDateTime
    - BeginLocation
    - EndLocation
4. **Enumerated Types** - This section includes a table of enumerated data elements.
5. **Enumerated Type Definitions** - This section includes definitions for enumerated types including work zone status, status of Time and Location, and Road Restrictions. 
6. **Metadata** - This section describes the contents of a static file with information about the quality and context of data in the data feed. 

