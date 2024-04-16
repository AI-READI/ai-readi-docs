/* eslint-disable react/button-has-type */
import React from 'react';

// eslint-disable-next-line react/prop-types

function WearableGlucoseMonitor() {
  return (
    <html lang="en">
      <head>
        <style>{`
        .b2{border-bottom-style: hidden;}
         font-style: bold
        `}</style>
      </head>
      <body>
        <div className="relative mt-4 w-full">
          <table>
            <tr>
              <th> </th>
              <th> </th>
              <th> </th>
              <th> Description</th>
              <th> Example</th>
            </tr>
            <tr>
              <td>root</td>
              <td> header</td>
              <td> uuid</td>
              <td> Universally Unique IDentifier</td>
              <td>
                {' '}
                <q>AIREADI-1234</q>
              </td>
            </tr>
            <tr>
              <td> </td>
              <td> </td>
              <td> creation_date_time</td>
              <td> Time of CGM reading</td>
              <td>
                <q>2023-08-08T21:15:10+00:00</q>{' '}
              </td>
            </tr>
            <tr>
              <td> </td>
              <td> </td>
              <td>patient_id </td>
              <td> Identification number of patient</td>
              <td>
                {' '}
                <q>AIREADI-1234</q>
              </td>
            </tr>
            <tr>
              <td> </td>
              <td>schema_id </td>
              <td>namespace </td>
              <td>The namespace of the schema to disambiguate schemas with conflicting names </td>
              <td>
                {' '}
                <q>omh</q>
              </td>
            </tr>
            <tr>
              <td> </td>
              <td> </td>
              <td>name </td>
              <td>Name of schema </td>
              <td>
                <q>blood-glucose</q>{' '}
              </td>
            </tr>
            <tr>
              <td> </td>
              <td> </td>
              <td> version</td>
              <td> Version of schema</td>
              <td>3 </td>
            </tr>
            <tr>
              <td> </td>
              <td> modality</td>
              <td> </td>
              <td>
                {' '}
                This modality involves a small, wearable sensor that measures glucose levels in the
                interstitial fluid just beneath the skin
              </td>
              <td>
                {' '}
                <q>sensed</q>{' '}
              </td>
            </tr>
            <tr>
              <td> </td>
              <td>acquisition_rate </td>
              <td>number_of_times </td>
              <td> Frequency of reading in a specific time window</td>
              <td>1</td>
            </tr>
            <tr>
              <td rowSpan="2"> </td>
              <td rowSpan="2"> </td>
              <td> time_window / value</td>
              <td> Value of time window</td>
              <td>5</td>
            </tr>
            <tr>
              <td> time_window / unit </td>
              <td>Unit of time window </td>
              <td>
                {' '}
                <q>min</q>
              </td>
            </tr>
            <tr>
              <td> </td>
              <td>external_datasheets </td>
              <td>datasheet_type</td>
              <td rowSpan="2">
                The term <q>IRI </q>stands for Internationalized Resource Identifier, a unique
                sequence of characters used to identify a resource. In this context,
                <q>iri-of-cgm-device</q> serves as a placeholder for an IRI that would point to a
                datasheet or documentation about a CGM device on the AI-READI website, directing
                users to the site. We plan to update it with the actual URL in the next phase. It is
                important to note this is a placeholder, but its use can be extended to cover other
                datasheets, including those featuring AI algorithms. For more information, refer to
                the following documentation: IEEE 1752 Working Group CardioRespiratory slides.
              </td>
              <td>
                <q>source_device</q>{' '}
              </td>
            </tr>
            <tr>
              <td> </td>
              <td> </td>
              <td> datasheet_reference </td>
              <td>
                <q>iri-of-cgm-device</q>{' '}
              </td>
            </tr>
            <tr>
              <td> </td>
              <td>timezone* </td>
              <td> </td>
              <td>Participant’s time zone </td>
              <td>
                {' '}
                <q>Pst (pacific standard time zone)</q>
              </td>
            </tr>
            <tr>
              <td rowSpan="2"> body</td>
              <td rowSpan="2"> effective_time_frame</td>
              <td>
                time_interval <sub className="align-top">1</sub> / start_date_time{' '}
              </td>
              <td>Time of CGM reading </td>
              <td>
                <q>2023-08-08T21:15:10Z</q>
              </td>
            </tr>
            <tr>
              <td> time_interval / end_date_time </td>
              <td>Time of CGM reading </td>
              <td>
                <q>2023-08-08T21:15:10Z</q>{' '}
              </td>
            </tr>
            <tr>
              <td> </td>
              <td> </td>
              <td> event_type</td>
              <td>
                {' '}
                Estimated Glucose Value<sub className="align-top">2</sub>
              </td>
              <td>“EGV” </td>
            </tr>
            <tr>
              <td> </td>
              <td> </td>
              <td>source_service_id </td>
              <td>Glucose sensor ID </td>
              <td>
                <q>AB12345678</q>{' '}
              </td>
            </tr>
            <tr>
              <td> </td>
              <td>blood_glucose </td>
              <td> unit</td>
              <td> Unit of CGM reading</td>
              <td>
                {' '}
                <q>mg/dL</q>
              </td>
            </tr>

            <tr>
              <td> </td>
              <td> </td>
              <td> value**</td>
              <td> Value of CGM reading</td>
              <td> 138</td>
            </tr>
            <tr>
              <td> </td>
              <td>transmitter_time</td>
              <td> unit</td>
              <td>Unit of transmitter timeg</td>
              <td>
                {' '}
                <q>long integer</q>
              </td>
            </tr>
            <tr>
              <td> </td>
              <td> </td>
              <td>value </td>
              <td> Value of transmitter time</td>
              <td>7573</td>
            </tr>
            <tr>
              <td> </td>
              <td>transmitter_id</td>
              <td> </td>
              <td>Transmitter ID</td>
              <td>
                <q>123ABC</q>
              </td>
            </tr>
          </table>
          <p>
            <span className="text-sm font-bold">
              Time_interval<sub className="align-top">1</sub>
            </span>
            : The raw file contains singular timestamped entries, representing CGM readings at
            specific times. These readings were recorded at five-minute intervals increasing by 300
            seconds with each new entry. The format for CGM/Dexcom G6 incorporates both start and
            end times, which allows it to accommodate a wider range of devices and data types such
            as heart rate and steps. Given that each value corresponds to a specific datetime, the
            start and end times are identical.
          </p>
          <p>
            <span className="font-bold text-sm">
              EGV<sub className="align-top">2</sub>
            </span>
            : Estimated Glucose Value. An “EGV event” essentially captures any significant data
            point or occurrence tracked by the CGM system in relation to estimated glucose levels.
          </p>
          <p className="text-sm">
            *Note that the timestamps (start_date_time and end_date_time) are all in UTC but the
            “timezone” will allow you to convert UTC to the local timezone of the participant.
          </p>
          <p className="text-sm">
            **Note that Dexcom sensor values lower than 40 mg/dL and higher than 400 mg/mL. Values
            lower than 40 mg/dL will be denoted as “Low” and values higher than 400 mg/mL will be
            denoted as “High” in the json files.
          </p>
        </div>
      </body>
    </html>
  );
}

export default WearableGlucoseMonitor;
