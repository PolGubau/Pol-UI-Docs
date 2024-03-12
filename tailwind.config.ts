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
  darkMode: ["class"],

  plugins: [typography, poluiPlugin({})],
} satisfies Config;
