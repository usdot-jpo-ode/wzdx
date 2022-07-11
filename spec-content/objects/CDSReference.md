# CDSReference Object
The `CDSReference` object describes a specific CDS curb_zone that is impacted by the work zone via an external reference to a Curb Data Specification [Curb API](https://github.com/openmobilityfoundation/curb-data-specification/tree/main/curbs#curb-data-specification-curbs-api) feed. This allows WZDx users to reference the Curbs API of CDS to see full details of the impact.

## Properties
Property Name | Data Type | Description | Conformance | Notes
--- | --- | --- | --- | ---
`cds_curbs_api` | URL | An identifer for the source of the requested CDS Curbs API. This MUST be a full HTTPS URL pointing to the curbs api which contains more information about the type of curb zone that is impacted. | Required | 
`cds_curb_zone_id` | String | The `id` of a CDS [curb_zone](https://github.com/openmobilityfoundation/curb-data-specification/tree/main/curbs#curb-zone) that is impacted by the work zone area. | Required |

## Used By
Property | Object
--- | ---
`curbs_impact` | [WorkZoneRoadEvent](/spec-content/objects/WorkZoneRoadEvent.md)
