const path = require("path");

module.exports = {
  title: "Revenue Monster",
  tagline:
    "Empowering businesses by seamlessly integrating Mobile Payments, Loyalty Programs and Social Media",
  url: "https://aimandanish02.github.io", //previously was "https://doc.revenuemonster.my"
  baseUrl: "/api-rm-docs/", //previously was "/"
  favicon: "img/favicon.ico",

  organizationName: "aimandanish02", //previously was "RevenueMonster"
  projectName: "api-rm-docs", //previously was "doc-v2"
  trailingSlash: false, //before this doesnt have this
  onBrokenLinks: 'throw',

  plugins: [
    path.resolve(__dirname, "./node_modules/docusaurus-lunr-search/"),
  ],

  clientModules: [
    require.resolve("./src/clientModules/autoOpenDetails.js"),
  ],

  themeConfig: {
    metadata: [
      {
        name: "keywords",
        content: [
          "revenue monster",
          "apac venture",
          "alacarte",
          "terminal payment",
          "payment link",
          "payment",
          "unified payment",
          "wallet payment",
          "malaysia payment gateway",
          "payment gateway",
          "fintech",
          "digitalization",
          "payment solution",
          "documentation",
          "payment integration",
          "wallet integration",
        ].join(","),
      },
      { name: "author", content: "Revenue Monster" },
      {
        name: "description",
        content:
          "Revenue Monster pioneers fintech solutions to help fast-track business digitalization. We empower businesses with a fully digital ecosystem that provides a full suite of services critical to business digitalisation. We provide solutions from digital payment solutions, e-loyalty & rewards, online store, to social media management.",
      },
      { name: "og:site_name", content: "Revenue Monster" },
      { name: "og:type", content: "website" },
      { name: "og:url", content: "https://aimandanish02.github.io/api-rm-docs" },
      {
        name: "og:title",
        content:
          "Documentation | Revenue Monster | Experience True Unified Payment",
      },
      {
        name: "og:description",
        content:
          "Revenue Monster pioneers fintech solutions to help fast-track business digitalization. We empower businesses with a fully digital ecosystem that provides a full suite of services critical to business digitalisation.",
      },
      {
        name: "og:image",
        content:
          "https://directus.superapp.my/assets/4bec8b80-eaaa-4a71-b2e6-3dd26c7afede.png",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:url", content: "https://aimandanish02.github.io/api-rm-docs" },
      {
        name: "twitter:title",
        content:
          "Documentation | Revenue Monster | Experience True Unified Payment",
      },
      {
        name: "twitter:image",
        content:
          "https://directus.superapp.my/assets/4bec8b80-eaaa-4a71-b2e6-3dd26c7afede.png",
      },
    ],

    prism: {
      additionalLanguages: ['php', 'python', 'go', 'kotlin', 'swift', 'java'],
    },

    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
    },

    navbar: {
      logo: {
        alt: "Revenue Monster",
        src: "/img/revenuemoster-logo-dark.svg",
        srcDark: "https://rm-landing-web-assets.oss-ap-southeast-3.aliyuncs.com/icons/RM.svg",
        href: "https://revenuemonster.my",
      },
      items: [
        {
          type: "custom-explore",
          position: "left",
        },
        {
          to: "docs/introduction/overview",
          activeBasePath: "docs",
          label: "Docs",
          position: "right",
        },
        {
          to: "/docs/quickstart/sdk",
          label: "SDK",
          position: "right",
        },
        {
          to: "https://github.com/RevenueMonster",
          label: "GitHub",
          position: "right",
        },
      ],
    },

    docs: {
      sidebar: {
        hideable: true,
      },
    },

    // footer: {
    //   style: "dark",
    //   copyright: `Copyright © ${new Date().getFullYear()} Revenue Monster SDN BHD (Company NO.1236838-T). All rights reserved`,
    // },
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          rehypePlugins: [require("./src/rehype/collapsibleSections")],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};