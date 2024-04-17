import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import { poluiPlugin } from "pol-ui";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.mdx",
    "./node_modules/pol-ui/**/*.js",
  ],
  theme: {
    extend: {
      screens: {
        "2xl": "1600px",
      },
    },
  },

  plugins: [
    typography,
    poluiPlugin({
      colors: {
        secondary: {
          800: "#2c3339",
          900: "#161a1d",
        },
      },
    }),
  ],
} satisfies Config;
