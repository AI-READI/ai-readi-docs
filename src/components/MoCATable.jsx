/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React from 'react';
import FilterableTable from 'react-filterable-table';
// eslint-disable-next-line import/no-unresolved
import BrowserOnly from '@docusaurus/BrowserOnly';

import MoCA from '../../docs/static/json/moCA.json';

export default function StructureTable() {
  // Fields to show in the table, and what object properties in the data they bind to
  const fields = [
    {
      name: 'Protected_or_open-source',
      displayName: 'Protected_or_open-source',
      inputFilterable: true,
    },
    {
      name: 'FORM_NAME',
      displayName: 'FORM_NAME',
      inputFilterable: true,
    },
    {
      name: 'MOCA_FILE_FIELDNAME',
      displayName: 'MOCA_FILE_FIELDNAME',
      inputFilterable: true,
    },
    {
      name: 'MOCA_FILE_FIELDNAME_NAMING_UNIT',
      displayName: 'MOCA_FILE_FIELDNAME_NAMING_UNIT',
      inputFilterable: true,
    },
    {
      name: 'SRC_CODE',
      displayName: 'SRC_CODE',
      inputFilterable: true,
    },
    {
      name: 'SRC_CODE_DESCRIPTION',
      displayName: 'SRC_CODE_DESCRIPTION',
      inputFilterable: true,
    },
    {
      name: 'UCUM_CONCEPT_ID',
      displayName: 'UCUM_CONCEPT_ID',
      inputFilterable: true,
    },
    {
      name: 'Example_Data',
      displayName: 'Example_Data',
      inputFilterable: true,
    },
    {
      name: 'Data_Type',
      displayName: 'Data_Type',
      inputFilterable: true,
    },
    {
      name: 'Value_Range',
      displayName: 'Value_Range',
      inputFilterable: true,
    },
    {
      name: 'Data_Description',
      displayName: 'Data_Description',
      inputFilterable: true,
    },
    {
      name: 'Equivalent_NDA_MOCA_element_name',
      displayName: 'Equivalent_NDA_MOCA_element_name',
      inputFilterable: true,
    },
    {
      name: 'TARGET_CONCEPT_ID',
      displayName: 'TARGET_CONCEPT_ID',
      inputFilterable: true,
    },
    {
      name: 'LOCAL_CONCEPT_ID',
      displayName: 'LOCAL_CONCEPT_ID',
      inputFilterable: true,
    },
    {
      name: 'TARGET_CONCEPT_NAME',
      displayName: 'TARGET_CONCEPT_NAME',
      inputFilterable: true,
    },
    {
      name: 'TARGET_DOMAIN_ID',
      displayName: 'TARGET_DOMAIN_ID',
      inputFilterable: true,
    },
    {
      name: 'TARGET_VOCABULARY_ID',
      displayName: 'TARGET_VOCABULARY_ID',
      inputFilterable: true,
    },
    {
      name: 'TARGET_CONCEPT_CLASS_ID',
      displayName: 'TARGET_CONCEPT_CLASS_ID',
      inputFilterable: true,
    },
    {
      name: 'TARGET_STANDARD_CONCEPT',
      displayName: 'TARGET_STANDARD_CONCEPT',
      inputFilterable: true,
    },
    {
      name: 'TARGET_CONCEPT_CODE',
      displayName: 'TARGET_CONCEPT_CODE',
      inputFilterable: true,
    },
    {
      name: 'PREDICATE_ID',
      displayName: 'PREDICATE_ID',
      inputFilterable: true,
    },
    {
      name: 'CONFIDENCE',
      displayName: 'CONFIDENCE',
      inputFilterable: true,
    },
  ];

  return (
    <BrowserOnly>
      {() => (
        <div className="filtered-table">
          <h1 className="header">MOCA Data Dictionary Table</h1>
          <FilterableTable
            className="filteredTable"
            initialSort="Data Element"
            data={MoCA}
            fields={fields}
            noRecordsMessage="No match found."
            noFilteredRecordsMessage="No match found."
            pageSizes={[10, 20, 36]}
            pageSize={10}
          />
        </div>
      )}
    </BrowserOnly>
  );
}
