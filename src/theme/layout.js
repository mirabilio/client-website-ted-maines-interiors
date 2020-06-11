const vh100 = (t) => `calc(100vh - ${t.sizes.headerHeight})`;

const layout = {
  main: {
    fixedHeight100vh: {
      position: "relative",
      top: "headerHeight",
      left: 0,
      height: vh100,
      width: "100vw",
      // width: "300px",
      // height: "600px",
    },
  },
  header: {
    position: "fixed",
    alignItems: "center",
    justifyContent: "center",
    top: 0,
    left: 0,
    height: "headerHeight",
    width: "100%",
    backgroundColor: "background",
    item: {
      flex: "1",
      height: "headerHeight",
    },
  },
  navigation: {
    position: "fixed",
    top: "headerHeight",
    left: "100vw",
    height: vh100,
    width: ["100vw", "100vw", "100vw", "initial"],
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textTransform: "uppercase",
    backgroundColor: "background",
    mainNav: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: vh100,
      width: "100%",
      item: {
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "mainNavRowHeight",
        linkText: {
          position: "relative",
          lineHeight: "solid",
          opacity: "inherit",
          visibility: "inherit",
          "&:before": [
            null,
            null,
            null,
            {
              position: "absolute",
              display: "block",
              width: `calc(100% + 2em)`,
              bottom: (t) => `calc(-1 * ${t.sizes[2]})`,
              opacity: 0,
              backgroundColor: "text",
              height: "2px",
              content: "''",
              left: "-1em",
              transition:
                "opacity .25s ease-in-out, width .33s ease-in-out, left .33s ease-in-out",
            },
          ],
        },
        "&:hover > div:before": [
          null,
          null,
          null,
          {
            opacity: 1,
            width: "75%",
            left: "calc(12.5%)",
          },
        ],
      },
    },
  },
  footer: {
    width: "100%",
    gridTemplateColumns: "1fr",
    gridTemplateRows: ({ space }) =>
      `${space.footerIconsRowHeight} ${space.footerLegalRowHeight}`,
    // gridAutoRows: (t) => `${t.space.footerRowHeight}`,
    gridGap: 0,
    mt: "auto",
    mx: 10,
    fontSize: 3,
    textTransform: "uppercase",
    row: {
      alignItems: "center",
      justifyContent: "center",
      legal: {
        alignItems: "flex-end",
        justifyContent: "space-evenly",
      },
    },
    item: {
      alignItems: "center",
      justifyContent: "center",
      legal: {
        justifyContent: "space-evenly",
        pb: 4,
      },
      icons: {
        width: "icon",
        height: "icon",
        mx: 6,
        fill: "mutedText",
      },
    },
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
};

export { vh100 };
export default layout;
