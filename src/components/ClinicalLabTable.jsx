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
          .btn-first-page{height: 38px;
              margin-top: var(--ifm-list-item-margin);}
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
            <div className=" max-w-xl:max-h-[400px] overflow-auto">
              <FilterableTable
                fields={fields}
                pageSize={5}
                data={clinicalLabData}
                pageSizes={[5, 10, 20, 28]}
                noRecordsMessage="No match found."
                noFilteredRecordsMessage="No match found."
                exactFilterable={false}
              />
            </div>
          </body>
        </html>
      )}
    </BrowserOnly>
  );
}
