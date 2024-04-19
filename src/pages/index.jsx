/* eslint-disable max-len */
/* eslint-disable import/no-unresolved */
import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={styles.section}>
        <div className="flex justify-center">
          <div className="rounded-full bg-white w-max mb-10 flex items-center justify-center">
            <img
              src="https://fairdataihub.org/images/hero/aireadi-logo.png"
              alt="aireadi logo"
              width="100px"
              height="100px"
            />
          </div>
        </div>

        <h1 className="hero__title tracking-tight sm:text-4xl">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>

        <div className={styles.buttons}>
          <Link className="button py-4 px-6 bg-sky-600 button--lg" to="/docs/1/about">
            View the Documentation
          </Link>

          <Link
            className="button border border-sky-600 bg-sky-400  py-4 px-6 min-w-[17.5rem] button--lg"
            to="https://fairhub.io/datasets/1"
          >
            Access the Dataset
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout title="" description="Documentation for the AI-READI dataset">
      <HomepageHeader />
      <HomepageFeatures />
    </Layout>
  );
}
