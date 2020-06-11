const fs = require("fs");

const path = require(`path`);
const { GraphQLBoolean } = require("gatsby/graphql");

exports.setFieldsOnGraphQLNodeType = ({ type }) => {
  // if the node is a markdown file, add the `published` field
  if (type.name === "MarkdownRemark") {
    return {
      published: {
        type: GraphQLBoolean,
        resolve: ({ frontmatter }) => {
          /*
          `published` is always true in development
              so both drafts and finished posts are built
          */
          if (process.env.NODE_ENV !== "production") {
            return true;
          }
          /*
          return the opposite of the `draft` value,
          i.e. if draft = true : published = false
          */
          return !frontmatter.draft;
        },
      },
    };
  }
  return {};
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      pages: allPagesJson(filter: { path: { ne: null } }) {
        edges {
          node {
            path
            template
          }
        }
      }
    }
  `);

  result.data.pages.edges.forEach(({ node }) => {
    reporter.info(`creating page ${node.path}`);
    createPage({
      path: node.path,
      component: path.resolve(node.template),
      context: {},
    });
  });
};

// Make sure the data directory exists
exports.onPreBootstrap = ({ reporter }) => {
  const dirs = [
    "content",
    "static/images",
    "content/pages",
    "content/settings",
    "content/images",
    "content/posts",
  ];

  dirs.forEach((dir) => {
    if (!fs.existsSync(dir)) {
      reporter.info(`creating the ${dir} directory`);
      fs.mkdirSync(dir, { recursive: true });
    }
  });
};
