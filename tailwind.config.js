/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        h1: 45,
        h2: 40,
        h3: 35,
        h4: 30,
        h5: 20,
        h6: 10,
      },
      colors: {
        primary: "#f5db9a",
      },
      screens: {
        "max-sm": { max: "640px" },
        "max-md": { max: "768px" },
        "max-lg": { max: "1023px" },
        "o-md": { min: "0px", max: "767px" },
        "lg-sm": { min: "640px", max: "1023px" },
        "md-lg": { min: "768px", max: "1023px" },
        "lg-xl": { min: "1024px", max: "1279px" },
      },
      backgroundImage: {
        "hero-Image": "url('./src/assets/Land.jpg')",
        "About-Image": "url('./src/assets/Land1.jpg')",
      },
    },
  },
  plugins: [],
};
