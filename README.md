### Work Zone Data Exchange (WZDx)

# What is the WZDx Specification?
The Work Zone Data Exchange (WZDx) Specification enables infrastructure owners and operators (IOOs) to make harmonized work zone data available for third party use. The intent is to make travel on public roads safer and more efficient through ubiquitous access to data on work zone activity. Specifically, the project aims to get data on work zones in
to vehicles to help automated driving systems (ADS) and human drivers navigate more safely. 

# Why is WZDx being developed?
Improving access to work zone data is one of the top needs identified through the US Department of Transportation (USDOT) [Data for Automated Vehicle Integration (DAVI)](https://www.transportation.gov/av/data) effort. 

Up-to-date information about dynamic conditions occurring on roads – such as construction events – can help ADS and humans navigate safely and efficiently. Many IOOs maintain data on work zone activity. However, a lack of common data standards and convening mechanisms makes it difficult and costly for third parties – including original equipment manufacturers (OEMs) and navigation applications – to access and use these data across various jurisdictions. 

Thus, inspired by [GTFS](https://developers.google.com/transit/gtfs/reference/), USDOT launched WZDx to jumpstart the voluntary adoption of a basic work zone data specification through collaboration with data producers and data users. Longer term, the goal is to enable collaborative maintenance and expansion of the specification to meet the emerging needs of ADS.

## Who is involved in developing WZDx?
The [Federal Highway Administration (FHWA)](https://www.fhwa.dot.gov/) and [Intelligent Transportation Systems Joint Program Office (ITS JPO)](https://www.its.dot.gov/) co-led the early stages of the WZDx project and remain actively involved along with the [Bureau of Transportation Statistics (BTS)](https://www.bts.gov/), [Federal Motor Carrier Safety Administration (FMCSA)](https://www.fmcsa.dot.gov/), and others in the USDOT. Several data producers and data users voluntarily developed v1.1 of the specification in collaboration with USDOT, and have started to set up data feeds based on it. The Maricopa County Department of Transportation data feed can be found [here](https://api.mcdot-its.com/WZDx/Activity/Get), and the Iowa Department of Transportation data feed is located [here](https://data.iowadot.gov/datasets/iowa-work-zone-data-exchange-wzdx).

Going forward, the [Work Zone Data Working Group (WZDWG)](https://github.com/usdot-jpo-ode/jpo-wzdx/wiki ), established under the Federal Geographic Data Committee (FGDC) Transportation Subcommittee (TSC) will maintain the specification with the goal of publishing incremental updates to refine the features, attributes, and vocabulary needed to model work zone activity data. Currently, the WZDWG’s priority is to update WZDx v1.1, developing version 2.0 of the specification based on lessons learned from v1.1 and new insights from the user community. 

## How can I participate?
The WZDWG welcomes feedback and comments on the v1.1 specification. Comments can be made by posting a GitHub Issue, while suggested changes can be made using a pull request. Altrnatively, issues or suggested changes can be emailed to avdx@dot.gov. 

[v1.1](https://github.com/usdot-jpo-ode/jpo-wzdx/blob/master/full-spec/full-spec.md) is now available for IOOs to stand up data feeds. Once these data feeds are available, OEMs, navigation applications, and others can use the data. Below are steps for IOOs to get started. 

1. Continue reading about the [Purpose and Scope](#purpose-and-scope)
2. Learn about using GitHub as a [tool for collaboration and support](https://github.com/usdot-jpo-ode/jpo-wzdx/blob/master/create-feed/README.md#collaborate-via-github).
3. Use the [Data Tables](https://github.com/usdot-jpo-ode/jpo-wzdx/blob/master/data-tables/README.md) to understand the data components of the spec.
4. [Create your own feed](https://github.com/usdot-jpo-ode/jpo-wzdx/blob/master/create-feed/README.md) using the example feeds and learn about the supported data files.
5. Test your feed with [prototype WZDx v1.1 JSON Schema Spec Validation Tool](https://github.com/18F/usdot-jpo-ode-workzone-data-exchange/wiki).
6. Publish your feed, and tell us about via avdx@dot.gov. 

## How can I get help with implementation? 

This project will be updated with resources to help with implementation; in the meantime, please make a GitHub issue if you need help implementing the specification or have any questions.

To view a framework that can assist transportation agencies and the work zone stakeholder community in establishing a standard and consistent approach for collecting, organizing, and communicating Work Zone Activity Data to contractors, neighbor agencies, third-party data consumers, and other key stakeholders, see the [Work Zone Data Initiative’s (WZDI) Framework for Work Zone Activity Data Collection and Management](https://collaboration.fhwa.dot.gov/wzmp/Deliverables/WZDI%20Task%203%20Report%20-%20Framework%20v20190111.pdf). 

For more information on work zone-related data concepts driven by industry needs, please see [WZDI’s Work Zone Data Dictionary](https://collaboration.fhwa.dot.gov/wzmp/Data%20DictionaryDocuments/WZAD%20Data%20Dictionary_DRAFT.pdf) report. The document details terminology developed for Intelligent Transportation Systems (ITS) standards including data concepts, elements, frames, and schema.

## Purpose and Scope

This specification describes a set of “common core” data concepts, their meaning, and their enumeration (as applicable) in order to standardize a data feed specification to be used to publish work zone information.

For purposes of this effort, “common core” is defined as data elements needed for most (if not all) possible work zone data use cases. The data specification includes data elements that data producers (i.e., State transportation agencies and other IOOs) are already producing (“required”) as well as those that may not currently be produced (“optional”). This common core is designed to be extensible, meaning both required and optional data elements can be added to support specific use cases now and in the future.

The WZDx data specification will be incrementally enhanced to evolve into a data standard that supports advanced warnings to automated vehicles in and around work zones. The [full and current version, (WZDx v1.1)](https://github.com/usdot-jpo-ode/jpo-wzdx/blob/master/full-spec/full-spec.md) which is included in this repository, serves as a first step in this effort. It highlights common core elements which serve as a foundation for required data. This version addresses work zone information currently supported by existing data feeds published by public and private sector organizations. 

