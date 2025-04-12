// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DrBlackRat\'s VRC Docs',
  tagline: 'Documentation for DrBlackRat\'s VRChat Assets',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://drblackrat.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/DrBlackRat-VRC-Docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'DrBlackRat', // Usually your GitHub org/user name.
  projectName: 'DrBlackRat-VRC-Docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'DrBlackRat\'s VRC Docs',
        logo: {
          alt: 'DrBlackRat\s Logo',
          src: 'img/logo.png',
        },
        items: [
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'docSidebar',
            sidebarId: 'picture_loader',
            position: 'left',
            label: 'Picture Loader',
          },
          {
            type: 'docSidebar',
            sidebarId: 'modern_ui',
            position: 'left',
            label: 'Modern UI',
          },
          {
            href: 'https://github.com/DrBlackRat',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Socials',
            items: [
              {
                label: 'Website',
                href: 'https://drblackrat.xyz',
              },
              {
                label: 'BlueSky',
                href: 'https://bsky.app/profile/drblackrat.xyz',
              },
            ],
          },
          {
            title: 'Projects',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/DrBlackRat',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DrBlackRat. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
