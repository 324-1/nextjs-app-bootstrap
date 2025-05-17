/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media', // Use user's OS preference for dark mode
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3b82f6',
          DEFAULT: '#2563eb',
          dark: '#1e40af',
        },
        background: {
          light: '#ffffff',
          dark: '#1f2937',
        },
      },
      fontFamily: {
        sans: ['"Roboto"', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};
