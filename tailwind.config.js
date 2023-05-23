/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#FFCE07",
        overlay: "rgba(255,255,255, 0.3)",
      },
      textShadow: {
        "2xl":
          "1px 1px 5px rgba(0, 0, 0, 0.9  ), 2px 8px 5px rgba(0, 0, 0, .3)",
        "3xl": "0 0 3px rgba(0, 0, 0, .8), 0 0 5px rgba(0, 0, 0, .9)",
      },
      backgroundImage: {
        bg2: "url('/src/assets/bgLogin.svg')",
      },
      backgroundPosition: {
        left: "left:30",
      },
      keyframes: {
        wiggle: {
          " 100%": {
            transform: "scale(2)",
            opacity: 0,
          },
          20: {
            opacity: 0,
          },
          0: {
            opacity: 0,
          },
          "50%": { opacity: "0" },

          "10%": { opacity: "0.5" },
        },
      },
      animation: {
        wiggle: "wiggle 3s  infinite linear",
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
