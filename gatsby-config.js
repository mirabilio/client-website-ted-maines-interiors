module.exports = {
  siteMetadata: {
    title: `Ted Maines Interiors`,
    siteUrl: `https://tedmainesinteriors.com`,
    description: `bla`,
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-tinacms-json`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout.js`),
      },
    },
    {
      resolve: "gatsby-plugin-tinacms",
      options: {
        sidebar: {
          hidden: process.env.NODE_ENV === "production",
          position: "displace",
          theme: {
            color: {
              primary: {
                light: "#007043",
                medium: "#B8A45D",
                dark: "#131110",
              },
            },
          },
        },
        plugins: ["gatsby-tinacms-git", "gatsby-tinacms-remark"],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/images`,
        name: `uploads`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-json-remark`,
      options: {
        paths: [`${__dirname}/content/pages`], // Process all JSON files in these directories.
        pathsExclude: [`${__dirname}/content/pages/contact.json`], // Process all files in the directories above, except `pages/contact.json`.
        fieldNameBlacklist: [
          "id",
          "children",
          "parent",
          "fields",
          "internal",
          "path",
          "template",
        ], // Ignore JSON keys with these names
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 2880,
              withWebp: true,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
        ],
      },
    },
  ],
};
