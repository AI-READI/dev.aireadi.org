import { defineConfig } from 'vitepress';
import MermaidPlugin from 'vitepress-plugin-mermaid';
import VersionsJSON from './versions.json';

const currentVersion = VersionsJSON[0];
const OtherVersions = [];

VersionsJSON.forEach((version) => {
  if (version !== currentVersion) {
    OtherVersions.push({
      text: version,
      link: `/${version}/`,
    });
  }
});

export default defineConfig({
  lang: 'en-US',
  title: 'AI-READI',
  description: 'Documentation for AI-READI developers',
  titleTemplate: 'AI-READI',
  port: 3000,

  appearance: true,
  lastUpdated: true,
  ignoreDeadLinks: false,

  markdown: {
    lineNumbers: true,
    config: MermaidPlugin,
  },

  head: [
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: 'apple-touch-icon.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',

        href: 'favicon.ico',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: 'favicon-32x32.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: 'favicon-16x16.png',
      },
    ],
    ['link', { rel: 'manifest', href: 'site.webmanifest' }],
    [
      'link',
      {
        rel: 'mask-icon',
        href: 'safari-pinned-tab.svg',
        color: '#3a0839',
      },
    ],
    ['link', { rel: 'shortcut icon', href: 'favicon.ico' }],
    ['meta', { name: 'msapplication-TileColor', content: '#3a0839' }],
    [
      'meta',
      {
        name: 'msapplication-config',
        content: 'browserconfig.xml',
      },
    ],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
  ],

  themeConfig: {
    // logo: "https://fairdataihub.org/logo.svg",
    // siteTitle: false,

    editLink: {
      pattern:
        'https://github.com/AI-READI/software-best-practices/edit/main/website/:path',
      text: 'Edit this page on GitHub',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/AI-READI' },
      // { icon: 'twitter', link: 'https://twitter.com/fairdataihub' },
    ],

    nav: [
      // {
      //   text: 'Home',
      //   link: '/',
      // },
      // {
      //   text: 'Overview',
      //   link: '/about/README.md',
      // },
      // {
      //   text: VersionsJSON[0],
      //   items: OtherVersions,
      // },
    ],

    sidebar: {
      '/about': sidebarGuide(),
      '/best-practices': sidebarGuide(),
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present | AI-READI',
    },
  },
});

function sidebarGuide() {
  return [
    {
      text: 'About',
      collapsible: true,
      collapsed: true,
      items: [{ text: 'README', link: '/about/README.md' }],
    },
    {
      text: 'Best practices',
      collapsible: true,
      items: [
        { text: 'Overview', link: '/best-practices/overview' },
        {
          text: 'Maintaining the best practices',
          link: '/best-practices/maintaining-the-best-practices',
        },
        {
          text: 'Software development best practices for AI-READI',
          link: '/best-practices/software-development-best-practices-for-ai-readi/overview',
          items: [
            {
              text: 'Overview',
              link: '/best-practices/software-development-best-practices-for-ai-readi/overview',
            },
            {
              text: 'Project setup',
              link: '/best-practices/software-development-best-practices-for-ai-readi/project-setup',
            },
            {
              text: 'Code development',
              link: '/best-practices/software-development-best-practices-for-ai-readi/code-development',
            },
            {
              text: 'Pushing changes to GitHub repository',
              link: '/best-practices/software-development-best-practices-for-ai-readi/pushing-changes-to-github-repository',
            },
            {
              text: 'Documenting',
              link: '/best-practices/software-development-best-practices-for-ai-readi/documenting',
            },
            {
              text: 'Adding metadata',
              link: '/best-practices/software-development-best-practices-for-ai-readi/adding-metadata',
            },
            {
              text: 'Version release',
              link: '/best-practices/software-development-best-practices-for-ai-readi/version-release',
            },
            {
              text: 'Suggested automation tools/Developer experience',
              link: '/best-practices/software-development-best-practices-for-ai-readi/suggested-automation-tools-developer-experience',
            },
          ],
        },
        {
          text: 'Rationales',
          link: '/best-practices/rationales',
        },
        {
          text: 'Monitoring compliance with the best practices',
          link: '/best-practices/monitoring-compliance-with-the-best-practices',
        },
      ],
    },
  ];
}
