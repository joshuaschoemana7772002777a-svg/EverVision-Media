/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      colors: {
        accent: '#0047FF',
        'accent-dark': '#0038CC',
        'accent-light': '#EEF3FF',
      },
    },
  },
  plugins: [],
}
