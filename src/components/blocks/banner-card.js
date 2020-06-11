/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import React from "react";

export function BannerCard({ html }) {
  // console.log(`contentHtml: ${JSON.stringify(html, null, "  ")}`);
  return (
    <Box
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    />
  );
}

export const BannerCardBlock = {
  label: "Banner Card",
  name: "bannerCard",
  key: "banner-card",
  defaultItem: {
    content: "",
    center: false,
  },
  fields: [{ name: "content", label: "Content", component: "markdown" }],
};
