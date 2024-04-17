/* eslint-disable react/button-has-type */
import React from 'react';

// eslint-disable-next-line react/prop-types

function Table7() {
 return (
    <html lang="en">
      <body>
        <div className="relative mt-4 w-full">
          <table>
            <tr>
              <th>  </th>
              <th> </th>
              <th colSpan={3}> Data Element</th>
              <th> Description</th>
              <th> Example</th>
            </tr>
            <tr>
              <td rowSpan="4">root</td>
              <td rowSpan="4"> header</td>
              <td colSpan={3}> uuid</td>
              <td> Universally Unique IDentifier</td>
              <td>&quot;AIREADI-0000&quot;</td>
            </tr>
            <tr>
              <td colSpan={3}> creation_date_time</td>
              <td> JSON file creation date & time</td>
              <td> &quot;2024-02-26T12:56:46Z&quot;</td>

            </tr>
            <tr>
              <td colSpan={3}> user_id</td>
              <td> Identification number of participant</td>
              <td>&quot;AIREADI-0000&quot;</td>

            </tr>
            <tr>
              <td rowSpan={3} colSpan={2}>schema_id</td>
              <td>namespace </td>
              <td>The namespace of the schema to disambiguate schemas with
                conflicting names</td>
              <td>&quot;omh&quot;</td>

            </tr>
            <tr>
              <td rowSpan={7}> body </td>
              <td rowSpan={7}>sleep </td>
              <td>name</td>
              <td>Name of measurement</td>
              <td>&quot;sleep-duration&quot;</td>

            </tr>
            <tr>
              <td> version </td>
              <td>Version of the schema </td>
              <td>2.0</td>


            </tr>
              <tr>
                <td rowSpan={2} colSpan={2}>sleep_duration</td>
                <td>value</td>
                <td>Recorded value</td>
                <td>0</td>
              </tr>
            <tr>
                <td>unit</td>
                <td>Unit of activity measurement</td>
                <td>&quot;h&quot;</td>
              </tr>
            <tr>
                <td rowSpan={2}>effective_time_frame </td>
                <td rowSpan={2}>time_interval</td>
                <td>start_date_time</td>
                <td>Start time of recording</td>
                <td>&quot;2023-08-20 17:16:00&quot;</td>
              </tr>
            <tr>
                <td>end_date_time</td>
                <td>End time of recording</td>
                <td>&quot;2023-08-21 16:09:00&quot;</td>
              </tr>
          </table>
        </div>
      </body>
    </html>
  );
}

export default Table7;
