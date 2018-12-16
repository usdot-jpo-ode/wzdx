# WZDx Header Data

This section includes a table of header information. Specifically, this includes data on the Work Zone Activity records and defines the content of the file and lists specific file attributes. It is considered supplemental data and is placed at the beginning of the block of data (i.e., the “body”) being stored and transmitted.

For the WZDx v1, the body of the data feed comes from the Common Core Data Dictionary.  The header data includes the data feed name, body name, and file header information.

- **Data Feed Name:** The data feed file name is “WZDX”. The extension used shall follow the encoding method, either XML or JSON. 
- **Data Feed Body:** The data feed is composed of one or more work zone activity records (named WorkZoneActivity) as defined in the Common Core Data Dictionary
- **File Header Information:** See table below

#### Table 2. WZDx Header Element Information
Data Element Name | Required | Description
----------------- | -------- | -----------
**timeStampUpdate** | yes | An element that designates the data and time<br>the data feed was last updated
**metadataURL** | no | A link to the metadata file (WZ-metadata.txt).<br>See Section 2.6 for a description of the file.
**versionNo** | no | The WZDx version number that was used to create the file

#### JSON Header Element Example
```json
{
   "WZDx": {
      "Header": {
         "timeStampUpdate": "2001-12-17T09:30:47Z",
         "metadataURL": "String",
         "versionNo": "String"
      }   
```

#### XML Header Element Example

```xml
<Header>
	<timeStampUpdate>2001-12-17T09:30:47Z</timeStampUpdate>
	<metadataURL>String</metadataURL>
	<versionNo>String</versionNo>
</Header>
```
