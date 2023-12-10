import defaultTheme from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

import coloradix, { gray, tomato } from "@coloradix/tailwindcss";

import tailwindcssAspectRatio from "@tailwindcss/aspect-ratio";

const radix = coloradix({
  gray,
  tomato,
})
  .alias({
    neutral: "gray",
    primary: "tomato",
  })
  .build();

export default {
  content: ["./src/**/*.{ts,tsx,astro}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      ...radix.colors,
    },
    fontFamily: {
      sans: ["Inter Variable", ...defaultTheme.fontFamily.sans],
      display: ["Titan One", ...defaultTheme.fontFamily.serif],
    },
    extend: {
      width: {
        screen: "100dvw",
      },
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [radix.plugin, tailwindcssAspectRatio],
} satisfies Config;
