/* eslint-disable react/button-has-type */
import React from 'react';
import FilterableTable from 'react-filterable-table';
// eslint-disable-next-line import/no-unresolved
import BrowserOnly from '@docusaurus/BrowserOnly';
import clinicalLabData from '../../static/json/clinicalLabData.json';

export default function ClinicalLabTable() {
  const renderReferenceInterval = (props) => {
    const { value, record } = props;

    const isTable = record.table && record.tableName;

    return !isTable ? (
      <span>{value}</span>
    ) : (
      <div>
        <span>See table below called </span>
        <a href={`#${record.table}`}>{record.tableName}</a>
      </div>
    );
  };

  // Fields to show in the table, and what object properties in the data they bind to
  const fields = [
    {
      name: 'Test',
      displayName: 'Test',
      inputFilterable: true,
      sortable: true,
    },
    {
      name: 'Lab Interpretation',
      displayName: 'Lab Interpretation',
      inputFilterable: true,
      sortable: true,
    },
    {
      name: 'Units',
      displayName: 'Units',
      inputFilterable: true,
      sortable: true,
    },
    {
      name: 'Unit Description',
      displayName: 'Unit Description',
      inputFilterable: true,
      sortable: true,
    },
    {
      name: 'Reference Interval',
      displayName: 'Reference Interval',
      inputFilterable: true,
      sortable: true,
      render: renderReferenceInterval,
    },
    {
      name: 'Collection Method',
      displayName: 'Collection Method',
      inputFilterable: true,
      sortable: true,
    },
    {
      name: 'LOINC',
      displayName: 'LOINC',
      inputFilterable: true,
      sortable: true,
    },
    {
      name: 'Reference',
      displayName: 'Reference',
      inputFilterable: true,
      sortable: true,
    },
    {
      name: 'measurement_source_value',
      displayName: 'Measurement Source Value',
      inputFilterable: true,
      sortable: true,
    },
  ];

  // const customRender = ({ rowIndex, field }) => {
  //   if (field === 'Reference Interval' && data[rowIndex][field] === 'See table below') {
  //     return <a href="#nt-probnp-reference-intervals">See table below</a>;
  //   }
  //   return data[rowIndex][field];
  // };

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
                fields={fields}
                pageSize={50}
                data={clinicalLabData}
                pageSizes={[40, 40, 30, 50]}
                noRecordsMessage="No match found."
                noFilteredRecordsMessage="No match found."
                topPagerVisible={false}
                bottomPagerVisible={false}
                exactFilterable={false}
              />
            </div>
          </body>
        </html>
      )}
    </BrowserOnly>
  );
}
