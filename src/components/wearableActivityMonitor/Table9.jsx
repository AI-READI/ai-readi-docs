/* eslint-disable react/button-has-type */
import React from 'react';

// eslint-disable-next-line react/prop-types

function Table9() {
  return (
    <html lang="en">
      <body>
        <div className="relative mt-4 w-full">
          <h2>Metadata and Example Outputs </h2>
          <table>
            <tr>
              <th>Metadata Elements </th>
              <th> Description</th>
              <th>Example </th>
            </tr>

            <tr>
              <td> participant_id </td>
              <td>Identification number of study participant </td>
              <td> 0000</td>
            </tr>
            <tr>
              <td> wrist_worn_on</td>
              <td> Which wrist the fitness tracker was worn on by the participant </td>
              <td> Left</td>
            </tr>
            <tr>
              <td>dominant_hand </td>
              <td>Participants dominant hand</td>
              <td>Right hand</td>
            </tr>
            <tr>
              <td> heartrate_filename</td>
              <td>Filename containing participants heart rate data </td>
              <td>
                /wearable_activity_monitor/heart_rate /garmin_vivosmart5/1043/ 0000_heartrate.json{' '}
              </td>
            </tr>

            <tr>
              <td>heartrate_record_count </td>
              <td> Total number of heart rate measurements recorded</td>
              <td>15780 </td>
            </tr>
            <tr>
              <td> average_heartrate_bpm</td>
              <td>Average heart rate during the recording period </td>
              <td>79.35743649 </td>
            </tr>

            <tr>
              <td>oxygen_saturation_filename </td>
              <td>Filename containing participants oxygen saturation (SpO2) data</td>
              <td>
                {' '}
                /wearable_activity_monitor /oxygen_saturation/garmin_vivosmart5
                /0000/0000_oxygensaturation.json{' '}
              </td>
            </tr>
            <tr>
              <td>oxygen_saturation_record_count </td>
              <td>Total number of SpO2 measurements recorded</td>
              <td>2094 </td>
            </tr>
            <tr>
              <td> average_oxygen_saturation_pct</td>
              <td>Average SpO2 during the recording period </td>
              <td> 91.71%</td>
            </tr>

            <tr>
              <td>stress_level_filename </td>
              <td>Filename containing participants stress level data</td>
              <td> /wearable_activity_monitor/stress/ garmin_vivosmart5/0000/ 0000_stress.json </td>
            </tr>
            <tr>
              <td>stress_level_record_count </td>
              <td>Total number of stress level measurements recorded</td>
              <td>24659 </td>
            </tr>
            <tr>
              <td> average_stress_level </td>
              <td>Average stress levels during the recording period </td>
              <td>15.37 </td>
            </tr>
            <tr>
              <td>sleep_filename </td>
              <td>Filename containing participants sleep data</td>
              <td>/wearable_activity_monitor/sleep/ garmin_vivosmart5/0000/ 0000_sleep.json </td>
            </tr>
            <tr>
              <td>sleep_record_count </td>
              <td>Total number of sleep measurements recorded</td>
              <td>12 </td>
            </tr>
            <tr>
              <td> average_sleep_hours</td>
              <td>Average sleep duration during the recording period </td>
              <td> 7.25</td>
            </tr>
            <tr>
              <td>respiratory_rate_filename </td>
              <td>Filename containing participants respiratory rate data</td>
              <td>
                /wearable_activity_monitor/ respiratory_rate/garmin_vivosmart5/
                0000/0000_respiratoryrate.json{' '}
              </td>
            </tr>
            <tr>
              <td>respiratory_rate_record_count </td>
              <td>Total number of respiratory rate measurements recorded</td>
              <td>2164 </td>
            </tr>
            <tr>
              <td> average_respiratory_rate_bpm</td>
              <td>Average respiratory rate during the recording period </td>
              <td>27.02 </td>
            </tr>
            <tr>
              <td>physical_activity_filename </td>
              <td>Filename containing participants physical activity data</td>
              <td>
                /wearable_activity_monitor/physical_activity /garmin_vivosmart5/0000/
                0000_activity.json{' '}
              </td>
            </tr>
            <tr>
              <td>physical_activity_num_records </td>
              <td>Total number of measurements recorded</td>
              <td>5524 </td>
            </tr>
            <tr>
              <td> average_daily_activity</td>
              <td>Average number of steps during the recording period </td>
              <td>7897.21 </td>
            </tr>
            <tr>
              <td>active_calories_filename </td>
              <td>Filename containing participants active calories data</td>
              <td>
                /wearable_activity_monitor/ physical_activity_calorie/ garmin_vivosmart5/0000/
                0000_calorie.json{' '}
              </td>
            </tr>
            <tr>
              <td>active_calories_record_count </td>
              <td>Total number of calorie measurements recorded</td>
              <td> 1773 </td>
            </tr>
            <tr>
              <td> average_active_calories_kcal</td>
              <td>Average number of calories burned during the recording period </td>
              <td>194.11 </td>
            </tr>
            <tr>
              <td>sensor_sampling_duration_days </td>
              <td>How many days the participant wore the fitness tracker</td>
              <td>12</td>
            </tr>
            <tr>
              <td>fitness_manufacturer_model </td>
              <td>Model of the fitness tracker</td>
              <td>Garmin Vivosmart 5</td>
            </tr>
          </table>
        </div>
      </body>
    </html>
  );
}

export default Table9;
