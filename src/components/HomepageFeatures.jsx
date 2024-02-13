/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import clsx from 'clsx';
import Lottie from 'react-lottie';
import styles from './HomepageFeatures.module.css';

import increaseAnimationData from './lotties/column1lottie.json';
import rewardAnimationData from './lotties/column2lottie.json';
import complyAnimationData from './lotties/column3lottie.json';

const FeatureList = [
  {
    title: 'Increase',
    animationOptions: {
      loop: true,
      autoplay: true,
      animationData: increaseAnimationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    },
    description: <>subtitle 1</>,
  },
  {
    title: 'Get',
    animationOptions: {
      loop: true,
      autoplay: true,
      animationData: rewardAnimationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    },
    description: <>subtitle 3</>,
  },
  {
    title: 'Comply',
    animationOptions: {
      loop: true,
      autoplay: true,
      animationData: complyAnimationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    },
    description: <>subtitle 3</>,
  },
];

// eslint-disable-next-line react/prop-types
function Feature({ animationOptions, title, description }) {
  if (title === 'Findable') {
    return (
      <div className={clsx('col col--3 flex flex-col items-center justify-center')}>
        <div className="flex justify-center items-center py-4 mb-[2.1rem]">
          <Lottie options={animationOptions} height={165} width={200} />
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    );
  }
  return (
    <div className={clsx('col col--3')}>
      <div className="flex justify-center py-4">
        <Lottie options={animationOptions} height={200} width={200} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row justify-evenly">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
