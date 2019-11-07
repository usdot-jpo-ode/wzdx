lane_restrictions (New)
This table describes individual lanes within a road event.
This table is related to the lane table by the foreign key lane_id. For every record in the lane table there may exist one or more lane_info records.
Data Name	Data Type	Description	Conformance	Notes
lane_restriction_id	ID	Identifies the lane_info record	Required	Primary key
lane_id	ID	Identifies the lane to which a restriction info record is related.	Required	Foreign key
restriction_type	Enumeration;
Text	The type of restriction on the lane.	Optional	
restriction_value	Float	The measure of the restriction type	Optional	C.M. had this field as a float.  Is there an instance that it sill store something other than a number?
restriction_units	Enumeration;
Text	Units of measure for the restriction value	Conditional: required if  restriction_
value is not null	
