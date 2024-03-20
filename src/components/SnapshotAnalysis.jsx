/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import styles from './HomepageFeatures.module.css';

const StatsList = [
  {
    heading: '204',
    text: 'Participants from 3 data collection types',
  },
  {
    heading: '4',
    text: 'Ethnicities represented',
  },
  {
    heading: '4',
    text: `Health states`,
  },
  {
    heading: '2',
    text: `Biological sexes`,
  },
];

export default function SnapshotAnalysis() {
  return (
    <section>
      <div>
        <h1 className="mb-2 text-3xl font-bold tracking-tight sm:text-3xl">
          Snapshot of the AI-READI project
        </h1>

        <p className="mb-12 text-xl font-medium text-slate-600">
          Key numbers from the current version of the dataset (v1.0)
        </p>

        <div className={styles.stat}>
          {StatsList.map((stat) => (
            <dl className="max-w-[15rem]" key={stat.text}>
              <dt className="text-5xl font-bold text-sky-600">{stat.heading}</dt>

              <dd className="text-lg font-medium m-0 text-gray-700">{stat.text}</dd>
            </dl>
          ))}
        </div>
      </div>
    </section>
  );
}
