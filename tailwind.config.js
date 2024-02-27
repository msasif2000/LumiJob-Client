/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#2ecc71',
        accent: '#486DD9',
        accentTwo: '#718DE1',
        btnbg: '#000000',
        subheading: '#999999',
        light: '#fff',
      },
      fontFamily: {
        'heading': ['heading Grotesk', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
        "Macan": ['MacanPanWeb-Book', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui"),],
}