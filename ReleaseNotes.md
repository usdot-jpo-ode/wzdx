# WZDx Specification v2.0

> Released 1/14/2020

This release includes the first set of major changes to the specification. 

**CHANGES**
* [Required GeoJSON formatting](https://github.com/usdot-jpo-ode/jpo-wzdx/pull/53) of a WZDx feed. GeoJSON is a data interchange format based on JavaScript Object Notation (JSON) designed to exchange geospatial data. Since feeds can be used with existing validation, mapping, and visualizations tools, requiring GeoJSON will improve accessibility of work zone data activity to producers and consumers.
* Converted the “common core” data dictionary into a [relational data model](https://github.com/usdot-jpo-ode/jpo-wzdx/pull/54) with road event tables featuring new geometry-specific data elements. This conversion permits more efficient organization of the data elements for each work zone and supports a flexible, scalable data model.
* Added new data tables to accommodate [mobility impact and lane level impacts/restrictions](https://github.com/usdot-jpo-ode/jpo-wzdx/pull/57) (i.e., closures and restrictions). The new lane-level information, as well as overall vehicle impact fields, allowing IOOs new flexibility in communicating impacts and mobility restrictions of a work zone.
* Added a new [Types of Work table](https://github.com/usdot-jpo-ode/jpo-wzdx/pull/59) to provide specific information on the types of work being performed at a work zone. This enumerated table categorizes the type of work and indicates if construction in a work zone will cause any architectural changes to the roadway. This information will support keeping the maps used by autonomous vehicles up to date.  



# [WZDx Specification v1.1](https://github.com/usdot-jpo-ode/jpo-wzdx/tree/v1.1)

> Released 9/15/2018

* Initial release. This version served as a first step in providing a standard work zone data activity framework. This version of the specification focused on “common core” data concepts which are defined as data elements needed for most work zone data use cases. The specification included data elements that data producers were already producing as well as those that may not currently be produced.
