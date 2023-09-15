/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: { 93: "450px", 97: "600px" },
    },
  },
  plugins: [],
};
