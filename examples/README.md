# WZDx Example Feeds
This directory contains example GeoJSON documents from WZDx data feeds. The examples cover a range of common scenarios. There are examples for the Work Zone Feed and Device Feed contained within the respective subdirectories.

## Work Zone Feed Examples
The following WZDx Work Zone Feed examples represent a variety of common scenarios when creating road events. Optional fields are not included in all examples but represented at least once across the various examples. Each scenario is provided as a single GeoJSON file which may contain multiple work zones documenting differences in representing road events at varying levels of complexity. All example scenarios are provided for the `LineString` geometry type as well as one `MultiPoint` geometry type for scenario 1.

Note:  All annotated and original images used in the example scenarios below are located in the [images folder](/images/) which can be used for future updates. Additional scenario examples images used in a [previous WZDx discussion](https://github.com/usdot-jpo-ode/jpo-wzdx/discussions/131) are also located in the folder which may be used for future additional examples.

Below is a summary of each of the example WZDx feeds and detailed differences for each of the road events:

### Scenario 1  - Simple Work Zone
Scenario 1 ([LineString Example](/examples/WorkZoneFeed/scenario1_simple_linestring_example.geojson) or [MultiPoint Example](/examples/WorkZoneFeed/scenario1_simple_multipoint_example.geojson)) is based on the annotated image below with a single lane closed on a multi-lane facility. The image below also includes annotations in red identifying the number of road events and lane numbering (the actual geojson examples may differ slightly to show various examples of this type of closure).

![simple_work_zone](/images/channel_device_method_simple_annotated.png)

Below are notes for the Scenario 1 [LineString Example](/examples/WorkZoneFeed/scenario1_simple_linestring_example.geojson) and [MultiPoint Example](/examples/WorkZoneFeed/scenario1_simple_multipoint_example.geojson):
- First work zone is a single direction, single event, with no lane-level information ("id": `af2e3f51-611f-4ce0-9282-2f28ca68e62f`).
- Second work zone is a single direction, single event, with detailed lane information ("id": `edf2162b-1f5d-4ddd-a731-78fb81a22e6a`).
- Third work zone is a single direction, three sequential events, with detailed lane information. This work zone demonstrates the use of the `related_road_event` object, with [RelatedRoadEventTypes](/spec-content/enumerated-types/RelatedRoadEventType.md) of `next-road-event` and `first-road-event` used to indiciate the order of the road events. ("id": `6f57aded-7291-462e-9892-607b2b7d116c`, `8bfb0ce0-98cd-4e92-924d-f0a9d3a4ba8f`, `e6c2abad-04e2-41fd-bd66-4cc41e4bb6e7`). This example work zone also shows the use of `worker_presence` and how it can vary between road events for a single work zone.

### Scenario 2 - Lane Shift (simple scenario)
The [Scenario 2 Example](/examples/WorkZoneFeed/scenario2_laneshift_linestring_example.geojson) is based on the annotated image below which keeps all lanes open but shifts them resulting in both shoulders being closed on a multi-lane facility. The image below also includes annotations in red identifying the number of road events and lane numbering (the actual geojson examples may differ slightly to show various examples of this type of closure).

![shift_work_zone](/images/lane_shift_example_annotated.png)

Below are notes for the [Scenario 2 Example](/examples/WorkZoneFeed/scenario2_laneshift_linestring_example.geojson):
- Single work zone with lane shift in the detailed lane information showing use of verified location and start time. ("id": `85912735-7a36-45f5-b644-41b0203ae400`).

### Scenario 3 - Shoulder Closure (bidirectional work zone)
The [Scenario 3 Example](/examples/WorkZoneFeed/scenario3_shoulder_bidirectional_linestring_example.geojson) is based on the annotated image below which closes the shoulder in a single direction on an undivided roadway. The image below also includes annotations in red identifying the number of road events and lane numbering.

![shoulder_work_zone](/images/shoulder_closure_example_annotated.png)

Below are notes for the [Scenario 3 Example](/examples/WorkZoneFeed/scenario3_shoulder_bidirectional_linestring_example.geojson):
- Single work zone represented by two road events ("id": `a2183b6b-befa-48ac-b6b5-3ee5e8a806e9`, `62c5fa4b-11ee-45e6-a740-bc32d3b846e9`), one in direction of shoulder closure and second in opposite direction.
- Demonstrates the use of `restrictions` for the event as well as individual lanes
- Demonstrates the use of `related_road_events` to show the road events in each direction are related to each other but not in sequence using the [RelatedRoadEventTypes](/spec-content/enumerated-types/RelatedRoadEventType.md) value of `related-work-zone`

### Scenario 4 - Road Closure with Detour on Arterial
The [Scenario 4 Example](/examples/WorkZoneFeed/scenario4_detour_linestring_example.geojson) is based on the annotated image below which has an associated detour for a road closure.  The actual example is slightly modified for use on a multi-lane facility where a work zone road event has a corresponding detour.

![detour_work_zone](/images/work_zone_detour.png)

Below are notes for the [Scenario 4 Example](/examples/WorkZoneFeed/scenario4_detour_linestring_example.geojson):
- Single work zone in one direction represented by a single road event ("id": `a15f7570-b7e6-4367-8ad9-3a462eea65dd`) with a detour.
- Showing use of `related_road_events` to connect the detour road events ("id": `cf1092ba-3b8d-4e91-81ef-daa4a98662e1`, `4d151e7d-11d8-4b99-a192-51e189da0de7`, `9436226a-01b0-47ff-8a13-670e87549458`) to the work zone road event using the [RelatedRoadEventTypes](/spec-content/enumerated-types/RelatedRoadEventType.md) values of `related-work-zone` and `related-detour`
- Also uses `related_road_events` to represent the sequence of the three detour road events.
- Shows the use of both the work zone and detour road event objects in the same feed.

### Scenario 5 - Recurring Work Zone
The [Scenario 5 Example](/examples/WorkZoneFeed/scenario5_recurring_linestring_example.geojson) is based on a single lane closure but is recurring over multiple days. This example is intended to show how a recurring work zone such as night work can be represented.

Below are notes for the [Scenario 5 Example](/examples/WorkZoneFeed/scenario5_recurring_linestring_example.geojson):
- Simple work zone but with a recurring component.
- Four road events: assuming that the first day is currently an active event (day 1, "id": `a2100c5b-58b9-4593-992d-0795bafe3d8d`) and three additional events ("id": `d63ab07b-98e8-41bd-b4dd-557727320056`, `ff3f888f-7e11-4a5b-8c04-3182a459a756`, `b04c1df4-f9d0-4a63-995d-38bfd83931e9`) for later dates with a pending status.
- The `active` work zone event demonstrates value of verified location and time.
- The `related_road_events` property is used to show all road events are related and the order of events using the [RelatedRoadEventTypes](/spec-content/enumerated-types/RelatedRoadEventType.md) values of `first-occurrence` and `next-occurrence`

### Scenario 6 - Multi-lane closure
The [Scenario 6 example](/examples/WorkZoneFeed/scenario6_multi_lane_closure_linestring_example.geojson) is based on the annotated image below with a closure of two lanes on a divided roadway.   The image below also includes annotations in red identifying the number of road events and lane numbering. The scenario assumes that the section where two lanes are open (after the first taper) is short and part of the overall traffic control which does not need to be a seperate road event. 

![multi-lane work_zone](/images/multi_lane_closure_divided_example_annotated.png)

Below are notes for the [Scenario 6 example](/examples/WorkZoneFeed/scenario6_multi_lane_closure_linestring_example.geojson):
- Single work zone with a multi-lane closure ("id": `8fed746d-8f4f-4e0c-8d9b-fa4db7c3c2d8`). The road event includes the use of the [WorkerPresence Object](/spec-content/objects/WorkerPresence.md) as well as using the [Restriction Object](/spec-content/objects/Restriction.md) to show a width and weight limit restriction.

### Scenario 7 - Mobile Operation
The [Scenario 7 example](/examples/WorkZoneFeed/scenario7_mobileoperation_linestring_example.geojson) is based on the annotated image below for a mobile work zone operation.   The image below also includes annotations in red identifying the number of road events and lane numbering. The Scenario 7 example shows how the mobile operation related road event object can be used to relate an active mobile operation with the planned extents.

![mobile work_zone](/images/mobile_work_zone_example_annotated.png)

Below are notes for the [Scenario 7 Example](/examples/WorkZoneFeed/scenario7_mobileoperation_linestring_example.geojson):
- The first road event ("id": `01841847-3cda-4aa8-a283-1b4a11f31c08`) is the planned extent of a mobile operation.  The road event uses the [RelatedRoadEventType](/spec-content/enumerated-types/RelatedRoadEventType.md) value of `active-moving-operation` to relate to the active road event of the mobile operation. This road event also uses the `work_zone_type` of `planned-moving-area` to indicate it is the planned extents of a moving operation.
- The second road event ("id": `71a97769-6c61-41a8-bbfd-0d84e0d073e6`) is the active extent of a mobile operation.  This represents the current location of the mobile operation and is expected to move as the mobile operation changes locations.  The road event uses the [RelatedRoadEventType](/spec-content/enumerated-types/RelatedRoadEventType.md) value of `planned-moving-operation` to relate to the planned extent road event of the mobile operation. This road event also uses the `work_zone_type` of `moving` to indicate it is a road event that is actively moving.

### Scenario 8 - Local Access Only (bidirectional work zone)
The [Scenario 8 example](/examples/WorkZoneFeed/scenario8_local_access_only_bidirectional_linestring_example.geojson) shows a basic work zone that keeps all lanes open but places restrictions to only local traffic.

Below are notes for the [Scenario 8 Example](/examples/WorkZoneFeed/scenario8_local_access_only_bidirectional_linestring_example.geojson):
- Single work zone on a bidirectional road with with impact to both directions, represented by two road events ("id": `de3de57b-33fb-40e5-a6f2-a17828f82fb9`, `defbbd71-3f7e-4ddb-99de-86a48532ae57`), one for each direction.
- Uses `local-access-only` [RestrictionType](/spec-content/enumerated-types/RestrictionType.md).
- One road event shows basic details (not lane-level), while the opposite direction road event shows detailed lane information. The detailed lane information also includes a bike lane for reference.

## Device Feed Examples
The following example WZDx Device Feeds are provided:

1. [Arrow Board "ok" Example](/examples/DeviceFeed/arrow_board_ok_example.geojson): A simple feed that includes a single arrow board with an `ok` status and several optional properties provided.
2. [Camera "error" Example](/examples/DeviceFeed/camera_error_example.geojson): A simple feed that includes a single camera with an `error` status, no image data, associated `status_messages`, and a few optional properties provided.
