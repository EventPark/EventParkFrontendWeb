import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#610037",
          light: "#B0809B",
          lighter: "#C099AF",
          lightest: "#efe5eb",
        },
        grey: {
          DEFAULT: "#666666",
          light: "#FAF9FB",
          background: "#F2F2F7",
          border: "#808080",
        },
        blue: {
          DEFAULT:"#2E90FA",
          dark: "#175CD3",
        },
      },
      letterSpacing: {
        standard: "-1.26px",
      },
      fontFamily: {
        rethink: ["Rethink Sans", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
export default config;
