// src/utils/typography.js
import Typography from "typography";
import "typeface-open-sans";
import "typeface-montserrat";

const typography = new Typography({
  baseFontSize: "16px",
  headerFontFamily: ["Montserrat", "sans-serif"],
  bodyFontFamily: ["Open Sans", "sans-serif"],
});

export default typography;
