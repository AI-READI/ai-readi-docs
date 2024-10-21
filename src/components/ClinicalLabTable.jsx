/* eslint-disable react/button-has-type */
import React from 'react';
import FilterableTable from 'react-filterable-table';
// eslint-disable-next-line import/no-unresolved
import BrowserOnly from '@docusaurus/BrowserOnly';
import clinicalLabData from '../../docs/static/json/clinicalLabData.json';

export default function ClinicalLabTable() {
  const renderReferenceInterval = (props) => {
    const { value, record } = props;

    const isTable = record.table && record.tableName;

    return !isTable ? (
      <span>{value}</span>
    ) : (
      <div>
        <span>See table below called </span>
        <a href={`/docs/1/dataset/clinical-data/clinical-lab-tests/#${record.table}`}>
          {record.tableName}
        </a>
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
        <div className="filtered-table">
          <h1 className="header">Data Domain Table</h1>
          <FilterableTable
            className="filteredTable"
            fields={fields}
            pageSize={10}
            data={clinicalLabData}
            pageSizes={[10, 20, 28]}
            noRecordsMessage="No match found."
            noFilteredRecordsMessage="No match found."
            exactFilterable={false}
          />
        </div>
      )}
    </BrowserOnly>
  );
}
