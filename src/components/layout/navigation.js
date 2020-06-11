/** @jsx jsx */
import { Styled, jsx, Flex, Grid, Box, useThemeUI } from "theme-ui";
import React, { useEffect } from "react";
import { Link as GLink } from "gatsby";
import { IoIosSunny, IoIosMoon } from "react-icons/io";

export const Navigation = (props) => {
  const context = useThemeUI();
  const { theme, colorMode, setColorMode } = context;

  return (
    <Flex sx={{ variant: "layout.navigation" }} id="layoutMainNavigation">
      <Flex
        sx={{ variant: "layout.navigation.mainNav", letterSpacing: "wider" }}
      >
        <Link
          to="/portfolio"
          sx={{ variant: "layout.navigation.mainNav.item" }}
          className="layoutMainNavigationItem"
        >
          <Box sx={{ variant: "layout.navigation.mainNav.item.linkText" }}>
            Portfolio
          </Box>
        </Link>
        <Link
          to="/retail"
          sx={{ variant: "layout.navigation.mainNav.item" }}
          className="layoutMainNavigationItem"
        >
          <Box sx={{ variant: "layout.navigation.mainNav.item.linkText" }}>
            Retail
          </Box>
        </Link>
        <Link
          to="/about"
          sx={{ variant: "layout.navigation.mainNav.item" }}
          className="layoutMainNavigationItem"
        >
          <Box sx={{ variant: "layout.navigation.mainNav.item.linkText" }}>
            About
          </Box>
        </Link>
      </Flex>

      <Grid
        sx={{ variant: "layout.footer" }}
        className="layoutMainNavigationItem"
      >
        <Link to="/retail" sx={{ variant: "layout.footer.row" }}>
          <IoIosSunny sx={{ variant: "layout.footer.item.icons" }} />
          <IoIosMoon sx={{ variant: "layout.footer.item.icons" }} />
        </Link>
        <Flex sx={{ variant: "layout.footer.row.legal" }}>
          <Link
            to="/privacy-policy"
            sx={{ variant: "layout.footer.item.legal" }}
          >
            Privacy Policy
          </Link>
          <Link to="/terms-of-use" sx={{ variant: "layout.footer.item.legal" }}>
            Terms of Use
          </Link>
        </Flex>
      </Grid>

      <Flex
        sx={{
          position: "fixed",
          right: 0,
          bottom: 0,
        }}
      >
        m:
        {colorMode}
        <button
          type="button"
          onClick={(e) => {
            setColorMode(colorMode === "default" ? "dark" : "default");
          }}
        >
          Toggle
          {colorMode === "default" ? "Dark" : "Light"}
        </button>
      </Flex>
    </Flex>
  );
};
// "&:before": {
//   position: "absolute",
//   width: "100%",
//   bottom: "32%",
//   border: "1px solid black",
//   height: "1px",
//   content: "",
//   opacity: 1,
// },
const Link = (props) => {
  const context = useThemeUI();
  const { theme, colorMode, setColorMode } = context;
  //

  return (
    <GLink
      {...props}
      activeClassName="active"
      sx={{
        display: "flex",
        position: "relative",
        textDecoration: `none`,
        color: "inherit",
        "&.active": {
          color: "primary",
        },
        "&:hover": { color: `navigation.linkHover` },
        // lineHeight: (t) =>
        //   `${t.space[t.layout.navigation.mainNav.item.height]}`,
        fontFamily: "navigation.mainMenu",
      }}
    />
  );
};
// export Link;

// export const NavLink = (props) => {
//   return <Link {...props} />;
// };
