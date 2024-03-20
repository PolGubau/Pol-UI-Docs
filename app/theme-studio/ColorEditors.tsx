import { ThemeColors } from "pol-ui";
import React from "react";

const ColorEditors = ({
  colors,
  setColors,
}: {
  colors: ThemeColors;
  setColors: (color: ThemeColors) => void;
}) => {
  interface Preset {
    name: string;
    colors: ThemeColors;
  }

  const presets: Preset[] = [
    {
      name: "Pol-ui",
      colors: {
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
      },
    },
    {
      name: "Lime",
      colors: {
        primary: {
          50: "#edfee6",
          100: "#c6fab0",
          200: "#abf88a",
          300: "#84f554",
          400: "#6df333",
          500: "#48f000",
          600: "#42da00",
          700: "#33aa00",
          800: "#288400",
          900: "#1e6500",
        },
        secondary: {
          50: "#edf0f0",
          100: "#c8d1d0",
          200: "#adbab9",
          300: "#889b99",
          400: "#718885",
          500: "#4d6a67",
          600: "#46605e",
          700: "#374b49",
          800: "#2a3a39",
          900: "#202d2b",
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
      },
    },
    {
      name: "Classic",
      colors: {
        primary: {
          50: "#f4ebeb",
          100: "#ddc2c2",
          200: "#cca5a5",
          300: "#b57c7c",
          400: "#a76262",
          500: "#913b3b",
          600: "#843636",
          700: "#672a2a",
          800: "#502020",
          900: "#3d1919",
        },
        secondary: {
          50: "#efedf0",
          100: "#cec8d0",
          200: "#b7adb9",
          300: "#968898",
          400: "#817185",
          500: "#624d66",
          600: "#59465d",
          700: "#463748",
          800: "#362a38",
          900: "#29202b",
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
      },
    },
  ];

  const isPresetSelected = (preset: Preset) => {
    return JSON.stringify(preset.colors) === JSON.stringify(colors);
  };

  return (
    <article className="flex flex-col gap-4">
      <h2>Theme Studio</h2>

      <header className="grid lg:grid-cols-3 gap-4">
        {presets.map((preset) => (
          <button
            key={preset.name}
            onClick={() => setColors(preset.colors)}
            className={`relative  p-2 rounded-md overflow-hidden shadow-md  w-full text-center focus:shadow-none transition-all hover:shadow ${
              isPresetSelected(preset) ? "ring-4 ring-primary-500" : ""
            }`}
          >
            <span className="text-secondary-900 text-lg"> {preset.name}</span>

            <footer className="flex gap-4">
              <div className="flex flex-col text-sm flex-1">
                Primary
                <div
                  className="bg-secondary-500 rounded h-[20px] w-full flex justify-center "
                  style={{
                    backgroundImage: `linear-gradient(to right, ${Object.values(
                      preset.colors.primary
                    ).join(",")})`,
                  }}
                ></div>
              </div>
              <div className="flex flex-col text-sm">
                Secondary
                <div
                  className="bg-secondary-500 rounded h-[20px] w-full flex justify-center "
                  style={{
                    backgroundImage: `linear-gradient(to right, ${Object.values(
                      preset.colors.secondary
                    ).join(",")})`,
                  }}
                ></div>
              </div>
            </footer>
          </button>
        ))}
      </header>

      <section className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
        {Object.keys(colors).map((key) => {
          return (
            <div key={key} className="flex flex-col gap-1">
              <h3>{key}</h3>
              {Object.keys(colors[key]).map((key2) => (
                <div key={key2} className="grid grid-cols-[auto,1fr] gap-4">
                  <span className="w-fit min-w-[50px]">{key2}</span>
                  <input
                    className="w-full rounded-full outline-none border-none overflow-hidden bg-transparent"
                    type="color"
                    value={colors[key][key2]}
                    onChange={(e) =>
                      setColors({
                        ...colors,
                        [key]: {
                          ...colors[key],
                          [key2]: e.target.value,
                        },
                      })
                    }
                  />
                </div>
              ))}
            </div>
          );
        })}
      </section>
    </article>
  );
};

export default ColorEditors;
