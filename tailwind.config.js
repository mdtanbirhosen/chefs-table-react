/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui')],

  theme: {
    extend: {
      colors: {
        clifford: '#da373d',
        'primary-color': '#0BE58A'
      }
    }
  }

}

