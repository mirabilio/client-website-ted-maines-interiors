/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import React from "react";
import { graphql } from "gatsby";
import { useLocalJsonForm } from "gatsby-tinacms-json";
import Img from "gatsby-image";
import { BannerCard, BannerCardBlock } from "../components/blocks/banner-card";

const About = ({ data }) => {
  const [page] = useLocalJsonForm(data.page, AboutForm);

  // console.log(JSON.stringify(data, null, "  "));
  return (
    <Box sx={{ mt: (t) => `${t.layout.header.height}` }}>
      {/* <div>{page.title}</div>
      <div>{page.message}</div> */}
      <Img fluid={page.image.childImageSharp.fluid} />
      <BannerCard html={page.contentHtml} />
    </Box>
  );
};

const AboutForm = {
  label: "About Page",
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
      label: "Banner Image",
      name: "image",
      component: "image",
      parse: (filename) => `../images/${filename}`,
      uploadDir: () => `/content/images/`, // TODO: pull image upload path from gatsby-node config
      previewSrc: (formValues) => {
        return formValues.jsonNode.image.childImageSharp.fluid.src;
      },
    },
    {
      label: "Card",
      name: "card",
      component: "blocks",
      templates: {
        BannerCardBlock,
      },
    },
  ],
};

export default About;

export const aboutQuery = graphql`
  query($path: String!) {
    page: pagesJson(path: { eq: $path }) {
      id
      title
      content
      contentHtml
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
