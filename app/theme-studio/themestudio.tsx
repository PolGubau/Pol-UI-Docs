"use client";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import theme from "./themeColors";
import { wholeConfig } from "./configString";
import {
  ColorsEnum,
  IconButton,
  MainSizesEnum,
  ThemeColors,
  useCopyToClipboard,
} from "pol-ui";
import { TbCheck, TbClipboard } from "react-icons/tb";
import ColorEditors from "./ColorEditors";

const ThemeStudio = () => {
  const colorsBase: ThemeColors = {
    primary: {
      50: "#f8f5ff",
      100: "#e8e0ff",
      200: "#ddd1ff",
      300: "#cdbdff",
      400: "#c3b0ff",
      500: "#b49cff",
      600: "#a48ee8",
      700: "#806fb5",
      800: "#63568c",
      900: "#4c426b",
    },
    secondary: {
      50: "#f9f9f9",
      100: "#ebebeb",
      200: "#e2e2e2",
      300: "#d4d4d4",
      400: "#cccccc",
      500: "#bfbfbf",
      600: "#aeaeae",
      700: "#888888",
      800: "#696969",
      900: "#505050",
    },
    warning: {
      50: "#fff9e6",
      100: "#ffecb2",
      200: "#ffe28d",
      300: "#ffd559",
      400: "#ffcd39",
      500: "#ffc107",
      600: "#e8b006",
      700: "#b58905",
      800: "#8c6a04",
      900: "#6b5103",
    },
    success: {
      50: "#edf7ee",
      100: "#c8e6c9",
      200: "#addaaf",
      300: "#87c98a",
      400: "#70bf73",
      500: "#4caf50",
      600: "#459f49",
      700: "#367c39",
      800: "#2a602c",
      900: "#204a22",
    },
    info: {
      50: "#e9f5fe",
      100: "#badefb",
      200: "#99cff9",
      300: "#6ab9f7",
      400: "#4dabf5",
      500: "#2196f3",
      600: "#1e89dd",
      700: "#176bad",
      800: "#125386",
      900: "#0e3f66",
    },
    error: {
      50: "#feeceb",
      100: "#fcc5c1",
      200: "#faa9a3",
      300: "#f88178",
      400: "#f6695e",
      500: "#f44336",
      600: "#de3d31",
      700: "#ad3026",
      800: "#86251e",
      900: "#661c17",
    },
  };
  const [colors, setColors] = React.useState<ThemeColors>(colorsBase);
  const { copy } = useCopyToClipboard();
  const handleCopyConfig = () => {
    setJustCopied(true);
    copy(wholeConfig(colors));
  };
  const [justCopied, setJustCopied] = React.useState(false);
  React.useEffect(() => {
    if (justCopied) {
      const timer = setTimeout(() => {
        setJustCopied(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [justCopied]);
  return (
    <main className="justify-center w-full flex ">
      <section className="grid grid-cols-2 px-10 w-full gap-6">
        <ColorEditors colors={colors} setColors={setColors} />

        <div className="bg-secondary-800 dark:bg-secondary-800 p-4 rounded-xl relative">
          <div className="absolute  h-full top-0 right-0 m-4">
            <div className="sticky top-20">
              <IconButton
                size={MainSizesEnum.lg}
                onClick={handleCopyConfig}
                color={justCopied ? ColorsEnum.success : ColorsEnum.primary}
              >
                {justCopied ? <TbCheck /> : <TbClipboard />}
              </IconButton>
            </div>
          </div>
          <pre>
            <SyntaxHighlighter language="typescript" style={theme}>
              {wholeConfig(colors)}
            </SyntaxHighlighter>
          </pre>
        </div>
      </section>
    </main>
  );
};

export default ThemeStudio;
