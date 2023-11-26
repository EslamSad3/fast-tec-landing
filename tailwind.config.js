/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1330px",
    },
    extend: {
      fontFamily: {
        AcuminBdItPro: "AcuminBdItPro",
        AcuminBdPro: "AcuminBdPro",
        AcuminItPro: "AcuminItPro",
        AcuminRPro: "AcuminRPro",
      },
      colors: {
        primary: {
          100: "#d2d6db",
          200: "#a5acb6",
          300: "#788392",
          400: "#4b596d",
          500: "#1e3049",
          600: "#18263a",
          700: "#121d2c",
          800: "#0c131d",
          900: "#060a0f",
        },
        accent: {
          100: "#f9eed8",
          200: "#f4deb1",
          300: "#eecd89",
          400: "#e9bd62",
          500: "#e3ac3b",
          600: "#b68a2f",
          700: "#886723",
          800: "#5b4518",
          900: "#2d220c",
        },
        secondary: {
          100: "#d8e5f2",
          200: "#b1cbe5",
          300: "#8ab0d9",
          400: "#6396cc",
          500: "#3c7cbf",
          600: "#306399",
          700: "#244a73",
          800: "#18324c",
          900: "#0c1926",
        },
      },
      boxShadow: {
        custom1: "0px 2px 40px 0px rgba(8,70,,78,0.08)",
        custom2: "0px 0px 30px 0px rgba(8,73,81,0.06)",
      },
      backgroundImage: {
        services: "url(./assets/imgs/Fastteclogo(svg).svg)",
      },
    },
  },
  plugins: [],
};
