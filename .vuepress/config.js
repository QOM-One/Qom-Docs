module.exports = {
  theme: "cosmos",
  title: "QOM ONE Documentation",
  locales: {
    "/": {
      lang: "en-US",
    },
  },
  markdown: {
    extendMarkdown: (md) => {
      md.use(require("markdown-it-katex"));
    },
  },
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css",
      },
    ],
  ],
  base: process.env.VUEPRESS_BASE || "/",
  plugins: [
    ["vuepress-plugin-element-tabs"],
    [
      "@vuepress/google-analytics",
      {
        ga: process.env.GOOGLE_ANALYTICS_ID || '',
      },
    ],
  ],
  head: [
    // ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" }],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon32.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon16.png",
      },
    ],
    ["link", { rel: "manifest", href: "/site.webmanifest" }],
    ["meta", { name: "msapplication-TileColor", content: "#2e3148" }],
    ["meta", { name: "theme-color", content: "#ffffff" }],
    ["link", { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
    // ['link', { rel: "apple-touch-icon-precomposed", href: "/apple-touch-icon-precomposed.png" }],
  ],
  themeConfig: {
    repo: "qom/qom",
    docsRepo: "qom/qom",
    docsBranch: "main",
    docsDir: "docs",
    editLinks: true,
    custom: true,
    project: {
      name: "Qom One",
      denom: "qom",
      ticker: "QOM",
      binary: "qomd",
      testnet_denom: "tQom",
      testnet_ticker: "tQom",
      rpc_url: "https://rpc.qom.one",
      rpc_url_testnet: "https://testnet.qom.one:8545",
      rpc_url_local: "http://localhost:8545/",
      chain_id: "766",
      testnet_chain_id: "7668378",
      latest_version: "v1.0.0",
      mainnet_version: "v1.0.0",
      testnet_version: "v1.0.2",
      version_number: "1",
      testnet_version_number: "1",
      testnet_evm_explorer_url: "https://testnet.qom.one",
      testnet_cosmos_explorer_url: "https://ping.testnet.qom.one/qom",
      cosmos_explorer_url: "https://www.mintscan.io/evmos",
    },
    logo: {
      src: "/qom-logo.svg",
    },
    algolia: {
      id: process.env.ALGOLIA_ID || '',
      key: process.env.ALGOLIA_KEY || '',
      index: "evmos",
    },
    topbar: {
      banner: false,
    },
    sidebar: {
      auto: false,
      nav: [
        {
          title: "About QOM One",
          children: [
            {
              title: "Introduction",
              directory: true,
              path: "/about/intro",
            },
            {
              title: "QOM ONE Ecosystem",
              path: "https://evmos.org/ecosystem",
            },
          ],
        },
        {
          title: "For Users",
          children: [
            {
              title: "Basic Concepts",
              directory: true,
              path: "/users/basics",
            },
            {
              title: "Digital Wallets",
              directory: true,
              path: "/users/wallets",
            },
            {
              title: "Account Keys",
              directory: true,
              path: "/users/keys",
            },
            {
              title: "QOM One Governance",
              directory: true,
              path: "/users/governance",
            },
            {
              title: "Technical Concepts",
              directory: true,
              path: "/users/technical_concepts",
            },
          ],
        },
        {
          title: "For dApp Devs",
          children: [
            {
              title: "Overview",
              directory: false,
              path: "/developers/overview",
            },
            {
              title: "Quick Connect",
              directory: false,
              path: "/developers/connect",
            },
            {
              title: "Clients",
              directory: false,
              path: "/developers/clients",
            },
            {
              title: "Guides",
              directory: true,
              path: "/developers/guides",
            },
            {
              title: "Localnet",
              directory: true,
              path: "/developers/localnet",
            },
            {
              title: "Testnet",
              directory: true,
              path: "/developers/testnet",
            },
            {
              title: "Ethereum Tooling",
              directory: true,
              path: "/developers/tools",
            },
            {
              title: "Client Libraries",
              directory: true,
              path: "/developers/libraries",
            },
            {
              title: "Ethereum JSON-RPC",
              directory: true,
              path: "/developers/json-rpc",
            },
            {
              title: "Cosmos gRPC & REST",
              path: "https://api.evmos.dev/",
            },
            {
              title: "Tendermint RPC",
              path: "https://docs.tendermint.com/v0.34/rpc/",
            },
          ],
        },
        {
          title: "For Protocol Devs",
          children: [
            {
              title: "Modules",
              directory: true,
              path: "/modules",
            },
            {
              title: "Module Accounts",
              directory: false,
              path: "/protocol/moduleaccounts",
            },
            {
              title: "IBC Channels",
              directory: false,
              path: "/protocol/ibc",
            },
            {
              title: "QOM One Go API",
              path: "https://pkg.go.dev/github.com/evmos/evmos",
            },
            {
              title: "Ethermint Library Go API",
              path: "https://pkg.go.dev/github.com/evmos/ethermint",
            },
            {
              title: "QOM One Protobuf",
              directory: false,
              path: "/protocol/proto-docs",
            },
          ],
        },
        {
          title: "For Validators",
          children: [
            {
              title: "Validators Overview",
              directory: false,
              path: "/validators/overview",
            },
            {
              title: "Installation & Quick Start",
              directory: true,
              path: "/validators/quickstart",
            },
            {
              title: "Setup & Configuration",
              directory: true,
              path: "/validators/setup",
            },
            {
              title: "Join Testnet",
              directory: false,
              path: "/validators/testnet",
            },
            {
              title: "Join Mainnet",
              directory: false,
              path: "/validators/mainnet",
            },
            {
              title: "Telemetry and Observability",
              directory: false,
              path: "/protocol/telemetry",
            },
            {
              title: "Security",
              directory: true,
              path: "/validators/security",
            },
            {
              title: "Software Upgrade Guide",
              directory: true,
              path: "/validators/upgrades",
            },
            {
              title: "Snapshots & Archive Nodes",
              directory: false,
              path: "/validators/snapshots_archives",
            },
            {
              title: "FAQ",
              directory: false,
              path: "/validators/faq",
            },
          ],
        },
        {
          title: "Block Explorers",
          children: [
            {
              title: "Block Explorers",
              path: "/developers/explorers",
            },
            {
              title: "Blockscout",
              path: "https://testnet.qom.one/",
            },
          ],
        },
      ],
    },
    gutter: {
      title: "Help & Support",
      chat: {
        title: "Telegram",
        text: "Chat with Qom One users and community on telegram.",
        url: "https://t.me/QOMONE",
        bg: "linear-gradient(103.75deg, #1B1E36 0%, #22253F 100%)",
      },
      github: {
        title: "Found an Issue?",
        text: "Help us improve this page by suggesting edits on GitHub.",
        bg: "#F8F9FC",
      },
    },
    footer: {
      logo: "/qom-logo.svg",
      textLink: {
        text: "qom.one",
        url: "https://qom.one",
      },
      services: [
        {
          service: "github",
          url: "https://github.com/qom/qomone",
        },
        {
          service: "twitter",
          url: "https://twitter.com/qomone",
        },
        {
          service: "telegram",
          url: "https://t.me/QOMONE",
        },
        {
          service: "linktree",
          url: "https://linktr.ee/qomlinks",
        },
      ],
      smallprint: "This website is maintained by Qom One developers and community",
      links: [
        {
          title: "Ecosystem Documentation",
          children: [
            {
              title: "Cosmos SDK Docs",
              url: "https://docs.cosmos.network",
            },
            {
              title: "Ethereum Docs",
              url: "https://ethereum.org/developers",
            },
            {
              title: "Tendermint Core Docs",
              url: "https://docs.tendermint.com",
            },
          ],
        },
      ],
    },
    versions: [
      {
        label: "main",
        key: "main",
      },
    ],
  },
};
