# CdsCurbZonesReference Object
The `CdsCurbZonesReference` object describes specific [Curb Zones](https://github.com/openmobilityfoundation/curb-data-specification/tree/main/curbs#curb-zone) that are impacted by a work zone via an external reference to the Curb Data Specification's [Curb API](https://github.com/openmobilityfoundation/curb-data-specification/tree/main/curbs#curb-data-specification-curbs-api).

Read more about the Open Mobility Foundation's [Curb Data Specification](https://www.openmobilityfoundation.org/about-cds).

## Properties
Property Name | Data Type | Description | Conformance | Notes
--- | --- | --- | --- | ---
`cds_curb_zone_ids` | Array; [String] | A list of [CDS Curb Zone](https://github.com/openmobilityfoundation/curb-data-specification/tree/main/curbs#curb-zone) `id`s. | Required |
`cds_curbs_api_url` | String; uri | An identifier for the source of the requested CDS Curbs API. This MUST be a full HTTPS URL pointing to the main curbs API that contains detailed information about each curb zone identified in `cds_curb_zone_ids`.| Required |

## Used By
Property | Object
--- | ---
`impacted_cds_curb_zones` | [WorkZoneRoadEvent](/spec-content/objects/WorkZoneRoadEvent.md)
