/* eslint-disable react/button-has-type */
import React from 'react';

// eslint-disable-next-line react/prop-types

function Table3() {
  return (
    <html lang="en">
      <body>
        <div className="relative mt-4 w-full">
          <table>
            <tr>
              <th> </th>
              <th> </th>
              <th colSpan={2}> Data Element</th>
              <th> Description</th>
              <th> Example</th>
            </tr>
            <tr>
              <td rowSpan="4">root</td>
              <td rowSpan="4"> header</td>
              <td colSpan={2}> uuid</td>
              <td> Universally Unique IDentifier</td>
              <td>&quot;AIREADI-0000&quot;</td>
            </tr>
            <tr>
              <td colSpan={2}> creation_date_time</td>
              <td> JSON file creation date & time</td>
              <td> &quot;2024-02-26T12:56:46Z&quot;</td>
            </tr>
            <tr>
              <td colSpan={2}> user_id</td>
              <td> Identification number of participant</td>
              <td>&quot;AIREADI-0000&quot;</td>
            </tr>
            <tr>
              <td rowSpan={3}>schema_id</td>
              <td>namespace </td>
              <td>The namespace of the schema to disambiguate schemas with conflicting names</td>
              <td>&quot;omh&quot;</td>
            </tr>
            <tr>
              <td rowSpan={6}> body </td>
              <td rowSpan={6}>breathing </td>
              <td>name</td>
              <td>Name of measurement</td>
              <td>&quot;heart-rate&quot;</td>
            </tr>
            <tr>
              <td> version </td>
              <td>Version of the schema </td>
              <td>2.0</td>
            </tr>
            <tr>
              <td rowSpan={2}>oxygen_saturation </td>
              <td>value </td>
              <td> Recorded SpO2 value</td>
              <td>0</td>
            </tr>
            <tr>
              <td>unit</td>
              <td>Unit of SpO2 measurement</td>
              <td>&quot;%&quot;</td>
            </tr>
            <tr>
              <td>effective_time_frame</td>
              <td>date_time</td>
              <td>Time of SpO2 reading</td>
              <td>&quot;2023-08-30T16:11:00Z&quot;</td>
            </tr>
            <tr>
              <td colSpan={2}>measurement_method</td>
              <td>Method of measuring oxygen saturation</td>
              <td>&quot;pulse oximetry&quot;</td>
            </tr>
          </table>
        </div>
      </body>
    </html>
  );
}

export default Table3;