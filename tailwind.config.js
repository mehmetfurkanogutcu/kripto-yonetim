/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "6rem",
    },
    colors: {
      white: "#fff",
      main: {
        primary: "#FE970F",
        secondary: "#2C3138",
        background: "#0C0E11",
      },
      functional: {
        error: "#FF2048",
        success: "#50D18D",
        info: "#0084FF",
        warning: "#F5B421",
      },
      gradient: {
        main: "bg-gradient-to-r from-[#D36320] to-[#F99111]",
        gray: "#50D18D",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
