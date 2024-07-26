import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        hero: "url('https://www.nawy.com/_next/static/media/landing-background.edcd0e3d.webp')",
        homeBanner:
          "https://www.nawy.com/_next/static/media/sahel-banner.ccb6cc56.svg",
      },
      colors: {
        primary: "#015c9a",
        secondary: "#828282",
        gray: "#d1cfcf",
        link: "#00708a",
        placeholder: "rgb(228, 235, 242)",
        icons: "#012e36",
        orange: "#eb3902",
        error: "#eb3902",
      },
    },
  },
  plugins: [],
};
export default config;
