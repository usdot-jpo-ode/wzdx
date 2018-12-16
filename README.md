### Work Zone Data Exchange (WZDx)

# What is WZDx Specification?
The Work Zone Data Exchange (WZDx) Specification seeks to define a universal langauge to enable a critical mass of infrastructure owners and operators (IOOs) to collaboratively and voluntarily make harmonized work zone data available for third party use. This project is part of a larger [Data for Automated Vehicle Integration (DAVI)](https://www.transportation.gov/av/data) effort by USDOT to develop a common framework to facilitate mutually beneficial voluntary data exhanges to support and accelerate the safe, efficient, and accessible integration of Autonomous Vehicles (AVs) into the transportation system.


## WZDx Implementation Road Map
Up-to-date information about dynamic conditions occurring on roads – such as construction events – can help AVs navigate safely and efficiently. Many IOOs maintain data on work zone activity. However, a lack of common data standards and convening mechanisms makes it difficult and costly for third parties – including original equipment manufacturers (OEMs) and navigation applications – to access and use these data across various jurisdictions. 

In support of AV integration into our nation’s transportation system, [the Federal Highway Administration (FHWA)](https://www.fhwa.dot.gov/) and [USDOT’s Intelligent Transportation Systems Joint Program Office (ITS JPO)](https://www.its.dot.gov/) are co-leading the WZDx project. The effort seeks to jumpstart the voluntary adoption of a basic work zone data specification through collaboration with data producers and data users. WZDx will enable collaborative maintenance and expansion of the specification as operational and technological enhancements become available.

The department's implementation plan is two-fold:
1. **Support IOOs to stand up feeds using the common core:** Upon finalization of the first iteration of work zone data specification, data producers will utilize the specification to make their respective active work zone data feeds available for use by non-government users.
2.  **Support original equipmemt manufacturers (OEMs) & navigation application parties incorporate data:** These users will then use the harmonized data in a meaningful way. 

The following **data producers** and **data users** (i.e., the WZDx Working Group) voluntarily committed to participating and have been actively involved in the development of the standardized data specification:


| &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Data Producers &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;| &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Data Users &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; |
|     :------------:      |     :------------:      |
|     Pennsylvania Turnpike Authority<br>(also representing the Smart Belt Coalition)     |     HERE      |
|     Michigan Department of Transportation     |     Waze      |
|     Iowa Department of Transportation     |     Panasonic     |
|     Colorado Department of Transportation     |     Toyota      |
|     Kentucky Department of Transportation     |     Uber      |
|     iCone     |     Embark      |

## How do can I participate?
The first phase of this project is focused on specification implementation and therefore steps to collaborate are geared more towards IOOs. Support for other data producers and the third party data users will continue to develop in the subsequent phases of this effort. 

1. Continue reading about the [Purpose and Scope](#purpose-and-scope)
2. Learn about using GitHub as a tool for collaboration and support.
3. Use the [Data Tables](https://github.com/usdot-jpo-ode/jpo-wzdx/blob/master/data-tables/README.md) to understand the data components of the spec.
4. Create your own feed using the example feeds and learn about the supported data files.
5. Test your feed with validation tools.
6. Publish your feed.

## Purpose and Scope

This document was developed through collaboration with the WZDx Working Group to describe a set of “common core” data concepts, their meaning, and their enumeration (as applicable) in order to standardize a data feed specification to be used to publish work zone information.

For purposes of this effort, “common core” is defined as data elements needed for most (if not all) work zone data use cases that could possibly be defined. The data specification includes data elements that data producers (i.e., State transportation agencies and other IOOs) are already producing (“required”) as well as those that may not currently be produced (“optional”). This common core is also considered extensible, meaning both required and optional data elements can be added to support specific use cases now and in the future.

The WZDx data feed will be incrementally enhanced to evolve into a data feed that supports advanced warnings to automated vehicles in and around work zones. The [full and current version, (WZDx v1.1)](https://github.com/usdot-jpo-ode/jpo-wzdx/blob/master/full-spec/full-spec.md) which is included in this repository, will serve as a first step in this effort. It highlights common core elements which serve as a foundation for required data. This version of the data feed addresses data currently supported by existing data feeds published by public and private sector organizations.

