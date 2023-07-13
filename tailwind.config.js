/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#00BFA5",
          200: "#00A189",
          300: "#005F4B",
        },
        accent: {
          100: "#FF6F00",
          200: "#8D0000",
        },
      },
    },
  },
};
