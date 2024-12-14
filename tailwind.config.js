/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grey: "#8091A7",
        blue: "#6576FF",
        dark: "#364A63",
      },
    },
  },
  plugins: [require("daisyui")],
};
