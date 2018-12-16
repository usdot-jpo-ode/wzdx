# Data Frames
This section expands on the description of the data frames listed in the [Common Core Data Dictionary](https://github.com/usdot-jpo-ode/jpo-wzdx/blob/master/data-tables/common-core-dictionary.md) and identifies values for data elements that contain standardized enumerations.  Tables are included for the following data frames:
- [StartDateTime](#startdatetime)
- [EndDateTime](#enddatetime)    
- [BeginLocation](#beginlocation)
- [EndLocation](#endlocation)

## **StartDateTime**
Definition: The time and date when a work zone starts. All date/time formats shall use *ISO 8601 Data elements and interchange formats – Information interchange – Representation of dates and times* to represent date and time data elements.

#### Table 3. StartDateTime Data Frame Table
Data | Data Description | Conformance | Notes
---- | ---------------- | ----------- | -----
**startDateTime-est** | The planned time and date<br>when a work zone starts | Conditional<ul><li>startDateTime-est or</li><li>startDateTime-ver or</li><li>startDateTime-cancelled</li></ul> | |
**startDateTime-ver** | A verified time and date<br>when the work zone was<br>actually installed | Conditional<ul><li>startDateTime-est or</li><li>startDateTime-ver or</li><li>startDateTime-cancelled</li></ul> | |
**startDateTime-cancelled** | Cancellation of a planned start<br>time and date assocaited<br>with a work zone | Conditional<ul><li>startDateTime-est or</li><li>startDateTime-ver or</li><li>startDateTime-cancelled</li></ul> | |
**timeConfidenceLevel** | A confidence leve (in<br>percentage) of when the<br>work zone activities will<br>actually start | Optional | For future use

## EndDateTime
Definition: The time and date when a work zone ends. All date/time formats shall use *ISO 8601 Data elements and interchange formats – Information interchange – Representation of dates and times to* represent date and time data elements.

#### Table 4. EndDateTime Data Frame Table
Data | Data Description | Conformance | Notes
---- | ---------------- | ----------- | -----
**endDateTime-est** | The planned time and date<br>when a work zone ends | Conditional<ul><li>endDateTime-est or</li><li>endDateTime-ver or</li><li>endDateTime-cancelled</li></ul> | |
**endDateTime-ver** | A verified time and date<br>when the work zone was<br>actually ended | Conditional<ul><li>endDateTime-est or</li><li>endDateTime-ver or</li><li>endDateTime-cancelled</li></ul> | |
**endDateTime-cancelled** | Cancellation of a planned end <br>time and date assocaited<br>with a work zone | Conditional<ul><li>startDateTime-est or</li><li>startDateTime-ver or</li><li>startDateTime-cancelled</li></ul> | |
**timeConfidenceLevel** | A confidence leve (in<br>percentage) of when the<br>work zone activities will<br>actually start | Optional | For future use

## BeginLocation
Definition: The LOCATION when work zone impact begins along a single road in a single direction. Provide method for describing “impact” in metadata file (see Section 2.7).

#### Table 5. BeginLocation Data Frame Table
Data | Data Description | Conformance | Notes
---- | ---------------- | ----------- | -----
**roadName** | The name of the road on which<br>the work zone applies which is<br>known by the public | Required | Add a business rule that<br>pulls data from a specified<br>list or formal naming<br>conventions, for example,<br>(1) arterials comply with the<br>USPS Street Suffix Abbreviations (USPS Pub<br>28); (2) all Interstates will<br>be abbreviated as I-#, state<br>route with the<br>state abbreviation and then the number, etc. |
**roadNum** | The road number designated<br>by a jurisdiction such as a<br>county, state or interstate | Optional | Examples I-5, VT 133 |
**roadDirection** | The designated direction of the<br>roadName that is impacted by<br>the work zone activity | Required | Example North (for I-5 North) |
**latitude-est** | The estimated latitude along<br>the roadway where the work<br>zone area begins | Conditional<ul><li>latitude-est or</li><li>latitude-ver</li></ul> |  |
**latitude-ver** | A verified latitude<br>along the roadway where the work zone<br>area begins | Conditional<ul><li>latitude-est or</li><li>latitude-ver</li></ul> | Describe verification<br>method in metadata file
**longitude-est** | The estimated longitude along<br>the roadway where the<br>work zone area begins | Conditional<ul><li>longitude-est or</li><li>longitude-ver</li></ul> |  |
**longitude-ver** | A verified longitude along the<br>roadway where the work zone<br>area begins | Conditional<ul><li>longitude-est or</li><li>longitude-ver</li></ul> | Describe verification<br>method in metadata file
**milepost-est** | The estimated linear distance<br>measured against a milepost<br>marker along a roadway where<br>the work zone begins | Optional<br><br>If included only<br>one milepost<br>value (-est or -ver<br>is needed) | A milepost or mile marker is<br>a surveyed distance posted<br>along a roadway measuring<br>the length (in miles or tenth<br>of a mile) from the south<br>west to the north east. <br>These markers are typically<br>notated on State and local<br>government digital road<br>networks. Provide link to<br>description of milepost<br>method in metadata file<br>(see Section 2.7).
**milepost-ver** | An accurately linear distance<br>measured against a milepost<br>marker along a roadway where the<br>work zone begins | Optional<br><br>If included only<br>one milepost<br>value (-est or -ver<br>is needed) |  |
**crossStreet** | The cross street along the<br>roadway where the work zone<br>area begins | Conditional | Required when Road<br>Classification is arterial

## EndLocation
Definition: The LOCATION along a single road in a single direction when work zone impact ends and the traffic returns to normal. Provide method for describing “impact” in metadata file (see Section 2.7)

#### Table 6. EndLocation Data Frame Table
Data Name | Data Description | Conformance | Notes
--------- | ---------------- | ----------- | -----
**latitude-est** | The latitude along a roadway<br>where the work zone area ends<br>and the traffic returns to normal | Conditional<ul><li>latitude-est or</li><li>latitude-ver</li></ul> |  |
**latitude-ver** | A verified latitude along<br>the roadway where the work zone<br>area ends | Conditional<ul><li>latitude-est or</li><li>latitude-ver</li></ul> | Descibe verification method in metadata file
**longitude-est** | The longitude along a roadway<br>where the work zone area ends<br>and the traffic returns to normal | Required |  |
**longitude-ver** | A verified longitude along the<br>roadway where the work zone<br>area ends | Conditional<ul><li>longitude-est or</li><li>longitude-ver</li></ul> | Describe verification<br>method in metadata file
**milepost-est** | The measured linear distance<br>along a roadway where the<br>work zone begins | Optional<br><br>If included only<br>one milepost<br>value (-est or -ver<br>is needed) | Provide link to description<br>of milepost method in<br>metadata file (see Section 2.7)
**milepost-ver** | An accurately linear distance measured<br>against a milepost<br>marker along a roadway where<br>the work zone begins | Optional<br><br>If included only<br>one milepost<br>value (-est or -ver<br>is needed) |  |
**crossStreet** | The cross street along a<br>roadway where the work zone<br>area ends and the traffic returns<br>to normal | Conditional | Required when Road Classification is arterial
