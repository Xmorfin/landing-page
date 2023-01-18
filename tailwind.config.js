/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      // you can configure the container to be centered
      center: true,

      // or have default horizontal padding
      padding: {
        DEFAULT: "1rem",
        lg: "6rem",
      },
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      heading: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        green: "#0DAD8E",
        grey: "#AEAEAE",
      },
    },
  },
  plugins: [],
};
