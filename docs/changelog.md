---
sidebar_position: 98
title: Changelog
---

All notable changes to this documentation will be documented in this file.

## [2.0.0] - 2024-11-08

### Identifier/Link

https://doi.org/10.60775/fairhub.2

### Added

- OCT and OCTA scans from the Zeiss Cirrus device have been added.

### Changed

- v1.0.0 (pilot) data environmental sensor processing was performed manually. When upgrading to a consistent, automated process, the number of removed rows of data changed for 22 cases. More lines were removed in 18 cases comprising less than .1% of the data in each case. In 4 cases, up to 2% more rows were recovered and added to the dataset.
- Garmin:
  - Sleep:
    - We have applied a standardized extension to incorporate sleep stages (awake, light, rem, deep) in the data.
    - We updated the calories data tag from “duration” to “calories_value”:
      - `"calories_value": { "value": X, "unit": "kcal"}`
  - Manifest [needs to be updated in the documentations/website]:
    - The “physical_activity_num_records” field has been renamed to “physical_activity_num_days” and the values also update respectively.
    - Values for the “sleep_record_count” field have been updated to reflect the number of individual sleep stage records instead of the number of days.
    - Values for the “average_sleep_hours” field have been updated with respect to the following formula:
      - average_sleep_duration = total_sleep_duration / number_of_records
- CGM: To ensure consistency in the body format across all wearable data files, we have updated the structure of the JSON files as follows:
  - The "body" field now includes a section for continuous glucose monitoring (CGM) data:
    - "body": `{ "cgm": [ ...list of observations ] }`
- Labs OMOP mapping table replaced with updated version
  - 2 mapping rows updated (units changed to mg/DL for Urine creatinine and Urine Albumin)
  - 9 mapping rows added to add UCUM codes for units
- MOCA OMOP mapping table replaced with updated version
  - 7 mapping rows updated
- REDCap OMOP mapping table replaced with updated version
  - 344 mapping rows updated
  - “value_as_concept_id,” “qualifier_concept_id,” and “qualifier_source_value” columns added to mapping table

## [1.0.0] - 2024-04-01

### Added

- First version of the documentation associated with the AI-READI dataset v1.0
