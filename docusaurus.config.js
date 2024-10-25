const { themes } = require('prism-react-renderer');

const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

// const lightCodeTheme = require('prism-react-renderer/themes/github');
// const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
export default {
  title: 'Documentation for the AI-READI Dataset',
  // eslint-disable-next-line max-len
  tagline:
    // eslint-disable-next-line max-len
    'Artificial Intelligence Ready and Equitable Atlas for Diabetes Insights',
  url: 'https://docs.aireadi.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://fairdataihub.org/images/hero/aireadi-logo.png',
  organizationName: 'ai-readi',
  projectName: 'AI-READI Dataset Docs',

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/ai-readi/ai-readi-docs/edit/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          lastVersion: 'current',
          versions: {
            '1.0.0': {
              label: `1.0.0`,
              path: '1',
            },
            current: {
              label: `2.0.0`,
              path: '2',
            },
          },
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/ai-readi/ai-readi-docs/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      }),
    ],
  ],

  plugins: ['docusaurus-plugin-umami'],
  themes: ['docusaurus-theme-frontmatter'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'AI-READI Dataset Docs',
        logo: {
          alt: 'My Site Logo',
          src: 'https://fairdataihub.org/images/hero/aireadi-logo.png',
        },
        hideOnScroll: false,
        items: [
          {
            type: 'docsVersionDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/ai-readi/ai-readi-docs',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: '/docs/1/contact',
            label: 'Contact Us',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Changelog',
                to: '/docs/1/changelog',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Homepage',
                href: 'https://aireadi.org',
              },
            ],
          },
          {
            title: 'More',
            items: [
              // {
              //   label: "Blog",
              //   to: "/blog",
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/ai-readi/ai-readi-docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} AI-READI.`,
      },
      colorMode: {
        respectPrefersColorScheme: false,
      },
      // announcementBar: {
      //   id: 'announcement-bar',
      // eslint-disable-next-line max-len
      //   content: `⭐️ <strong> We would love your support. Give us a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/FAIR-BioRS/Guidelines">Github</a>. </strong>`,
      //   backgroundColor: '#e8f0f7',
      //   textColor: '#0f172a',
      //   isCloseable: true,
      // },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      image:
        // eslint-disable-next-line max-len
        'https://kalai.fairdataihub.org/api/generate?title=AI-READI%20Documentation&description=&app=ai-readi&org=ai-readi',
      metadata: [
        {
          name: 'keywords',
          content: 'AI-READI, fairhub, fairdataihub, research, data, open science, open data',
        },
        {
          name: 'description',
          // eslint-disable-next-line max-len
          content: `Generating a flagship AI-ready and ethically-sourced dataset to support future AI-driven discoveries in diabetes research.`,
        },
        {
          name: 'robots',
          content: 'index, follow',
        },
        {
          name: 'author',
          content: 'Fair Data Innovations Hub',
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
      ],
      scripts: [],
      headTags: [
        {
          tagName: 'link',
          attributes: {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            href: '/apple-touch-icon.png',
          },
        },
        {
          tagName: 'link',
          attributes: {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            href: '/favicon-32x32.png',
          },
        },
        {
          tagName: 'link',
          attributes: {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            href: '/favicon-16x16.png',
          },
        },
        {
          tagName: 'link',
          attributes: {
            rel: 'manifest',
            href: '/site.webmanifest',
          },
        },
        {
          tagName: 'meta',
          attributes: {
            name: 'msapplication-TileColor',
            content: '#da532c',
          },
        },
        {
          tagName: 'meta',
          attributes: {
            name: 'theme-color',
            content: '#ffffff',
          },
        },
      ],
      algolia: {
        appId: '4T4KZ07U83',
        apiKey: 'b025fdc0a3429e57b6e015e322d9eb9e',
        indexName: 'aireadi',
        contextualSearch: true,
      },
      umami: {
        websiteid: '65407c20-12f0-4e47-ae25-43d4447c9bc7',
        src: 'https://umami.fairdataihub.org/mushroom',
      },
    }),
};
