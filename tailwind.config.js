/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2a7c6f',
        'primary-dark': '#1f5e54',
        'primary-light': '#3a9e8e',
        accent: '#e8f4f1',
        warm: '#f5f0eb',
        text: '#1a2e2b',
        muted: '#4a6b66',
        teal: {
          light: '#a8dfd5',
          DEFAULT: '#2a7c6f',
          dark: '#1f5e54',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}