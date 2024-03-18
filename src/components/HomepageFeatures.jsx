/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Icon } from '@iconify/react';
import styles from './HomepageFeatures.module.css';

const contentSection = [
  {
    header: 'Generating data',
    text:
      'AI-READI is the data generation project of  the National ' +
      'Institutes  of Health funded Bridge2AI Program.',
    icon: 'streamline:ai-generate-variation-spark-solid',
  },
  {
    header: 'Search data',
    text:
      'The AI-READI project seeks to create and share a flagship' +
      ' ethically-sourced of type 2 diabetes.',
    icon: 'fluent:box-search-16-regular',
  },
  {
    header: 'Share data',
    text: `The data will be optimized for the analysis that could provide critical insights.`,
    icon: 'carbon:text-link-analysis',
  },
];

export default function HomepageFeatures() {
  return (
    <section className={styles.second}>
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Generating data to boost future AI-driven research in diabetes
      </h1>
      <div className={styles.details}>
        {contentSection.map((stat) => (
          <div key={stat.header} className={styles.elements}>
            <div>
              <Icon icon={stat.icon} className={styles.icon} />
            </div>
            <div className="flex flex-col">
              <div className="font-bold text-2xl mb-2">{stat.header}</div>
              <p className="text-md"> {stat.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
