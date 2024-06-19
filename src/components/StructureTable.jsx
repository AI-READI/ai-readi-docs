/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React from 'react';
import FilterableTable from 'react-filterable-table';
// eslint-disable-next-line import/no-unresolved
import BrowserOnly from '@docusaurus/BrowserOnly';

import MappingsJSON from '../../static/json/mappings.json';

export default function StructureTable() {
  const targetConceptIdRender = (props) => {
    const { value, record } = props;

    const isLocalConceptId = record.TARGET_CONCEPT_ID === record.LOCAL_CONCEPT_ID;

    return isLocalConceptId ? (
      <span>{value}</span>
    ) : (
      <a
        href={`https://athena.ohdsi.org/search-terms/terms/${props.value}`}
        target="_blank"
        rel="noreferrer"
      >
        {props.value}
      </a>
    );
  };

  // Fields to show in the table, and what object properties in the data they bind to
  const fields = [
    {
      name: 'Protected or open-source?',
      displayName: 'Protected or open-source?',
      inputFilterable: true,
    },
    {
      name: 'FORM_NAME',
      displayName: 'FORM_NAME',
      inputFilterable: true,
    },
    {
      name: 'FIELD_TYPE',
      displayName: 'FIELD_TYPE',
      inputFilterable: true,
    },
    {
      name: 'FIELD_ID',
      displayName: 'FIELD_ID',
      inputFilterable: true,
    },
    {
      name: 'FIELD_ID_NUM',
      displayName: 'FIELD_ ID_NUM',
      inputFilterable: true,
    },
    {
      name: 'SRC_CODE',
      displayName: 'SRC_CODE',
      inputFilterable: true,
    },
    {
      name: 'SRC_CODE_ID',
      displayName: 'SRC_CODE_ID',
      inputFilterable: true,
    },
    {
      name: 'SRC_CD_DESCRIPTION',
      displayName: 'SRC_CD_ DESCRIPTION',
      inputFilterable: true,
    },
    {
      name: 'Choices, Calculations, OR Slider Labels From REDCap CODEBOOK',
      displayName: 'Choices, Calculations, OR Slider Labels From REDCap CODEBOOK',
      inputFilterable: true,
    },
    {
      name: 'TARGET_CONCEPT_ID',
      displayName: 'TARGET_ CONCEPT_ID',
      inputFilterable: true,
      render: targetConceptIdRender,
    },
    {
      name: 'LOCAL_CONCEPT_ID',
      displayName: 'LOCAL _CONCEPT_ID',
      inputFilterable: true,
    },
    {
      name: 'TARGET_CONCEPT_NAME',
      displayName: 'TARGET_ CONCEPT_NAME',
      inputFilterable: true,
    },
    {
      name: 'TARGET_DOMAIN_ID',
      displayName: 'TARGET_ DOMAIN_ID',
      inputFilterable: true,
    },
    {
      name: 'TARGET_VOCABULARY_ID',
      displayName: 'TARGET_ VOCABULARY_ ID',
      inputFilterable: true,
    },
    {
      name: 'TARGET_CONCEPT_CLASS_ID',
      displayName: 'TARGET_ CONCEPT _CLASS_ID',
      inputFilterable: true,
    },
    {
      name: 'TARGET_STANDARD_CONCEPT',
      displayName: 'TARGET_ STANDARD _CONCEPT',
      inputFilterable: true,
    },
    {
      name: 'TARGET_CONCEPT_CODE',
      displayName: 'TARGET_ CONCEPT_CODE',
      inputFilterable: true,
    },
    {
      name: 'PREDICATE_ID',
      displayName: 'PREDICATE _ID',
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
          <h1 className="header">OMOP Mapping Table</h1>
          <FilterableTable
            className="filteredTable"
            initialSort="Data Element"
            data={MappingsJSON}
            fields={fields}
            noRecordsMessage="No match found."
            noFilteredRecordsMessage="No match found."
            pageSizes={[10, 30, 50, 100, 1781]}
            pageSize={10}
          />
        </div>
      )}
    </BrowserOnly>
  );
}
