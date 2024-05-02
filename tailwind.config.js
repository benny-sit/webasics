/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "open-sans": "var(--font-open-sans)",
        oswald: "var(--font-oswald)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "w-red": "#ea7373",
        "w-blue": "#82c6f4",
        "w-cream": "#f2f297",
        "w-cream-light": "#FCFCB2",
        "w-black": "#202020",
        "w-gray": "#868686",
      },
      animation: {
        "bounce-down-slow": "bounceDown 10s linear infinite alternate",
        "bounce-down-slow-d-3": "bounceDown 10s 3s linear infinite alternate",
        "bounce-down-slow-d-6": "bounceDown 10s 6s linear infinite alternate",
      },
      keyframes: {
        bounceDown: {
          "0%, 100%": {
            transform: "translateY(0)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(5%)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
      screens: {
        sm: "540px",
      },
    },
  },
  plugins: [],
};
