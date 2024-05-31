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
      sortable: true,
    },
    {
      name: 'FORM_NAME',
      displayName: 'FORM_NAME',
      inputFilterable: true,
      sortable: true,
    },
    {
      name: 'FIELD_TYPE',
      displayName: 'FIELD_TYPE',
      inputFilterable: true,
      sortable: true,
    },
    {
      name: 'FIELD_ID',
      displayName: 'FIELD_ID',
      inputFilterable: true,
      sortable: true,
    },
    {
      name: 'FIELD_ID_NUM',
      displayName: 'FIELD_ID_NUM',
      inputFilterable: true,
      sortable: true,
    },
    {
      name: 'SRC_CODE',
      displayName: 'SRC_CODE',
      inputFilterable: true,
      sortable: true,
    },
    {
      name: 'SRC_CODE_ID',
      displayName: 'SRC_CODE_ID',
      inputFilterable: true,
      sortable: true,
    },
    {
      name: 'SRC_CD_DESCRIPTION',
      displayName: 'SRC_CD_DESCRIPTION',
      inputFilterable: true,
      sortable: true,
    },
    {
      name: 'Choices, Calculations, OR Slider Labels From REDCap CODEBOOK',
      displayName: 'Choices, Calculations, OR Slider Labels From REDCap CODEBOOK',
      inputFilterable: true,
      sortable: true,
    },
    {
      name: 'TARGET_CONCEPT_ID',
      displayName: 'TARGET_CONCEPT_ID',
      inputFilterable: true,
      sortable: true,
      render: targetConceptIdRender,
    },
    {
      name: 'LOCAL_CONCEPT_ID',
      displayName: 'LOCAL_CONCEPT_ID',
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

  return (
    <BrowserOnly>
      {() => (
        <html lang="en">
          <head>
            <style>
              {`
              .filterable-table-container{z-index:-1}
             .filterable-table-container .close.clear-filter
               {
             display: none;
             }
              .filterable-table-container
              .row.header-row:nth-child(1){display:
              flex;
              gap: 10px;
              padding-top: 2rem;
              }
              .form-control.filter-input,
              .form-control.pull-sm-right.pull-md-right.pull-lg-right
              {
                border: 1px solid rgb(218, 221, 225);
                font-size: medium;
                border-color: #dadde1;
                padding:0.5rem;
                min-width: 20rem;

                border-radius:4px
              }
              .form-control.pull-sm-right.pull-md-right.pull-lg-right {
               min-width: 10rem;
               height:40px;

              }
              .btn-next-page::marker,.btn-first-page::marker,
              .btn-numbered-page::marker,
              .btn-last-page::marker,
              .btn-prev-more::marker,
              .btn-next-more::marker, .btn-prev-page::marker {content: ''}

              .pagination, .filterable-table-container
              .row.header-row:nth-child(2){
              margin-top: 1rem;
                display: flex;
                justify-content: flex-start;}

              .pagination li a{
                  color: #777;
                  background-color: #fff;
                  border: 1px solid #ddd;
                  padding:10px;
              }
            .pagination li.btn-numbered-page.active a{
                background-color: #337ab7;
                border-color: #337ab7;}
        .pagination li.btn-numbered-page.active a{color:#fff;}
          .btn-first-page{height: 38px;}
        .row{margin:0;}
        .col-sm-3.filter-container{
        margin-right:8rem;}

        .text-center.text-muted.record-count{
        padding-top:10px;
        font-size:small;
        min-width:20rem;
        text-align:start}
        .col-sm-5.col-sm-push-4{
        padding-right:2rem;}

                .btn-next-page:hover a,.btn-first-page:hover a,
              .btn-numbered-page:hover a,
              .btn-last-page:hover a,
              .btn-prev-more:hover a,
              .btn-next-more:hover a, .btn-prev-page:hover a {
           background: #e0f2fe; cursor:pointer;  }
          `}
            </style>
          </head>
          <body>
            <h1 className="m-8">OMOP Mapping Table</h1>
            <div className="max-w-xl:max-h-[400px] m-8 gap-8 overflow-auto">
              <FilterableTable
                initialSort="Data Element"
                data={MappingsJSON}
                fields={fields}
                noRecordsMessage="No match found."
                noFilteredRecordsMessage="No match found."
                pageSizes={[30, 50, 100, 1781]}
                pageSize={30}
              />
            </div>
          </body>
        </html>
      )}
    </BrowserOnly>
  );
}
