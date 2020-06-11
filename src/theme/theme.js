import layout, { vh100 } from "./layout";
import colors from "./colors";
import space from "./space";
import sizes from "./sizes";
import fontSizes from "./font-sizes";
import fonts from "./fonts";
import fontWeights from "./font-weights";
import breakpoints from "./breakpoints";
import lineHeights from "./line-heights";
import letterSpacings from "./letter-spacings";
import zIndices from "./z-indices";
import options from "./options";
import { buttons, links } from "./variants";
import styles from "./styles";

const theme = {
  breakpoints,
  colors,
  space,
  sizes,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  letterSpacings,
  layout,
  zIndices,
  styles,
  // variants
  // buttons,
  // links,

  // Options
  useColorSchemeMediaQuery: true,
  // initialColorModeName: "light",
  useLocalStorage: false, // ...options,
};

// Core aliases to extend theme-ui spec. These are intended to be used in every project's theme.
theme.sizes.headerHeight = sizes[11];
theme.sizes.navButtonWidth = sizes[6];
theme.sizes.icon = sizes[5];
theme.sizes.mainNavRowHeight = sizes[10];
theme.space.footerLegalRowHeight = sizes[10];
theme.space.footerIconsRowHeight = sizes[9];
theme.space.navMenuPaddingX = sizes[5]; // TODO: Use it

theme.image = {
  viewPort: {
    position: "relative",
    width: "100vw",
    height: vh100,
  },
};

export default theme;
