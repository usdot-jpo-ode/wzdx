# CdsCurbZoneReference Object
The `CdsCurbZoneReference` object describes a specific Curb Zone that is impacted by the work zone via an external reference to a Curb Data Specification [Curb API](https://github.com/openmobilityfoundation/curb-data-specification/tree/main/curbs#curb-data-specification-curbs-api) feed. This allows WZDx users to reference the Curbs API of CDS to see full details of the impact.

Read more about the Open Mobility Foundation's [Curb Data Specification](https://www.openmobilityfoundation.org/about-cds).

## Properties
Property Name | Data Type | Description | Conformance | Notes
--- | --- | --- | --- | ---
`cds_curbs_api_url` | `url` | An identifer for the source of the requested CDS Curbs API. This MUST be a full HTTPS URL pointing to the curbs API which contains more information about the type of curb zone that is impacted. | Required | 
`cds_curb_zone_id` | String | The `id` of a CDS [Curb Zone](https://github.com/openmobilityfoundation/curb-data-specification/tree/main/curbs#curb-zone). | Required |

## Used By
Property | Object
--- | ---
`impacted_cds_curb_zones` | [WorkZoneRoadEvent](/spec-content/objects/WorkZoneRoadEvent.md)
