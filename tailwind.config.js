/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        accent: '#6ABDE8',
        'accent-dark': '#4DA3D4',
        'accent-light': '#EAF5FB',
      },
    },
  },
  plugins: [],
}
