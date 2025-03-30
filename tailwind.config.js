/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette');

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        zentry: ["zentry", "sans-serif"],
        general: ["general", "sans-serif"],
        "circular-web": ["circular-web", "sans-serif"],
        "robert-medium": ["robert-medium", "sans-serif"],
        "robert-regular": ["robert-regular", "sans-serif"],
      },
      colors: {
        blue: {
          50: "#DFDFF0",
          75: "#dfdff2",
          100: "#F0F2FA",
          200: "#010101",
          300: "#4FB7DD",
        },
        violet: {
          300: "#5724ff",
        },
        yellow: {
          100: "#8e983f",
          300: "#edff66",
        },
      },
    },
  },
  // darkMode: 'class', // Enable dark mode (if desired)
  plugins: [
    // This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
    function addVariablesForColors({ addBase, theme }) {
      const allColors = flattenColorPalette(theme('colors'));
      const newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
      );

      addBase({
        ':root': newVars,
      });
    },
  ],
};







































// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       fontFamily: {
//         zentry: ["zentry", "sans-serif"],
//         general: ["general", "sans-serif"],
//         "circular-web": ["circular-web", "sans-serif"],
//         "robert-medium": ["robert-medium", "sans-serif"],
//         "robert-regular": ["robert-regular", "sans-serif"],
//       },
//       colors: {
//         blue: {
//           50: "#DFDFF0",
//           75: "#dfdff2",
//           100: "#F0F2FA",
//           200: "#010101",
//           300: "#4FB7DD",
//         },
//         violet: {
//           300: "#5724ff",
//         },
//         yellow: {
//           100: "#8e983f",
//           300: "#edff66",
//         },
//       },
//     },
//   },
//   plugins: [],
// };