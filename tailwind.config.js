/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        mainBg: "#D20653",
        secondaryBg: "#D20653",

      },

      textColor: {
        customGray: "#323232",
        customPink: "#D20653"
      },
      boxShadow: {
        customShadow: "3px 5px 7px #00000017",
        secondaryShadow: "3px 5px 37px #00000017"
      }
    },
  },
  plugins: [],
}
