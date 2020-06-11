/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import React from "react";
import { graphql } from "gatsby";
import { useLocalJsonForm } from "gatsby-tinacms-json";
import Img from "gatsby-image";

const Home = ({ data }) => {
  const [page] = useLocalJsonForm(data.page, HomeForm);

  return (
    <Box sx={{ variant: "layout.main.fixedHeight100vh" }}>
      {/* <div>{page.title}</div>
      <div>{page.message}</div> */}
      <Img
        fluid={page.image.childImageSharp.fluid}
        sx={{ variant: "image.viewPort" }}
      />
    </Box>
  );
};

const HomeForm = {
  label: "Index Page",
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

export default Home;

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
