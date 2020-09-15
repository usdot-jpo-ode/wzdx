# Example Work Zone Scenarios
The following are example work zone scenarios that have been annotated by the Specification Update Subgroup and Technical Assistance Subgroup. Throught it also contain examples of how to encode the events in a GeoJSON file.

## Scenario 1: Simple Workzone
![Scenario:Simple Work Zone](/images/simple_work_zone.png)

```
"lanes": [  
	{  
		"order": 1,
		"lane_number": 1,  
		"status": "open",  
		"type": "left-lane",  
	},  
	{  
		"order": "2",  
		"lane_number": 2,  
		"status": "closed",  
		"type": "right-lane"
	}  
]
```

## Scenario 2: Lane Shift (simple case)
![Scenario:Lane Shift (simple case)](/images/lane_shift.png)

### Event 1
```
"lanes": [  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 1,  
		"lane_status": “closed",  
		"lane_type": "left-shoulder",  
	},  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 2,  
		"lane_status": “open",  
		"lane_type": “left-lane"  
	},  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 3,  
		"lane_status": “open",  
		"lane_type": “middle-lane"  
	},  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 4,  
		"lane_status": “open",  
		"lane_type": "right-lane"  
	},  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 5,  
		"lane_status": “open",  
		"lane_type": "right-shoulder"  
	}  
  ]
```  
  ### Event 2
```
"lanes": [  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 1,  
		"lane_status": “closed",  
		"lane_type": "left-shoulder",  
	},  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 2,  
		"lane_status": “closed",  
		"lane_type": “left-lane"  
	},  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 3,  
		"lane_status": “open",  
		"lane_type": “left-lane"  
	},  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 4,  
		"lane_status": “open",  
		"lane_type": “middle-lane"  
	},  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 5,  
		"lane_status": “open",  
		"lane_type": “right-lane"  
	}  
]  
```
## Scenario 3: Shoulder Closure
![Scenario:Shoulder Closure](/images/shoulder_closure.png)

### Event 1
```
"lanes": [  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 1,  
		"lane_status": “closed",  
		"lane_type": “left-lane",  
	},  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 2,  
		"lane_status": “open",  
		"lane_type": “right-lane"  
	},  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 3,  
		"lane_status": “closed",  
		"lane_type": “right-shoulder"  
	}  
]
```
### Event 2
```
"lanes": [  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 1,  
		"lane_status": “closed",  
		"lane_type": “left-lane",  
	},  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 2,  
		"lane_status": “open",  
		"lane_type": “right-lane”  
	},  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 3,  
		"lane_status": “open",  
		"lane_type": “right-shoulder"  
	}  
]  
```
## Scenario 4: Road Closure with Detour on Arterial
![Scenario:Road Closure with Detour on Arterial](/images/closure_with_detour.png)

## Scenario 5: Work Zone with Bridge Work Overhead
![Scenario:Work Zone with Bridge Work Overhead](/images/overhead_bridge_work.png)

## Scenario 6: Closure of two lanes on divided roadway (short section where two lane are open)
![Scenario:Closure of two lanes on divided roadway (short section where two lane are open)](/images/cascading_closure.png)
```
"lanes": [  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 1,  
		"lane_status": “closed",  
		"lane_type": “left-lane",  
	},  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 2,  
		"lane_status": “closed",  
		"lane_type": “middle-lane"  
	},  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 3,  
		"lane_status": “open",  
		"lane_type": “right-lane"  
	}
]
```
## Scenario 7: Mobile Work Zone
![Scenario:Mobile Work Zone](/images/mobile_work_zone.png)
```
"lanes": [  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 1,  
		"lane_status": “closed",  
		"lane_type": "left-shoulder",  
	},  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 2,  
		"lane_status": “closed",  
		"lane_type": “left-lane"  
	},  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 3,  
		"lane_status": “open",  
		"lane_type": “middle-lane"  
	},  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 4,  
		"lane_status": “open",  
		"lane_type": "right-lane"  
	},  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 5,  
		"lane_status": “open",  
		"lane_type": "right-shoulder"  
	}  
]
```
## Scenario 8: Two Activities (mainline and ramp/merging lane)
![Scenario:Two Activities (mainline and ramp/merging lane)](/images/mainline_and_ramp.png)

### Event 1
```
"lanes": [  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 1,  
		"lane_status": “open",  
		"lane_type": "left-shoulder",  
	},  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 2,  
		"lane_status": “open",  
		"lane_type": “left-lane"  
	},  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 3,  
		"lane_status": “closed",  
		"lane_type": “right-lane"  
	},  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 4,  
		"lane_status": “closed",  
		"lane_type": "right-shoulder"  
	}  
]  
```
### Event 2
```
"lanes": [  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 1,  
		"lane_status": “open",  
		"lane_type": "left-shoulder",  
	},  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 2,  
		"lane_status": “open",  
		"lane_type": “left-lane"  
	},  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 3,  
		"lane_status": “closed",  
		"lane_type": “middle-lane"  
	},  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 4,  
		"lane_status": “open",  
		"lane_type": “right-lane"  
	},  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 5,  
		"lane_status": “open",  
		"lane_type": “right-shoulder”  
	}  
]  
```

## Scenario 9: Complex Work Zone with Ramp
![Scenario:Complex Work Zone with Ramp](/images/complex_with_ramp.png)

### Event 1
```
"lanes": [  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 1,  
		"lane_status": “open",  
		"lane_type": "left-shoulder",  
	},  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 2,  
		"lane_status": “open",  
		"lane_type": “left-lane"  
	},  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 3,  
		"lane_status": “closed",  
		"lane_type": “right-lane"  
	},  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 4,  
		"lane_status": “closed",  
		"lane_type": "right-shoulder"  
	}  
]
```
### Event 2
```
"lanes": [  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 1,  
		"lane_status": “open",  
		"lane_type": "left-shoulder",  
	},  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 2,  
		"lane_status": “open",  
		"lane_type": “left-lane"  
	},  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 3,  
		"lane_status": “closed",  
		"lane_type": “middle-lane"  
	},  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 4,  
		"lane_status": “open",  
		"lane_type": “right-lane"  
	},  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 5,  
		"lane_status": “open",  
		"lane_type": “right-shoulder”  
	}  
]
```  
  ### Event 3
```
"lanes": [  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 1,  
		"lane_status": “open",  
		"lane_type": "left-shoulder",  
	},  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 2,  
		"lane_status": “open",  
		"lane_type": “left-lane"  
	},  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 3,  
		"lane_status": “closed",  
		"lane_type": “middle-lane"  
	},  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 4,  
		"lane_status": “open",  
		"lane_type": “right-lane"  
	},  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 5,  
		"lane_status": “closed",  
		"lane_type": “right-shoulder”  
	}  
]
```
### Event 4
```
"lanes": [  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 1,  
		"lane_status": “open",  
		"lane_type": "left-shoulder",  
	},  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 2,  
		"lane_status": “open",  
		"lane_type": “left-lane"  
	},  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 3,  
		"lane_status": “open",  
		"lane_type": “middle-lane"  
	},  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 4,  
		"lane_status": “closed",  
		"lane_type": “right-lane"  
	},  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 5,  
		"lane_status": “closed",  
		"lane_type": “right-shoulder”  
	}  
]
```
### Event 5
```
"lanes": [  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 1,  
		"lane_status": “open",  
		"lane_type": "left-shoulder",  
	},  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 2,  
		"lane_status": “open",  
		"lane_type": “left-lane"  
	} ,  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 3,  
		"lane_status": “closed",  
		"lane_type": “middle-lane"  
	},  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 4,  
		"lane_status": “closed",  
		"lane_type": “right-lane"  
	},  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 5,  
		"lane_status": “closed",  
		"lane_type": “right-shoulder”  
	}  
]
```
## Scenario 10: Passing Zones
![Scenario:Passing Zones](/images/passing_zones.png)

### Event 1
```
"lanes": [  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 1,  
		"lane_status": “closed",  
		"lane_type": “left-lane",  
	},  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 2,  
		"lane_status": “open",  
		"lane_type": “right-lane"  
	}  
  ]
```  
  ### Event 2
```
"lanes": [  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 1,  
		"lane_status": “open",  
		"lane_type": “left-lane",  
	},  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 2,  
		"lane_status": “closed",  
		"lane_type": “right-lane”  
	}  
]
```
## Scenario 11: Cross Over (No Divided Highway)
![Scenario:Cross Over (No Divided Highway)](/images/cross_over.png)

### Event 1
```
"lanes": [  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 1,  
		"lane_status": “closed",  
		"lane_type": “left-lane",  
	},  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 2,  
		"lane_status": “open",  
		"lane_type": “right-lane"  
	}  
]
```  
  ### Event 2
  ```
"lanes": [  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 1,  
		"lane_status": “open",  
		"lane_type": “left-lane",  
	},  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 2,  
		"lane_status": “closed",  
		"lane_type": “right-lane”  
	}  
]
```  
  ### Event 3
```  
"lanes": [  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 1,  
		"lane_status": “shift-left",  
		"lane_type": “left-lane",  
	},  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 2,  
		"lane_status": “closed",  
		"lane_type": “middle-lane”  
	},  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 3,  
		"lane_status": “closed",  
		"lane_type": “right-lane”  
	}  
]
```  
  ### Event 4
```  
"lanes": [  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 1,  
		"lane_status": “shift-right",  
		"lane_type": “left-lane",  
	},  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 2,  
		"lane_status": “closed",  
		"lane_type": “right-lane”  
	}  
]
```
## Scenario 12: Cross Over with Divided Highway
![Scenario:Cross Over with Divided Highway](/images/cross_over_with_divided_highway.png)

### Event 1
```
"lanes": [  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 1,  
		"lane_status": “closed",  
		"lane_type": “left-lane",  
	},  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 2,  
		"lane_status": “open",  
		"lane_type": “right-lane"  
	}  
  ]
```  
  ### Event 2
``` 
"lanes": [  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 1,  
		"lane_status": “open",  
		"lane_type": “left-lane",  
	},  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 2,  
		"lane_status": “closed",  
		"lane_type": “right-lane”  
	},  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 3,  
		"lane_status": “closed",  
		"lane_type": “right-shoulder”  
	}  
]
```
### Event 3
```
"lanes": [  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 1,  
		"lane_status": “shift-left",  
		"lane_type": “left-lane",  
	},  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 2,  
		"lane_status": “closed",  
		"lane_type": “right-lane”  
	},  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 3,  
		"lane_status": “closed",  
		"lane_type": “right-shoulder”  
	}  
]
 ``` 
  ### Event 4
``` 
"lanes": [  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 1,  
		"lane_status": “shift-right",  
		"lane_type": “left-lane",  
	},  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 2,  
		"lane_status": “closed",  
		"lane_type": “right-lane”  
	},  
	{  
		"lane_edge_reference": "left",  
		"lane_number": 3,  
		"lane_status": “closed",  
		"lane_type": “right-shoulder”  
	}  
]
```


  



