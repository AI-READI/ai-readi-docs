---
sidebar_position: 98
title: Changelog
---

All notable changes to this dataset will be documented in this file.

## [3.0.0] - 2025-11-01

### Identifier/Link

https://doi.org/10.60775/fairhub.3

## Added

- Data from 1213 additional participants has been added.
- Added 67 Redcap concepts
- Added 0 MoCA concepts
- Added 9 Labs concepts
- Added a “temp_Question_or_Answer” column in the combined REDCap and Labs mapping file to denote whether a mapping corresponded to a survey question or response option
- **Wearable**: We updated the header of all Garmin JSON files (heart_rate, oxygen_saturation, physical_activity, physical_activity_calories, respiratory_rate, sleep, stress) to include a new "timezone" field indicating the local time zone for data collection. IDs in the 1**_ and 4_** ranges are mapped to Pacific Time, and IDs in the 7\*\*\* ranges are mapped to Central Time.
- **Wearable and CGM**: We added sanity-check code to report the number of duplicates, the number of negative values, and potential formatting issues.

## Changed

- Changed 25 MoCA concepts
- Changed 111 Redcap concepts
  - Reverted hip and waist circumference to established SNOMED concepts
- Changed 0 MoCA concepts
- Changed 3 Labs concepts
- Combined the separate REDCap and Labs mapping files into one file
- Changed the name of the field participant_id to person_id in the manifest.tsv files to match the use of person_id in the OMOP files. Example notebooks were also updated.
- Cardiac_ecg:
  - Data previously assigned based on an error (e.g. a typo in the participant ID) has been re-assigned to the correct participant.
  - Data without recognizable signals and with an error message that all 12 leads are missing has been removed. Where available, an alternate ECG from the same participant is included.
- Environmental sensor:
  - Data previously released with poorly formatted numeric fields has been revised to omit the row containing the invalid data.
  - Data headers have been corrected to indicate that the units for the particle counts are in micrograms per cubic meter ug/m3.

## Removed

- Removed 12 Redcap concepts
- Removed 0 MoCA concepts
- Removed 0 Labs concepts

## [2.0.0] - 2024-11-08

### Identifier/Link

https://doi.org/10.60775/fairhub.2

### Added

- Data from additional 863 participants has been added.
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

## [1.0.0] - 2024-05-03

### Identifier/Link

https://doi.org/10.60775/fairhub.1

### Added

- Added data from pilot study (204 participants)
