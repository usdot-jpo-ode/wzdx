# CdsCurbZonesReference Object
The `CdsCurbZonesReference` object describes specific [Curb Zones](https://github.com/openmobilityfoundation/curb-data-specification/tree/main/curbs#curb-zone) that are impacted by a work zone via an external reference to the Curb Data Specification's [Curb API](https://github.com/openmobilityfoundation/curb-data-specification/tree/main/curbs#curb-data-specification-curbs-api).

Read more about the Open Mobility Foundation's [Curb Data Specification](https://www.openmobilityfoundation.org/about-cds).

## Properties
Property Name | Data Type | Description | Conformance | Notes
--- | --- | --- | --- | ---
`cds_curbs_api_url` | `url` | An identifer for the source of the requested CDS Curbs API. This MUST be a full HTTPS URL pointing to the main curbs API which contains more information about the type of curb zone that is impacted. A url for each curb zone is not required.| Required | 
`cds_curb_zones_id` | Array | A list of [CDS Curb Zone](https://github.com/openmobilityfoundation/curb-data-specification/tree/main/curbs#curb-zone) `id`s. | Required |

## Used By
Property | Object
--- | ---
`impacted_cds_curb_zones` | [WorkZoneRoadEvent](/spec-content/objects/WorkZoneRoadEvent.md)
