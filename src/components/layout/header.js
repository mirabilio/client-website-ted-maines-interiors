/** @jsx jsx */
import { Styled, jsx, Flex, Box, useColorMode } from "theme-ui";
import React, { useEffect, useLayoutEffect, useState, useRef } from "react";
import { gsap } from "gsap";

// import { PixiPlugin } from "gsap/PixiPlugin";
// import * as PIXI from "pixi.js";

import Hamburger from "../icons/hamburger";
import Monogram from "../icons/monogram";
import Svg from "../icons/icon";

const Header = (props) => {
  const hbAnimRef = useRef();
  // const [menuOpen, setMenuOpen] = useState();
  // const toggleMenu = () => setMenuOpen((m) => !m);
  const toggleMenu = (toggle) => {
    console.log(`toggleMenu: ${toggle.type} ${toggle.target.elementId}`);
    if (hbAnimRef.current.totalProgress() > 0 || toggle.type === "scroll") {
      window.removeEventListener("scroll", toggleMenu);
      window.removeEventListener("click", toggleMenu);
      hbAnimRef.current.reverse();
    } else {
      window.addEventListener("scroll", toggleMenu);
      window.addEventListener("click", toggleMenu);
      hbAnimRef.current.play();
    }
  };

  useLayoutEffect(() => {
    // const app = new PIXI.Application({
    //   width: 300,
    //   height: 300,
    //   backgroundColor: 0x000000,
    //   autoResize: true,
    //   view: document.getElementById("PixiApp"),
    // });
    const width = () => {
      return window
        .getComputedStyle(document.getElementById("layoutMainNavigation"))
        .getPropertyValue("width")
        .replace("px", "");
    };
    const menu = () => {
      const navSpeed = 0.4;
      const navTweenClick = gsap.timeline({ paused: true });
      navTweenClick
        .to(
          "#hbLine1",
          { duration: navSpeed, y: 6, ease: "power4.inOut" },
          "start"
        )
        .to(
          "#hbLine3",
          { duration: navSpeed, y: -6, ease: "power4.inOut" },
          "start"
        )
        .to(
          "#hbLine2",
          {
            duration: navSpeed,
            opacity: 0,
            ease: "power4.inOut",
          },
          "start"
        )
        .to(
          "#hbLine1",
          {
            duration: navSpeed,
            attr: { x1: 4, x2: 18, y1: -2, y2: 10 },
            ease: "power4.inOut",
          },
          "start"
        )
        .to(
          "#hbLine3",
          {
            duration: navSpeed,
            attr: { x1: 4, x2: 18, y1: 22, y2: 10 },
            ease: "power4.inOut",
          },
          "start"
        )
        .to(
          "#layoutMainNavigation",
          {
            duration: navSpeed * 0.75,
            x: -width(),
            ease: "power4.inOut",
          },
          "start"
        )
        .from(
          ".layoutMainNavigationItem",
          {
            duration: navSpeed / 2,
            // delay: navSpeed / 3,
            autoAlpha: 0,
            // ease: "slowMo.InOut",
            stagger: 0.03,
          },
          ".2"
        );
      hbAnimRef.current = navTweenClick;
    };
    menu();
  }, []);

  // useLayoutEffect(() => {
  //   const navSpeed = 2.5;
  //   const navTweenClick = gsap.timeline({ paused: true });

  //   console.log(`useLayoutEffect ${menuOpen} ${new Date().getTime()}`);
  //   if (menuOpen === true) navTweenClick.play();
  //   else if (menuOpen === false) {
  //     console.log("fasle!");
  //     // navTweenClick
  //     //   .to(
  //     //     "#hbLine1",
  //     //     {
  //     //       duration: 0.5,
  //     //       x: 5,
  //     //       fill: "red",
  //     //       opacity: 1,

  //     //       ease: "power4.inOut",
  //     //     },
  //     //     "start"
  //     //   )
  //     //   .play();
  //   }

  //   return () => {
  //     navTweenClick.kill();
  //   };
  // }, [menuOpen]);

  return (
    <Flex as="header" sx={{ variant: "layout.header" }} {...props}>
      <Flex
        sx={{ variant: "layout.header.item", justifyContent: "flex-start" }}
      >
        &nbsp;
      </Flex>
      <Flex
        sx={{
          variant: "layout.header.item",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Svg s={{ height: "100%", py: "3" }}>
          <Monogram />
        </Svg>
      </Flex>
      <Flex
        sx={{
          variant: "layout.header.item",
          justifyContent: "flex-end",
        }}
        onClick={toggleMenu}
        //   // console.log(`clicked ${menuOpen} ${new Date().getTime()}`);
        //   // isMenuOpenRef.current = !isMenuOpenRef.current;
        //   toggleMenu();
        // }}
      >
        <Flex sx={{ cursor: "pointer" }}>
          <Svg size="navButtonWidth" s={{ mx: 8, cursor: "pointer" }}>
            <Hamburger />
          </Svg>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Header;
// const navSpeed = 2.5;
// const navTweenClick = gsap.timeline({ paused: true });
// navTweenClick
//   .to("#hbLine1", navSpeed, { y: 6, ease: "power4.inOut" }, "start")
//   .to("#hbLine3", navSpeed, { y: -6, ease: "power4.inOut" }, "start")
//   .to("#hbLine2", navSpeed, { opacity: 0, ease: "power4.inOut" }, "start")
//   .to(
//     "#hbLine1",
//     navSpeed,
//     { attr: { x1: 4, x2: 18, y1: -2, y2: 10 }, ease: "power4.inOut" },
//     "start"
//   )
//   .to(
//     "#hbLine3",
//     navSpeed,
//     { attr: { x1: 4, x2: 18, y1: 22, y2: 10 }, ease: "power4.inOut" },
//     "start"
//   )
//   .kill();
