# WorkerPresenceConfidence Enumerated Type
A high-level description of a feed publisher's confidence in the reported value of `are_workers_present` on the [WorkerPresence](/spec-content/objects/WorkerPresence.md) object. 

## Values
Value | Description
--- | ---
`low` | Feed publisher is not confident in the reported value, such as when data is manually reported or not updated frequently. 
`medium` | Feed publisher is somewhat confident in the reported value, such as when the value is still manually reported but is being updated in a timely manner, or when worker presence is indirectly inferred from other equipment like smart arrow board.
`high` | Feed publisher is very confident in the reported value, such as when automated systems with GPS locations are used to generate the value.  

## Used By
Property | Object
--- | ---
`confidence` | [WorkerPresence](/spec-content/objects/WorkerPresence.md)
