/* eslint-disable react/button-has-type */
import React from 'react';
import FilterableTable from 'react-filterable-table';
// eslint-disable-next-line import/no-unresolved
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function ClinicalLabTable() {
  const data = [
    {
      Test: 'NT-proBNP',
      'Lab Interpretation':
        'NT-proBNP is used to diagnose and monitor heart failure, reflecting heart stress.',
      Units: 'pg/mL',
      'Unit Description': 'Picograms per milliliter (pg/mL)',
      'Reference Interval': (
        <a href="http://localhost:3000/docs/1/dataset/clinical-data/clinical-lab-tests#nt-probnp-reference-intervals">
          See table below
        </a>
      ),
      'Collection Method': 'Blood draw from a vein',
      LOINC: '33762-6',
      Reference: 'NORC Clinical Lab Tests',
      measurement_source_value: 'NT-proBNP (pg/mL)',
    },
    {
      Test: 'Troponin-T',
      'Lab Interpretation': 'Indicates heart muscle injury, often used to diagnose heart attacks',
      Units: 'ng/L',
      'Unit Description': 'Nanograms per liter (ng/L)',
      'Reference Interval': 'Female <11; Male <16',
      'Collection Method': 'Blood draw from a vein',
      LOINC: '67151-1',
      Reference: 'NORC Clinical Lab Tests',
      measurement_source_value: 'Troponin-T (ng/L)',
    },
    {
      Test: 'C-Peptide',
      'Lab Interpretation':
        'Measures insulin production, aiding in distinguishing type 1 and type 2 diabetes.',
      Units: 'ng/mL',
      'Unit Description': 'Nanograms per liter (ng/L)',
      'Reference Interval': '1.1-4.4',
      'Collection Method': 'Blood draw from a vein',
      LOINC: '1986-9',
      Reference: 'NORC Clinical Lab Tests',
      measurement_source_value: 'C-Peptide (ng/mL)',
    },
    {
      Test: 'Insulin',
      'Lab Interpretation':
        'Evaluates insulin production and resistance, significant for diabetes management.',
      Units: 'ng/mL',
      'Unit Description': 'Nanograms per liter (ng/L)',
      'Reference Interval': '0.0-24.9',
      'Collection Method': 'Blood draw from a vein',
      LOINC: '20448-7',
      Reference: 'NORC Clinical Lab Tests',
      measurement_source_value: 'Not found in measurement.csv',
    },
    {
      Test: 'CRP-HS',
      'Lab Interpretation':
        'Measures low levels of inflammation, assessing risk for cardiovascular diseases.',
      Units: 'mg/dL',
      'Unit Description': 'Milligrams per deciliter (mg/dL)',
      'Reference Interval': '0.0-10.0',
      'Collection Method': 'Blood draw from a vein',
      LOINC: '30522-7',
      Reference: 'NORC Clinical Lab Tests',
      measurement_source_value: 'Not found in measurement.csv',
    },
    {
      Test: 'Total Cholesterol',
      'Lab Interpretation':
        'Measures all types of cholesterol in the blood, assessing cardiovascular risk.',
      Units: 'mg/dL',
      'Unit Description': 'Milligrams per deciliter (mg/dL)',
      'Reference Interval': '<200',
      'Collection Method': 'Fasting blood draw',
      LOINC: '2093-3',
      Reference: 'NORC Clinical Lab Tests',
      measurement_source_value: 'Total Cholesterol (mg/dL)',
    },
    {
      Test: 'Triglycerides',
      'Lab Interpretation':
        'Measures the level of fats in the blood, important for assessing heart health.',
      Units: 'mg/dL',
      'Unit Description': 'Milligrams per deciliter (mg/dL)',
      'Reference Interval': '<150',
      'Collection Method': 'Fasting blood draw',
      LOINC: '2571-8',
      Reference: 'NORC Clinical Lab Tests',
      measurement_source_value: 'Triglycerides (mg/dL)"',
    },
    {
      Test: 'HDL Cholesterol',
      'Lab Interpretation':
        "Known as 'good' cholesterol, HDL helps remove 'bad' cholesterol, reducing heart disease risk.",
      Units: 'mg/dL',
      'Unit Description': 'Milligrams per deciliter (mg/dL)',
      'Reference Interval': '>39',
      'Collection Method': 'Fasting blood draw',
      LOINC: '2085-9',
      Reference: 'NORC Clinical Lab Tests',
      measurement_source_value: 'HDL Cholesterol (mg/dL)',
    },
    {
      Test: 'LDL Cholesterol (calculated field)',
      'Lab Interpretation':
        "Calculated measure of 'bad' cholesterol, high levels can indicate risk for heart disease.",
      Units: 'mg/dL',
      'Unit Description': 'Milligrams per deciliter (mg/dL)',
      'Reference Interval': '<130',
      'Collection Method': 'Calculated from total cholesterol, HDL, and triglycerides levels',
      LOINC: '',
      Reference: 'NORC Clinical Lab Tests',
      measurement_source_value: 'Not found in measurement.csv',
    },
    {
      Test: 'Glucose',
      'Lab Interpretation':
        'Measures blood sugar levels, essential for diagnosing and managing diabetes.',
      Units: 'mg/dL',
      'Unit Description': 'Milligrams per deciliter (mg/dL)',
      'Reference Interval': '62-125',
      'Collection Method': 'Blood draw, fasting or postprandial',
      LOINC: '2345-7',
      Reference: 'NORC Clinical Lab Tests',
      measurement_source_value: 'Glucose (mg/dL)',
    },
    {
      Test: 'BUN',
      'Lab Interpretation':
        'Blood Urea Nitrogen (BUN) test assesses kidney function and nitrogen waste in the blood.',
      Units: 'mg/dL',
      'Unit Description': 'Milligrams per deciliter (mg/dL)',
      'Reference Interval': '8.0-21.0',
      'Collection Method': 'Blood draw',
      LOINC: '3094-0',
      Reference: 'NORC Clinical Lab Tests',
      measurement_source_value: 'BUN (mg/dL)',
    },
    {
      Test: 'Creatinine',
      'Lab Interpretation':
        'Indicates kidney function by measuring the waste product creatinine in the blood.',
      Units: 'mg/dL',
      'Unit Description': 'Milligrams per deciliter (mg/dL)',
      'Reference Interval': 'Female: 0.38-1.02, Male: 0.51-1.18',
      'Collection Method': 'Blood draw',
      LOINC: '2160-0',
      Reference: 'NORC Clinical Lab Tests',
      measurement_source_value: 'Creatinine (mg/dL)',
    },
    {
      Test: 'BUN/Creatinine ratio',
      'Lab Interpretation':
        'Used to diagnose and monitor kidney conditions, reflecting hydration and renal function.',
      Units: '',
      'Unit Description': 'Ratio',
      'Reference Interval': '',
      'Collection Method': 'Calculated from BUN and creatinine blood levels',
      LOINC: '',
      Reference: 'NORC Clinical Lab Tests',
      measurement_source_value: 'BUN/Creatinine ratio',
    },
    {
      Test: 'Sodium',
      'Lab Interpretation':
        'Essential electrolyte for body function, sodium levels reflect hydration and electrolyte balance.',
      Units: 'mEq/L',
      'Unit Description': 'Milliequivalents per liter (mEq/L)',
      'Reference Interval': '135-145',
      'Collection Method': 'Blood draw',
      LOINC: '2951-2',
      Reference: 'NORC Clinical Lab Tests',
      measurement_source_value: 'Sodium (mEq/L)',
    },
    {
      Test: 'Potassium',
      'Lab Interpretation':
        'Critical for nerve and muscle function, potassium levels indicate electrolyte and acid-base balance',
      Units: 'mEq/L',
      'Unit Description': 'Milliequivalents per liter (mEq/L)',
      'Reference Interval': '3.6-5.2',
      'Collection Method': 'Blood draw',
      LOINC: '2823-3',
      Reference: 'NORC Clinical Lab Tests',
      measurement_source_value: 'Potassium (mEq/L)',
    },
    {
      Test: 'Chloride',
      'Lab Interpretation':
        'Chloride is an important electrolyte that helps maintain fluid and acid-base balance.',
      Units: 'mEq/L',
      'Unit Description': 'Milliequivalents per liter (mEq/L)',
      'Reference Interval': '98-108',
      'Collection Method': 'Blood draw',
      LOINC: '2075-0',
      Reference: 'NORC Clinical Lab Tests',
      measurement_source_value: 'Chloride (mEq/L)',
    },
    {
      Test: 'Carbon Dioxide, Total',
      'Lab Interpretation':
        'Total CO2 or bicarbonate level in the blood, important for assessing acid-base balance.',
      Units: 'mEq/L',
      'Unit Description': 'Milliequivalents per liter (mEq/L)',
      'Reference Interval': '22-32',
      'Collection Method': 'Blood draw',
      LOINC: '2028-9',
      Reference: 'NORC Clinical Lab Tests',
      measurement_source_value: 'Carbon Dioxide, Total (mEq/L)"',
    },
    {
      Test: 'Calcium',
      'Lab Interpretation':
        'Essential mineral for bone health and physiological processes, indicating metabolic status.',
      Units: 'mg/dL',
      'Unit Description': 'Milligrams per deciliter (mg/dL)',
      'Reference Interval': '8.9-10.2',
      'Collection Method': 'Blood draw',
      LOINC: '17861-6',
      Reference: 'NORC Clinical Lab Tests',
      measurement_source_value: 'Calcium (mg/dL)',
    },
    {
      Test: 'Albumin',
      'Lab Interpretation':
        'Main protein in blood, maintaining fluid balance and transporting substances.',
      Units: 'g/dL',
      'Unit Description': 'Grams per deciliter (g/dL)',
      'Reference Interval': '3.5-5.2',
      'Collection Method': 'Blood draw',
      LOINC: '1751-7',
      Reference: 'NORC Clinical Lab Tests',
      measurement_source_value: 'Albumin (g/dL)',
    },
    {
      Test: 'Globulin, total (calculated field)',
      'Lab Interpretation':
        'Calculated from total protein and albumin, indicating immune function and liver status.',
      Units: 'g/dL',
      'Unit Description': 'Grams per deciliter (g/dL)',
      'Reference Interval': 'N/A',
      'Collection Method': 'Calculated from blood sample analysis',
      LOINC: 'N/A',
      Reference: 'NORC Clinical Lab Tests',
      measurement_source_value: 'Not found in measurement.csv',
    },
    {
      Test: 'A/G Ratio (calculated field)',
      'Lab Interpretation':
        'Ratio of albumin to globulin, used to diagnose liver and kidney diseases.',
      Units: 'N/A',
      'Unit Description': 'Ratio',
      'Reference Interval': 'N/A',
      'Collection Method': 'Calculated from albumin and globulin levels',
      LOINC: 'N/A',
      Reference: 'NORC Clinical Lab Tests',
      measurement_source_value: 'Not found in measurement.csv',
    },
    {
      Test: 'Bilirubin, Total',
      'Lab Interpretation':
        'Measures total bilirubin in the blood, indicating liver function and health',
      Units: 'mg/dL',
      'Unit Description': 'Milligrams per deciliter (mg/dL)',
      'Reference Interval': '0.2-1.3',
      'Collection Method': 'Blood draw',
      LOINC: '1975-2',
      Reference: 'NORC Clinical Lab Tests',
      measurement_source_value: 'Bilirubin, Total (mg/dL)"',
    },
    {
      Test: 'Alkaline Phosphatase',
      'Lab Interpretation':
        'Enzyme linked to liver and bone health; high levels may indicate liver or bone disorders.',
      Units: 'IU/L',
      'Unit Description': 'International Units per liter (IU/L)',
      'Reference Interval': (
        <a href="http://localhost:3000/docs/1/dataset/clinical-data/clinical-lab-tests#alkaline-phosphatase-reference-ranges">
          See table below
        </a>
      ),
      'Collection Method': 'Blood draw',
      LOINC: '6768-6',
      Reference: 'NORC Clinical Lab Tests',
      measurement_source_value: 'Alkaline Phosphatase (IU/L)',
    },
    {
      Test: 'AST',
      'Lab Interpretation':
        'Enzyme found in the liver and other tissues; high levels indicate liver or muscle damage.',
      Units: 'IU/L',
      'Unit Description': 'International Units per liter (IU/L)',
      'Reference Interval': '9-38',
      'Collection Method': 'Blood draw',
      LOINC: '1920-8',
      Reference: 'NORC Clinical Lab Tests',
      measurement_source_value: 'Not found in measurement.csv',
    },
    {
      Test: 'ALT',
      'Lab Interpretation': 'Liver enzyme; elevated levels can indicate liver damage or disease.',
      Units: 'IU/L',
      'Unit Description': 'International Units per liter (IU/L)',
      'Reference Interval': 'Female: 7-33, Male Age 0-49: 10-64, Male Age 50+: 10-48',
      'Collection Method': 'Blood draw',
      LOINC: '1742-6',
      Reference: 'NORC Clinical Lab Tests',
      measurement_source_value: 'Not found in measurement.csv',
    },
    {
      Test: 'HbA1c',
      'Lab Interpretation':
        'Measures average blood glucose over 2-3 months; used to diagnose and monitor diabetes.',
      Units: '%',
      'Unit Description': 'Percentage (%)',
      'Reference Interval': '4.0-6.0',
      'Collection Method': 'Blood draw or finger prick, no fasting required',
      LOINC: '4548-4',
      Reference: 'NORC Clinical Lab Tests',
      measurement_source_value: 'HbA1C (%)',
    },
    {
      Test: 'Urine creatinine',
      'Lab Interpretation':
        'Assesses kidney function and is used to normalize urine protein levels.',
      Units: 'ug/mL',
      'Unit Description': 'Micrograms per milliliter (ug/mL)',
      'Reference Interval': 'N/A',
      'Collection Method': 'Urine sample, random or 24-hour collection',
      LOINC: '65634-8',
      Reference: 'NORC Clinical Lab Tests',
      measurement_source_value: 'Not found in measurement.csv',
    },
    {
      Test: 'Urine Albumin',
      'Lab Interpretation':
        'Measures albumin in urine; elevated levels can indicate kidney damage.',
      Units: 'ug/mL',
      'Unit Description': 'Micrograms per milliliter (ug/mL)',
      'Reference Interval': 'N/A',
      'Collection Method': '24-hour urine collection or random urine sample',
      LOINC: '34535-5',
      Reference: 'NORC Clinical Lab Tests',
      measurement_source_value: 'Urine Albumin (ug/mL)',
    },
  ];

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
                data={data}
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
