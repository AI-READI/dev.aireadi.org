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
    editLink: {
      pattern:
        'https://github.com/AI-READI/dev.aireadi.org/edit/main/website/:path',
      text: 'Edit this page on GitHub',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/AI-READI' },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10"/><path stroke-linecap="round" stroke-linejoin="round" d="M13 2.05S16 6 16 12m-5 9.95S8 18 8 12c0-6 3-9.95 3-9.95M2.63 15.5H12m-9.37-7h18.74"/><path d="M21.879 17.917c.494.304.463 1.043-.045 1.101l-2.567.291l-1.151 2.312c-.228.459-.933.234-1.05-.334l-1.255-6.116c-.099-.48.333-.782.75-.525l5.318 3.271Z" clip-rule="evenodd"/></g></svg>',
        },
        link: 'https://aireadi.org',
      },
    ],

    nav: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'About',
        link: '/about/README',
      },
      {
        text: 'Overview',
        link: '/best-practices/software-development-best-practices-for-ai-readi/overview',
      },
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
