/** @jsx jsx */
import { Styled, jsx, Flex, useColorMode } from "theme-ui";
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import slugify from "react-slugify";
import { IconContext } from "react-icons";

import { JsonCreatorPlugin } from "gatsby-tinacms-json";
import { withPlugin } from "tinacms";

import Header from "./layout/header";
import { Navigation } from "./layout/navigation";

/* <canvas id="PixiApp" sx={{ variant: "layout.overlay" }} /> */

const DefaultLayout = ({ children }) => {
  return (
    <>
      <IconContext.Provider value={{ color: "blue" }}>
        <div>{children}</div>
        <Header />
        <Navigation />
      </IconContext.Provider>
    </>
  );
};

const CreatePageButton = new JsonCreatorPlugin({
  label: "New Page",
  filename(form) {
    const slug = slugify(form.title.toLowerCase());
    return `content/pages/${slug}.json`;
  },
  fields: [
    { name: "title", label: "Title", component: "text", required: true },
    { name: "path", label: "Path", component: "text", required: true },
    // TODO: add SEO META optional fields here
  ],
  data(form) {
    return {
      title: form.title,
      path: form.path,
    };
  },
});

export default withPlugin(DefaultLayout, [CreatePageButton]);
