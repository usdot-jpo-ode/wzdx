# ArrowBoardPattern Enumerated Type
The ArrowBoardPattern enumerated type defines a list of options for the posted pattern on an [ArrowBoard](/spec-content/objects/ArrowBoard.md).

If the arrow board pattern does not exactly match one of the values described, the closest pattern should be used.

## Values
Value | Description
--- | ---
`blank` | No pattern; the board is not displaying anything.
`right-arrow-static` | Merge right represented by an arrow pattern (e.g. `-->`) that does not flash or move.
`right-arrow-flashing` | Merge right represented by an arrow pattern (e.g. `-->`) that flashes on/off.
`right-arrow-sequential` | Merge right represented by an arrow pattern (e.g. `-->`) that is displayed in a progressing sequence (e.g. `>` `->` `-->` or `-` `--` `-->`).
`right-chevrons-static` | Merge right represented by a pattern of chevrons (e.g. `>>>`) that does not flash or move.
`right-chevrons-flashing` | Merge right represented by a pattern of chevrons (e.g. `>>>`) that that flashes on/off.
`right-chevrons-sequential` | Merge right represented by a pattern of chevrons that is displayed in a progressing sequence.
`left-arrow-static` | Merge left represented by an arrow pattern (e.g. `<--`) that does not flash or move.
`left-arrow-flashing` | Merge left represented by an arrow pattern (e.g. `<--`) that flashes on/off.
`left-arrow-sequential` | Merge left represented by an arrow pattern (e.g. `<--`) that is displayed in a progressing sequence (e.g. `<` `<-` `<--` or `-` `--` `<--`).
`left-chevron-static` | Merge left represented by a pattern of chevrons (e.g. `<<<`) that does not flash or move.
`left-chevron-flashing` | Merge left represented by a pattern of chevrons (e.g. `<<<`) that that flashes on/off.
`left-chevron-sequential` | Merge left represented by a pattern of chevrons that is displayed in a progressing sequence.
`bidirectional-arrow-static` | Split (merge left or right) represented by arrows pointing both left and right (e.g. `<-->`) that does not flash or move. 
`bidirectional-arrow-flashing` | Split (merge left or right) represented by arrows pointing both left and right (e.g. `<-->`) that flashes on/off. 
`line-flashing` | A flashing line or bar (e.g. `---`), indicating warning/caution, not a merge.
`diamonds-alternating` | An alternating display of two diamond shapes (e.g. `◇ ◇`), indicating warning/caution, not a merge.
`four-corners-flashing` | Four dots on the corners of the board which flash, indiciating warning/caution, not a merge.
`unknown` | The arrow board pattern is not known.

## Used By
Property | Object
--- | ---
`pattern` | [ArrowBoard](/spec-content/objects/ArrowBoard.md)