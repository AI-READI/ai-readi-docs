/* eslint-disable react/button-has-type */
import React from 'react';

// eslint-disable-next-line react/prop-types

function Table4() {
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
              <td rowSpan={3}>schema_id</td>
              <td colSpan={2}>namespace </td>
              <td>The namespace of the schema to disambiguate schemas with
                conflicting names</td>
              <td>&quot;&quot;</td>

            </tr>
            <tr>
              <td rowSpan={7}> body </td>
              <td rowSpan={7}>activity </td>
              <td colSpan={2}>name</td>
              <td>Name of measurement</td>
              <td>&quot;&quot;</td>

            </tr>
            <tr>
              <td colSpan={2}> version </td>
              <td>Version of the schema </td>
              <td>&quot;&quot;</td>


            </tr>
            <tr>
              <td colSpan={3}>activity_name </td>
              <td>value </td>
              <td> Recorded SpO2 value</td>
            </tr>
              <tr>
                <td rowSpan={2}>base_movement_quantity</td>
                <td colSpan={2}>value</td>
                <td>Recorded value</td>
                <td>0</td>
              </tr>
            <tr>
                <td colSpan={2}>unit</td>
                <td>Unit of activity measurement</td>
                <td>&quot;steps&quot;</td>
              </tr>
            <tr>
                <td colSpan={2} rowSpan={2}>effective_time_frame/time_interval</td>
                <td>start_date_time</td>
                <td>Start time of recording</td>
                <td>&quot;2023-08-29 17:16:00&quot;</td>
              </tr>
            <tr>
                <td>end_date_time</td>
                <td>End time of recording</td>
                <td>&quot;2023-08-30 18:09:00&quot;</td>
              </tr>
          </table>


        </div>
      </body>
    </html>
  );
}

export default Table4;
