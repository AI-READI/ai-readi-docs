/* eslint-disable react/button-has-type */
import React from 'react';
import FilterableTable from 'react-filterable-table';
// eslint-disable-next-line import/no-unresolved
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function Structure() {
  const data = [
    {
      DataElement: 'observation_id',
      Description: 'ID number associated with the MoCA test',
      Example: '114',
    },
    {
      DataElement: 'person_id',
      Description: 'Subject ID (serves as foreign key to the OMOP Persons table)',
      Example: '0000',
    },
    {
      DataElement: 'observation_concept_id',
      Description: 'OMOP Concept ID corresponding to the CS test',
      Example: '40767451 (for Form)',
    },
    {
      DataElement: 'observation_date',
      Description: 'Date of the CS test',
      Example: '2023-08-10',
    },
    {
      DataElement: 'observation_datetime',
      Description: 'Datetime of the CS test',
      Example: '2023-08-10 00:00:00',
    },
    {
      DataElement: 'observation_type_concept_id',
      Description: 'Concept ID for the type of measurement',
      Example: '32862',
    },
    {
      DataElement: 'value_as_number',
      Description: 'CS test output as a number',
      Example: 'blank',
    },
    {
      DataElement: 'value_as_string',
      Description: 'CS test output as a string',
      Example: 'R [right eye] OR L [left eye]',
    },
    {
      DataElement: 'value_as_concept_id',
      Description: 'Concept ID for observed value',
      Example: '45876703 [right eye] OR 45883829 [left eye]',
    },
    {
      DataElement: 'qualifier_concept_id',
      Description: 'Concept ID for additional information',
      Example: '0',
    },
    {
      DataElement: 'unit_concept_id',
      Description: 'Concept ID for the unit of measurement',
      Example: '0',
    },
    {
      DataElement: 'provider_id',
      Description: 'Identifier for healthcare provider',
      Example: '0',
    },
    {
      DataElement: 'visit_occurrence_id',
      Description: 'Identifier for participant visit',
      Example: '0',
    },
    {
      DataElement: 'visit_detail_id',
      Description: 'Additional visit details identifier',
      Example: '0',
    },
    {
      DataElement: 'observation_source_value',
      Description: 'Source data representing observation value',
      Example: 'OD Form 1 (eye) [right eye] OR OS Form 2 (eye) [left eye]',
    },
    {
      DataElement: 'observation_source_concept_id',
      Description: 'Concept representing observation_source_value',
      Example: '0',
    },
    {
      DataElement: 'unit_source_value',
      Description: 'Value in source data for measurement unit',
      Example: 'blank',
    },
    {
      DataElement: 'qualifier_source_value',
      Description: 'Value in source data for qualifier',
      Example: 'blank',
    },
    {
      DataElement: 'value_source_value',
      Description: 'Source data value',
      Example: 'blank',
    },
    {
      DataElement: 'observation_event_id',
      Description: 'Observation event identifier',
      Example: '0',
    },
    {
      DataElement: 'obs_event_field_concept_id',
      Description: 'Observation event field concept',
      Example: '0',
    },
  ];

  // Fields to show in the table, and what object properties in the data they bind to
  const fields = [
    { name: 'DataElement', displayName: 'Data Element', inputFilterable: true, sortable: true },
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
    <BrowserOnly>
      {() => (
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
      )}
    </BrowserOnly>
  );
}
