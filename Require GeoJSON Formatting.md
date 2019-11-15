**Require published feeds be formatted according to the GeoJSON specification.**

GeoJSON is a geospatial data interchange format based on JavaScript Object Notation (JSON).  It defines several types of JSON objects and the manner in which they are combined to represent data about    geographic features, their properties, and their spatial extents. GeoJSON uses a geographic coordinate reference system, World Geodetic System 1984, and units of decimal degrees.
The GeoJSON format is the best fit for the specification for a number of reasons.
- The format is designed to exchange spatial data, which a primary goal of the Work Zone Data Working Group.
- It is an open specification and does not carry licensing burdens.
- Because it is published as text file there is a low technological burden of entry.
- GeoJSON validation, mapping, and visualization tools already exists and will ease adoption by producers and consumers.

This pull request, if accepted will address, Issues and Pull Requests #21, #23, #40, #41, #42.
