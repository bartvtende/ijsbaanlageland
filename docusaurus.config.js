// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'IJsclub Lageland-Hamweg',
  tagline: 'IJsclub Lageland-Hamweg',
  url: 'https://ijslaanlageland.nl',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  // favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'bartvtende', // Usually your GitHub org/user name.
  projectName: 'ijsbaanlageland', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'nl',
    locales: ['nl'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
      },
      navbar: {
        title: 'IJsbaan Lageland',
        logo: {
          alt: 'Logo',
          src: 'img/logo.jpg',
        },
        items: [
          {to: '/contact', label: 'Contact', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Partners',
            items: [
              {
                label: 'Gewest Groningen',
                href: 'https://www.knsbgroningen.nl/',
              },
              {
                label: 'KNSB',
                href: 'https://knsb.nl/',
              },
              {
                label: 'Noorder Rondritten',
                href: 'https://noorderrondritten.nl/',
              },
            ],
          },
          {
            title: 'IJsclub Lageland-Hamweg',
            items: [
              {
                html: '<span>Hamweg 81</span>'
              },
              {
                html: '<span>Lageland</span>'
              },
              {
                label: 'ijsclub-lageland@hotmail.nl',
                href: 'mailto:ijsclub-lageland@hotmail.nl',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} IJsclub Lageland-Hamweg`,
      },
    }),
};

module.exports = config;
