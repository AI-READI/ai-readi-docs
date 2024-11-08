/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
// import { Icon } from '@iconify/react';
import styles from './HomepageFeatures.module.css';

const StatsList = [
  {
    heading: '1067',
    text: 'Participants from three data collection sites',
  },
  {
    heading: '15',
    text: `Data modalities collected`,
  },
  {
    heading: '165,051',
    text: 'Total number of data files',
  },

  {
    heading: '2.01',
    text: `TB dataset size`,
  },
];

// const contentSection = [
//   {
//     header: 'Generating data',
//     text:
//       '',
//     icon: 'streamline:ai-generate-variation-spark-solid',
//   },
//   {
//     header: 'Search data',
//     text:
//       'The AI-READI project seeks to create and share a flagship' +
//       ' ethically-sourced of type 2 diabetes.',
//     icon: 'fluent:box-search-16-regular',
//   },
//   {
//     header: 'Share data',
//     text: `The data will be optimized for the analysis that could provide critical insights.`,
//     icon: 'carbon:text-link-analysis',
//   },
// ];

export default function HomepageFeatures() {
  return (
    <section className={styles.second}>
      <div>
        <h1 className="header hero__title tracking-tight sm:text-3xl text-center">
          Generating Data to Boost Future AI-driven Research in Type 2 Diabetes
        </h1>
        <p
          className="mt-6 pl-[2rem] pr-9 mb-4 text-xl max-w-[70rem] text-justify
        font-medium text-slate-600"
        >
          This is the documentation for the AI-READI dataset called &quot;Flagship Dataset of Type 2
          Diabetes from the AI-READI Project&quot;. AI-READI is one of the data generation project
          of the National Institutes of Health funded Bridge2AI Program. One of the major goals of
          AI-READI is to collect and share a multimodal, AI-ready dataset for studying salutogenesis
          in Type 2 Diabetes Mellitus.
        </p>
      </div>

      <div className={styles.snapshot}>
        <h1 className="snapshot mb-2 text-3xl font-bold tracking-tight sm:text-3xl">
          Snapshot of the AI-READI dataset
        </h1>

        <p className="snapshot mb-12 text-xl font-medium text-slate-600">
          Key numbers from the current version of the dataset (v2.0.0)
        </p>

        <div className={styles.stat}>
          {StatsList.map((stat) => (
            <dl className="max-w-[17rem] flex flex-col gap-[1rem]" key={stat.text}>
              <dt className="text-5xl font-bold text-sky-600">{stat.heading}</dt>

              <dd className="text-lg font-medium m-0 text-gray-700">{stat.text}</dd>
            </dl>
          ))}
        </div>
      </div>
    </section>
  );
}
