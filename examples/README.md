# WZDx Example Feeds
This directory contains example GeoJSON documents from WZDx data feeds. The examples cover a range of common scenarios. There are examples for the `WorkZoneFeed`, `RoadRestrictionFeed`, and `DeviceFeed`, contained within the respective subdirectories.

## WorkZoneFeed Examples
The following `WorkZoneFeed` examples represent a variety of common scenarios when creating road events. Most of the examples are modeled after work zone scenarios used in [previous WZDx discussion](https://github.com/usdot-jpo-ode/jpo-wzdx/discussions/131). Optional fields are not included in all examples but represented at least once across the various examples. Each scenario is provided as a single GeoJSON file which may contain multiple work zones documenting differences in representing road events at varying levels of complexity. All example scenarios are provided for the `LineString` geometry type as well as one `MultiPoint` geometry type for scenario 1.

Below is a summary of each of the example WZDx feeds and detailed differences for each of the road events:

### Scenario 1  - Simple Work Zone
Scenario 1 ([LineString Example](/examples/WorkZoneFeed/scenario1_simple_linestring_example.geojson) or [MultiPoint Example](/examples/WorkZoneFeed/scenario1_simple_multipoint_example.geojson)) is based on the same numbered annotated work zones in [Discussion Topic 131](https://github.com/usdot-jpo-ode/jpo-wzdx/discussions/131) with a single lane closed on a multi-lane facility.

- First work zone is single direction, single event, with no lane-level information (ID: `71234`).
- Second work zone is single direction, single event, with detailed lane information (ID: `WDM-58493-NB`).
- Third work zone is a single direction, three sequential events, with detailed lane information. This work zone demonstrates the use of the `related_road_events` property. The [RelatedRoadEventTypes](/spec-content/enumerated-types/RelatedRoadEventType.md) values of `first-road-event` and `next-road-event` are used to indiciate the order of the road events. (IDs: `65773-1`, `65773-2`, `65773-3`).

### Scenario 2 - Lane Shift (simple scenario)
The [Scenario 2 Example](/examples/WorkZoneFeed/scenario2_laneshift_linestring_example.geojson) is based on the same numbered annotated work zones in [Discussion Topic 131](https://github.com/usdot-jpo-ode/jpo-wzdx/discussions/131) which keeps all lanes open but shifts them resulting in both shoulders being closed on a multi-lane facility.

- Single work zone with lane shift in the detailed lane information showing use of verified location and start time. ("id": `7733`).

### Scenario 3 - Shoulder Closure (bidirectional work zone)
The [Scenario 3 Example](/examples/WorkZoneFeed/scenario3_shoulder_bidirectional_linestring_example.geojson) is based on the same numbered annotated work zones in [Discussion Topic 131](https://github.com/usdot-jpo-ode/jpo-wzdx/discussions/131) which closes the shoulder in a single direction on an undivided roadway.

- Single work zone represented by two road events (IDs: `121388-EB`, `121388-WB`), one in direction of shoulder closure and second in opposite direction.
- Demonstrates the use of `restrictions` for the event as well as individual lanes
- Demonstrates the use of `related_road_events` to show the road events in each direction are related to each other but not in sequence using the [RelatedRoadEventTypes](/spec-content/enumerated-types/RelatedRoadEventType.md) value of `related-work-zone`

### Scenario 4 - Road Closure with Detour on Arterial
The [Scenario 4 Example](/examples/WorkZoneFeed/scenario4_detour_linestring_example.geojson) is based on the same numbered annotated work zones in [Discussion Topic 131](https://github.com/usdot-jpo-ode/jpo-wzdx/discussions/131) which has an associated detour for a road closure.  The example is slightly modified for use on a multi-lane facility.

- Single work zone in one direction represented by a single road event (ID: `67890`), with a detour.
- Showing use of `related_road_events` to connect the detour road events (IDs: `67890-detour1`, `67890-detour2`, `67890-detour3`) to the work zone using the [RelatedRoadEventTypes](/spec-content/enumerated-types/RelatedRoadEventType.md) values of `related-work-zone` and `related-detour`
- Also uses `related_road_events` to represent the sequence of the three detour road events.
- Shows the use of both the work zone and detour road event objects in the same feed.

### Scenario 5 - Recurring Work Zone
The [Scenario 5 Example](/examples/WorkZoneFeed/scenario5_recurring_linestring_example.geojson)) is based on the same numbered annotated work zones in [Discussion Topic 131](https://github.com/usdot-jpo-ode/jpo-wzdx/discussions/131) assuming that it is just a single lane closure but is recurring over multiple days.

- Simple work zone but with a recurring component.
- Five road events: an `active` (day 1, ID: `PLK01012016-Day1`) event and four additional events (IDs: `PLK01012016-Day2`, `PLK01012016-Day3`, `PLK01012016-Day4`, `PLK01012016-Day5`) for later dates with a pending status.
- The `active` work zone event demonstrates value of verified location and time.
- The `related_road_events` property is used to show all road events are related and the order of events using the [RelatedRoadEventTypes](/spec-content/enumerated-types/RelatedRoadEventType.md) values of `first-occurrence` and `next-occurrence`

### Local Access Only (bidirectional work zone)
The [local access only example](/examples/WorkZoneFeed/local_access_only_bidirectional_linestring_example.geojson) shows a basic work zone that keeps all lanes open but places restrictions to only local traffic.

- Single work zone on a bidirectional roadwith with impact to both directions, represented by two road events (IDs: `WZ389-NB`, `WZ389-SB`), one for each direction.
- Uses `local-access-only` [RestrictionType](/spec-content/enumerated-types/RestrictionType.md).
- One road event shows basic details (not lane-level), while the opposite direction road event shows detailed lane information. The detailed lane information also includes a bike lane for reference.

## DeviceFeed Examples
The following example `DeviceFeed`s are provided:

1. [Arrow Board "ok" Example](/examples/DeviceFeed/arrow_board_ok_example.geojson): A simple feed that includes a single arrow board with an `ok` status and several optional properties provided.
2. [Camera "error" Example](/examples/DeviceFeed/camera_error_example.geojson): A simple feed that includes a single camera with an `error` status, no image data, associated `status_messages`, and a few optional properties provided.

## RoadRestrictionFeed Examples
The following example `RoadRestrictionFeed`s are provided:

### 1. Bridge Height Restriction
The [Bridge Height Restriction Example](/examples/RoadRestrictionFeed/bridge_height_restriction_linestring_example.geojson) shows the use of a [RestrictionRoadEvent](/spec-content/objects/RestrictionRoadEvent.md) to define a bridge clearance on a roadway.

- Defines three bridge height restrictions.
- Two restrictions (`id`s: `Bridge2`, `Bridge3`) are defined using only the required core details and basic event-level information.
- One restriction (`id`: `Bridge1`) also includes lane-level details with additional height restrictions values for individual lanes.
