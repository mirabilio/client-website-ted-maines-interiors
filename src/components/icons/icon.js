/** @jsx jsx */
import React from "react";
import { jsx, Flex } from "theme-ui";

const Svg = ({ fill, children, size, s }) => (
  // something with svg? makes this work with width only. using height, makes it expand wide 100%
  <Flex
    sx={{
      width: size,
      "> svg": {
        display: "block",
        height: "100%",
        width: "100%",
      },
      ...s,
    }}
  >
    {children}
  </Flex>
);

export default Svg;
