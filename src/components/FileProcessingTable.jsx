/* eslint-disable react/button-has-type */
import React from 'react';
import FilterableTable from 'react-filterable-table';
// eslint-disable-next-line import/no-unresolved
import BrowserOnly from '@docusaurus/BrowserOnly';
import fileProcessing from '../../static/json/fileProcesing.json';

export default function ClinicalLabTable() {
  // Fields to show in the table, and what object properties in the data they bind to
  const fields = [
    {
      name: 'Metadata Elements',
      displayName: 'Metadata Elements',
      inputFilterable: true,
    },
    {
      name: 'Description',
      displayName: 'Description',
      inputFilterable: true,
    },
    {
      name: 'Example',
      displayName: 'Example',
      inputFilterable: true,
    },
  ];

  return (
    <BrowserOnly>
      {() => (
        <div className="filtered-table">
          <h1 className="header">File Processing Table</h1>
          <FilterableTable
            className="filteredTable"
            fields={fields}
            pageSize={10}
            data={fileProcessing}
            pageSizes={[10, 20, 26]}
            noRecordsMessage="No match found."
            noFilteredRecordsMessage="No match found."
            exactFilterable={false}
          />
        </div>
      )}
    </BrowserOnly>
  );
}
