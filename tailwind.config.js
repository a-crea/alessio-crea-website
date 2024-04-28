/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./node_modules/flowbite.{js,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#38628a",
      },
      fontFamily: {
        primary: ["Inter"],
        mono: ["Space Mono"],
      },
    },
  },
  daisyui: {
    // base: false,
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#38628a",
        },
      },
    ],
  },
  plugins: [
    "@tailwindcss/forms",
    "@tailwindcss/container-queries",
    require("@tailwindcss/typography"),
    require("daisyui"),
  ],
};
