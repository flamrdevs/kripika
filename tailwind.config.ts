import type { Config } from "tailwindcss";

import coloradix, { gray, tomato } from "@coloradix/tailwindcss";

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
      ...radix.colors,
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
  plugins: [radix.plugin],
} satisfies Config;
