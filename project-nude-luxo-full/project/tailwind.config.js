/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    
    extend: {
      colors: {
        nudeLight: '#FFF8F2',
        nudeSoft: '#F1D5C7',
        nudeMedium: '#D9A796',
        nudeDark: '#8C5C4A',
        textDark: '#2A2A2A',
        pureWhite: '#FFFFFF'
      }
    },
,
  },
  plugins: [],
};
