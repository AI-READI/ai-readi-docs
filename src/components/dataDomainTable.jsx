/* eslint-disable react/button-has-type */
import React from 'react';

// eslint-disable-next-line react/prop-types

function Table() {
  return (
    <html lang="en">
      <head>
        <style>
          {`
        .b2{border-bottom-style: hidden;}
          tr:nth-child(odd of :has(td[rowspan])) > td[rowspan] {background-color: white}
          tr:nth-child(even of :has(td[rowspan])) > td[rowspan] {background-color: #fafafa}

          tr th{background-color: #fafafa;}
        `}
        </style>
      </head>
      <body>
        <div className="relative mt-4 w-full">
          <table>
            <tr>
              <th>Domain</th>
              <th>Variable</th>
              <th>Data Capture</th>
              <th>Method/Devices</th>
            </tr>
            <tr>
              <td rowSpan="3">Screening Survey</td>
              <td>Biological Sex</td>
              <td>REDCAP</td>
              <td>self-administered</td>
            </tr>
            <tr>
              <td>Race/ethnicity</td>
              <td> </td>
              <td> </td>
            </tr>
            <tr>
              <td>Diabetes Status</td>
              <td> </td>
              <td> </td>
            </tr>
            <tr>
              <td rowSpan="4">Demographic Survey</td>
              <td>Date of Birth</td>
              <td>REDCAP</td>
              <td>self-administered</td>
            </tr>
            <tr>
              <td>Age</td>
              <td> </td>
              <td> </td>
            </tr>
            <tr>
              <td>Marital Status</td>
              <td> </td>
              <td> </td>
            </tr>
            <tr>
              <td>Gender Identity</td>
              <td> </td>
              <td> </td>
            </tr>
            <tr>
              <td rowSpan="11">Questionnaires</td>
              <td>Health Survey</td>
              <td> </td>
              <td>self-administered</td>
            </tr>
            <tr>
              <td>Substance Use Survey</td>
              <td> </td>
              <td>self-administered</td>
            </tr>
            <tr>
              <td>CESD-10 Depression Survey</td>
              <td> </td>
              <td>self-administered</td>
            </tr>
            <tr>
              <td>PAID-5 Problem Areas in Diabetes Survey</td>
              <td> </td>
              <td>self-administered</td>
            </tr>
            <tr>
              <td>Diabetes Self-Care (lifestyle) Survey</td>
              <td> </td>
              <td>self-administered</td>
            </tr>
            <tr>
              <td>Dietary Survey</td>
              <td> </td>
              <td>self-administered</td>
            </tr>
            <tr>
              <td>Social Determinants of Health Survey (combined PhenX Toolkit)</td>
              <td> </td>
              <td>self-administered</td>
            </tr>
            <tr>
              <td>Food Insecurity Survey (PhenX Toolkit)</td>
              <td> </td>
              <td>self-administered</td>
            </tr>
            <tr>
              <td>Neighborhood Environment Survey (PhenX Toolkit)</td>
              <td> </td>
              <td>self-administered</td>
            </tr>
            <tr>
              <td>Racial/Ethnic Discrimination Survey (PhenX Toolkit)</td>
              <td> </td>
              <td>self-administered</td>
            </tr>
            <tr>
              <td>Visual Impairment and Access to Eye Care</td>
              <td> </td>
              <td>self-administered</td>
            </tr>
            <tr>
              <td rowSpan="9">Physical Assessment</td>
              <td>Last Meal (hours)</td>
              <td>REDCap</td>
              <td>CRC-administered</td>
            </tr>
            <tr>
              <td>Height</td>
              <td> </td>
              <td> </td>
            </tr>
            <tr>
              <td>Weight</td>
              <td> </td>
              <td> </td>
            </tr>
            <tr>
              <td>BMI</td>
              <td> </td>
              <td> </td>
            </tr>
            <tr>
              <td>Waist Circumferene</td>
              <td> </td>
              <td> </td>
            </tr>
            <tr>
              <td>Hip Circumference</td>
              <td> </td>
              <td> </td>
            </tr>
            <tr>
              <td>Waist to Hip Ratio</td>
              <td> </td>
              <td> </td>
            </tr>
            <tr>
              <td>Blood Pressure (resting)</td>
              <td> </td>
              <td> </td>
            </tr>
            <tr>
              <td>Heart rate</td>
              <td> </td>
              <td> </td>
            </tr>
            <tr>
              <td rowSpan="4">Vision</td>
              <td>Autorefraction</td>
              <td> </td>
              <td>device; Topcon KR800</td>
            </tr>
            <tr>
              <td>BCVA photopic and mesopic</td>
              <td> </td>
              <td>device; EVA device (M&S Technologies)</td>
            </tr>
            <tr>
              <td>Mars Letter contrast sensitivity photopic</td>
              <td> </td>
              <td>Mars Chart (Mars Perceptrix)</td>
            </tr>
            <tr>
              <td>Mars Letter contrast sensitivity mesopic</td>
              <td> </td>
              <td>Mars Chart (Mars Perceptrix)</td>
            </tr>
            <tr>
              <td rowSpan="1">Cognition</td>
              <td>Montreal Cognitive Assessment (MoCA) </td>
              <td>MoCAtest Duo App (on tablet)</td>
              <td>CRC-administered; Duo App</td>
            </tr>
            <tr>
              <td rowSpan="4">Retinal imaging</td>
              <td>Fundus photo</td>
              <td>device, then Azure</td>
              <td>device: Eidon, Maestro2, Optomed</td>
            </tr>
            <tr>
              <td>OCT</td>
              <td>MoCAtest Duo App (on tablet)</td>
              <td>CRC-administered; Duo App</td>
            </tr>
            <tr>
              <td>OCTA</td>
              <td>MoCAtest Duo App (on tablet)</td>
              <td>device: Spectralis, Cirrus, Maestro2, Triton</td>
            </tr>
            <tr>
              <td>FLIO</td>
              <td>MoCAtest Duo App (on tablet)</td>
              <td>device: Heidelberg FLIO</td>
            </tr>
            <tr>
              <td rowSpan="1">Cardiology</td>
              <td>ECG</td>
              <td>device, then Azure</td>
              <td>device; Philips Pagewriter TC30</td>
            </tr>
            <tr>
              <td rowSpan="1">Peripheral neuropathy</td>
              <td>Monofilament test</td>
              <td>REDCap</td>
              <td>CRC-administered</td>
            </tr>
            <tr>
              <td rowSpan="30">Laboratory tests (regardless of bodily system)</td>
              <td>NT-proBNP</td>
              <td>Azure/fairhub</td>
              <td>device: Eidon, Maestro2, Optomed</td>
            </tr>
            <tr>
              <td>Troponin-T</td>
              <td>&quot;</td>
              <td> </td>
            </tr>
            <tr>
              <td>C-Peptide</td>
              <td>&quot;</td>
              <td> </td>
            </tr>
            <tr>
              <td>Insulin</td>
              <td>&quot;</td>
              <td> </td>
            </tr>
            <tr>
              <td>CRP-HS</td>
              <td>&quot;</td>
              <td> </td>
            </tr>
            <tr>
              <td>Total Cholesterol</td>
              <td>&quot;</td>
              <td> </td>
            </tr>
            <tr>
              <td>Triglycerides</td>
              <td>&quot;</td>
              <td> </td>
            </tr>
            <tr>
              <td>HDL Cholesterol</td>
              <td>&quot;</td>
              <td> </td>
              <td> </td>
            </tr>
            <tr>
              <td>LDL Cholesterol (calculated field)</td>
              <td>&quot;</td>
              <td> </td>
            </tr>
            <tr>
              <td>Glucose</td>
              <td>&quot;</td>
              <td> </td>
            </tr>
            <tr>
              <td>BUN</td>
              <td>&quot;</td>
              <td> </td>
            </tr>
            <tr>
              <td>Creatinine</td>
              <td>&quot;</td>
              <td> </td>
            </tr>
            <tr>
              <td>BUN/Creatinine ratio</td>
              <td>&quot;</td>
              <td> </td>
            </tr>
            <tr>
              <td>Sodium</td>
              <td>&quot;</td>
              <td> </td>
            </tr>
            <tr>
              <td>Potassium</td>
              <td>&quot;</td>
              <td> </td>
            </tr>
            <tr>
              <td>Chloride</td>
              <td>&quot;</td>
              <td> </td>
            </tr>
            <tr>
              <td>Carbon Dioxide, Total</td>
              <td>&quot;</td>
              <td> </td>
            </tr>
            <tr>
              <td>Calcium</td>
              <td>&quot;</td>
              <td> </td>
            </tr>{' '}
            <tr>
              <td>Protein, total</td>
              <td>&quot;</td>
              <td> </td>
            </tr>
            <tr>
              <td>Albumin</td>
              <td>&quot;</td>
              <td> </td>
            </tr>
            <tr>
              <td>Globulin, total (calculated field)</td>
              <td>&quot;</td>
              <td> </td>
            </tr>
            <tr>
              <td>A/G Ratio (calculated field)</td>
              <td>&quot;</td>
              <td> </td>
            </tr>
            <tr>
              <td>Bilirubin, Total</td>
              <td>&quot;</td>
              <td> </td>
            </tr>
            <tr>
              <td>Alkaline Phosphatase</td>
              <td>&quot;</td>
              <td> </td>
            </tr>
            <tr>
              <td>AST (GOT)</td>
              <td>&quot;</td>
              <td> </td>
            </tr>
            <tr>
              <td>ALT (GPT)</td>
              <td>&quot;</td>
              <td> </td>
            </tr>
            <tr>
              <td>HbA1c</td>
              <td>&quot;</td>
              <td> </td>
            </tr>
            <tr>
              <td>Urine creatinine</td>
              <td>&quot;</td>
              <td> </td>
            </tr>
            <tr>
              <td>Urine Albumin</td>
              <td>&quot;</td>
              <td> </td>
            </tr>
            <tr>
              <td>CBC (with platelets, no differential)</td>
              <td>REDCap</td>
              <td>lab test </td>
            </tr>
            <tr>
              <td rowSpan="3">Activity Monitoring</td>
              <td>Heart Rate (bpm)</td>
              <td>Azure/fairhub</td>
              <td>device; Garmin Vivosmart 5</td>
            </tr>
            <tr>
              <td>Sleep data (hrs)</td>
              <td> </td>
              <td> </td>
            </tr>
            <tr>
              <td>Oxygen saturation (pulse ox)</td>
              <td> </td>
              <td> </td>
            </tr>
            <tr>
              <td rowSpan="5">Environmental sensor</td>
              <td>Humidity</td>
              <td>Azure/fairhub</td>
              <td>UW (Inventor)</td>
            </tr>
            <tr>
              <td>Light levels</td>
              <td> </td>
              <td> </td>
            </tr>
            <tr>
              <td>Particulate matter 2.5</td>
              <td> </td>
              <td> </td>
            </tr>
            <tr>
              <td>Particulate matter 10</td>
              <td> </td>
              <td> </td>
            </tr>
            <tr>
              <td>VOCs</td>
              <td> </td>
              <td> </td>
            </tr>
            <tr>
              <td rowSpan="1">Continuous Glucose Monitoring</td>
              <td>blood glucose levels</td>
              <td>Azure/fairhub</td>
              <td>Dexcom G6</td>
            </tr>
          </table>
        </div>
      </body>
    </html>
  );
}

export default Table;
