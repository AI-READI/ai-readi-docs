/* eslint-disable react/button-has-type */
import React from 'react';

// eslint-disable-next-line react/prop-types

function Table1() {
  return (
    <html lang="en">
      <body>
        <div className="relative mt-4 w-full">
          <table>
            <tr>
              <th>Domain </th>
              <th>Variable </th>
              <th> Method</th>
              <th> Data Standard/ File Extension</th>
              <th> Open Source vs. Protected Database?</th>
            </tr>
            <tr>
              <td rowSpan="7">Activity Monitoring</td>
              <td> Heart Rate (bpm)</td>
              <td> device; Garmin Vivosmart 5</td>
              <td> .JSON</td>
              <td>Open Source </td>
            </tr>
            <tr>
              <td>Oxygen saturation (pulse ox) </td>
              <td> device; Garmin Vivosmart 5</td>
              <td> .JSON</td>
              <td> Open Source</td>
            </tr>
            <tr>
              <td> Physical Activity (steps)</td>
              <td> device; Garmin Vivosmart 5</td>
              <td>.JSON </td>
              <td> Open Source</td>
            </tr>
            <tr>
              <td>Physical Activity (calorie) </td>
              <td>device; Garmin Vivosmart 5 </td>
              <td>.JSON </td>
              <td> Open Source</td>
            </tr>
            <tr>
              <td>Respiratory Rate (bpm) </td>
              <td>device; Garmin Vivosmart 5 </td>
              <td>.JSON </td>
              <td>Open Source</td>
            </tr>
            <tr>
              <td> Sleep data (hrs)</td>
              <td> device; Garmin Vivosmart 5</td>
              <td>.JSON </td>
              <td>Open Source </td>
            </tr>
            <tr>
              <td>Stress (stress level) </td>
              <td> device; Garmin Vivosmart 5</td>
              <td>.JSON </td>
              <td> Open Source</td>
            </tr>
          </table>
        </div>
      </body>
    </html>
  );
}

export default Table1;
