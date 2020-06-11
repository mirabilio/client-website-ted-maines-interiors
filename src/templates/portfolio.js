/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import React from "react";
import { graphql } from "gatsby";
import { useLocalJsonForm } from "gatsby-tinacms-json";
import Img from "gatsby-image";

const Portfolio = ({ data }) => {
  const [page] = useLocalJsonForm(data.page, PortfolioForm);

  return (
    <Box sx={{ mt: (t) => `${t.layout.header.height}` }}>
      {/* <div>{page.title}</div>
      <div>{page.message}</div> */}
      <Img fluid={page.image.childImageSharp.fluid} />
    </Box>
  );
};

const PortfolioForm = {
  label: "Portfolio Page",
  fields: [
    {
      label: "Path",
      name: "rawJson.fileRelativePath",
      component: "text",
    },
    {
      label: "Title",
      name: "rawJson.title",
      component: "text",
    },
    {
      label: "Image",
      name: "image",
      component: "image",
      parse: (filename) => `../images/${filename}`,
      uploadDir: () => `/content/images/`, // TODO: pull image upload path from gatsby-node config
      previewSrc: (formValues) => {
        return formValues.jsonNode.image.childImageSharp.fluid.src;
      },
    },
  ],
};

export default Portfolio;

export const pageQuery = graphql`
  query($path: String!) {
    page: pagesJson(path: { eq: $path }) {
      id
      title
      message
      image {
        childImageSharp {
          fluid(quality: 95, maxWidth: 2880) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      rawJson
      fileRelativePath
    }
  }
`;
