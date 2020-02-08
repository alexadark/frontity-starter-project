import { darken } from "polished";

const dark = "#263238";
const dark2 = darken(0.04, "#263238");
const dark3 = darken(0.1, "#263238");
const light = "#eceff1";
const primary = "#607d8b";
const secondary = "#455a64";
const lightGrey = "#cfd8dc";
const grey = "#90a4ae";
const accentDark = "#ffab91";
const accentLight = "#c2185b";

export const colors = {
  primary,
  secondary,
  light,
  dark,
  lightGrey,
  accentDark,
  accent: accentLight,
  brand: primary,
  background: light,
  bgInverse: dark,
  text: dark,
  textInverse: light,
  white: "white",
  black: "black",
  brand: primary,
  mutted: grey,
  grey: grey,
  border: lightGrey,
  headerBg: dark,
  headerColor: light,
  headerColorHover: accentDark,
  footerBg: dark,
  footerColor: light,
  infoBg: light,
  cardBg: "white",
  archiveTitleBg: grey,
  searchResultsHeaderBg: grey,
  searchResultsHeaderColor: "white",
  highlightColor: accentDark,
  searchColor: grey,
  slideSidebarBg: dark,
  focusOutline: grey,
  nlInputBg: light,
  nlInputColor: dark,
  nlButtonBg: primary,
  nlButtonBgHover: darken(0.1, primary),
  nlButtonColor: light,

  modes: {
    dark: {
      text: light,
      background: dark,
      cardBg: dark2,
      headerBg: dark3,
      footerBg: dark3,
      infoBg: dark3,
      archiveTitleBg: secondary,
      searchColor: primary,
      accent: accentDark,
      nlInputBg: primary,
      nlInputColor: "white",
      nlButtonBg: secondary,
      nlButtonBgHover: darken(0.05, secondary)
    }
  }
};
