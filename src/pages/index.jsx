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
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className="flex justify-center">
          <div className="rounded-full bg-white p-6 w-max mb-10 flex items-center justify-center">
            <img src="img/logo.svg" alt="FAIR BioRS Logo" width="100px" height="100px" />
          </div>
        </div>

        <h1 className="hero__title text-4xl">{siteConfig.title}</h1>

        <p className="hero__subtitle text-xl">{siteConfig.tagline}</p>

        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/getting-started/intro">
            View the Documentation
          </Link>

          <Link
            className="button button--secondary button--lg"
            to="https://github.com/ai-readi/ai-readi-docs"
          >
            View Github Repository
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

      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
