import { ThemeColors } from "pol-ui";

export const wholeConfig = (
  colors: ThemeColors
) => `import type { Config } from "tailwindcss";
import { poluiPlugin } from "pol-ui";

export default {
  content: [
    "./src/**/*.{ts,tsx}",
    "./node_modules/pol-ui/**/*.js",
  ],
  plugins: [poluiPlugin({
    colors: {
      primary: {
        50: "${colors.primary[50]}",
        100: "${colors.primary[100]}",
        200: "${colors.primary[200]}",
        300: "${colors.primary[300]}",
        400: "${colors.primary[400]}",
        500: "${colors.primary[500]}",
        600: "${colors.primary[600]}",
        700: "${colors.primary[700]}",
        800: "${colors.primary[800]}",
        900: "${colors.primary[900]}",
      },
      secondary: {
        50: "${colors.secondary[50]}",
        100: "${colors.secondary[100]}",
        200: "${colors.secondary[200]}",
        300: "${colors.secondary[300]}",
        400: "${colors.secondary[400]}",
        500: "${colors.secondary[500]}",
        600: "${colors.secondary[600]}",
        700: "${colors.secondary[700]}",
        800: "${colors.secondary[800]}",
        900: "${colors.secondary[900]}",
      },
      warning: {
        50: "${colors.warning[50]}",
        100: "${colors.warning[100]}",
        200: "${colors.warning[200]}",
        300: "${colors.warning[300]}",
        400: "${colors.warning[400]}",
        500: "${colors.warning[500]}",
        600: "${colors.warning[600]}",
        700: "${colors.warning[700]}",
        800: "${colors.warning[800]}",
        900: "${colors.warning[900]}",
      },
      error: {
        50: "${colors.error[50]}",
        100: "${colors.error[100]}",
        200: "${colors.error[200]}",
        300: "${colors.error[300]}",
        400: "${colors.error[400]}",
        500: "${colors.error[500]}",
        600: "${colors.error[600]}",
        700: "${colors.error[700]}",
        800: "${colors.error[800]}",
        900: "${colors.error[900]}",
      },
      success: {
        50: "${colors.success[50]}",
        100: "${colors.success[100]}",
        200: "${colors.success[200]}",
        300: "${colors.success[300]}",
        400: "${colors.success[400]}",
        500: "${colors.success[500]}",
        600: "${colors.success[600]}",
        700: "${colors.success[700]}",
        800: "${colors.success[800]}",
        900: "${colors.success[900]}",
      },
      warning: {
        50: "${colors.warning[50]}",
        100: "${colors.warning[100]}",
        200: "${colors.warning[200]}",
        300: "${colors.warning[300]}",
        400: "${colors.warning[400]}",
        500: "${colors.warning[500]}",
        600: "${colors.warning[600]}",
        700: "${colors.warning[700]}",
        800: "${colors.warning[800]}",
        900: "${colors.warning[900]}",
      },
      info: {
        50: "${colors.info[50]}",
        100: "${colors.info[100]}",
        200: "${colors.info[200]}",
        300: "${colors.info[300]}",
        400: "${colors.info[400]}",
        500: "${colors.info[500]}",
        600: "${colors.info[600]}",
        700: "${colors.info[700]}",
        800: "${colors.info[800]}",
        900: "${colors.info[900]}",
      },  
    },
  })],
} as Config;

`;
