class WZDxFeatureCollection {
    public type = "FeatureCollection";
    public features: WZDxFeature[];
    public metadata: Header;
}

class WZDxFeature {
    public type = "Feature";
    public geometry: {
        type: "LineString",
        coordinates: number[][]
    };
    public properties: WorkZoneActivity
}

class Header {
    public timeStampUpdate: string;
    public metadataUrl?: string;
    public versionNo?: string;
}

class WorkZoneActivity {
    public identifier: string;
    public subidentifier?: string;
    public StartDateTime: WZDxStartDateTime;
    public EndDateTime: WZDxEndDateTime;
    public BeginLocation: WZDxLocation;
    public EndLocation: WZDxLocation;
    public wzStatus?: "Planned" | "Pending" | "Active" | "Cancelled" | "Completed";
    public totalLanes?: number;
    public openLanes?: WZDxLaneType;
    public closedLanes: WZDxLaneType;
    public closedShoulders?: "outside"|"inside"|"both"|"none"|"unknown";
    public workersPresent?: boolean;
    public reducedSpdPosted?: boolean;
    public RoadRestrictions?: WZDxRoadRestrictions[];
    public description?: string;
    public issuingOrganization?: string;
    public timestampEventCreation?: string;
    public timeStampEventUpdate?: string;
}

class WZDxStartDateTime {
    public startDateTimeEstimated?: string;
    public startDateTimeVerified?: string;
    public startDateTimeCancelled?: string;
    public timeConfidenceLevel?: number;
}

class WZDxEndDateTime {
    public endDateTimeEstimated?: string;
    public endDateTimeVerified?: string;
    public endDateTimeCancelled?: string;
    public timeConfidenceLevel?: number;
}

class WZDxLocation {
    public roadName: string;
    public roadNum?: string;
    public roadDirection: string;
    public milepostEst?: string;
    public milepostVer?: string;
    public crossStreet?: string;
}

enum WZDxLaneType {
    "all",
    "left-lane",
    "right-lane",
    "left-2-lanes",
    "left-3-lanesright-2-lanes",
    "right-3-lanes",
    "center",
    "middle-lane",
    "right-turning-lane",
    "left-turning-lane",
    "right-exit-lane",
    "left-exit-lane",
    "right-merging-lane",
    "left-merging-lane",
    "right-exit-ramp",
    "right-second-exit-ramp",
    "right-entrance-ramp",
    "right-second-entrance-ramp",
    "left-exit-ramp",
    "left-second-exit-ramp",
    "left-entrance-ramp",
    "left-second-entrance-ramp",
    "sidewalk",
    "bike-lane",
    "none",
    "unknown",
    "alternate-flow-lane",
    "shift-left",
    "shift-right"
};

enum WZDxRoadRestrictions {	
    "no-trucks",
    "travel-peak-hours-only",
    "hov-3",
    "hov-2",
    "no-parking",
    "bike-lane",
    "ramp",
    "towing-prohibited",
    "permitted-oversize-loads",
    "prohibited (this applies to annual oversize load permits)",
    "reduced-width",
    "reduced-height",
    "reduced-length",
    "reduced-weight",
    "axle-load-limit",
    "gross-weight-limit",
}