# lane_restrictions
**Optional**

This table describes individual lane restrictions.

This table is related to the [lanes](/spec-content/data-tables/lanes.md) table by the foreign key lane_id. For every record in the lanes table there may exist one or more record(s) in the lane_restrictions table.

## Lane Restrictions Table Structure
Data Name|Data Type|Description|Conformance|Notes
-|-|-|-|-
lane_restriction_id|ID|Identifies the lane_info record|Required|Primary key
[lane_id](/spec-content/data-tables/lanes.md)|ID|Identifies the lane to which a restriction info record is related.|Required|Foreign key
restriction_type|Enumeration; Text|The type of restriction being enforced.|Optional|See [Road Restriction Enumerated Type](/spec-content/enumerated-types/road_restriction.md)
restriction_value|Float|The measure of the restriction type|Optional|
restriction_units|Enumeration; Text|Units of measure for the restriction value|Conditional: required if  restriction_value is not null|See [Lane Restriction Unit Enumerated Type](/spec-content/enumerated-types/lane_restriction_unit.md)
