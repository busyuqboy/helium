import createCss, { StitchesCss } from "@stitches/react";

const stitches = createCss({
  theme: {
    colors: {
      blue: "hsl(215,95%,45%)",
      blueDark: "hsl(215,85%,40%)",
    },
  },
});

export type CSS = StitchesCss<typeof stitches>;

export const {
  styled,
  css,
  theme,
  getCssString,
  global,
  keyframes,
  config,
} = stitches;
