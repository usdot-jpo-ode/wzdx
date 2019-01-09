### Work Zone Data Exchange (WZDx)

# What is the WZDx Specification?
The Work Zone Data Exchange (WZDx) Specification enables infrastructure owners and operators (IOOs) to make harmonized work zone data available for third party use. The intent is to make travel on public roads safer and more efficient through ubiquitious access to data on work zone activity. Specifically, the project aims to get data on work zones into vehicles to help automated driving systems (ADS) and human drivers navigate more safely. 

# Why is WZDx being developed?
Improving access to work zone data is one of the top needs identified through the US Department of Transportation (USDOT) [Data for Automated Vehicle Integration (DAVI)](https://www.transportation.gov/av/data) effort. 

Up-to-date information about dynamic conditions occurring on roads – such as construction events – can help ADS and humans navigate safely and efficiently. Many IOOs maintain data on work zone activity. However, a lack of common data standards and convening mechanisms makes it difficult and costly for third parties – including original equipment manufacturers (OEMs) and navigation applications – to access and use these data across various jurisdictions. 

Thus, inspired by [GTFS](https://developers.google.com/transit/gtfs/reference/), USDOT launched WZDx to jumpstart the voluntary adoption of a basic work zone data specification through collaboration with data producers and data users. Longer term, the goal is to enable collaborative maintenance and expansion of the specification to meet the emerging needs of ADS.

## Who is involved in developing WZDx?
The [Federal Highway Administration (FHWA)](https://www.fhwa.dot.gov/) and [Intelligent Transportation Systems Joint Program Office (ITS JPO)](https://www.its.dot.gov/) are co-leading the early stages of the WZDx project. 

Several **data producers** and **data users** (i.e., the WZDx Working Group) voluntarily developed v1.1 of the specification in collaboration with USDOT. Below are the members of the WZDx Working Group:

| &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Data Producers &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;| &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Data Users &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; |
|     :------------:      |     :------------:      |
|     Pennsylvania Turnpike Authority<br>(also representing the Smart Belt Coalition)     |     HERE      |
|     Michigan Department of Transportation     |     Waze      |
|     Iowa Department of Transportation     |     Panasonic     |
|     Colorado Department of Transportation     |     Toyota      |
|     Kentucky Department of Transportation     |     Uber      |
|     iCone     |     Embark      |

## How can I participate?
USDOT welcomes feedback and comments on the v1.1 specification. Comments can be made by making an Github Issue, while suggested changes can be made using a pull request. 

[v1.1](https://github.com/usdot-jpo-ode/jpo-wzdx/blob/master/full-spec/full-spec.md) is now available for IOOs to stand up data feeds. Once these data feeds are available, OEMs, navigation applications, and others can use the data. Below are steps for IOOs to get started. 

1. Continue reading about the [Purpose and Scope](#purpose-and-scope)
2. Learn about using GitHub as a [tool for collaboration and support](https://github.com/usdot-jpo-ode/jpo-wzdx/blob/master/create-feed/README.md#collaborate-via-github).
3. Use the [Data Tables](https://github.com/usdot-jpo-ode/jpo-wzdx/blob/master/data-tables/README.md) to understand the data components of the spec.
4. [Create your own feed](https://github.com/usdot-jpo-ode/jpo-wzdx/blob/master/create-feed/README.md) using the example feeds and learn about the supported data files.
5. Test your feed with validation tools. **(TBA)**
6. Publish your feed. **(TBA)**

This project will be updated with resources to help with implementation; in the meantime, please make a GitHub issue if you need help implementing the specification.

## Purpose and Scope

This specification was developed through collaboration with the WZDx Working Group to describe a set of “common core” data concepts, their meaning, and their enumeration (as applicable) in order to standardize a data feed specification to be used to publish work zone information.

For purposes of this effort, “common core” is defined as data elements needed for most (if not all) possible work zone data use cases. The data specification includes data elements that data producers (i.e., State transportation agencies and other IOOs) are already producing (“required”) as well as those that may not currently be produced (“optional”). This common core is designed to be extensible, meaning both required and optional data elements can be added to support specific use cases now and in the future.

The WZDx data specification will be incrementally enhanced to evolve into a data standard that supports advanced warnings to automated vehicles in and around work zones. The [full and current version, (WZDx v1.1)](https://github.com/usdot-jpo-ode/jpo-wzdx/blob/master/full-spec/full-spec.md) which is included in this repository, will serve as a first step in this effort. It highlights common core elements which serve as a foundation for required data. This version addresses work zone information currently supported by existing data feeds published by public and private sector organizations.

