/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

const createTypography = (
  fontSize,
  lineHeight,
  lgFontSize,
  lgLineHeight,
  fontWeight = "600",
  opacity = "100%"
) => ({
  fontSize,
  lineHeight,
  fontWeight,
  opacity,
  "@screen lg": {
    fontSize: lgFontSize,
    lineHeight: lgLineHeight,
  },
});

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        scroll: "scroll 40s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      colors: {
        royalBlue: "#2405F2",
        tintBlue: "#1C1E53",
        darkBlue: "#282938",
        secondaryHover: "#535460",
        yellow: "#FCD980",
        grey: "#F4F6FC",
        greyVariant: "#F4F5F5",
        white: "#FFFFFF",
        accent: "#EEF4FA",
        colorBlack: "#000000",
        colorBlue: "#2405F2",
        colorYellow: "#FCD980",
        colorWhite: "#FFFFFF",
        colorDark: "#1B1C2B",
        textButtonHover: "#585858",
        buttonHover: "#FDE4A6",
        linkDefault: "#BBBBCB",
      },
      fontFamily: {
        poppins: ["Poppins", "serif"],
      },
      fontSize: {
        "size-18": "18px",
      },
      borderRadius: {
        primary: "40px",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents }) {
      addBase({
        h1: createTypography("40px", "130%", "54px", "74px"),
        h2: createTypography("32px", "140%", "48px", "64px"),
        h3: createTypography("24px", "150%", "38px", "56px"),
        h4: createTypography("20px", "150%", "36px", "56px"),
        h5: createTypography("18px", "150%", "32px", "48px"),
        h6: createTypography("16px", "150%", "24px", "36px"),
        p: createTypography("16px", "150%", "16px", "28px", "500", "70%"),
      });
      addComponents({
        ".container": {
          "@apply max-w-7xl mx-auto px-4 lg:px-8": {},
        },
      });
    }),
  ],
};
