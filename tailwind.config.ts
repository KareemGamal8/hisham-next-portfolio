import type { Config } from "tailwindcss";

const config: Config = {
  plugins: [require("tailwindcss-animated")],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
      },
    },
    extend: {
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        blink: "blink 1s step-start infinite",
      },
      colors: {
        "black-rose": "#750A37",
        "violet-red": "#CB1E68",
        "ebony-clay": "#1c263d",
        cinder: "#0f0714",
        haiti: "#180b218c",
      },
      backgroundImage: {
        "text-background":
          "linear-gradient(to right, #CB1E68 61%, #1C263D 95%)",
        "home-background": "url('assets/images/home-background.webp')",
        "breadcrumb-background":
          "linear-gradient(360deg, #cb1e6800, #63082f42)",
      },
    },
    fontFamily: {
      roboto: ["Roboto"],
      edu: ["Edu AU VIC WA NT Hand"],
    },
  },
};
export default config;
