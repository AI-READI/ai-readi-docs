/* eslint-disable react/button-has-type */
import React from 'react';

// eslint-disable-next-line react/prop-types

function MonofilanmentTable() {
  return (
    <html lang="en">
      <head>
        <style>{`
        .b2{border-bottom-style: hidden;}

        `}</style>
      </head>
      <body>
        <div className="relative mt-4 w-full">
          <table>
            <thead>
              <tr>
                <th>Order of Testing</th>
                <th>Measurement conditions</th>
                <th>procedure_source_value: (measured value) </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="b2">1</td>
                <td>Right Foot: Number of correct responses</td>
                <td>Right Foot - Felt:(10.0)</td>
              </tr>
              <tr>
                <td> </td>
                <td>Right Foot: Number of sites tested</td>
                <td>Right Foot - Tested:(10.0)</td>
              </tr>
              <tr>
                <td className="b2">2</td>
                <td>Left Foot: Number of correct responses</td>
                <td>Left Foot - Felt:(8.0)</td>
              </tr>
              <tr>
                <td> </td>
                <td>Left Foot: Number of sites tested</td>
                <td>Left Foot - Tested:(10.0)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </body>
    </html>
  );
}

export default MonofilanmentTable;
