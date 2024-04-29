/* eslint-disable react/button-has-type */
import React from 'react';
import FilterableTable from 'react-filterable-table';

export default function ParticipantTable() {
  const data = [
    {
      Metadata: 'Participant_id',
      Description: 'Primary identifier of study participant',
      Example: '1234',
    },
    {
      Metadata: 'Glucose_filename',
      Description: 'Name of file ends with participant_id_DEX.json',
      Example: '1234_DEX.json',
    },
    {
      Metadata: 'Glucose_level_record_count',
      Description: 'Total number of CGM reading',
      Example: '2856',
    },
    {
      Metadata: 'Average_glucose_level_mg_dl',
      Description: 'Average level of glucose in mg/dl',
      Example: '123.304',
    },
    {
      Metadata: 'Glucose_sensor_sampling_duration_days',
      Description: 'Number of days of glucose sensor sampling',
      Example: '10',
    },
    {
      Metadata: 'Glucose_sensor_id',
      Description: 'The number printed on the back of each Dexcom sensor',
      Example: 'AB12345678',
    },
    {
      Metadata: 'Cgm_manufacturer_model',
      Description: "Manufacturer's model name of the device",
      Example: 'Dexcom G6',
    },
  ];

  // Fields to show in the table, and what object properties in the data they bind to
  const fields = [
    { name: 'Metadata', displayName: 'Metadata elements', inputFilterable: true, sortable: true },
    {
      name: 'Description',
      displayName: 'Description',
      inputFilterable: true,
      exactFilterable: true,
      sortable: true,
    },
    {
      name: 'Example',
      displayName: 'Example',
      inputFilterable: true,
      exactFilterable: true,
      sortable: true,
    },
  ];
  return (
    <html lang="en">
      <head>
        <style>
          {`
          .filterable-table-container{z-index:-1}
         .filterable-table-container .close.clear-filter,
          .form-control.pull-sm-right.pull-md-right.pull-lg-right,
           .text-center.text-muted.record-count
           {
         display: none;
         }
          .filterable-table-container
          .row.header-row{display:
          flex;
          padding:
          1rem 0 0 1rem;
          }
          .form-control.filter-input {
            font-size: medium;
            border-color: #dadde1;
            padding:0.5rem;
            min-width: 30rem;
            border-radius:4px
          }
      `}
        </style>
      </head>
      <body>
        <div className=" max-w-xl:max-h-[400px] overflow-auto">
          <FilterableTable
            namespace="People"
            initialSort="Metadata"
            fields={fields}
            data={data}
            noRecordsMessage="There are no people to display"
            noFilteredRecordsMessage="No participant match with the filter result."
            topPagerVisible={false}
            bottomPagerVisible={false}
          />
        </div>
      </body>
    </html>
  );
}
