/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      gray: {
        200: "#757575",
        100: "#F4F4F4",
      },
      blue: {
        600: "#C6D6E5",
      },

      extend: {},
    },
    plugins: [require("@tailwindcss/aspect-ratio")],
  },
};
