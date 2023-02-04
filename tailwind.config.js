/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        'primary-500': 'hsl(12, 88%, 59%)',
        'primary-300': 'hsl(12, 88%, 69%)',
        'primary-100': 'hsl(12, 88%, 95%)',
        'primary-50': 'hsl(13, 100%, 96%)',
        'blue-500': 'hsl(228, 39%, 23%)',
        'blue-700': 'hsl(233, 12%, 13%)',
        'gray-500': 'hsl(227, 12%, 61%)',
        'gray-300': 'hsl(0, 0%, 98%)',
      },
    },
  },
  plugins: [],
};
