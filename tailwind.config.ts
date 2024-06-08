import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        rainbow: {
          from: {
            backgroundImage:
              "linear-gradient(255deg,#facb0e,#f06ba8 30%,#78bae6 65%,#fff)",
          },
          to: {
            backgroundImage:
              "linear-gradient(255deg,#f06ba8,#facb0e 30%,#78bae6 65%,#fff)",
          },
        },
      },
      animation: {
        rainbow: "rainbow 5s linear infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        rainbow: "linear-gradient(255deg,#facb0e,#f06ba8 30%,#78bae6 65%,#fff)",
      },
    },
  },
  plugins: [],
};
export default config;
