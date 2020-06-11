// https://www.colorbox.io/#steps=11#hue_start=38#hue_end=36#hue_curve=easeInQuad#sat_start=3#sat_end=49#sat_curve=easeOutQuad#sat_rate=96#lum_start=100#lum_end=38#lum_curve=easeOutQuad#lock_hex=8c734b#minor_steps_map=0

const palette = {
  gold: {
    0: "#fffcf8",
    5: "#fcf5ea",
    10: "#f9efdd",
    20: "#f3e1c3",
    30: "#ead3ab",
    40: "#dfc496",
    50: "#d1b382",
    60: "#bea06f",
    70: "#a78b5d",
    80: "#8c734b",
    90: "#77613f",
    100: "#614f33",
  },
  gray: {
    // https://www.colorbox.io/#steps=11#hue_start=218#hue_end=220#hue_curve=easeInQuad#sat_start=3#sat_end=49#sat_curve=easeOutCubic#sat_rate=10#lum_start=99#lum_end=5#lum_curve=easeOutQuad#minor_steps_map=0
    0: "#fcfcfc",
    5: "#f9fafb",
    10: "#f7f7f9",
    20: "#eff0f2",
    30: "#e4e5e8",
    40: "#d4d6d9",
    50: "#c0c2c6",
    60: "#a7a9ac",
    70: "#87898c",
    80: "#616365",
    90: "#37383a",
    100: "#0c0c0d",
  },
  white: "#ffffff",
  black: "#000000",
};

const blackRGB = "35, 33, 41"; // grey.90
const whiteRGB = "255, 255, 255";

const colors = {
  ...palette,
  tmi: palette.gold[80],
  // legacy shortcuts
  // most of these should be refactored to role-based tokens as we flesh those out
  //   lilac: palette.gold[50],
  //   lavender: palette.gold[20],
  //   accent: palette.orange[50],
  //   warning: palette.red[70],
  // semi-transparent colors
  blackFade: {
    90: `rgba(${blackRGB}, 0.9)`,
    80: `rgba(${blackRGB}, 0.8)`,
    70: `rgba(${blackRGB}, 0.7)`,
    60: `rgba(${blackRGB}, 0.6)`,
    50: `rgba(${blackRGB}, 0.5)`,
    40: `rgba(${blackRGB}, 0.4)`,
    30: `rgba(${blackRGB}, 0.3)`,
    20: `rgba(${blackRGB}, 0.2)`,
    10: `rgba(${blackRGB}, 0.1)`,
    5: `rgba(${blackRGB}, 0.05)`,
  },
  whiteFade: {
    90: `rgba(${whiteRGB}, 0.9)`,
    80: `rgba(${whiteRGB}, 0.8)`,
    70: `rgba(${whiteRGB}, 0.7)`,
    60: `rgba(${whiteRGB}, 0.6)`,
    50: `rgba(${whiteRGB}, 0.5)`,
    40: `rgba(${whiteRGB}, 0.4)`,
    30: `rgba(${whiteRGB}, 0.3)`,
    20: `rgba(${whiteRGB}, 0.2)`,
    10: `rgba(${whiteRGB}, 0.1)`,
    5: `rgba(${whiteRGB}, 0.05)`,
  },
  text: palette.gray[90],
  background: palette.gray[0],
  primary: palette.gold[80],
  secondary: palette.gray[0], // TODO
  accent: palette.gray[0], // TODO
  highlight: palette.gray[0], // TODO
  muted: palette.gray[0], // TODO
  mutedText: palette.gray[80], // TODO

  mainNavItem: palette.gold[80], // "primary",
  navigation: {
    // background: hex2rgba(colorsTokens.white, 0.985),
    // linkDefault: palette.grey[90],
    linkActive: "gold[70]",
    linkHover: palette.gold[90],
    socialLink: palette.gray[50],
  },
  modes: {
    dark: {
      // TODO: use the package to calc saturations
      text: palette.gray[0],
      background: palette.gray[90],
      primary: palette.gold[80],
      secondary: palette.gray[0], // TODO
      accent: palette.gray[0], // TODO
      highlight: palette.gray[0], // TODO
      muted: palette.gray[0], // TODO
    },
    light: {
      text: "red",
    },
  },

  // header: palette.black,
  //   primary: palette.grey[80],
  //   secondary: palette.grey[50],
  //   placeholder: palette.grey[40],
  // },
  // role-based tokens
  // this is merely a humble start, lots to do here
  // TODO TBD gatsby-interface now has TONES, IMO worth to discuss
  // moving them here
  // ui: {
  //   background: palette.grey[5],
  //   hover: palette.gold[5],
  //   border: {
  //     subtle: palette.grey[20],
  //   },
  // },
  // link: {
  //   color: palette.gold[50],
  //   border: palette.gold[30],
  //   hoverBorder: palette.gold[50],
  // },
  // input: {
  //   border: palette.grey[30],
  //   focusBorder: palette.orange[40],
  //   focusBoxShadow: palette.orange[20],
  // },
};
export default colors;
