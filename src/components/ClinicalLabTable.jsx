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
        <a href={`/docs/2/dataset/clinical-data/clinical-lab-tests/#${record.table}`}>
          {record.tableName}
        </a>
      </div>
    );
  };

  // Fields to show in the table, and what object properties in the data they bind to
  const fields = [
    {
      name: 'Protected_or_open-source',
      displayName: 'Protected_or_open',
      inputFilterable: true,
      sortable: true,
    },
    {
      name: 'Name',
      displayName: 'Name',
      inputFilterable: true,
      sortable: true,
    },
    {
      name: 'Sample_Source',
      displayName: 'Sample_Source',
      inputFilterable: true,
      sortable: true,
    },
    {
      name: 'Example_Data',
      displayName: 'Example_Data',
      inputFilterable: true,
      sortable: true,
    },
    {
      name: 'Data_Type',
      displayName: 'Data_Type',
      inputFilterable: true,
      sortable: true,
    },
    {
      name: 'Reference_Interval',
      displayName: 'Reference_Interval',
      inputFilterable: true,
      sortable: true,
      render: renderReferenceInterval,
    },

    {
      name: 'Units',
      displayName: 'Units',
      inputFilterable: true,
      sortable: true,
    },
    {
      name: 'TARGET_CONCEPT_ID',
      displayName: 'TARGET_CONCEPT_ID',
      inputFilterable: true,
      sortable: true,
    },
    {
      name: 'TARGET_CONCEPT_NAME',
      displayName: 'TARGET_CONCEPT_NAME',
      inputFilterable: true,
      sortable: true,
    },
    {
      name: 'TARGET_DOMAIN_ID',
      displayName: 'TARGET_DOMAIN_ID',
      inputFilterable: true,
      sortable: true,
    },
    {
      name: 'TARGET_VOCABULARY_ID',
      displayName: 'TARGET_VOCABULARY_ID',
      inputFilterable: true,
      sortable: true,
    },
    {
      name: 'TARGET_CONCEPT_CLASS_ID',
      displayName: 'TARGET_CONCEPT_CLASS_ID',
      inputFilterable: true,
      sortable: true,
    },
    {
      name: 'TARGET_STANDARD_CONCEPT',
      displayName: 'TARGET_STANDARD_CONCEPT',
      inputFilterable: true,
      sortable: true,
    },
    {
      name: 'TARGET_CONCEPT_CODE',
      displayName: 'TARGET_CONCEPT_CODE',
      inputFilterable: true,
      sortable: true,
    },
    {
      name: 'PREDICATE_ID',
      displayName: 'PREDICATE_ID',
      inputFilterable: true,
      sortable: true,
    },
    {
      name: 'CONFIDENCE',
      displayName: 'CONFIDENCE',
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
            pageSizes={[10, 20, 30]}
            noRecordsMessage="No match found."
            noFilteredRecordsMessage="No match found."
            exactFilterable={false}
          />
        </div>
      )}
    </BrowserOnly>
  );
}
