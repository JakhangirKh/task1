/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html,vue}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
       white: {
        100: '#FFFFFF',
        200: '#777E90',
        300: '#E6E8EC'
       },

       black: {
        100: "#23262F"
       },
       green: {
        100: '#45B26B'
       },
       blue: {
        100: '#3772FF',
        200: '#2C76FF',
        300: '#2767D6',
        400: '#2253C0',
        500: '#1D3F9B',
        600: '#1A3482',
        700: '#172B68',
        800: '#14224F',
        900: '#111936'
       }
     

      
      },
    },
  },
  plugins: [],
}

