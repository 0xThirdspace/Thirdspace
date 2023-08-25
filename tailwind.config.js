/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // screens: {
    //   'sm': {'min': '640px', 'max': '767px'},
    //   // => @media (min-width: 640px and max-width: 767px) { ... }

    //   'md': {'min': '768px', 'max': '1023px'},
    //   // => @media (min-width: 768px and max-width: 1023px) { ... }

    //   'lg': {'min': '1024px', 'max': '1279px'},
    //   // => @media (min-width: 1024px and max-width: 1279px) { ... }

    //   'xl': {'min': '1280px', 'max': '1535px'},
    //   // => @media (min-width: 1280px and max-width: 1535px) { ... }

    //   '2xl': {'min': '1536px'},
    //   // => @media (min-width: 1536px) { ... }
    // },
    extend: {
      colors: {
        "lg-1": "#FC8C02",
        "bl-1": "#0F0F0F",
        "roadmap": "4c3422"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "lg-2": "linear-gradient(89.56deg, #FC8C02 -42.7%, #5618FF 117.16%)",
        bRadius: "linear-gradient(89.56deg, #FC8C02 -42.7%, #5618FF 117.16%)",
      },

      fontFamily: {
        dmSans: ["Dm Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
