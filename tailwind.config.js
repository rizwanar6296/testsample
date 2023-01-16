/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '900px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors:{
        socialBg:'#F5F7FB',
        socialBlue:'#218DFA',
      }
      
    },
  },
  plugins: [],
}