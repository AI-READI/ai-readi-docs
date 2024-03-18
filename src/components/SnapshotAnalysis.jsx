/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import styles from './HomepageFeatures.module.css';

const StatsList = [
  {
    heading: '4,000',
    text: 'Participants anticipated in the study',
  },
  {
    heading: '15+',
    text: 'Data types to be collected (vitals, electrocardiogram, etc.)',
  },
  {
    heading: '8',
    text: `Research institutions involved`,
  },
];

export default function SnapshotAnalysis() {
  return (
    <section className={styles.features}>
      <div className={styles.snapshot}>
        <h1 className="mb-2 text-3xl font-bold tracking-tight sm:text-3xl">
          Snapshot of the AI-READI project
        </h1>

        <p className="mb-12 text-xl font-medium text-slate-600">
          Some key numbers from the project
        </p>

        <div className={styles.stat}>
          {StatsList.map((stat) => (
            <dl className="max-w-[25rem]" key={stat.heading}>
              <dt className="text-5xl font-bold text-sky-600">{stat.heading}</dt>

              <dd className="text-lg font-medium m-0 text-gray-700">{stat.text}</dd>
            </dl>
          ))}
        </div>
      </div>
    </section>
  );
}
