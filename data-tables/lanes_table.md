lanes (New)
Optional

This table identifies and describes individual lanes within a road event.  

This table is related to the road_event table by the foreign key road_event_id.  For every record in the road_event table there may exist one or more lane_info records.

Data Name	Data Type	Description	Conformance	Notes
lane_id	ID	Identifies the lane_info record	Required	Primary key
road_event_id	ID	Identifies the road event to which a lane information is related.	Required	Foreign key
lane_edge_reference	Enumeration; Text	The roadside edge from which lane are assigned numbers.  	Required	Counting begins from the edge of the improved surface
lane_number	Non-negative Integer	The lane number.	Required	Assigned by counting from right or left edge of the improved surface.

Counting begins from the edge indicated in the lane_count_
reference field.

Useful for text to voice translation.
lane_status	Enumeration;
Text	Status of the lane for the travelling public	Required	Allowed values: open, closed, shift-left, shift-right
lane_type	Enumeration;
Text		Optional	
