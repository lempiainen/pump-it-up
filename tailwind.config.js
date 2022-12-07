/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'app-background': "url('/images/background.svg')"
      },
      fontFamily: {
        sans:['var(--font-raleway)', ...fontFamily.sans],
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: false,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
    themes: [
      {
        dark: {
        "primary": "#F9276D",
        "secondary": "#2CD3AE",
        "accent": "#1e40af",
        "neutral": "#268487",
        "base-content": "#fff",
        "base-100": "#141024",
        "info": "#e0f2fe",
        "success": "#36D399",
        "warning": "#facc15",
        "error": "#881337",
        },
      },
    ],
  },
}